import React, { useEffect, useRef } from 'react';

const App = () => {
  const circleRef = useRef(null);

  const items = [
    'Home', 'Explore', 'About', 'Contact',
    'Help', 'Services', 'Blog', 'Login'
  ];

  useEffect(() => {
    const circle = circleRef.current;
    const radius = circle.offsetWidth / 2;
    const centerX = radius;
    const centerY = radius;
    const angleStep = 360 / items.length;

    const nodes = circle.querySelectorAll('.nav-item');

    nodes.forEach((node, i) => {
      const angle = angleStep * i - 90; // Start from top
      const rad = angle * (Math.PI / 180);
      const x = centerX + radius * 0.85 * Math.cos(rad);
      const y = centerY + radius * 0.85 * Math.sin(rad);

      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
    });
  }, []);

  return (
    <div
      ref={circleRef}
      style={{
        position: 'relative',
        width: '80vmin',
        height: '80vmin',
        margin: 'auto',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #1a1a1c, #0f0f10)',
        boxShadow: '0 0 40px rgba(255, 255, 255, 0.05)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Segoe UI, sans-serif',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      }}>
        CENTER
      </div>

      {items.map((label, i) => (
        <div
          key={i}
          className="nav-item"
          onClick={() => alert(`You clicked ${label}`)}
          style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            color: '#ccc',
            cursor: 'pointer',
            transition: 'color 0.3s, transform 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.transform = 'scale(1.1) translate(-50%, -50%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#ccc';
            e.currentTarget.style.transform = 'translate(-50%, -50%)';
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default App;
