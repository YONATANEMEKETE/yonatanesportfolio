'use client';

import { ArrowDownToLine } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const ResumeDownload = () => {
  const variant = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.a
      variants={variant}
      animate="enter"
      exit={'exit'}
      initial="hidden"
      transition={{ duration: 0.3, ease: 'easeOut' }}
      href={'../Assets/YONATANE MEKETE.pdf'}
      download
      className="group w-28 px-4 py-2 bg-bglight/30 rounded-md border border-bglighter text-sm text-text font-body font-medium cursor-pointer flex items-center gap-2 justify-center"
    >
      <ArrowDownToLine size={20} />
      <p>Resume</p>
    </motion.a>
  );
};

export default ResumeDownload;
