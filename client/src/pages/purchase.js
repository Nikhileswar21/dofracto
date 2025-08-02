import React, { useState } from "react";
import "./Purchase.css"; // Import the external CSS

const businesses = [
  { name: "Business A", value: "businessA" },
  { name: "Business B", value: "businessB" },
  { name: "Business C", value: "businessC" },
];

export default function Purchase() {
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [fractions, setFractions] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="purchase-bg">
      <div className="purchase-header">
        <button className="back-btn" aria-label="Back">&#8592;</button>
        <h1 className="purchase-title">Purchase</h1>
      </div>

      <div className="purchase-form">
        <div className="input-group">
          <label className="input-label">Business Name</label>
          <select
            className="input-select"
            value={selectedBusiness}
            onChange={(e) => setSelectedBusiness(e.target.value)}
          >
            <option value="">Select business</option>
            {businesses.map((b) => (
              <option key={b.value} value={b.value}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label className="input-label">Number of Fractions</label>
          <input
            className="input-select"
            type="number"
            placeholder="Enter a number of fraction"
            value={fractions}
            min="1"
            onChange={(e) => setFractions(e.target.value)}
          />
        </div>
      </div>

      <div className="message-section">
        <textarea
          className="message-box"
          placeholder="Send Us a Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}