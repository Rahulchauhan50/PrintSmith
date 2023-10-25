import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import grid1 from '../assets/1-4-370x294_c.png'
import grid2 from '../assets/2-3-370x305_c.png'
import grid3 from '../assets/3-3-370x305_c.png'
import grid4 from '../assets/4-2-370x328_c.png'
import grid5 from '../assets/4-2-370x328_c.png'
import grid6 from '../assets/5-1-370x350_c.png'
import tab1 from '../assets/4-3-1024x161.png'
import tab2 from '../assets/1-1-370x234_c.png'
import tab3 from '../assets/2-370x239_c.png'
import tab4 from '../assets/3-370x234_c.png'
import tab5 from '../assets/1-2.png'
import tab6 from '../assets/2-1-370x304_c.png'
import tab7 from '../assets/3-1-370x304_c.png'
import tab8 from '../assets/4-370x275_c.png'
import tab9 from '../assets/5-370x274_c.png'
import tab10 from '../assets/1-3-370x231_c.png'
import tab11 from '../assets/2-2-370x231_c.png'
import tab12 from '../assets/3-2-370x231_c.png'
import tab13 from '../assets/4-1-370x231_c.png'
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";

export default function Abouttabs() {
  return (
    <>
    <div  className='my-4 padtop'>
    <div className='h1' style={{color:"#535353"}} >Know <span style={{fontWeight:500,color:"#2ABDE9"}} >Our Capability</span> </div>
    <AiOutlineLine className='mb-4' color='#F902AC' style={{height:"3px", width:"60px",backgroundColor:"#F902AC"}} />
    <p style={{color:"#535353", fontSize:"14px"}} >Our happy customers are our real rewards and we are committed to deliver the best quality to them. This quality comes with the latest infrastructure and at Printsmith,<br/> we have made it a policy to invest in advanced & latest equipment to ensure high standards of the deliverable. </p>
    <p style={{color:"#535353", fontSize:"14px"}} >Located at Faridabad, the state-of-the-art plant of Printsmith has a complete set-up including designing to pre-press to final packaging of the materials.</p>
  </div>
    <div className='mdWidth75 mx-auto bg-light' style={{marginTop:"80px",marginBottom:"80px"}} >
      <Tab.Container id="left-tabs-example" defaultActiveKey="fourth">
      <Row>
        <Col sm={3} style={{margin:"0px",padding:"0px",backgroundColor:"#F5F5F5"}}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item className=''>
              <Nav.Link className='bg-white justify-content-between p-3 d-flex w-100' style={{border:"2px solid #ECE6E6",color:"#535353",borderRadius:"0px"}} eventKey="first">Designing Infrastructure
              <AiOutlineRight size={20} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='bg-white justify-content-between p-3 d-flex w-100 p-3' style={{border:"2px solid #ECE6E6",color:"#535353",borderRadius:"0px"}}eventKey="second">Pre-press Infrastructure
              <AiOutlineRight size={20} /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='bg-white justify-content-between p-3 d-flex w-100 p-3' style={{border:"2px solid #ECE6E6",color:"#535353",borderRadius:"0px"}}eventKey="third">Offset Printing Infrastructure
              <AiOutlineRight size={20} /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='bg-white justify-content-between p-3 d-flex w-100 p-3' style={{border:"2px solid #ECE6E6",color:"#535353",borderRadius:"0px"}}eventKey="fourth">Post Production Infrastructure
              <AiOutlineRight size={20} /></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='bg-white justify-content-between p-3 d-flex w-100 p-3' style={{border:"2px solid #ECE6E6",color:"#535353",borderRadius:"0px"}}eventKey="fifth">Digital Infrastructure
              <AiOutlineRight size={20} /></Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} style={{margin:"0px",padding:"0px"}}>
          <Tab.Content className=''>
            <Tab.Pane style={{border:"2px solid #ECE6E6"}} eventKey="first" className='p-4'>
              <div className='' >
                <p style={{fontSize:"13px",color:"#535353"}} className='text-start' >Printsmith has its own designing facility with skilled & dedicated team of art directors, copywriters, visualizers, graphic designers and pre-press operators and following equipment.</p>
                <ul>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Latest Mac & Intel Processors based design system with professional monitors 30 Nos</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Latest versions of designing software from Adobe, Corel Draw</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Konica Minolta Bizhub280 laser printer</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Epson 9700 colour proofer with EFI colour management system</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Sample maker</li>
                </ul>
                <p style={{fontSize:"13px",color:"#535353"}} className='text-start' >This is a sample text. You can click on it to edit it inline or open the element options to access additional options for this element.</p>
              </div>
                <div>
                  <img src={tab1} className='w-75 my-2' alt='' />
                </div>
                
            </Tab.Pane>
            <Tab.Pane style={{border:"2px solid #ECE6E6"}} eventKey="second" className='p-4'>
              <div className='' >
                <ul>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Kodak CTP with Auto Plate Processor.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Memory Plate Washing System & Plate Baker.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Epson 36” Proofer with EFI Software for Proofing.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Pre-Plate registration system.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Techkon Online density SpectroDrive with PressSIGN.</li>
                </ul>
              </div>
              <div className='d-flex flex-row w-100' >
                <div>
                  <img src={tab2} className='w-75 my-2' alt='' />
                </div>
                <div>
                  <img src={tab3} className='w-75 my-2' alt='' />
                </div>
                <div>
                  <img src={tab4} className='w-75 my-2' alt='' />
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane style={{border:"2px solid #ECE6E6"}} eventKey="fourth" className='p-4'>
              <div className='' >
                <ul>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Polly 6+1 Station Flow line with Auto Pinning & Cutting.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >3 Nos Automatic Paper cutting Machines.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >2 Nos Die Punching Machines with Hot Foil.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >MBO & Heidelberg-STALL 2 Folding Machine with Condot Variable printing heads.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Well bond 6 clamp perfect binding Machine.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Thermal Laminator with auto sheet cutter & 2 Nos water based laminator with auto slitter.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >4 Nos Variable Inkjet Printing Machine.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Envelope Pasting Machine.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >BOBST Die Cutter.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Aster Swing Machine and Polly Section Swing Machine.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Spiral / Wiro / Spico Punching machine 4 nos.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >4 feet Sample Maker, Nippiry, Pressing and spine Machine.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Hard Case Cover Pasting Machine.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Auto Creasing and Perforation Machine.</li>
                </ul>
              </div>
              <div className='row w-100' >
                <div className='col-4 my-3' >
                  <img src={tab10} className='w-100 my-2' alt='' />
                </div>
                <div className='col-4 my-3'>
                  <img src={tab11} className='w-100' alt='' />
                </div>
                <div className='col-4 my-3'>
                  <img src={tab12} className='w-100' alt='' />
                </div>
              </div>
              <div className='row w-100' >
                <div className='col-4'>
                  <img src={tab13} className='w-100' alt='' />
                </div>
                <div className='col-4'>
                  {/* <img src={tab9} className='w-100' alt='' /> */}
                </div>
                <div className='col-4'>
                  {/* <img src={tab9} className='w-75 my-2' alt='' /> */}
                </div>
                
              </div>
            </Tab.Pane>
            <Tab.Pane style={{border:"2px solid #ECE6E6"}} eventKey="third" className='p-4'>
              <div className='' >
                <ul>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >20” x 30” Komori 4 Color Offset Machine with auto plate changer (CPC).</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >28” x 40” Heidelberg 2 Color Offset Machine with UV Coater.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >28” x 40” 6 color Komori with LED UV and Coater.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >25” x 37” Komori 4 Color Offset Machine with auto plate changer (CPC).</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >40” x 60” Screen Printing Machine.</li>
                </ul>
              </div>
              <div className='row w-100' >
                <div className='col-4 my-3' >
                  <img src={tab5} className='w-100 my-2' alt='' />
                </div>
                <div className='col-4 my-3'>
                  <img src={tab6} className='w-100' alt='' />
                </div>
                <div className='col-4 my-3'>
                  <img src={tab7} className='w-100' alt='' />
                </div>
              </div>
              <div className='row w-100' >
                <div className='col-4'>
                  <img src={tab8} className='w-100' alt='' />
                </div>
                <div className='col-4'>
                  <img src={tab9} className='w-100' alt='' />
                </div>
                <div className='col-4'>
                  {/* <img src={tab9} className='w-75 my-2' alt='' /> */}
                </div>
                
              </div>
            </Tab.Pane>
            <Tab.Pane style={{border:"2px solid #ECE6E6"}} eventKey="fifth" className='p-4'>
              <div className='' >
                <ul>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Apsom Digital Solvent Machine 10ft.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Flat bed LED UV printing machine with white printing - 8 feet.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >pson 9700 Digital Printing Machine.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Epson SureColor SC-S40670 Eco-Solvent Signage Printer.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >4 x 3 ft Laser Cutting Machine.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Konica Minolta bizhub C-258 for Digital Printout.</li>
                  <li style={{fontSize:"13px",color:"#535353"}} className='text-start h6' >Graphtech 48" vinyl plotter</li>
                </ul>
              </div>
              <div className='d-flex flex-row w-100' >
                <div>
                  <img src={grid1} className='w-75 my-2' alt='' />
                </div>
                <div>
                  <img src={grid2} className='w-75 my-2' alt='' />
                </div>
                <div>
                  <img src={grid3} className='w-75 my-2' alt='' />
                </div>
              </div>
              <div className='d-flex flex-row w-100' >
                <div>
                  <img src={grid4} className='w-75 my-2' alt='' />
                </div>
                <div>
                  <img src={grid5} className='w-75 my-2' alt='' />
                </div>
                <div>
                  <img src={grid6} className='w-75 my-2' alt='' />
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
          
        </div>
        </>
  )
}
