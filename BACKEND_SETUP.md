# 🚀 LÁFÚN Backend Setup Guide

## ✅ What's Been Built

Your LÁFÚN website now has a **complete backend system** with:

1. **MongoDB Database** - Store all orders and customer data
2. **Order Management API** - RESTful API for managing orders
3. **Admin Dashboard** - View and manage all orders in real-time
4. **Paystack Integration** - Automatic order creation on successful payment
5. **Customer Management** - Track customer history and preferences
6. **Email Notifications** - Automatic admin notifications for every order

---

## 📋 Setup Instructions

### 1. Create MongoDB Database (FREE)

1. Go to **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
2. Click **"Try Free"** and create an account
3. Create a **FREE cluster** (M0 Sandbox - 512MB storage)
4. Click **"Connect"** → **"Connect your application"**
5. Copy your connection string (looks like: `mongodb+srv://username:password@cluster...`)

### 2. Configure Environment Variables

1. Create a `.env.local` file in your project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb+srv://your-connection-string-here
   PAYSTACK_SECRET_KEY=your_paystack_secret_key
   ADMIN_PASSWORD=your_admin_password
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_w4i1im3
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_nrbhq1a
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=gt0sc5sFLclXr-haP
   NEXT_PUBLIC_SITE_URL=http://localhost:3001
   ```

### 3. Restart Your Development Server

```bash
npm run dev
```

---

## 🎯 Features & Endpoints

### API Routes

#### **Orders**
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders (with filters)
- `GET /api/orders/[id]` - Get single order
- `PATCH /api/orders/[id]` - Update order status
- `DELETE /api/orders/[id]` - Delete order

#### **Webhooks**
- `POST /api/webhooks/paystack` - Handle Paystack payment confirmations

#### **Notifications**
- `POST /api/notifications/email` - Send admin email notifications

### Admin Dashboard

Access at: **http://localhost:3000/admin**

**Features:**
- 📊 Real-time statistics (Total orders, Revenue, Status breakdown)
- 📋 View all orders in a table
- 🔄 Update order status (Pending → Confirmed → Preparing → Ready → Out for Delivery → Delivered)
- 🔍 Filter orders by status
- 👥 View customer details
- 📱 See order items and delivery info

---

## 🎨 Order Workflow

1. **Customer places order** → Checkout page
2. **Payment made via Paystack** → Order saved to database
3. **Email notification sent** → Admin receives detailed email at Houseoflafun.co@gmail.com
4. **Admin receives notification** → View in admin dashboard
5. **Admin updates status** → Confirmed → Preparing → Ready → Out for Delivery
6. **Order delivered** → Status updated to Delivered
7. **Customer stats updated** → Total orders & revenue tracked

---

## 🔐 Paystack Webhook Setup (Production)

When you deploy to production:

1. Go to **Paystack Dashboard**: https://dashboard.paystack.com/#/settings/webhooks
2. Add your webhook URL: `https://yourdomain.com/api/webhooks/paystack`
3. The webhook will automatically update order status when payments are confirmed

---

## 📊 Database Models

### Order Model
```javascript
{
  orderNumber: "LF250108XXXX",  // Auto-generated
  customer: {
    firstName, lastName, email, phone
  },
  delivery: {
    location, customAddress, fee
  },
  items: [{ name, quantity, price, image }],
  subtotal, deliveryFee, total,
  payment: {
    method, status, reference, paidAt
  },
  status: "pending" | "confirmed" | "preparing" | ...
  createdAt, updatedAt
}
```

### Customer Model
```javascript
{
  firstName, lastName, email, phone,
  addresses: [{ location, customAddress, isDefault }],
  totalOrders, totalSpent, lastOrderDate,
  createdAt, updatedAt
}
```

---

## 🔒 Security Notes

- MongoDB connection is cached to prevent connection leaks
- Environment variables keep sensitive data secure
- Admin dashboard should be password-protected (recommended)
- Paystack webhooks are signature-verified

---

## 🆘 Troubleshooting

### "Cannot connect to MongoDB"
- Check your `MONGODB_URI` in `.env.local`
- Make sure your IP is whitelisted in MongoDB Atlas
- Network Access → Add IP Address → Allow access from anywhere (0.0.0.0/0)

### "Orders not saving"
- Check console for errors
- Verify MongoDB connection
- Check API route logs

---

## 🚀 Next Steps (Optional)

1. **Add SMS notifications** (Termii/Twilio)
2. **Email notifications to admin** on new orders
3. **Customer order tracking page**
4. **Analytics dashboard** with charts
5. **Export orders to CSV/Excel**
6. **Inventory management**

---

Your backend is now ready to use! 🎉

