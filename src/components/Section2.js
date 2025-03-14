import React from 'react';
import MyImage from '../images/IMG_1900.png';
import ShootingStars from './ShootingStars';

const Section2 = () => {
  return (
    <section id='section2' className="relative flex justify-center">
      {/* Shooting Stars */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
        <ShootingStars />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full">
        <img src={MyImage} alt='MyImage' className='min-h-64 w-full object-cover animate-fadeIn rounded-t-3xl' />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent rounded-b-3xl"></div>
      </div>
    </section>
  );
};

export default Section2;