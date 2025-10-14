"use client";

import { useState } from "react";
import { useOverContext } from "../OverContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// Dynamically import PaystackButton to avoid SSR issues
const PaystackButton = dynamic(
  () => import('react-paystack').then(mod => ({ default: mod.PaystackButton })),
  {
    ssr: false,
    loading: () => (
      <button className="w-full cursor-pointer bg-gray-400 text-white font-semibold py-3 rounded-xl">
        Loading Payment...
      </button>
    )
  }
);

export default function Page() {
  const form = useRef();
  const { cart, formData, setFormData, total } = useOverContext();
  const [showSuccess, setShowSuccess] = useState(false)
  const [timeToSendMail, setTimeToSendMail] = useState(false)
  const [orderInfo, setOrderInfo] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showError, setShowError] = useState(false)
   //const publicKey = process.env.PAYSTACK_PUBLIC_KEY
   const config = {
    reference: (new Date()).getTime().toString(),
    email: formData.email,
    amount: (total+1500)*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_live_cfabb69ee22f69d494916efa2c70e198f464ef78'
  };

  const handlePaystackSuccessAction = async (reference) => {
      // Save order to database
      try {
        setTimeToSendMail(true)
        
        // Prepare order data
        const orderData = {
          customer: {
            firstName: formData.first_name,
            lastName: formData.last_name,
            email: formData.email,
            phone: formData.phone,
          },
          delivery: {
            location: formData.location !== "Other (Not Listed)" ? formData.location : formData.customAddress,
            customAddress: formData.location === "Other (Not Listed)" ? formData.customAddress : '',
            fee: 1500,
          },
          items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            currency: item.currency,
            image: item.image,
            selectedProtein: item.selectedProtein,
          })),
          subtotal: total,
          deliveryFee: 1500,
          total: total + 1500,
          payment: {
            method: 'paystack',
            reference: reference.reference,
            status: 'paid',
          },
        };

        // Save to database
        const response = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData),
        });

        const result = await response.json();
        
        if (result.success) {
          console.log('Order saved:', result.order.orderNumber);
          
          // Prepare email data
          let cartmail = []
          cart.forEach(item=>{
            cartmail.push(`${item.quantity}x ${item.name} @${item.currency}${item.price * item.quantity}`)
          })
          cartmail = cartmail.join("||")
         
          setOrderInfo(`Order #${result.order.orderNumber} | Cart:${cartmail}, Name:${formData.first_name} ${formData.last_name}, Email:${formData.email}, Number:${formData.phone}, Location:${(formData.location!="Other (Not Listed)"?formData.location:formData.customAddress)}`)
        }
      } catch (error) {
        console.error('Error saving order:', error);
        // Still proceed with email even if database save fails
        setTimeToSendMail(true)
        let cartmail = []
        cart.forEach(item=>{
          cartmail.push(`${item.quantity}x ${item.name} @${item.currency}${item.price * item.quantity}`)
        })
        cartmail = cartmail.join("||")
       
        setOrderInfo(`Cart:${cartmail}, Name:${formData.first_name} ${formData.last_name}, Email:${formData.email}, Number:${formData.phone}, Location:${(formData.location!="Other (Not Listed)"?formData.location:formData.customAddress)}`)
      }
    };

    const handlePaystackCloseAction = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, cart });
    // Later you’ll integrate Paystack/Flutterwave here
  };*/

  const sendEmail = (e) => {

    
    
   e.preventDefault();
      setIsLoading(true)
    emailjs
      .sendForm('service_w4i1im3', 'template_nrbhq1a', form.current, {
        publicKey: 'gt0sc5sFLclXr-haP',
      })
      .then(
        () => {
          setIsLoading(false)
          setShowSuccess(true)
          console.log('SUCCESS!');
        },
        (error) => {
          setIsLoading(false)
          setShowError(true)
          console.log('FAILED...', error.text);
        },
      );
  };

  const locations = [
    {
      group: "Central Osogbo",
      areas: [
        { name: "Central Osogbo", price: "₦1,500" },
        { name: "Agunbelewo", price: "₦1,500" },
        { name: "Olaiya", price: "₦1,500" },
        { name: "Alekuwodo", price: "₦1,500" },
        { name: "Old Garage", price: "₦1,500" },
        { name: "Oke-Fia", price: "₦1,500" },
        { name: "Aiyetoro", price: "₦1,500" },
        { name: "Testing Ground", price: "₦1,500" },
        { name: "Ita-Olokan", price: "₦1,500" },
        { name: "Odi-Olowo", price: "₦1,500" },
        { name: "Fakunle", price: "₦1,500" },
        { name: "Isale Aro", price: "₦1,500" },
        { name: "Isale Osun", price: "₦1,500" },
        { name: "Igbona", price: "₦1,500" },
        { name: "Powerline", price: "₦1,500" },
        { name: "Oke Onitea", price: "₦1,500" },
      ],
    },
    {
      group: "Residential Estates",
      areas: [
        { name: "Dada Estate", price: "₦1,500" },
        { name: "Alekuwodo Estate", price: "₦1,500" },
        { name: "Ogo-Oluwa", price: "₦1,500" },
        { name: "Osogbo GRA", price: "₦1,500" },
        { name: "Stadium Area", price: "₦1,500" },
      ],
    },
    {
      group: "Outskirts / Extended",
      areas: [
        { name: "Ota-Efun", price: "₦1,500" },
        { name: "Ring Road", price: "₦1,500" },
        { name: "Ilesa Garage axis", price: "₦1,500" },
        { name: "Oke-Baale Extension", price: "₦1,500" },
        { name: "Ido-Osun axis", price: "₦1,500" },
        { name: "Owode-Ede (Osogbo border)", price: "₦1,500" },
        { name: "Ofatedo", price: "₦1,500" },
        { name: "Abere/Secretariat", price: "₦1,500" },
      ],
    },
    {
      group: "Other",
      areas: [{ name: "Other (Not Listed)", price: "₦1,500" }],
    },
  ];



 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {(cart.length > 0 && !showSuccess && !isLoading) ? (
        <div className="w-full max-w-2xl relative z-10">
          {/* Modern glassmorphism card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] p-10 border border-white/20 shadow-2xl">
              
              {/* Cart Section - Modern */}
              <div className="mb-10">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MdOutlineShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  Your Order
                </h3>
                <div className="bg-white/5 border border-white/20 rounded-3xl p-6 backdrop-blur-sm space-y-3">
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-white py-3 border-b border-white/10 last:border-0">
                      <span className="font-medium">
                        <span className="text-red-400 font-black">{item.quantity}x</span> {item.name}
                      </span>
                      <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                        {item.currency}{item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 text-center tracking-tighter">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-500">
                    Checkout
                  </span>
                </h2>
                <p className="text-gray-300 text-center text-lg leading-relaxed">
                  {
                    !timeToSendMail
                      ? "Complete your details to finalize your order"
                      : "Please do not refresh or leave this page. Click the button below to finalize your order"
                  }
                </p>
                {showError && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl">
                    <p className="text-red-400 text-center font-semibold">
                      Failed to finalize order, please try again
                    </p>
                  </div>
                )}
              </div>

          {
            !timeToSendMail?
            <form onSubmit={(e)=>{e.preventDefault();}} className="space-y-6">
            
            {/* Name Fields - Side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first_name" className="block text-sm font-bold text-white mb-3">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:border-red-500 focus:bg-white/10 focus:outline-none transition-all backdrop-blur-sm hover:border-white/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="last_name" className="block text-sm font-bold text-white mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:border-red-500 focus:bg-white/10 focus:outline-none transition-all backdrop-blur-sm hover:border-white/30"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-white mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:border-red-500 focus:bg-white/10 focus:outline-none transition-all backdrop-blur-sm hover:border-white/30"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-white mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 801 234 5678"
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:border-red-500 focus:bg-white/10 focus:outline-none transition-all backdrop-blur-sm hover:border-white/30"
                required
              />
            </div>

            {/* Location Dropdown */}
            <div>
              <label htmlFor="location" className="block text-sm font-bold text-white mb-3">
                Delivery Location
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white focus:border-red-500 focus:bg-white/10 focus:outline-none transition-all backdrop-blur-sm hover:border-white/30 cursor-pointer"
                required
              >
                <option value="" disabled>
                  Select your location
                </option>
                {locations.map((group) => (
                  <optgroup key={group.group} label={group.group}>
                    {group.areas.map((area) => (
                      <option key={area.name} value={area.name}>
                        {area.name} – {area.price}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Custom Address (Conditional) */}
            {formData.location === "Other (Not Listed)" && (
              <div>
                <label htmlFor="customAddress" className="block text-sm font-bold text-white mb-3">
                  Your Exact Location
                </label>
                <textarea
                  id="customAddress"
                  name="customAddress"
                  value={formData.customAddress}
                  onChange={handleChange}
                  placeholder="Enter your detailed delivery address..."
                  className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:border-red-500 focus:bg-white/10 focus:outline-none transition-all resize-none backdrop-blur-sm hover:border-white/30"
                  rows="4"
                  required
                />
              </div>
            )}

            {/* Submit Button - Ultra Modern */}
            <PaystackButton
            
            disabled={!(formData.first_name && formData.last_name && formData.email && formData.phone && (formData.location || formData.customAddress))}
            className="group relative w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-size-200 hover:bg-right-bottom text-white font-black py-5 rounded-2xl transition-all duration-500 shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:-translate-y-1 hover:scale-105 overflow-hidden"
            {...componentProps}
            text="Make Payment 💳"
            />
            
          </form>:
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6"> 
            <input type="text" className="hidden" name="name" id="name" value={`${formData.first_name} ${formData.last_name}`} />    
            <textarea value={orderInfo} className="hidden" name="message" id="message" readOnly />

            <button type="submit" className="group relative w-full cursor-pointer bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-size-200 hover:bg-right-bottom text-white font-black py-5 rounded-2xl transition-all duration-500 shadow-2xl shadow-green-600/40 hover:shadow-green-600/60 hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <FaCircleCheck className="w-5 h-5" />
                Finalize Order
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </form>
          }
            </div>
          </div>
        </div>
      ) : 
      (cart.length>0 && isLoading)? 
      <div className="w-full flex flex-col items-center justify-center text-center max-w-lg relative z-10">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-[3rem] blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/20 flex flex-col items-center">
            <p className="text-white mb-8 text-xl font-bold">Processing your order...</p>
            <AiOutlineLoading3Quarters className="animate-spin text-red-500 w-16 h-16" />
          </div>
        </div>
      </div>:
      (cart.length > 0 && showSuccess)?
      <div className="w-full max-w-lg relative z-10">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-[3rem] blur-2xl animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/20 flex flex-col items-center text-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
              <FaCircleCheck className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-black text-white">Order Placed!</h1>
            <p className="text-gray-300 text-lg leading-relaxed">Your order has been successfully placed. We'll get started on it right away!</p>
            <Link
              href="/"
              className="mt-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-black py-4 px-10 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>:
      (
        <div className="w-full max-w-lg relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-[3rem] blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/20 flex flex-col items-center text-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center border border-white/20">
                <MdOutlineShoppingCart className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="text-3xl font-black text-white">Cart is Empty</h2>
              <p className="text-gray-400 text-lg">Add some delicious items to your cart first!</p>
              <Link
                href="/#menu"
                className="mt-4 group relative bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-size-200 hover:bg-right-bottom text-white font-black py-4 px-10 rounded-2xl transition-all duration-500 shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Browse Menu</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
