import React from 'react';
import MyImage from '../images/IMG_1903.png'
import { section } from 'framer-motion/client';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if(section) {
    section.scrollIntoView({behavior: 'smooth'})
  
    setTimeout(() => {
      section.classList.add('animate-zoomIn');

      setTimeout(() => {
        section.classList.remove('animate-zoomIn');
      }, 1000);
    }, 400)
  }
}

const Section1 = () => {
  return (
    <section id='section1' className="min-h-72 flex items-center justify-center dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl py-4 w-full">
        {/* Flex Container for Name, Title, and Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 px-3">
          {/* Name and Title Stacked Vertically */}
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <a>
              <div className="relative z-10 max-w-2xl w-full group overflow-hidden rounded-3xl">
              <img src={MyImage} alt='MyImage' className='h-20 w-20 object-cover animate-fadeIn transition-transform duration-500 ease-in-out transform group-hover:scale-105'></img>
              </div>
            </a>

            <div>
              <h1 className="relative w-[max-content] font-mono font-bold text-2xl md:text-3xl text-white before:absolute before:inset-0 before:animate-typewriter before:bg-stone-950 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white">
                Hi, I’m Răzvan
              </h1>
              <h2 className="text-lg md:text-xl text-gray-400">
                Computer Science Student @ UBB
              </h2>
            </div>
          </div>
            <a className='p-0 md:p-4'>
                <button onClick={() => scrollToSection('section4')} className="hover:scale-110 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-sky-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-transform duration-300 ease-in-out">
                Contact me
                </button>
              </a>
          </div>
          {/* Description Below */}
          <div>
          <p className="text-2xl bg-gradient-to-r from-stone-400 to-white text-transparent bg-clip-text animate-text leading-relaxed mb-4 px-3">
            Blending my skills in <span className="text-white font-semibold ">coding</span> and <span className="text-white font-semibold">design</span> to build <span className="text-white font-semibold">creative, 
                impactful, and future-ready</span> solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section1;