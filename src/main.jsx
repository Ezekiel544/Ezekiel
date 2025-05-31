import { createRoot } from 'react-dom/client';
import { useRef } from 'react';
import { Element } from 'react-scroll';
import './index.css';

import Hero from './App.jsx';
import FeatureSection from './featuresection.jsx';
import ScrollNav from './scrollnav.jsx';
import ContactSection from './contactsection.jsx';
import RecentProjects from './recentproject.jsx';
import Testimonial from './testimonial.jsx';
import CallToAction from './calltoaction.jsx';
import WorkExperience from './workexperince.jsx';

function Root() {
  const heroRef = useRef(null);

  return (
    <main className="bg-gradient-to-br from-[#0f0f1b] via-[#0d0d20] to-[#020024] ">
      <ScrollNav heroRef={heroRef} />

      <Element name="about">
        <Hero ref={heroRef} />
      </Element>
        <FeatureSection />
        <ContactSection />
      <Element name="projects">
        <RecentProjects />
      </Element>

      <Element name="testimonials">
        <Testimonial />
      </Element>
      {/* If needed, wrap others later */}
      
      <WorkExperience />
      <Element name="contact">
        <CallToAction />
      </Element>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
