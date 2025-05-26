import { createRoot } from 'react-dom/client';
import { useRef } from 'react';
import './index.css';

import Hero from './App.jsx';         // renamed if you haven't already
import FeatureSection from './featuresection.jsx';
import ScrollNav from './scrollnav.jsx';
import ContactSection from './contactsection.jsx';
import RecentProjects from './recentproject.jsx';
import Testimonial from './testimonial.jsx';
import CallToAction from './calltoaction.jsx';
// import TechLogos from './techlogos.jsx' ;
import WorkExperience from './workexperince.jsx';
function Root() {
  const heroRef = useRef(null);

  return (
    <main className="bg-gradient-to-br from-[#0f0f1b] via-[#0d0d20] to-[#020024]">
      <ScrollNav heroRef={heroRef} />
      <Hero ref={heroRef} />
      <FeatureSection />
      <ContactSection/>
      <RecentProjects/>
      <Testimonial/>
      {/* <TechLogos/> */}
      <WorkExperience/>
      <CallToAction/>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<Root />);


  //  <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
  //     <ul className="flex gap-8 px-8 py-3 bg-[#0f1624]/70 text-white text-sm rounded-xl border border-white/10 shadow-md backdrop-blur-sm">
  //       <li className="cursor-pointer hover:text-gray-300 transition">About</li>
  //       <li className="cursor-pointer hover:text-gray-300 transition">Projects</li>
  //       <li className="cursor-pointer hover:text-gray-300 transition">Testimonials</li>
  //       <li className="cursor-pointer hover:text-gray-300 transition">Contact</li>
  //     </ul>
  //   </nav>