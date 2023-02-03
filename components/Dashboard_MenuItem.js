import React,{useEffect,useState,useRef} from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Dashboard_SubMenuDropDown from '../components/Dashboard_SubMenuDropDown';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Dashboard_MenuItem = ({item,depth}) => {
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
      <li ref={myRef} className='list-none py-2  text-2xl hover:underline hover:text-indigo-700 relative capitalize'>
      <button className='py-1 flex justify-around' onClick={handleClick}>
      {item.title}
       {
        depth>1 ? < FaAngleRight className='m-2'/> : <FaAngleDown className='m-2'/>
       }
      </button>

      

     </li>
     
    <div>
      <Dashboard_SubMenuDropDown submenu={item.submenu} depth={depth} showMenu={showMenu}/>
    </div>
     
     </>
      

    ) : (
      <>
            <li className={`cursor-pointer list-none pb-5 text-xl text-red-600 relative capitalize ${(router.pathname===item.path)?'text-green-500 bg-red-500' : ''}`}>
            <Link href={item.path}>
            {item.title}
          </Link>
            </li>
          
     <hr className='bg-red-500' />

      </>

    )
    
  
}

export default Dashboard_MenuItem