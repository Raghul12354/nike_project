import React from 'react'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import popularsales from './datas.js/PopularData';
import { useDispatch } from 'react-redux';
import { setAddItemCart } from './app/CartSlice';

const Sales = () => {
    const dispatch = useDispatch();
    const onAddToCart = (id) => {
        const item = popularsales.find((item) => item.id === id);
        dispatch(setAddItemCart(item));
    };
    return (
        <div className='lg:mt-[20%] lg:mx-5 lg:mb-16 md:mb-14 sm:mb-10 md:mt-[20%] sm:mt-[22%] md:mx-8 sm:mx-8 xl:mt-[17%] 2xl:mt-[12%] xl:mx-6'>
            <h1 className='text-left lg:text-5xl font-bold tracking-wide capitalize lg:mb-8 lg:ml-1 md:ml-2 sm:ml-3 md:text-4xl md:mb-3 sm:mb-3 sm:text-3xl'>popular sales</h1>
            <div className='flex sm:justify-evenly md:justify-evenly lg:justify-between items-center lg:flex-row md:flex-col sm:flex-col'>
                {popularsales.map((item) => {
                    const { id, title, text, rating, price, btn, img, color, shadow } = item;
                    return (
                        <>
                            <div key={id} className={`relative bg-gradient-to-b transition-all duration-700 ease-in-out hover:scale-105 ${color} ${shadow}text-white lg:w-[32%] rounded-2xl md:w-full sm:w-full lg:my-0 md:my-3 sm:my-3`}>
                                <div className='flex items-center'>
                                    <div className='pl-6 py-4'>
                                        <h3 className='text-lg font-medium capitalize text-white'>{title}</h3>
                                        <h4 className='text-md font-normal capitalize text-white mb-3'>{text}</h4>
                                        <div className='mt-1 flex'>
                                            <button className='bg-white text-black text-base font-normal rounded-sm py-[2px] px-1'>${price}</button>
                                            <p className='mx-6 text-base text-white font-medium flex flex-row items-center'><AiFillStar className='mx-1 text-white' />{rating}</p>
                                        </div>
                                        <div onClick={() => onAddToCart(id)} className='flex flex-row text-black mt-3 cursor-pointer'>
                                            <button className='p-1 rounded bg-white text-xl'>
                                                <BsFillBagCheckFill />
                                            </button>
                                            <p className='px-3 py-1 capitalize bg-white rounded ml-5 font-medium'>{btn}</p>
                                        </div>
                                    </div>
                                    <img className='lg:w-[180px] lg:h-[180px] absolute lg:-bottom-3 lg:-right-3 xl:-right-0 xl:w-[200px] xl:h-[200px] xl:-bottom-5 sm:right-0 md:right-0 transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer md:w-[230px] md:h-[230px] md:-bottom-6' src={img} alt="" />
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Sales
