import React from "react";
import codeOverlay from "../src/assets/earth.png"; // Replace with your actual image path
import CopyEmailCard from "./copyemailcard";
const NextFeatureSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-10 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {/* LEFT - Two stacked cards */}
        <div className="flex flex-col gap-5 lg:gap-6 h-[380px] sm:h-[420px] md:h-[440px]">
          {/* Tech Enthusiast Card */}
          <div className="bg-[#060918] rounded-2xl p-6 flex flex-col justify-end overflow-hidden flex-1 group hover:scale-[1.01] transition-transform duration-300 ease-in-out">
            <h2 className="text-white text-xl font-bold leading-snug z-10">
              Tech enthusiast with a passion for development.
            </h2>
            {/* Optional background or icon can be placed here if needed */}
          </div>

          {/* Start Project Card */}
          {/* <div className="rounded-2xl p-6 flex flex-col justify-between flex-1 group hover:scale-[1.01] transition-transform duration-300 ease-in-out bg-gradient-to-br from-[#8e2de2] via-[#4a00e0] to-[#2b086f]">
            <h2 className="text-white text-2xl font-bold leading-snug mb-4 text-center">
              Do you want to start a project together?
            </h2>
            <button className="bg-black text-white text-sm rounded-xl px-6 py-3 w-fit self-center border border-white/10 hover:bg-white hover:text-black transition">
              📋 Copy my email address
            </button>
          </div> */}
          <CopyEmailCard/>
        </div>

        {/* RIGHT - Code snippet card */}
  <div className="relative bg-[#060918] rounded-2xl overflow-hidden p-6 flex flex-col justify-between h-[380px] sm:h-[420px] md:h-[440px] group hover:scale-[1.01] transition-transform duration-300 ease-in-out col-span-1 lg:col-span-2">
  {/* Grid Background Overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10 z-0" />

  {/* Text Content */}
  <div className="relative z-10">
    <p className="text-sm text-white/50 mb-2">The Inside Scoop</p>
    <h2 className="text-white text-2xl font-bold leading-snug">
      Currently learning<br />
      blockchain language
    </h2>
  </div>

  {/* Code Snippet: Solidity */}
  <div className="relative z-10 mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 text-white text-sm font-mono shadow-inner overflow-x-auto">
    <pre>
      <code>
<span className="text-purple-400">// Smart contract in Solidity</span><br />
<span className="text-pink-400">pragma</span> solidity ^0.8.0;<br /><br />
<span className="text-pink-400">contract</span> HelloWorld {'{'}<br />
&nbsp;&nbsp;<span className="text-pink-400">string</span> public greeting = <span className="text-yellow-400">"Hello, Blockchain!"</span>;<br />
{'}'}
      </code>
    </pre>
  </div>
</div>

      </div>
    </section>
  );
};

export default NextFeatureSection;
