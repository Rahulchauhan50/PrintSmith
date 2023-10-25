import React,{useEffect, useRef, useState} from 'react'
import {packaging} from './content'
import Table from '../components/Table'
import { AiOutlineCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Packaging() {
  const [formattedDate,setformattedDate]= useState(null)
  useEffect(()=>{
      const currentDate = new Date();
      const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
      setformattedDate(format)
  }, [])

  const divRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
    document.title = "Packaging Expertise - Printsmith"
  }, []);
  return (
    <div>
       <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-2' >
        <div className='text-start text-14 text-white px-2 py-1' style={{backgroundColor:"rgba(0, 0, 0, .8)",width:"400px",maxWidth:"95%"}}>
        <Link style={{textDecoration:"none",color:"white"}} to='/' >Home</Link>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>OUR SERVICES</span>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>COMMERCIAL EXPERTISE</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"100px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
      
      <Table table={packaging} />
    </div>
  )
}
