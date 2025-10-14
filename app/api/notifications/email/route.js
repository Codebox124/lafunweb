import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

// Send email notification to admin about new order
export async function POST(request) {
  try {
    const orderData = await request.json();
    
    // Initialize EmailJS
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    
    // Prepare email template parameters
    const templateParams = {
      to_email: 'Houseoflafun.co@gmail.com',
      to_name: 'LÁFÚN Admin',
      order_number: orderData.orderNumber,
      customer_name: `${orderData.customer.firstName} ${orderData.customer.lastName}`,
      customer_email: orderData.customer.email,
      customer_phone: orderData.customer.phone,
      delivery_location: orderData.delivery.location,
      custom_address: orderData.delivery.customAddress || 'N/A',
      order_items: orderData.items.map(item => 
        `${item.quantity}x ${item.name} @ ${item.currency}${item.price} each = ${item.currency}${(item.price * item.quantity).toLocaleString()}`
      ).join('\n'),
      subtotal: `₦${orderData.subtotal.toLocaleString()}`,
      delivery_fee: `₦${orderData.deliveryFee.toLocaleString()}`,
      total_amount: `₦${orderData.total.toLocaleString()}`,
      payment_method: orderData.payment.method,
      payment_status: orderData.payment.status,
      order_date: new Date(orderData.createdAt).toLocaleString('en-NG', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      order_status: orderData.status,
      admin_dashboard_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/admin`
    };

    // Send email using EmailJS
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('✅ Admin notification email sent:', result.text);
    
    return NextResponse.json({
      success: true,
      message: 'Admin notification sent successfully',
      emailId: result.text
    });

  } catch (error) {
    console.error('❌ Failed to send admin notification:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send admin notification',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
