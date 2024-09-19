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

const tools = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind.css',
  'Sass',
  'Shadcn UI',
  'Framer Motion',
  'Zustand',
  'Vercel',
  'Git',
  'GitHub',
];

const services = [
  {
    id: 1,
    title: 'Website design and development',
    description:
      'Creating responsive, dynamic, and interactive websites tailored to the clients needs using HTML, CSS, JavaScript, and frameworks like React.js.',
  },
  {
    id: 2,
    title: 'UI/UX Design Implementation',
    description:
      'Turning design mockups (from tools like Figma, Adobe XD, or Sketch) into pixel-perfect, functional web interfaces.',
  },
  {
    id: 3,
    title: 'Performance Optimization',
    description:
      'Reducing load times by optimizing code, images, and scripts to improve user experience and SEO.',
  },
  {
    id: 4,
    title: 'API Integration',
    description:
      'Connecting the frontend with backend services and APIs for dynamic content loading and real-time data updates.',
  },
  {
    id: 5,
    title: 'Web Animations & Micro-Interactions',
    description:
      'Adding animations and micro-interactions to improve user engagement using CSS animations or JavaScript libraries like Framer Motion or GSAP.',
  },
  {
    id: 6,
    title: 'Maintenance & Support',
    description:
      'Offering updates, security checks, and feature enhancements to keep websites running smoothly.',
  },
 
];

export { homeNavs, navs, tools, services };
