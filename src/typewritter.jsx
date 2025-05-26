import React, { useEffect, useState } from "react";

const phrases = [
  "Frontend Developer",
  "Brand Ambassador",
  "Space Host",
  "Startup Expert",
];

const TypewriterText = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      // Typing logic
      if (displayText.length < phrases[currentPhraseIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(
            phrases[currentPhraseIndex].slice(0, displayText.length + 1)
          );
        }, 100);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      // Deleting logic
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(
            phrases[currentPhraseIndex].slice(0, displayText.length - 1)
          );
        }, 50);
      } else {
        // Move to next phrase
        setTyping(true);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, typing, currentPhraseIndex]);

  return (
  <p className="mt-6 text-lg text-white/80">
  <span className="block sm:inline">Hi! I'm Ezekiel,</span>{" "}
  <span className="block sm:inline">
    I am a professional{" "}
    <span className="font-semibold text-purple-400">{displayText}</span>
    <span className="animate-pulse">|</span>
  </span>
</p>

  );
};

export default TypewriterText;
