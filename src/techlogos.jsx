const techLogos = [
  {
    name: 'Cloudinary',
    img: 'https://res.cloudinary.com/cloudinary-marketing/image/upload/v1695322850/brand/Cloudinary_Logotype_White_Horizontal.svg',
  },
  {
    name: 'Firebase',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg',
  },
  {
    name: 'React',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Vercel',
    img: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
  },
  {
    name: 'TypeScript',
    img: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
  },
  {
    name: 'Tailwind',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
];

const TechPartners = () => (
  <div className="bg-[#0A0A23] py-10 px-4">
    <div className="flex justify-center flex-wrap gap-10 max-w-6xl mx-auto items-center">
      {techLogos.map((tech, index) => (
        <div key={index} className="flex items-center gap-2">
          <img src={tech.img} alt={tech.name} className="h-8 object-contain" />
          <span className="text-white text-sm font-medium">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TechPartners;
