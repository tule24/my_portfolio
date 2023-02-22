import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa'
import { MdOutlinePhoneIphone, MdEmail, MdLocationOn, MdCalendarToday } from 'react-icons/md'
import images from '@/img'
const PersonalInfo = () => {
  return (
    <div className='fixed top-0 left-0 w-1/3 h-screen'>
      <div className='relative h-[82vh] mt-[15vh] w-3/4 mx-auto bg-[#111] rounded-lg'>
        <div className='absolute w-40 h-40 bg-black left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden'>
          <Image src={images.avatar} width={200} height={200} alt='avatar' />
        </div>
        <div className='pt-[90px] text-center text-white '>
          <h1 className='text-2xl font-semibold my-2'>LE CONG TU</h1>
          <button className='rounded-lg px-3 py-2 bg-[#1d1d1d] tracking-widest cursor-auto'>Web3 Developer</button>
          <div className='flex items-center justify-center mt-5'>
            <button className='p-3 bg-[#1d1d1d] rounded-lg hover:bg-slate-200 hover:text-[rgb(66,103,178)] transition-all duration-200 mr-5'><FaFacebookF /></button>
            <button className='p-3 bg-[#1d1d1d] rounded-lg hover:bg-slate-200 hover:text-red-500 transition-all duration-100 mr-5'><FaYoutube /></button>
            <button className='p-3 bg-[#1d1d1d] rounded-lg hover:bg-slate-200 hover:text-[rgb(0,119,181)]  transition-all duration-100 mr-5'><FaLinkedinIn /></button>
            <button className='p-3 bg-[#1d1d1d] rounded-lg hover:bg-slate-200 hover:text-black transition-all duration-100'><FaGithub /></button>
          </div>
          <div className='bg-[#1d1d1d] mt-8 w-4/5 mx-auto p-2 rounded-lg'>
            <div className=' border-b border-gray-100/60 flex w-[95%] mx-auto items-center py-4'>
              <div className='w-10 h-10 flex items-center justify-center bg-black rounded-lg'>
                <MdOutlinePhoneIphone size={20} className='text-pink-500'/>
              </div>
              <div className='text-left pl-3'>
                <h4 className='text-[12px] text-gray-400'>Phone</h4>
                <p className='font-semibold'>058 420 4904</p>
              </div>
            </div>
            <div className=' border-b border-gray-100/60 flex w-[95%] mx-auto items-center py-4'>
              <div className='w-10 h-10 flex items-center justify-center bg-black rounded-lg'>
                <MdEmail size={20} className='text-sky-500'/>
              </div>
              <div className='text-left pl-3'>
                <h4 className='text-[12px] text-gray-400'>Email</h4>
                <p className='font-semibold'>tulecong24@gmail.com</p>
              </div>
            </div>
            <div className=' border-b-[0.5px] border-gray-100/60 flex w-[95%] mx-auto items-center py-4'>
              <div className='w-10 h-10 flex items-center justify-center bg-black rounded-lg'>
                <MdLocationOn size={20} className='text-lime-500'/>
              </div>
              <div className='text-left pl-3'>
                <h4 className='text-[12px] text-gray-400'>Location</h4>
                <p className='font-semibold'>HoChiMinh City, VietNam</p>
              </div>
            </div>
            <div className='flex w-[95%] mx-auto items-center py-4'>
              <div className='w-10 h-10 flex items-center justify-center bg-black rounded-lg'>
                <MdCalendarToday size={20} className='text-purple-500'/>
              </div>
              <div className='text-left pl-3'>
                <h4 className='text-[12px] text-gray-400'>Birthday</h4>
                <p className='font-semibold'>April 02,1997</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo