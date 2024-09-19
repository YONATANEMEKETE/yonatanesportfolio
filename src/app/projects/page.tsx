'use client';

import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import Wrapper from '@/components/Wrapper';
import { projects } from '@/Services/data';
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const riseStagger = {
    initial: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-bg pb-20">
      <Wrapper className="relative min-h-screen pt-32 px-4 space-y-32">
        <motion.div
          variants={riseStagger}
          initial="initial"
          whileInView={'enter'}
          viewport={{ once: true }}
          className="w-full space-y-4"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        <Footer />
      </Wrapper>
    </div>
  );
};

export default Projects;
