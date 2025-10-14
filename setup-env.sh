#!/bin/bash

echo "🚀 LÁFÚN Backend Setup"
echo "====================="
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << 'ENVFILE'
# MongoDB Connection String
# Get this from MongoDB Atlas: https://www.mongodb.com/cloud/atlas
MONGODB_URI=mongodb://localhost:27017/lafun

# Paystack Keys
PAYSTACK_PUBLIC_KEY=pk_live_cfabb69ee22f69d494916efa2c70e198f464ef78
PAYSTACK_SECRET_KEY=your_secret_key_here

# Admin Password (Change this for security!)
ADMIN_PASSWORD=admin123

# EmailJS (for order notifications)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_w4i1im3
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_nrbhq1a
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=gt0sc5sFLclXr-haP

# Site URL (for email links)
NEXT_PUBLIC_SITE_URL=http://localhost:3001
ENVFILE
    echo "✅ .env.local created!"
else
    echo "⚠️  .env.local already exists. Skipping..."
fi

echo ""
echo "📋 Next Steps:"
echo "1. Sign up for MongoDB Atlas (FREE): https://www.mongodb.com/cloud/atlas"
echo "2. Create a cluster and get your connection string"
echo "3. Edit .env.local and add your MONGODB_URI"
echo "4. Get your Paystack secret key from: https://dashboard.paystack.com/#/settings/developers"
echo "5. Add PAYSTACK_SECRET_KEY to .env.local"
echo "6. Restart the dev server: npm run dev"
echo ""
echo "🎉 Setup complete! Check BACKEND_SETUP.md for full documentation."
