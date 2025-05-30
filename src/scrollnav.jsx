import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './scrollnav.css'
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
  className={`fixed top-4 z-50 transition-all duration-300
              left-1/2 transform -translate-x-1/2
              nav-adjust-390 
              ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'} border border-red-500`}
>


      <ul className="flex items-center justify-center gap-5 sm:gap-8 px-4 py-2 sm:px-8 sm:py-3 bg-[#0f1624]/70 text-white text-sm sm:text-base font-semibold rounded-xl border border-white/10 shadow-md backdrop-blur-sm ">
        <li className="cursor-pointer hover:text-gray-300 transition">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition">
          <Link to="testimonials" smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>

    
  );
};

export default ScrollNav;

{/* <div
  className={`fixed top-6 left-[50%] translate-x-[-50%] sm:left-1/2 sm:translate-x-[-50%] 
              transition-transform duration-300 z-50 w-max max-w-[95vw] border-1
              ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
              sm:inset-x-auto inset-x-[8px]`}
> */}
