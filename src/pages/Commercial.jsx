import React,{useEffect, useRef, useState} from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { AiOutlineCaretRight } from "react-icons/ai";


export default function Commercial({handleShow,table1,table1_li,table1_head,img1}) {

  const [formattedDate,setformattedDate]= useState(null)
    useEffect(()=>{
        const currentDate = new Date();
        const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
        setformattedDate(format)
    }, [])
  const divRef = useRef(null);
  useEffect(() => {
     window.scrollTo(0, 0);
     
  },[]);

  useEffect(()=>{
    document.title = `${table1_head[0]} Printing - Printsmith`
  },[table1_head[0]])

  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
      <div ref={divRef} ></div>
      <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-2' >
        <div className='text-start text-14 text-white px-2 py-1' style={{backgroundColor:"rgba(0, 0, 0, .8)",display:"inline-block",maxWidth:"90%"}}>
        <Link style={{textDecoration:"none",color:"white"}} to='/' >Home</Link>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>OUR SERVICES</span>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>{table1_head[0]} Printing</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"100px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
         <div className='mdWidth75 mx-auto'>
         <div className='h1 my-3' style={{color:"#5B5B5B",paddingTop:"50px"}} >{table1_head[0]}<span style={{color:"#2ABDE9"}} >Printing</span></div>
         <div className='mx-auto' style={{width:"50px" ,height:"3px", backgroundColor:"#FA01AC"}} ></div>
         <div className='text-start mx-4 my-3' style={{fontFamily:"Open Sans",fontSize:"16px",color:"rgb(83,83,83)"}} >{table1_head[1]}</div>
         <ul className='text-start '>
          {
              table1_li.map((e,i)=>{
                return <li className='my-1' style={{fontFamily:"Open Sans",fontSize:"13px",color:"rgb(83,83,83)"}} key={i}>{e}</li>
              })
          }
         </ul>
         <div style={{marginTop:"60px",marginBottom:"60px"}} className='row px-2'>
         {table1.map((e,i)=>{
            return<> <div style={{color:"rgb(83,83,83)",fontSize:"18px"}} key={i} className='col-md-3 col-6 text-start'>
              <div className='row'>
                <div className='col-2'>
                <AiOutlineCheck size={25} className='mx-2' color='#F901AC' />
                </div>
                <div className='col-10'>
                  {e}
                </div>
              </div> 
              </div>
            </>
          })}
        
          </div>
         </div>
         <div className='my-4 bg-pink d-flex flex-md-row flex-column my-4 mx-auto mt-4 p-4' style={{backgroundColor:"#FC01AC",justifyContent:"space-around"}}>
        <p style={{fontWeight:"100"}} className='h3 text-light'>Click on the box to get a quote & we’ll get back to you shortly.</p>
       
        <button onClick={handleShow} type="button" className="btn mx-4 my-3 my-md-1 h6" style={{backgroundColor:"#31B0D5",color:"white",borderRadius:"0px"}}>Get a quote now</button>
      </div>
      <div className='py-4' >
        <img className='w-75 my-4' alt='' src={img1} />
      </div>
    </div>
  )
}







