import Wrapper from '@/components/Wrapper';
import { projects } from '@/Services/data';
import { projectType } from '@/Services/Types';
import React, { useEffect } from 'react';
import ProjectVisual from '@/components/ProjectVisual';

const Project = ({ params }: { params: { pro: string } }) => {
  const currentProject =
    projects.find((project) => project.title === params.pro) || projects[1];

  return (
    <div className="min-h-screen bg-bg pb-20">
      <Wrapper className="min-h-screen relative pt-16">
        <div className="w-full py-4 bg-bglight/20 rounded-xl border border-bglighter space-y-4">
          <p className="text-text text-xl font-heading font-semibold px-6">
            Visuals
          </p>

          <ProjectVisual currentProject={currentProject} />
        </div>
      </Wrapper>
    </div>
  );
};

export default Project;
