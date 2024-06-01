import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemCart } from '../app/CartSlice';
const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity } }) => {

  const dispatch = useDispatch();
  const removeItem = () => {
    dispatch(setRemoveItemCart({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  const IncreaseItem = () => {
    dispatch(setIncreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  const DecreaseItem = () => {
    dispatch(setDecreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  return (
    <>
      {/* Single Item */}
      <div className='flex justify-between items-center p-4 '>
        <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded h-[110px] w-[170px] hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
          <img className=' object-fill absolute' src={img} alt="" />
          <button className='bg-white text-black text-sm font-medium rounded py-[2px] px-1 absolute top-2 right-2'>${price}</button>
        </div>

        <div className='flex flex-col justify-center items-center mr-32'>
          <h3 className='text-lg font-medium capitalize '>{title}</h3>
          <h4 className='text-md font-normal capitalize  mb-3'>{text}</h4>
          <div className='flex items-center'>
            <button onClick={IncreaseItem} className='px-2 mx-4 py-0.5 text-base font-medium rounded bg-black text-white'>+</button>
            <button className='px-2 mx-4 py-0.5 text-base font-medium rounded bg-black text-white'>{cartQuantity}</button>
            <button onClick={DecreaseItem} className='px-2 mx-4 py-0.5 text-base font-medium rounded bg-black text-white'>-</button>
          </div>
        </div>

        <div className=''>
          <h5 className='font-medium text-base mb-9'>${price * cartQuantity}</h5>
          <button onClick={removeItem} className='p-1 rounded-md bg-black cursor-pointer'>
            <BsFillTrashFill className=' h-5 w-5 text-white' />
          </button>
        </div>
      </div>
      {/* End of Single Item */}

    </>
  )
}

export default CartItem;

