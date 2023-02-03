import React,{useState,useEffect} from 'react'
import MenuItem from './MenuItem'
import classNames from 'classnames/bind';

const SubMenuDropDown = ({submenu,depth,showMenu}) => {
  const show=classNames("block");
  const hide=classNames("hidden");


  const wraperClassess=classNames("relative top-0 left-0 right-0  text-black w-full bg-white border-b-2 border-red-500  py-2 pl-4");
   

  return (
    <div className={`${wraperClassess} ${depth>1?wraperClassess:""} ${showMenu?show:hide}`}>
        {submenu.map((menu,index)=>{
            return <MenuItem item={menu} depth={depth+1} key={index}/>

        })}
    </div>
    
  )
}

export default SubMenuDropDown