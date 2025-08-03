import React from "react";
import "./intro.css";
import logo from "../assets/logo2.png"; // Adjust path to your logo file

export default function Intro() {
  return (
    <div className="intro-container">
      <img src={logo} alt="DoFracto Logo" className="intro-logo" />
      <p className="intro-text">Start your Journey with</p>
      <h1 className="intro-title">DoFracto</h1>
    </div>
  );
}
