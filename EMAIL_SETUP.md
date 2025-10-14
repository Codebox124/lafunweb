# 📧 Email Notification Setup Guide

## ✅ What's Been Added

Your LÁFÚN website now has **automatic email notifications** that send detailed order information to `Houseoflafun.co@gmail.com` every time a customer places an order.

## 📋 Email Template Setup

### 1. EmailJS Template Configuration

You need to create an email template in your EmailJS dashboard:

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/admin/templates
2. **Create New Template** or **Edit Existing Template**
3. **Use this template content**:

```html
Subject: 🍽️ New Order #{{order_number}} - LÁFÚN Restaurant

Hello {{to_name}},

You have received a new order from LÁFÚN Restaurant!

📋 ORDER DETAILS
================
Order Number: {{order_number}}
Order Date: {{order_date}}
Order Status: {{order_status}}

👤 CUSTOMER INFORMATION
=======================
Name: {{customer_name}}
Email: {{customer_email}}
Phone: {{customer_phone}}

📍 DELIVERY ADDRESS
==================
Location: {{delivery_location}}
Custom Address: {{custom_address}}

🛒 ORDER ITEMS
==============
{{order_items}}

💰 ORDER SUMMARY
================
Subtotal: {{subtotal}}
Delivery Fee: {{delivery_fee}}
Total Amount: {{total_amount}}

💳 PAYMENT INFORMATION
=====================
Method: {{payment_method}}
Status: {{payment_status}}

🔗 ADMIN DASHBOARD
==================
Manage this order: {{admin_dashboard_url}}

---
LÁFÚN Restaurant
Delicious Food, Delivered Fast! 🚀
```

### 2. Template Variables

Make sure your EmailJS template includes these variables:
- `{{to_email}}` - Recipient email (Houseoflafun.co@gmail.com)
- `{{to_name}}` - Recipient name (LÁFÚN Admin)
- `{{order_number}}` - Order number (e.g., LF25010812345)
- `{{customer_name}}` - Customer full name
- `{{customer_email}}` - Customer email
- `{{customer_phone}}` - Customer phone
- `{{delivery_location}}` - Delivery location
- `{{custom_address}}` - Custom address if provided
- `{{order_items}}` - Formatted list of items
- `{{subtotal}}` - Order subtotal
- `{{delivery_fee}}` - Delivery fee
- `{{total_amount}}` - Total amount
- `{{payment_method}}` - Payment method
- `{{payment_status}}` - Payment status
- `{{order_date}}` - Order date and time
- `{{order_status}}` - Current order status
- `{{admin_dashboard_url}}` - Link to admin dashboard

## 🔧 Configuration

### Environment Variables

Your `.env.local` file should include:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_w4i1im3
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_nrbhq1a
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=gt0sc5sFLclXr-haP

# Site URL for email links
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

### EmailJS Service Setup

1. **Service ID**: `service_w4i1im3` (already configured)
2. **Template ID**: `template_nrbhq1a` (update this to your new template)
3. **Public Key**: `gt0sc5sFLclXr-haP` (already configured)

## 🚀 How It Works

1. **Customer places order** → Checkout page
2. **Payment successful** → Order saved to database
3. **Email notification sent** → Admin receives detailed email
4. **Admin manages order** → Via admin dashboard

## 📧 Email Features

- **Automatic sending** - No manual intervention needed
- **Detailed information** - Complete order and customer details
- **Professional formatting** - Clean, easy-to-read layout
- **Admin dashboard link** - Direct access to manage orders
- **Error handling** - Order creation continues even if email fails

## 🔍 Testing

To test the email system:

1. Place a test order through your checkout page
2. Check `Houseoflafun.co@gmail.com` for the notification
3. Verify all order details are included
4. Click the admin dashboard link to manage the order

## 🛠️ Troubleshooting

### "Email not sending"
- Check EmailJS service configuration
- Verify template ID matches your EmailJS template
- Check console logs for error messages

### "Template variables not working"
- Ensure all variables are included in your EmailJS template
- Check variable names match exactly (case-sensitive)

### "Email goes to spam"
- Add `Houseoflafun.co@gmail.com` to your contacts
- Check spam folder
- Consider using a professional email service for production

---

## 📞 Support

If you need help with EmailJS setup:
- EmailJS Documentation: https://www.emailjs.com/docs
- EmailJS Dashboard: https://dashboard.emailjs.com

Your email notification system is now ready! 🎉
