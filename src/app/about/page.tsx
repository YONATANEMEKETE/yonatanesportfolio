'use client';

import Button from '@/components/Button';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import Wrapper from '@/components/Wrapper';
import { services, tools } from '@/Services/data';
import { LayoutGroup } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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

  const riseStaggerFast = {
    initial: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  return (
    <div className="bg-bg min-h-screen pb-20">
      <Wrapper className="relative min-h-screen pt-12 px-4">
        <div className="space-y-28">
          <div className="space-y-12">
            <motion.div
              variants={riseToTop}
              initial="initial"
              whileInView={'enter'}
              viewport={{ once: true }}
              className="about-shadow w-full min-[500px]:h-60 h-40 py-3 px-5 border border-bglight rounded-xl  flex items-end justify-between"
            >
              <div className="relative h-full min-[500px]:w-[150px] w-[100px] rounded-xl overflow-clip cursor-pointer">
                <Image
                  src={'/profile.webp'}
                  alt="profile"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="pb-10 pr-2 min-[500px]:max-w-[200px] max-w-[120px] text-end">
                <p className="text-text min-[500px]:text-2xl text-lg font-heading font-semibold">
                  YONATANE MEKETE
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={riseStagger}
              initial="initial"
              whileInView={'enter'}
              viewport={{ once: true }}
              className="text-textlight min-[500px]:text-base text-xs text-justify font-body font-medium space-y-4 leading-relaxed"
            >
              <motion.p variants={riseToTop}>
                Hi, I&apos;m{' '}
                <span className="underline decoration-accent decoration-wavy decoration-2 underline-offset-2">
                  YONATANE MEKETE
                </span>
                , a passionate{' '}
                <span className="text-accent font-semibold">
                  Frontend Developer
                </span>{' '}
                with a knack for creating sleek, intuitive, and user-friendly
                web interfaces. With expertise in React.js, I specialize in
                building modern, responsive websites that bring creative ideas
                to life. My goal is to combine clean design aesthetics with
                cutting-edge technology to deliver seamless user experiences.
              </motion.p>
              <motion.p variants={riseToTop}>
                I am highly consumed in the thought of creating the life i want
                in the near future. so I am always learning{' '}
                <span className="text-accent font-semibold">new skills</span>,
                and improving the ones I&apos;ve already have. I love reading
                personal development books, and i believe in a strict,
                productive work ethics.
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
              <motion.div
                variants={riseStaggerFast}
                initial="initial"
                whileInView={'enter'}
                viewport={{ once: true }}
                className="flex flex-wrap items-center gap-4"
              >
                {tools.map((tool) => (
                  <Button text={tool} key={tool} />
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={riseToTop}
              initial="initial"
              whileInView={'enter'}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-text text-xl font-body font-semibold">
                OnDemand Services
              </h2>
              <motion.div
                variants={riseStagger}
                initial="initial"
                whileInView={'enter'}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <LayoutGroup>
                  {services.map((service) => (
                    <ServiceCard
                      title={service.title}
                      brief={service.description}
                      key={service.id}
                    />
                  ))}
                </LayoutGroup>
              </motion.div>
            </motion.div>
          </div>

          <Footer />
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
