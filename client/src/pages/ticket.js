import React, { useState } from "react";
import "./SupportTickets.css"; // Import the CSS file

const ticketHistory = [
  { id: "#123412", type: "Sell", status: "Pending" },
  { id: "#123413", type: "Support", status: "Resolved" },
];

export default function SupportTickets() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted ticket: ${question}`);
    setQuestion("");
  };

  return (
    <div className="tickets-bg">
      <div className="tickets-header">
        <button className="back-btn" aria-label="Back">&larr;</button>
        Tickets
      </div>

      {/* Raise Support Ticket Section */}
      <div className="white-outline-box">
        <div className="raise-ticket-section">
          <h2>Raise a Support Ticket</h2>
          <p>
            Have a specific question or concern? Reach out to us directly for personalized assistance.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="support-msg" className="input-label">
              Your Question or Concern
            </label>
            <textarea
              id="support-msg"
              className="support-textarea"
              placeholder="Type your question here"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
            <button
              type="submit"
              className="submit-btn"
              disabled={!question.trim()}
            >
              Submit support Request
            </button>
          </form>
        </div>
      </div>

      {/* Ticket History Section */}
      <div className="white-outline-box">
        <div className="ticket-history-title">Support Ticket History</div>
        <table className="ticket-history-table">
          <thead>
            <tr>
              <th>Ticket Id</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ticketHistory.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.type}</td>
                <td className={ticket.status === "Resolved" ? "resolved" : "pending"}>
                  {ticket.status}
                </td>
                <td>
                  <button className="action-btn">Raise New support request</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}