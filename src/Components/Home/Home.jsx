import React from 'react'
import '../layout/layout.css'
import Header from '../layout/Header'
import { CityRoutes } from './CityRoutes'
import { InstructionComponent } from './InstructionComponent'
import SignatureComponent from './SignatureComponent'
import { DownloadApp } from './DownloadApp'
import { Form } from './Form'
import Navbar from '../CityToCIty/Navbar'
import Download from '../CityToCIty/Download'
import Footer from '../CityToCIty/Footer'



export const Home = () => {


    return (
        <>
            <Navbar />
            <div className="relative ">
                <div className="container mx-auto px-[16px]">
                    <h1 className='text-[32px] leading-[40px] font-bold my-[20px]'>
                        Your global chauffeur service
                    </h1>
                </div>
                <div className="background relative">
                    <div className="img">
                        <img src="/assets/images/Hero_02c.webp" width='100%' height='auto' alt="" />
                    </div>
                    <div className="hidden md:block ">
                    
                    <Form />
                    </div>
                </div>
                <div className="block md:hidden ">
                    
                    <Form />
                    </div>
             <Download />
                <div className="bg-[#FBFBFD]">
                    <div className="container mx-auto px-[16px]">
                        <div className="py-[64px]">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 md:col-span-6 flex items-center">
                                    <div>
                                        <h1 className='text-[20px] leading-[28px] uppercase'>Click to learn more about our <br />     sustainability partners</h1>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <div className="flex justify-between flex-wrap">
                                        <img src="/assets/images/south-pole.svg" alt="" />
                                        <div style={{ border: '0.5px solid #000' }}></div>
                                        <img src="/assets/images/leaders-for-climate-action-logo-black.svg" alt="" />
                                        <div style={{ border: '0.5px solid #000' }}></div>

                                        <img src="/assets/images/the-climate-pledge.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[40px] bg-[#FBFBFD]">
                    <div className="container mx-auto px-[16px]">
                        <div className="text-center">
                            <h1 className='text-[44px] font-semibold'>
                                Our services
                            </h1>
                        </div>
                        <div className="grid grid-cols-12 py-3 gap-2">
                            <div className="col-span-12 md:col-span-4">
                                <div className='flex flex-col gap-2'>
                                    <img src="/assets/images/CTC.jpg" className='rounded-[8px]' alt="" />
                                    <h2 className='text-[24px]'>
                                        City to City rides
                                    </h2>
                                    <p className='text-[#181a1f]'>
                                        Your stress-free solution for traveling between cities, with chauffeurs across the globe.
                                    </p>
                                    <h3 className='undeline'>
                                        Learn more
                                    </h3>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                                <div className='flex flex-col gap-2'>
                                    <img src="/assets/images/CH.jpg" className='rounded-[8px]' alt="" />
                                    <h2 className='text-[24px]'>
                                        Chauffeur hailing
                                    </h2>
                                    <p className='text-[#181a1f]'>
                                        Enjoy the quality of a traditional chauffeur, with the convenience of riding within minutes of booking.
                                    </p>
                                    <h3 className='undeline'>
                                        Learn more
                                    </h3>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                                <div className='flex flex-col gap-2'>
                                    <img src="/assets/images/AT.jpg" className='rounded-[8px]' alt="" />
                                    <h2 className='text-[24px]'>
                                        Airport transfers
                                    </h2>
                                    <p className='text-[#181a1f]'>
                                        With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze.
                                    </p>
                                    <h3 className='undeline'>
                                        Learn more
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CityRoutes />
                <InstructionComponent />
                <div className="bg-[#fbfbfd] py-[40px]">
                    <div className="container mx-auto px-[16px] text-center">
                        <h1 className='tracking-[.15px] text-[44px] leading-[56px] text-center'>
                            “New chauffeur-hailing service seeks to challenge Uber, Lyft in city rides”
                        </h1>
                        <p className='my-[40px] tracking-[.15px] text-[20px]'>
                            The Wall Street Journal
                        </p>
                    </div>
                </div>
                <SignatureComponent />
                <DownloadApp />
                <Footer />
                 
            </div>
        </>
    )
}

