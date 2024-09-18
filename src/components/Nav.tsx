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
        className="absolute opacity-0 left-[100%] peer-hover:opacity-100 peer-hover:left-[110%] top-1/2 transition-all duration-300
      -translate-y-1/2 w-max px-2 py-1 text-base text-textlighter font-body font-semibold bg-bg border border-bglighter rounded-md"
      >
        {text}
      </div>
    </Link>
  );
};

export default Nav;
