import React from 'react'
import { AiOutlineMinusCircle } from "react-icons/ai";
import { LuCirclePlus } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

function Cart({cart, setCart, addQuantity, subQuantity, removeItem}) {
  return (
    <div  className='fixed gap-5 overflow-y-auto overflow-x-auto z-60 right-0 top-[120px] bg-black/95 h-[300px] w-full md:w-[500px] flex flex-col p-5 rounded-lg shadow-lg'>
        {cart.length!=0 ? 
        cart.map((item, index)=>{
            return <div className='flex items-start w-[450px] gap-5 p-2 h-[100px] shadow-xl shadow-black/30  rounded-lg bg-gray-900'  key={index}>
                <img className='bg-white/90 w-[100px] h-full object-cover' src={item.image} alt={item.name} />
                <div className='flex flex-col'>
                    <span>{item.name}</span>
                    <span>{item.currency}{item.price * item.quantity}</span>
                </div>
                <div className='flex items-center ml-auto h-full gap-5'>
                    <AiOutlineMinusCircle
                    onClick={() =>{
                          if(item.quantity===1){
                            removeItem(item)
                          }else{
                            subQuantity(item)
                          }
                        } }
                    className='w-[25px] h-[25px] cursor-pointer' />
                    {item.quantity}
                    <LuCirclePlus
                    onClick={() => addQuantity(item)}
                    className='w-[25px] h-[25px] cursor-pointer' />
                </div>
            </div>
        }): <div className='w-full h-full flex flex-col items-center justify-center text-gray-500'>
            <MdOutlineShoppingCart className='w-[30px] h-[30px] mb-3' />
            <p className='text-xl'>Order something first</p>
        </div>
        }
    </div>
  )
}

export default Cart