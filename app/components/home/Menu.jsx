import { Minus, Plus, ShoppingCart, X, Check, Beef, Cake } from "lucide-react";
import React, { useState } from 'react'
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

  const [showExtras, setShowExtras] = useState(false)
  const [showSnacks, setShowSnacks] = useState(false)
  const [menuItemForProtein, setMenuItemForProtein] = useState("")
  return (
    <section
        id="menu"
        className="relative py-24 lg:py-32 bg-gradient-to-b from-amber-50 via-orange-50 to-red-50 overflow-hidden"
      >

        {
          showExtras && 
          <ExtrasModal removeItem={removeItem} subQuantity={subQuantity} addQuantity={addQuantity} addToCart={addToCart} setShowExtras={setShowExtras} itemName={menuItemForProtein} menus={menus} activeTab={1} quantities={quantities} />
        }
        {
          showSnacks && 
          <SnacksModal removeItem={removeItem} subQuantity={subQuantity} addQuantity={addQuantity} addToCart={addToCart} setShowSnacks={setShowSnacks} itemName={menuItemForProtein} menus={menus} activeTab={2} quantities={quantities} />
        }
         <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-orange-200/30 via-red-200/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-red-200/30 via-orange-200/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Modern grid pattern 
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        */}
        <div className="container-modern relative z-10">
          {/* Header Section - Enhanced */}
          <motion.div
          initial={fromBottomToTop.initial}
          whileInView={fromBottomToTop.whileInView}
          transition={others.transition}
          viewport={others.viewport}
          className="max-w-4xl mx-auto text-center mb-20">
            {/*<motion.div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-500/30 rounded-full mb-8 backdrop-blur-xl shadow-lg shadow-red-500/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-red-500 to-orange-500"></span>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 text-sm font-black tracking-wide">
                Authentic Nigerian Cuisine
              </span>
              <ShoppingCart className="w-4 h-4 text-orange-400" />
            </motion.div>*/}
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              LÁFÚN
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-red-600">
                Signature Collection
              </span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
              Every dish crafted with love, tradition, and the finest
              ingredients
            </p>

            {/*<p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Authentic Nigerian cuisine prepared with the finest ingredients and traditional recipes
            </p>*/}
          </motion.div>

          

          {/* Category Tabs - Ultra Modern 
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
         */}

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
          
          <div className="flex gap-10 flex-row overflow-x-auto h-[fit-content] overflow-y-hidden md:flex-row md:flex-wrap items-start">

          
            {menus[activeTab].items.map((item, index) => (
             <motion.div
  initial={fromBottomToTop.initial}
  whileInView={fromBottomToTop.whileInView}
  transition={{ ...others.transition, delay: 0.03 * index }}
  viewport={others.viewport}
  key={index}
  className="/*group*/ flex-none w-[85%] md:w-[30%] min-h-[567px] h-[fit-content] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-orange-100 hover:border-orange-300 flex flex-col"
>
  {/* Image Section */}
  <div className="relative overflow-hidden aspect-square flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm px-5 py-2 rounded-2xl shadow-xl border-2 border-orange-200">
            <span className="text-gray-900 font-black text-xl">
              {item.currency}
              {item.price.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
          ★ Popular
        </div>
  </div>
  {/* Content Section */}
  <div className="pt-10 pb-7 px-7">
   <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2">
          {item.description}
        </p>
    
    {/* Protein Selection */}
    {item.proteinOptions && (
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <label className="text-xs text-gray-700 font-bold uppercase tracking-wider mb-2 block">
              Select Protein
            </label>
        </div>
        <select
          disabled={quantities[item.name]}
          onChange={(e) => {handleProteinOption(item, e.target.value)}}
          name="proteins"
          id="proteins"
          value={item.selectedProtein}
          className="w-full text-black cursor-pointer px-4 py-3 bg-orange-50 text-gray-900 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all duration-300 text-sm font-semibold hover:border-orange-300"
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
      onClick={()=>{setShowExtras(true); setMenuItemForProtein(item.name)}}
        className="cursor-pointer w-full mb-6 px-5 py-3 bg-gradient-to-r from-orange-500/15 to-orange-600/10 text-orange-400 border border-orange-500/30 rounded-2xl hover:border-orange-500/50 hover:from-orange-500/20 hover:to-orange-600/15 hover:scale-[1.02] transition-all duration-300 text-sm font-semibold flex items-center justify-center gap-2"
        aria-label="Add more proteins from Extras section"
      >
        <span className="text-base">+</span>
        {item.name==="Loaded Cheesy Fries"?"Want extra cheese?":"Want extra proteins?"}
      </button>
    )}

    {(item.selectedProtein || item.name==="Loaded Cheesy Fries") && (
      <button
      onClick={()=>{setShowSnacks(true); setMenuItemForProtein(item.name)}}
        className="cursor-pointer w-full mb-6 px-5 py-3 bg-gradient-to-r from-orange-500/15 to-orange-600/10 text-orange-400 border border-orange-500/30 rounded-2xl hover:border-orange-500/50 hover:from-orange-500/20 hover:to-orange-600/15 hover:scale-[1.02] transition-all duration-300 text-sm font-semibold flex items-center justify-center gap-2"
        aria-label="Add more proteins from Extras section"
      >
        <span className="text-base">+</span>
        Want Extra Snacks
      </button>
    )}

    
    
    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
    
    {/* Quantity & Add to Cart Section */}
    <div className="space-y-4">
      {/* Quantity Control - Inline Modern */}
      
      {
        quantities[item.name] && <div className="flex items-center justify-between p-4 bg-white/[0.04] border border-white/10 rounded-2xl">
        <span className="text-sm text-gray-700 font-bold">Quantity</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (quantities[item.name] === 1) {
                removeItem(item);
              } else {
                subQuantity(item);
              }
            }}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-gray-900 hover:bg-red-500 hover:text-white transition-all disabled:opacity-30 border border-orange-200 font-bold shadow-sm"
            disabled={!quantities[item.name]}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-2xl font-black text-gray-900 min-w-[3rem] text-center">
            {quantities[item.name] ? quantities[item.name] : 0}
          </span>
          <button
            onClick={() => addQuantity(item)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-gray-900 hover:bg-green-500 hover:text-white transition-all shadow-sm border border-orange-200 font-bold"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      }
      
      {/* Add to Cart Button - Premium */}
      <button
        onClick={() => addToCart(item)}
        disabled={quantities[item.name]}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 disabled:from-gray-300 disabled:to-gray-400 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:shadow-none text-base hover:-translate-y-0.5 disabled:translate-y-0 border-2 border-transparent hover:border-orange-200 disabled:cursor-not-allowed"
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







function ExtrasModal({activeTab, menus, quantities, itemName, setShowExtras, removeItem, subQuantity, addQuantity, addToCart}){
  return <div className="fixed inset-0 z-200 backdrop-blur-[20px] flex items-center justify-center ">
    <div className="w-[85vw] h-[85vh] bg-white p-4 flex flex-col">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-black font-extrabold text-2xl mb-4">Extra Protein for {itemName}</h1>
        <X onClick={()=>setShowExtras(false)} className="text-3xl text-black cursor-pointer " />
      </div>
      {/*<div className="flex gap-10 flex-col md:flex-row md:flex-wrap overflow-y-auto   items-center justify-center">*/}
      <div className="flex gap-10 flex-row overflow-x-auto overflow-y-hidden md:overflow-y-auto md:flex-row md:flex-wrap items-center">

          
            {menus[activeTab].items.map((item, index) => (
             <motion.div
  initial={fromBottomToTop.initial}
  whileInView={fromBottomToTop.whileInView}
  transition={{ ...others.transition, delay: 0.03 * index }}
  viewport={others.viewport}
  key={index}
  className="/*group*/ flex-none w-[85%] md:w-[30%] h-[fit-content] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-orange-100 hover:border-orange-300 flex flex-col"
>
  {/* Image Section */}
  <div className="relative overflow-hidden aspect-square flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm px-5 py-2 rounded-2xl shadow-xl border-2 border-orange-200">
            <span className="text-gray-900 font-black text-xl">
              {item.currency}
              {item.price.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
          ★ Popular
        </div>
  </div>
  {/* Content Section */}
  <div className="pt-10 pb-7 px-7">
   <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2">
          {item.description}
        </p>
    
    {/* Protein Selection */}
    {item.proteinOptions && (
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <label className="text-xs text-gray-700 font-bold uppercase tracking-wider mb-2 block">
              Select Protein
            </label>
        </div>
      </div>
    )}
   

    
    
    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
    
    {/* Quantity & Add to Cart Section */}
    <div className="space-y-4">
      {/* Quantity Control - Inline Modern */}
      {
        quantities[item.name] && <div className="flex items-center justify-between p-4 bg-white/[0.04] border border-white/10 rounded-2xl">
        <span className="text-sm text-gray-700 font-bold">Quantity</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (quantities[item.name] === 1) {
                removeItem(item);
              } else {
                subQuantity(item);
              }
            }}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-gray-900 hover:bg-red-500 hover:text-white transition-all disabled:opacity-30 border border-orange-200 font-bold shadow-sm"
            disabled={!quantities[item.name]}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-2xl font-black text-gray-900 min-w-[3rem] text-center">
            {quantities[item.name] ? quantities[item.name] : 0}
          </span>
          <button
            onClick={() => addQuantity(item)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-gray-900 hover:bg-green-500 hover:text-white transition-all shadow-sm border border-orange-200 font-bold"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      }
      
      {/* Add to Cart Button - Premium */}
      <button
        onClick={() => addToCart(item)}
        disabled={quantities[item.name]}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 disabled:from-gray-300 disabled:to-gray-400 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:shadow-none text-base hover:-translate-y-0.5 disabled:translate-y-0 border-2 border-transparent hover:border-orange-200 disabled:cursor-not-allowed"
      >
        <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
        <span>{quantities[item.name] ? '✓ Added to Cart' : 'Add to Cart'}</span>
      </button>
    </div>
  </div>
</motion.div>
            ))}
          </div>
          <button onClick={()=>{setShowExtras(false)}} className="w-full p-3 rounded-lg text-xl cursor-pointer bg-black text-white">Done Adding</button>
    </div>
  </div> 
        
}




function SnacksModal({activeTab, menus, quantities, itemName, setShowSnacks, removeItem, subQuantity, addQuantity, addToCart}){
  return <div className="fixed inset-0 z-200 backdrop-blur-[20px] flex items-center justify-center ">
    <div className="w-[85vw] h-[85vh] bg-white p-4 flex flex-col">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-black font-extrabold text-2xl mb-4">Extra Snacks for {itemName}</h1>
        <X onClick={()=>setShowSnacks(false)} className="text-3xl text-black cursor-pointer " />
      </div>
      <div className="flex gap-10 flex-row overflow-x-auto overflow-y-hidden md:overflow-y-auto md:flex-row md:flex-wrap items-center">

          
            {menus[activeTab].items.map((item, index) => (
             <motion.div
  initial={fromBottomToTop.initial}
  whileInView={fromBottomToTop.whileInView}
  transition={{ ...others.transition, delay: 0.03 * index }}
  viewport={others.viewport}
  key={index}
  className="/*group*/ flex-none w-[85%] md:w-[30%] h-[fit-content] bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-orange-100 hover:border-orange-300 flex flex-col"
>
  {/* Image Section */}
  <div className="relative overflow-hidden aspect-square flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm px-5 py-2 rounded-2xl shadow-xl border-2 border-orange-200">
            <span className="text-gray-900 font-black text-xl">
              {item.currency}
              {item.price.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
          ★ Popular
        </div>
  </div>
  {/* Content Section */}
  <div className="pt-10 pb-7 px-7">
   <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2">
          {item.description}
        </p>
    
    {/* Protein Selection */}
    {item.proteinOptions && (
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <label className="text-xs text-gray-700 font-bold uppercase tracking-wider mb-2 block">
              Select Protein
            </label>
        </div>
      </div>
    )}
   

    
    
    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
    
    {/* Quantity & Add to Cart Section */}
    <div className="space-y-4">
      {/* Quantity Control - Inline Modern */}
       {
        quantities[item.name] && <div className="flex items-center justify-between p-4 bg-white/[0.04] border border-white/10 rounded-2xl">
        <span className="text-sm text-gray-700 font-bold">Quantity</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (quantities[item.name] === 1) {
                removeItem(item);
              } else {
                subQuantity(item);
              }
            }}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-gray-900 hover:bg-red-500 hover:text-white transition-all disabled:opacity-30 border border-orange-200 font-bold shadow-sm"
            disabled={!quantities[item.name]}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-2xl font-black text-gray-900 min-w-[3rem] text-center">
            {quantities[item.name] ? quantities[item.name] : 0}
          </span>
          <button
            onClick={() => addQuantity(item)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-gray-900 hover:bg-green-500 hover:text-white transition-all shadow-sm border border-orange-200 font-bold"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      }
      
      {/* Add to Cart Button - Premium */}
      <button
        onClick={() => addToCart(item)}
        disabled={quantities[item.name]}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 disabled:from-gray-300 disabled:to-gray-400 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:shadow-none text-base hover:-translate-y-0.5 disabled:translate-y-0 border-2 border-transparent hover:border-orange-200 disabled:cursor-not-allowed"
      >
        <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
        <span>{quantities[item.name] ? '✓ Added to Cart' : 'Add to Cart'}</span>
      </button>
    </div>
  </div>
</motion.div>
            ))}
          </div>
          <button onClick={()=>{setShowSnacks(false)}} className="w-full p-3 rounded-lg text-xl cursor-pointer bg-black text-white">Done Adding</button>
    </div>
  </div> 
        
}
