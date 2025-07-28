import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './login.css';

// ✅ Icons
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      {/* ✅ Left Panel with Full Image */}
      <div className="left-panel-image" />
      
      {/* ✅ Right Panel */}
      <div className="right-panel">
        <div className="form-container">
          <div className="welcome-text">
            <h2 className="welcome-title">Welcome to Dofracto</h2>
          </div>
          <form onSubmit={handleLogin} className="login-form">
            {/* Email */}
            <div className="input-group">
              <div className="input-container">
                <div className="input-icon">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <div className="input-container">
                <div className="input-icon">
                  <FaLock />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
            </div>

            {/* Login */}
            <button type="submit" className="login-button">Login</button>
          </form>

          {/* Signup */}
          <div className="signup-link">
            <p className="signup-text">
              Don’t have an account? <Link to="/signup" className="signup-anchor">Signup Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;