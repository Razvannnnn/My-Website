import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const timelineData = [
  { date: "2019-2023", title: "High school", description: "\"Roman-Vodă\" National College, Roman, Neamț County\nProfile - Intensive Mathematics and Computer Science" },
  { date: "2023-2026", title: "University", description: "Faculty of Mathematics and Informatics - UBB, Cluj-Napoca\nYear of Study – Second Year\nSpecialization – Computer Science" },
];

const Timeline = () => {
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const updateLineHeight = () => {
      if (lineRef.current) {
        const lastItem = lineRef.current.lastElementChild;
        if (lastItem) {
          const lineStart = lineRef.current.getBoundingClientRect().top;
          const lineEnd = lastItem.getBoundingClientRect().bottom;
          setLineHeight(lineEnd - lineStart);
        }
      }
    };
    
    updateLineHeight();
    window.addEventListener("resize", updateLineHeight);
    return () => window.removeEventListener("resize", updateLineHeight);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleItems(prev => [...prev, entry.target.dataset.index]);
        }
      });
    }, { threshold: 0.1 });

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="flex flex-col items-center w-full pt-8">
      <div className="relative w-3/4" ref={lineRef}>
        {/* Dynamic Vertical Line */}
        <motion.div
          className="absolute left-[102px] top-0 w-1 bg-white"
          style={{ height: `${lineHeight}px` }}
          initial={{ height: 0 }}
          animate={{ height: `${lineHeight}px` }}
          transition={{ duration: 1 }}
        ></motion.div>
        
        {timelineData.map((item, index) => (
          <motion.div 
            key={index} 
            data-index={index}
            className="timeline-item flex items-center mb-8"
            initial={{ opacity: 0, x: -20 }} 
            animate={visibleItems.includes(index.toString()) ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {/* Date */}
            <div className="w-24 text-right pr-4 text-gray-300 font-semibold">{item.date}</div>
            
            {/* Dot */}
            <div className="relative">
              <div className="w-4 h-4 bg-sky-500 rounded-full relative z-10"></div>
            </div>
            
            {/* Content */}
            <div className="ml-6 p- 4 bg-stone-800 shadow-lg rounded-lg w-2/3 ">
              <h3 className="bg-gradient-to-r from-stone-400 to-white text-transparent bg-clip-text animate-text font-bold text-xl py-3">{item.title}</h3>
              <p className="text-gray-200 pb-3" style={{ whiteSpace: "pre-line" }}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
