import React from 'react';
import MyImage from '../images/IMG_1903.png'

const Section1 = () => {
  return (
    <section className="min-h-80 flex items-center justify-center  dark:from-gray-900 dark:to-gray-800 ">
      <div className="max-w-2xl py-4 w-full">
        {/* Flex Container for Name, Title, and Button */}
            <div className="flex justify-between items-center mb-8">
              {/* Name and Title Stacked Vertically */}
              <div className="flex items-center space-x-1">
                <a>
                  <img src={MyImage} className='h-20'></img>
                </a>

                <div>
                  <h1 className="relative w-[max-content] font-mono font-bold text-2xl md:text-3xl text-white before:absolute before:inset-0 before:animate-typewriter before:bg-stone-950 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white">
                    Hi, I’m Răzvan
                  </h1>
                  <h2 className="text- text-xl md:text-xl text-gray-400">
                     Computer Science Student @ UBB
                  </h2>
                </div>
              </div>

              {/* Contact Button */}
              <a href="#contact"
                className="px-8 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Contact me
              </a>
            </div>

            {/* Description Below */}
        <div>
          <p className="text-3xl text-gray-400 dark:text-gray-300 leading-relaxed mb-4">
            Blending my skills in <span className="text-white font-bold">coding</span> and <span className="text-white font-bold">design</span> to build <span className="text-white font-bold">creative, 
                impactful, and future-ready</span> solutions.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Section1;