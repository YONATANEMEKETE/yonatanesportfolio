'use client';

import { Plus, X } from 'lucide-react';
import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';

type serviceProps = {
  title: string;
  brief: string;
};

const ServiceCard = ({ title, brief }: serviceProps) => {
  const [view, setView] = React.useState(false);

  const riseToTop = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const handleView = () => {
    setView(!view);
  };

  return (
    <motion.div
      layout
      variants={riseToTop}
      transition={{ layout: { duration: 0.5, ease: 'easeOut' } }}
      onClick={handleView}
      className={`p-4 py-3 ${
        view ? 'h-full' : 'h-12'
      } overflow-clip w-full bg-bglight/20  cursor-pointer border border-bglight hover:border-bglighter 
    rounded-md space-y-4`}
    >
      <motion.div layout className="flex items-center justify-between">
        <p className="text-sm text-textlight font-body font-semibold">
          {title}
        </p>
        <Plus
          size={20}
          className={`text-text text-[20px] ${
            view ? 'rotate-[135deg]' : ''
          } transition-transform duration-500`}
        />
      </motion.div>

      <motion.p layout className="text-textlighter text-sm font-body ">
        {brief}
      </motion.p>
    </motion.div>
  );
};

export default ServiceCard;
