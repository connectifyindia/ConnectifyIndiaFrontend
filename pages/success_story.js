import React from 'react'
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Pagination,Autoplay } from "swiper";



const Success_Story = () => {
    return (
    
            <div className='w-[80%] mx-auto py-32'>
                <div className='text-center  text-2xl font-bold mb-6 text-red-500'>What is Trending</div>

                <div className='text-center  text-5xl font-bold mb-28'>Latest Stories</div>
                <Swiper
                   slidesPerView={2}
                   spaceBetween={30}
                   pagination={{
                     clickable: true,
                   }}
                   modules={[Pagination,Autoplay]}
                   autoplay={{ delay: 3000,
                    disableOnInteraction: false,
                 }}
                   pauseOnMouseEnter={false}
                   breakpoints={{
                    414: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                  }}
                   className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='flex justify-center gap-5 w-full'>
                        <div className='w-72 h-72'>
                            <img className='w-full h-full  object-cover rounded-3xl' src="images\Simply Counsel.png" alt="simply" />
                        </div>
                        <div className='flex flex-col justify-evenly '>
                            <div className='text-2xl font-bold flex-shrink max-w-[300px]'>On Demand Service Booking Software...</div>
                            <div className='text-gray-400 max-w-[300px]'>Service On Demand Service Booking Software Demand Service Booking Software Service On Demand Service Booking Software Demand Service Booking Software...</div>
                            <span className='text-xl text-slate-600 inline max-w-[300px] hover:underline hover:text-indigo-500'>Read more<FaAngleRight className='inline ml-2 cursor-pointer' /></span>

                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>  
                    <div className='flex justify-center gap-5 w-full'>
                        <div className='w-72 h-72'>
                            <img className='w-full h-full  object-cover rounded-3xl' src="images/Business Connect.png" alt="Business Connect" />
                        </div>
                        <div className='flex flex-col justify-evenly '>
                            <div className='text-2xl font-bold flex-shrink max-w-[300px]'>On Demand Service Booking Software...</div>
                            <div className='text-gray-400 max-w-[300px]'>Service On Demand Service Booking Software Demand Service Booking Software Service On Demand Service Booking Software Demand Service Booking Software...</div>
                            <span className='text-xl text-slate-600 inline max-w-[300px] hover:underline hover:text-indigo-500'>Read more<FaAngleRight className='inline ml-2 cursor-pointer' /></span>

                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>  
                    <div className='flex justify-center gap-5 w-full'>
                        <div className='w-72 h-72'>
                            <img className='w-full h-full  object-cover rounded-3xl' src="images\Legal Aspire.png" alt="Legal Aspire" />
                        </div>
                        <div className='flex flex-col justify-evenly '>
                            <div className='text-2xl font-bold flex-shrink max-w-[300px]'>On Demand Service Booking Software...</div>
                            <div className='text-gray-400 max-w-[300px]'>Service On Demand Service Booking Software Demand Service Booking Software Service On Demand Service Booking Software Demand Service Booking Software...</div>
                            <span className='text-xl text-slate-600 inline max-w-[300px] hover:underline hover:text-indigo-500'>Read more<FaAngleRight className='inline ml-2 cursor-pointer' /></span>

                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>  
                    <div className='flex justify-center gap-5 w-full'>
                        <div className='w-72 h-72'>
                            <img className='w-full h-full  object-cover rounded-3xl' src="images\AINAW.png" alt="AINAW" />
                        </div>
                        <div className='flex flex-col justify-evenly '>
                            <div className='text-2xl font-bold flex-shrink max-w-[300px]'>On Demand Service Booking Software...</div>
                            <div className='text-gray-400 max-w-[300px]'>Service On Demand Service Booking Software Demand Service Booking Software Service On Demand Service Booking Software Demand Service Booking Software...</div>
                            <span className='text-xl text-slate-600 inline max-w-[300px] hover:underline hover:text-indigo-500'>Read more<FaAngleRight className='inline ml-2 cursor-pointer' /></span>

                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>  
                    <div className='flex justify-center gap-5 w-full'>
                        <div className='w-72 h-72'>
                            <img className='w-full h-full  object-cover rounded-3xl' src="images\ocean-3605547__340.jpg" alt="Ocean" />
                        </div>
                        <div className='flex flex-col justify-evenly '>
                            <div className='text-2xl font-bold flex-shrink max-w-[300px]'>On Demand Service Booking Software...</div>
                            <div className='text-gray-400 max-w-[300px]'>Service On Demand Service Booking Software Demand Service Booking Software Service On Demand Service Booking Software Demand Service Booking Software...</div>
                            <span className='text-xl text-slate-600 inline max-w-[300px] hover:underline hover:text-indigo-500'>Read more<FaAngleRight className='inline ml-2 cursor-pointer' /></span>

                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>  
                    <div className='flex justify-center gap-5 w-full'>
                        <div className='w-72 h-72'>
                            <img className='w-full h-full  object-cover rounded-3xl' src="images\rose-165819__340.jpg" alt="rose" />
                        </div>
                        <div className='flex flex-col justify-evenly '>
                            <div className='text-2xl font-bold flex-shrink max-w-[300px]'>On Demand Service Booking Software...</div>
                            <div className='text-gray-400 max-w-[300px]'>Service On Demand Service Booking Software Demand Service Booking Software Service On Demand Service Booking Software Demand Service Booking Software...</div>
                            <span className='text-xl text-slate-600 inline max-w-[300px] hover:underline hover:text-indigo-500'>Read more<FaAngleRight className='inline ml-2 cursor-pointer' /></span>

                        </div>
                    </div>
                    </SwiperSlide>
                   



                </Swiper>
                <div className='w-[10%]  mx-auto'><button className='text-white bg-blue-800 px-10 py-4 rounded-md text-2xl my-20'>Checkout</button></div>   
            </div>
            

          
    
    )
}

export default Success_Story