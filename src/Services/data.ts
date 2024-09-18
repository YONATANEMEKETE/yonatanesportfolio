import { SiHomebridge } from 'react-icons/si';
import { BiSolidZap } from 'react-icons/bi';
import { FaFaceSmileBeam } from 'react-icons/fa6';
import { BiSolidMessageSquareEdit } from 'react-icons/bi';

const homeNavs = [
  {
    text: 'A. I heard you can build stunning websites.',
    link: '/projects',
    id: '1',
  },
  {
    text: 'B. Yonatane!, Who?',
    link: '/about',
    id: '2',
  },
  {
    text: 'C. Never mind, just tell me about your project.',
    link: '/contact',
    id: '3',
  },
];

const navs = [
  {
    icon: SiHomebridge,
    link: '/',
    tooltip: 'Home',
  },
  {
    icon: BiSolidZap,
    link: '/projects',
    tooltip: 'Projects',
  },
  {
    icon: FaFaceSmileBeam,
    link: '/about',
    tooltip: 'About Me',
  },
  {
    icon: BiSolidMessageSquareEdit,
    link: '/contact',
    tooltip: 'Contact',
  },
];

export { homeNavs, navs };
