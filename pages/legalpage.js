import React from 'react'
import {SiGotomeeting}  from "react-icons/si";
import {MdBusinessCenter}  from "react-icons/md";
import {FcDocument}  from "react-icons/fc";
import {AiOutlineTrademarkCircle}  from "react-icons/ai";
import {HiOutlineClipboardDocumentList}  from "react-icons/hi2";
import {FaUserTie}  from "react-icons/fa";
import {HiUserGroup}  from "react-icons/hi";
import {MdOutlineSecurity}  from "react-icons/md";


const Legalpage = () => {
  return (
    <>
    <div className='w-[80%] mx-auto'>
        <div className='text-3xl my-5 font-bold capitalize text-center'>popular legal areas</div>
        <div className='flex justify-center gap-4 flex-wrap'>
        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
            <div className="text-8xl text-sky-400"><SiGotomeeting/></div>
            <div className="uppercase text-xl">Agreement</div>
        </div>
        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
            <div className="text-8xl text-sky-400"><MdBusinessCenter/></div>
            <div className="uppercase text-xl">Business Formation</div>
        </div>
        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
            <div className="text-8xl text-sky-400"><FcDocument/></div>
            <div className="uppercase text-xl">Patent</div>
        </div>
        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
            <div className="text-8xl text-sky-400"><AiOutlineTrademarkCircle/></div>
            <div className="uppercase text-xl">Trademarks</div>
        </div><div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
            <div className="text-8xl text-sky-400"><HiOutlineClipboardDocumentList/></div>
            <div className="uppercase text-xl">Immigration</div>
        </div>
        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
            <div className="text-8xl text-sky-400"><FaUserTie/></div>
            <div className="uppercase text-xl">Genral Counsel</div>
        </div>
        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
            <div className="text-8xl text-sky-400"><HiUserGroup/></div>
            <div className="uppercase text-xl">Labour & Employment</div>
        </div>
        <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
            <div className="text-8xl text-sky-400"><MdOutlineSecurity/></div>
            <div className="uppercase text-xl">Security and Finance</div>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Legalpage