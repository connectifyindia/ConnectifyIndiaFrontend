import React from 'react'
import Image from 'next/image'

const Upconsel_Testimonial = () => {
  return (
    <>
    <div className='w-[80%] mx-auto grid md:grid-cols-2 grid-cols-1 my-28 '>
        <div className='flex flex-col justify-center gap-8 items-center max-w-[500px] mx-auto'>
            <div className='text-4xl'>Access to <span className='text-sky-500'>high quality</span>attoroneys on demand</div>
            <div className=' text-xl'>
                <p className=' list-inside list-item mb-1'>access our free online repository of legal help and information via articles</p>
                <p className='list-inside list-item mb-1'>access our free online repository of legal help and information via articles</p>
                <p className='list-inside list-item mb-1'>access our free online repository of legal help and information via articles</p>
                <p className='list-inside list-item mb-1'>access our free online repository of legal help and information via articles</p>
               
            </div>
            <div><button className='py-2 px-10 text-sky-500 text-xl border-2 border-sky-500 hover:text-white hover:bg-sky-700'>Learn More</button></div>

        </div>
        <div className='flex flex-col justify-center gap-8 md:ml-16 lg:ml-16 mt-7 md:my-0 lg:my-0'>
            <div className='flex justify-center items-center gap-5'>
                <div><img className='rounded-full w-32 h-32' src="images/AINAW.png" alt="ainaw" /></div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <p className='text-2xl font-bold'>Liz Oliner</p>
                        <p className='text-5xl text-yellow-400 font-bold tracking-wide'>*****</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className=''>260 Project on UpCounsel</h2>
                        <p className=''>Business Transactional Lawyer</p>
                    </div>
                     
                </div>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <div><img className='rounded-full w-32 h-32' src="images\Simply Counsel.png" alt="ainaw" /></div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <p className='text-2xl font-bold'>Kamal Sir</p>
                        <p className='text-5xl text-yellow-400 font-bold tracking-wide'>*****</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className=''>260 Project on UpCounsel</h2>
                        <p className=''>Business Transactional Lawyer</p>
                    </div>
                     
                </div>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <div><img className='rounded-full w-32 h-32' src="images\logo.jpg" alt="ainaw" /></div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <p className='text-2xl font-bold'>Jitendra Saw</p>
                        <p className='text-5xl text-yellow-400 font-bold tracking-wide'>*****</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className=''>260 Project on UpCounsel</h2>
                        <p className=''>Business Transactional Lawyer</p>
                    </div>
                     
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Upconsel_Testimonial