import React from 'react'
import Image from 'next/image'
import images from '@/img'
import { SiSolidity, SiMongodb, SiIpfs, SiCsharp, SiReact, SiParitysubstrate } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { BsWindowSidebar } from 'react-icons/bs'
const ProjectCard = (project) => {
    return (
        // border-2 border-dashed border-gray-800
        <>
            <div className='grid xl:grid-cols-[0.5fr_2fr] lg:grid-cols-[1fr_2fr] p-3 shadow-5 dark:shadow-none dark:border-2 dark:border-dashed dark:border-gray-800 rounded-lg text-white dark:hover:border-gray-50 transition-all duration-100 mb-10'>
                <div className='flex items-center justify-center'>
                    <Image src={images.avatar} width={200} height={200} className='rounded-lg' alt='project'/>
                </div>
                <div className='p-2 pl-5 max-[426px]:pl-2'>
                    <h2 className='text-3xl tracking-wider font-semibold text-black dark:text-white'>Multisig Wallet <span className='text-lg'>(Smart contract, BE, FE)</span></h2>
                    <div className='flex mt-1 flex-wrap'>
                        <span className='bg-gray-400 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Solidity <SiSolidity className='ml-1' /></span>
                        <span className='bg-white text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NextJS <TbBrandNextjs className='ml-1' /></span>
                        <span className='bg-[#00ed64] text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit'>MongoDB <SiMongodb className='ml-1' /></span>
                    </div>
                    <p className='my-5 text-[rgb(166,166,166)] tracking-wide'>Fully customize how you manage your crypto assets in individual or group, with the option to require a predefined number of signatures to confirm transactions. Require multiple signers to confirm every transaction in order to execute it, which helps prevent unauthorized access to your wallet</p>
                    <p className='text-black dark:text-white'>Source code: <a href="https://github.com/tule24/MultiSig_Wallet_Contract" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>smart contract</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/tule24/MultiSig_Wallet_FE" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>BE + FE</a></p>
                    <p className='text-black dark:text-white'>Demo: <a href="">youtube</a> <a href="">live demo</a></p>
                </div>
            </div>
            <div className='grid xl:grid-cols-[0.5fr_2fr] lg:grid-cols-[1fr_2fr]  p-3 shadow-5 dark:shadow-none dark:border-2 dark:border-dashed dark:border-gray-800 rounded-lg text-white dark:hover:border-gray-50 transition-all duration-100 mb-10'>
                <div className='flex items-center justify-center'>
                    <Image src={images.avatar} width={200} height={200} className='rounded-lg'  alt='project'/>
                </div>
                <div className='p-2 pl-5 max-[426px]:pl-2'>
                    <h2 className='text-3xl tracking-wider font-semibold text-black dark:text-white'>NFT Marketplace <span className='text-lg'>(Smart contract, BE, FE)</span></h2>
                    <div className='flex mt-1 flex-wrap'>
                        <span className='bg-gray-400 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Solidity <SiSolidity className='ml-1' /></span>
                        <span className='bg-white text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NextJS <TbBrandNextjs className='ml-1' /></span>
                        <span className='bg-[rgb(99,211,215)] text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>IPFS <SiIpfs className='ml-1' /></span>
                        <span className='bg-[#00ed64] text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit'>MongoDB <SiMongodb className='ml-1' /></span>
                    </div>
                    <p className='my-5 text-[rgb(166,166,166)] tracking-wide'>A digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Mint, buy, sell, and discover exclusive digital items.</p>
                    <p className='text-black dark:text-white'>Source code: <a href="https://github.com/tule24/MultiSig_Wallet_Contract" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>smart contract</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/tule24/MultiSig_Wallet_FE" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>BE + FE</a></p>
                    <p className='text-black dark:text-white'>Demo: <a href="">youtube</a> <a href="">live demo</a></p>
                </div>
            </div>
            <div className='grid xl:grid-cols-[0.5fr_2fr] lg:grid-cols-[1fr_2fr]  p-3 shadow-5 dark:shadow-none dark:border-2 dark:border-dashed dark:border-gray-800 rounded-lg text-white dark:hover:border-gray-50 transition-all duration-100 mb-10'>
                <div className='flex items-center justify-center'>
                    <Image src={images.avatar} width={200} height={200} className='rounded-lg'  alt='project'/>
                </div>
                <div className='p-2 pl-5 max-[426px]:pl-2'>
                    <h2 className='text-3xl tracking-wider font-semibold text-black dark:text-white'>Dex Orderbook Exchange<span className='text-lg'> (Blockchain L1, FE)</span></h2>
                    <div className='flex mt-1 flex-wrap'>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Substrate <SiParitysubstrate className='ml-1' /></span>
                        <span className='bg-blue-500 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>ReactJS <SiReact className='ml-1' /></span>
                        <span className='bg-orange-400 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>PolkadotJS</span>
                    </div>
                    <p className='my-5 text-[rgb(166,166,166)] tracking-wide'>No failed transactions, no front-running, no accounts. Dex Orderbook Exchange is a fully non-custodial peer-to-peer orderbook-based cryptocurrency exchange for the DeFi ecosystem built on Substrate.</p>
                    <p className='text-black dark:text-white'>Source code: <a href="https://github.com/tule24/MultiSig_Wallet_Contract" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>smart contract</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/tule24/MultiSig_Wallet_FE" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>FE</a></p>
                    <p className='text-black dark:text-white'>Demo: <a href="">youtube</a> <a href="">live demo</a></p>
                </div>
            </div>
            <div className='grid xl:grid-cols-[0.5fr_2fr] lg:grid-cols-[1fr_2fr]  p-3 shadow-5 dark:shadow-none dark:border-2 dark:border-dashed dark:border-gray-800 rounded-lg text-white dark:hover:border-gray-50 transition-all duration-100'>
                <div className='flex items-center justify-center'>
                    <Image src={images.avatar} width={200} height={200} className='rounded-lg'  alt='project'/>
                </div>
                <div className='p-2 pl-5 max-[426px]:pl-2'>
                    <h2 className='text-3xl tracking-wider font-semibold text-black dark:text-white'>Generate Report Tool<span className='text-lg'> (WindowForm App)</span></h2>
                    <div className='flex mt-1 flex-wrap'>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>C# <SiCsharp className='ml-1' /></span>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>WindowForm <BsWindowSidebar className='ml-1' /></span>
                    </div>
                    <p className='my-5 text-[rgb(166,166,166)] tracking-wide'>Fully customize how you manage your crypto assets in individual or group, with the option to require a predefined number of signatures to confirm transactions. Require multiple signers to confirm every transaction in order to execute it, which helps prevent unauthorized access to your wallet</p>
                    <p className='text-black dark:text-white'>Source code: <a href="https://github.com/tule24/MultiSig_Wallet_Contract" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>smart contract</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/tule24/MultiSig_Wallet_FE" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>BE + FE</a></p>
                    <p className='text-black dark:text-white'>Demo: <a href="">youtube</a> <a href="">live demo</a></p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard