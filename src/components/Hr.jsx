import React,{useRef, useState} from 'react'

export default function Hr() {

    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      mobile:"",
      city:"",
      currentOrgnisation:"",
      exprerience:"",
      resume:""
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
         "subject":"HR",
         "body":`name: ${form.name} 
         mobile: ${form.mobile} 
         email: ${form.email} 
         city: ${form.city} 
         organisation:${form.currentOrgnisation} 
         exprience:${form.exprerience}
         resume:${form.resume}`
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
        <h3 className='blue-text text-start' >Drop us a line!</h3>
        <p className="blue-text text-start">We much value the opportunity</p>
        <div className="">
            
            <form onSubmit={handleSubmit} ref={formRef} className="form-card"  >
                <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                    <label className="form-control-label py-2 text-start">Name<span className="text-danger"> *</span></label> 
                    <input required value={form.name}  onChange={handleChange}  type="text" id="fname" name="name"/> 
                </div>
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                        <label className="form-control-label py-2 text-start">Email<span className="text-danger"> *</span></label> 
                        <input required  name='email' value={form.email} onChange={handleChange}  type="text" id="email" /> 
                </div>
                </div>
                <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label py-2 text-start">Mobile<span className="text-danger"> *</span></label>
                        <input required minLength={10} maxLength={10} name='mobile' value={form.mobile} onChange={handleChange}  type="text" id="mob"  />
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                        <label className="form-control-label py-2 text-start">City<span className="text-danger"> *</span></label>
                        <input required name='city' value={form.city} onChange={handleChange}  type="text" id="lname" /> 
                    </div>
                </div>
                <div className="row justify-content-between text-left">
                    <div className="form-group col-sm-6 flex-column d-flex">
                        <label className="form-control-label py-2 text-start">Current Organisation<span className="text-danger"> *</span></label>
                        <input required name='currentOrgnisation' value={form.currentOrgnisation} onChange={handleChange}  type="text" id="mob" /> 
                    </div>
                    <div className="form-group col-sm-6 flex-column d-flex"> 
                        <label className="form-control-label py-2 text-start">Experiance (in years)<span className="text-danger"> *</span></label>
                        <input required name='exprerience' value={form.exprerience} onChange={handleChange}  type="number" id="lname"/> 
                    </div>
                </div>
                <div className="row justify-content-between text-left">
                    <div className="form-group col-6 flex-column d-flex"> 
                    <label className="form-control-label py-2 text-start">Upload resume<span className="text-danger"> *</span></label> 
                    <input onChange={handleFileChange} name='resume'  type="file" id="ans" placeholder=""/> 
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
