import React from "react";
import "./features.css";

export default function BadgeIcon({ number }) {
  return (
    <div className="badge-wrapper">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="badge-svg"
      >
        <path
          d="M50 0 A50 50 0 1 1 10 25"
          stroke="#05997F"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
          transform="rotate(-30 50 50)"
        />
      </svg>
      <span className="badge-number">{number}</span>
    </div>
  );
}