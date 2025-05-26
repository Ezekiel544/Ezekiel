import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="relative  text-white py-10 px-6 text-center flex flex-col items-center justify-center">
      {/* Grid background (optional) */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-3xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Ready to take <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">your</span> digital<br />
          presence to the next level?
        </h2>
        <p className="text-gray-300 mb-10">
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </p>

        <a
          href="#contact"
          className="inline-block px-6 py-3 border border-purple-400 rounded-lg text-white hover:bg-purple-500 hover:border-purple-500 transition duration-300 font-medium"
        >
          Let&apos;s get in touch <span className="ml-2">↗</span>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-20 w-full flex flex-col md:flex-row justify-between items-center text-sm text-white/80 z-10 max-w-6xl">
        <p>Copyright © 2024  Ezekiel chikezie</p>
        <div className="flex gap-3 mt-4 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-white/10 hover:bg-white/20 transition">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-white/10 hover:bg-white/20 transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-white/10 hover:bg-white/20 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
