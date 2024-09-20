'use client';

import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import React from 'react';
import profile from '../../../public/profile.webp';
import ContactLink from '@/components/ContactLink';
import { motion } from 'framer-motion';

const Contact = () => {
  const riseToTop = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };
  const dropToBottom = {
    initial: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-bg pb-20">
      <Wrapper className="relative min-h-screen pt-32 space-y-12">
        <motion.div
          variants={riseToTop}
          initial="initial"
          whileInView={'enter'}
          viewport={{ once: true }}
          className="space-y-3 w-full text-center px-4"
        >
          <h1 className="min-[500px]:text-3xl text-xl text-text font-body font-semibold">
            The Stage is Yours
          </h1>
          <p className="min-[500px]:text-base text-sm text-textlight font-body font-medium">
            I&apos;m always looking to collaborate on interesting projects with
            great people. Tell me about your project!
          </p>
        </motion.div>

        <motion.div
          variants={dropToBottom}
          initial="initial"
          whileInView={'enter'}
          viewport={{ once: true }}
          className="px-4 py-12 bg-bglight/10 border border-bglight rounded-xl flex flex-col items-center gap-8"
        >
          <div className="relative size-28 rounded-full overflow-clip cursor-pointer ring-2 ring-text ring-offset-4 ring-offset-bg">
            <Image
              src={profile}
              alt="profile"
              className="rounded-full object-cover object-center"
              fill
            />
          </div>

          <div className="space-y-1 text-center">
            <h2 className="text-xl text-text font-heading font-semibold">
              YONATANE.M
            </h2>
            <p className="text-base text-textlight font-body font-medium">
              Frontend Website Developer
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 justify-center w-full">
            <ContactLink
              text="LinkedIn"
              link="https://www.linkedin.com/in/yonatanemekete/"
            />
            <ContactLink
              text="Github"
              link="https://github.com/YONATANEMEKETE"
            />
            <ContactLink text="Telegram" link="https://t.me/YNTN737" />
          </div>
        </motion.div>
      </Wrapper>
    </div>
  );
};

export default Contact;
