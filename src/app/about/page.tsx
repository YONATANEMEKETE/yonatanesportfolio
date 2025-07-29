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
                  src={'/profile-updated.jpg'}
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
                , a dedicated and growth-driven{' '}
                <span className="text-accent font-semibold">
                  Frontend Developer
                </span>{' '}
                with a sharp eye for detail and a passion for building elegant,
                high-performing web interfaces. I specialize in React.js and
                Next.js, crafting responsive, scalable, and accessible web
                applications that prioritize both user experience and
                performance.
              </motion.p>
              <motion.p variants={riseToTop}>
                I’m deeply committed to building the life I envision, which
                fuels my relentless curiosity and continuous learning. Whether
                it’s mastering new frontend technologies, exploring backend
                fundamentals, or refining my design intuition, I thrive on
                pushing my skills forward.
              </motion.p>
              <motion.p variants={riseToTop}>
                Outside of code, I’m an advocate for self-mastery. I read
                personal development books regularly and live by a disciplined,
                high-performance work ethic. I believe in staying sharp, working
                smart, and never settling and I try to bring that mindset into
                everything I do.
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
