import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import Customer from '@/models/Customer';

// GET all orders (for admin)
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit')) || 50;
    const page = parseInt(searchParams.get('page')) || 1;

    const query = status ? { status } : {};

    const orders = await Order.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit);

    const total = await Order.countDocuments(query);

    return NextResponse.json({
      success: true,
      orders,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get orders error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// POST - Create new order
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { customer, delivery, items, subtotal, deliveryFee, total, payment } = body;

    // Validate required fields
    if (!customer || !delivery || !items || !items.length) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create or update customer
    let customerDoc = await Customer.findOne({ email: customer.email });
    
    if (customerDoc) {
      // Update existing customer
      customerDoc.firstName = customer.firstName;
      customerDoc.lastName = customer.lastName;
      customerDoc.phone = customer.phone;
      
      // Add address if not exists
      const addressExists = customerDoc.addresses.some(
        addr => addr.location === delivery.location
      );
      
      if (!addressExists && delivery.location) {
        customerDoc.addresses.push({
          location: delivery.location,
          customAddress: delivery.customAddress,
          isDefault: customerDoc.addresses.length === 0,
        });
      }
      
      await customerDoc.save();
    } else {
      // Create new customer
      customerDoc = await Customer.create({
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        phone: customer.phone,
        addresses: [
          {
            location: delivery.location,
            customAddress: delivery.customAddress,
            isDefault: true,
          },
        ],
      });
    }

    // Create order
    const order = await Order.create({
      customer: {
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        phone: customer.phone,
      },
      delivery: {
        location: delivery.location,
        customAddress: delivery.customAddress,
        fee: deliveryFee,
      },
      items,
      subtotal,
      deliveryFee,
      total,
      payment: {
        method: payment?.method || 'paystack',
        reference: payment?.reference,
        status: 'pending',
      },
    });

    // Send admin notification email
    try {
      const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'}/api/notifications/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });
      
      const emailResult = await emailResponse.json();
      if (emailResult.success) {
        console.log('✅ Admin notification sent for order:', order.orderNumber);
      } else {
        console.warn('⚠️ Failed to send admin notification:', emailResult.error);
      }
    } catch (emailError) {
      console.error('❌ Email notification error:', emailError);
      // Don't fail the order creation if email fails
    }

    return NextResponse.json({
      success: true,
      order,
      message: 'Order created successfully',
    });
  } catch (error) {
    console.error('Create order error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

