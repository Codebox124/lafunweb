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
          image: "/drinks/vitamilksoyadrink.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Vitamilk strawberry drink",
          price: 2000,
          description:
            "33cl",
          image: "/drinks/vitamilkstrawberrydrink.webp",
          currency: "₦"
        },
        {
          id: 3,
          name: "Vitamilk double choco shake",
          price: 2000,
          description:
            "33cl",
          image: "/drinks/vitamilksoyadrink.webp",
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
          image: "/drinks/spritecan.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Fanta can",
          price: 700,
          description:
            "33cl",
          image: "/drinks/fantacan.webp",
          currency: "₦"
        },
        {
          id: 3,
          name: "Pepsi pet",
          price: 500,
          description:
            "33cl",
          image: "/drinks/pepsipet.webp",
          currency: "₦"
        },
        {
          id: 4,
          name: "Coca cola can",
          price: 700,
          description:
            "33cl",
          image: "/drinks/cocacolacan.webp",
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
          image: "/drinks/hollandiayoghurtplain.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Hollandia yogurt strawberry",
          price: 2500,
          description:
            "1ltr",
          image: "/drinks/hollandiayoghurtstrawberry.webp",
          currency: "₦"
        },
        {
          id: 3,
          name: "5 alive berry blast juice",
          price: 1800,
          description:
            "78cl",
          image: "/drinks/5aliveberryblastjuice.webp",
          currency: "₦"
        },
        {
          id: 4,
          name: "5 alive pulply juice",
          price: 1800,
          description:
            "85cl",
          image: "/drinks/5alivepulpyjuice.webp",
          currency: "₦"
        },
        {
          id: 5,
          name: "Chivita 100% juice",
          price: 2500,
          description:
            "1ltr",
          image: "/drinks/chivita100juice.WEBP",
          currency: "₦"
        },
        {
          id: 6,
          name: "Chivita active juice",
          price: 2000,
          description:
            "1tr",
          image: "/drinks/chivitaactivejuice.webp",
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
          image: "/drinks/climaxcan.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Power horse can ",
          price: 1800,
          description:
            "33cl",
          image: "/drinks/powerhorsecan.webp",
          currency: "₦"
        },
        {
          id: 3,
          name: "Red bull can",
          price: 1800,
          description:
            "33cl",
          image: "/drinks/redbullcan.webp",
          currency: "₦"
        },
        {
          id: 4,
          name: "Black bullet 18%",
          price: 1800,
          description:
            "33cl",
          image: "/drinks/blackbullet.webp",
          currency: "₦"
        },
        {
          id: 5,
          name: "Monster energy drink ",
          price: 1300,
          description:
            "33cl",
          image: "/drinks/monsterenergydrink.webp",
          currency: "₦"
        },
        {
          id: 6,
          name: "Monster Energy Ultra ",
          price: 1300,
          description:
            "33cl",
          image: "/drinks/monsterenergyultra.webp",
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
          image: "/drinks/maltinacanclassic.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Maltina pet 33cl",
          price: 700,
          description:
            "33cl",
          image: "/drinks/maltinapet.webp",
          currency: "₦"
        },
        {
          id: 3,
          name: "Amstel malta pet",
          price: 700,
          description:
            "33cl",
          image: "/drinks/amstelmaltapet.webp",
          currency: "₦"
        },
        {
          id: 4,
          name: "Malta guiness can",
          price: 900,
          description:
            "33cl",
          image: "/drinks/maltaguinesscan.webp",
          currency: "₦"
        },
        ]
    },
    {
        name:"CAN COCTAIL",
        items:[
             {
          id: 1,
          name: "Lord’s gin coctail 8%",
          price: 1000,
          description:
            "33cl",
          image: "/drinks/lordsgincocktail.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Calypso coctail can 5% ",
          price: 1000,
          description:
            "33cl",
          image: "/drinks/calypsococktailcan.webp",
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
          image: "/drinks/heinekenbottle.jpg",
          currency: "₦"
        },
         {
          id: 2,
          name: "Heineken can",
          price: 1800,
          description:
            "33cl",
          image: "/drinks/heinekencan.png",
          currency: "₦"
        },
         {
          id: 3,
          name: "Desperado can",
          price: 1000,
          description:
            "33cl",
          image: "/drinks/desperadocan.webp",
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
          image: "/drinks/mrvwater.webp",
          currency: "₦"
        },
        {
          id: 2,
          name: "Aquafina",
          price: 350,
          description:
            "",
          image: "/drinks/aquafinawater.jpg",
          currency: "₦"
        },
        ]
    },
  ];
    const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='h-full'>
      <CgClose onClick={()=>{setShowDrinkModal(false)}} className='w-[20px] h-[20px] mt-[-20px] ml-auto cursor-pointer mb-5' />
        <div className="flex h-[10%] overflow-h-auto justify-center mb-8 sm:mb-6">
            <div className="glass-morphism rounded-full p-1 flex flex-wrap space-x-2">
              {menus.map((menu, index) => (
                <button
                  key={menu.name}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer enhanced-tab px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${activeTab === index
                      ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/30 active'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                >
                  {menu.name}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[75%] p-2 w-[95%] mx-auto overflow-y-auto ">
            <div className='w-full h-[fit-content] flex  gap-5 flex-wrap'>
              {menus[activeTab].items.map(item => (
              <div key={item.id} className="enhanced-card w-full md:w-[32%] rounded-3xl h-[fit-content] /*overflow-hidden*/ shadow-xl shadow-black/30 border border-gray-700">
                <img
                  src={item.image}
                  alt={item.name}
                  className="bg-white/90 w-full h-48 sm:h-56 object-cover rounded-tl-3xl rounded-tr-3xl object-center enhanced-image"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{item.name}</h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4">{item.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-red-400">{item.currency}{item.price.toLocaleString()}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>{
                          if(quantities[item.name]===1){
                            removeItem(item)
                          }else{
                            subQuantity(item)
                          }
                        } }
                        className="enhanced-button bg-gray-700 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="text-lg font-bold text-white w-8 text-center">
                        {quantities[item.name]?quantities[item.name]:0}
                      </span>
                      <button
                        onClick={() => addQuantity(item)}
                        className="enhanced-button bg-red-600 text-white rounded-full p-2 hover:bg-red-500 transition-colors"
                      >
                        <Plus  className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    disabled={quantities[item.name]}
                    className="enhanced-button w-full bg-gradient-to-r from-red-600 to-red-500 disabled:bg-gray-600 disabled:bg-none hover:from-red-500 hover:to-red-400 text-white py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
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