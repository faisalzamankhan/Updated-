import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function Typewriter({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
          }
        } else {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex === currentText.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={`typewriter-text font-mono ${className}`}>
      {displayText}
    </span>
  );
}
