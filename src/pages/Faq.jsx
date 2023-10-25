import React,{useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/main.css'
import { AiFillPlusSquare , AiFillMinusSquare} from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";

export default function Faq() {

    const [expand0,setExpand0] = useState(false)
    const [expand1,setExpand1] = useState(true)
    const [expand2,setExpand2] = useState(true)
    const [expand3,setExpand3] = useState(true)
    const [expand4,setExpand4] = useState(true)
    const [expand5,setExpand5] = useState(true)
    const [expand6,setExpand6] = useState(true)
    const [expand7,setExpand7] = useState(true)
    const [expand8,setExpand8] = useState(true)
    const [expand9,setExpand9] = useState(true)
    const [expand10,setExpand10] = useState(true)
    const divRef = useRef(null);
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
    <div>
    <div ref={divRef} ></div>
    <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-2' >
        <div className='text-start text-14 text-white px-2 py-1' style={{backgroundColor:"rgba(0, 0, 0, .8)",display:"inline-block"}}>
        <Link style={{textDecoration:"none",color:"white"}} to='/' >Home</Link>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>FAQ</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"100px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
       <div  className='mdWidth75 my-4 py-4 text-start mx-auto' >
       <div className='my-4' style={{fontSize:"30px",borderBottom:""}}><span ><span style={{color:"#535353"}}>FAQ</span> <span style={{color:"#2ABDE9"}} >Updates</span></span></div>
       <Accordion style={{backgroundColor:"white"}} defaultActiveKey={['0']} alwaysOpen>
           <Accordion.Item eventKey="0">
               <Accordion.Header onClick={()=>setExpand0(!expand0)} className='more' >
                   <div className='d-flex flex-row' style={{alignItems:"center"}}>

                       <div>
                           {
                               expand0?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                           }
                           
                       </div>
                       <p className='more m-0 mx-4'>How can I place my order?</p>
                   </div>
               </Accordion.Header>
               <Accordion.Body>
                   <p style={{paddingLeft:"70px"}} className='para'>You can place your order either on a call or by visiting us at our office in Faridabad.</p>
               </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="1">
               <Accordion.Header onClick={()=>setExpand1(!expand1)} className='more' >
                   <div className='d-flex flex-row' style={{alignItems:"center"}}>

                       <div>
                           {
                               expand1?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                           }
                           
                       </div>
                       <p className='more m-0 mx-4'>How can I contact you?</p>
                   </div>
               </Accordion.Header>
               <Accordion.Body>
                   <p style={{paddingLeft:"70px"}} className='para'>You can contact us on phone, via email or reach us via our social-media platforms.</p>
                   <p style={{paddingLeft:"70px"}} className='para'>Call us at: +91 9643316338</p>
                   <p style={{paddingLeft:"70px"}} className='para'>Email : print@printsmith.co.in</p>
               
               </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="2">
               <Accordion.Header onClick={()=>setExpand2(!expand2)} className='more' >
                   <div className='d-flex flex-row' style={{alignItems:"center"}}>

                       <div>
                           {
                               expand2?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                           }
                           
                       </div>
                       <p className='more m-0 mx-4'>What are your operating hours?</p>
                   </div>
               </Accordion.Header>
               <Accordion.Body>
                   <p style={{paddingLeft:"70px"}} className='para'>Our working hours are from 9 am-7 pm, Monday-Saturday.</p>
               
               </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="3">
               <Accordion.Header onClick={()=>setExpand3(!expand3)} className='more' >
                   <div className='d-flex flex-row' style={{alignItems:"center"}}>

                       <div>
                           {
                               expand3?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                           }
                           
                       </div>
                       <p className='more m-0 mx-4'>What do you print?</p>
                   </div>
               </Accordion.Header>
               <Accordion.Body>
                   <p style={{paddingLeft:"70px"}} className='para'>We offer a whole gamut of printing & packaging services from banners to posters, stationery printing, brochures & catalogues, book publishing, screen printing, box & carton designs etc. To know more, please check our services & products section on the website.</p>
               
               </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="4">
               <Accordion.Header onClick={()=>setExpand4(!expand4)} className='more' >
                   <div className='d-flex flex-row' style={{alignItems:"center"}}>

                       <div>
                           {
                               expand4?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                           }
                           
                       </div>
                       <p className='more m-0 mx-4'>Do you offer any discounts depending upon the quantity?</p>
                   </div>
               </Accordion.Header>
               <Accordion.Body>
                   <p style={{paddingLeft:"70px"}} className='para'>Yes, it depends on the volume of the order.</p>
               
               </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="5">
               <Accordion.Header onClick={()=>setExpand5(!expand5)} className='more' >
                   <div className='d-flex flex-row' style={{alignItems:"center"}}>

                       <div>
                           {
                               expand5?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                           }
                           
                       </div>
                       <p className='more m-0 mx-4'>Which payment modes do you accept?</p>
                   </div>
               </Accordion.Header>
               <Accordion.Body>
                   <p style={{paddingLeft:"70px"}} className='para'>We accept payment by cheque, draft, credit & debit cards.</p>
               
               </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="6">
               <Accordion.Header onClick={()=>setExpand6(!expand6)} className='more' >
                   <div className='d-flex flex-row' style={{alignItems:"center"}}>

                       <div>
                           {
                               expand6?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                           }
                           
                       </div>
                       <p className='more m-0 mx-4'>Which payment modes do you accept?</p>
                   </div>
               </Accordion.Header>
               <Accordion.Body>
                   <p style={{paddingLeft:"70px"}} className='para'>We accept payment by cheque, draft, credit & debit cards.</p>
               </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="7">
               <Accordion.Header onClick={()=>setExpand7(!expand7)} className='more' >
                   <div className='d-flex flex-row' style={{alignItems:"center"}}>

                       <div>
                           {
                               expand7?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                           }
                           
                       </div>
                       <p className='more m-0 mx-4'>Do you provide sample designs?</p>
                   </div>
               </Accordion.Header>
               <Accordion.Body>
                   <p style={{paddingLeft:"70px"}} className='para'>Yes, we do provide sample designs for your reference.</p>
               </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="8">
               <Accordion.Header onClick={()=>setExpand8(!expand8)} className='more' >
                   <div className='d-flex flex-row' style={{alignItems:"center"}}>

                       <div>
                           {
                               expand8?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                           }
                           
                       </div>
                       <p className='more m-0 mx-4'>Is my personal information safe on your website?</p>
                   </div>
               </Accordion.Header>
               <Accordion.Body>
                   <p style={{paddingLeft:"70px"}} className='para'>We strictly adhere to our policy of not disclosing any personal information of our clients to anyone. Your personal information is completely safe with us.</p>
               </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="9">
               <Accordion.Header onClick={()=>setExpand9(!expand9)} className='more' >
                   <div className='d-flex flex-row' style={{alignItems:"center"}}>

                       <div>
                           {
                               expand9?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                           }
                           
                       </div>
                       <p className='more m-0 mx-4'>How long is your turnaround time?</p>
                   </div>
               </Accordion.Header>
               <Accordion.Body>
                   <p style={{paddingLeft:"70px"}} className='para'>We work on strict deadlines and deliver our clients’ order as soon as possible. Besides, it takes 2-6 working days to get the work done, depending on the volume of your order.</p>
               </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="10">
               <Accordion.Header onClick={()=>setExpand10(!expand10)} className='more' >
                   <div className='d-flex flex-row' style={{alignItems:"center"}}>

                       <div>
                           {
                               expand10?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                           }
                           
                       </div>
                       <p className='more m-0 mx-4'>How do I get my delivery?</p>
                   </div>
               </Accordion.Header>
               <Accordion.Body>
                   <p style={{paddingLeft:"70px"}} className='para'>Once the job is complete, we’ll deliver your order at the address provided by you. In case of change of the address, you might have to pay extra charges.</p>
                   <p style={{paddingLeft:"70px"}} className='para'>In case of an urgency, you can also collect your order from our plant.</p>
               </Accordion.Body>
           </Accordion.Item>
           
   </Accordion>

       </div>
</div>
  )
}
