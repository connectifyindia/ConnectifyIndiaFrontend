import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Signup_for_diff_user = () => {
  return (
    <>
      <Header/>
      <div className='bg-slate-300 w-full h-screen'>
        <div className='w-[65%] mx-auto'>
            <div className='flex justify-between pt-10'>
                <div className='text-3xl font-Pacifico'>Counsel for Academic and Job</div>
                <div className='flex justify-center gap-2'>
                    <Link className='bg-white px-4 py-3 rounded-md text-xl font-mono font-bold ' href="#">Log in</Link>
                    <button className='bg-sky-500 px-4 py-3 rounded-md text-xl font-mono font-bold text-white' href="">Sign up</button>
                   
                </div> 
               
            </div>
            <div className='mt-5 w-full bg-white p-5'>
                <div className='flex flex-col gap-3'>
                <h1 className='text-3xl font-bold font-Pacifico'>Sign up for a free account</h1>
                <p className='text-2xl font-extralight font-Pacifico '>Select below the type of account you want to create</p>
                <div className=' flex justify-evenly flex-wrap gap-2 mt-5'>
                <Link className='bg-slate-600 px-4 py-3 rounded-md text-xl font-mono font-bold text-gray-100 ' href="https://connectifyglobal.azurewebsites.net/signupCounsel/signup_for_student">I am a student</Link>
                <Link className='bg-sky-500 px-4 py-3 rounded-md text-xl font-mono font-bold text-white' href="https://connectifyglobal.azurewebsites.net/signup_for_trainer">I am a trainer</Link>
                <Link className='bg-red-300 px-4 py-3 rounded-md text-xl font-mono font-bold ' href="https://connectifyglobal.azurewebsites.net/signupCounsel/signup_for_professional">I am a professional</Link>
                <Link className='bg-teal-800 px-4 py-3 rounded-md text-xl font-mono font-bold text-white' href="https://connectifyglobal.azurewebsites.net/signupCounsel/signup_for_contentpubliser">I am a publisher </Link>
                <Link className='bg-slate-800 px-4 py-3 rounded-md text-xl font-mono font-bold text-white' href="https://connectifyglobal.azurewebsites.net/signupCounsel/signup_for_admin">I am a admin</Link>


                </div>
                </div>
            </div>
        </div>
      </div> 
      <Footer/>
    </>
  )
}

export default Signup_for_diff_user 
