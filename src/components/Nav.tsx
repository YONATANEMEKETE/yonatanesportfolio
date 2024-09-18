import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const Nav = () => {
  return (
    <Link
      href={''}
      className="group relative size-10 bg-bg text-textlighter hover:text-text grid place-content-center rounded-xl transition-all duration-300"
    >
      <FaLinkedinIn size={20} className="peer" />
      <div
        className="absolute opacity-0 left-[100%] peer-hover:opacity-100 peer-hover:left-[110%] top-1/2 transition-all duration-300
      -translate-y-1/2 px-2 py-1 text-base text-textlighter font-body font-semibold bg-bg border border-bglighter rounded-md"
      >
        Home
      </div>
    </Link>
  );
};

export default Nav;
