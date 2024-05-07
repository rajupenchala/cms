import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Appointmentlist() {
  const [data, setData] = useState([]);
  const [reasonInput, setReasonInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData(); // Fetch initial data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/getall');
      setData(response.data); // Assuming the response data is an array of appointments
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleApprove = async (requestid) => {
    try {
      const updatedData = data.map((item) =>
        item.requestid === requestid ? { ...item, status: 'Approved', reason: reasonInput } : item
      );

      await updateStatus(requestid, 'Approved', updatedData);
    } catch (error) {
      console.error('Error approving request:', error);
    }
  };

  const handleDeny = async (requestid) => {
    try {
      const updatedData = data.map((item) =>
        item.requestid === requestid ? { ...item, status: 'Denied', reason: reasonInput } : item
      );

      await updateStatus(requestid, 'Denied', updatedData);
    } catch (error) {
      console.error('Error denying request:', error);
    }
  };

  const updateStatus = async (requestid, status, updatedData) => {
    try {
      await axios.put(`http://localhost:8080/api/update/${requestid}`, { status, reason: reasonInput });

      setData(updatedData); // Update state with the updated data
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filteredData = data.filter((item) => {
    // Filter based on searchQuery
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div style={{ marginBottom: '200px' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Manager Request</h1>
      <div style={{ marginBottom: '50px' }}>
        <input
          type="text"
          placeholder="Search by Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <table className='table' style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableCellStyle}>User ID</th>
            <th style={tableCellStyle}>Request ID</th>
            <th style={tableCellStyle}>Pastorname</th>
            <th style={tableCellStyle}>Name</th>
            <th style={tableCellStyle}>Phone</th>
            <th style={tableCellStyle}>Email</th>
            <th style={tableCellStyle}>Date</th>
            <th style={tableCellStyle}>Place</th>
            <th style={tableCellStyle}>Time</th>
            <th style={tableCellStyle}>Type</th>
            <th style={tableCellStyle}>Description</th>
            <th style={tableCellStyle}>Status</th>
            <th style={tableCellStyle}>Reason</th>
            <th style={tableCellStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((request) => (
            <tr key={request.requestid}>
              <td style={tableCellStyle}>{request.userid}</td>
              <td style={tableCellStyle}>{request.requestid}</td>
              <td style={tableCellStyle}>{request.pastorname}</td>
              <td style={tableCellStyle}>{request.name}</td>
              <td style={tableCellStyle}>{request.phone}</td>
              <td style={tableCellStyle}>{request.email}</td>
              <td style={tableCellStyle}>{request.date}</td>
              <td style={tableCellStyle}>{request.place}</td>
              <td style={tableCellStyle}>{request.time}</td>
              <td style={tableCellStyle}>{request.type}</td>
              <td style={tableCellStyle}>{request.description}</td>
              <td style={tableCellStyle}>{request.status}</td>
              <td style={tableCellStyle}>{request.reason}</td>
              <td>
                <button type="button" className="btn btn-success" onClick={() => handleApprove(request.requestid)}>Approve</button>
                <button type="button" className="btn btn-danger" onClick={() => handleDeny(request.requestid)}>Deny</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <label htmlFor="reasonInput">Reason: </label>
        <input
          type="text"
          id="reasonInput"
          value={reasonInput}
          onChange={(e) => setReasonInput(e.target.value)}
        />
      </div>
    </div>
  );
}

const tableCellStyle = {
  border: '1px solid black',
  padding: '10px'
};

export default Appointmentlist;
