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

const projects = [
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
    images: [],
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
    images: [],
    profile: 'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro3image1.png',
  },
  {
    title: 'SpacePark',
    type: 'SocialMedia UI',
    shortDescription: 'simple Social Media UI/UX',
    description:
      'SpacePark is an illustration of what a real life Social media experiance would feel like. I built the frontend Part of the project mainly focusing on the User Interface and User Experiance. if there was a backend or some database this is how it would look like and the UI is fully responsive and compatabile with most website browsers.',
    tools: ['Typescript', 'Next.js', 'React.js', 'Tailwind', 'Shadcn'],
    github: 'https://github.com/YONATANEMEKETE/spacepark',
    live: 'https://spaceparkkk.vercel.app/',
    images: [],
    profile: 'https://ik.imagekit.io/6qizpphtd1/Portfolio/pro2image1.png',
  },
];

export { homeNavs, navs, tools, services, projects };
