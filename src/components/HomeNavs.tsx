'use client';

import React from 'react';
import HomeNav from '@/components/HomeNav';
import { homeNavs } from '@/Services/data';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';

const HomeNavs = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      className="w-full max-w-[500px] flex flex-col gap-6"
    >
      {homeNavs.map((nav) => (
        <HomeNav text={nav.text} link={nav.link} key={nav.id} />
      ))}
    </motion.div>
  );
};

export default HomeNavs;
