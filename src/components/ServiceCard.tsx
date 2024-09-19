'use client';

import { Plus, X } from 'lucide-react';
import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';

const ServiceCard = () => {
  const [view, setView] = React.useState(false);

  const handleView = () => {
    setView(!view);
  };

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.5, ease: 'easeOut' } }}
      onClick={handleView}
      className={`p-4 py-3 ${
        view ? 'h-full' : 'h-12'
      } overflow-clip w-full bg-bglight/20  cursor-pointer border border-bglight hover:border-bglighter 
    rounded-md space-y-4`}
    >
      <motion.div layout className="flex items-center justify-between">
        <p className="text-sm text-textlight font-body font-semibold">
          Website Design and Development
        </p>
        <Plus
          size={20}
          className={`text-text text-[20px] ${
            view ? 'rotate-[135deg]' : ''
          } transition-transform duration-500`}
        />
      </motion.div>

      <motion.p layout className="text-textlighter text-sm font-body ">
        Creating responsive, dynamic, and interactive websites tailored to the
        clients needs using HTML, CSS, JavaScript, and frameworks like React.js.
      </motion.p>
    </motion.div>
  );
};

export default ServiceCard;
