import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contactuslist = () => {
  // State to store contact details
  const [contactDetails, setContactDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch contact details
  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8085/api/getallstudentcontacts');
        setContactDetails(response.data);
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }
    };

    fetchContactDetails();
  }, []);

  // Filter contact details based on search term
  const filteredContactDetails = contactDetails.filter(contact =>
    contact.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ marginBottom: "300px" }}>
    <h1 className="contact-title" style={{display: 'flex', justifyContent: 'center'}}>Manager view</h1>
    <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
      </div>
      <div className="table-responsive">
        <table style={{ border: "2px solid black" }} className="table table-bordered custom-border">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {filteredContactDetails.map((contact, index) => (
              <tr key={index}>
                <td>{contact.id}</td>
                <td>{contact.firstname}</td>
                <td>{contact.lastname}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contactuslist;
