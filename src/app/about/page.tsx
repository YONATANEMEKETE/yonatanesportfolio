import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import Wrapper from '@/components/Wrapper';
import { services, tools } from '@/Services/data';
import { LayoutGroup } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="bg-bg min-h-screen pb-20">
      <Wrapper className="relative min-h-screen pt-12 px-4">
        <div className="space-y-12">
          <div className="about-shadow w-full h-60 py-3 px-5 border border-bglight rounded-xl  flex items-end justify-between">
            <div className="relative h-full w-[150px] rounded-xl overflow-clip cursor-pointer">
              <Image
                src={'/profile.webp'}
                alt="profile"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="pb-10 pr-2 max-w-[200px] text-end">
              <p className="text-text text-2xl font-heading font-semibold">
                YONATANE MEKETE
              </p>
            </div>
          </div>

          <div className="text-textlight text-base text-justify font-body font-medium space-y-4 leading-relaxed">
            <p>
              Hi, I&apos;m{' '}
              <span className="underline decoration-accent decoration-wavy decoration-2 underline-offset-2">
                YONATANE MEKETE
              </span>
              , a passionate{' '}
              <span className="text-accent font-semibold">
                Frontend Developer
              </span>{' '}
              with a knack for creating sleek, intuitive, and user-friendly web
              interfaces. With expertise in React.js, I specialize in building
              modern, responsive websites that bring creative ideas to life. My
              goal is to combine clean design aesthetics with cutting-edge
              technology to deliver seamless user experiences.
            </p>
            <p>
              I am highly consumed in the thought of creating the life i want in
              the near future. so I am always learning{' '}
              <span className="text-accent font-semibold">new skills</span>, and
              improving the ones I've already have. I love reading personal
              development books, and i believe in a strict, productive work
              ethics.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-text text-xl font-body font-semibold">
              Skills and Tools
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              {tools.map((tool) => (
                <Button text={tool} key={tool} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-text text-xl font-body font-semibold">
              OnDemand Services
            </h2>
            <div className="space-y-4">
              <LayoutGroup>
                {services.map((service) => (
                  <ServiceCard
                    title={service.title}
                    brief={service.description}
                    key={service.id}
                  />
                ))}
              </LayoutGroup>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
