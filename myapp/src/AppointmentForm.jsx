
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Appointment.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import userappointment from './userappointment.png';

const AppointmentForm = () => {
  const generateRequestId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const [formData, setFormData] = useState({
    userid: '',
    pastorname: '',
    name: '',
    phone: '',
    email: '',
    date: '',
    place: '',
    time: '',
    type: '',
    description: '',
    requestid: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestId = generateRequestId();

      if (!formData.email.endsWith('@gmail.com')) {
        alert('Email should end with "@gmail.com"');
        return;
      }

      const onlyLetters = /^[a-zA-Z]+$/;
      if (!onlyLetters.test(formData.name)) {
        alert('Username should contain only letters');
        return;
      }

      const onlyNumbers = /^[0-9]+$/;
      if (!onlyNumbers.test(formData.phone)) {
        alert('Phone number should contain only numbers');
        return;
      }

      const formDataWithRequestId = { ...formData, requestid: requestId };

      const response = await axios.post('http://localhost:8080/api/add', formDataWithRequestId);
      console.log('Appointment submitted successfully:', response.data);
      setFormData({
        userid: '',
        pastorname: '',
        name: '',
        phone: '',
        email: '',
        date: '',
        place: '',
        time: '',
        type: '',
        description: '',
        requestid: '',
      }); 
      alert('Appointment submitted successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Appointment submission failed:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone' && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="background-container1" style={{ minHeight: '104vh' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="Appointment-container" style={{ width: '600px' }}>
          <div className="card" style={{ borderRadius: '10px', marginTop: '30px' }}>
            <div className="card-body">
              <h1 className="Appointment-title" style={{ textAlign: 'center', fontSize: '35px', marginBottom: '30px' }}>
                User Appointment
              </h1>
              <form className="Appointment-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="User ID" style={{ fontSize: '18px'}}>User ID</label>
                      <input type="text" id="Userid" name="userid" placeholder="userid" value={formData.userid} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Pastorname" style={{ fontSize: '18px' }}>Pastor Name</label>
                      <input type="text" id="Pastorname" name="pastorname" placeholder="Pastor Name" value={formData.pastorname} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Phone" style={{ fontSize: '18px' }}>Phone</label>
                      <input type="text" id="Phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Time" style={{ fontSize: '18px' }}>Time</label>
                      <input type="time" id="Time" name="time" value={formData.time} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Type" style={{ fontSize: '18px' }}>Type</label>
                      <input type="text" id="Type" name="type" placeholder="Type of appointment" value={formData.type} onChange={handleInputChange} className="form-control" required />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="Name" style={{ fontSize: '18px' }}>Name</label>
                      <input type="text" id="Name" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Email" style={{ fontSize: '18px' }}>Email</label>
                      <input type="email" id="Email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="form-control" required />
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="Date" style={{ fontSize: '18px' }}>Date</label>
                          <input type="date" id="Date" name="date" value={formData.date} onChange={handleInputChange} className="form-control" required />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="Place" style={{ fontSize: '18px'}}>Place</label>
                          <input type="text" id="Place" name="place" placeholder="Place" value={formData.place} onChange={handleInputChange} className="form-control" required />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="Description" style={{ fontSize: '18px' }}>Description</label>
                  <textarea id="Description" name="description" value={formData.description} onChange={handleInputChange} className="form-control" required></textarea>
                </div>
                  <div style={{display:"flex",justifyContent:"center"}}>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <Link to="/request" className="btn btn-danger" style={{marginLeft:"70px"}}>Sended request</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img src={userappointment} alt="userappointment" style={{ width: '70%', borderRadius: '10px', marginLeft: '100px' }} />
      </div>
    </div>
  );
};

export default AppointmentForm;
