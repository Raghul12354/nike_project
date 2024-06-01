import React, { useEffect, useState } from 'react'
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { HiPlay } from 'react-icons/hi'
import { BsMessenger, BsInstagram, BsYoutube } from 'react-icons/bs'

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);
    return (
        <div className=''>
            <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'>
                {/* Nav */}

                {/* End of Nav */}

                {/* Hero */}
                <div className='grid place-items-center mt-20 '>
                    <h1 className='text-6xl font-extrabold text-white tracking-wider capitalize lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl'>play witth eletric nike</h1>
                    <h1 className='text-6xl font-extrabold text-white tracking-wider capitalize mb-6 lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl'>adapt 2.0 sneakers</h1>
                    <button className='font-semibold lg:text-xl capitalize bg-slate-200 px-3 py-2 rounded-md tracking-wide w-fit md:text-lg sm:text-base'>explore products</button>
                </div>
                {/* End of Hero */}

                {/* Sidebars */}
            </div>
            <div className='flex justify-between relative z-10 opacity-100 items-center px-8 md:top-24 md:right-9 sm:right-7 lg:top-20 sm:top-20 xl:top-16 2xl:top-5'>
                {/* Video side */}
                <div className='relative z-10 opacity-100 pt-[16%] left-[19%]'>
                    <div className='relative transition-all duration-300 ease-in-out hover:scale-105'>
                        <img className='lg:w-[90px] lg:h-[90px] rounded-2xl py-2 md:h-[80px] md:w-[80px] sm:w-[70px] sm:h-[70px] ' src="https://i.ibb.co/p49yRWW/vcover1.jpg" alt="vcover1" />
                        <HiPlay className='absolute top-6 left-6 text-white text-4xl lg:top-6 lg:left-6 sm:top-5 sm:left-5' />
                    </div>
                    <div className='relative transition-all duration-300 ease-in-out hover:scale-105'>
                        <img className='lg:w-[90px] lg:h-[90px] rounded-2xl py-2 md:h-[80px] md:w-[80px] sm:w-[70px] sm:h-[70px]' src="https://i.ibb.co/0JxRPtz/vcover2.jpg" alt="vcover2" />
                        <HiPlay className='absolute top-6 left-6 text-white text-4xl lg:top-6 lg:left-6 sm:top-5 sm:left-5' />
                    </div>
                    <div className='relative transition-all duration-300 ease-in-out hover:scale-105'>
                        <img className='lg:w-[90px] lg:h-[90px] rounded-2xl py-2 md:h-[80px] md:w-[80px] sm:w-[70px] sm:h-[70px]' src="https://i.ibb.co/6gkJVfh/vcover3.jpg" alt="vcover3" />
                        <HiPlay className='absolute top-6 left-6 text-white text-4xl lg:top-6 lg:left-6 sm:top-5 sm:left-5' />
                    </div>
                </div>
                {/* End of Video side */}
                <img className='md:left-7 md:bottom-8 w-[35%] h-[35%] relative z-10 opacity-100 nike-container mx-auto mt-[20%] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill' src="https://i.postimg.cc/90NsZdgH/hero-Copy-removebg-preview-1.png" alt="" />
                {/* Icons */}
                <div className='flex flex-col items-center lg:pt-[14%] mr-8 md:-mr-4 md:pt-20 sm:pt-24 sm:-mr-1'>
                    <button className='lg:text-3xl py-2 text-white md:text-2xl  sm:text-xl'>
                        <a href="https://www.youtube.com/" target="_blank">
                            <AiFillFacebook />
                        </a>
                    </button>
                    <button className='lg:text-3xl py-2 text-white md:text-2xl  sm:text-xl '>
                        <a href="https://www.youtube.com/" target="_blank">
                            <BsMessenger />
                        </a>

                    </button>
                    <button className='lg:text-3xl py-2 text-white md:text-2xl  sm:text-xl '>
                        <a href="https://www.youtube.com/" target="_blank">
                            <BsInstagram />
                        </a>
                    </button>
                    <button className='lg:text-3xl py-2 text-white md:text-2xl  sm:text-xl '>
                        <a href="https://www.youtube.com/" target="_blank">
                            <AiOutlineTwitter />
                        </a>
                    </button>
                    <button className='lg:text-3xl py-2 text-white  md:text-2xl  sm:text-xl'>
                        <a href="https://www.youtube.com/" target="_blank">
                            <BsYoutube />
                        </a>
                    </button>
                </div>
            </div>
            {/*End of Icons */}
        </div>
    )
};

export default Navbar
