import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

// Track order by order number and email
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const orderNumber = searchParams.get('orderNumber');
    const email = searchParams.get('email');

    if (!orderNumber || !email) {
      return NextResponse.json(
        { success: false, error: 'Order number and email are required' },
        { status: 400 }
      );
    }

    const order = await Order.findOne({
      orderNumber: orderNumber.toUpperCase(),
      'customer.email': email.toLowerCase(),
    });

    if (!order) {
      return NextResponse.json(
        { success: false, error: 'Order not found. Please check your details.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error('Track order error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

