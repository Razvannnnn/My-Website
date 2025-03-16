import React, { useRef, useEffect } from 'react';

const technologies = [
  { name: 'React', x: '10%', y: '10%' },
  { name: 'Tailwind CSS', x: '40%', y: '0%' },
  { name: 'JavaScript', x: '60%', y: '80%' },
  { name: 'Python', x: '72%', y: '18%' },
  { name: 'HTML', x: '13%', y: '40%' },
  { name: 'CSS', x: '40%', y: '50%' },
  { name: 'Git', x: '60%', y: '40%' },
  { name: 'C++', x: '80%', y: '50%' },
  { name: 'C#', x: '10%', y: '70%' },
  { name: 'SQL', x: '30%', y: '88%' },
];

const Technologies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const bubbles = Array.from(containerRef.current?.children || []);
    bubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.classList.add('pop-up');
      }, index * 300);
    });
  }, []);

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

  // Function to position bubbles at fixed positions
  const positionBubbles = () => {
    const bubbles = Array.from(containerRef.current.children);
    bubbles.forEach((bubble, index) => {
      const tech = technologies[index];
      bubble.style.left = tech.x;
      bubble.style.top = tech.y;

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
              style={{ left: tech.x, top: tech.y }}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;