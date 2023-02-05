import React,{useState,useRef,useEffect} from 'react'
import { SiGotomeeting } from "react-icons/si";
import { MdBusinessCenter } from "react-icons/md";
import { FcDocument } from "react-icons/fc";
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaFileWord } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineSecurity } from "react-icons/md";
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';
import { FaChevronRight} from "react-icons/fa";
import {FaEllipsisV} from "react-icons/fa";
import { FaTimes} from "react-icons/fa";
import classNames from 'classnames';
import Image from 'next/image';


const Word = () => {
    const [showDashBoard,setShowDashBoard]=useState(false)
    const showDash=classNames('md:hidden lg:hidden cursor-pointer')
   
     const ShowHideDashBoardIcon=()=>{
        setShowDashBoard((prev)=>!prev)
     }

    return (
        <>

            <Header />
            <div className='grid grid-cols-4'>

                <div className='md:col-span-1 lg:col-span-1 col-span-4'>
                <Dashboard  showDashBoard={showDashBoard}/>
                </div>

                < div className='md:col-span-4 lg:col-span-3 col-span-4 '>
                    <h1 className='capitalize text-2xl font-bold text-center mb-5 '> Welcome In word Page {showDashBoard?<FaTimes onClick={ShowHideDashBoardIcon} className='inline lg:hidden text-3xl font-bold ml-10 cursor-pointer'/>:<FaEllipsisV onClick={ShowHideDashBoardIcon} className="inline lg:hidden text-3xl font-bold float-right hover:bg-gray-200 hover:rounded-full p-2 cursor-pointer"/>}</h1>
                    <div className='bg-slate-100 lg:max-w-[900px] mx-auto mb-10 md:block lg:block hidden px-2 '>
                        <div className='flex justify-start gap-4  items-center'>
                            <div className='md:w-60 w-full h-80 bg-white gap-4 my-8'>
                                <img className='w-full h-full object-cover' src="images\1_Q9bfz0wD837_Irn20O-ERA.jpeg" alt=""/>
                            </div>
                            <div className='md:w-60 w-full h-80 bg-white flex flex-col gap-2 my-8'>
                                <div className='md:w-60 w-full h-40'>
                                    <img className='w-full h-full object-cover' src="images\frangipani-flowers-10997030.jpg" alt=""/>
                                </div>
                                <div className='md:w-60 w-full h-40'>
                                    <img className='w-full h-full object-cover' src="images\ocean-3605547__340.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='w-80 flex flex-col gap-2 my-8'>
                                <div className='text-lg font-bold'>
                                  Explore premium templates
                                </div>
                                <div className='flex-wrap'>
                                Bring your ideas to life with more customizable templates and new creative options when you subscribe to Microsoft 365 subscribe.
                                </div>
                                <div className='text-xl hover:underline text-indigo-400 uppercase'>Browse Templates <span><FaEllipsisV className='inline'/></span> </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4 flex-wrap'>
                        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-indigo-400 gap-4'>
                            <Link href="https://connectifyglobal.azurewebsites.net/">
                                <div className="text-8xl text-sky-400"><FaFileWord/></div>
                                <div className="uppercase text-xl">Word</div>
                            </Link>

                        </div>
                        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-indigo-400 gap-4'>
                            <div className="text-8xl text-sky-400"><FaFileWord/></div>
                            <div className="uppercase text-xl">Word</div>
                        </div>
                        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-indigo-400 gap-4'>
                            <div className="text-8xl text-sky-400"><FaFileWord/></div>
                            <div className="uppercase text-xl">Word</div>
                        </div>
                        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-indigo-400 gap-4'>
                            <div className="text-8xl text-sky-400"><FaFileWord/></div>
                            <div className="uppercase text-xl">Word</div>
                        </div>
                        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
                            <div className="text-8xl text-sky-400"><FaFileWord/></div>
                            <div className="uppercase text-xl">Word</div>
                        </div>
                        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
                            <div className="text-8xl text-sky-400"><FaFileWord/></div>
                            <div className="uppercase text-xl">Word</div>
                        </div>
                        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
                            <div className="text-8xl text-sky-400"><FaFileWord/></div>
                            <div className="uppercase text-xl">Word</div>
                        </div>
                        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
                            <div className="text-8xl text-sky-400"><FaFileWord/></div>
                            <div className="uppercase text-xl">Word</div>
                        </div>
                    </div>

                </div>

            </div>

            <Footer/>

        </>
    )
}

export default Word
