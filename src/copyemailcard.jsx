import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const CopyEmailCard = () => {
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const email = "chikezieezekiel3@gmail.com"; // Replace with your actual email

  useEffect(() => {
    // Set window size on mount to avoid delays
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setShowConfetti(true);

      // Reset states after 3 seconds
      setTimeout(() => {
        setCopied(false);
        setShowConfetti(false);
      }, 5000); // Optional: reduce to 3000ms
    });
  };

  return (
    <div className="relative rounded-2xl p-6 flex flex-col justify-between flex-1 group hover:scale-[1.01] transition-transform duration-300 ease-in-out bg-gradient-to-br from-[#8e2de2] via-[#4a00e0] to-[#2b086f] overflow-hidden">
      
      {/* 🎉 Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            numberOfPieces={250}
            recycle={false}
            gravity={0.3}
          />
        </div>
      )}

      {/* 💬 Text and Button */}
  <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-4 text-center z-20">
  Do you want to start a project together?
</h2>

     <button
  onClick={handleCopy}
  className="bg-black text-white text-sm rounded-xl px-6 py-3 w-fit self-center border border-white/10 hover:bg-purple-600 hover:text-white transition z-20"
>
  {copied ? "✅ Email copied" : "📋 Copy my email address"}
</button>

    </div>
  );
};

export default CopyEmailCard;
