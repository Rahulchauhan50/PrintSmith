import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import pic from '../assets/Page1-1-238x300.jpg'
import { AiOutlineCaretRight } from "react-icons/ai";

export default function Csr() {
  const [formattedDate,setformattedDate]= useState(null)
    useEffect(()=>{
        const currentDate = new Date();
        const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
        setformattedDate(format)
    }, [])
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div style={{backgroundColor:"#F5F5F5"}} >
       <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-2' >
        <div className='text-start text-white px-2 py-1 text-14' style={{backgroundColor:"rgba(0, 0, 0, .8)",display:"inline-block"}}>
        <Link style={{textDecoration:"none",color:"white"}} to='/' >Home</Link>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>CSR</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"100px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
            <div className='mdWidth75 my-4 py-4 text-start mx-auto' >
            <div className='row '>   
                <div className='col-md-8 col-12'>
                    <p className='' style={{fontSize:"35px",color:"#666666"}} >CSR Activity</p>
                    <div style={{fontFamily:"Open Sans",fontSize:"13px",lineHeight:"25px"}} >Life becomes better when you share the joy and spread happiness. At Printsmith, we have made this philosophy our policy. To achieve this goal, we have collaborated with like-minded people and contribute individually too.</div>
                    <div style={{fontFamily:"Open Sans",fontSize:"13px",lineHeight:"25px"}} >Printsmith has been working with ABLE Charities, an NGO operating from Haryana to provide better healthcare facilities and education to rural people who are deprived of these basic facilities due to acute poverty and ignorance.</div>
                    <p  className='my-4' style={{fontWeight:700,color:"#555555"}}>Education</p>
                    <p style={{fontFamily:"Open Sans",fontSize:"13px",lineHeight:"25px"}} >Education is one of the basic human rights and no person can be denied this right. Printsmith partnered with ABLE Charities and has been donating funds to build schools for providing free education to underprivileged children across the country.</p>
                    <p className='my-4' style={{fontWeight:700,color:"#555555"}}>Health</p>
                    <div style={{fontFamily:"Open Sans",fontSize:"13px",lineHeight:"25px"}} >Printsmith along with ABLE Charities organize health camps in slums and alike areas for a complete preventive and corrective health check-up of children who are under below poverty line. These community healthcare programs are being run on a regular basis to achieve our mission of ensuring good health to everyone.</div>

                </div>
                <div className='col-md-4 col-12 my-4 d-flex align-items-center' >
                <img alt='' src={pic} />

                </div>

            </div>

            </div>
            
    </div>
  )
}
