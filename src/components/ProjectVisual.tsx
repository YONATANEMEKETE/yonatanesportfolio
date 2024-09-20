'use client';

import { projectType } from '@/Services/Types';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function ImageSlide(props: { currentProject: projectType; current: number }) {
  return (
    <motion.div className="relative w-full h-[300px] bg-bg  rounded-xl cursor-pointer flex flex-nowrap">
      <Image
        src={props.currentProject.images[props.current]}
        alt={props.currentProject.title}
        fill
        priority
        className="object-cover rounded-xl"
      />
    </motion.div>
  );
}

const ProjectVisual = (props: { currentProject: projectType }) => {
  const [currentVisual, setCurrentVisual] = React.useState(0);

  const handleVisual = () => {
    setCurrentVisual((prev) =>
      prev === props.currentProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full px-4 relative overflow-clip">
      <ImageSlide
        current={currentVisual}
        currentProject={props.currentProject}
      ></ImageSlide>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 p-1 bg-bg/50 flex items-center gap-1 rounded-full">
        {props.currentProject.images.map((image, index) => (
          <div
            key={image}
            className={`size-3 ${
              currentVisual === index ? 'bg-bg' : 'bg-bg/60'
            } rounded-full cursor-pointer`}
          ></div>
        ))}
      </div>

      <div
        onClick={handleVisual}
        className="group absolute right-8 bottom-4 size-10 rounded-full bg-bg hover:bg-bg/90 cursor-pointer grid place-content-center transition-all duration-300"
      >
        <ChevronRight className="text-text group-hover:translate-x-[2px] transition-transform duration-300" />
      </div>
    </div>
  );
};

export default ProjectVisual;
