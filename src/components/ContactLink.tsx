import React from 'react';

type linkProps = {
  text: string;
  link: string;
};

const ContactLink = ({ text, link }: linkProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="min-[500px]:py-4 py-2 text-center w-40 rounded-full bg-transparent border border-bglight hover:border-bglighter text-sm text-textlighter font-body font-semibold cursor-pointer"
    >
      {text}
    </a>
  );
};

export default ContactLink;
