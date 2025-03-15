import React, { useRef, useEffect } from 'react';

const technologies = [
  'React',
  'Tailwind CSS',
  'JavaScript',
  'Python',
  'HTML',
  'CSS',
  'Git',
  'C++',
  'C#',
  'SQL',
];

const Technologies = () => {
  const containerRef = useRef(null);

  // Function to check if two bubbles are overlapping
  const checkCollision = (bubble1, bubble2, threshold = 10) => {
    const rect1 = bubble1.getBoundingClientRect();
    const rect2 = bubble2.getBoundingClientRect();
  
    // Add threshold to the collision detection
    return !(
      rect1.right + threshold < rect2.left - threshold ||
      rect1.left - threshold > rect2.right + threshold ||
      rect1.bottom + threshold < rect2.top - threshold ||
      rect1.top - threshold > rect2.bottom + threshold
    );
  };
  

  // Function to generate random animation values
  const generateRandomAnimation = () => {
    const translateX1 = `${Math.random() * 20 - 10}px`;
    const translateY1 = `${Math.random() * 20 - 10}px`;
    const translateX2 = `${Math.random() * 40 - 20}px`;
    const translateY2 = `${Math.random() * 40 - 20}px`;
    const translateX3 = `${Math.random() * 20 - 10}px`;
    const translateY3 = `${Math.random() * 20 - 10}px`;

    return {
      animation: `float ${Math.random() * 10 + 10}s linear infinite`,
      animationDelay: `${Math.random() * 5}s`,
      transform: `translate(${translateX1}, ${translateY1})`,
      keyframes: `
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(${translateX1}, ${translateY1});
          }
          50% {
            transform: translate(${translateX2}, ${translateY2});
          }
          75% {
            transform: translate(${translateX3}, ${translateY3});
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `,
    };
  };

  // Function to position bubbles without overlapping
  const positionBubbles = () => {
    const bubbles = Array.from(containerRef.current.children);
    bubbles.forEach((bubble, index) => {
      let collision;
      let attempts = 0;
      do {
        collision = false;
        bubble.style.left = `${Math.random() * 80}%`;
        bubble.style.top = `${Math.random() * 80}%`;

        // Check for collisions with other bubbles
        for (let i = 0; i < index; i++) {
          if (checkCollision(bubble, bubbles[i])) {
            collision = true;
            break;
          }
        }

        attempts++;
        if (attempts > 100) break; // Prevent infinite loops
      } while (collision);

      // Apply random animation
      const animation = generateRandomAnimation();
      bubble.style.animation = animation.animation;
      bubble.style.animationDelay = animation.animationDelay;

      // Inject keyframes into a style element
      const style = document.createElement('style');
      style.innerHTML = animation.keyframes;
      document.head.appendChild(style);
    });
  };

  useEffect(() => {
    positionBubbles();
  }, []);

  return (
    <section id='technologies' className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-black rounded-3xl"></div>

      {/* Floating Bubbles */}
      <div className="relative z-10 container mx-auto px-4">
        <div
          ref={containerRef}
          className="relative w-full min-h-64"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="absolute text-white text-sm sm:text-base md:text-lg bg-stone-900 rounded-full px-4 py-2 shadow-lg"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;