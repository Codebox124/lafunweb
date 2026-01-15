"use client";

import { useState, useRef } from "react";
import { useOverContext } from "../OverContext";
import { MdOutlineShoppingCart, MdlockOutline } from "react-icons/md";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaCircleCheck, FaShieldHalved } from "react-icons/fa6";
import {
  ArrowRight,
  AlertCircle,
  ShoppingBag,
  Loader2,
  MapPin,
  Mail,
  Phone,
  User,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Dynamically import PaystackButton to avoid SSR issues
const PaystackButton = dynamic(
  () =>
    import("react-paystack").then((mod) => ({ default: mod.PaystackButton })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-14 bg-[#1C1917]/10 animate-pulse rounded-xl"></div>
    ),
  }
);

export default function Page() {
  const form = useRef();
  const { cart, formData, setFormData, total } = useOverContext();
  const [showSuccess, setShowSuccess] = useState(false);
  const [timeToSendMail, setTimeToSendMail] = useState(false);
  const [orderInfo, setOrderInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  // Constants
  const deliveryFee = 1500;
  const totalAmountDue = total + deliveryFee;
  const config = {
    reference: new Date().getTime().toString(),
    email: formData.email,
    amount: totalAmountDue * 100, // Amount in Kobo
    publicKey: "pk_live_cfabb69ee22f69d494916efa2c70e198f464ef78",
  };

  const handlePaystackSuccessAction = async (reference) => {
    try {
      setTimeToSendMail(true);

      const orderData = {
        customer: {
          firstName: formData.first_name,
          lastName: formData.last_name,
          email: formData.email,
          phone: formData.phone,
        },
        delivery: {
          location:
            formData.location !== "Other (Not Listed)"
              ? formData.location
              : formData.customAddress,
          customAddress:
            formData.location === "Other (Not Listed)"
              ? formData.customAddress
              : "",
          fee: 1500,
        },
        items: cart.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.total,
          currency: item.currency,
          image: item.image,
          selectedProtein: item.selectedProtein,
        })),
        subtotal: total,
        deliveryFee: 1500,
        total: total + 1500,
        payment: {
          method: "paystack",
          reference: reference.reference,
          status: "paid",
        },
      };

      // Save to database
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Order saved:", result.order.orderNumber);

        let cartmail = [];
        cart.forEach((item) => {
          cartmail.push(
            `${item.quantity}x ${item.name} @${item.currency}${
              item.total * item.quantity
            }`
          );
        });
        cartmail = cartmail.join("||");

        setOrderInfo(
          `Order #${result.order.orderNumber} | Cart:${cartmail}, Name:${
            formData.first_name
          } ${formData.last_name}, Email:${formData.email}, Number:${
            formData.phone
          }, Location:${
            formData.location != "Other (Not Listed)"
              ? formData.location
              : formData.customAddress
          }`
        );
      }
    } catch (error) {
      console.error("Error saving order:", error);
      setTimeToSendMail(true);
      let cartmail = [];
      cart.forEach((item) => {
        cartmail.push(
          `${item.quantity}x ${item.name} @${item.currency}${
            item.total * item.quantity
          }`
        );
      });
      cartmail = cartmail.join("||");

      setOrderInfo(
        `Cart:${cartmail}, Name:${formData.first_name} ${
          formData.last_name
        }, Email:${formData.email}, Number:${formData.phone}, Location:${
          formData.location != "Other (Not Listed)"
            ? formData.location
            : formData.customAddress
        }`
      );
    }
  };

  const handlePaystackCloseAction = () => {
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm("service_w4i1im3", "template_nrbhq1a", form.current, {
        publicKey: "gt0sc5sFLclXr-haP",
      })
      .then(
        () => {
          setIsLoading(false);
          setShowSuccess(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setIsLoading(false);
          setShowError(true);
          console.log("FAILED...", error.text);
        }
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

  // Helper logic for form validation
  const isFormValid =
    formData.first_name &&
    formData.last_name &&
    formData.email &&
    formData.phone &&
    (formData.location || formData.customAddress);

  // --- RENDER SECTION ---

  return (
    <div className="min-h-screen bg-[#F5F3EF] flex items-center justify-center px-4 py-12 lg:py-20 relative overflow-hidden text-[#1C1917]">
      {/* Background Texture - Clean & Minimal */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Logic Switching: 1. Main Checkout | 2. Loading | 3. Success | 4. Empty */}

      {cart.length > 0 && !showSuccess && !isLoading ? (
        <div className="w-full max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Order Summary (The Receipt) */}
          <div className="lg:col-span-5 lg:order-2">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#1C1917]/5 sticky top-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-dashed border-[#1C1917]/20">
                <div className="w-10 h-10 bg-[#CF0106] rounded-full flex items-center justify-center text-white">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-2xl">Your Order</h3>
              </div>

              <div className="space-y-4 mb-6">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start text-sm"
                  >
                    <div className="flex gap-3">
                      <span className="font-bold text-[#CF0106]">
                        {item.quantity}x
                      </span>
                      <div>
                        <span className="font-bold text-[#1C1917] block">
                          {item.name}
                        </span>
                        {item.selectedProtein && (
                          <span className="text-[#1C1917]/50 text-xs">
                            {item.selectedProtein}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="font-bold text-[#1C1917]">
                      {item.currency}
                      {(item.total * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 py-6 border-t border-dashed border-[#1C1917]/20">
                <div className="flex justify-between text-[#1C1917]/70">
                  <span>Subtotal</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#1C1917]/70">
                  <span>Delivery Fee</span>
                  <span>₦{deliveryFee.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-[#1C1917] mb-2">
                <span className="font-display font-bold text-xl">
                  Total Due
                </span>
                <span className="font-display font-black text-3xl text-[#CF0106]">
                  ₦{totalAmountDue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form & Logic */}
          <div className="lg:col-span-7 lg:order-1">
            <div className="mb-8">
              <h2 className="font-display font-black text-4xl lg:text-5xl mb-4 leading-tight">
                Secure <br />
                <span className="text-[#CF0106]">Checkout.</span>
              </h2>
              <p className="text-[#1C1917]/70 text-lg">
                {timeToSendMail
                  ? "Payment Successful! Please finalize below."
                  : "Enter your delivery details to proceed."}
              </p>
            </div>

            {showError && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-700 font-medium">
                  Something went wrong. Please try again.
                </p>
              </div>
            )}

            {/* STEP 1: PAYMENT DETAILS FORM */}
            {!timeToSendMail ? (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1C1917]/60">
                        First Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1C1917]/30" />
                        <input
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          placeholder="John"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white border border-[#1C1917]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CF0106] transition-all font-medium text-[#1C1917]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1C1917]/60">
                        Last Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1C1917]/30" />
                        <input
                          type="text"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          placeholder="Doe"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white border border-[#1C1917]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CF0106] transition-all font-medium text-[#1C1917]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1C1917]/60">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1C1917]/30" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white border border-[#1C1917]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CF0106] transition-all font-medium text-[#1C1917]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1C1917]/60">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1C1917]/30" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 801 234 5678"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white border border-[#1C1917]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CF0106] transition-all font-medium text-[#1C1917]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Info */}
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1C1917]/60">
                      Delivery Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1C1917]/30" />
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white border border-[#1C1917]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CF0106] transition-all font-medium text-[#1C1917] appearance-none cursor-pointer"
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
                  </div>

                  {formData.location === "Other (Not Listed)" && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1C1917]/60">
                        Exact Address
                      </label>
                      <textarea
                        name="customAddress"
                        value={formData.customAddress}
                        onChange={handleChange}
                        placeholder="Enter your detailed address..."
                        required
                        rows="3"
                        className="w-full px-4 py-4 bg-white border border-[#1C1917]/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CF0106] transition-all font-medium text-[#1C1917] resize-none"
                      />
                    </div>
                  )}
                </div>

                {/* Pay Button */}
                <div className="pt-6">
                  <PaystackButton
                    disabled={!isFormValid}
                    className="w-full bg-[#CF0106] hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-5 rounded-xl shadow-xl shadow-red-600/20 transition-all flex items-center justify-center gap-3 text-lg"
                    {...componentProps}
                    text={
                      <span className="flex items-center gap-2">
                        <FaShieldHalved /> Pay Securely
                      </span>
                    }
                  />
                  <p className="text-center text-xs text-[#1C1917]/40 mt-4 flex items-center justify-center gap-1">
                    <FaShieldHalved /> Secured by Paystack
                  </p>
                </div>
              </form>
            ) : (
              /* STEP 2: FINALIZE ORDER (EMAIL) */
              <form
                ref={form}
                onSubmit={sendEmail}
                className="bg-green-50 border border-green-200 p-8 rounded-2xl space-y-6 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                  <FaCircleCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-green-800 mb-2">
                    Payment Confirmed!
                  </h3>
                  <p className="text-green-700">
                    Almost there. Click below to send your order to the kitchen.
                  </p>
                </div>

                {/* Hidden Inputs for EmailJS */}
                <input
                  type="text"
                  className="hidden"
                  name="name"
                  value={`${formData.first_name} ${formData.last_name}`}
                  readOnly
                />
                <textarea
                  value={orderInfo}
                  className="hidden"
                  name="message"
                  readOnly
                />

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-5 rounded-xl shadow-xl shadow-green-600/20 transition-all flex items-center justify-center gap-3 text-lg"
                >
                  Finalize Order
                </button>
              </form>
            )}
          </div>
        </div>
      ) : cart.length > 0 && isLoading ? (
        // LOADING STATE
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl mb-6">
            <Loader2 className="w-10 h-10 text-[#CF0106] animate-spin" />
          </div>
          <h2 className="font-display font-black text-3xl mb-2 text-[#1C1917]">
            Processing...
          </h2>
          <p className="text-[#1C1917]/60">
            Please wait while we secure your order.
          </p>
        </div>
      ) : cart.length > 0 && showSuccess ? (
        // SUCCESS STATE
        <div className="relative z-10 max-w-lg w-full bg-white p-10 rounded-3xl shadow-2xl text-center border border-[#1C1917]/5">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <FaCircleCheck className="w-12 h-12" />
          </div>
          <h1 className="font-display font-black text-4xl mb-4 text-[#1C1917]">
            Order Placed!
          </h1>
          <p className="text-[#1C1917]/60 text-lg mb-8">
            Your order has been successfully placed. We are preparing it with
            love!
          </p>
          <Link
            href="/"
            className="inline-block w-full bg-[#1C1917] text-white font-bold py-4 rounded-xl hover:bg-black transition-all"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        // EMPTY CART STATE
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl mb-8 border border-[#1C1917]/5">
            <ShoppingBag className="w-12 h-12 text-[#1C1917]/30" />
          </div>
          <h2 className="font-display font-black text-4xl mb-4 text-[#1C1917]">
            Cart is Empty
          </h2>
          <p className="text-[#1C1917]/60 text-lg mb-8 max-w-md">
            Looks like you haven't added any delicious food yet.
          </p>
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 bg-[#CF0106] text-white font-bold py-4 px-10 rounded-xl hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
          >
            Browse Menu <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </div>
  );
}
