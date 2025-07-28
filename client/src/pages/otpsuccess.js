import React from 'react';
import './otpsuccess.css';
import { FaCheck } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Ensure the path is correct

function Success() {
  return (
    <div className="success-container">
      <div className="success-card">
         
        <img src={logo} alt="Logo" className="success-logo" />

        
        <div className="checkmark-circle">
          <FaCheck className="check-icon" />
        </div>
 
        <p className="success-text">
          Your Account has been successfully created
        </p>
        <p className="success-subtext">
          <a href="/" className="login-link">Login</a> to access your account
        </p>
      </div>
    </div>
  );
}

export default Success;