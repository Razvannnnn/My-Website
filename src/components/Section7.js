import React from 'react';
import { ReactComponent as Icon } from '../images/coding.svg';

const Section7 = () => {
    return (
      <section id='section7' className="min-h-80 relative flex justify-center">
        <div className='flex flex-col items-center'>  
          <div className="flex justify-center pt-4 pb-2">
            <Icon className="w-16 h-16"/>  
          </div>
          <div className="bg-gradient-to-r from-stone-400 to-white text-transparent bg-clip-text animate-text font-bold text-2xl pb-3">
            Programming
          </div>
          <div>
            <h1 className="text-stone-400 text-center p-3 text-lg md:text-xl">
                <span className="text-white italic">Computer science student</span> with <span className="text-white italic">6+ projects</span> on <span className="text-white italic">Github</span>. Passionate about <span className="text-white italic">coding, problem solving</span> and <span className="text-white italic">building efficient software</span>.
            </h1>
          </div>
        </div>
      </section>
    );
  };

export default Section7;