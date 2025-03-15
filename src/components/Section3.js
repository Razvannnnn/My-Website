import React from "react";
import Timeline from "./Timeline";
import Technologies from "./Technologies";

const Section3 = () => {
    return (
        <section id='section3'>
            <div className='grid-container'>
                <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                    <div className="col-span-2">
                        <Technologies className="animate-fadeIn"></Technologies>
                    </div>
                    <div className="col-span-1 flex justify-center md:justify-start relative">
                    <p className="text-2xl bg-gradient-to-r from-stone-400 to-white text-transparent bg-clip-text animate-text leading-relaxed mb-4 px-3">
                        These are the <span className="text-white font-semibold ">technologies</span> I use, <span className="text-white font-semibold ">continually evolving</span> to embrace the <span className="text-white font-semibold ">latest advancements</span>.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3;