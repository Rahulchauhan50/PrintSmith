import React,{useEffect, useState} from 'react'
import imgs from '../assets/HO8A0502-420x240_c.jpg'
import Page1 from '../assets/client-test-1.png'
import Page2 from '../assets/client-test-2.png'
import Page3 from '../assets/client-test.png'
import { AiOutlineLine } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { AiOutlineCaretRight } from "react-icons/ai";


export default function Casestudy() {

  const [formattedDate,setformattedDate]= useState(null)
  useEffect(()=>{
      const currentDate = new Date();
      const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
      setformattedDate(format)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Case Studies - Printsmith"
  },[]);

  return (
    <div style={{backgroundColor:"#F5F5F5"}} >
       <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-2' >
        <div className='text-start text-14 text-white p-2' style={{backgroundColor:"rgba(0, 0, 0, .8)",display:"inline-block"}}>
          <span >Home</span>
          <AiOutlineCaretRight color='#FC01AC'/>
          <span>Case studies & Testimonial</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"100px",fontSize:"11px"}}>{formattedDate}</div>
       </div>
  
       <div className='mdWidth75 my-4 p-4 mx-auto text-start'  >
        <p className='text-start h1 m-3' style={{fontWeight:"600"}} >Case Studies</p>
        <AiOutlineLine className='mb-4 mx-4' color='#313133' style={{height:"3px", width:"60px",backgroundColor:"#96979A"}} />
          <p className='h5 mb-3 mt-4' style={{color:"#FA01AC"}} >Lastest Case study</p>
        <div className='text-start mx-3'>
          <div className='d-flex' style={{backgroundImage:`url(${imgs}`,width:"420px",height:"240px",alignItems:"end",maxWidth:"80vw",backgroundRepeat:"no-repeat",backgroundSize:"contain"}} >
            <button className='btn3' >Read more+</button>
          </div>
        </div>
        <em id='testimonials' className="case my-2 mx-3">September 26, 2017 By admin in <Link style={{textDecoration:"none"}} className='more' to='' >Case Study</Link></em>
        <p  className='mx-3 h5'>Colorbar Cosmetics Ptv. Ltd.</p>
        <div className='w-100' style={{marginTop:"70px",paddingTop:"20px",paddingBottom:"20px"}} >
        <div className='row'>
          <p className='h2'  style={{fontWeight:"700"}}>TESTIMONIALS</p>
        <div  className="col-12 col-md-4">
            <img alt='' src={Page3} className='w-100 my-4' />
          </div>
          <div className="col-12 col-md-4">
            <img alt='' src={Page2} className='w-100 my-4' />
          </div>
          <div className="col-12 col-md-4">
            <img alt='' src={Page1} className='w-100 my-4' />
          </div>

        </div>

      </div >
       </div>
       <div>
       </div>
    </div>
  )
}
