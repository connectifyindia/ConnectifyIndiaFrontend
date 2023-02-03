import React, { useEffect } from 'react'
import Link from 'next/link';
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleDown } from "react-icons/fa";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Enterpreneur from './enterpreneur';
import Blog from './blog';
import Legalpage from './legalpage';
import Testimonial from './testimonial';
import Success_story from './success_story';
import Counter from './counter';
import Dedicated_team_member from './dedicated_team_member';
import Reg_for_law_and_legal_bootcamp from './reg_for_law_and_legal_bootcamp';
import Video_testimonial from './video_testimonial';
import Document from './document';
import GoToTop from '../components/GoToTop';


const Home_Page = () => {

    return (
        <>
            <Header />

            <div className='w-full'>
                <div className='slide'>
                    <Swiper
                        navigation={true}
                        modules={[Navigation,Autoplay]}
                        autoplay={{delay:3000,
                        disableOnInteraction:false,
                        }}
                        pauseOnMouseEnter={false}
                        className="mySwiper"

                    >
                        <SwiperSlide>
                            <div className='w-full h-screen'>
                                <img className='w-full h-full object-cover' src="images/ConnectifyIndia.png" alt="flower" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-full h-screen'>
                                <img className='w-full h-full object-cover' src="images\Simply Counsel.png" alt="flower" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-full h-screen'>
                                <img className='w-full h-full object-cover' src="images\Legal Aspire.png" alt="flower" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-full h-screen'>
                                <img className='w-full h-full object-cover' src="images\AINAW.png" alt="flower" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-full h-screen'>
                                <img className='w-full h-full object-cover' src="images\Business Connect.png" alt="flower" />
                            </div>
                        </SwiperSlide>


                    </Swiper>

                </div>
                <Counter />
                <Enterpreneur />
                <Blog />
                <Legalpage />
                <Testimonial />
                <Video_testimonial />
                <Success_story />
                <Dedicated_team_member />
                < Reg_for_law_and_legal_bootcamp />
                <Document />


                <GoToTop/>
                <Footer />
            </div>
        </>
    )
}

export default Home_Page