import { useEffect, useRef, useState } from "react";
import animationVideo from "../assets/animation.mp4";
import "./home.css";
import Features from "./features";

export default function Home() {
  const [fadeText, setFadeText] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [fadeMain, setFadeMain] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const textFadeTimer = setTimeout(() => {
      setFadeText(true);
    }, 1000);

    const nextSectionTimer = setTimeout(() => {
      setShowNext(true);


      setTimeout(() => {
        setFadeMain(true);
        setTimeout(() => {
          setShowFeatures(true);
        }, 800);
      }, 2500);
    }, 2000);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }

    return () => {
      clearTimeout(textFadeTimer);
      clearTimeout(nextSectionTimer);
    };
  }, []);

  return (
    <div className="home-container">
      <video
        ref={videoRef}
        className={`bg-video ${fadeText ? "fade-out-video" : "fade-in-video"}`}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        src={animationVideo}
      />

      {!showNext ? (
        <div className="intro-section">
          <h1 className={`dofracto-text ${fadeText ? "fade-out" : "fade-in"}`}>
            DOFRACTO
          </h1>
        </div>
      ) : (
        <div className={`main-section ${fadeMain ? "fade-out-main" : ""}`}>
          <h1 className="main-title">DOFRACTO</h1>
          <button className="start-btn">Starts At ₹30,000*</button>
          <p>Own a Piece, No matter the Price</p>
        </div>
      )}

      {showFeatures && (
        <div className="features-overlay">
          <Features />
        </div>
      )}
    </div>
  );
}
