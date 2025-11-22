import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  typingSpeed = 100, 
  deletingSpeed = 50,
  pauseDuration = 2000 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer: number;

    const handleTyping = () => {
      const currentLength = displayText.length;
      
      if (!isDeleting) {
        // Typing phase
        if (currentLength < text.length) {
          setDisplayText(text.substring(0, currentLength + 1));
          timer = window.setTimeout(handleTyping, typingSpeed);
        } else {
          // Finished typing, pause before deleting
          timer = window.setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting phase
        if (currentLength > 0) {
          setDisplayText(text.substring(0, currentLength - 1));
          timer = window.setTimeout(handleTyping, deletingSpeed);
        } else {
          // Finished deleting, start over
          setIsDeleting(false);
          timer = window.setTimeout(handleTyping, typingSpeed);
        }
      }
    };

    timer = window.setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-block min-h-[1.2em]">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-blue-700 to-purple-600 animate-gradient-x bg-300%">
        {displayText}
      </span>
      <span className="inline-block w-[3px] h-[1em] bg-blue-600 ml-1 align-middle animate-cursor-blink"></span>
    </span>
  );
};

export default Typewriter;
