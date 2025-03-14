import React from 'react';

const ShootingStars = () => {
  // Generate random positions, sizes, delays, and directions for each star
  const generateRandomStyle = () => {
    const top = `${Math.random() * 150}%`; // Random top position
    const left = `${Math.random() * 50}%`; // Random left position
    const delay = `${Math.random() * 3000}ms`; // Random animation delay
    const size = `${Math.random() * 2 + 1}px`; // Random size (1px to 3px)
    const angle = Math.random() * 360; // Random direction (0deg to 360deg)

    return {
      top,
      left,
      animationDelay: delay,
      height: size,
      width: size,
      transform: `rotate(${angle}deg)`, // Random direction
    };
  };

  return (
    <div className="night animate-fadeInStars">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="shooting_star"
          style={generateRandomStyle()} // Apply random styles
        ></div>
      ))}
    </div>
  );
};

export default ShootingStars;