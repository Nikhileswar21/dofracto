import React, { useEffect, useState } from "react";
import BadgeIcon from "./BadgeIcon";
import "./features.css";

export default function FeaturesPage1() {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowCards(true);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="features-wrapper">
      <h2 className="features-heading">Our Features</h2>
      <p className="features-text">
        At Dofracto, you can explore and invest in businesses across various
        industries, tailored to your interests. Track your investment performance
        with real-time insights, all while connecting with a community of entrepreneurs
        and investors.
      </p>

      {showCards && (
        <div className="features-grid">
          {[1, 2].map((num) => (
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
      )}
    </div>
  );
}
