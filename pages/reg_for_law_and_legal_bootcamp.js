import React from 'react'

const Reg_for_law_and_legal_bootcamp = () => {
    return (
        <>
            <div className='w-full bg-black my-20'>
                <div className='w-[90%] mx-auto'>
                    <div className='flex md:flex-row lg:flex-row flex-col justify-center items-center gap-5'>
                        <div className='md:w-1/2 lg:w-1/2 w-full '>
                            <div className='flex flex-col gap-6 my-20'>
                                <div className='text-red-600 text-xl font-semibold'>Lets Work Together</div>
                                <div className='text-white text-5xl font-bold'>Get a Free Project estimate</div>
                                <div className='text-slate-400'>Get a personalized,custom-based, and intunitive estimation that seamlessly offers high-quality services within your financial capacity.</div>
                            </div>
                            <hr className='text-slate-400 my-10' />
                            <div className='flex flex-col gap-6'>
                                <div className='text-white text-3xl underline'>What Next?</div>
                                <div className='text-slate-300'>Our Sales Person will Contact you soon.</div>
                                <div className='flex justify-start gap-4 text-white'>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div className='w-20 h-20'>
                                            <img className='w-full h-full rounded-full' src="images\rose-165819__340.jpg" alt="ainaw" />
                                        </div>
                                        <div>Chandan</div>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div className='w-20 h-20'>
                                            <img className='w-full h-full rounded-full' src="images\term-bg-1-3d6355ab.jpg" alt="ainaw" />
                                        </div>
                                        <div>Jitendra</div>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div className='w-20 h-20'>
                                            <img className='w-full h-full rounded-full' src="images\pink-rose-on-pink.jpg" alt="ainaw" />
                                        </div>
                                        <div>Kamal</div>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div className='w-20 h-20'>
                                            <img className='w-full h-full rounded-full' src="images\ocean-3605547__340.jpg" alt="ainaw" />
                                        </div>
                                        <div>Rahul</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white px-20 py-6 md:w-1/2 lg:w-1/2 w-full rounded-3xl'>
                            <h1 className='text-4xl font-bold'>Lets talk from Hiring Developers</h1>
                            <form action="">
                                <div className='mb-4'>
                                    <label className='mb-3 font-bold' htmlFor="email">Email<span className='text-red-600'>*</span></label>
                                    <div className=''>
                                        <input className='w-full bg-slate-200 py-3 rounded-2xl px-2 text-xl' type="text" />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-3 font-bold' htmlFor="email">First name</label>
                                    <div className=''>
                                        <input className='w-full bg-slate-200 py-3 rounded-2xl px-2 text-xl' type="text" />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-3 font-bold' htmlFor="email">Last name</label>
                                    <div className=''>
                                        <input className='w-full bg-slate-200 py-3 rounded-2xl px-2 text-xl' type="text" />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-3 font-bold' htmlFor="email">Message</label>
                                    <div className=''>
                                        <textarea className='w-full bg-slate-200 py-3 rounded-2xl px-2 text-xl' rows="4" />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-3 font-bold' htmlFor="email">Phone</label>
                                    <div className='flex justify-start'>
                                        <select className='w-40 bg-slate-200 py-3 rounded-2xl mr-2 px-2 text-xl'>
                                            <option value="">India</option>
                                            <option value="">USA</option>
                                            <option value="">Nepal</option>
                                            <option value="">Bangla Desh</option>
                                            <option value="">Sri Lanka</option>


                                        </select>
                                        <input type="text" className='bg-slate-200 w-full  py-3 rounded-2xl px-2 text-xl' />
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <button className='bg-red-400 px-6 py-2 rounded-2xl text-white font-bold'>Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reg_for_law_and_legal_bootcamp