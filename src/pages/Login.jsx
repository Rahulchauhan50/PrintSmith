import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/admin.css'

export default function Login({settingAccess}) {

     
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const signin = (event) => {
    event.preventDefault();
    // Replace this URL with your actual API endpoint to post job data
    const Url = 'https://printsmith.onrender.com/auth';
    
    fetch(Url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log( data?.success);
        if(data?.success){
          settingAccess(true)
          navigate('/admin')
        }
        setFormData({
          username: '',
          password: '',
          })
        // Add any further actions after successful posting
      })
      .catch(error => {
        console.error('Error posting job:', error);
        alert("An arror occured")
      });
  }


  return (
    <div className='bgdiv'>
    <div className='paren'>
          <div className='paren2'>
              <p className='centerdiv'>Admin Panel</p>
              <form onSubmit={signin} className='flexdiv'>
                  <input required name='username'  value={formData.username} onChange={handleInputChange}  className='inputtag' type='text' placeholder='USERNAME ID' />
                  <input required name='password' value={formData.password} onChange={handleInputChange} className='inputtag' type='password' placeholder='Password' />
                  <button onClick={signin} type="submit" className="signinbtn">
                      <span className='mx-2' >Login</span>
                  </button>
              </form>
          </div>
      </div>
  </div>
  )
}
