import React from 'react';
import MyImage from '../images/IMG_1900.png';

const Section2 = () => {
  return (
    <section className="relative max-h-64 flex justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <img src={MyImage} alt='MyImage' className='h-64 animate-fadeIn'></img>
      </div> 
    </section>
  );
};

export default Section2;