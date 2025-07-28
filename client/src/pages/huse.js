import React, { useState, useEffect } from "react";
import { FaHandshake, FaCompactDisc, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SiSentry, SiOpenai } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";

import "./huse.css"; // Import your CSS file

const Huse = () => {
  const [showSecond, setShowSecond] = useState(false);

  // Automatic transition between card groups every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecond((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="huse-container">
      {/* Hero Section */}
      <section className="huse-section">
        <h1 className="huse-hero-title">
          Welcome to HUSE Circle –<br /> A hub for future entrepreneurs.
        </h1>
        <p className="huse-hero-sub">
          Learn, invest, and grow with real businesses.
        </p>
        <button className="firsthuse-btn">Join HUSE Circle</button>
      </section>

      {/* Section 2 - Intro Text & Features */}
      <section className="huse-section-light">
        <p>
          If your dream is to be an entrepreneur, HUSE Circle is your launchpad.
          We’re not just a community – we’re a business playground, where ideas
          turn into reality, and learning meets real-world action.
        </p>

        {/* Automatic Slide-Up Transition Section */}
        <section className="transition-section">
          {/* First Card Group */}
          <div className={`slide-section ${showSecond ? "hide" : "show"}`}>
            <div className="cards-row">
              <div className="card">
                <div className="card-icon">👥</div>
                <div className="card-title">Community Vibes</div>
                <div className="card-desc">
                  Connect, collaborate, and grow with like-minded hustlers through a vibrant community of driven entrepreneurs.
                </div>
              </div>
              <div className="card">
                <div className="card-icon">💰</div>
                <div className="card-title">Passive Income</div>
                <div className="card-desc">
                  Benefit from regular returns through fractional business ownership while building wealth and diversifying your investment portfolio.
                </div>
              </div>
            </div>
          </div>

          {/* Second Card Group */}
          <div className={`slide-section ${showSecond ? "show" : "hide"}`}>
            <div className="cards-row">
              <div className="card">
                <div className="card-icon">📹</div>
                <div className="card-title">Live &amp; Recorded Sessions</div>
                <div className="card-desc">
                  Gain business hacks and expert insights through live and recorded sessions to continuously learn, improve, and grow your entrepreneurial skills effectively.
                </div>
              </div>
              <div className="card">
                <div className="card-icon">📊</div>
                <div className="card-title">Real Time Analytics</div>
                <div className="card-desc">
                  Track your business performance with real-time analytics for smarter decisions and continuous growth insights instantly.
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Section 3 - Why HUSE */}
      <section className="huse-section-dark">
        <h3>
          Why HUSE Circle? – Because Your <br /> Hustle Deserves More
        </h3>
        <h2>
          Tired of just watching motivational videos? Let’s actually DO business. <br />
          <br />
          HUSE Circle is where theory meets action, and your entrepreneurial dreams take shape.
        </h2>
      </section>

      {/* Section 4 - What makes us different */}
      <section className="huse-section-dark">
        <div className="huse-diff-title">What makes us different</div>
        <div className="huse-divider"></div>
        <div className="huse-diff-cards-scroll">
          <div className="huse-diff-card">
            <FaHandshake className="huse-diff-icon" />
            <h3>Real Business Exposure</h3>
            <p>Work with live businesses, not just simulation</p>
          </div>
          <div className="huse-diff-card">
            <SiSentry className="huse-diff-icon" />
            <h3>Affordable Entry</h3>
            <p>Start small, grow big — invest in fractional business ownership</p>
          </div>
          <div className="huse-diff-card">
            <FaCompactDisc className="huse-diff-icon" />
            <h3>Support System</h3>
            <p>We've got your back with mentors, resources, and expert guidance</p>
          </div>
          <div className="huse-diff-card">
            <SiOpenai className="huse-diff-icon" />
            <h3>Learn Anytime Anywhere</h3>
            <p>Flexible sessions that fit your schedule</p>
          </div>
          <div className="huse-diff-card">
            <GiReceiveMoney className="huse-diff-icon" />
            <h3>Earn While You Learn</h3>
            <p>Get returns while you build your future</p>
          </div>
        </div>
      </section>

      {/* Section 5 - Final CTA */}
      <section className="huse-section-final">
        <h2>Join HUSE Circle and turn your passion into profit!</h2>
        <p>
          Whether you’re looking to learn, invest, or network, HUSE Circle is
          your go-to community to level up your entrepreneurial game.
          <br />
          <br />
          <br />
        </p>
        <button className="huse-btn">Join HUSE Circle</button>
      </section>

      {/* Section 6 - Testimonials */}
      <section className="huse-testimonials-section">
        <div className="huse-testimonials-title">
          Still thinking? Check out what our community{" "}
          <FaArrowLeft color="#222" className="arrow-left-btn" />
          <FaArrowRight color="#222" className="arrow-right-btn" />
          has to say and take the leap
        </div>
        <div className="huse-testimonials">
          <div className="huse-testimonial-card">
            <div className="huse-testimonial-text">
              HUSE Circle transformed my entrepreneurial dreams into reality.
              The mentorship and real business exposure were invaluable
            </div>
            <div className="huse-stars">★★★★★</div>
            <div className="huse-testimonial-user">
              <div
                className="huse-testimonial-avatar"
                style={{
                  background:
                    '#222 url("https://randomuser.me/api/portraits/women/1.jpg") center/cover',
                }}
              ></div>
              <span className="huse-testimonial-name">Jane Smith</span>
              <span className="huse-testimonial-role">Software Engineer</span>
            </div>
          </div>
          <div className="huse-testimonial-card">
            <div className="huse-testimonial-text">
              I never thought I could invest in businesses at such an affordable
              level. HUSE Circle made it possible
            </div>
            <div className="huse-stars">★★★★★</div>
            <div className="huse-testimonial-user">
              <div
                className="huse-testimonial-avatar"
                style={{
                  background:
                    '#222 url("https://randomuser.me/api/portraits/women/2.jpg") center/cover',
                }}
              ></div>
              <span className="huse-testimonial-name">Soniya Sunil</span>
              <span className="huse-testimonial-role">Startup Founder</span>
            </div>
          </div>
          <div className="huse-testimonial-card">
            <div className="huse-testimonial-text">
              As a newbie, I felt supported every step of the way. The mentors
              truly care about your success
            </div>
            <div className="huse-stars">★★★★★</div>
            <div className="huse-testimonial-user">
              <div
                className="huse-testimonial-avatar"
                style={{
                  background:
                    '#222 url("https://randomuser.me/api/portraits/women/3.jpg") center/cover',
                }}
              ></div>
              <span className="huse-testimonial-name">Priya Mahesh</span>
              <span className="huse-testimonial-role">Entrepreneur</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Huse;
