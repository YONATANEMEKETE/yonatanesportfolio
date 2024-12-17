import { SiHomebridge } from 'react-icons/si';
import { BiSolidZap } from 'react-icons/bi';
import { FaFaceSmileBeam } from 'react-icons/fa6';
import { BiSolidMessageSquareEdit } from 'react-icons/bi';
import { projectType } from './Types';

const homeNavs = [
  {
    text: 'A. I heard you can build stunning websites and web Apps.',
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
  'Jest',
  'Cypress',
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

const projects: projectType[] = [
  {
    title: 'SnapBuild',
    type: 'Web Application',
    shortDescription: 'Project Management tool for Frontend Developer',
    description:
      'SnapBuild is a project management tool designed specifically for frontend developers. It provides a clear and organized roadmap to successfully build projects by streamlining planning, feature management, and execution. Whether you are defining goals, adding core features, breaking milestones, or visualizing the tech stack, SnapBuild ensures every step of the process is structured and manageable.',
    tools: [
      'Next.js 15',
      'React 19',
      'Typescript',
      'Tailwind',
      'Shadcn',
      'Pinata w3',
      'React Dropzone',
    ],
    github: 'https://github.com/YONATANEMEKETE/SnapBuild',
    live: 'https://snap-build.vercel.app/',
    images: [
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/753shots_so.png',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/767shots_so.png',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/699shots_so.png',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/598shots_so.png',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/174shots_so.png',
    ],
    profile: 'https://ik.imagekit.io/6qizpphtd1/Portfolio/753shots_so.png',
  },
  {
    title: 'QuickPrep',
    type: 'Web Application',
    shortDescription:
      'a web application for quick and easy study material preparation.',
    description:
      'QuickPrep is a web application designed to streamline the learning process. Users can upload PDF documents, and the platform generates concise notes and sample questions to help them prepare efficiently for their studies or work.',
    tools: [
      'Next.js',
      'React',
      'Typescript',
      'Tailwind',
      'Shadcn',
      'vercel Ai SDK',
      'Gemini AI',
    ],
    github: 'https://github.com/YONATANEMEKETE/quickprep',
    live: 'https://quickprepp.vercel.app/',
    images: [
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/316shots_so.png',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/619shots_so.png',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/737shots_so.png',
    ],
    profile: 'https://ik.imagekit.io/6qizpphtd1/Portfolio/316shots_so.png',
  },
  {
    title: 'TrackZ',
    type: 'Landing Page',
    shortDescription:
      'a customer Relationship managment(CRM) landing page website.',
    description:
      'CRM is software system that helps business owners easily track all communications and nurture relationships with their leads and clients. A CRM connects all the data from your sales leads and customers, all in one place. and I build the landing page for this software to attract more trafic to the the product. I built the landing Page in a way that it can be very convertable by considering SEO ranking and performance optimization. I have added modern animations and micro-interactions to improve user engagment using libraries like lenis scroll, React parallax and Framer motion.',
    tools: [
      'Next.js',
      'Tailwind',
      'Shadcn',
      'Lenis',
      'ReactParallax',
      'Typescript',
    ],
    github: 'https://github.com/YONATANEMEKETE/trackz-crm',
    live: 'https://trackz-crm.vercel.app',
    images: [
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro1image1.jpg',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro1image2.jpg',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro1image3.jpg',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro1image4.jpg',
    ],
    profile: 'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro1image1.jpg',
  },
  {
    title: 'Clause',
    type: 'Landing Page',
    shortDescription: 'a contract managment landing Page website',
    description:
      'Designed and developed a responsive, visually appealing landing page using React.js, Next.js ensuring optimal performance and accessibility. Implemented modern UI/UX principles to enhance user experience, integrating smooth animations, custom components, and clean, well-structured code. Focused on delivering a minimalist, mobile-first design with cross-browser compatibility and SEO optimization.',
    tools: [
      'Typescript',
      'Next.js',
      'React.js',
      'Tailwind',
      'Shadcn',
      'Zustand',
    ],
    github: 'https://github.com/YONATANEMEKETE/claude',
    live: 'https://clause.vercel.app/',
    images: [
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro3image1.png',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro3image2.jpg',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro3image3.jpg',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro3image4.jpg',
      'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro3image5.jpg',
    ],
    profile: 'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro3image1.png',
  },
];

export { homeNavs, navs, tools, services, projects };
