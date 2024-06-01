import React from 'react'

const Footer = () => {
    return (
        <div className='bg-theme'>
            <div className='flex items-center justify-center py-12'>
                <div className='lg:mx-10 md:mx-10 sm:mx-10'>
                    <h1 className='text-white font-medium mb-2 lg:text-base md:text-sm sm:text-xs xsm:text-[8px] tracking-wide uppercase'>About Nike</h1>
                    <ul>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>News</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Career</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Invests</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Pruposors</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Sustainability</li>
                    </ul>
                </div>
                <div className='lg:mx-10 md:mx-10 sm:mx-10'>
                    <h1 className='text-white font-medium mb-2 lg:text-base md:text-sm sm:text-xs xsm:text-[8px] tracking-wide uppercase'>Get Help</h1>
                    <ul>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Order Status</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Shipping & Delivery</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Payment Options</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Gift Card Balance</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Contact Us</li>
                        {/* <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>FAQ</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Blog</li> */}
                    </ul>
                </div>
                <div className='lg:mx-10 md:mx-10 sm:mx-10'>
                    <h1 className='text-white font-medium mb-2 lg:text-base md:text-sm sm:text-xs xsm:text-[2px] tracking-wide uppercase'>Company</h1>
                    <ul>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Gift Cards</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Promotions</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Find A Store</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Signup</li>
                        <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Nike Jouneral</li>
                        {/* <li className='text-white lg:text-base md:text-sm sm:text-xs xsm:text-[8px] capitalize flex flex-col'>Send Us Feeback</li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer