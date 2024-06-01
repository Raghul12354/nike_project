import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import story from './datas.js/storiesData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Stories = () => {
    const [readMore, setReadMore] = useState(false);
    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
            1200: { perPage: 3},
            991: { perPage: 2.3},
            768: { perPage: 2},
            500: { perPage: 1.3},
            425: { perPage: 1},
        },
    };
    return (
        <div className='lg:mt-[10%] md:mt-28 sm:mt-24 flex flex-col mx-16 mb-12'>
            <h1 className='text-left capitalize lg:text-5xl md:text-4xl sm:text-3xl font-bold tracking-wide mb-8'>Top stories</h1>
            <Splide className='grid items-center w-[100%]' options={splideOptions}>
                {story.map((item, i) => {
                    const { img, time, by, like, title, text, btn, url } = item;
                    return (
                        <SplideSlide key={i} className='shadow-2xl rounded-md md:w-[110%] md:h-[20%]'>
                            <img className='w-full object-cover rounded-tl-lg rounded-tr-lg' src={img} alt="" />
                            <div className='lg:px-4 md:px-4 sm:px-0'>
                                <div>
                                    <div className='flex justify-between mb-6 mt-4'>
                                        <p className='flex items-center font-semibold text-sm'>
                                            <AiFillHeart className='text-red-500 mr-1 text-base' />
                                            {like}
                                        </p>
                                        <h2 className='font-semibold text-sm'>{time}</h2>
                                        <h5 className='text-sm text-blue-500 font-medium'># {by}</h5>
                                    </div>

                                    <div className='mb-8'>
                                        <h1 className='font-bold lg:text-lg md:text-[23px] sm:text-[15px] tracking-wide'>{title}</h1>
                                        <p className='text-gray-500 lg:text-base font-normal md:text-sm sm:text-xs'>{
                                            readMore ? text : `${text.substring(0, 100)}...`
                                        }</p>
                                    </div>
                                </div>
                            </div>
                            <button className='text-white w-full bg-black text-lg capitalize px-4 py-2 rounded-lg'><a target="_blank" href={url}>{btn}</a></button>
                        </SplideSlide>
                    )
                })};
            </Splide>
        </div>
    )
}

export default Stories;
