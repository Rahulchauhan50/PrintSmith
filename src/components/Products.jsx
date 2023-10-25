import React from 'react'
import mask from '../assets/Images-for-Website_N95-Mask.jpg'

export default function Products({GetQoute, data, index, logo}) {
  return (
    <div className={`d-flex my-4 ${index%2!==0?"flex-md-row-reverse":"flex-md-row"}  flex-column mx-auto`}  >
          <div>
            <img className='w-100' alt='' src={logo} />
          </div>
          <div className='w-100 p-4 text-start'>
            <div>
              <p className='h3 text-muted' style={{overflowY: "hidden"}} >{data.heading}</p>
              <p className='h6 text-muted' style={{overflowY: "hidden",fontFamily:"Open Sans",fontSize:"13px",lineHeight:"25px"}} >{data.para}</p>
              <div>
              {data.benefits?<p className='h4 mt-4' style={{fontWeight:"700",color:"#535353"}} >Benefits</p>:<p>Features </p>}
              
              <ul className='listStyle' >
                {
                    data.points?.map((e,i)=>{
                        return <li style={{fontFamily:"Open Sans",fontSize:"13px",lineHeight:"25px"}} key={i} >{e}</li>
                    })
                }
              </ul>
            {data.caution?<p><span style={{fontWeight:"700",color:"#535353"}}>Caution</span>{data.caution}</p>:""}
            {data.cost?<div className='mt-2 text-start' style={{fontWeight:"700",color:"#535353"}} >{data.cost}</div>:""}
            
            <button onClick={GetQoute} style={{borderRadius:"0px"}} type="button" className="my-4 btn btn-primary">Get Quote</button>
            </div>
            </div>

          </div>

        </div>
  )
}
