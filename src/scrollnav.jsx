import React, { useState, useEffect } from 'react';

const ScrollNav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-6 w-full flex justify-center z-50 transition-transform duration-300 ${
        showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}
    >
      <ul className="flex gap-3 sm:gap-8 px-3 sm:px-8 py-2 sm:py-3 bg-[#0f1624]/70 text-white text-sm sm:text-base font-semibold rounded-xl border border-white/10 shadow-md backdrop-blur-sm">
        <li className="cursor-pointer hover:text-gray-300 transition">About</li>
        <li className="cursor-pointer hover:text-gray-300 transition">Projects</li>
        <li className="cursor-pointer hover:text-gray-300 transition">Testimonials</li>
        <li className="cursor-pointer hover:text-gray-300 transition">Contact</li>
      </ul>
    </div>
  );
};

export default ScrollNav;
