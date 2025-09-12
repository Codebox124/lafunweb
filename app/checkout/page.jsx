"use client";

import { useState } from "react";
import { useOverContext } from "../OverContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";

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
  const { cart, formData, setFormData, total } = useOverContext();
  const [showSuccess, setShowSuccess] = useState(false)
  const [timeToSendMail, setTimeToSendMail] = useState(false)
  const [orderInfo, setOrderInfo] = useState("")
   //const publicKey = process.env.PAYSTACK_PUBLIC_KEY
   const config = {
    reference: (new Date()).getTime().toString(),
    email: formData.email,
    amount: (total+1500)*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_fe3583fb926e99e617dcf94997f7daf89c66314d'
  };

  const handlePaystackSuccessAction = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      //console.log(reference, cart);
      //setShowSuccess(true)
      setTimeToSendMail(true)
      let cartmail = []
      cart.forEach(item=>{
        cartmail.push(`${item.quantity}x ${item.name} @${item.currency}${item.price * item.quantity}`)
      })
      cartmail = cartmail.join("||")
      /*console.log("name:", formData.first_name, formData.last_name)
      console.log("email:" , formData.email)
      console.log("Number:", formData.phone)
      console.log("Location:", (formData.location!="Other (Not Listed)"?formData.location:formData.customAddress))*/
      setOrderInfo(`Cart:${cartmail}, Name:${formData.first_name} ${formData.last_name}, Email:${formData.email}, Number:${formData.phone}, Location:${(formData.location!="Other (Not Listed)"?formData.location:formData.customAddress)}`)
      console.log(orderInfo)
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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      {(cart.length > 0 && !showSuccess) ? (
        <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 transform transition-all duration-300 hover:shadow-xl">
          {/* Cart Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Your Cart</h3>
            <ul className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-2">
              {cart.map((item, index) => (
                <li key={index} className="text-black text-sm">
                  {item.quantity}x {item.name} @{item.currency}{item.price * item.quantity}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl font-extrabold text-black mb-3 text-center tracking-tight">
            Checkout
          </h2>
          <p className="text-black text-center mb-8 text-lg">
            {
              !timeToSendMail?"Please provide your details to complete your waitlist registration.":
              "Please do not refresh or leave this page. Click the button below to finalize your order"
            }
          </p>

          {
            !timeToSendMail?
            <form onSubmit={(e)=>{e.preventDefault();}}/*onSubmit={handleSubmit}*/ className="space-y-6">
            
            {/* First Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-black mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 ease-in-out"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-black mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 ease-in-out"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-black mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 ease-in-out"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-black mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +234 801 234 5678"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 ease-in-out"
                required
              />
            </div>

            {/* Location Dropdown */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-semibold text-black mb-2"
              >
                Location
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 ease-in-out"
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
                <label
                  htmlFor="customAddress"
                  className="block text-sm font-semibold text-black mb-2"
                >
                  Please type your exact location
                </label>
                <textarea
                  id="customAddress"
                  name="customAddress"
                  value={formData.customAddress}
                  onChange={handleChange}
                  placeholder="Enter your delivery address"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-black focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none transition-all duration-200 ease-in-out resize-none"
                  rows="4"
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <PaystackButton
            
            disabled={!(formData.first_name && formData.last_name && formData.email && formData.phone && (formData.location || formData.customAddress))}
            className="w-full cursor-pointer disabled:bg-gray-600 disabled:bg-none bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-3 rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            {...componentProps}
            text="Make Payment"
            />
            
          </form>:
          
          <form target="_blank" action="https://formsubmit.co/houseoflafun.co@gmail.com" method="POST">     
            <textarea value={orderInfo} className="text-black hidden" name="message" id="message" />

            <button type="submit" className="w-full cursor-pointer disabled:bg-gray-600 disabled:bg-none bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-3 rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Finish Order</button>
          </form>
          }
        </div>
      ) : 
      (cart.length > 0 && showSuccess)?<div className="w-full gap-4 text-gray-500 max-w-lg bg-white shadow-2xl rounded-2xl p-8 transform transition-all duration-300 hover:shadow-xl flex flex-col items-center justify-center">
        <FaCircleCheck className="w-[30px] h-[30px] text-green-400" />
        <h1 className="text-2xl">Order Placed!</h1>
        <p>You've successfully registered for the waitlist!</p> 
      </div>:
      (
        <div className="w-full text-gray-500 max-w-lg bg-white shadow-2xl rounded-2xl p-8 transform transition-all duration-300 hover:shadow-xl flex flex-col items-center justify-center">
          <MdOutlineShoppingCart className="w-[30px] h-[30px] mb-3" />
          <p className="text-xl">Add something first</p>
          <Link
            href="/#menu"
            className="w-full flex items-center justify-center mt-5 cursor-pointer bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold py-3 rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Menu
          </Link>
        </div>
      )}
    </div>
  );
}
