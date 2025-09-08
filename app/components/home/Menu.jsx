import { Minus, Plus, ShoppingCart } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, fromBottomToTop, others } from '../animations'

function Menu({menus, setMenus, setActiveTab, activeTab, addQuantity, subQuantity, removeItem, cart, quantities, addToCart}) {
  
  function handleProteinOption(ITEM, chosen){
    const newMenuItems = menus[0].items.map(item=>{
      if(ITEM.name===item.name){
        return {...item,  selectedProtein:chosen}
      }else{
        return item
      }
    })

    
    const newMenus = menus.map((item, index)=>{
      if(index===0){
        return {...item, items:newMenuItems}
      }else{
        return item
      }
    })
    console.log(newMenus)
    setMenus(newMenus)
  }

  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
          initial={fromBottomToTop.initial}
                        whileInView={fromBottomToTop.whileInView}
                        transition={others.transition}
                        viewport={others.viewport}
          className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 enhanced-gradient-text">
              Our Delicious Menu
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our authentic Nigerian dishes, prepared with fresh ingredients and traditional recipes.
            </p>
          </motion.div>

          <motion.div
          initial={fadeIn.initial}
                        whileInView={fadeIn.whileInView}
                        transition={others.fadeInTransition}
                        viewport={others.viewport}
          className="flex justify-center mb-8 sm:mb-12">
            <div className="glass-morphism rounded-full p-1 flex space-x-2">
              {menus.map((menu, index) => (
                <button
                  key={menu.name}
                  onClick={() => setActiveTab(index)}
                  className={`enhanced-tab px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${activeTab === index
                      ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/30 active'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                >
                  {menu.name}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {menus[activeTab].items.map((item, index) => (
             <motion.div
  initial={fromBottomToTop.initial}
  whileInView={fromBottomToTop.whileInView}
  transition={{ ...others.transition, delay: 0.05 * index }}
  viewport={others.viewport}
  key={index}
  className="enhanced-card max-h-[fit-content] rounded-3xl overflow-hidden shadow-xl shadow-black/30 border border-gray-700"
>
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-48 sm:h-56 object-cover object-center enhanced-image"
  />
  <div className="p-6 sm:p-8">
    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{item.name}</h3>
    <p className="text-gray-400 text-sm sm:text-base mb-4">{item.description}</p>
    {item.proteinOptions && (
      <select
        disabled={quantities[item.name]}
        onChange={(e) => {handleProteinOption(item, e.target.value)}}
        name="proteins"
        id="proteins"
        value={item.selectedProtein}
        className="w-full disabled:cursor-not-allowed disabled:opacity-20 my-4 cursor-pointer px-4 py-3 sm:px-5 sm:py-3.5 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300 text-sm sm:text-base"
      >
        <option value="">Select protein option</option>
        {item.proteinOptions.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    )}
    {(item.selectedProtein || item.name==="Loaded Cheesy Fries") && (
      <button
      onClick={()=>{setActiveTab(1)}}
        className="cursor-pointer w-full mb-4 px-3 py-2 sm:px-4 sm:py-2.5 bg-gray-800 text-white border border-gray-700 rounded-lg hover:border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm sm:text-base font-semibold"
        aria-label="Add more proteins from Extras section"
      >
        {item.name==="Loaded Cheesy Fries"?"Want more cheese? Add from our Extras section":"Want more proteins? Add from our Extras section"}
      </button>
    )}
    <div className="flex justify-between items-center mb-4">
      <span className="text-2xl sm:text-3xl font-bold text-red-400">
        {item.currency}
        {item.price.toLocaleString()}
      </span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => {
            if (quantities[item.name] === 1) {
              removeItem(item);
            } else {
              subQuantity(item);
            }
          }}
          className="enhanced-button bg-gray-700 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
        >
          <Minus className="w-5 h-5" />
        </button>
        <span className="text-lg font-bold text-white w-8 text-center">
          {quantities[item.name] ? quantities[item.name] : 0}
        </span>
        <button
          onClick={() => addQuantity(item)}
          className="enhanced-button bg-red-600 text-white rounded-full p-2 hover:bg-red-500 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
    <button
      onClick={() => addToCart(item)}
      disabled={quantities[item.name]}
      className="enhanced-button cursor-pointer w-full bg-gradient-to-r from-red-600 to-red-500 disabled:bg-gray-600 disabled:bg-none hover:from-red-500 hover:to-red-400 text-white py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2"
    >
      <ShoppingCart className="w-5 h-5" />
      Add to Cart
    </button>
  </div>
</motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Menu