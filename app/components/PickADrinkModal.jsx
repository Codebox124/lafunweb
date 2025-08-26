import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";
import Drinks from './Drinks';
import Link from 'next/link';

/*${!interest
          ? "w-full max-w-md mx-auto max-h-[90vh] p-4 sm:p-6"
          : "w-full max-w-6xl mx-auto h-[95vh] sm:h-[90vh] p-3 sm:p-6"
        }*/ 
function PickADrinkModal({ setShowDrinkModal, cart, addToCart, addQuantity, subQuantity, removeItem, quantities, interest, setInterest }) {

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-2 sm:p-4">
      <div className={`relative flex flex-col bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl border border-red-500/30 shadow-2xl shadow-red-600/20 transition-all duration-300 ease-in-out w-full max-w-6xl mx-auto h-[95vh] sm:h-[90vh] p-3 sm:p-6`}>

        {/* Close Button - Fixed positioning */}
        <button
          onClick={() => setShowDrinkModal(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <CgClose className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
        </button>

        {/*!interest ? (
          /* Initial Modal Content *
          <div className="flex flex-col items-center text-center overflow-y-auto">
            <div className="w-full max-w-sm mx-auto mb-4">
              <img
                className='w-full h-auto object-cover rounded-xl'
                src="/drinkmodal.jpg"
                alt="Perfect drink pairing for your meal"
              />
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-white px-2">
              Pair your meal with the perfect drink!
            </h1>

            <button
              onClick={() => setInterest(true)}
              className="w-full max-w-xs px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-full font-bold transition-all text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Pick Drink
            </button>
          </div>
        ) : (
          /* Drinks Selection Content 
          <div className="flex flex-col h-full overflow-hidden">
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-800">
              <Drinks
                setInterest={setInterest}
                setShowDrinkModal={setShowDrinkModal}
                quantities={quantities}
                cart={cart}
                addToCart={addToCart}
                addQuantity={addQuantity}
                subQuantity={subQuantity}
                removeItem={removeItem}
              />
            </div>
          </div>
        )*/}
        {/*Drinks Selection Content */}
          <div className="flex flex-col h-full overflow-hidden">
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-800">
              <Drinks
                setInterest={setInterest}
                setShowDrinkModal={setShowDrinkModal}
                quantities={quantities}
                cart={cart}
                addToCart={addToCart}
                addQuantity={addQuantity}
                subQuantity={subQuantity}
                removeItem={removeItem}
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default PickADrinkModal