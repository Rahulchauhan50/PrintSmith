import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import pic from '../assets/WhatsApp-Image-2017-09-09-at-10.17.11-AM-300x180.jpeg'
import { AiOutlineCaretRight } from "react-icons/ai";

export default function Employess() {
    const [formattedDate,setformattedDate]= useState(null)
    useEffect(()=>{
        const currentDate = new Date();
        const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
        setformattedDate(format)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to the top of the page
      }, []);
  return (
    <div style={{backgroundColor:"#F5F5F5"}} >
         <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-2' >
        <span className='text-start text-14 text-white px-2 py-1' style={{backgroundColor:"rgba(0, 0, 0, .8)"}}>
        <Link style={{textDecoration:"none",color:"white"}} to='/' >Home</Link>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>EMPLOYEE ENGAGEMENT & TRAINING</span>
        </span>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"100px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
            <div className='mdWidth75 my-4 text-start mx-auto'>
                <p style={{fontSize:"38px",fontWeight:"600"}} className='pb-4'>Employee Engagement Activities</p>
                <div className='row'>
                    <div className='col-md-3 my-2 col-12'>
                        <img className='w-100' alt='' src={pic}/>
                    </div>
                    <div className='col-md-9 col-12' >
                        <p style={{fontSize:"13px",fontFamily:"Open Sans",lineHeight:"25px",color:"#666666"}}>Pleasing clients are vital to run a profit-making business but giving employees attention is imperative for making something a really big affair. We all know, businesses who have invested in employee engagement activities have never seen a downfall. Happy employees ensure happy customers. And therefore, we organise employee engagement activities on a regular basis at our plant in Faridabad.</p>
                        <p style={{fontSize:"13px",fontFamily:"Open Sans",lineHeight:"25px",color:"#666666"}}>These activities provide us with an opportunity to sit & discuss together, streamline performance, increase productivity, and ensure the smooth running of work even under the pressure of tight deadlines.</p>
                    </div>
                </div>
            </div>

    </div>
  )
}
