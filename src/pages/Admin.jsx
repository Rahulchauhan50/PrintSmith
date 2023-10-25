import React, { useEffect, useState } from 'react';
import '../styles/main.css';
import { useNavigate } from 'react-router-dom'
import '../styles/admin.css'

export default function Admin({access}) {

    const [formData, setFormData] = useState({
        position: '',
        location: '',
        experience: '',
        salary: '',
        job_description: '',
      });
      const navigate = useNavigate();
    
      useEffect(()=>{
        if(access===false){
          navigate('/login')
        }
      })
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Replace this URL with your actual API endpoint to post job data
        const Url = 'https://printsmith.onrender.com/data/add-job';
        
        fetch(Url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Job posted successfully:', data);
            alert("Job posted successfully")
            setFormData({
                position: '',
                location: '',
                experience: '',
                salary: '',
                job_description: '',
              })
            // Add any further actions after successful posting
          })
          .catch(error => {
            console.error('Error posting job:', error);
            alert("An arror occured")
          });
      };
    

  return (
    <div className='bgdiv'>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Post Job</h3>
                <p>Fill in the data below.</p>
                <form className="requires-validation" noValidate onSubmit={handleSubmit}>
                  <div className="fullw">
                    <input
                      className="inputtag"
                      type="text"
                      name="position"
                      placeholder="Position"
                      required
                      value={formData.position}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="fullw">
                    <input
                      className="inputtag"
                      type="text"
                      name="location"
                      placeholder="Location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="fullw">
                    <input
                      className="inputtag"
                      type="number"
                      name="experience"
                      placeholder="Experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="fullw">
                    <input
                      className="inputtag"
                      type="number"
                      name="salary"
                      placeholder="Salary"
                      required
                      value={formData.salary}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="fullw">
                    <textarea
                      rows="5"
                      placeholder="Job Description"
                      name="job_description"
                      required
                      value={formData.job_description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="form-button mt-3">
                    <button className="btnpost" id="submit" type="submit">
                      Post this Job
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
