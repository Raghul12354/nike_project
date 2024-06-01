import React, { useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from './app/CartSlice';

const Nav = () => {
    const totalQTY = useSelector(selectTotalQTY);

    const dispatch = useDispatch();
    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

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
        <header className={
            !navState ? 'absolute left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[11vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
        }>
            <div className='w-full flex justify-between items-center px-8'>
                <img className={`w-[100px] h-[100px] ${navState && "filter brightness-0"}`} src="https://i.ibb.co/6mLS3g1/nike-logo-115309645398lsn6qzriq-removebg-preview.png" alt="" />
                <div className='flex'>
                    <AiOutlineSearch className={`${navState && "text-slate-900 transition-all duration-300"} mx-1 text-3xl text-white`} />
                    <AiOutlineHeart className={`${navState && "text-slate-900 transition-all duration-300"} mx-1 text-3xl text-white`} />
                    <button onClick={onCartToggle} className='relative z-20'>
                        <HiOutlineShoppingBag className={`${navState && "text-slate-900 transition-all duration-300"} mx-1 text-3xl text-white`} />
                        <p className={`${navState && "text-black transition-all duration-300 "} bg-white rounded-full py-1 px-2 font-medium absolute -bottom-6 left-2 `}>{totalQTY}</p>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Nav;
