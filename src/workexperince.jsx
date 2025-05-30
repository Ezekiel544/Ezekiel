import React from 'react';
import './glow.css'
import Expfirst from '../src/assets/expfirst.png'
import Expsecond from '../src/assets/expsecond.png'
import Expthird from '../src/assets/expthird.png'
import Expfourth from '../src/assets/expfourth.png'
const workData = [
  {
    title: 'Software Engineer - Hitch Pay',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    icon: Expfirst,
  },
  {
    title: 'Mobile App Dev - Metromoove',
    desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
    icon: Expsecond,
  },
  {
    title: 'Frontend Developer - Easyspend',
    desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    icon: Expthird,
  },
  {
    title: 'Lead Frontend Developer - Umecarts',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    icon: Expfourth,
  },
];

const WorkExperience = () => {
  return (
    <div className=" text-white px-4 py-16  flex flex-col items-center border border-red-500 ">
      <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">
        <span className="text-white">My </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          work experience
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {workData.map((item, index) => (
          <div key={index} className="relative bg-[#14142b] rounded-2xl p-6 overflow-hidden group ">
            {/* Glowing orb */}
            <div className="glow-orb" />

            {/* Card Content */}
            <div className="flex items-start gap-4 relative z-10 ">
              <img src={item.icon} alt="icon" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
