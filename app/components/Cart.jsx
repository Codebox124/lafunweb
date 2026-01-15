import React from "react";
import { Minus, Plus, X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function Cart({
  cart,
  setCart,
  addQuantity,
  subQuantity,
  removeItem,
  setShowCart,
}) {
  // Helper to calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.total * item.quantity,
    0
  );

  return (
    <motion.div
      initial={{
        right: "-100vw",
      }}
      animate={{
        right: 0,
      }}
      exit={{
        right: "-100vw",
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="fixed top-0 right-0 z-50 w-full sm:w-[450px] md:w-[500px] h-screen bg-[#F5F3EF] border-l border-[#1C1917] shadow-2xl overflow-hidden text-[#1C1917]"
    >
      <div className="sticky top-0 bg-[#F5F3EF] z-10 p-6 border-b border-[#1C1917]/10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <ShoppingBag className="w-7 h-7 text-[#CF0106]" />
            <div>
              <h3 className="font-display text-3xl font-black">Your Order</h3>
              {cart.length > 0 && (
                <p className="text-[#1C1917]/60 text-sm font-medium">
                  {cart.length} {cart.length === 1 ? "item" : "items"} total
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => setShowCart(false)}
            className="group cursor-pointer p-2 bg-white hover:bg-[#CF0106] rounded-full transition-all duration-300 border border-[#1C1917]/20 hover:border-transparent"
          >
            <X className="w-6 h-6 text-[#1C1917] group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>

      <div className="h-[calc(100vh-17rem)] lg:h-[calc(100vh-16rem)] overflow-y-auto px-6 py-8">
        {cart.length > 0 ? (
          <div className="space-y-6">
            {cart.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group"
              >
                <div className="relative flex items-start gap-5 p-4 bg-white rounded-xl border border-[#1C1917]/10 hover:border-[#CF0106] transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-[#1C1917]/10">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-[#1C1917] leading-snug">
                        {item.name}
                      </h4>
                    </div>

                    <div className="mb-4">
                      <p className="text-xl font-black text-[#CF0106]">
                        {item.currency}
                        {(item.total * item.quantity).toLocaleString()}
                      </p>
                      <p className="text-xs text-[#1C1917]/50 font-medium">
                        {item.currency}
                        {item.total.toLocaleString()} each
                      </p>
                    </div>

                    <div className="flex items-center gap-3 bg-[#F5F3EF] rounded-xl px-2 py-1 w-fit border border-[#1C1917]/10">
                      <button
                        onClick={() => {
                          if (item.quantity === 1) {
                            removeItem(item);
                          } else {
                            subQuantity(item);
                          }
                        }}
                        className="p-1 bg-white hover:bg-[#CF0106] rounded-lg transition-all duration-300 border border-[#1C1917]/10 hover:border-transparent group/btn"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="w-4 h-4 text-[#1C1917] group-hover/btn:text-white" />
                      </button>

                      <span className="text-[#1C1917] w-6 text-center text-lg font-bold tabular-nums">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => addQuantity(item)}
                        className="p-1 bg-[#CF0106] hover:bg-red-700 rounded-lg transition-all duration-300 shadow-md"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item)}
                    className="absolute top-2 right-2 p-2 bg-transparent hover:bg-[#CF0106] rounded-full transition-all duration-300 group/trash"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="w-4 h-4 text-[#1C1917]/40 group-hover/trash:text-white transition-colors" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-[#1C1917]/70 px-6">
            <div className="relative mb-8">
              <div className="relative p-10 rounded-full border-4 border-[#1C1917]/20">
                <ShoppingBag className="w-20 h-20 text-[#1C1917]/30" />
              </div>
            </div>
            <h3 className="font-display text-3xl font-black text-[#1C1917] mb-3">
              Cart is Empty
            </h3>
            <p className="text-center text-[#1C1917]/70 mb-8 leading-relaxed">
              Time to add some delicious Nigerian food from the menu!
            </p>
            <Link
              href="/#menu"
              onClick={() => setShowCart(false)}
              className="group relative bg-[#1C1917] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 flex items-center gap-3 hover:bg-black hover:shadow-lg"
            >
              <span className="relative z-10 uppercase tracking-widest">
                Browse Menu
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="sticky bottom-0 bg-white p-6 border-t border-[#1C1917]/10 shadow-2xl">
          <div className="flex justify-between items-center mb-5 font-display">
            <p className="text-xl font-medium text-[#1C1917]/70">Total:</p>
            <p className="text-4xl font-black text-[#CF0106]">
              ₦{totalPrice.toLocaleString()}
            </p>
          </div>

          <Link
            href="/checkout"
            className="group relative block w-full bg-[#CF0106] text-white py-5 rounded-xl font-black text-lg transition-all duration-300 shadow-xl shadow-[#CF0106]/40 hover:bg-red-700 hover:shadow-2xl hover:scale-[1.01] overflow-hidden"
          >
            <div className="flex items-center justify-center gap-3 relative z-10 uppercase tracking-wider">
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      )}
    </motion.div>
  );
}

export default Cart;
