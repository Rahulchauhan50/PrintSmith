import React,{useEffect, useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { BsFillBagDashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AiOutlineCaretRight } from "react-icons/ai";
import { AiFillPlusSquare , AiFillMinusSquare} from "react-icons/ai";
import { AiTwotoneShopping,AiOutlineFileText ,AiFillThunderbolt} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";

export default function Openings() {
  const [jobs, setJobs] = useState({})
  const [formattedDate,setformattedDate]= useState(null)
  const [expand0,setExpand0] = useState(false)

  const date =(timestamp)=>{
    const date = new Date(timestamp);
    const currentDate = new Date();
    const timeDifference = currentDate - date;
    if(Math.ceil(timeDifference/1000) < 60)  {
      return "just now"
    }
   
    let milliseconds = timeDifference;
    const millisecondsInSecond = 1000;
    const millisecondsInMinute = millisecondsInSecond * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;

    const days = Math.floor(milliseconds / millisecondsInDay);
    milliseconds %= millisecondsInDay;
    const hours = Math.floor(milliseconds / millisecondsInHour);
    milliseconds %= millisecondsInHour;
    const minutes = Math.floor(milliseconds / millisecondsInMinute);

    const formattedTime = [];
    if (days > 0) {
        formattedTime.push(`${days} day${days > 1 ? 's' : ''}`);
    }
    if (hours > 0) {
        formattedTime.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    }
    if (minutes > 0) {
        formattedTime.push(`${minutes} minute${minutes > 1 ? 's ago' : ' ago'}`);
    }

    return formattedTime.join(', ')
   
  }

  useEffect(()=>{
      const currentDate = new Date();
      const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
      setformattedDate(format)
  }, [])
  const fetchJobs = async() => {
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)"
       }
       
       let response = await fetch("https://printsmith.onrender.com/data/get-jobs", { 
         method: "GET",
         headers: headersList
       });

        const data = await response.json();
        setJobs(data);
      
       console.log(data)
      
}

useEffect(()=>{
    fetchJobs()
    console.log(jobs)
},[])

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  }, []);
  
  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
          <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-2' >
        <div className='text-start text-14 text-white px-2 py-1' style={{backgroundColor:"rgba(0, 0, 0, .8)",display:"inline-block"}}>
        <Link style={{textDecoration:"none",color:"white"}} to='/' >Home</Link>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>OPENING</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"100px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
        <div className='my-4' >
            <BsFillBagDashFill size={50} color='#2F2F2F' />
            <p className='my-4' style={{fontSize:"20px"}}>It’s the most fun you’ll have inside an office. If you’ve got the talent, we’ve got the vacancy.</p>
            <p className='my-1' style={{fontSize:"14px"}} >Sheetal Goyal</p>
            <p className='my-1' style={{fontSize:"14px"}} >Email: hr@infinityadvt.com</p>
        </div>
        <div className='w50 mx-auto' style={{marginTop:"100px"}}>
            <p className='text-start my-4' style={{fontSize:"11px",color:"#555555"}} >Employee Sales Incentive Programme (ESIP)</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Job Referral Programme</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >HR Activities: -Saturday Activities -Hobby Club -Birthday Bash</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Training</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Employee of the Month</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Suggestion Scheme</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Total Productive Maintenance</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Recreational Activities & Trips</p>
        </div>
       <div className='my-4' style={{backgroundColor:"white",width:"100vw" ,paddingBottom:"100px"}}>
         
       <div className='w50 mx-auto' >
        <div className='h2 my-4 ' style={{color:"#5B5B5B",paddingTop:"50px"}} >Current&nbsp;<span style={{color:"#2ABDE9"}} >Openings</span></div>
        <div className='p-4 ' style={{backgroundColor:"#F5F5F5"}}> 
        <div>
       {jobs?.JobDetails? <Accordion style={{backgroundColor:"white"}} >
        {jobs?.JobDetails?.map((e,i)=>{
          return <Accordion.Item eventKey={i}>
          <Accordion.Header onClick={()=>setExpand0(!expand0)} className='more' >
              <div className='d-flex flex-row' style={{alignItems:"center"}}>

                  <div>
                      {
                          expand0?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                      }
                      
                  </div>
                  <p className='more m-0 mx-4'>{e.position}</p>
              </div>
          </Accordion.Header>
          <Accordion.Body>
              <div className='p-4' >
              <div className='font15 text-start'><AiTwotoneShopping size={30} color='#2222222' />Position: <span className='font11'>{e.position}</span></div>
              <div className='font15 text-start'><AiFillThunderbolt size={30} color='#2222222'/>Experience: {e.experience}</div>
              <div className='font15 text-start'><CiLocationOn size={30} color='#2222222' />Location: <span className='font11'>{e.location}</span></div>
              <div className='font15 text-start'><BsCurrencyRupee size={30} color='#2222222'/>Salary: <span className='font11'>{e.salary}</span></div>
              <div className='font15 text-start'><AiOutlineFileText size={25} color='#2222222' />Job Description: <span className='font11'>{e.job_description}</span></div>
              <div  className='text-start end'>
                <span>{date(e?.date)}</span>
              </div>
             
              </div>
          
          </Accordion.Body>
      </Accordion.Item>
        })}
                
        </Accordion>:<p className='bg-light text-14 py-2' style={{color:"#FFA54D"}}>Thank you for your interest. There are no Job Openings available at this time. Please check back later.</p> }
        </div>

        </div>
        </div>
       </div>
    </div>
  )
}








