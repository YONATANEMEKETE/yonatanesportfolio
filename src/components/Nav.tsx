import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavProps = {
  text: string;
  link: string;
  Icon: any;
};

const Nav = ({ text, Icon, link }: NavProps) => {
  return (
    <Link
      href={link}
      className="group relative size-10 bg-bg text-textlighter hover:text-text grid place-content-center rounded-xl transition-all duration-300"
    >
      <Icon size={20} className="peer" />
      <div
        className="absolute opacity-0 min-[600px]:left-[100%] -left-1/2  top-[110%] peer-hover:opacity-100 min-[600px]:peer-hover:left-[110%] min-[600px]:peer-hover:top-[100%] min-[600px]:top-1/2 transition-all duration-300
      min-[600px]:-translate-y-1/2   w-max px-2 py-1 text-base text-textlighter font-body font-semibold bg-bg border border-bglighter rounded-md"
      >
        {text}
      </div>
    </Link>
  );
};

export default Nav;
