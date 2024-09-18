import React from 'react';
import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-4">
        <SocialIcon />
        <SocialIcon />
        <SocialIcon />
      </div>
    </div>
  );
};

export default Footer;
