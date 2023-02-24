import React,{useState,useRef,useEffect} from 'react'
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog_Dashboard from '../components/Blog-Dashboard';
import {FaEllipsisV} from "react-icons/fa";
import { FaTimes} from "react-icons/fa";
import classNames from 'classnames';
const Project_Blog = () => {
    const [showDashBoard,setShowDashBoard]=useState(false)
    const showDash=classNames('md:hidden lg:hidden cursor-pointer')
   
     const ShowHideDashBoardIcon=()=>{
        setShowDashBoard((prev)=>!prev)
     }

    return (
        <>

            <Header/>
            <div className='grid grid-cols-4'>

                <div className='md:col-span-1 lg:col-span-1 col-span-4'>
                <Blog_Dashboard  showDashBoard={showDashBoard}/>
                </div>
                <div className='md:col-span-4 lg:col-span-3 col-span-4 mt-2'>
                <div className='flex justify-center items-center gap-4 flex-wrap'>
                <div className='flex flex-col justify-start gap-5 mb-6 hover:text-sky-500'>
                        <div className='md:w-72 h-72 w-full  relative'> 
                            <img className='w-full h-full rounded-md' src="images\legal1.jpg" alt="ainaw"/>
                        </div>
                        <div className='text-xl md:w-72 w-full flex-wrap'>Green bonds for issuers and investors</div>
                        <div className='text-start flex-wrap text-sm font-semiold text-gray-900'>January 15, 2023
                        </div>
                    </div>
                    <div className='flex flex-col justify-start gap-5 mb-6 hover:text-sky-500'>
                        <div className='md:w-72 h-72 w-full  relative'> 
                            <img className='w-full h-full rounded-md' src="images\legal2.jpg" alt="ainaw"/>
                        </div>
                        <div className=' text-xl md:w-72 w-full '>Indemnity insurance</div>
                        <div className='text-start flex-wrap text-sm font-semiold text-gray-900'>January 15, 2023
                        </div>
                    </div>
                    <div className='flex flex-col justify-start gap-5 mb-6 hover:text-sky-500'>
                        <div className='md:w-72 h-72 w-full  relative'> 
                            <img className='w-full h-full rounded-md' src="images\legal3.jpg" alt="ainaw"/>
                        </div>
                        <div className='text-xl md:w-72 w-full flex-wrap '>Section 188 of the Code of Criminal Procedure</div>
                        <div className='text-start flex-wrap text-sm font-semiold text-gray-900'>January 14, 2023
                        </div>
                    </div>
                    <div className='flex flex-col justify-start gap-5 mb-6 hover:text-sky-500'>
                        <div className='md:w-72 h-72 w-full  relative'>
                            <img className='w-full h-full rounded-md' src="images\leal4.jpg" alt="ainaw"/>
                        </div>
                        <div className='text-xl md:w-72 w-full  flex-wrap'>Section 392 IPC</div>
                        <div className='text-start flex-wrap text-sm font-semiold text-gray-900'>January 14, 2023
                        </div>
                    </div>
                    <div className='flex flex-col justify-start  gap-5 mb-6 hover:text-sky-500'>
                        <div className='md:w-72 h-72 w-full  relative'>
                            <img className='w-full h-full rounded-md' src="images\legal5.jpg" alt="ainaw"/>
                        </div>
                        <div className='text-xl md:w-72 w-full flex-wrap '>All about DMCA takedown notices</div>
                        <div className='text-start flex-wrap text-sm font-semiold  text-gray-900'>January 13, 2023
                        </div>
                    </div>
                    <div className='flex flex-col justify-start gap-5 mb-6 hover:text-sky-500'>
                        <div className='md:w-72 h-72 w-full  relative'> 
                            <img className='w-full h-full rounded-md' src="images\legal6.jpg" alt="ainaw"/>
                        </div>
                        <div className='text-xl md:w-72 w-full flex-wrap '>Agency by Estoppel</div>
                        <div className='text-start flex-wrap text-sm font-semiold text-gray-900'>January 13, 2023
                        </div>
                    </div>
                    <div className='flex flex-col justify-start gap-5 mb-6 hover:text-sky-500'>
                        <div className='md:w-72 h-72 w-full  relative'> 
                            <img className='w-full h-full rounded-md' src="images\Legal Aspire.png" alt="ainaw"/>
                        </div>
                        <div className='text-xl md:w-72 w-full flex-wrap '>Acid attack punishment in India</div>
                        <div className='text-start flex-wrap text-sm font-semiold text-gray-900'>January 12, 2023
                        </div>
                    </div>
                </div>

       </div>

            </div>

            <Footer/>

        </>
    )
}

export default Project_Blog