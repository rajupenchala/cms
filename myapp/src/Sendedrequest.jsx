import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Appointmentlist() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/getall');
      setData(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filteredData = data.filter((item) => {
  
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());  
  });

  return (
    <div style={{ marginBottom: '400px' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Sended Request</h1>
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
            <th style={tableCellStyle}>Name</th>
            <th style={tableCellStyle}>Date</th>
            <th style={tableCellStyle}>Status</th>
            <th style={tableCellStyle}>Reason</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((request) => (
            <tr key={request.requestid}>
              <td style={tableCellStyle}>{request.userid}</td>
              <td style={tableCellStyle}>{request.requestid}</td>
              <td style={tableCellStyle}>{request.name}</td>
              <td style={tableCellStyle}>{request.date}</td>
              <td style={tableCellStyle}>{request.status}</td>
              <td style={tableCellStyle}>{request.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}

const tableCellStyle = {
  border: '1px solid black',
  padding: '10px'
};

export default Appointmentlist;
