import { Minus, Plus, ShoppingCart } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Menu({
  menus,
  setMenus,
  setActiveTab,
  activeTab,
  addQuantity,
  subQuantity,
  removeItem,
  quantities,
  addToCart,
}) {
  function handleProteinOption(ITEM, chosen) {
    const newMenuItems = menus[activeTab].items.map((item) => {
      if (ITEM.name === item.name) {
        return { ...item, selectedProtein: chosen };
      }
      return item;
    });

    const newMenus = menus.map((menu, index) => {
      if (index === activeTab) {
        return { ...menu, items: newMenuItems };
      }
      return menu;
    });

    setMenus(newMenus);
  }

  return (
    <section
      id="menu"
      className="relative py-32 lg:py-40 bg-[#F5F3EF] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[length:4rem_4rem] [background-image:radial-gradient(#1C1917_1px,transparent_1px)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#1C1917] mb-8 leading-tight tracking-tighter">
            Explore Our <br />
            <span className="inline-block text-[#CF0106] border-b-8 border-b-[#CF0106]/30 px-2 leading-none">
              Delicious Dishes
            </span>
          </h2>

          <p className="text-lg text-[#1C1917]/80 leading-relaxed max-w-2xl mx-auto">
            Authentic Nigerian cuisine prepared with the finest ingredients and
            traditional recipes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <div className="lg:hidden pb-0">
            <div className="flex items-center gap-3 px-4 justify-center">
              {menus.map((menu, index) => (
                <button
                  key={menu.name}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 border flex-1 ${
                    activeTab === index
                      ? "bg-[#CF0106] text-white border-[#CF0106] shadow-md shadow-[#CF0106]/30 flex-shrink-0"
                      : "text-[#1C1917]/80 hover:text-[#1C1917] bg-white border-transparent hover:border-[#1C1917]/20 flex-shrink-0"
                  }`}
                >
                  {menu.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="inline-flex items-center justify-center gap-3 p-2 bg-white border border-[#1C1917] rounded-full shadow-lg">
              {menus.map((menu, index) => (
                <button
                  key={menu.name}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 whitespace-nowrap border ${
                    activeTab === index
                      ? "bg-[#CF0106] text-white border-[#CF0106] shadow-md shadow-[#CF0106]/30"
                      : "text-[#1C1917]/80 hover:text-[#1C1917] bg-white border-transparent hover:border-[#1C1917]/20"
                  }`}
                >
                  {menu.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {menus[activeTab].name === "LÁFÚN Signature" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-4xl mx-auto"
          >
            <div className="bg-[#CF0106] rounded-xl p-6 md:p-8 border-4 border-[#1C1917] shadow-[8px_8px_0_#1C1917]">
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-white font-black text-xl md:text-2xl mb-2">
                    Preparation Time
                  </h3>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    Each meal takes{" "}
                    <span className="font-bold">60 minutes</span> for the Lafun
                    signature meals
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {menus[activeTab].name === "Snacks and Parfait" && (
          <>
            <div className="relative mb-8 max-w-5xl mx-auto group">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <video
                  width="320"
                  height="240"
                  loop
                  autoPlay
                  muted
                  playsInline
                  className="w-full object-cover h-[400px]"
                >
                  <source src="/snacksandparfaitvid.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#1C1917]/20">
                  <p className="text-[#1C1917] font-bold text-sm">
                    Snacks & Parfait Showcase
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16 max-w-4xl mx-auto"
            >
              <div className="rounded-xl p-6 md:p-8 ">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1 text-black">
                    <h3 className="font-black text-xl md:text-2xl mb-3">
                      Next-Day Delivery
                    </h3>
                    <p className="text-[#1C1917] text-base md:text-lg leading-relaxed mb-3">
                      To keep our pastry production smooth and organized, we
                      operate strictly on a next-day delivery system.
                    </p>
                    <p className="[#1C1917] text-base md:text-lg leading-relaxed mb-3">
                      Kindly place your snack orders{" "}
                      <span className="font-bold text-[#CF0106]">
                        16–24 hours in advance
                      </span>{" "}
                      of your preferred delivery time.
                    </p>
                    <p className="text-[#1C1917] font-bold text-base md:text-lg italic">
                      The wait is totally worth it na when you chop am you go
                      know. 😋
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}

        <div className="relative">
          <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            <div className="flex gap-8 px-4">
              {menus[activeTab].items.map((item, index) => {
                const quantity = quantities[item.name] || 0;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    viewport={{ once: true, amount: 0.1 }}
                    key={index}
                    className="group relative bg-white rounded-xl overflow-hidden border-2 border-[#1C1917] shadow-[4px_4px_0_#1C1917] transition-all duration-300 hover:shadow-[8px_8px_0_#CF0106] flex-shrink-0 w-[300px] md:w-[350px] snap-start"
                  >
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-all duration-500 ease-out"
                      />

                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-white px-4 py-2 shadow-lg border border-[#CF0106] rounded-lg">
                          <span className="text-[#1C1917] font-black text-xl tracking-tighter tabular-nums">
                            {item.currency}
                            {item.price.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 bg-[#CF0106] px-3 py-1.5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-white text-xs font-black uppercase">
                          Popular Dish
                        </span>
                      </div>
                    </div>

                    <div className="pt-6 pb-6 px-6">
                      <h3 className="text-2xl font-bold text-[#1C1917] mb-3 leading-tight border-b border-[#1C1917]/20 pb-2">
                        {item.name}
                      </h3>
                      <p className="text-[#1C1917]/70 text-sm mb-6 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {item.proteinOptions && (
                        <div className="mb-6">
                          <label className="block text-xs text-[#1C1917] font-semibold uppercase tracking-widest mb-2">
                            Select Protein
                          </label>
                          <select
                            disabled={quantity > 0}
                            onChange={(e) =>
                              handleProteinOption(item, e.target.value)
                            }
                            name="proteins"
                            id={`proteins-${item.name}`}
                            value={item.selectedProtein || ""}
                            className="w-full disabled:cursor-not-allowed disabled:bg-gray-200 cursor-pointer px-4 py-3 bg-white text-[#1C1917] border border-[#1C1917]/30 rounded-lg focus:ring-2 focus:ring-[#CF0106] focus:border-[#CF0106] outline-none transition-all duration-300 text-sm font-medium hover:border-[#1C1917]"
                          >
                            <option value="" disabled>
                              Choose your protein...
                            </option>
                            {item.proteinOptions.map((opt, i) => (
                              <option key={i} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      {(item.selectedProtein ||
                        item.name === "Loaded Cheesy Fries") && (
                        <button
                          onClick={() => setActiveTab(1)}
                          className="cursor-pointer w-full mb-6 px-4 py-3 bg-[#1C1917]/10 text-[#1C1917] border border-[#1C1917]/20 rounded-lg hover:bg-[#CF0106]/10 hover:text-[#CF0106] hover:border-[#CF0106]/50 transition-all duration-300 text-sm font-bold flex items-center justify-center gap-2"
                          aria-label="Add more proteins from Extras section"
                        >
                          <span className="text-lg">+</span>
                          {item.name === "Loaded Cheesy Fries"
                            ? "Want extra cheese?"
                            : "Add Extra Proteins/Sides?"}
                        </button>
                      )}

                      <div className="h-px bg-[#1C1917]/10 mb-6"></div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-gray-100 border border-[#1C1917]/10 rounded-lg">
                          <span className="text-sm text-[#1C1917] font-bold">
                            QTY:
                          </span>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => {
                                if (quantity === 1) {
                                  removeItem(item);
                                } else {
                                  subQuantity(item);
                                }
                              }}
                              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-[#1C1917] hover:bg-gray-200 transition-all disabled:opacity-40 disabled:hover:bg-white border border-[#1C1917]/20"
                              disabled={!quantity}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-xl font-black text-[#1C1917] min-w-[3rem] text-center tabular-nums">
                              {quantity}
                            </span>
                            <button
                              onClick={() => addQuantity(item)}
                              className="w-8 h-8 flex items-center justify-center rounded-md bg-[#CF0106] text-white hover:bg-[#A00105] transition-all shadow-md shadow-[#CF0106]/30"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => addToCart(item)}
                          disabled={quantity > 0}
                          className="w-full group/btn py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 text-base border-2 border-[#1C1917] disabled:border-gray-300 disabled:shadow-none disabled:bg-gray-200 disabled:text-[#1C1917]/50"
                          style={{
                            backgroundColor:
                              quantity > 0 ? "#E5E7EB" : "#1C1917",
                            color: quantity > 0 ? "#1C1917" : "#FFFFFF",
                            boxShadow:
                              quantity > 0 ? "none" : "4px 4px 0 #CF0106",
                            transform:
                              quantity > 0
                                ? "translate(0, 0)"
                                : "translate(-4px, -4px)",
                          }}
                        >
                          <ShoppingCart className="w-5 h-5 transition-transform duration-300" />
                          <span>
                            {quantity > 0 ? "✓ Added to Cart" : "Add to Cart"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:hidden flex justify-center items-center gap-2 mt-4">
            <div className="h-1 w-8 bg-[#1C1917]/20 rounded-full"></div>
            <div className="h-1 w-8 bg-[#CF0106] rounded-full"></div>
            <div className="h-1 w-8 bg-[#1C1917]/20 rounded-full"></div>
            <span className="text-xs text-[#1C1917]/60 ml-2">
              ← Scroll to explore →
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
}

export default Menu;
