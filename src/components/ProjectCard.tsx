'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { projectType } from '@/Services/Types';
import Link from 'next/link';

type projectProp = {
  project: projectType;
};

const ProjectCard = ({ project }: projectProp) => {
  const riseToTop = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <motion.div variants={riseToTop}>
      <Link
        href={`/projects/${project.title}`}
        className="group min-w-[280px] p-2 bg-bg hover:bg-bglight/20 border border-bglight rounded-xl hover:border-bglighter cursor-pointer flex flex-col min-[500px]:flex-row gap-4 relative"
      >
        <div className="relative overflow-clip min-[500px]:h-[110px] h-[110px] min-[500px]:w-[200px] w-[200px] rounded-xl">
          <Image
            src={project.profile}
            alt="project image"
            fill
            className="rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-bg/30"></div>
        </div>

        <div className="flex-1 flex flex-col items-start justify-between gap-y-4 min-[500px]:gap-y-0 py-2">
          <div className="space-y-1 ">
            <h2 className="text-text text-xl  font-body font-semibold">
              {project.title}
            </h2>
            <p className="text-textlight text-xs font-body font-semibold">
              {project.type}
            </p>
          </div>

          <p className=" text-textlighter text-xs font-body font-medium">
            {project.shortDescription}
          </p>
        </div>

        <ArrowUpRight className="absolute right-3 top-3 text-textlighter opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
