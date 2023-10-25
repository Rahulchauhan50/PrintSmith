import React,{useEffect} from 'react'
import '../styles/main.css'
import { AiOutlineInfoCircle } from "react-icons/ai";
import img1 from '../assets/Printsmith-P2-300x238.png'
import img2 from '../assets/Printsmith-P3-279x300.png'
import img3 from '../assets/Untitled-Extract-Pages.jpg'
import img4 from '../assets/Printsmith-Credentials-1-1024x558.jpg'
import img5 from '../assets/Printsmith-Credentials-1024x558.jpg'
import Abouttabs from '../components/Abouttabs';
import Team from '../components/Team';


export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
    document.title = "About Us - Printsmith"
  }, []);

  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
         <div id='vision' style={{height:"200px"}} className='gradi' ></div>
        <div className='justify-content-center d-flex mt70'>
          <div className='px-4 py-4 mx-md-4 mx-0 bg-light mdWidth75' style={{borderLeft:"5px solid #F304AD"}} >
            <div className='d-flex flex-row align-item-center my-3'>
              <AiOutlineInfoCircle  size={35} color='#FC01AC' />
              <p className='mx-2 h3 justify-content-start d-flex w-100' style={{fontWeight:"700",color:"#535353",overflowY:"hidden"}} >Who&nbsp;<span style={{color:"#2ABDE9"}} >We Are</span> </p>
            </div>
           <div className='d-flex flex-column flex-md-row'>
           <div className='text-start'>
              <div className='h3 text-muted' style={{fontWeight:"1",overflowY: "hidden"}} >"We transform concepts into innovative designs.".</div>
              <p className='h6 text-muted' style={{fontWeight:"1",overflowY: "hidden"}} >Printsmith is one of the pioneer companies in printing services & has been delivering quality products & services since its inception. It came to existence in the year 2003 as a sister division of Infinity Advertising Services to shoulder all its print and production work.</p>
              <p className='h6 text-muted my-3' style={{fontWeight:"1",overflowY: "hidden"}} >In a small span of time, we have emerged as a reliable partner for many of the top brands across the nation. This journey of success has been driven by a continuous and relentless passion for building and nurturing brands.</p>
              <p className='h6 text-muted my-3' style={{fontWeight:"1",overflowY: "hidden"}} >Being a part of Infinity Advertising Services, it has been our intrinsic forte to infuse and bring creativity in our designs and deliverables. The state-of-the-art plant covers the whole gamut of printing needs, including direct marketing, brochures, magazines,  catalogs and marketing & publishing related materials with unparalleled quality in a quick turnaround time.</p>
            </div>
            <div className='mx-2 w-100'>
              
               <img alt='' className=''  src={img1} />
            </div>
           </div>
          </div>
          </div>
          <div className='justify-content-center d-flex mt-1 mb-4'>
          <div className='px-4 mx-md-4 mx-0 bg-light mdWidth75' style={{borderLeft:"5px solid #F304AD"}} >
            
           <div className='d-flex flex-column flex-md-row mt70 p-4'>
           <div className='text-start d-flex flex-column'>
            <div className='d-flex flex-row align-item-center '>
              <p className='mx-2 h3 justify-content-start d-flex w-100' style={{fontWeight:"700",color:"#535353",overflowY:"hidden"}} >Our &nbsp;<span style={{color:"#2ABDE9"}} >Genesis</span> </p>
            </div>
              <div className='h6 my-2 text-muted'  style={{fontWeight:"1",overflowY: "hidden"}} >I dedicate to ensure that every individual contribution of mine adds to the growth of my customer's business.</div>
            <div className='d-flex flex-row align-item-center '>
              <p className='mx-2 h3 justify-content-start d-flex w-100' style={{fontWeight:"700",color:"#535353",overflowY:"hidden"}} >Our &nbsp;<span style={{color:"#2ABDE9"}} >Vision</span> </p>
            </div>
              <div className='h6 my-2 text-muted'  style={{fontWeight:"1",overflowY: "hidden"}} >Enhancing client market share by providing collaborative solutions thriving on innovation, technology and ability to execute by harnessing human potential joyfully.</div>
            <div className='d-flex flex-row align-item-center '>
              <p className='mx-2 h3 justify-content-start d-flex w-100' style={{fontWeight:"700",color:"#535353",overflowY:"hidden"}} >Our &nbsp;<span style={{color:"#2ABDE9"}} >Mission</span> </p>
            </div>
              <div className='h6 my-2 text-muted'  style={{fontWeight:"1",overflowY: "hidden"}} >Our mission is to deliver a reliable, high quality and efficient printing, packaging and publishing services to build a solid long term relationship with our customers under one roof. Besides, we are also committed to maintaining a friendly, open, honest and healthy working environment based upon sound business ethics.</div>
            </div>
            <div className='mx-2 w-100'>
              
               <img alt='' className=''  src={img2} />
            </div>
           </div>
          </div>
          
          </div>
          <div className='justify-content-center d-flex pt-4' >
          <div className='px-4 mx-md-4 mx-0 bg-light mdWidth75' style={{borderLeft:"5px solid #F304AD"}} >
            <div className='d-flex flex-row align-item-center my-4'>
              <AiOutlineInfoCircle  size={35} color='#FC01AC' />
              <p className='mx-2 h3 justify-content-start d-flex w-100' style={{fontWeight:"700",color:"#535353",overflowY:"hidden"}} >Our &nbsp;<span style={{color:"#2ABDE9"}} >Journey</span> </p>
            </div>
           <div className='d-flex flex-row '>
            <img alt='' className='mx-auto my-4 w-100' src={img3} />
           </div>
          </div>
          
          </div>
          <div className='justify-content-center d-flex my-1'>
          <div className='px-4 mx-md-4 mx-0 bg-light mdWidth75' style={{borderLeft:"5px solid #F304AD"}} >
           <div className='d-flex flex-row'>
            <img alt='' className='mx-auto my-4 w-100' src={img4} />
           </div>
          </div>
          
          </div>
          <div className='justify-content-center d-flex'>
          <div className='px-4 mx-md-4 mx-0 bg-light mdWidth75' style={{borderLeft:"5px solid #F304AD"}} >
           <div className='d-flex flex-row'>
            <img alt='' className='mx-auto my-4 w-100' src={img5} />
           </div>
          </div>
          
          </div>
        <Team id='team' />
        <div id='infrastructure'></div> 
        <Abouttabs />
        
        </div>
  )
}



// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 




