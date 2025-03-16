import React from 'react';

// Define fixed positions for each star (reduced to 15 stars for better performance)
const stars = [
  { top: '10%', left: '5%' },
  { top: '15%', left: '20%' },
  { top: '20%', left: '5%' },
  { top: '25%', left: '50%' },
  { top: '30%', left: '65%' },
  { top: '35%', left: '80%' },
  { top: '40%', left: '95%' },
  { top: '45%', left: '80%' },
  { top: '50%', left: '25%' },
  { top: '55%', left: '0%' },
  { top: '60%', left: '15%' },
  { top: '65%', left: '70%' },
  { top: '70%', left: '100%' },
  { top: '75%', left: '5%' },
  { top: '80%', left: '15%' },
];

const ShootingStars = () => {
  return (
    <div className="night">
      {stars.map((star, i) => {
        // Generate a random delay for each star
        const delay = `${Math.random() * 3000}ms`; // Random delay between 0ms and 3000ms

        return (
          <div
            key={i}
            className="shooting_star animate-fadeIn"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: delay, // Apply random delay
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default ShootingStars;