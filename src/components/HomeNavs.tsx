'use client';

import React from 'react';
import HomeNav from '@/components/HomeNav';
import { homeNavs } from '@/Services/data';
import { motion } from 'framer-motion';

const HomeNavs = () => {
  const parentVar = {
    hidden: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.5, ease: 'easeOut', duration: 1 },
    },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={parentVar}
      className="w-full max-w-[500px] flex flex-col gap-6"
    >
      {homeNavs.map((nav) => (
        <HomeNav text={nav.text} link={nav.link} key={nav.id} />
      ))}
    </motion.div>
  );
};

export default HomeNavs;
