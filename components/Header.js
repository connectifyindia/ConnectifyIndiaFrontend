import React,{ useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';
import SideBar from './Sidebar';
import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Image from 'next/image';



const Header = () =>{
    const [showSidebar,setShowSidebar]=useState(false)
    const showSidebarIcon = () => {
        setShowSidebar((prev) =>!prev)

    }
    return (
        <>
            <div className='mt-0 font-extrabold text-lg sticky top-0 left-0 right-0 z-50'>



                <ul className="main-navigation">
                    <div className='px-2 py-2 flex gap-10 text-3xl lg:hidden'>
                        <Link className='text-amber-200 font-bold' href="#">
                            {
                                showSidebar ? <FaTimes onClick={showSidebarIcon} /> : <FaBars onClick={showSidebarIcon}/>
                            }
                        </Link>
                        <div className='uppercase text-center'>Connectify India</div>
                    </div>
                    <li><Link href="#"><img src="/images/logo.jpg" className='w-10 h-7'  alt="main_logo" /></Link></li>
                    <li className='mr-11 nav'><Link href="https://connectifyglobal.azurewebsites.net/">Connectify India</Link></li>
                    <li className='nav'><Link href="#">Simply Counsel</Link></li>
                    <li className='nav'><Link href="#">Legal Aspire</Link></li>
                    <li className='nav'><Link href="#">AINAW</Link></li>
                    <li className='nav'><Link href="#">Business Connect</Link></li>
                    <li className='z-40 nav'>
                        <Link className='' href="#">Project <span><FaAngleDown className='inline'/></span></Link>
                        <ul className='shadow-xl shadow-slate-800'>
                            <li><Link href="#">State Project</Link></li>
                            <li><Link href="#">Central project</Link></li>
                            <li><Link href="#">Private and public</Link></li>

                        </ul>
                    </li>

                    <li className='z-40 nav'>
                        <Link href="#">Fundraiser <span><FaAngleDown className='inline'/></span></Link>
                        <ul className='shadow-xl shadow-slate-800'>
                            <li><Link href="#">Fundraiser</Link></li>
                            <li><Link href="#">Donation</Link></li>
                            <li><Link href="#">Campaign</Link></li>

                            <li><Link href="#">Stories/SuccessStory<span><FaAngleRight className='inline'/></span></Link>
                                <ul className='shadow-xl shadow-slate-800'>
                                    <li><Link href="#">Portfolios</Link></li>
                                    <li><Link href="#">Testimonials</Link></li>
                                </ul>
                            </li>
                            <li><Link href="#">Options</Link></li>
                        </ul>
                    </li>
                    <li className='z-40 nav '>
                        <Link href="#">NGO<span><FaAngleDown className='inline'/></span></Link>
                        <ul className='shadow-xl shadow-slate-800'>
                            <li><Link href="#">NGO By Location</Link></li>
                            <li><Link href="#">NGO By Category</Link></li>
                            <li><Link href="#">Global NGO</Link></li>
                            <li className='z-40'><Link href="#">Volunteer <span><FaAngleRight className='inline'/></span></Link>
                                <ul className='shadow-xl shadow-slate-800'>
                                    <li><Link href="#">Volunteer Signup</Link></li>
                                    <li><Link href="#">Organisation Signup <span><FaAngleRight className='inline'/></span></Link>
                                        <ul className='shadow-xl shadow-slate-800'>
                                            <li><Link href="#">Resets</Link></li>
                                            <li><Link href="#">Grids</Link></li>
                                            <li><Link href="#">Frameworks</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="#">Blood <span><FaAngleRight className='inline'/></span></Link>
                                        <ul className='shadow-xl shadow-slate-800'>
                                            <li><Link href="#">state</Link></li>
                                            <li><Link href="#">Location</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='z-40 nav'>
                        <Link href="#">About <span><FaAngleDown className='inline'/></span></Link>
                        <ul className='shadow-xl shadow-slate-800'>


                            <li><Link href="#">History</Link></li>
                            <li><Link href="#">Vision & Mission</Link></li>
                            <li><Link href="#">Team Member</Link></li>
                            <li><Link href="#">Financials</Link></li>
                            <li><Link href="#">Media Center</Link></li>
                            <li><Link href="#">FAQs</Link></li>


                            <li><Link href="#">Custom Post Types <span><FaAngleRight className='inline'/></span></Link>
                                <ul className='shadow-xl shadow-slate-200'>
                                    <li><Link href="#">Portfolios</Link></li>
                                    <li><Link href="#">Testimonials</Link></li>
                                </ul>
                            </li>
                            <li><Link href="#">Options</Link></li>
                        </ul>
                    </li>
                    <li className='z-40 nav '><Link href="#" className='text-amber-200 font-bold text-2xl'><FaRegUserCircle/></Link>
                        <ul className='shadow-xl shadow-slate-800'>
                            <li><Link href="#">Connectify India</Link></li>

                            <li><Link href="https://connectifyglobal.azurewebsites.net/signupCounsel/signup_for_diff_user">Simply Counsel</Link></li>
                            <li><Link href="#">Legal Aspire</Link></li> 
                            <li><Link href="#">Ainaw</Link></li>
                            <li><Link href="#">Business Connect</Link></li>
                        </ul>
                    </li>


                </ul>
            </div>
            <SideBar showSidebar={showSidebar}/>
        </>
    )
}

export default Header
