import { Minus, Plus, ShoppingCart } from 'lucide-react'
import React from 'react'

function Menu({menus, setActiveTab, activeTab, updateQuantity, cart}) {
  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 enhanced-gradient-text">
              Our Delicious Menu
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our authentic Nigerian dishes, prepared with fresh ingredients and traditional recipes.
            </p>
          </div>

          <div className="flex justify-center mb-8 sm:mb-12">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {menus[activeTab].items.map(item => (
              <div key={item.id} className="enhanced-card rounded-3xl overflow-hidden shadow-xl shadow-black/30 border border-gray-700">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 sm:h-56 object-cover object-center enhanced-image"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{item.name}</h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4">{item.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-red-400">{item.currency}{item.price.toLocaleString()}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="enhanced-button bg-gray-700 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="text-lg font-bold text-white w-8 text-center">
                        {cart[item.id] || 0}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="enhanced-button bg-red-600 text-white rounded-full p-2 hover:bg-red-500 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="enhanced-button w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Menu