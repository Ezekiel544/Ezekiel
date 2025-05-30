import { motion } from 'framer-motion';
import firstMan from '../src/assets/firstman.png';
import secondMan from '../src/assets/secondman.png';
import thirdMan from '../src/assets/thirdman.png';
import firstLady  from '../src/assets/ladyimage.png';
import secondLady  from '../src/assets/secondlady.png';
const testimonials = [
  {
    text: `Collaborating with Ezekiel was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ezekiel's enthusiasm for every facet of development truly stands out.`,
    author: 'Michael Johnson',
    role: 'Director of AlphaStream Technologies',
    img: firstMan,
  }, 
  {
    text: `Absolutely amazing experience! Ezekel went above and beyond to deliver a beautiful, functional product on time. You can tell they genuinely care about his clients’ success.`,
    author: 'Sarah Kim',
    role: 'Product Manager at NovaTech',
    img: firstLady,
  },
  {
    text: `Ezekiel is a seasoned web and software developer. He has outstanding knowledge of programming languages and excels at delivering high-quality applications. He’s our senior developer and continues to keep our clients happy with his help.`,
    author: 'Bukunmi (Matt) Odetayo',
    role: 'CEO Herrands',
    img: secondMan,
  },
  {
    text: `Ezekiel's professionalism and technical skills are top-notch. he did not only understood our vision but enhanced it with creative solutions. I highly recommend Ezekiel to anyone serious about quality`,
    author: 'Gadison musk',
    role: 'co-founder at Glibber',
    img: thirdMan,
  },
  {
    text: `Working with his team was one of the best decisions we made. Their attention to detail, quick turnaround, and consistent communication made the whole process seamless. The final product exceeded our expectations.`,
    author: 'MAry george',
    role: 'UI/UX designer at Techforge',
    img: secondLady,
  },
];

const TestimonialsMarquee = () => (
  <div className=" py-4 px-4 overflow-hidden">
  <h2 className="text-center text-4xl font-bold mb-12 text-white">
  Kind words from{' '}
  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
    satisfied clients
  </span>
</h2>


    <motion.div
      className="flex gap-6 w-max"
      animate={{ x: ['0%', '-50%'] }}
      transition={{
        repeat: Infinity,
        duration: 40, // Slower speed
        ease: 'linear',
      }}
    >
      {[...testimonials, ...testimonials].map((t, i) => (
        <div
  key={i}
  className="w-[320px] bg-[#0F0F2C] p-6 rounded-2xl border border-white/10 shadow-lg flex flex-col gap-4 h-[280px]"
>
  <p className="text-white/80 text-sm leading-relaxed">{t.text}</p>
  <div className="flex items-center gap-3 mt-auto">
    <img
      src={t.img}
      alt={t.author}
      className="w-10 h-10 rounded-full object-cover"
    />
    <div>
      <p className="text-white font-semibold text-sm">{t.author}</p>
      <p className="text-xs text-white/50">{t.role}</p>
    </div>
  </div>
</div>

      ))}
    </motion.div>
  </div>
);

export default TestimonialsMarquee;
