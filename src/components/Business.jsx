import React,{useRef, useState,useEffect} from 'react'
import emailjs from "@emailjs/browser";
import line3 from '../assets/line3.svg'

export default function Business() {

    const formRef = useRef();
    const [form, setForm] = useState({
      contact_person: "",
      email: "",
      mobile:"",
      city:"",
      currentOrgnisation:"",
      designation:"",
      query:""
    });
    
  
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
         "subject":"Business Enquiry",
         "body":`contact_person: ${form.contact_person} 
         email: ${form.email} 
         mobile: ${form.mobile} 
         city: ${form.city} 
         currentOrgnisation:${form.currentOrgnisation} 
         designation:${form.designation} 
         Query:${form.query}  `
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
    <div className="row d-flex justify-content-center">
    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center w-100">
        <h3 className='blue-text text-start' >Drop us a business!</h3>
        <p className="blue-text text-start">We much value the opportunity</p>
        <div className="">
            
            <form onSubmit={handleSubmit} ref={formRef} className="form-card"  >
                <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                    <label className="form-control-label py-2 text-start">Contact Person (required)<span className="text-danger"> *</span></label> 
                    <input required value={form.name}  onChange={handleChange}  type="text" id="fname" name="contact_person"/> 
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label py-2 text-start">Name Of The Organisation (required)<span className="text-danger"> *</span></label>
                        <input required name='currentOrgnisation' value={form.currentOrgnisation} onChange={handleChange}  type="text" id="mob" /> 
                    </div>
                </div>
                <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label py-2 text-start">Mobile<span className="text-danger"> *</span></label>
                        <input required name='mobile' minLength={10} maxLength={10} value={form.mobile} onChange={handleChange}  type="text" id="mob"  /> 
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                        <label className="form-control-label py-2 text-start">Email<span className="text-danger"> *</span></label> 
                        <input required  name='email' value={form.email} onChange={handleChange}  type="text" id="email" /> 
                </div>
                </div>
                <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                        <label className="form-control-label py-2 text-start">Designation<span className="text-danger"> *</span></label>
                        <input required name='designation' value={form.designation} onChange={handleChange}  type="text" id="lname"/> 
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                        <label className="form-control-label py-2 text-start">City<span className="text-danger"> *</span></label>
                        <input required name='city' value={form.city} onChange={handleChange}  type="text" id="lname" /> 
                    </div>
                </div>
                <div className="row justify-content-between text-left">
                    <div className="form-group col-6 flex-column d-flex"> 
                    <label className="form-control-label py-2 text-start">Your Query<span className="text-danger"> *</span></label> 
                    <textarea  onChange={handleChange} name='query' id="ans" placeholder=""/> 
                </div>
                </div>
                <div className="row justify-content-end">
                    <div className="justify-content-end d-flex form-group col-sm-6"> 
                    <button type="submit" className="btnsumbit">Submit</button> 
                </div>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}
