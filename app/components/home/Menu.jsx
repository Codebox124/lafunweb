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
    <section id="menu" className="relative py-32 lg:py-40 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
        {/* Ultra-modern animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {/* Modern grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="container-modern relative z-10">
          {/* Header Section - Enhanced */}
          <motion.div
          initial={fromBottomToTop.initial}
          whileInView={fromBottomToTop.whileInView}
          transition={others.transition}
          viewport={others.viewport}
          className="max-w-4xl mx-auto text-center mb-20">
            <motion.div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-500/30 rounded-full mb-8 backdrop-blur-xl shadow-lg shadow-red-500/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-red-500 to-orange-500"></span>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 text-sm font-black tracking-wide">
                Authentic Nigerian Cuisine
              </span>
              <ShoppingCart className="w-4 h-4 text-orange-400" />
            </motion.div>
            
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 display-font leading-tight tracking-tighter">
              Explore Our <br/>
              <span className="inline-block bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Delicious Dishes
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Authentic Nigerian cuisine prepared with the finest ingredients and traditional recipes
            </p>
          </motion.div>

          {/* Category Tabs - Ultra Modern */}
          <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.whileInView}
          transition={others.fadeInTransition}
          viewport={others.viewport}
          className="flex justify-center mb-20">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-3 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-2xl shadow-2xl">
              {menus.map((menu, index) => (
                <button
                  key={menu.name}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-8 py-4 rounded-2xl text-base font-black transition-all duration-500 whitespace-nowrap ${activeTab === index
                      ? 'bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white shadow-2xl shadow-red-600/50 scale-110'
                      : 'text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105'
                    }`}
                >
                  {activeTab === index && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 blur-xl opacity-60 -z-10 animate-pulse"></div>
                  )}
                  {menu.name}
                </button>
              ))}
            </div>
          </motion.div>
         
            {menus[activeTab].name==="Snacks and Parfait" && 
            <div className="relative mb-16 max-w-5xl mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                <video width="320" height="240" loop autoPlay muted className='w-full object-cover h-[400px]'>
                  <source src="/snacksandparfaitvid.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
                  <p className="text-white font-bold text-lg">Snacks & Parfait Showcase</p>
                </div>
              </div>
            </div>
            }
          
          <div className="modern-grid">
            {menus[activeTab].items.map((item, index) => (
             <motion.div
  initial={fromBottomToTop.initial}
  whileInView={fromBottomToTop.whileInView}
  transition={{ ...others.transition, delay: 0.03 * index }}
  viewport={others.viewport}
  key={index}
  className="group relative bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent rounded-3xl overflow-hidden border border-white/[0.15] hover:border-gradient-to-r hover:from-red-500/50 hover:to-orange-500/50 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_60px_-15px_rgba(239,68,68,0.3)] backdrop-blur-xl"
>
  {/* Image Section */}
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-orange-600/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-64 object-cover object-center transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    
    {/* Floating price tag - redesigned */}
    <div className="absolute -bottom-4 right-6 z-20">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur-lg opacity-60"></div>
        <div className="relative bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 rounded-2xl shadow-2xl border border-white/30">
          <span className="text-white font-bold text-2xl tracking-tight">{item.currency}{item.price.toLocaleString()}</span>
        </div>
      </div>
    </div>
    
    {/* Trending badge */}
    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
      <span className="text-yellow-400 text-sm">★</span>
      <span className="text-white text-xs font-semibold">Popular</span>
    </div>
  </div>
  {/* Content Section */}
  <div className="pt-10 pb-7 px-7">
    <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">{item.name}</h3>
    <p className="text-gray-400 text-sm mb-7 leading-relaxed line-clamp-2">{item.description}</p>
    
    {/* Protein Selection */}
    {item.proteinOptions && (
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-4 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
          <label className="text-xs text-gray-300 font-semibold uppercase tracking-wider">Select Protein</label>
        </div>
        <select
          disabled={quantities[item.name]}
          onChange={(e) => {handleProteinOption(item, e.target.value)}}
          name="proteins"
          id="proteins"
          value={item.selectedProtein}
          className="w-full disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer px-5 py-4 bg-gradient-to-r from-white/[0.08] to-white/[0.05] text-white border border-white/20 rounded-2xl focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 focus:bg-white/[0.12] outline-none transition-all duration-300 text-base font-medium backdrop-blur-sm hover:bg-white/[0.1] hover:border-red-500/30 hover:scale-[1.02]"
        >
          <option value="">Choose your protein...</option>
          {item.proteinOptions.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    )}
    
    {/* Extra protein CTA */}
    {(item.selectedProtein || item.name==="Loaded Cheesy Fries") && (
      <button
      onClick={()=>{setActiveTab(1)}}
        className="cursor-pointer w-full mb-6 px-5 py-3 bg-gradient-to-r from-orange-500/15 to-orange-600/10 text-orange-400 border border-orange-500/30 rounded-2xl hover:border-orange-500/50 hover:from-orange-500/20 hover:to-orange-600/15 hover:scale-[1.02] transition-all duration-300 text-sm font-semibold flex items-center justify-center gap-2"
        aria-label="Add more proteins from Extras section"
      >
        <span className="text-base">+</span>
        {item.name==="Loaded Cheesy Fries"?"Want extra cheese?":"Want extra proteins?"}
      </button>
    )}
    
    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
    
    {/* Quantity & Add to Cart Section */}
    <div className="space-y-4">
      {/* Quantity Control - Inline Modern */}
      <div className="flex items-center justify-between p-4 bg-white/[0.04] border border-white/10 rounded-2xl">
        <span className="text-sm text-gray-300 font-semibold">Quantity</span>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              if (quantities[item.name] === 1) {
                removeItem(item);
              } else {
                subQuantity(item);
              }
            }}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 text-white hover:bg-red-600 hover:scale-110 transition-all disabled:opacity-20 disabled:hover:bg-white/10 disabled:hover:scale-100 border border-white/10"
            disabled={!quantities[item.name]}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-2xl font-bold text-white min-w-[3rem] text-center tabular-nums">
            {quantities[item.name] ? quantities[item.name] : 0}
          </span>
          <button
            onClick={() => addQuantity(item)}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-500 hover:to-orange-500 hover:scale-110 transition-all shadow-lg shadow-red-600/30"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Add to Cart Button - Premium */}
      <button
        onClick={() => addToCart(item)}
        disabled={quantities[item.name]}
        className="relative w-full group/btn overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-size-200 disabled:from-gray-700/40 disabled:to-gray-600/40 disabled:opacity-30 hover:bg-right-bottom text-white py-5 rounded-2xl font-bold transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_8px_30px_rgb(239,68,68,0.3)] hover:shadow-[0_8px_40px_rgb(239,68,68,0.5)] disabled:shadow-none text-base hover:-translate-y-1 border border-white/10 hover:border-white/20"
      >
        <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
        <span>{quantities[item.name] ? '✓ Added to Cart' : 'Add to Cart'}</span>
      </button>
    </div>
  </div>
</motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Menu

