import React from 'react'
import Dashboard_MenuItem from './Dashboard_MenuItem';
import classNames from 'classnames/bind';

const dashboard = ({showDashBoard}) => {
  const show=classNames('block');
  const hide=classNames('hidden');
  const menu_items = [
    {
      title: "Templates By APP",
      submenu: [
        { title: "Word", path: "https://connectifyglobal.azurewebsites.net/word"},
        { title: "Excell", path: "https://connectifyglobal.azurewebsites.net/excell"},
        { title: "PowerPoint", path: "https://connectifyglobal.azurewebsites.net/powerpoint"},
        { title: "Pdf", path: "https://connectifyglobal.azurewebsites.net/pdf"},
      ]
    },
    {
      title: "Browse By Category",
      submenu: [
        { title: "Carrier Document", path: "https://connectifyglobal.azurewebsites.net/carrier-doc"},
        { title: "Legal Document", path: "https://connectifyglobal.azurewebsites.net/legal-doc"},
        { title: "NGO Document", path: "https://connectifyglobal.azurewebsites.net/ngo-doc"},
        { title: "Project Document", path: "https://connectifyglobal.azurewebsites.net/project-doc"},
        { title: "All Document", path: "https://connectifyglobal.azurewebsites.net/all-doc"},

       
      ]
    },
    {
      title: "Special Events And Milestones",
      submenu: [
        { title: "Back To School", path: "https://www.quora.com" },
        { title: "Birthday", path: "https://www.quora.com" },
        { title: "Wedding", path: "https://www.quora.com" },
        { title: "Graduation", path: "https://www.quora.com" },
        { title: "Baby", path: "https://www.quora.com" },
        { title: "Crismas", path: "https://www.quora.com" },
        { title: "Congratulations", path: "https://www.quora.com" },
        { title: "Autumn", path: "https://www.quora.com" },
        { title: "Spring", path: "https://www.quora.com" },
        { title: "Summer", path: "https://www.quora.com" },
        { title: "Winter", path: "https://www.quora.com" },
        { title: "All Holidays", path: "https://www.quora.com" },
      ]
    },

    { title: "Contact", path: "https://connectifyglobal.azurewebsites.net/word" },
    { title: "Technologies", path: "https://connectifyglobal.azurewebsites.net/legal-doc" },
    { title: "Hardware", path: "https://www.quora.com" },
    { title: "Software", path: "https://www.quora.com" },
    {
      title: "About",
      submenu: [
        { title: "fundraiser", path: "https://www.quora.com" },
        { title: "legal", path: "https://www.quora.com" },
        { title: "aspire", path: "https://www.quora.com" },
        { title: "ngo", path: "https://www.quora.com" },
        { title: "non-ngo", path: "https://www.quora.com" },
      ]
    },
  ];
  return (
    <>
      <nav className={`${'bg-gray-50 text-black lg:flex  mt-1 md:mt-0 lg:mt-0 px-4  shadow-sm shadow-slate-900'} ${showDashBoard?show:hide}`}>

        <div className='w-full px-0 py-1'>
          <div className='capitalize text-center my-5 text-3xl font-bold'>Dashboard</div>
          <hr />
          {menu_items.map((item, index) => {
            return < Dashboard_MenuItem item={item} key={index} depth={1} />


          })}
        </div>
      </nav>
    </>
  )
}

export default dashboard
