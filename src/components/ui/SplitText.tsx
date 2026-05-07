import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { cn } from '../../lib/utils';
import { useState, useEffect } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  gradient?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  trigger?: any; // To allow external components to trigger a restart
}

export const SplitText = ({
  text,
  className,
  gradient,
  delay = 0,
  duration = 1.2, // Smoother duration
  stagger = 0.03, // Tighter stagger
  trigger,
}: SplitTextProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Allow re-trigger if needed
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsAnimating(true);
    }
  }, [inView, trigger]);

  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      y: '120%', // Shifted more for better clip effect
      rotate: 15,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for "premium" feel (expo out)
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      key={trigger} // Re-mount or re-animate based on key
      className={cn(
        "flex flex-wrap overflow-hidden leading-[1.1] selection:bg-[#A9D24E]/30",
        gradient ? "bg-clip-text text-transparent" : "",
        className
      )}
      style={{
        backgroundImage: gradient || undefined,
        WebkitBackgroundClip: gradient ? "text" : undefined,
      }}
      variants={containerVariants}
      initial="hidden"
      animate={isAnimating ? "visible" : "hidden"}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap mr-[0.3em] overflow-hidden py-[0.1em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={letterVariants}
              className="inline-block origin-bottom-left"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};
