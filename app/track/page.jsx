"use client";

import { useState } from 'react';
import { Search, Package, Clock, CheckCircle, Truck, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function TrackOrder() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const trackOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setOrder(null);

    try {
      const response = await fetch(`/api/orders/track?orderNumber=${orderNumber}&email=${email}`);
      const data = await response.json();

      if (data.success) {
        setOrder(data.order);
      } else {
        setError(data.error || 'Order not found. Please check your details.');
      }
    } catch (err) {
      setError('Failed to track order. Please try again.');
    }
    setLoading(false);
  };

  const getStatusStep = (status) => {
    const steps = ['pending', 'confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered'];
    return steps.indexOf(status) + 1;
  };

  const statusSteps = [
    { key: 'pending', label: 'Order Placed', icon: Package },
    { key: 'confirmed', label: 'Confirmed', icon: CheckCircle },
    { key: 'preparing', label: 'Preparing', icon: Clock },
    { key: 'ready', label: 'Ready', icon: CheckCircle },
    { key: 'out_for_delivery', label: 'Out for Delivery', icon: Truck },
    { key: 'delivered', label: 'Delivered', icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-6 pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-8">
            <img src="/logo.png" alt="LÁFÚN" className="w-40 mx-auto hover:scale-105 transition-transform" />
          </Link>
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Track Your Order
          </h1>
          <p className="text-gray-400 text-lg">Enter your order details to see the status</p>
        </div>

        {/* Search Form */}
        <div className="relative group mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-[3rem] blur-2xl opacity-50"></div>
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] p-8 border border-white/20">
            <form onSubmit={trackOrder} className="space-y-6">
              <div>
                <label htmlFor="orderNumber" className="block text-white text-sm font-bold mb-3">
                  Order Number
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g. LF25010812345"
                  className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:border-red-500 focus:bg-white/10 focus:outline-none transition-all backdrop-blur-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white text-sm font-bold mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:border-red-500 focus:bg-white/10 focus:outline-none transition-all backdrop-blur-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-size-200 hover:bg-right-bottom text-white font-black py-5 rounded-2xl transition-all duration-500 shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:-translate-y-1 disabled:opacity-50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Search className="w-5 h-5" />
                  {loading ? 'Searching...' : 'Track Order'}
                </span>
              </button>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl">
                <p className="text-red-400 text-center font-semibold">{error}</p>
              </div>
            )}
          </div>
        </div>

        {/* Order Details */}
        {order && (
          <div className="space-y-6">
            {/* Order Info Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-[3rem] blur-2xl opacity-50"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] p-8 border border-white/20">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-black text-white mb-2">Order #{order.orderNumber}</h2>
                    <p className="text-gray-400">
                      Placed on {new Date(order.createdAt).toLocaleDateString('en-NG', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm mb-1">Total Amount</p>
                    <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                      ₦{order.total.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Status Timeline */}
                <div className="mb-8">
                  <h3 className="text-xl font-black text-white mb-6">Order Status</h3>
                  <div className="relative">
                    <div className="flex justify-between">
                      {statusSteps.map((step, index) => {
                        const Icon = step.icon;
                        const currentStep = getStatusStep(order.status);
                        const isCompleted = index < currentStep;
                        const isCurrent = index + 1 === currentStep;

                        return (
                          <div key={step.key} className="flex flex-col items-center flex-1">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all ${
                              isCompleted || isCurrent
                                ? 'bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg'
                                : 'bg-white/10 border border-white/20'
                            }`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <p className={`text-xs text-center font-bold ${
                              isCompleted || isCurrent ? 'text-white' : 'text-gray-500'
                            }`}>
                              {step.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    {/* Progress line */}
                    <div className="absolute top-6 left-0 right-0 h-1 bg-white/10 -z-10">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                        style={{ width: `${((getStatusStep(order.status) - 1) / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Customer & Delivery Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h4 className="font-black text-white mb-4 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-red-500" />
                      Customer Info
                    </h4>
                    <p className="text-gray-300 mb-1">{order.customer.firstName} {order.customer.lastName}</p>
                    <p className="text-gray-400 text-sm">{order.customer.phone}</p>
                    <p className="text-gray-400 text-sm">{order.customer.email}</p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h4 className="font-black text-white mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      Delivery Address
                    </h4>
                    <p className="text-gray-300">{order.delivery.location}</p>
                    {order.delivery.customAddress && (
                      <p className="text-gray-400 text-sm mt-1">{order.delivery.customAddress}</p>
                    )}
                    <p className="text-gray-500 text-sm mt-2">Fee: ₦{order.delivery.fee.toLocaleString()}</p>
                  </div>
                </div>

                {/* Order Items */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="font-black text-white mb-4">Order Items</h4>
                  <div className="space-y-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                        <div className="flex items-center gap-4">
                          {item.image && (
                            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                          )}
                          <div>
                            <p className="font-bold text-white">{item.quantity}x {item.name}</p>
                            {item.selectedProtein && (
                              <p className="text-xs text-gray-400">Protein: {item.selectedProtein}</p>
                            )}
                          </div>
                        </div>
                        <p className="font-black text-red-400">
                          {item.currency}{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="font-bold text-white">₦{order.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-400">Delivery Fee</span>
                      <span className="font-bold text-white">₦{order.deliveryFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-black text-white">Total</span>
                      <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                        ₦{order.total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white font-black py-4 px-10 rounded-2xl hover:scale-105 transition-all shadow-xl"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

