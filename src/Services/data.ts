import { SiHomebridge } from 'react-icons/si';
import { BiSolidZap } from 'react-icons/bi';
import { FaFaceSmileBeam } from 'react-icons/fa6';
import { BiSolidMessageSquareEdit } from 'react-icons/bi';
import { projectType } from './Types';

const homeNavs = [
  {
    text: 'A. I heard you can build stunning  web Apps.',
    link: '/projects',
    id: '1',
  },
  {
    text: 'B. YONATANE!, Who?',
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
    title: 'BuySignal',
    type: 'Web Application',
    shortDescription:
      'boost conversions by showing urgency-driven popups through a simple website script',
    description:
      'BuySignal is a conversion-boosting tool that helps business owners increase sales by displaying smart popups on their websites. By injecting a simple script, it creates a sense of urgency through targeted messages, encouraging visitors to take action.',
    tools: [
      'Next.js 15',
      'React 19',
      'Typescript',
      'Tailwind',
      'Shadcn',
      'recharts',
      'React Hook Form',
      'zod',
    ],
    images: [
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-10.jpg?updatedAt=1753772240293',
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-26.jpg?updatedAt=1753772230332',
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-23.jpg?updatedAt=1753772230222',
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-20.jpg?updatedAt=1753772235111',
    ],
    profile:
      'https://ik.imagekit.io/6qizpphtd1/buysignal/photo_2025-06-30_09-29-10.jpg?updatedAt=1753772240293',
  },
  {
    title: 'Query.Design',
    type: 'Web Application',
    shortDescription:
      'lets users interact with their database using natural language and save queries as shareable, standalone pages.',
    description:
      'Query.Design is a developer tool that allows users to communicate with their database using natural language. It transforms plain English into structured queries and lets users save and share them as standalone, reusable pages—making data access faster and more intuitive.',
    tools: [
      'Next.js 15',
      'React 19',
      'Typescript',
      'Tailwind',
      'Shadcn',
      'chart.js',
      'React Hook Form',
      'zod',
    ],
    images: [
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-43.jpg?updatedAt=1753772323991',
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-39.jpg?updatedAt=1753772323258',
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-33.jpg?updatedAt=1753772322851',
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-37.jpg?updatedAt=1753772322453',
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-28.jpg?updatedAt=1753772322135',
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-31.jpg?updatedAt=1753772320928',
    ],
    profile:
      'https://ik.imagekit.io/6qizpphtd1/query.design/photo_2025-06-30_09-38-43.jpg?updatedAt=1753772323991',
  },
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
];

export { homeNavs, navs, tools, services, projects };
