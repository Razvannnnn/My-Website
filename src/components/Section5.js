import React from 'react';
import { ReactComponent as Icon } from '../images/design.svg';

const Section5 = () => {
    return (
      <section id='section5' className="min-h-80 relative flex justify-center">
        <div className='flex flex-col items-center'>  
          <div className="flex justify-center pt-4 pb-2">
            <Icon className="w-16 h-16"/>  
          </div>
          <div className="bg-gradient-to-r from-stone-400 to-white text-transparent bg-clip-text animate-text font-bold text-2xl pb-3">
            Graphic Design
          </div>
          <div>
            <h1 className="text-stone-400 text-center p-3 text-lg md:text-xl">
                <span className="text-white italic">Video editor</span> with <span className="text-white italic">35+ paid projects</span>. Skilled in <span className="text-white italic">motion graphics</span> and <span className="text-white italic">branding</span>, bringing ideas to life with <span className="text-white italic">creativity</span> and <span className="text-white italic">precision</span>.
            </h1>
          </div>
        </div>
      </section>
    );
  };

export default Section5;