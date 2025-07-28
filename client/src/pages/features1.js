import React from "react";
import BadgeIcon from "./BadgeIcon";
import "./features.css";

export default function FeaturesPage2() {
  return (
    <div className="features-wrapper">
      <h2 className="features-heading">More Features</h2>
      <p className="features-text">
        Our platform simplifies fractional ownership with easy onboarding,
        flexible options, and clear, concise data. Get the most out of your
        investments effortlessly.
      </p>

      <div className="features-grid">
        {[3, 4].map((num) => (
          <div
            key={num}
            className={`feature-card feature-${num} ${
              num % 2 === 0 ? "from-right" : "from-left"
            }`}
          >
            <BadgeIcon number={num} />
            <div className="feature-content">
              <h3>Feature Title {num}</h3>
              <p>Some cool detail about Feature {num} here...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}