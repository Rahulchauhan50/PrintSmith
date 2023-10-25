import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

function Popcontact({handleClose,show}) {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    company:"",
    mobile:"",
    email: "",
    Needed_services:"",
    message:"",
  });
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      resume: file,
    }));
    console.log(form)
  };
  

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    
    setForm({
      ...form,
      [name]: value,
    });
    
    console.log(form)
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
       "subject":"Greetings! from Printsmith",
       "body":`name: ${form.name} 
       company: ${form.company} 
       mobile: ${form.mobile} 
       email: ${form.email} 
       Needed_services:${form.Needed_services} 
       message:${form.message} `
     });
     
     let response = await fetch("https://printsmith.onrender.com/send-mail", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.json();
     console.log(data);
     alert("Thank you. We will get back to you as soon as possible.");
      
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl" >
        <Modal.Header style={{backgroundColor:"#F5F5F5"}} closeButton>
          <Modal.Title>
            <div>
            <div className='mx-auto' style={{fontSize:"30px",fontWeight:"400",color:"#666666"}}>Get In Touch</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"#F5F5F5"}}>
          <div className='d-flex justify-content-center para'>Please fill this form and we'll get back to you as soon as possible!</div>
          <div>
            
          <form onSubmit={handleSubmit} ref={formRef} className="form-card" style={{backgroundColor:"#F5F5F5"}} >
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                            <label className="form-control-label py-2 text-start">Name<span className="text-danger"> *</span></label> 
                            <input value={form.name}  onChange={handleChange}  type="text" id="fname" name="name"/> 
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label py-2 text-start">Company<span className="text-danger"> *</span></label>
                                <input name='company' value={form.company} onChange={handleChange}  type="text" id="mob" /> 
                            </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-md-4 flex-column d-flex">
                                <label className="form-control-label py-2 text-start">Mobile<span className="text-danger"> *</span></label>
                                <input name='mobile' value={form.mobile} onChange={handleChange}  type="text" id="mob"  /> 
                            </div>
                            <div className="form-group col-md-4 flex-column d-flex"> 
                                <label className="form-control-label py-2 text-start">Email<span className="text-danger"> *</span></label> 
                                <input  name='email' value={form.email} onChange={handleChange}  type="text" id="email" /> 
                        </div>
                            <div className="form-group text-start col-sm-4 flex-column d-flex"> 
                                <label className="form-control-label py-2 text-start">Needed services<span className="text-danger"> *</span></label>
                                <select value={form.Needed_services} onChange={handleChange}  name='Needed_services' style={{height:"45px"}} className="form-control w-100 mx-auto mx-md-1 w-75" >
                                <option value="">Please Select</option>
                                <option value="Marketing Collateral">Marketing Collateral</option>
                                <option value="Danglers">Danglers</option>
                                <option value="Woblers">Woblers</option>
                                <option value="Bunting">Bunting</option>
                                <option value="Posters">Posters</option>
                                <option value="On Product Stickers">On Product Stickers</option>
                                <option value="In Product Stickers">In Product Stickers</option>
                                <option value="Leaflet">Leaflet</option>
                                <option value="Brochures">Brochures</option>
                                <option value="Stationary">Stationary</option>
                                <option value="Annual Reports">Annual Reports</option>
                                <option value="Magazine">Magazine</option>
                                <option value="News Letters">News Letters</option>
                                <option value="Calendars">Calendars</option>
                                <option value="Diaries">Diaries</option>
                                <option value="Education books">Education books</option>
                                <option value="Coffee Table Books">Coffee Table Books</option>
                                <option value="Children Books">Children Books</option>
                                <option value="Art &amp; Craft Books">Art &amp; Craft Books</option>
                                <option value="Cookery Books">Cookery Books</option>
                                <option value="Spritiual Books">Spritiual Books</option>
                                <option value="Multi Lingual Books">Multi Lingual Books</option>
                                <option value="Folding Ctns">Folding Ctns</option>
                                <option value="Clear Plastic">Clear Plastic</option>
                                <option value="Met Pet Cartons">Met Pet Cartons</option>
                                <option value="Corrugated Cartons">Corrugated Cartons</option>
                                <option value="Gift Boxes">Gift Boxes</option>
                                <option value="Match Box">Match Box</option>
                                <option value="Manuals">Manuals</option>
                                <option value="UV &amp; Embossing">UV &amp; Embossing</option>
                                <option value="Printing of Poly Carbonate">Printing of Poly Carbonate</option>
                                <option value="Printing on PVC/PET/PP">Printing on PVC/PET/PP</option>
                                <option value="Wood Printing">Wood Printing</option>
                                <option value="Tile Printing">Tile Printing</option>
                                <option value="Glass Printing">Glass Printing</option>
                                <option value="Acrylic">Acrylic</option>
                                <option value="Plastic Printing">Plastic Printing</option>
                                <option value="Direct Printing">Direct Printing</option>
                                <option value="Lenticulers">Lenticulers</option>
                                <option value="Fragrance ink">Fragrance ink</option>
                                <option value="Invisible Printing">Invisible Printing</option>
                                <option value="Scratch">Scratch</option>
                                <option value="Heat Resistant">Heat Resistant</option>
                                <option value="Hot Foiling">Hot Foiling</option>
                                <option value="Laser Cut">Laser Cut</option>
                                <option value="Reflective Printing">Reflective Printing</option>
                                <option value="Barcodes">Barcodes</option>
                                <option value="Batch Coding">Batch Coding</option>
                                <option value="Serial/Random /Skip">Serial/Random/Skip</option>
                                <option value="Scratch Cards">Scratch Cards</option>
                                <option value="Mailers">Mailers</option>
                                <option value="Certificates">Certificates</option>
                                <option value="Plastic Cards">Plastic Cards</option>
                                <option value="Trade Shows">Trade Shows</option>
                                <option value="Graphics">Graphics</option>
                                <option value="Roll Ups Standies/Banners Standy">Roll Ups Standies/Banners Standy</option>
                                <option value="Cut Outs">Cut Outs</option>
                                <option value="Back Drops">Back Drops</option>
                                <option value="Backlets/Graphics">Backlets/Graphics</option>
                                <option value="Table Top Displays">Table Top Displays</option>
                                <option value="Fabric Banners">Fabric Banners</option>
                                <option value="Wall Papers">Wall Papers</option>
                                <option value="Sandwich Posters">Sandwich Posters</option>
                                <option value="One Way Vision">One Way Vision</option>
                                </select>
                            </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-12 flex-column d-flex"> 
                            <label className="form-control-label py-2 text-start">Message<span className="text-danger"> *</span></label> 
                            {/* <input  name='resume'  type="" id="ans" />  */}
                            <textarea  name='message' value={form.message} onChange={handleChange} placeholder="message" rows={`${window.innerWidth>768?10:5}`}/>
                        </div>
                        </div>
                        <div className="row justify-content-end my-2">
                            <div className="justify-content-end d-flex form-group col-sm-6"> 
                            <button type="submit" className="btn text-white" style={{backgroundColor:"#E90AAF"}} >GET THE QUOTE NOW!</button> 
                        </div>
                        </div>
                    </form>
          </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Popcontact;