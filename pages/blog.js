import React from 'react';
import Link from 'next/link';

const Blog = () => {
    return (
        <>
            <div className='bg-white w-[90%]  py-28 mx-auto'>
                <div className='text-3xl font-bold my-5 text-center'>Read Our Blog</div>
                <div className='flex justify-evenly flex-wrap items-center'>
                    <div className='flex flex-col justify-center items-center gap-5 mb-6'>
                        <Link href="https://https://connectifyglobal.azurewebsites.net/carrier-blog">
                        <div className='md:w-72 h-72 w-full  relative'>
                            <div className='absolute bg-black/50 w-full h-full'></div>
                            <img className='w-full h-full rounded-md' src="images/AINAW.png" alt="ainaw" />
                        </div>

                        </Link>
                      
                        <div className='text-gray-300'><span className='text-sky-500'>Blog / </span>Carrier Blog</div>
                        <div className='text-center flex-wrap text-lg font-semiold'>10 signs you need career counselling...
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 mb-6'>
                        <Link href="https://connectifyglobal.azurewebsites.net/legal-blog">
                        <div className='md:w-72 w-full h-72 relative'>
                            <div className='absolute bg-black/50 w-full h-full'></div>
                            <img className='w-full h-full rounded-md' src="images\Business Connect.png" alt="business"/>

                        </div>
                        </Link>
                        <div className='text-gray-300'><span className='text-sky-500'>Blog / </span>Legal Blog</div>
                        <div className='text-center flex-wrap text-lg font-semiold'>signs you need career counselling...                            
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 mb-6'>
                       <Link  href="https://connectifyglobal.azurewebsites.net/ngo-blog">
                       <div className='md:w-72 w-full h-72 relative'>
                            <div className='absolute bg-black/50 w-full h-full'></div>
                            <img className='w-full h-full' src="images\Legal Aspire.png" alt="Legal"/>
                        </div>
                       </Link>
                        <div className='text-gray-300'><span className='text-sky-500'>Blog / </span>NGO Blog</div>
                        <div className='text-center flex-wrap text-lg font-semiold'>10 signs you need career counselling...
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 mb-6'>
                        <Link href="https://connectifyglobal.azurewebsites.net/project-blog">
                        <div className='md:w-72 w-full h-72 relative'>
                            <div className='absolute bg-black/50 w-full h-full'></div>
                            <img className='w-full h-full' src="images\Simply Counsel.png" alt="simply" />
                        </div>
                        </Link>
                        <div className='text-gray-300'><span className='text-sky-500'>Blog/</span>Project Blog</div>
                        <div className='text-center flex-wrap text-lg font-semiold'>10 signs you need career counselling...
                        </div>
                    </div>
                    <div>
                      <Link href="https://connectifyglobal.azurewebsites.net/all-blog" className='text-3xl text-blue-500 hover:underline'>View All</Link>  
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Blog
