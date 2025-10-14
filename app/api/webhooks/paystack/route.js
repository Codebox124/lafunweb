import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import crypto from 'crypto';

// Paystack webhook handler
export async function POST(request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-paystack-signature');

    // Verify webhook signature
    const secret = process.env.PAYSTACK_SECRET_KEY;
    const hash = crypto.createHmac('sha512', secret).update(body).digest('hex');

    if (hash !== signature) {
      return NextResponse.json(
        { success: false, error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const event = JSON.parse(body);

    // Handle charge.success event
    if (event.event === 'charge.success') {
      await connectDB();

      const { reference, amount, customer } = event.data;

      // Find order by payment reference
      const order = await Order.findOne({ 'payment.reference': reference });

      if (order) {
        // Update payment status
        order.payment.status = 'paid';
        order.payment.paidAt = new Date();
        order.status = 'confirmed';

        await order.save();

        console.log(`Order ${order.orderNumber} payment confirmed`);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

