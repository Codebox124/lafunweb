import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";

function Drinks({
  quantities,
  addToCart,
  addQuantity,
  subQuantity,
  removeItem,
  setShowDrinkModal,
}) {
  const menus = [
    {
      name: "PROTEIN DRINK",
      items: [
        {
          id: "p-1",
          name: "Vitamilk soya drink",
          price: 2000,
          description: "33cl",
          image: "/vitamilksoyadrink.webp",
          currency: "₦",
        },
        {
          id: "p-2",
          name: "Vitamilk strawberry drink",
          price: 2000,
          description: "33cl",
          image: "/vitamilkstrawberrydrink.webp",
          currency: "₦",
        },
        {
          id: "p-3",
          name: "Vitamilk double choco shake",
          price: 2000,
          description: "33cl",
          image: "/vitamilkdoublechocodrink.webp",
          currency: "₦",
        },
      ],
    },
    {
      name: "SODA",
      items: [
        {
          id: "s-1",
          name: "Sprite can",
          price: 700,
          description: "33cl",
          image: "/spritecan.webp",
          currency: "₦",
        },
        {
          id: "s-2",
          name: "Fanta can",
          price: 700,
          description: "33cl",
          image: "/fantacan.webp",
          currency: "₦",
        },
        {
          id: "s-3",
          name: "Pepsi pet",
          price: 500,
          description: "33cl",
          image: "/pepsipet.webp",
          currency: "₦",
        },
        {
          id: "s-4",
          name: "Coca cola can",
          price: 700,
          description: "33cl",
          image: "/cocacolacan.webp",
          currency: "₦",
        },
      ],
    },
    {
      name: "YOGURT & JUICES",
      items: [
        {
          id: "y-1",
          name: "Hollandia yoghurt plain",
          price: 2500,
          description: "1ltr",
          image: "/hollandiayoghurtplain.webp",
          currency: "₦",
        },
        {
          id: "y-2",
          name: "Hollandia yogurt strawberry",
          price: 2500,
          description: "1ltr",
          image: "/hollandiayoghurtstrawberry.webp",
          currency: "₦",
        },
        {
          id: "y-3",
          name: "5 alive berry blast juice",
          price: 1800,
          description: "78cl",
          image: "/5aliveberryblastjuice.webp",
          currency: "₦",
        },
        {
          id: "y-4",
          name: "5 alive pulply juice",
          price: 1800,
          description: "85cl",
          image: "/5alivepulpyjuice.webp",
          currency: "₦",
        },
        {
          id: "y-5",
          name: "Chivita 100% juice",
          price: 2500,
          description: "1ltr",
          image: "/chivita100juice.webp",
          currency: "₦",
        },
        {
          id: "y-6",
          name: "Chivita active juice",
          price: 2000,
          description: "1tr",
          image: "/chivitaactivejuice.webp",
          currency: "₦",
        },
      ],
    },
    {
      name: "ENERGY DRINK",
      items: [
        {
          id: "e-1",
          name: "Climax can",
          price: 850,
          description: "33cl",
          image: "/climaxcan.webp",
          currency: "₦",
        },
        {
          id: "e-2",
          name: "Power horse can ",
          price: 1800,
          description: "33cl",
          image: "/powerhorsecan.webp",
          currency: "₦",
        },
        {
          id: "e-3",
          name: "Red bull can",
          price: 1800,
          description: "33cl",
          image: "/redbullcan.webp",
          currency: "₦",
        },
        {
          id: "e-4",
          name: "Black bullet 18%",
          price: 1800,
          description: "33cl",
          image: "/blackbullet.webp",
          currency: "₦",
        },
        {
          id: "e-5",
          name: "Monster energy drink ",
          price: 1300,
          description: "33cl",
          image: "/monsterenergydrink.webp",
          currency: "₦",
        },
        {
          id: "e-6",
          name: "Monster Energy Ultra ",
          price: 1300,
          description: "33cl",
          image: "/monsterenergyultra.webp",
          currency: "₦",
        },
      ],
    },
    {
      name: "MALT",
      items: [
        {
          id: "m-1",
          name: "Maltina can classic",
          price: 900,
          description: "33cl",
          image: "/maltinacanclassic.webp",
          currency: "₦",
        },
        {
          id: "m-2",
          name: "Maltina pet 33cl",
          price: 700,
          description: "33cl",
          image: "/maltinapet.webp",
          currency: "₦",
        },
        {
          id: "m-3",
          name: "Amstel malta pet",
          price: 700,
          description: "33cl",
          image: "/amstelmaltapet.webp",
          currency: "₦",
        },
        {
          id: "m-4",
          name: "Malta guiness can",
          price: 900,
          description: "33cl",
          image: "/maltaguinesscan.webp",
          currency: "₦",
        },
      ],
    },
    {
      name: "CAN COCKTAIL",
      items: [
        {
          id: "c-1",
          name: "Lord's gin cocktail 8%",
          price: 1000,
          description: "33cl",
          image: "/lordsgincocktail.webp",
          currency: "₦",
        },
        {
          id: "c-2",
          name: "Calypso cocktail can 5% ",
          price: 1000,
          description: "33cl",
          image: "/calypsococktailcan.webp",
          currency: "₦",
        },
      ],
    },
    {
      name: "BEER",
      items: [
        {
          id: "b-1",
          name: "Heineken bottle",
          price: 1800,
          description: "45cl",
          image: "/heinekenbottle.jpg",
          currency: "₦",
        },
        {
          id: "b-2",
          name: "Heineken can",
          price: 1800,
          description: "33cl",
          image: "/heinekencan.png",
          currency: "₦",
        },
        {
          id: "b-3",
          name: "Desperado can",
          price: 1000,
          description: "33cl",
          image: "/desperadocan.webp",
          currency: "₦",
        },
      ],
    },
    {
      name: "WATER",
      items: [
        {
          id: "w-1",
          name: "Mr v water",
          price: 300,
          description: "50cl",
          image: "/mrvwater.webp",
          currency: "₦",
        },
        {
          id: "w-2",
          name: "Aquafina",
          price: 350,
          description: "50cl",
          image: "/aquafinawater.jpg",
          currency: "₦",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col h-full bg-[#F5F3EF] text-[#1C1917] p-6 sm:p-8 rounded-t-3xl">
      {/* Header with close button */}
      <div className="flex justify-between items-start mb-6 sm:mb-8 flex-shrink-0 border-b border-[#1C1917]/10 pb-4">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest bg-red-100 text-[#CF0106] rounded-full mb-2">
            🥤 Beverages
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1C1917] leading-tight">
            Perfect Pairing
          </h2>
          <p className="text-[#1C1917]/70 mt-1 text-sm sm:text-base">
            Choose your refreshers, soft drinks, or spirits.
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setShowDrinkModal(false)}
          className="p-2 ml-4 rounded-full bg-[#1C1917] text-white hover:bg-[#CF0106] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#CF0106]/50 flex-shrink-0"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex-shrink-0 mb-6 sm:mb-8">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {menus.map((menu, index) => (
              <button
                key={menu.name}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wide transition-all duration-300 whitespace-nowrap border ${
                  activeTab === index
                    ? "bg-[#1C1917] text-white border-[#1C1917] shadow-lg shadow-[#1C1917]/20"
                    : "text-[#1C1917]/70 hover:text-[#1C1917] bg-white border-[#1C1917]/20 hover:border-[#1C1917]/50"
                }`}
              >
                {menu.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#CF0106]/50 scrollbar-track-[#1C1917]/10 pr-1">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 pb-6">
          {menus[activeTab].items.map((item) => {
            // Use item.name to get the quantity as passed from the main component
            const quantity = quantities[item.name] || 0;
            return (
              <div
                key={item.id}
                className="bg-white border border-[#1C1917]/10 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square bg-gray-50 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Item Details Overlay (Cleaned up) */}
                  <div className="absolute top-0 left-0 p-2 sm:p-3">
                    <span className="inline-block px-3 py-1 bg-[#1C1917] text-white text-[10px] font-bold rounded-full">
                      {item.description}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold mb-1 text-[#1C1917] line-clamp-2 leading-snug hover:text-[#CF0106] transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex justify-between items-center mb-4 pt-2">
                    <span className="text-lg font-black text-[#CF0106]">
                      {item.currency}
                      {item.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Quantity/Add to Cart Controls */}
                  <div className="flex items-center justify-between gap-3">
                    {/* Quantity Controls (Only visible if quantity > 0) */}
                    {quantity > 0 && (
                      <div className="flex items-center gap-2 border border-[#1C1917]/20 rounded-full p-1.5 flex-1">
                        <button
                          onClick={() => {
                            if (quantity === 1) {
                              removeItem(item);
                            } else {
                              subQuantity(item);
                            }
                          }}
                          className="bg-white text-[#1C1917] rounded-full p-1 w-7 h-7 flex items-center justify-center hover:bg-[#CF0106] hover:text-white transition-all disabled:opacity-40"
                          disabled={!quantity}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>

                        <span className="text-sm font-bold text-[#1C1917] min-w-[1.5rem] text-center">
                          {quantity}
                        </span>

                        <button
                          onClick={() => addQuantity(item)}
                          className="bg-[#CF0106] text-white rounded-full p-1 w-7 h-7 flex items-center justify-center hover:bg-[#A00105] transition-all"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(item)}
                      disabled={quantity > 0}
                      className={`w-full py-2.5 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                        quantity > 0
                          ? "bg-gray-200 text-[#1C1917]/60 cursor-default"
                          : "bg-[#CF0106] hover:bg-[#A00105] text-white shadow-md shadow-[#CF0106]/30"
                      } ${quantity > 0 ? "flex-1" : "w-full"}`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>{quantity > 0 ? "Added" : "Add"}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Drinks;
