import React, { useState } from 'react'
import { FaUser, FaFolderOpen, FaCode } from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll'
const NavBar = () => {
    const [option, setOption] = useState('')
    return (
        <div className='flex rounded-lg bg-[#111] w-fit py-6 px-10 ml-auto'>
            <Link to='about' offset={50} smooth={true} duration={500}>
                <div className={`w-[80px] h-[80px] flex flex-col transition-all duration-200 hover:bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 hover:text-white items-center justify-center bg-[rgb(33,36,37)] text-[rgb(166,166,166)] rounded-lg mx-4 cursor-pointer ${option === 'about' ? 'bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 text-white' : ''}`} onClick={() => setOption('about')}>
                    <FaUser />
                    <h3 className='mt-2'>About</h3>
                </div>
            </Link>
            <Link to='projects' offset={50} smooth={true} duration={500}>
                <div className={`w-[80px] h-[80px] flex flex-col transition-all duration-200 hover:bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 hover:text-white items-center justify-center bg-[rgb(33,36,37)] text-[rgb(166,166,166)] rounded-lg mx-4 cursor-pointer ${option === 'project' ? 'bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 text-white' : ''}`} onClick={() => setOption('project')}>
                    <FaFolderOpen />
                    <h3 className='mt-2'>Project</h3>
                </div>
            </Link>
            <Link to='skills' offset={50} smooth={true} duration={500}>
                <div className={`w-[80px] h-[80px] flex flex-col transition-all duration-200 hover:bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 hover:text-white items-center justify-center bg-[rgb(33,36,37)] text-[rgb(166,166,166)] rounded-lg mx-4 cursor-pointer ${option === 'skill' ? 'bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-fuchsia-400 text-white' : ''}`} onClick={() => setOption('skill')}>
                    <FaCode />
                    <h3 className='mt-2'>Skill</h3>
                </div>
            </Link>
        </div>
    )
}

export default NavBar