import Head from 'next/head'
import { PersonalInfo, NavBar, AboutMe, Projects, Skills, ScrollTop } from '@/components'
export default function Home() {
  return (
    <>
      <Head>
        <title>CongTu Portfolio</title>
        <meta name='description' content='CongTu Portfolio' />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <div className='w-full bg-opacity-90 flex max-[769px]:flex-col bg-gray-300 dark:bg-slate-800'>
        <PersonalInfo />
        <div className='xl:p-5 lg:pl-[20vw] max-[769px]:p-10 max-[769px]:mt-28 max-[426px]:p-5 '>
          <NavBar />
          <div className='mt-10 rounded-lg p-5 shadow-1 dark:bg-[#111] dark:shadow-none'>
            <AboutMe />
            <Projects />
            <Skills />
          </div>
        </div>
        <ScrollTop />
      </div>
    </>
  )
}
