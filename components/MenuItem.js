import React,{useEffect,useState,useRef} from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import SubMenuDropDown from './SubMenuDropDown';
import Link from 'next/link'


const MenuItem = ({item,depth}) => {
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
      <li ref={myRef} className='list-none py-2  text-2xl hover:underline hover:text-indigo-700 relative '>
      <button className='py-1 flex justify-around' onClick={handleClick}>
      {item.title}
       {
        depth>1 ? (< FaAngleRight className='m-2'/>) :( <FaAngleDown className='m-2'/>)
       }
      </button>

      
    

     </li>
     
    <div>
      <SubMenuDropDown submenu={item.submenu} depth={depth} showMenu={showMenu}/>
    </div>
     
     </>
      

    ) : (
      <>
        <li className='list-none pb-5 text-xl  hover:text-slate-900 relative '>
          {/* {console.log(item.connect)} */}
          <Link href={`${item.ref}`}>{item.title}</Link>
          
         </li> 
     <hr className='bg-red-500' />

      </>

    )
    
  
}

export default MenuItem