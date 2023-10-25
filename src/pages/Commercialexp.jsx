import React,{useEffect, useState} from 'react'
import {table_report} from './content'
import { Link } from 'react-router-dom';
import Table from '../components/Table'
import { AiOutlineCaretRight } from "react-icons/ai";

export default function Commercialexp() {
  const [formattedDate,setformattedDate]= useState(null)
  useEffect(()=>{
      const currentDate = new Date();
      const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
      setformattedDate(format)
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
    document.title = "Commercial Expertise - Printsmith"
  }, []);
  
  return (
    <div>
       <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-2' >
        <div className='text-start text-14 text-white px-2 py-1' style={{backgroundColor:"rgba(0, 0, 0, .8)",display:"inline-block",maxWidth:"90%"}}>
        <Link style={{textDecoration:"none",color:"white"}} to='/' >Home</Link>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>

          <span>COMMERCIAL EXPERTISE</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"100px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
      
      <Table table={table_report.table1} />
      <Table table={table_report.table2} />
      <Table table={table_report.table3} />
      
    </div>
  )
}
