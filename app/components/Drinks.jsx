import { Minus, Plus, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg';

function Drinks({setInterest, quantities, cart, addToCart, addQuantity, subQuantity, removeItem, setShowDrinkModal}) {  
    const [drinksCart, setDrinksCart] = useState({})
    const menus = [
    {
      name: "PROTEIN DRINK",
      items: [
       {
          id: 1,
          name: "Vitamilk soya drink",
          price: 2000,
          description:
            "33cl",
          image: "/vitamilksoyadrink.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Vitamilk strawberry drink",
          price: 2000,
          description:
            "33cl",
          image: "/vitamilkstrawberrydrink.webp",
          currency: "₦"
        },
        {
          id: 3,
          name: "Vitamilk double choco shake",
          price: 2000,
          description:
            "33cl",
          image: "/vitamilkdoublechocodrink.webp",
          currency: "₦"
        },

      ]
    },
    {
      name: "SODA",
      items: [
        {
          id: 1,
          name: "Sprite can",
          price: 700,
          description:
            "33cl",
          image: "/spritecan.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Fanta can",
          price: 700,
          description:
            "33cl",
          image: "/fantacan.webp",
          currency: "₦"
        },
        {
          id: 3,
          name: "Pepsi pet",
          price: 500,
          description:
            "33cl",
          image: "/pepsipet.webp",
          currency: "₦"
        },
        {
          id: 4,
          name: "Coca cola can",
          price: 700,
          description:
            "33cl",
          image: "/cocacolacan.webp",
          currency: "₦"
        },
        
      ]
    },
    {
        name:"YOGURT & JUICES",
        items:[
         {
          id: 1,
          name: "Hollandia yoghurt plain",
          price: 2500,
          description:
            "1ltr",
          image: "/hollandiayoghurtplain.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Hollandia yogurt strawberry",
          price: 2500,
          description:
            "1ltr",
          image: "/hollandiayoghurtstrawberry.webp",
          currency: "₦"
        },
        {
          id: 3,
          name: "5 alive berry blast juice",
          price: 1800,
          description:
            "78cl",
          image: "/5aliveberryblastjuice.webp",
          currency: "₦"
        },
        {
          id: 4,
          name: "5 alive pulply juice",
          price: 1800,
          description:
            "85cl",
          image: "/5alivepulpyjuice.webp",
          currency: "₦"
        },
        {
          id: 5,
          name: "Chivita 100% juice",
          price: 2500,
          description:
            "1ltr",
          image: "/chivita100juice.webp",
          currency: "₦"
        },
        {
          id: 6,
          name: "Chivita active juice",
          price: 2000,
          description:
            "1tr",
          image: "/chivitaactivejuice.webp",
          currency: "₦"
        }
        ]
    },
    {
        name:"ENERGY DRINK",
        items:[
            {
          id: 1,
          name: "Climax can",
          price: 850,
          description:
            "33cl",
          image: "/climaxcan.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Power horse can ",
          price: 1800,
          description:
            "33cl",
          image: "/powerhorsecan.webp",
          currency: "₦"
        },
        {
          id: 3,
          name: "Red bull can",
          price: 1800,
          description:
            "33cl",
          image: "/redbullcan.webp",
          currency: "₦"
        },
        {
          id: 4,
          name: "Black bullet 18%",
          price: 1800,
          description:
            "33cl",
          image: "/blackbullet.webp",
          currency: "₦"
        },
        {
          id: 5,
          name: "Monster energy drink ",
          price: 1300,
          description:
            "33cl",
          image: "/monsterenergydrink.webp",
          currency: "₦"
        },
        {
          id: 6,
          name: "Monster Energy Ultra ",
          price: 1300,
          description:
            "33cl",
          image: "/monsterenergyultra.webp",
          currency: "₦"
        },
        
        ]
    },
    {
        name:"MALT",
        items:[
            {
          id: 1,
          name: "Maltina can classic",
          price: 900,
          description:
            "33cl",
          image: "/maltinacanclassic.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Maltina pet 33cl",
          price: 700,
          description:
            "33cl",
          image: "/maltinapet.webp",
          currency: "₦"
        },
        {
          id: 3,
          name: "Amstel malta pet",
          price: 700,
          description:
            "33cl",
          image: "/amstelmaltapet.webp",
          currency: "₦"
        },
        {
          id: 4,
          name: "Malta guiness can",
          price: 900,
          description:
            "33cl",
          image: "/maltaguinesscan.webp",
          currency: "₦"
        },
        ]
    },
    {
        name:"CAN COCKTAIL",
        items:[
             {
          id: 1,
          name: "Lord's gin cocktail 8%",
          price: 1000,
          description:
            "33cl",
          image: "/lordsgincocktail.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Calypso cocktail can 5% ",
          price: 1000,
          description:
            "33cl",
          image: "/calypsococktailcan.webp",
          currency: "₦"
        },
        ]
    },
    {
        name:"BEER",
        items:[
            {
          id: 1,
          name: "Heineken bottle",
          price: 1800,
          description:
            "45cl",
          image: "/heinekenbottle.jpg",
          currency: "₦"
        },
         {
          id: 2,
          name: "Heineken can",
          price: 1800,
          description:
            "33cl",
          image: "/heinekencan.png",
          currency: "₦"
        },
         {
          id: 3,
          name: "Desperado can",
          price: 1000,
          description:
            "33cl",
          image: "/desperadocan.webp",
          currency: "₦"
        },
        
        ]
    },
    {
        name:"WATER",
        items:[
            {
          id: 1,
          name: "Mr v water",
          price: 300,
          description:
            "",
          image: "/mrvwater.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Aquafina",
          price: 350,
          description:
            "",
          image: "/aquafinawater.jpg",
          currency: "₦"
        },
        ]
    },
  ];
    const [activeTab, setActiveTab] = useState(0);
    
  return (
    <div className='flex flex-col h-full'>
      {/* Header with close button */}
      <div className="flex flex-col items-center mb-6 sm:mb-8 flex-shrink-0">
        <span className="badge-modern mb-4">
          🥤 Beverages
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Choose Your Drinks</h2>
        <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">Perfect pairing for your meal</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex-shrink-0 mb-6 sm:mb-8">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-800 pb-2">
          <div className="flex gap-2 min-w-max justify-center px-4">
            {menus.map((menu, index) => (
              <button
                key={menu.name}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/40 scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50 bg-gray-800/60 backdrop-blur-sm'
                }`}
              >
                {menu.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-800 px-2">
        <div className='modern-grid pb-6'>
          {menus[activeTab].items.map(item => (
            <div key={item.id} className="enhanced-card rounded-3xl overflow-hidden group">
              <div className="aspect-square bg-white/95 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center enhanced-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold mb-2 text-white line-clamp-2 leading-tight group-hover:text-red-400 transition-colors">{item.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4">{item.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="price-tag-modern text-lg sm:text-xl">
                    {item.currency}{item.price.toLocaleString()}
                  </span>
                  
                  <div className="flex items-center gap-2 bg-gray-800/60 rounded-full px-2 py-1.5 backdrop-blur-sm border border-gray-700">
                    <button
                      onClick={() => {
                        if(quantities[item.name] === 1) {
                          removeItem(item)
                        } else {
                          subQuantity(item)
                        }
                      }}
                      className="bg-gray-700 text-white rounded-full p-1.5 hover:bg-red-600 hover:scale-110 transition-all disabled:opacity-40"
                      disabled={!quantities[item.name]}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    
                    <span className="text-sm font-bold text-white min-w-[1.5rem] text-center">
                      {quantities[item.name] || 0}
                    </span>
                    
                    <button
                      onClick={() => addQuantity(item)}
                      className="bg-red-600 text-white rounded-full p-1.5 hover:bg-red-500 hover:scale-110 transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={() => addToCart(item)}
                  disabled={quantities[item.name]}
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 disabled:from-gray-700 disabled:to-gray-600 disabled:opacity-60 hover:from-red-500 hover:to-red-400 text-white py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 disabled:shadow-none group/btn"
                >
                  <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  <span>{quantities[item.name] ? 'Added' : 'Add to Cart'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Drinks