import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";
import Drinks from './Drinks';
function PickADrinkModal({setShowDrinkModal, cart, updateQuantity}) {
  const [interest, setInterest] = useState(false)
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`relative flex flex-col items-center text-center bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 sm:p-8 ${!interest?"w-full md:w-[448px]":"w-full h-full"} overflow-y-hidden transition-w duration-300 ease-in-out border  border-red-500/30 shadow-2xl shadow-red-600/20`}>
      {
        !interest?<>
        <CgClose onClick={()=>{setShowDrinkModal(false)}} className='w-[20px] h-[20px] mt-[-20px] ml-auto cursor-pointer mb-5' />
      <img className='max-w-[382px]' src="/drinkmodal.jpg" alt="drinkmodal" />
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white mt-5">Pair your meal with the perfect drink!</h1>
      <div>
        <button onClick={()=>{setInterest(true)}} className="cursor-pointer flex-1 px-4 py-3 sm:px-6 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-full font-bold transition-all text-sm sm:text-base">
          Pick Drink
        </button>
        
      </div>
      </>:<Drinks setInterest={setInterest} cart={cart} updateQuantity={updateQuantity} />
      }
      </div>
    </div>
  )
}

export default PickADrinkModal 