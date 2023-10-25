import React,{useRef, useState,useEffect} from 'react'
import emailjs from "@emailjs/browser";
import line3 from '../assets/line3.svg'

export default function Vendor() {
  const [formattedDate,setformattedDate]= useState(null)
  useEffect(()=>{
      const currentDate = new Date();
      const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
      setformattedDate(format)
  }, [])

    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to the top of the page
      }, []);

    const formRef = useRef();
    const [form, setForm] = useState({
      Name_Of_The_Organisation : "",
      Material_Deals_In : "",
      Contact_Person:"",
      Services_Deals_In:"",
      Country_of_Business_Organization :"",
      Deals_In_Digital_Marketing:"",
      Mobile_No :"",
      Description_Of_Services_Material :"",
      Email_ID :"",
      Attach_Credential :"",
      Vendor_Address:"",
      Major_Client_List :"",
      Type :"",
      Deals_In:""
    });
  
  
    const handleChange = (e) => {
      const { target } = e;
      console.log(e)
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
           "subject":"Vendor registration",
           "body":`Name_Of_The_Organisation: ${form.Name_Of_The_Organisation} 
           Material_Deals_In: ${form.Material_Deals_In} 
           Contact_Person: ${form.Contact_Person} 
           Services_Deals_In: ${form.Services_Deals_In} 
           Country_of_Business_Organization:${form.Country_of_Business_Organization} 
           Deals_In_Digital_Marketing:${form.Deals_In_Digital_Marketing} 
           Mobile_No:${form.Mobile_No} 
           Description_Of_Services_Material:${form.Description_Of_Services_Material} 
           Email_ID:${form.Email_ID} 
           Attach_Credential:${form.Attach_Credential} 
           Vendor_Address:${form.Vendor_Address} 
           Major_Client_List:${form.Major_Client_List} 
           Type:${form.Type} 
           Deals_In:${form.Deals_In}  `
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
        <h3 className='blue-text text-start' >Drop us a Vendor!</h3>
        <p className="blue-text text-start">We much value the opportunity</p>
        <div className="">
            
        <form onSubmit={handleSubmit} ref={formRef} className="form-card"  >
                        <div className="row text-center justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                            <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Name Of The Organisation (required)<span className="text-danger"> *</span></label> 
                            <input required value={form.Name_Of_The_Organisation} className='mx-auto mx-md-1 w-100'  onChange={handleChange}  type="text" id="fname" name="Name_Of_The_Organisation"/> 
                        </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Material Deals In <span className="text-danger"> *</span></label> 
                                <select value={form.Material_Deals_In} onChange={handleChange} name='Material_Deals_In' className="form-control mx-md-1 mx-auto w-100" >
                                    <option value="">---</option>
                                    <option value="Paper &amp; board">Paper &amp; board</option>
                                    <option value="Ink &amp; chemical">Ink &amp; chemical</option>
                                    <option value="Plate and consumables">Plate and consumables</option>
                                    <option value="Maintenance parts / Machine Spares">Maintenance parts / Machine Spares</option>
                                    <option value="Packing material">Packing material</option>
                                    <option value="Job work / contract">Job work / contract</option>
                                    <option value="Activity / branding Advertising / promotional material">Activity / branding Advertising / promotional material</option>
                                    <option value="Housekeeping / hospitality service / material">Housekeeping / hospitality service / material</option>
                                    <option value="Other">Other</option>
                                </select>
                        </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Contact Person (required)<span className="text-danger"> *</span></label>
                                <input required  name='Contact_Person' className='mx-auto mx-md-1 w-100' value={form.Contact_Person} onChange={handleChange}  type="text" id="mob"  /> 
                            </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Services Deals In <span className="text-danger"> *</span></label>
                                <select value={form.Services_Deals_In} name='Services_Deals_In' onChange={handleChange} className="form-control mx-md-1 mx-auto w-100" >
                                <option value="">---</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Manpower Agency">Manpower Agency</option>
                                <option value="Researcher Agency">Researcher Agency</option>
                                <option value="Event Organizer">Event Organizer</option>
                                <option value="Photographer and Videographer">Photographer and Videographer</option>
                                <option value="Corporate Gifts">Corporate Gifts</option>
                                <option value="Retail &amp; Fabricators">Retail &amp; Fabricators</option>
                                <option value="Translator">Translator</option>
                                <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Country of Business Organization<span className="text-danger"> *</span></label>
                                <input required name='Country_of_Business_Organization' className='mx-auto mx-md-1 w-100' value={form.Country_of_Business_Organization} onChange={handleChange} type="text" id="mob" /> 
                            </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Deals In Digital Marketing <span className="text-danger"> *</span></label>
                                <select value={form.Deals_In_Digital_Marketing} name='Deals_In_Digital_Marketing' onChange={handleChange} className="form-control mx-md-1 mx-auto w-100" >
                                <option value="">---</option>
                                <option value="Email">Email</option>
                                <option value="Cashback">Cashback</option>
                                <option value="Coupon">Coupon</option>
                                <option value="SMS/WhatsApp">SMS/WhatsApp</option>
                                <option value="DSP">DSP</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Mobile No<span className="text-danger"> *</span></label>
                                <input required  minLength={10} maxLength={10} name='Mobile_No' className='mx-auto mx-md-1 w-100' value={form.Mobile_No} onChange={handleChange} type="text" id="mob" /> 
                            </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Description Of Services / Material <span className="text-danger"> *</span></label>
                                <textarea name='Description_Of_Services_Material' className='mx-auto mx-md-1 w-100' value={form.Description_Of_Services_Material} onChange={handleChange} type="textarea" id="lname"/> 
                            </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Email-ID<span className="text-danger"> *</span></label>
                                <input required  name='Email_ID' className='mx-auto mx-md-1 w-100' value={form.Email_ID} onChange={handleChange} type="email" id="mob" /> 
                            </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Attach Credential<span className="text-danger"> *</span></label> 
                                <input value={form.Attach_Credential} onChange={handleChange} className='mx-auto mx-md-1 w-100' id='file' name='Attach_Credential'  type="file" placeholder=""/> 
                            </div>
                          
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Vendor Address<span className="text-danger"> *</span></label>
                                <input required  name='Vendor_Address' className='mx-auto mx-md-1 w-100' value={form.Vendor_Address} onChange={handleChange} type="text" id="mob" /> 
                            </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> 
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Major Client List <span className="text-danger"> *</span></label>
                                <textarea name='Major_Client_List' className='mx-auto mx-md-1 w-100' value={form.Major_Client_List} onChange={handleChange} type="textarea" id="lname"/> 
                            </div>
                          
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Type<span className="text-danger"> *</span></label>
                                <select onChange={handleChange} value={form.Type} name='Type' className='form-control mx-auto mx-md-1 w-25'><option value="">---</option>
                                <option value="Domestic">Domestic</option>
                                <option value="Imported">Imported</option>
                                <option value="Both">Both</option>
                                </select>
                            </div>
                          
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex">
                                <label className="form-control-label mx-auto mx-md-1 py-2 text-start">Deals In<span className="text-danger"> *</span></label>
                                <select value={form.Deals_In} onChange={handleChange} name='Deals_In' className='form-control mx-auto mx-md-1 w-25' >
                                <option value="">---</option>
                                <option value="Material">Material</option>
                                <option value="Services">Services</option>
                                </select>
                            </div>
                          
                        </div>
                        <div className="row justify-content-end">
                            <div className="justify-content-end d-flex form-group col-sm-6"> 
                            <button type="submit" style={{backgroundColor:"#FC01AC",color:"white"}} className="btn-block btn-primary">Send</button> 
                        </div>
                        </div>
                    </form>
        </div>
    </div>
    </div>
  )
}
