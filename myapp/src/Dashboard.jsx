import React from "react";
import "./Dashboard.css"; // Make sure to import your CSS file
// import membership from './membership.gif';
import event from './event.gif';
import attendence from './attendence.gif';
import media from './media.gif';
import onlinemeet from './onlinemeet.gif';
import appointment from'./appointment.gif';
import service from './service.gif';
import notifications from './notifications.gif';
import donations from './donations.gif';
import signout from './signout.gif';
import history from './history.gif';
 

const App = () => {
  return (
    <>
      <div className="container" id="container">
        <div className="brand">
          <div className="logo">
           
          </div>
          <h3>Rise Up Church</h3>
          <a href="#" id="toggle">
           
          </a>
        </div>
        <div className="search">
         
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="navbar">
          <ul>
            {/* <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                      {<img src={membership} alt="membership.gif" style={{ width: '30%', height: 'auto', marginRight: '10px', borderRadius: "100%" }} />}

                <span className="notification-icon"> Membership</span></div>
              </a>
            </li> */}
            <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                      {<img src={event} alt="event.gif" style={{ width: '30%', height: 'auto', marginRight: '10px', borderRadius: "100%" }} />}
               
                <span>Events</span></div>
              </a>
            </li>
            <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                      {<img src={attendence} alt="attendence.gif" style={{ width: '30%', height: 'auto', marginRight: '10px', borderRadius: "100%" }} />}
                
                <span>Attendance</span></div>
              </a>
            </li>
            <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                      {<img src={media} alt="media.gif" style={{ width: '30%', height: 'auto', marginRight: '10px', borderRadius: "100%" }} />}
                
                <span>Media</span></div>
              </a>
            </li>
            <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                      {<img src={onlinemeet} alt="onlinemeet.gif" style={{ width: '30%', height: 'auto', marginRight: '10px', borderRadius: "100%" }} />}
               
                <span>Online Meets</span></div>
              </a>
            </li>
            <li>
              <a href="appointment">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                      {<img src={appointment} alt="appointment.gif" style={{ width: '30%', height: 'auto', marginRight: '10px', borderRadius: "100%" }} />}
               
                <span>Counsling</span></div>
              </a>
            </li>
            <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                      {<img src={service} alt="service.gif" style={{ width: '30%', height: 'auto', marginRight: '10px', borderRadius: "100%" }} />}
               
                <span>services</span></div>
              </a>
            </li>
            <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}> 
                      {<img src={notifications} alt="notifications.gif" style={{ width: '30%', height: 'auto', marginRight: '10px', borderRadius: "100%" }} />}
                
                <span>Notifications</span></div>
              </a>
            </li>
            <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                      {<img src={donations} alt="donations.gif" style={{ width: '30%', height: 'auto', marginRight: '10px', borderRadius: "100%" }} />}
               
                <span>Donatations</span></div>
              </a>
            </li>
            <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                      {<img src={history} alt="history.gif" style={{ width: '30%', height: 'auto', marginRight: '10px', borderRadius: "100%" }} />}
               
                <span>History</span></div>
              </a>
            </li>
            <li>
              <a href="#">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                      {<img src={signout} alt="signout.gif" style={{ width: '30%', height: 'auto', marginRight: '10px', borderRadius: "100%" }} />}
              
                <span>SIGNOUT</span></div>
              </a>
            </li>
          </ul>
        </div>

        <a href="#">
         
        </a>
      </div>
    </>
  );
};

export default App;
