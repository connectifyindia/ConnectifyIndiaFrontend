import React from 'react'
import {FaRedhat} from "react-icons/fa";
import {FcAssistant} from "react-icons/fc";
import {FcLinux} from "react-icons/fc";
import {FcBusinessman} from "react-icons/fc";


const Counter = () => {
  return (
    <>
      <div className='bg-black py-20 text-white'>
      <div className='flex flex-col justify-center  items-center mb-28 '>
        <div className='text-2xl text-red-500 mt-10 text-center'>Trailazzing Glimpse of Golden Eagle</div>
        <div className='text-5xl font-bold font-serif text-center'>Look what our counter is saying.</div>
      </div>
        <div className='flex justify-center gap-10 items-center flex-wrap'>
            <div className='flex flex-col justify-between items-center'>
               <FaRedhat className='text-9xl'/> 
               <span className='text-sky-600 text-6xl mb-2'>8+</span> 
               <span className='text-xl'>Years Of Experience</span>
            </div>
            <div className='flex flex-col justify-evenly items-center'>
               <FcAssistant className='text-9xl text-amber-200'/>
               <span className='text-sky-600 text-6xl mb-2'>118+</span>
               <span className='text-xl'>Project delivered</span>
            </div>
            <div className='flex flex-col justify-between items-center'>
               <FcLinux className='text-9xl'/>
               <span className='text-sky-600 text-6xl mb-2'>92+</span>
               <span className='text-xl'>Specilist</span>
            </div>
            <div className='flex flex-col justify-between  items-center'>
               <FcBusinessman className='text-9xl'/>
               <span className='text-sky-600 text-6xl mb-2'>24+</span>
               <span className='text-xl'>Clients</span>
            </div>

        </div>
      </div>
    </>
  )
}

export default Counter