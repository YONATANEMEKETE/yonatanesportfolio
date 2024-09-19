'use client';

import { Copy, CopyCheck, LoaderCircle } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const Email = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText('YONATANE.M');
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  const variant = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      variants={variant}
      animate="enter"
      exit={'exit'}
      initial="hidden"
      transition={{ duration: 0.7, ease: 'easeOut' }}
      onClick={handleCopy}
      className={`px-4 py-2 w-28 rounded-md  border ${
        copied ? 'border-accent' : 'border-bglighter '
      } text-sm text-text font-body font-medium cursor-pointer flex items-center gap-2 justify-center`}
    >
      {!copied ? (
        <Copy size={20} />
      ) : (
        <LoaderCircle size={20} className="animate-spin" />
      )}
      <p>{copied ? 'Copied!' : 'Email'}</p>
    </motion.div>
  );
};

export default Email;
