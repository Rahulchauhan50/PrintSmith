import React from 'react'

export default function   Table({table}) {
  return (
    <div>
        <div className='px-4' style={{marginTop:"70px",paddingBottom:"70px"}}>
        <p className='text-start h4' style={{fontWeight:"700",color:"#535353"}}>{table[0]} </p>
        <hr/>
        <div className='row'>
          {
            table.slice(1).map((e,i)=>{
              return <div key={i} style={{fontSize:"13px"}} className='col-md-3 col-6 my-3 more text-start px-4'>{e}</div>
            })
          }
        </div>

      </div>
    </div>
  )
}
