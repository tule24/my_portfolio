import Head from 'next/head'
import { PersonalInfo, NavBar, AboutMe, Projects, Skills } from '@/components'
export default function Home() {
  return (
    <>
      <Head>
        <title>CongTu Portfolio</title>
      </Head>
      <div className='w-full bg-opacity-90'>
        <PersonalInfo />
        <div className='w-2/3 ml-[33vw] p-10'>
          <NavBar />
          <div className='mt-10 bg-[#111] w-full rounded-lg p-5'>
            <AboutMe />
            <Projects />
            <Skills />
          </div>
        </div>
      </div>
    </>
  )
}
