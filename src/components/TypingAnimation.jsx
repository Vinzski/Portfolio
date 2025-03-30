import React, { useState, useEffect } from "react";
import "../styles/TypingAnimation.css";

const phrases = ["Practical Builder", "Adaptive Learner", "Creative Innovator"];

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState("binary"); // 'binary' -> 'decode'
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [binarySequence, setBinarySequence] = useState("");

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let index = 0;
    let binaryText = "";

    // Step 1: Type full binary sequence first
    const binaryTypingInterval = setInterval(() => {
      if (index < currentPhrase.length) {
        const binaryChar = Math.random() > 0.5 ? "1" : "0";
        binaryText += binaryChar;
        setDisplayText(binaryText);
        index++;
      } else {
        clearInterval(binaryTypingInterval);
        setBinarySequence(binaryText); // Save the full binary sequence
        setTimeout(() => setPhase("decode"), 500); // Small delay before decoding
      }
    }, 100); // Speed of typing binary

    return () => clearInterval(binaryTypingInterval);
  }, [phraseIndex]);

  useEffect(() => {
    if (phase === "decode") {
      const currentPhrase = phrases[phraseIndex];
      let decodeIndex = 0;
      let decodedText = binarySequence.split("");

      // Step 2: Gradually replace binary with actual characters
      const decodingInterval = setInterval(() => {
        if (decodeIndex < currentPhrase.length) {
          decodedText[decodeIndex] = currentPhrase[decodeIndex]; // Replace binary with actual letter
          setDisplayText(decodedText.join(""));
          decodeIndex++;
        } else {
          clearInterval(decodingInterval);
          setTimeout(() => {
            setDisplayText("");
            setPhase("binary"); // Reset for the next phrase
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }, 2000); // Delay before switching phrases
        }
      }, 100); // Speed of decoding

      return () => clearInterval(decodingInterval);
    }
  }, [phase, binarySequence]);

  return (
    <div className="typing-animation">
      <span>{displayText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingAnimation;
