import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Blog_Dashboard from '../../components/Blog-Dashboard';
import classNames from 'classnames';
import GoToTop from '../../components/GoToTop';
// import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
const All_Blog = ({ data }) => {
    console.log(data)
    const [items, setItems] = useState(data.results)
    const [next, setNext] = useState(data.next)
    const [showDashBoard, setShowDashBoard] = useState(false)
    const showDash = classNames('md:hidden lg:hidden cursor-pointer')

    const ShowHideDashBoardIcon = () => {
        setShowDashBoard((prev) => !prev)
    }
    const showMoreItems = () => {


        fetch(next)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(prev => [...prev, ...data.results]),
                    setNext(data.next)
            })
    };

    return (
        <>

            <Header />

            <div className='grid grid-cols-4'>

                <div className='md:col-span-1 lg:col-span-1 col-span-4'>
                    <Blog_Dashboard showDashBoard={showDashBoard} />
                </div>
                {items?.length > 0 ? (
                    <>

                        <div className='md:col-span-4 lg:col-span-3 col-span-4 mt-2'>
                            <div className='flex justify-center  gap-2 flex-wrap'>
                                {
                                    items?.map((e) => (
                                        <>
                                            <div className='flex flex-col justify-start gap-5 mb-6 hover:text-sky-500'>
                                                <Link href={"connectifyglobal.azurewebsites.net/blogs/"+e.id}>
                                                    <div className='md:w-72 h-72 w-full  relative'>
                                                        <img className='w-full h-full rounded-md' src={e.image_url} />
                                                    </div>
                                                </Link>
                                                <div className='md:w-72  w-full capitalize text-black text-2xl font-bold'>{e.title}</div>

                                                <div className=' text-xl md:w-72  w-full flex-wrap'>{e.contents.slice(0, 100) + "..."}</div>
                                                <div className='text-start flex-wrap text-sm font-semiold text-gray-900 capitalize'>created by {new Date(e.date).toLocaleString()}</div>
                                            </div>
                                            {/* <div className='flex justify-center items-center gap-4'>
                                                <div className='text-center '>
                                                    <button className='mb-2 rounded-xl text-white bg-sky-600 py-2 px-4'><Link href={"http://127.0.0.1:3000/details/" + e.id}>View More</Link></button>
                                                </div>
                                                <div className='text-center py-10 text-2xl'>
                                                    <button className='text-white bg-indigo-700 px-4 py-2 rounded-md'><Link href={"http://127.0.0.1:3000/update/" + e.id}>Edit</Link></button>

                                                </div>
                                            </div> */}

                                        </>

                                    ))
                                }
                            </div>
                            {
                                next != null && (
                                    <div className='text-center py-10 text-2xl'>

                                        <button onClick={showMoreItems} className='text-white bg-black px-4 py-2 rounded-md'>Load More</button>

                                    </div>
                                )
                            }
                        </div>
                    </>

                ) : (
                    <p className='text-center my-[12%] mx-[15%] text-blue-500 text-4xl font-bold capitalize'>data not found</p>
                )

                }
            </div>
            < GoToTop />
            <Footer />
            </>
    )
}

export default All_Blog
export const getServerSideProps = async () => {
    const res = await fetch('connectifyindiasqldbserver.azurewebsites.net/bloglist/')
    const data = await res.json()
    return {
        props: {
            data: data
        }
    }
}
