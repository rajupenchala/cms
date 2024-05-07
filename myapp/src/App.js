import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contactus from "./Contactus";
import AppointmentForm from "./AppointmentForm";
import LoginForm from "./Loginform";
import ForgotPasswordPage from './ForgotPasswordPage';
import Appointmentlist from "./Appointmentlist";
// import Home from "./Home";
import Contactuslist from "./Contactuslist";
import Dashboard from './Dashboard';
import Sendedrequest from './Sendedrequest';



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/contact" element={<Contactus/>}/>
        <Route path="/appointment" element={<AppointmentForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="listuser" element={<Appointmentlist/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/contactlist" element={<Contactuslist/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/request" element={<Sendedrequest/>}/>
      </Routes>  
    </Router>
  );
}

export default App;
