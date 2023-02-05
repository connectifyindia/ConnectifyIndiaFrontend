import React from 'react'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import Image from 'next/image';

const footer = () => {
    return (
        <>
            <div className='w-full  bg-black text-white font-normal'>
                <div className="md:w-4/5 w-[95%] md:py-20 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
                    <div className='md:w-1/3 flex-shrink-0 md:mx-0 mx-auto  text-center md:text-left '>
                        <Link href="#"><img className='w-32 h-32 ml-32 ' src="images/logo.jpg" alt="logo" /></Link>
                        <p className='mt-2 text-[12px] md:text-sm lg:mb-7 mb-3 text-white font-normal tracking-wider leading-5 text-center md:text-left md:w-full mx-auto'>Connectify.Com is an exquisite online Ngo,Education,Legal and Business marketplace that facilitates our buyers to come across illustrations that are pleasurable to their vision and absorbs them entirely into hallucinatory episodes of artists.</p>
                        <div className='font-normal text-sm hover:underline tracking-widest text-amber-200'>
                            <Link href="">Read More about Connectify India</Link>
                        </div>
                    </div>
                    <div className='flex-grow flex flex-wrap justify-evenly w-full md:pl-10 mb-0 md:mt-0 mt-10 md:text-left text-center'>
                        <div className="flex flex-col gap-3 md:gap-5">
                            <div className=''>Usefull links</div>
                            <nav className='list-none flex flex-col gap-2'>
                                <li className='hover:underline'><Link href="https://connectifyglobal.azurewebsites.net/aboutus">About Us</Link></li>
                                <li className='hover:underline'><Link href="https://connectifyglobal.azurewebsites.net/faq">FAQ</Link></li>
                                <li className='hover:underline'>Membership</li>
                                <li className='hover:underline'>Carreers</li>
                                <li className='hover:underline'>T&C</li>
                                <li className='hover:underline'>Privacy Policy</li>
                                <li className='hover:underline'>Art Magagine</li>
                                <li className='hover:underline'><Link href="https://connectifyglobal.azurewebsites.net/contactus">Contact Us</Link></li>
                            </nav>
                        </div>
                        <div className='flex flex-col gap-3 md:gap-5'>
                            <div>Sellers Corner</div>
                            <nav className='list-none flex flex-col gap-2'>
                                <li className='hover:underline'>About Us</li>
                                <li className='hover:underline'>Membership</li>
                                <li className='hover:underline'>Carreers</li>
                                <li className='hover:underline'>T&C</li>
                                <li className='hover:underline'>Privacy Policy</li>
                                <li className='hover:underline'>Art Magagine</li>
                                <li className='hover:underline'>Contact Us</li>
                            </nav>
                        </div>
                        <div className='flex flex-col gap-3 md:gap-5'>
                            <div>Buyers Corner</div>
                            <nav className='list-none flex flex-col gap-2'>
                                <li className='hover:underline'>About Us</li>
                                <li className='hover:underline'>Membership</li>
                                <li className='hover:underline'>Carreers</li>
                                <li className='hover:underline'>T&C</li>
                                <li className='hover:underline'>Privacy Policy</li>
                                <li className='hover:underline'>Art Magagine</li>
                        
                            </nav>
                        </div>
                        <div className='gap-2 tracking-wider  flex-col text-md md:text-xl font-medium text-amber-200 my-auto'>
                            <div className='text-reverse'>www.connectify.com</div>
                            <div>+91 9523032118</div>
                            <div>+91 9538618870</div>
                        </div>

                    </div>

                </div>
               <div className='flex flex-col gap-5 justify-center  w-full'>
               <div className='w-full flex md:flex-row gap-5  justify-around mb-7'>
                    <div className='flex flex-col'>
                        <img className='w-52 h-20' src="https://images.weserv.nl/?url=https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/cards.png&width=300&h=95&output=webp%22" alt="" />
                    </div>
                    <div>
                    <img src="https://images.weserv.nl/?url=https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/google_play.png &amp; width=150 &amp; h=95 &amp;output=webp" alt="Google play store app" width="150" height="95" class="w-32 md:w-40"/>
                    </div>
                </div>
                <hr className=''/>
                <div className='flex flex-col md:flex-row gap-16 justify-evenly items-center mb-7'>
                <div className='flex flex-col justify-center  gap-5'>
                    <div className='text-2xl'>Follow us on</div>
                    <div className='text-amber-200 flex gap-5 text-[30px]'>
                        <Link href="https://www.facebook.com/ConnectifyIndia"><FaFacebook /></Link>
                        <Link href="https://twitter.com/IndiaConnectify"><FaTwitter /></Link>
                        <Link href="https://www.youtube.com"><FaYoutube /></Link>
                        <Link href="https://www.instagram.com/connectifyindia/"> <FaInstagramSquare /></Link>
                        <Link href="https://www.google.com"> <FaGoogle /></Link>
                        <Link href="https://www.linkedin.com"><FaLinkedin /></Link>
                        <Link href="https://www.quora.com"><FaQuora/></Link>
                        <Link href="https://www.blogger.com/blog/posts/7054513857016188005"><FaBloggerB/></Link>
                    </div>

                </div>
                <div className='text-amber-200 text-3xl font-semibold'>
                Recognised by Kamal as Startup
                </div>

                </div>
                <hr className='text-gray-100'/>
                <div className='w-full flex justify-around mb-5'>
                    <div>Copyright © Connectify India Pvt. Ltd. All Rights Reserved</div>
                    <div>T & C Applied*</div>
                </div>

                
               </div>
        
                
            </div>
        </>
    )
}

export default footer
