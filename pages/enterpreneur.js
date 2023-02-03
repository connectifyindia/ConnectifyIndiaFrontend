import React from 'react'
import {FaHouseDamage}  from "react-icons/fa";
import {FaPenNib}  from "react-icons/fa";
import {FaUserGraduate}  from "react-icons/fa";
import {HiOutlineBuildingOffice2}  from "react-icons/hi2";
import {GiInjustice}  from "react-icons/gi";


const Enterpreneur = () => {
    return (
        <>
            <div className='w-full bg-slate-100  py-28 px-4'>
                <div className='flex flex-col justify-center items-center text-lg'>
                    <div className='text-4xl my-3 font-bold text-center overflow-hidden px-4'>Trusted by <span className='text-sky-500'>1000+</span>Enterpreneur</div>
                    <div className='text-center px-10 text-xl font-semibold'>From small Enterpreneur to the Fortune 1000,
                        From small Enterpreneur to the Fortune 1000,
                        From small Enterpreneur to the Fortune 1000
                        From small Enterpreneur to the Fortune 1000

                    </div>

                </div>
                <div className='flex justify-evenly gap-3 items-center w-full py-16 flex-wrap md:px-16 px-2 '>
                    <div className='w-full md:w-60 h-72 shadow-md shadow-slate-400 bg-white flex flex-col justify-center gap-4 items-center'>
                        <div className='text-8xl text-sky-600'><FaHouseDamage/></div>
                         <div className='uppercase text-xl'>Small Business</div>
                         <div><button className='bg-gray-200 px-6 py-2'>Get Started</button></div>
                    </div>
                    <div className='w-full md:w-60 h-72 shadow-2xl shadow-slate-400 bg-white  flex flex-col justify-center gap-4 items-center'>
                        <div className='text-8xl text-sky-600'><FaPenNib/></div>
                         <div className='uppercase text-xl'>startups</div>
                         <div><button className='bg-gray-200 px-6 py-2'>Get Started</button></div>
                    </div>
                    <div className='w-full md:w-60 h-72 shadow-2xl shadow-slate-400 bg-white  flex flex-col justify-center gap-4 items-center'>
                        <div className='text-8xl text-sky-600'><FaUserGraduate/></div>
                         <div className='uppercase text-xl'>Mgmt Teams</div>
                         <div><button className='bg-gray-200 px-6 py-2'>Get Started</button></div>
                    </div>
                    <div className='w-full md:w-60 h-72 shadow-2xl shadow-slate-400 bg-white  flex flex-col justify-center gap-4 items-center'>
                        <div className='text-8xl text-sky-600'><HiOutlineBuildingOffice2/></div>
                         <div className='uppercase text-xl'>Legal depts</div>
                         <div><button className='bg-gray-200 px-6 py-2'>Get Started</button></div>
                    </div>
                    <div className='w-full md:w-60 h-72 shadow-2xl shadow-slate-400 bg-white  flex flex-col justify-center gap-4 items-center'>
                        <div className='text-8xl text-sky-600'><GiInjustice/></div>
                         <div className='uppercase text-xl'>law firms</div>
                         <div><button className='bg-gray-200 px-6 py-2'>Get Started</button></div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default Enterpreneur