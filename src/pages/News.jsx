import React,{useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/main.css'
import { AiFillPlusSquare , AiFillMinusSquare} from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";

export default function News() {
    const [expand0,setExpand0] = useState(false)
    const [expand1,setExpand1] = useState(true)
    const [expand2,setExpand2] = useState(true)
    const [expand3,setExpand3] = useState(true)
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
          <span>NEWS</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"100px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
            <div  className='mdWidth75 my-4 py-4 text-start mx-auto' >
            <div className='my-4' style={{fontSize:"30px",borderBottom:""}}><span ><span style={{color:"#535353"}}>News</span> <span style={{color:"#2ABDE9"}} >Updates</span></span></div>
            <Accordion style={{backgroundColor:"white"}} defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header onClick={()=>setExpand0(!expand0)} className='more para' >
                        <div className='d-flex flex-row' style={{alignItems:"center"}}>

                            <div>
                                {
                                    expand0?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                                }
                                
                            </div>
                            <p className='more m-0 mx-4'>Infinity, the sister concern of Printsmith wins awards - 12 June 2017</p>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className='p-4' >
                        <p className='para'>Infinity Advertising Services is engaged in a wide variety of commercial printing. Their product palette includes art books, magazines, coffee table books, brochures, catalogues, diaries, calendars and business cards. The company swept the DAC awards for creative agencies of the SAARC nations.</p>
                        <p className='para mx-auto text-center'>Team Infinity Advertising Services</p>
                        <p  className='para'>Vijay Adlakha, director, Infinity Advertising Services said, he was happy and overwhelmed. He chuckled and added, the award left me wanting more. This is mainly because awards means a world to me, they are precious because of the hardwork of his team.</p>
                        <p  className='para'>He said, “Awards does motivate my team to work harder but soon after the awards party that is the feeling that comes to their mind, which is natural and great. But I am sure they will work harder to earn more... Like me these awards have whet our appetite.."</p>
                        </div>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header onClick={()=>setExpand1(!expand1)} className='more para' >
                        <div className='d-flex flex-row' style={{alignItems:"center"}}>

                            <div>
                                {
                                    expand1?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                                }
                                
                            </div>
                            <p className='more m-0 mx-4'>Visitors Speak: Vijay Adlakha, director, Infinity Advertising Services - 17 Nov 2016</p>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className='p-4' >
                        <p className='para'>On the first day of Labelexpo India 2016, we caught up with Vijay Adlakha, director, Infinity Advertising Services.</p>
                        <img alt='' className="w-100" src="https://www.printweek.in/Utils/ImageResizer.ashx?n=http://img.haymarketsac.in/printweek/IMG/894/55894/untitled-6.jpg&amp;h=490&amp;w=735"/>
                        <p  className='para'> I am here to look at the possibilities in label printing. We are in offset, paperboard and wide-format, among others. Now, we are looking to diversify into label and flexible packing. For this, I thought Labelexpo India would be an ideal place to start. I am here to look at the different options available. I have been to label shows abroad, but this is my first time in India.... <a className='more para' href='https://www.printweek.in/news/visitors-speak-vijay-adlakha-director-infinity-advertising-services-22587' target='blank'> Read More</a></p>
                        </div>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header onClick={()=>setExpand2(!expand2)} className='more para' >
                        <div className='d-flex flex-row' style={{alignItems:"center"}}>

                            <div>
                                {
                                    expand2?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                                }
                                
                            </div>
                            <p className='more m-0 mx-4'>After Coimbatore, APL organising LED UV open house in Delhi - 11 Jan 2016</p>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className='p-4' >
                        <p className='para'>In August last year, CP Paul of APL Machinery and Vijay Adlakha of Infinity Advertising Services travelled to Coimbatore to attend LED UV live demonstration at Shree Maruthi Printers. During the conversation, an excited Paul, said, “We are projecting double digit installations in the coming year for LED UV. It is the future of printing. Our aim is to make the industry a better place with better technology.”</p>
                        <p className='para mx-auto text-center'>The LED UV demonstration at Shree Maruthi Printers in August 2015</p>
                        <img alt='' className="w-100" src="https://www.printweek.in/Utils/ImageResizer.ashx?n=http://img.haymarketsac.in/printweek/IMG/894/55894/untitled-6.jpg&amp;h=490&amp;w=735"/>
                        <p className='para'>Now, APL Machinery is organising a second open house for LED UV at Infinity Advertising Services on 20 January 2016. This LED UV is fitted on a Komori sheetfed printing press and the length of LED UV lamp is 40 inches.</p>
                        <p  className='para'> Faridabad-based APL Machinery is the Indian representative of the US-based manufacturer of UV and LED curing systems Air Motion Systems... <a className='more para' href='https://www.printweek.in/news/coimbatore-apl-organising-led-uv-house-delhi-jan-11493' target='blank'> Read More</a></p>
                        </div>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header onClick={()=>setExpand3(!expand3)} className='more para' >
                        <div className='d-flex flex-row' style={{alignItems:"center"}}>

                            <div>
                                {
                                    expand3?<AiFillPlusSquare size={45} color='#D3D3D3'/>:<AiFillMinusSquare size={45} color='#FA01AC'/>
                                }
                                
                            </div>
                            <p className='more m-0 mx-4'>Printsmith ups capacity at Faridabad - 13 May 2015</p>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className='p-4' >
                        <p className='para'>The printing solution provider, Printsmith has enhanced its capacity by investing in a Komori Spica sheetfed press at its Faridabad plant.</p>
                        <p className='para mx-auto text-center'>Vijay Adlakha, director, Infinity Advertising Services</p>
                        <img alt='' className="w-100" src="https://www.printweek.in/Utils/ImageResizer.ashx?n=http://img.haymarketsac.in/printweek/IMG/894/55894/untitled-6.jpg&amp;h=490&amp;w=735"/>
                        <p className='para'>The new four-colour 25x37inch Komori, with auto plate changer (CPC) is an addition to the firm’s current plant list. It follows the company’s other installations which include 20x30inch four-colour Komori LA 437 and the 19x25inch Heidelberg two-colour offset machine.</p>
                        <p className='para'>“The Spica has a quick makeready. Its speed of printing up to 13,000 impressions in an hour improved firm’s productivity,” explained Vijay Adlakha, director, Infinity advertising services....<a className='more para' href='https://www.printweek.in/news/printsmith-ups-capacity-faridabad-12228' target='blank'> Read More</a></p>
                        </div>
                    
                    </Accordion.Body>
                </Accordion.Item>
                
        </Accordion>

            </div>
    </div>
  )
}
