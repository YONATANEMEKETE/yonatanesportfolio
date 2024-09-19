import React from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  icon?: any;
  text: string;
};

const Button = ({ variant = 'secondary', icon, text }: ButtonProps) => {
  const slideRight = {
    initial: { opacity: 0, x: -20 },
    enter: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  if (variant === 'secondary') {
    return (
      <motion.div
        variants={slideRight}
        className={`px-4 py-2 rounded-md bg-bg  border border-bglighter hover:border-accent text-sm text-text font-body font-medium cursor-pointer `}
      >
        <p>{text}</p>
      </motion.div>
    );
  }

  return (
    <div
      className={`px-4 py-2 rounded-md bg-bglight/30 border border-bglighter text-sm text-text font-body font-medium cursor-pointer `}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
