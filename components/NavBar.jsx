import React, { useEffect, useState } from 'react'
import { FaUser, FaFolderOpen, FaCode } from 'react-icons/fa'
import { CiLight, CiDark } from 'react-icons/ci'
import { Link } from 'react-scroll'
import { useTheme } from 'next-themes'
const NavBar = () => {
    const [option, setOption] = useState('')
    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        // bg-[#111]  bg-[rgb(33,36,37)] hover:bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400
        <div className='flex items-center rounded-lg shadow-5 dark:shadow-none dark:bg-[#111] w-fit py-6 px-10 ml-auto max-[769px]:mx-auto max-[426px]:px-0 max-[320px]:flex-wrap max-[320px]:justify-evenly'>
            <Link to='about' offset={50} smooth={true} duration={500}>
                <div className={`shadow-4 dark:shadow-none dark:bg-[rgb(33,36,37)] dark:hover:bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 dark:hover:border-none hover:shadow-none hover:border hover:border-gray-300 w-[80px] h-[80px] flex flex-col transition-all duration-200  hover:text-white items-center justify-center text-[rgb(166,166,166)] rounded-lg mx-4 cursor-pointer ${option === 'about' ? 'bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 text-white' : ''}`} onClick={() => setOption('about')}>
                    <FaUser />
                    <h3 className='mt-2'>About</h3>
                </div>
            </Link>
            <Link to='projects' offset={50} smooth={true} duration={500}>
                <div className={`shadow-4 dark:shadow-none dark:bg-[rgb(33,36,37)] dark:hover:bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 dark:hover:border-none hover:shadow-none hover:border hover:border-gray-300 w-[80px] h-[80px] flex flex-col transition-all duration-200 hover:text-white items-center justify-center text-[rgb(166,166,166)] rounded-lg mx-4 cursor-pointer ${option === 'project' ? 'bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 text-white' : ''}`} onClick={() => setOption('project')}>
                    <FaFolderOpen />
                    <h3 className='mt-2'>Project</h3>
                </div>
            </Link>
            <Link to='skills' offset={50} smooth={true} duration={500}>
                <div className={`shadow-4 dark:shadow-none dark:bg-[rgb(33,36,37)] dark:hover:bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 dark:hover:border-none hover:shadow-none hover:border hover:border-gray-300 w-[80px] h-[80px] flex flex-col transition-all duration-200 hover:text-white items-center justify-center text-[rgb(166,166,166)] rounded-lg mx-4 cursor-pointer ${option === 'skill' ? 'bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 text-white' : ''}`} onClick={() => setOption('skill')}>
                    <FaCode />
                    <h3 className='mt-2'>Skill</h3>
                </div>
            </Link>
            <button className='shadow-4 dark:shadow-none dark:bg-[rgb(33,36,37)] dark:hover:bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 dark:hover:border-none w-10 h-10 text-3xl rounded-full' onClick={() => changeTheme()}>
                {theme === 'light' ? <CiLight className='mx-auto' /> : <CiDark className='mx-auto' />}
            </button>
        </div>
    )
}

export default NavBar