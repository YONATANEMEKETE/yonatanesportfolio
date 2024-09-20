'use client';

import Wrapper from '@/components/Wrapper';
import { projects } from '@/Services/data';
import { projectType } from '@/Services/Types';
import React, { useEffect } from 'react';
import ProjectVisual from '@/components/ProjectVisual';
import Button from '@/components/Button';
import ContactLink from '@/components/ContactLink';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Project = ({ params }: { params: { pro: string } }) => {
  const currentProject =
    projects.find((project) => project.title === params.pro) || projects[1];
  const otherProjects = projects.filter(
    (project) => project !== currentProject
  );

  const riseToTop = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const riseStagger = {
    initial: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-bg pb-10">
      <Wrapper className="min-h-screen relative pt-16 space-y-32">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div
              variants={riseToTop}
              initial="initial"
              whileInView={'enter'}
              viewport={{ once: true }}
              className="w-full py-4 bg-bglight/20 rounded-xl border border-bglighter space-y-4"
            >
              <p className="text-text text-xl font-heading font-semibold px-6">
                Visuals
              </p>

              <ProjectVisual currentProject={currentProject} />
            </motion.div>

            <motion.div
              variants={riseStagger}
              initial="initial"
              whileInView="enter"
              viewport={{ once: true }}
              className="space-y-4 w-full"
            >
              <motion.h2
                variants={riseToTop}
                className="text-text text-2xl font-heading font-semibold underline decoration-accent decoration-wavy decoration-2 underline-offset-4"
              >
                {currentProject.title}
              </motion.h2>

              <motion.p
                variants={riseToTop}
                className="text-textlight min-[500px]:text-base text-sm font-body font-medium text-justify"
              >
                {currentProject.description}
              </motion.p>
            </motion.div>

            <motion.div
              variants={riseToTop}
              initial="initial"
              whileInView={'enter'}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-text text-xl font-body font-semibold">
                Skills and Tools
              </h2>

              <div className="flex flex-wrap items-center gap-4">
                {currentProject.tools.map((tool, index) => (
                  <Button text={tool} key={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={riseToTop}
              initial="initial"
              whileInView={'enter'}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-text text-xl font-body font-semibold">
                Links
              </h2>

              <motion.div
                variants={riseStagger}
                initial="initial"
                whileInView={'enter'}
                viewport={{ once: true }}
                className="flex flex-wrap items-center gap-4"
              >
                <Links text="Source Code" link={currentProject.github} />
                <Links text="Live Demo" link={currentProject.live} />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={riseToTop}
            initial="initial"
            whileInView={'enter'}
            viewport={{ once: true }}
            className="w-full space-y-8"
          >
            <h2 className="text-text text-2xl font-heading font-semibold">
              Other Projects
            </h2>

            <motion.div
              variants={riseStagger}
              initial="initial"
              whileInView={'enter'}
              viewport={{ once: true }}
              className="w-full space-y-4"
            >
              {otherProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        <Footer />
      </Wrapper>
    </div>
  );
};

export default Project;
type LinkType = {
  text: string;
  link: string;
};

const Links = ({ text, link }: LinkType = { text: '', link: '' }) => {
  const riseToTop = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <motion.a
      variants={riseToTop}
      href={link}
      target="_blank"
      className="px-4 py-2 rounded-md bg-bg  border border-bglighter hover:border-accent text-sm text-text font-body font-medium cursor-pointer"
    >
      {text}
    </motion.a>
  );
};
