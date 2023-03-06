import React from 'react'
import Image from 'next/image'
import images from '@/img'
import { SiSolidity, SiMongodb, SiIpfs, SiCsharp, SiReact, SiParitysubstrate, SiNodedotjs, SiTailwindcss, SiRust, SiRedux } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { BsWindowSidebar } from 'react-icons/bs'
const ProjectCard = (project) => {
    return (
        <>
            <div className='group grid xl:grid-cols-[0.5fr_1fr] lg:grid-cols-[1fr_2fr] p-3 shadow-5 dark:shadow-none dark:border-2 dark:border-dashed dark:border-gray-800 rounded-lg text-white dark:hover:border-gray-50 transition-all duration-100 mb-10'>
                <div className='relative flex items-center justify-center'>
                    <Image src={images.wallet} className='rounded-lg h-full' alt='project' />
                    <div className='absolute bg-white bg-opacity-95 w-0 h-full rounded-lg text-black p-5 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-100'>
                        <h3 className='text-lg font-semibold'>Main features: </h3>
                        <ul className='list-disc pl-5 pt-2 text-lg'>
                            <li>Create the wallet with multiple owners and approvals required</li>
                            <li>Deposit, transfer ether</li>
                            <li>Update owners, approvals required</li>
                            <li>Wallet statistic</li>
                        </ul>
                    </div>
                </div>
                <div className='p-2 pl-5 max-[426px]:pl-2'>
                    <h2 className='text-3xl tracking-wider font-semibold text-black dark:text-white'>Multisig Wallet <span className='text-lg'>(Smart contract, BE, FE)</span></h2>
                    <div className='flex mt-1 flex-wrap'>
                        <span className='bg-gray-400 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Solidity <SiSolidity className='ml-1' /></span>
                        <span className='bg-white text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NextJS <TbBrandNextjs className='ml-1' /></span>
                        <span className='bg-violet-500 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>ReduxToolkit <SiRedux className='ml-1' /></span>
                        <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit'>MongoDB <SiMongodb className='ml-1' /></span>
                    </div>
                    <p className='my-5 text-slate-900 dark:text-[rgb(166,166,166)] tracking-wide'>Fully customize how you manage your crypto assets in individual or group, with the option to require a predefined number of signatures to confirm transactions. Require multiple signers to confirm every transaction in order to execute it, which helps prevent unauthorized access to your wallet</p>
                    <p className='text-black dark:text-white'>Source code: <a href="https://github.com/tule24/MultiSig_Wallet_Contract" target='_blank' className='px-2 py-1 bg-gray-400 dark:bg-[#1d1d1d] rounded-lg dark:text-violet-500'>Smart contract</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/tule24/MultiSig_Wallet_FE" target='_blank' className='px-2 py-1 bg-gray-400 dark:bg-[#1d1d1d] rounded-lg dark:text-violet-500'>BE + FE</a></p>
                    <p className='text-black dark:text-white mt-1'>Demo: <a href="https://www.youtube.com/watch?v=h5wzYKiDfWU" target='_blank' className='text-red-500 font-semibold'>Youtube</a> | <a href="">Live demo</a> <span className='text-[12px] italic text-yellow-600 dark:text-yellow-300'>(Require metamask wallet and ETH goerli testnet)</span></p>
                </div>
            </div>
            <div className='group grid xl:grid-cols-[0.5fr_1fr] lg:grid-cols-[1fr_2fr]  p-3 shadow-5 dark:shadow-none dark:border-2 dark:border-dashed dark:border-gray-800 rounded-lg text-white dark:hover:border-gray-50 transition-all duration-100 mb-10'>
                <div className='relative flex items-center justify-center'>
                    <Image src={images.nft} className='rounded-lg h-full' alt='project' />
                    <div className='absolute bg-white bg-opacity-95 w-0 h-full rounded-lg text-black p-5 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-100'>
                        <h3 className='text-lg font-semibold'>Main features: </h3>
                        <ul className='list-disc pl-5 pt-2 text-lg'>
                            <li>Mint, list, update price NFT</li>
                            <li>Buy & sell NFT</li>
                        </ul>
                    </div>
                </div>
                <div className='p-2 pl-5 max-[426px]:pl-2'>
                    <h2 className='text-3xl tracking-wider font-semibold text-black dark:text-white'>NFT Marketplace <span className='text-lg'>(Smart contract, BE, FE)</span></h2>
                    <div className='flex mt-1 flex-wrap'>
                        <span className='bg-gray-400 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Solidity <SiSolidity className='ml-1' /></span>
                        <span className='bg-white text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NextJS <TbBrandNextjs className='ml-1' /></span>
                        <span className='bg-[rgb(99,211,215)] text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>IPFS <SiIpfs className='ml-1' /></span>
                        <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit'>MongoDB <SiMongodb className='ml-1' /></span>
                    </div>
                    <p className='my-5 text-slate-900 dark:text-[rgb(166,166,166)] tracking-wide'>A digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Mint, buy, sell, and discover exclusive digital items.</p>
                    <p className='text-black dark:text-white'>Source code: <a href="https://github.com/tule24/NFT_Marketplace_Contract" target='_blank' className='px-2 py-1 bg-gray-400 dark:bg-[#1d1d1d] rounded-lg dark:text-violet-500'>Smart contract</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/tule24/NFT-Marketplace" target='_blank' className='px-2 py-1 bg-gray-400 dark:bg-[#1d1d1d] rounded-lg dark:text-violet-500'>BE + FE</a></p>
                    <p className='text-black dark:text-white mt-1'>Demo: <a href="https://youtu.be/NI7Djuy6Ii8" target='_blank' className='text-red-500 font-semibold'>Youtube</a> | <a href="">Live demo</a> <span className='text-[12px] italic text-yellow-600 dark:text-yellow-300'>(Require metamask wallet and ETH goerli testnet)</span></p>
                </div>
            </div>
            <div className='group grid xl:grid-cols-[0.5fr_1fr] lg:grid-cols-[1fr_2fr]  p-3 shadow-5 dark:shadow-none dark:border-2 dark:border-dashed dark:border-gray-800 rounded-lg text-white dark:hover:border-gray-50 transition-all duration-100 mb-10'>
                <div className='relative flex items-center justify-center'>
                    <Image src={images.dex} className='rounded-lg h-full' alt='project' />
                    <div className='absolute bg-white bg-opacity-95 w-0 h-full rounded-lg text-black p-5 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-100'>
                        <h3 className='text-lg font-semibold'>Main features: </h3>
                        <ul className='list-disc pl-5 pt-2 text-lg'>
                            <li>Issue, transfer token</li>
                            <li>Create Tradepair</li>
                            <li>Make limit order, buy, sell, cancel order</li>
                        </ul>
                    </div>
                </div>
                <div className='p-2 pl-5 max-[426px]:pl-2'>
                    <h2 className='text-3xl tracking-wider font-semibold text-black dark:text-white'>Dex Orderbook Exchange<span className='text-lg'> (Blockchain L1, FE)</span></h2>
                    <div className='flex mt-1 flex-wrap'>
                        <span className='bg-gray-200 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Substrate <SiParitysubstrate className='ml-1' /></span>
                        <span className='bg-gray-200 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Rust <SiRust className='ml-1' /></span>
                        <span className='bg-blue-500 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>ReactJS <SiReact className='ml-1' /></span>
                        <span className='bg-violet-500 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>ReduxToolkit <SiRedux className='ml-1' /></span>
                        <span className='bg-orange-400 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>PolkadotJS</span>
                    </div>
                    <p className='my-5 text-slate-900 dark:text-[rgb(166,166,166)] tracking-wide'>This project took part in the hackathon held by Octopus Network and VBI. Dex Orderbook Exchange is a fully non-custodial peer-to-peer orderbook-based cryptocurrency exchange for the DeFi ecosystem built on Substrate.</p>
                    <p className='text-black dark:text-white'>Source code: <a href="https://github.com/tule24/substrate_dex_orderbook" target='_blank' className='px-2 py-1 bg-gray-400 dark:bg-[#1d1d1d] rounded-lg dark:text-violet-500'>Blockchain L1</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/tule24/substrate-dex-fe" target='_blank' className='px-2 py-1 bg-gray-400 dark:bg-[#1d1d1d] rounded-lg dark:text-violet-500'>FE</a></p>
                    <p className='text-black dark:text-white mt-1'>Demo: <a href="https://youtu.be/BvUq3oLQxXA" target='_blank' className='text-red-500 font-semibold'>Youtube</a></p>
                </div>
            </div>
            <div className='group grid xl:grid-cols-[0.5fr_1fr] lg:grid-cols-[1fr_2fr]  p-3 shadow-5 dark:shadow-none dark:border-2 dark:border-dashed dark:border-gray-800 rounded-lg text-white dark:hover:border-gray-50 transition-all duration-100 mb-10'>
                <div className='relative flex items-center justify-center'>
                    <Image src={images.ecommerce} className='rounded-lg h-full' alt='project' />
                    <div className='absolute bg-white bg-opacity-95 w-0 h-full rounded-lg text-black p-5 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-100'>
                        <h3 className='text-lg font-semibold'>Main features: </h3>
                        <ul className='list-disc pl-5 pt-2 text-lg'>
                            <li>Sign-up, sign-in, forgotPassword via email</li>
                            <li>Authentication with JWT</li>
                            <li>Management, buy and sale goods</li>
                        </ul>
                    </div>
                </div>
                <div className='p-2 pl-5 max-[426px]:pl-2'>
                    <h2 className='text-3xl tracking-wider font-semibold text-black dark:text-white'>Ecommerce API <span className='text-lg'> (BE)</span></h2>
                    <div className='flex mt-1 flex-wrap'>
                        <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NodeJS <SiNodedotjs className='ml-1' /></span>
                        <span className='bg-[#00ed64] text-black px-2 rounded-lg text-sm flex items-center w-fit'>MongoDB <SiMongodb className='ml-1' /></span>
                    </div>
                    <p className='my-5 text-slate-900 dark:text-[rgb(166,166,166)] tracking-wide'>Full-featured e-commerce API that supports registration, login, forgotPassword via email, authentication with JWT, management, buy and sale of goods.</p>
                    <p className='text-black dark:text-white'>Source code: <a href="https://github.com/tule24/ecommerce_api" target='_blank' className='px-2 py-1 bg-gray-400 dark:bg-[#1d1d1d] rounded-lg dark:text-violet-500'>BE</a></p>
                    <p className='text-black dark:text-white mt-1'>Demo: <a href="https://documenter.getpostman.com/view/22237843/2s93CSprP9" target='_blank' className=' cursor-pointer text-violet-600'>Postman API Documentation</a></p>
                </div>
            </div>
            <div className='grid xl:grid-cols-[0.5fr_1fr] lg:grid-cols-[1fr_2fr] p-3 shadow-5 dark:shadow-none dark:border-2 dark:border-dashed dark:border-gray-800 rounded-lg text-white dark:hover:border-gray-50 transition-all duration-100 mb-10'>
                <div className='flex items-center justify-center'>
                    <Image src={images.tool} className='rounded-lg h-full' alt='project' />
                </div>
                <div className='p-2 pl-5 max-[426px]:pl-2'>
                    <h2 className='text-3xl tracking-wider font-semibold text-black dark:text-white'>Generate Report Tool<span className='text-lg'> (WindowForm App)</span></h2>
                    <div className='flex mt-1 flex-wrap'>
                        <span className='bg-gray-200 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>C# <SiCsharp className='ml-1' /></span>
                        <span className='bg-gray-200 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>WindowForm <BsWindowSidebar className='ml-1' /></span>
                    </div>
                    <p className='my-5 text-slate-900 dark:text-[rgb(166,166,166)] tracking-wide'>This is a tool support generating reports from API. I made it so that my team can write daily reports automatically rather than by hand.</p>
                    <p className='text-black dark:text-white'>Source code: <a href="https://github.com/tule24/report_generate_tool" target='_blank' className='px-2 py-1 bg-gray-400 dark:bg-[#1d1d1d] rounded-lg dark:text-violet-500'>Tool</a></p>
                    <p className='text-black dark:text-white mt-1'>Demo: <span className='italic text-sm'>There is no demo for this project due to security concerns.</span></p>
                </div>
            </div>
            <div className='grid xl:grid-cols-[0.5fr_1fr] lg:grid-cols-[1fr_2fr] p-3 shadow-5 dark:shadow-none dark:border-2 dark:border-dashed dark:border-gray-800 rounded-lg text-white dark:hover:border-gray-50 transition-all duration-100'>
                <div className='flex items-center justify-center'>
                    <Image src={images.portfolio} className='rounded-lg h-full' alt='project' />
                </div>
                <div className='p-2 pl-5 max-[426px]:pl-2'>
                    <h2 className='text-3xl tracking-wider font-semibold text-black dark:text-white'>Personal Portfolio <span className='text-lg'> (FE)</span></h2>
                    <div className='flex mt-1 flex-wrap'>
                        <span className='bg-white text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NextJS <TbBrandNextjs className='ml-1' /></span>
                        <span className='bg-blue-400 text-black px-2 rounded-lg text-sm flex items-center w-fit mr-2'>TailwindCss <SiTailwindcss className='ml-1' /></span>
                    </div>
                    <p className='my-5 text-slate-900 dark:text-[rgb(166,166,166)] tracking-wide'>Personal portfolio with dark/light themes</p>
                    <p className='text-black dark:text-white'>Source code: <a href="https://github.com/tule24/my_portfolio" target='_blank' className='px-2 py-1 bg-gray-400 dark:bg-[#1d1d1d] rounded-lg dark:text-violet-500'>FE</a></p>
                    <p className='text-black dark:text-white mt-1'>Demo: <span className='italic text-sm'>You're in here</span></p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard