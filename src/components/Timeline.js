import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const timelineData = [
  { date: "2021", title: "Project Alpha", description: "Developed an innovative AI solution." },
  { date: "2022", title: "Startup Beta", description: "Launched a SaaS platform." },
  { date: "2023", title: "Company Gamma", description: "Led a major software overhaul." }
];

const Timeline = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex flex-col items-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="grid-cols-1 items-center">
          <div className="w-1 bg-white absolute transform top-0 bottom-0 justify-center"></div>
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="flex items-center w-full max-w-2xl my-6 relative"
            >
              <div className="w-1/2 text-right pr-4">
                <p className="text-lg font-semibold text-gray-700">{item.date}</p>
              </div>
              <div className="w-1/12 flex justify-center">
                <motion.div
                  className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md"
                  animate={{ scale: scrollY > index * 200 ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
              <div className="w-1/2 pl-4">
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
