import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const StyledSection = () => {
  return (
    <section className="py-10 bg-transparent">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-4 animate-fadeIn">
            Welcome to my <span className='bg-gradient-to-br from-sky-500 to-sky-200 text-transparent bg-clip-text'>Website </span>
        </h2>

        {/* Section Subtitle */}
        <p className="text-lg text-center text-gray-400 mb-8 animate-fadeIn pb-6">
            Coding Solutions, Designing Experiences
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideIn pb-8 mx-h-64">
          {/* Card 1 */}
          <div className='gradient-border rounded-3xl bg-stone-950 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2'>
            <div className="rounded-3xl bg-gradient-to-b from-stone-950 to-black max-h-max">  
                <Section1></Section1>
            </div>
          </div>

          {/* Card 2 */}
          <div className='gradient-border bg-stone-950 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className="bg-gradient-to-b from-stone-950 to-black rounded-3xl mx-auto">
                <Section2></Section2>
            </div>
          </div>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideIn2 pb-8'>
            <div className='gradient-border rounded-3xl bg-stone-950 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-3'>
                <div className="rounded-3xl bg-gradient-to-b from-stone-950 to-black ">  
                    <Section3></Section3>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideIn2 pb-32'>
            <div className='gradient-border rounded-3xl bg-stone-950 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-3'>
                <div className="bg-gradient-to-b from-stone-950 to-black rounded-3xl">  
                    <Section4></Section4>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StyledSection;