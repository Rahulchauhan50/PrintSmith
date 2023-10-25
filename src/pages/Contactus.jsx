import React,{useRef, useState,useEffect} from 'react'

import '../styles/main.css'
import { AiOutlineCaretRight } from "react-icons/ai";
import map1 from '../assets/Screenshot.png'
import map2 from '../assets/Screenshot1.png'
import Hr from '../components/Hr';
import Vendor from '../components/Vendor';
import Business from '../components/Business';
import { Link } from 'react-router-dom';

export default function Contactus() {

  const [formtype,setformtype  ]= useState("hr")

  const formytpechange = (val) => {
    setformtype(val)
    console.log(formtype)
  }


  
  const [formattedDate,setformattedDate]= useState(null)
  useEffect(()=>{
      const currentDate = new Date();
      const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
      setformattedDate(format)
  }, [])
  const divRef = useRef(null);
  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: 'smooth' });
  },[]);

 

  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
      <div ref={divRef} ></div>
      <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-4' >
        <div className='text-start text-14 text-white px-2 py-1' style={{backgroundColor:"rgba(0, 0, 0, .8)",display:"inline-block"}}>
        <Link style={{textDecoration:"none",color:"white"}} to='/' >Home</Link>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>CONTACT US</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"100px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
        <div className='row mdWidth75 mx-auto p-1 p-md-4 text-start' >
            <div className='col-md-2 col-12 h1' style={{padding:"0px",borderRight:"1px solid pink"}} >
            <p  onClick={()=>{formytpechange("business")}} className={`formtype ${formtype==="business"?"pink":"gray"}`} >Business Enquiry </p>
            <p  onClick={()=>{formytpechange("hr")}} className={`my-4 formtype ${formtype==="hr"?"pink":"gray"}`}>HR</p> 
            <p  onClick={()=>{formytpechange("vendor")}} className={`formtype ${formtype==="vendor"?"pink":"gray"}`} >Become a Vendor</p>
            </div>
            <div className='col-md-10 col-12 p-4' style={{borderLeft:"1px solid #C2C2C2"}} >
            <div className="container-fluid px-1 mx-auto">
              {formtype==="business"?<Business/>:""}
              {formtype==="hr"?<Hr/>:""}
              {formtype==="vendor"?<Vendor/>:""}
      

    </div>
            </div>

            {/* <div id="map" style={{ height: '800px' }}></div> */}

            <div className='my-4 cursor-pointer'>
              <p className='h3' style={{color:"#00BCD4"}}>Production Unit</p>
              <a href='https://maps.app.goo.gl/Y3dAsVQHz7PBqs1o8' target='blank'>
              <img alt='' className='my-4 w-100' src={map1} />
              </a>
              <p className='h3 ' style={{color:"#00BCD4"}}>Marketing Office</p>
              <a href='https://maps.app.goo.gl/HAQW5816cWQTeNTR8' target='blank'>
              <img alt='' className='w-100' src={map2}  />
              </a>
            </div>

        </div>
    </div>
  )
}

