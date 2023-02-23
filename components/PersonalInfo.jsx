import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa'
import { MdOutlinePhoneIphone, MdEmail, MdLocationOn, MdCalendarToday } from 'react-icons/md'
import images from '@/img'
const PersonalInfo = () => {
  return (
    <div className='w-full h-screen relative max-[769px]:w-[80vw] max-[769px]:mx-auto max-[426px]:w-[90vw]'>
      <div className='fixed max-[769px]:relative max-[769px]:ml-0 max-[769px]:h-full h-[83%] mt-[15vh] xl:w-[25%] ml-5 lg:w-[34%] mx-auto shadow-1 rounded-lg dark:shadow-none dark:bg-[#111] '>
        <div className='absolute w-40 h-40 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden'>
          <Image src={images.avatar} width={200} height={200} alt='avatar' />
        </div>
        <div className='pt-[90px] text-center dark:text-white text-black'>
          <h1 className='text-2xl font-semibold my-2'>LE CONG TU</h1>
          <button className='rounded-lg px-3 py-2 shadow-2 dark:shadow-none dark:bg-[#1d1d1d] tracking-widest cursor-auto font-semibold'>Web3 Developer</button>
          <div className='flex items-center justify-center mt-5'>
            <button className='p-3 shadow-3 dark:shadow-none dark:bg-[#1d1d1d] dark:text-white dark:hover:bg-slate-200 dark:hover:text-[rgb(66,103,178)] hover:shadow-none rounded-lg text-[rgb(66,103,178)] transition-all duration-200 mr-5'><FaFacebookF /></button>
            <button className='p-3 shadow-3 dark:shadow-none dark:bg-[#1d1d1d] dark:text-white dark:hover:bg-slate-200 dark:hover:text-red-500 hover:shadow-none rounded-lg text-red-500 transition-all duration-100 mr-5'><FaYoutube /></button>
            <button className='p-3 shadow-3 dark:shadow-none dark:bg-[#1d1d1d] dark:text-white dark:hover:bg-slate-200 dark:hover:text-[rgb(0,119,181)] hover:shadow-none rounded-lg text-[rgb(0,119,181)] transition-all duration-100 mr-5'><FaLinkedinIn /></button>
            <button className='p-3 shadow-3 dark:shadow-none dark:bg-[#1d1d1d] dark:text-white dark:hover:bg-slate-200 dark:hover:text-black hover:shadow-none rounded-lg text-black transition-all duration-100'><FaGithub /></button>
          </div>
          <div className='shadow-4 dark:shadow-none dark:bg-[#1d1d1d] mt-8 w-4/5 mx-auto p-2 rounded-lg'>
            {/* {border-gray-100/60 } */}
            <div className=' border-b border-gray-100 dark:border-gray-100/60 flex w-[95%] mx-auto items-center py-4'>
              <div className='w-10 h-10 flex items-center justify-center bg-black rounded-lg'>
                <MdOutlinePhoneIphone size={20} className='text-pink-500' />
              </div>
              <div className='text-left pl-3'>
                <h4 className='text-[12px] text-gray-400'>Phone</h4>
                <p className='font-semibold text-gray-600 dark:text-white'>058 420 4904</p>
              </div>
            </div>
            <div className=' border-b border-gray-100 dark:border-gray-100/60 flex w-[95%] mx-auto items-center py-4'>
              <div className='w-10 h-10 flex items-center justify-center bg-black rounded-lg'>
                <MdEmail size={20} className='text-sky-500' />
              </div>
              <div className='text-left pl-3'>
                <h4 className='text-[12px] text-gray-400'>Email</h4>
                <p className='font-semibold text-gray-600 dark:text-white'>tulecong24@gmail.com</p>
              </div>
            </div>
            <div className=' border-b-[0.5px] border-gray-100 dark:border-gray-100/60 flex w-[95%] mx-auto items-center py-4'>
              <div className='w-10 h-10 flex items-center justify-center bg-black rounded-lg'>
                <MdLocationOn size={20} className='text-lime-500' />
              </div>
              <div className='text-left pl-3'>
                <h4 className='text-[12px] text-gray-400'>Location</h4>
                <p className='font-semibold text-gray-600 dark:text-white'>HoChiMinh City, VietNam</p>
              </div>
            </div>
            <div className='flex w-[95%] mx-auto items-center py-4'>
              <div className='w-10 h-10 flex items-center justify-center bg-black rounded-lg'>
                <MdCalendarToday size={20} className='text-purple-500' />
              </div>
              <div className='text-left pl-3'>
                <h4 className='text-[12px] text-gray-400'>Birthday</h4>
                <p className='font-semibold text-gray-600 dark:text-white'>April 02,1997</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo