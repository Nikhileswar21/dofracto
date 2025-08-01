import React, { useEffect, useState } from "react";
import "./features.css";

const features = [
  {
    id: 1,
    title: "Fractional Ownership",
    description:
      "Invest in top-performing businesses with minimal capital. Own fractional shares across F&B, tech, retail, and more. Diversify your portfolio and earn returns without bearing the full financial responsibility of ownership.",
  },
  {
    id: 2,
    title: "No Operational Hassles",
    description:
      "Enjoy business ownership benefits without daily management hassles. Our expert team handles marketing, logistics, and operations—letting you relax and focus solely on earning consistent returns from your diversified business investments.",
  },
  {
    id: 3,
    title: "Real-Time Performance Dashboard",
    description:
      "Stay informed with real-time investment reports. Monitor revenue, profits, and business performance anytime through your personalized dashboard, ensuring complete transparency and control over your portfolio.",
  },
  {
    id: 4,
    title: "Diversified Investment Options",
    description:
      "Choose from diverse industries and businesses. Whether it's food, fashion, or tech, fractional ownership offers accessible investment opportunities tailored to your interests and financial goals.",
  },
];

const NumberBadge = ({ number }) => (
  <div className="circular-badge">
    <span>{number}</span>
  </div>
);

export default function FeaturesPage1() {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStage((prevStage) => (prevStage + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="features-wrapper">
      <div className="features-header">
        <h2 className="features-heading">Our Features</h2>
        <p className="features-text">
          At Dofracto, you can explore and invest in businesses across various industries, tailored to your interests. Track your investment performance with real-time insights, all while connecting with a community of entrepreneurs and investors. Our platform simplifies fractional ownership with easy onboarding, flexible options, and clear, concise data.
        </p>
      </div>

      <div className="features-container">
        {features.map((feature, index) => {
          const isActive = currentStage === index;
          const isVisible = isActive;
          const badgeSide = feature.id % 2 === 0 ? "badge-right" : "badge-left";

          return (
            <div
              key={feature.id}
              className={`feature-card ${isVisible ? "visible active" : "hidden"}`}
            >
              <div className="angled-box">
                <div className={`badge-wrapper ${badgeSide}`}>
                  <NumberBadge number={feature.id} />
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
