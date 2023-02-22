import React from 'react'
import Image from 'next/image'
import images from '@/img'
import { SiSolidity, SiMongodb, SiIpfs, SiCsharp, SiReact, SiParitysubstrate } from 'react-icons/si'
import { TbBrandNextjs, TbLetterP } from 'react-icons/tb'
import { BsWindowSidebar } from 'react-icons/bs'
const ProjectCard = (project) => {
    return (
        <>
            <div className='flex items-center p-3 border-2 border-dashed border-gray-800 rounded-lg text-white hover:border-gray-50 transition-all duration-100 mb-10'>
                <div className='w-2/3'>
                    <Image src={images.avatar} width={200} height={200} className='rounded-lg' />
                </div>
                <div className='p-2 pl-5'>
                    <h2 className='text-3xl tracking-wider font-semibold'>Multisig Wallet <span className='text-lg'>(Smart contract, BE, FE)</span></h2>
                    <div className='flex mt-1'>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Solidity <SiSolidity className='ml-1' /></span>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NextJS <TbBrandNextjs className='ml-1' /></span>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit'>MongoDB <SiMongodb className='ml-1' /></span>
                    </div>
                    <p className='my-5'>Fully customize how you manage your crypto assets in individual or group, with the option to require a predefined number of signatures to confirm transactions. Require multiple signers to confirm every transaction in order to execute it, which helps prevent unauthorized access to your wallet</p>
                    <p>Source code: <a href="https://github.com/tule24/MultiSig_Wallet_Contract" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>smart contract</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/tule24/MultiSig_Wallet_FE" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>BE + FE</a></p>
                    <p>Demo: <a href="">youtube</a> <a href="">live demo</a></p>
                </div>
            </div>
            <div className='flex items-center p-3 border-2 border-dashed border-gray-800 rounded-lg text-white hover:border-gray-50 transition-all duration-100 mb-10'>
                <div className='w-2/3'>
                    <Image src={images.avatar} width={200} height={200} className='rounded-lg' />
                </div>
                <div className='p-2 pl-5'>
                    <h2 className='text-3xl tracking-wider font-semibold'>NFT Marketplace <span className='text-lg'>(Smart contract, BE, FE)</span></h2>
                    <div className='flex mt-1'>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Solidity <SiSolidity className='ml-1' /></span>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>NextJS <TbBrandNextjs className='ml-1' /></span>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>IPFS <SiIpfs className='ml-1' /></span>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit'>MongoDB <SiMongodb className='ml-1' /></span>
                    </div>
                    <p className='my-5'>Fully customize how you manage your crypto assets in individual or group, with the option to require a predefined number of signatures to confirm transactions. Require multiple signers to confirm every transaction in order to execute it, which helps prevent unauthorized access to your wallet</p>
                    <p>Source code: <a href="https://github.com/tule24/MultiSig_Wallet_Contract" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>smart contract</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/tule24/MultiSig_Wallet_FE" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>BE + FE</a></p>
                    <p>Demo: <a href="">youtube</a> <a href="">live demo</a></p>
                </div>
            </div>
            <div className='flex items-center p-3 border-2 border-dashed border-gray-800 rounded-lg text-white hover:border-gray-50 transition-all duration-100 mb-10'>
                <div className='w-2/3'>
                    <Image src={images.avatar} width={200} height={200} className='rounded-lg' />
                </div>
                <div className='p-2 pl-5'>
                    <h2 className='text-3xl tracking-wider font-semibold'>Dex Orderbook Exchange<span className='text-lg'> (Blockchain L1, FE)</span></h2>
                    <div className='flex mt-1'>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>Substrate <SiParitysubstrate className='ml-1' /></span>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>ReactJS <SiReact className='ml-1' /></span>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>PolkadotJS <TbLetterP className='ml-1' /></span>
                    </div>
                    <p className='my-5'>Fully customize how you manage your crypto assets in individual or group, with the option to require a predefined number of signatures to confirm transactions. Require multiple signers to confirm every transaction in order to execute it, which helps prevent unauthorized access to your wallet</p>
                    <p>Source code: <a href="https://github.com/tule24/MultiSig_Wallet_Contract" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>smart contract</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/tule24/MultiSig_Wallet_FE" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>BE + FE</a></p>
                    <p>Demo: <a href="">youtube</a> <a href="">live demo</a></p>
                </div>
            </div>
            <div className='flex items-center p-3 border-2 border-dashed border-gray-800 rounded-lg text-white hover:border-gray-50 transition-all duration-100'>
                <div className='w-2/3'>
                    <Image src={images.avatar} width={200} height={200} className='rounded-lg' />
                </div>
                <div className='p-2 pl-5'>
                    <h2 className='text-3xl tracking-wider font-semibold'>Generate Report Tool<span className='text-lg'> (WindowForm App)</span></h2>
                    <div className='flex mt-1'>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>C# <SiCsharp className='ml-1' /></span>
                        <span className='bg-gray-200 text-black py-1 px-2 rounded-lg text-sm flex items-center w-fit mr-2'>WindowForm <BsWindowSidebar className='ml-1' /></span>
                    </div>
                    <p className='my-5'>Fully customize how you manage your crypto assets in individual or group, with the option to require a predefined number of signatures to confirm transactions. Require multiple signers to confirm every transaction in order to execute it, which helps prevent unauthorized access to your wallet</p>
                    <p>Source code: <a href="https://github.com/tule24/MultiSig_Wallet_Contract" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>smart contract</a>
                        &nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/tule24/MultiSig_Wallet_FE" target='_blank' className='px-2 py-1 bg-[#1d1d1d] rounded-lg text-violet-500'>BE + FE</a></p>
                    <p>Demo: <a href="">youtube</a> <a href="">live demo</a></p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard