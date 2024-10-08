import React from 'react';
import SocialIcon from './SocialIcon';
import { FaTelegramPlane, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <SocialIcon
          icon={<FaLinkedinIn size={20} />}
          link="https://www.linkedin.com/in/yonatanemekete/"
        />
        <SocialIcon
          icon={<FaTelegramPlane size={20} />}
          link="https://t.me/YNTN737"
        />
        <SocialIcon
          icon={<FaGithub size={20} />}
          link="https://github.com/YONATANEMEKETE"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-textlight text-lg font-body">
          Thanks for Stopping by.
        </p>
        <p className="text-sm text-textlighter font-body font-medium">
          &copy;Yonatane.M. All Rights Reserved {new Date().getFullYear()}.
        </p>
      </div>
    </div>
  );
};

export default Footer;
