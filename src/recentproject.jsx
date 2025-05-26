import { motion } from "framer-motion";
import chatbot from '../src/assets/chatbot.png';
import chatterly from '../src/assets/chatterly.png';
import movie from '../src/assets/movie.png';
import civicspark from '../src/assets/civicspark.png';

// ICONS
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss, SiTypescript, SiSolidity } from "react-icons/si";
import { PiWalletFill } from "react-icons/pi";
import { FaBrain } from "react-icons/fa"; // For AI (you can change this icon if you prefer)
import { BsCloud } from "react-icons/bs"; // Bootstrap icons
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";


const projects = [
  {
    title: "ChatbotX - Chatbot",
    description: "ChatbotX helps you automate conversations, instantly assist customers, and skyrocket your business efficiency 24/7.",
    image: chatbot,
    tech: ["react", "tailwind", "ts", "firebase", "ai"],
    link: "https://chat-bot-umber-one.vercel.app/"
  },
  {
    title: "Chatterly - Chat App",
    description: "metroMoove has got your last mile covered. Simplifying the process of...",
    image: chatterly,
    tech: ["react", "tailwind", "firebase"],
    link: "https://chat-ruddy-alpha.vercel.app/"
  },
  {
    title: "Movie Theatre - Movie Web App",
    description: "Your movie theatre, explore and watch your favourite movie",
    image: movie,
    tech: ["html", "css", "javascript"],
    link: "https://movie-time-mu.vercel.app/"
  },
  {
    title: "Civic Spark - Civic Web App",
    description: "Civic Spark is a government-customized social media platform designed to bring citizens and authorities closer.",
    image: civicspark,
    tech: ["react", "tailwind", "firebase" ,"cloudinary"],
    link: "https://zeal72.github.io/CivicSpark/"
  },
];

// Animation variant
const fadeIn = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
});

// Icon map
const techIcons = {
  react: <FaReact className="text-cyan-400 text-lg" />,
  tailwind: <SiTailwindcss className="text-sky-400 text-lg" />,
  ts: <SiTypescript className="text-blue-500 text-lg" />,
  solidity: <SiSolidity className="text-gray-300 text-lg" />,
  wallet: <PiWalletFill className="text-purple-300 text-lg" />,
  ai: <FaBrain className="text-yellow-400" /> ,
  firebase: <SiFirebase className="text-orange-400" />,
  cloudinary: <BsCloud className="text-blue-300" />, // Cloudinary placeholder
  javascript: <SiJavascript className="text-yellow-300" />,
    html: <FaHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-500" />,

};

const RecentProjects = () => {
  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          A small selection of <span className="text-purple-400">recent projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn(idx % 2 === 0 ? "left" : "right")}
              className="bg-[#0F0F2C] rounded-xl p-4 border border-white/10 hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-md mb-4 w-full h-52 object-cover" // ⬅️ Increased height
              />

              <h3 className="text-lg font-semibold mb-1">{proj.title}</h3>
              <p className="text-sm text-white/70 mb-3">{proj.description}</p>

              <div className="flex items-center gap-2 flex-wrap mb-3">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="p-1 bg-black/30 rounded-full border border-white/10">
                    {techIcons[tech] || tech.toUpperCase()}
                  </span>
                ))}
              </div>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-300 hover:underline flex items-center gap-1"
              >
                Check Live Site <span>↗</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
