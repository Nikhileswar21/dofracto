import React from 'react';
import './control.css';

function Control() {
  return (
    <div className="dashboard">
      <div className="nav">
        <div className="nav-line-one">
          <button className="nav-btn">Portfolio</button>
          <button className="nav-btn active">Control Center</button>
        </div> 

        <div className="nav-line-two">
          <span className="nav-label">Individual Monitoring</span>
          <div className="monitoring-buttons">
            <button className="nav-btn small">Today</button>
            <button className="nav-btn small">Last 7 Days</button>
            <button className="nav-btn small">Last 30 Days</button>
            <button className="nav-btn small">Last Year</button>
          </div>
          <button className="dropdown-btn">Mr. Kadalai ▾</button>
        </div>
      </div>

      <div className="stats-row">
        <div className="card">
          <h4>Total Sales</h4>
          <p>₹25000</p>
          <span className="green">+11.01%</span>
        </div>
        <div className="card">
          <h4>Order Processed</h4>
          <p>₹300</p>
          <span className="green">+7.01%</span>
        </div>
        <div className="card expenses">
          <h4>Total Expenses</h4>
          <p>₹17000</p>
          <span className="red">-5.01%</span>
        </div>
      </div>

      <div className="content">
        <div className="tracker">
          <h4>Items Tracker</h4>
          <p>Chart here</p>
        </div>

        <div className="realtime-box">
          <h4>Real Time Monitoring</h4>
          <input type="text" placeholder="User ID" className="realtime-input" />
          <input type="password" placeholder="Password" className="realtime-input" />
          <div className="steps">
            <h5>Instructions & Quick Access Actions</h5>
            <ol>
              <li>Download and open the external camera app.</li>
              <li>Enter the User ID and Password above.</li>
              <li>Click "Login" to access your live store footage.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Control;
