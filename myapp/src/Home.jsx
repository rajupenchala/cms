import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'grey'}}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appointment">AppointmentForm</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Loginform</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listuser">Appointmentlist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contactus</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
