import React from 'react';
import earthImage from '../src/assets/coderoom.png'; // Laptop mockup
import globeBg from '../src/assets/earth.png'; // Globe overlay

const techStack = ['reactJS', 'nextJS', 'tailwind', 'Typescript'];

const FeatureSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16  ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {/* LEFT - Laptop Image */}
        <div className="relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden group hover:scale-[1.01] transition-transform duration-300 ease-in-out h-[380px] sm:h-[420px] md:h-[440px]">
          <img
            src={earthImage}
            alt="Earth Mockup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex items-end">
            <h2 className="text-white text-2xl font-bold leading-snug max-w-lg">
              I prioritize client collaboration, fostering open communication
            </h2>
          </div>
        </div>

        {/* RIGHT - Timezone + Tech Stack */}
        <div className="flex flex-col gap-5 lg:gap-6 h-[380px] sm:h-[420px] md:h-[440px]">
          {/* Timezone Card */}
          <div className="relative bg-[#060918] rounded-2xl p-5 sm:p-6 overflow-hidden group hover:scale-[1.015] transition-transform duration-300 ease-in-out flex-1">
            <h2 className="text-white text-xl font-bold relative z-10 leading-snug">
              I'm very flexible with time zone communications
            </h2>
            <img
              src={globeBg}
              alt="Globe"
              className="absolute bottom-0 right-0 w-2/3 opacity-40 z-0 pointer-events-none"
            />
          </div>

          {/* Tech Stack Card */}
          <div className="bg-[#060918] rounded-2xl p-5 sm:p-6 group hover:scale-[1.015] transition-transform duration-300 ease-in-out flex-1">
            <p className="text-sm text-white/60 mb-1">
              I constantly try to improve
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">
              My tech stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#121b2c] hover:bg-[#1d2a40] text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
