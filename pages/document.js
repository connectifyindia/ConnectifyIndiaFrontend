import React from 'react'
import { SiGotomeeting} from "react-icons/si";
import { MdBusinessCenter} from "react-icons/md";
import { FcDocument} from "react-icons/fc";
import { AiOutlineTrademarkCircle} from "react-icons/ai";
import { HiOutlineClipboardDocumentList} from "react-icons/hi2";
import { FaUserTie} from "react-icons/fa";
import { HiUserGroup} from "react-icons/hi";
import { MdOutlineSecurity} from "react-icons/md";
import Link from 'next/link';


const Document = () => {
    return (
        <>
            <div className='w-[80%] mx-auto my-28'>
                <div className='text-4xl  my-5 font-bold capitalize text-center mb-20'>Documents</div>
                <div className='flex justify-center items-center gap-4 flex-wrap'>
                    <Link href="https://connectifyindia.azurewebsites.net/carrier-doc">
                    <div className='flex flex-col justify-center items-center md:w-60 w-full h-72 bg-indigo-400 gap-4'>
                        <div className="text-8xl text-sky-400"><SiGotomeeting /></div>
                        <div className="text-lg capitalize">Carrier Document</div>
                    </div>
                    </Link>
                    <Link href="https://connectifyindia.azurewebsites.net/legal-doc">
                    <div className='flex flex-col justify-center items-center md:w-60 w-full h-72 bg-indigo-400 gap-4'>
                        <div className="text-8xl text-sky-400"><MdBusinessCenter /></div>
                        <div className="text-lg capitalize">Legal Document</div>
                    </div>
                    </Link>
                    <Link href="https://connectifyindia.azurewebsites.net/ngo-doc">
                    <div className='flex flex-col justify-center items-center md:w-60 w-full h-72 bg-indigo-400 gap-4'>
                        <div className="text-8xl text-sky-400"><FcDocument /></div>
                        <div className="text-lg capitalize">Ngo Document</div>
                    </div>
                    </Link>
                   <Link href="https://connectifyindia.azurewebsites.net/project-doc">
                   <div className='flex flex-col justify-center items-center md:w-60 w-full h-72 bg-indigo-400 gap-4'>
                        <div className="text-8xl text-sky-400"><AiOutlineTrademarkCircle /></div>
                        <div className="text-lg capitalize">Project Document</div>
                    </div>
                   </Link>
                   <Link href="https://connectifyindia.azurewebsites.net/all-doc">
                   <div className='flex flex-col justify-center items-center md:w-60 w-full h-72 bg-indigo-400 gap-4'>
                        <div className="text-8xl text-sky-400"><AiOutlineTrademarkCircle /></div>
                        <div className="text-lg capitalize px-4">See All Document In All Cattegory</div>
                    </div>
                   </Link>
                    {/* <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
                        <div className="text-8xl text-sky-400"><HiOutlineClipboardDocumentList /></div>
                        <div className="uppercase text-xl">Immigration</div>
                    </div>
                    <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
                        <div className="text-8xl text-sky-400"><FaUserTie /></div>
                        <div className="uppercase text-xl">Genral Counsel</div>
                    </div>
                    <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
                        <div className="text-8xl text-sky-400"><HiUserGroup /></div>
                        <div className="uppercase text-xl">Labour & Employment</div>
                    </div>
                    <div className='flex flex-col justify-center items-center md:w-72 w-full h-72 bg-gray-200 gap-4'>
                        <div className="text-8xl text-sky-400"><MdOutlineSecurity /></div>
                        <div className="uppercase text-xl">Security and Finance</div>
                    </div> */}
                </div>

            </div>
        </>
    )
}

export default Document