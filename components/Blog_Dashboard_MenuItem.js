import React,{useEffect,useState,useRef} from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Blog_Dashboard_SubMenuDropDown from '../components/Blog_Dashboard_SubMenuDropDown';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Blog_Dashboard_MenuItem = ({item,depth}) => {
  const router=useRouter();
  console.log(router.pathname);
  console.log(item.path)
  const myRef=useRef();

  const [showMenu,setShowMenu]=useState(false)
  const handleClick=()=>{
    setShowMenu(!showMenu)
  }

  useEffect(()=>{
    const myhandler=(event)=>{
      if(showMenu && myRef.current && !myRef.current.contains(event.target)){
        setShowMenu(false);
      }
    }

    document.addEventListener('click',myhandler);

  },[showMenu]);

 
    
  return item.submenu && item.submenu.length > 0 ? (
    <>
      <li ref={myRef} className='list-none py-2  text-2xl hover:underline text-slate-100 relative capitalize'>
      <button className='py-1 flex justify-around' onClick={handleClick}>
      {item.title}
       {
        depth>1 ? < FaAngleRight className='m-2'/> : <FaAngleDown className='m-2'/>
       }
      </button>

      

     </li>
     
    <div>
      <Blog_Dashboard_SubMenuDropDown submenu={item.submenu} depth={depth} showMenu={showMenu}/>
    </div>
     
     </>
      

    ) : (
      <>
            <li className={`cursor-pointer list-none pb-5 text-xl text-gray-400 relative capitalize ${(router.pathname===item.path)?'text-green-500 bg-red-500' : ''}`}>
            <Link href={item.path}>
            {item.title}
          </Link>
            </li>
          
     <hr className='bg-red-500' />

      </>

    )
    
  
}

export default Blog_Dashboard_MenuItem