import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-400 py-4 animate-fadeIn">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="order-2 md:order-1">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">Răzvan Mîndrilă</span>. All rights reserved.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <SocialMediaIcons></SocialMediaIcons>
        </div>
        <div className="order-3 md:order-3">
          <p className="text-sm">
            Built with <span className="font-semibold">React.js</span> and <span className="font-semibold">Tailwind CSS</span>.
          </p>
        </div>
      </div>  
    </footer>
  );
};

export default Footer;