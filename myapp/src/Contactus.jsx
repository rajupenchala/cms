import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import contactus from './contactus.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation checks
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Additional validation for firstname and lastname (only letters)
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(formData.firstname) || !nameRegex.test(formData.lastname)) {
      alert('Please enter valid firstname and lastname (only letters).');
      return;
    }

    // Validation for email field
    if (!formData.email.endsWith('@gmail.com')) {
      alert('Email should end with "@gmail.com"');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8085/api/poststudentcontact', formData);
      console.log('Registration successful:', response.data);
      // Show pop-up message
      alert('Your contact details have been successfully submitted!');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='background-container' style={{ display: 'flex', justifyContent: 'center' }}>
      
      <div style={{ display: 'flex', alignItems: 'center',marginBottom:"20px" }}>
           
        <div className="contact-container" style={{width:"380px" }}>
        
          <div className="card">
            <div className="card-body" style={{  borderRadius: "10px" }}>
           
            <h1 className="contact-title" style={{marginLeft:"50px"}} >CONTACT US</h1>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                 
                    <label htmlFor="firstname" style={{fontSize:"20px"}}>Firstname</label>
                
                  <input type="text" className="form-control" id="firstname" name="firstname" placeholder='Firstname' value={formData.firstname} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                 
                    <label htmlFor="lastname" style={{fontSize:"20px"}}>Lastname</label>
                  
                  <input type="text" className="form-control" id="lastname" name="lastname" placeholder='Lastname' value={formData.lastname} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                 
                    <label htmlFor="email" style={{fontSize:"20px"}}>Email</label>
                  
                  <input type="email" className="form-control" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                 
                    <label htmlFor="subject" style={{fontSize:"20px"}}>Subject</label>
                  
                  <input type="text" className="form-control" id="subject" name="subject" placeholder='Subject' value={formData.subject} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                 
                    <label htmlFor="message" >Message</label>
                
                  <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img src={contactus} alt="contactus" style={{ width: '450px', height: 'auto',marginLeft:"100px" }} />
      </div>
    </div>
  );
};

export default Contact;
