import React, { useState, useEffect, useRef } from "react";
import "./otpverification.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; 

function OtpVerification() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    if (!isNaN(element.value)) {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);
      if (element.value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleResend = () => {
    setOtp(new Array(6).fill(""));
    setTimer(60);
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <img src={logo} alt="Logo" className="logo-img" />
        <h2>OTP Verification</h2>
        <p>Please enter the 6 digit OTP sent to your number</p>

        <div className="otp-inputs">
          {otp.map((value, index) => (
            <input
              key={index}
              maxLength="1"
              type="text"
              value={value}
              onChange={(e) => handleChange(e.target, index)}
              ref={(el) => (inputsRef.current[index] = el)}
            />
          ))}
        </div>

        <div className="otp-info-row">
  <span>
    Remaining Time - <span className="timer">00:{timer < 10 ? `0${timer}` : timer}S</span>
  </span>
  <span>
    <span className="white-text">Didn't receive the code? </span>
    <span className="resend-link" onClick={handleResend}>Resend</span>
  </span>
</div>


        <button className="verify-btn">Verify</button>
        <button className="cancel-btn" onClick={() => navigate("/signup")}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default OtpVerification;