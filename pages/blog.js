import React from 'react';
import Link from 'next/link';

const Blog = () => {
    return (
        <>
            <div className='bg-white w-[90%]  py-28 mx-auto'>
                <div className='text-4xl font-bold my-16 text-center'>Read Our Blog</div>
                <div className='flex justify-evenly flex-wrap'>
                    <div className='flex flex-col gap-5 mb-6 md:w-72 lg:w-72 w-full'>
                        <Link href="https://connectifyglobal.azurewebsites.net/carrier-blog">
                        <div className='md:w-72 h-72 w-full  relative'>
                            <div className='absolute bg-black/0 w-full h-full'></div>
                            <img className='w-full h-full rounded-xl object-cover' src="images/girl.jpg" alt="ainaw"/>
                        </div>

                        </Link>
                      
                        <div className='text-black text-xl font-bold'><span className='text-sky-500'>Blog / </span>Carrier Blog</div>
                        <div className='font-semiold text-black text-xl'>Trending audio is a core factor in making videos that capture attention.
                        </div>
                    </div>
                    <div className='flex flex-col  gap-5 mb-6 md:w-72 lg:w-72 w-full'>
                        <Link href="https://connectifyglobal.azurewebsites.net/legal-blog">
                        <div className='md:w-72 w-full h-72 relative'>
                            <div className='absolute bg-black/0 w-full h-full'></div>
                            <img className='w-full h-full rounded-xl object-cover' src="images\Business Connect.png" alt="business"/>

                        </div>
                        </Link>
                        <div className='text-black text-xl font-bold'><span className='text-sky-500'>Blog / </span>Legal Blog</div>
                        <div className='font-semiold text-black text-xl'>Now, instead of creating every Reel from scratch, you can use Instagram Reels templates to copy clip timings of another Reel. 
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 mb-6 md:w-72 lg:w-72 w-full'>
                       <Link  href="https://connectifyglobal.azurewebsites.net/ngo-blog">
                       <div className='md:w-72 w-full h-72 relative'>
                            <div className='absolute bg-black/0 w-full h-full'></div>
                            <img className='w-full h-full rounded-xl object-cover' src="images\Legal Aspire.png" alt="Legal"/>
                        </div>
                       </Link>
                        <div className='text-black text-xl font-bold '><span className='text-sky-500'>Blog / </span>NGO Blog</div>
                        <div className='font-semiold text-black text-xl'>Aesthetics are everything on Instagram and Reels are no exception.  
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 mb-6 md:w-72 lg:w-72 w-full'>
                        <Link href="https://connectifyglobal.azurewebsites.net/project-blog">
                        <div className='md:w-72 w-full h-72 relative'>
                            <div className='absolute bg-black/0 w-full h-full'></div>
                            <img className='w-full h-full rounded-xl object-cover' src="images\Simply Counsel.png" alt="simply" />
                        </div>
                        </Link>
                        <div className='text-black text-xl font-bold'><span className='text-sky-500'>Blog / </span>Project Blog</div>
                        <div className='font-semiold text-black text-xl'>Trending audio is a core factor in making videos that capture attention.
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
