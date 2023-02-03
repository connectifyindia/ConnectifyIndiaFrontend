import React from 'react'
import MenuItem from './MenuItem';
import { FaBars } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';
import classNames from 'classnames/bind';


const SideBar = ({ showSidebar }) => {
    const show = classNames("bg-black text-white md:hidden lg:hidden w-full pl-7 shadow-sm shadow-slate-900 block");
    const hide = classNames("bg-blaqck text-white md:hidden lg:hidden w-full pl-7  shadow-sm shadow-slate-900 hidden");
    const menu_items = [
        { title: "Connectify India", ref:"https://connectifyindia.azurewebsites.net" },
        { title: "Simply Counsel" },
        { title: "Legal Aspire" },
        { title: "AINAW" },
        { title: "Business Connect" },
        {
            title: "Project",
            submenu: [
                { title: "State Project" },
                { title: "Central Project" },
                { title: "Private & Public Project" },
            ]
        },
        {
            title: "Fundraiser",
            submenu: [
                { title: "Fundraiser" },
                { title: "Donation" },
                { title: "Campaign" },
                { title: "Stories/Success story" },
                { title: "Options" },
                { title: "FAQ'S" },
                { title: "Custom Post Types" },
                { title: "Options" },
            ]
        },
        {
            title: "NGO",
            submenu: [
                { title: "NGO By Location" },
                { title: "NGO By Category" },
                { title: "Global NGO" },
                {
                    title: "Volunteer",
                    submenu: [
                        { title: "Volunteer SignUp" },
                        { title: "Organisation SignUp" },
                        { title: "Blood" },
                    ]
                },
            ]
        },
        {
            title: "About",
            submenu: [
                { title: "History" },
                { title: "Vision & Mission" },
                { title: "Team Member" },
                { title: "Financials" },
                { title: "Media Center" },
                { title: "FAQ'S" },
                { title: "Custom Post Types" },
                { title: "Options" },
            ]
        },
        {
            title: "SignUp",
            submenu: [
                { title: "Connectify India" },
                { title: "Simply Counsel" },
                { title: "Legal Aspire" },
                { title: "Ainaw" },
                { title: "Business Connect" },
            ]
        },
    ];
    return (
        <>
            <nav className={showSidebar ? show : hide}>
                <div className='w-full px-0 py-1  '>
                    {menu_items.map((item,index)=>{
                        return <MenuItem item={item} key={index} depth={1}/>

                    })}
                </div>
            </nav>



        </>
    )
}

export default SideBar