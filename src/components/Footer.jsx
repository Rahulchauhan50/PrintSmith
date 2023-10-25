import React from 'react'
import logo from '../assets/logo-300x139.png'
import '../styles/main.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div style={{backgroundColor:"#181818"}}>
        <div className='row py-4' >
        <div className="col-md-4 col-12">
            <div className="row mx-4">
                    <p className='h2 text-start my-3' style={{color:"#EFB838"}}>Useful Links</p>
                <div className="col-6" >
                        <Link to='/about' className="footerlink text-start" ><p >About Us</p></Link>
                        <Link to='/pos' className="footerlink text-start" ><p >POS Display and Fixtures</p></Link>
                        <Link to='/case-studies' className="footerlink text-start" ><p >Case studies & Testimonial</p></Link>
                        <Link to='/registration' className="footerlink text-start" ><p >Online Vendor Registration</p></Link>
                        <Link to='/employees-engagement' className="footerlink text-start" ><p >Employee Engagement & Training</p></Link>
                        <Link to='/openings' className="footerlink text-start" ><p >Opening</p></Link>
                        <Link to='/privacy-policy' className="footerlink text-start" ><p >Privacy Policy & Terms and conditions</p></Link>
                        <Link to='/packaging-printing-exp' className="footerlink text-start" ><p >Packaging Expertise</p></Link>
                </div>
                <div className="col-6">
                        <Link to='/commercial-printing' className="footerlink text-start" ><p >Commercial Printing</p></Link>
                        <Link to='/packaging-printing' className="footerlink text-start" ><p >Packaging Printing</p></Link>
                        <Link to='/Contact-us'  className="footerlink text-start" ><p >Contact Us</p></Link>
                        <Link to='/csr' className="footerlink text-start" ><p >CSR</p></Link>
                        <Link to='/news' className="footerlink text-start" ><p >News</p></Link>
                        <Link to='/faq' className="footerlink text-start" ><p >FAQ</p></Link>
                        <Link to='/commercial-printing-exp' className="footerlink text-start" ><p >Commercial Printing Expertise</p></Link>
                        <Link to='/pos-exp' className="footerlink text-start" ><p >POS Display and Fixtures Expertise</p></Link>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-12 my-4">
                <div>
                    <img src={logo} alt='' />
                </div>
        </div>
        <div className="col-md-4 col-12 p-2">
            <iframe className='' title='video' id="video" width={`${window.innerWidth>1200?"360":"300"}`} height={`${window.innerWidth>1200?"215":"175"}`} src="//www.youtube.com/embed/BVlSGuVeSYw?rel=0" frameBorder={0} allowFullScreen ></iframe>
        {/* <div className="col-sm-3 " >
            <div id="text_contact-1" className="widget widget_text_contact">
		<div className="textwidget contact-details">
        </div>
		</div>
        </div> */}
        </div>
    </div>
        <p className='text-white p-4 text-12' style={{borderTop:"2px solid gray"}} >©Copyright 2023, Printsmith (P) LTD. All rights reserved.</p>
    </div>
  )
}

// 

// 

// 

// 

// 

// Faq

