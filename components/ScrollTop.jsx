import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { BiArrowToTop } from 'react-icons/bi'
const ScrollTop = () => {
    return (
        <button className='rounded-full w-10 h-10 bg-slate-100 fixed bottom-3 right-3 bg-opacity-50'>
            <BiArrowToTop size={20} className='relative w-10 h-10 text-slate-800' onClick={() => scroll.scrollToTop()}/>
        </button>
    )
}

export default ScrollTop