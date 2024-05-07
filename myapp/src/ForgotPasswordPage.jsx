import React, { useState } from "react";
import './Forgotpassword.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission, validate email, send OTP, etc.
    // Assuming here that you would send the OTP to the email entered by the user
    // Once OTP sent, proceed to next step
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Handle OTP submission, validate OTP, etc.
    // If OTP is correct, allow user to reset password
    // For simplicity, let's just alert the user for now
    alert("Password reset successful!");
  };

  return (
    <div className="forgot-password-container" style={{ alignItems: "center" }}>
      {step === 1 ? (
        <form onSubmit={handleEmailSubmit} className="forgot-password-form">
          <label htmlFor="email">Enter your email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
          <button type="submit" className="form-button">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit} className="forgot-password-form">
          <label htmlFor="otp">Enter OTP sent to your email:</label>
          <input
            type="text"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="form-input"
          />
          <button type="submit" className="form-button">Submit OTP</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordPage;
