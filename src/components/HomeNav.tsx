'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

type HomeNavProps = {
  text: string;
  link: string;
};

const HomeNav = ({ text, link }: HomeNavProps) => {
  const childVar = {
    hidden: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
    },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div variants={childVar}>
      <Link
        href={link}
        className=" group px-3 py-6 text-sm text-textlight font-body font-medium cursor-pointer border border-bglight hover:border-bglighter rounded-md flex items-center justify-between"
      >
        <p className="group-hover:text-textlighter transition-all duration-200">
          {text}
        </p>
        <ChevronRight
          size={20}
          className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
        />
      </Link>
    </motion.div>
  );
};

export default HomeNav;
