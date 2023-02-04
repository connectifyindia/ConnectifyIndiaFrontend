import React from 'react'
import Blog_Dashboard_MenuItem from './Blog_Dashboard_MenuItem';
import classNames from 'classnames/bind';

const Blog_Dashboard = ({showDashBoard}) => {
  const show=classNames('block');
  const hide=classNames('hidden');
  const menu_items = [

    {
      title: "Browse By Category",
      submenu: [
        { title: "Carrier Blog", path: "https://connectifyglobal.azurewebsites.net/carrier-blog"},
        { title: "Legal Blog", path: "https://connectifyglobal.azurewebsites.net/legal-blog"},
        { title: "NGO Blog", path: "https://connectifyglobal.azurewebsites.net/ngo-blog"},
        { title: "Project Blog", path: "https://connectifyglobal.azurewebsites.net/project-blog"},
        { title: "All Blog", path: "https://connectifyglobal.azurewebsites.net/all-blog"},

       
      ]
    },


    { title: "Contact", path: "https://connectifyglobal.azurewebsites.net/word"},
    { title: "Technologies", path: "https://connectifyglobal.azurewebsites.net/legal-doc"},
    { title: "Hardware", path: "https://www.quora.com"},
    { title: "Software", path: "https://www.quora.com"},
  ];
  return (
    <>
      <nav className={`${'bg-sky-800 h-screen text-black lg:flex  mt-1 md:mt-0 lg:mt-0 px-4  shadow-sm shadow-slate-900'} ${showDashBoard?show:hide}`}>

        <div className='w-full px-0 py-1'>
          <div className='capitalize text-center my-5 text-3xl font-bold text-white'>Our Blog</div>
          <hr />
          {menu_items.map((item, index) => {
            return <Blog_Dashboard_MenuItem item={item} key={index} depth={1} />


          })}
        </div>
      </nav> 
    </>
  )
}

export default Blog_Dashboard
