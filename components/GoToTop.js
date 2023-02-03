import React,{useState,useEffect} from 'react';
import { FaArrowCircleUp, FaClosedCaptioning } from "react-icons/fa";
import styles from '../styles/style.module.css'

const GoToTop = () => {
    const [invisile,setInvisible]=useState(false)
    const scroolToTop=()=>{
        const winScroolHeight=250;
        const winScrool=document.body.scrollTop||document.documentElement.scrollTop
        if(winScrool>winScroolHeight){
            setInvisible(true)
        }
        else{
            setInvisible(false)  

        }

    }
    useEffect(()=>{
        window.addEventListener('scroll',scroolToTop)
        return ()=>{
            window.removeEventListener("scroll",scroolToTop);
        }
    },[])
   
    const clickOnBtn=()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    }
  return (
    <>
    {
        invisile && (
    <div className=' text-red-600 w-[80%] mx-auto py-10'><FaArrowCircleUp onClick={clickOnBtn} id={styles.btn} className={`text-4xl fixed bottom-20 z-50 right-20 cursor-pointer`}/></div>

        )
    }
    </>
  )
}
 
export default GoToTop