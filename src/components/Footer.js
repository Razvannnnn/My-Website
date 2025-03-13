import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-400 py-4 animate-fadeIn">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Side: Name and Rights Reserved */}
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">Răzvan Mîndrilă</span>. All rights reserved.
          </p>
        </div>

        {/* Right Side: Built With */}
        <div>
          <p className="text-sm">
            Built with <span className="font-semibold">React.js</span> and <span className="font-semibold">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;