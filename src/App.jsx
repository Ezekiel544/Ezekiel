import React, { forwardRef } from "react";
import TypewriterText from "./typewritter";
import './App.css';

const Hero = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f1b] via-[#0d0d20] to-[#020024]" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-white/10 via-transparent to-transparent blur-3xl opacity-20 rotate-12" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10" />
      </div>

      {/* Content */}
      <div className="text-center z-10">
        <p className="uppercase text-sm tracking-widest text-white/60 mb-4">Welcome</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Transforming Concepts<br />
          into Seamless <span className="text-purple-400">User</span><br />
          <span className="text-purple-400">Experiences</span>
        </h1>

        <TypewriterText />

        <button className="mt-10 px-6 py-3 bg-[#1e1e2f] text-white rounded-xl border border-white/20 hover:bg-purple-600 hover:text-black transition-all shadow-md">
          Show my work <span className="ml-2">↗</span>
        </button>
      </div>
    </div>
  );
});

export default Hero;
