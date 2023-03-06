import React from 'react'
import images from '@/img'
import Image from 'next/image'

const TECHS = [
  {
    src: images.javascript,
    title: 'Javascript',
    style: 'shadow-yellow-500'
  },
  {
    src: images.solidity,
    title: 'Solidity',
    style: 'shadow-zinc-600'
  },
  {
    src: images.rust,
    title: 'Rust',
    style: 'shadow-zinc-600'
  },
  {
    src: images.react,
    title: 'ReactJS',
    style: 'shadow-blue-500'
  },
  {
    src: images.nextjs,
    title: 'NextJS',
    style: 'shadow-white'
  },
  {
    src: images.node,
    title: 'NodeJS',
    style: 'shadow-green-500'
  },
  {
    src: images.redux,
    title: 'Redux',
    style: 'shadow-violet-500'
  },
  {
    src: images.express,
    title: 'ExpressJS',
    style: 'shadow-zinc-600'
  },
  {
    src: images.mongodb,
    title: 'MongoDB',
    style: 'shadow-green-500'
  }
]
const Skills = () => {
  return (
    <div id='skills' className='mt-10'>
      <div className='flex items-center'>
        <h1 className='ribbon'>Skills</h1>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 max-[426px]:px-0">
        {TECHS.map(({ src, title, style }, i) => (
          <div
            key={i}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-black bg-opacity-70 dark:bg-opacity-50 ${style}`}
          >
            <Image src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4 font-semibold text-white text-lg">{title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills