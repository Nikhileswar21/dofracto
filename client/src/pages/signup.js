import React, { useState } from 'react';
import './signup.css';
import { FaUser, FaPhone, FaEnvelope, FaBriefcase, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    occupation: '',
    password: '',
    confirmPassword: '',
    agreed: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <div className="left-panel-image" />

      <div className="right-panel">
        <div className="form-container">
          <h2 className="welcome-title">Sign Up into Dofracto</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-row">
              <div className="input-container">
                <FaUser className="input-icon" />
                <input type="text" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleChange} className="form-input" required />
              </div>
              <div className="input-container">
                <FaPhone className="input-icon" />
                <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="form-input" required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-container">
                <FaEnvelope className="input-icon" />
                <input type="email" name="email" placeholder="Email - Id" value={formData.email} onChange={handleChange} className="form-input" required />
              </div>
              <div className="input-container">
                <FaBriefcase className="input-icon" />
                <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} className="form-input" required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-container">
                <FaLock className="input-icon" />
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="form-input" required />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
              <div className="input-container">
                <FaLock className="input-icon" />
                <input type={showConfirm ? 'text' : 'password'} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="form-input" required />
                <button type="button" className="password-toggle" onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>

            <div className="checkbox-container">
              <input type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange} />
              <label>I agree to the Terms & Conditions and Privacy Policy.</label>
            </div>

            <button type="submit" className="signup-button">Create Account</button>
          </form>

          <div className="signup-footer">
            Already have an account? <Link to="/" className="signup-anchor">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;