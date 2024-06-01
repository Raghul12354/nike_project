import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const CartEmpty = ({ onCartToggle }) => {
    return (
        <div className='flex justify-center items-center mt-[40%] flex-col'>
            <img src="https://i.ibb.co/y5JbgyX/emptybag-Copy-removebg-preview.png" alt="" />
            <button onClick={onCartToggle} className='bg-orange-500 rounded flex items-center mt-10 shadow-lg shadow-orange-500 py-2 px-6 '>
                <AiOutlineArrowLeft className='w-6 h-6' />
                <p className='text-black text-lg font-medium tracking-wide capitalize mx-3'>
                    back to nike store
                </p>
            </button>
        </div>
    )
}

export default CartEmpty
