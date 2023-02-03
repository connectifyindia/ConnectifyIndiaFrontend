import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Video_Testimonial = () => {
  return (
    <>
      <div className='w-full bg-white mt-16'>
        <div className='w-[80%] mx-auto'>
          <h2 className='underline py-2 text-2xl font-bold'>Video sample of social connect and Testimonial-LawSikho</h2>
          <div className="bg-slate-100  py-4">
            <h1 className='text-center text-3xl font-bold text-gray-800 mb-10'>Video Testimonials</h1>
            <div className='flex justify-evenly gap-3 items-center flex-wrap'>
              <div className='bg-white md:w-96 lg:w-96 w-full flex flex-col'>
                <div className='w-full h-44'>
                  <Link href="https://www.youtube.com/watch?v=zhL2EKrkZbk"><img className='w-full h-full object-cover rounded-md' src="images\Legal Aspire.png" alt="" /></Link>
                </div>
                <div className='mb-1 px-2 text-2xl text-slate-900 font-semibold'>ASPIRE LEGAL & EDUCATIONAL</div>
                <div className='px-2 text-sm text-slate-700'>Name:Leal Aspire</div>
                <div className='my-2 px-2 text-gray-400'>Description: This is legal related Testimonial Video  This is legal related Testimonial Video</div>
              </div>
              <div className='bg-white md:w-96 lg:w-96 w-full  flex flex-col'>
                <div className='w-full h-44'>
                  <Link href="https://www.youtube.com/watch?v=KO8n02g-Ezc"><img className='w-full h-full object-cover rounded-md' src="images\AINAW.png" alt="" /></Link>
                </div>
                <div className='mb-1 px-2 text-2xl text-slate-900 font-semibold'>ASPIRE LEGAL & EDUCATIONAL</div>
                <div className='px-2 text-sm text-slate-700'>Name:Leal Aspire</div>
                <div className='my-2 px-2 text-gray-400'>Description: This is legal related Testimonial Video  This is legal related Testimonial Video</div>
              </div>
              <div className='bg-white md:w-96 lg:w-96 w-full   flex flex-col'>
                <div className='w-full h-44'>
                  <Link href="https://www.youtube.com/watch?v=qZno3Yk8QKc"><img className='w-full h-full object-cover rounded-md' src="images\Business Connect.png" alt="" /></Link>
                </div>
                <div className='mb-1 px-2 text-2xl text-slate-900 font-semibold'>ASPIRE LEGAL & EDUCATIONAL</div>
                <div className='px-2 text-sm text-slate-700'>Name:Leal Aspire</div>
                <div className='my-2 px-2 text-gray-400'>Description: This is legal related Testimonial Video  This is legal related Testimonial Video</div>
              </div>
              <div className='bg-white md:w-96 lg:w-96 w-full flex flex-col rounded-md'>
                <div className='w-full h-44'>
                <video controls className='w-full h-full'>
                  <source src='media\ASPIRE LEGAL & EDUCATIONAL.mp4' type='video/mp4'/>
                </video>
                  {/* <Link href="https://www.youtube.com/watch?v=XkyIjzDZPyE"><img className='w-full h-full object-cover rounded-md' src="images\term-bg-1-3d6355ab.jpg" alt="" /></Link> */}
                </div>
                <div className='mb-1 px-2 text-2xl text-slate-900 font-semibold'>ASPIRE LEGAL & EDUCATIONAL</div>
                <div className='px-2 text-sm text-slate-700'>Name:Leal Aspire</div>
                <div className='my-2 px-2 text-gray-400'>Description: This is legal related Testimonial Video  This is legal related Testimonial Video</div>
              </div>
              <div className='bg-white md:w-96 lg:w-96 w-full   flex flex-col'>
                <div className='w-full h-44'>
                <video controls className='w-full h-full'>
                  <source src='media\Aspire Legal Access Initiative - A2J Challenge.mp4' type='video/mp4'/>
                </video>
                  {/* <Link href="https://www.youtube.com/watch?v=E7mGqt7v3Uc"><img className='w-full h-full object-cover rounded-md' src="images\rose-165819__340.jpg" alt="" /></Link> */}
                </div>
                <div className='mb-1 px-2 text-2xl text-slate-900 font-semibold'>ASPIRE LEGAL & EDUCATIONAL</div>
                <div className='px-2 text-sm text-slate-700'>Name:Leal Aspire</div>
                <div className='my-2 px-2 text-gray-400'>Description: This is legal related Testimonial Video  This is legal related Testimonial Video</div>
              </div>
              <div className='bg-white md:w-96 lg:w-96 w-full flex flex-col'>
                <div className='w-full h-44'>
                <video controls className='w-full h-full'>
                  <source src='media\NQF Production & NGO Group Hyderabad Press Conference Over Beti Hai Anmol - Janata Seva Scheme.mp4' type='video/mp4'/>
                </video>
                  {/* <Link href="https://www.youtube.com/watch?v=9bkGcXjVsUo"><img className='w-full h-full object-cover rounded-md' src="images\ocean-3605547__340.jpg" alt="" /></Link> */}
                </div>
                <div className='mb-1 px-2 text-2xl text-slate-900 font-semibold'>ASPIRE LEGAL & EDUCATIONAL</div>
                <div className='px-2 text-sm text-slate-700'>Name:Leal Aspire</div>
                <div className='my-2 px-2 text-gray-400'>Description: This is legal related Testimonial Video  This is legal related Testimonial Video</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video_Testimonial 