import React from 'react';

type SocialProps = {
  icon: React.ReactNode | any;
  link: string;
};

const SocialIcon = ({ icon, link }: SocialProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="size-10 bg-bg text-sm text-textlighter hover:text-text font-body font-thin border border-bglight hover:border-accent rounded-md cursor-pointer grid place-content-center transition-all duration-200"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
