import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Timeline from './Timeline';

const StyledSection = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-6 max-w-5xl ">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-white mb-4 animate-fadeIn">
            Welcome to my <span className='bg-gradient-to-r from-sky-500 to-white text-transparent bg-clip-text animate-text'>Website </span>
        </h2>

        {/* Section Subtitle */}
        <p className="text-lg text-center text-gray-400 mb-4 animate-fadeIn pb-6">
            Coding Solutions, Designing Experiences
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideIn pb-8 mx-h-64 ">
          {/* Card 1 */}
          <div className='gradient-border rounded-3xl bg-stone-950 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 shadow-black-custom'>
            <div className="rounded-3xl bg-gradient-to-b from-stone-950 to-black max-h-max">  
                <Section1></Section1>
            </div>
          </div>

          {/* Card 2 */}
          <div className='gradient-border bg-stone-950 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 shadow-black-custom'>
            <div className="bg-gradient-to-b from-stone-950 to-black rounded-3xl mx-auto">
                <Section2></Section2>
            </div>
          </div>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideIn2 pb-8'>
            <div className='gradient-border rounded-3xl bg-stone-950 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-3 shadow-black-custom'>
                <div className="rounded-3xl bg-gradient-to-b from-stone-950 to-black ">  
                    <Section3></Section3>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 mx-h-64 animate-slideIn2'>
            <div className='gradient-border rounded-3xl bg-stone-950 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-1 animate-fadeIn shadow-black-custom'>
                <div className="bg-gradient-to-b from-stone-950 to-black rounded-3xl">  
                    <Section5></Section5>
                </div>
            </div>
            <div className='gradient-border rounded-3xl bg-stone-950 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-1 animate-fadeIn shadow-black-custom'>
                <div className="bg-gradient-to-b from-stone-950 to-black rounded-3xl">  
                    <Section6></Section6>
                </div>
            </div>
            <div className='gradient-border rounded-3xl bg-stone-950 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-1 animate-fadeIn shadow-black-custom'>
                <div className="bg-gradient-to-b from-stone-950 to-black rounded-3xl">  
                    <Section7></Section7>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn pb-8'>
            <div className='gradient-border rounded-3xl bg-stone-950 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-3 shadow-black-custom'>
                <div className="rounded-3xl bg-gradient-to-b from-stone-950 to-black ">  
                    <Timeline></Timeline>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn pb-32'>
            <div className='gradient-border rounded-3xl bg-stone-950 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-3 shadow-black-custom'>
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