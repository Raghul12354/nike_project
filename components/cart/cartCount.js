import React from 'react'
import { AiOutlineDoubleLeft, AiFillCloseSquare } from 'react-icons/ai'

const CartCount = ({ onCartToggle, totalQTY }) => {
    return (
        <div className='bg-white h-11 flex items-center justify-between p-3'>
            <div className='flex items-center'>
                <button onClick={onCartToggle}>
                    <AiOutlineDoubleLeft className='h-5 w-5' />
                </button>
                <h3 className='text-black text-base font-medium capitalize ml-2'>your cart
                    <span className='text-white bg-black px-2 py-0.5 capitalize rounded-lg ml-1 text-sm font-normal'>{totalQTY}(items)</span>
                </h3>
            </div>
            <button onClick={onCartToggle}>
                <AiFillCloseSquare className='w-7 h-7' />
            </button>
        </div>
    )
}

export default CartCount
