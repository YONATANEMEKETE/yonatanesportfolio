import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type HomeNavProps = {
  text: string;
  link: string;
};

const HomeNav = ({ text, link }: HomeNavProps) => {
  return (
    <Link
      href={link}
      className=" group px-3 py-6 text-sm text-textlight font-body font-medium cursor-pointer border border-bglight hover:border-bglighter rounded-md flex items-center justify-between"
    >
      <p className="group-hover:text-textlighter transition-all duration-200">
        {text}
      </p>
      <ChevronRight
        size={20}
        className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
      />
    </Link>
  );
};

export default HomeNav;
