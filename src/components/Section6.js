import React from 'react';
import MyImage from '../images/IMG_1917.png';

const Section6 = () => {
  return (
    <section id='section6' className=" max-h-80 relative flex justify-center">
        <div className='items-center'>  
            <div>
                <h1 className="text-gray-400 text-center py-3 text-2xl md:text-3xl">
                    <span className="bg-gradient-to-r from-stone-400 to-white text-transparent bg-clip-text animate-text font-bold">Main focuses</span>
                </h1>
            </div>
            <div className="relative z-8 max-w-2xl w-60 group overflow-hidden rounded-3xl">
                <img src={MyImage} alt='MyImage' className='min-h-64 w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105' />
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
            </div>
        </div>
    </section>
  );
};

export default Section6;