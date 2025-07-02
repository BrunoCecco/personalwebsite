import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  mactutor,
  solana,
  bcb,
  expedia,
  cpp,
  python,
  java,
  firestore,
  unity,
  xchanted,
  daochat,
  motive,
  fpf,
  realms,
  next,
  graphql,
  cypress,
  abinitio,
  bodymax,
  fanzone,
  appstore
  // Add new image imports here if needed
} from '../assets';

export const navLinks = [
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  // {
  //   id: 'https://drive.google.com/file/d/1I-ePZ79czWXWo7lrJpt4-V4QAyx8OEn6/view',
  //   newTab: true,
  //   title: 'CV',
  // },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  { name: 'HTML 5', icon: html },
  { name: 'CSS 3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'React JS', icon: reactjs },
  { name: 'React Native', icon: reactjs },
  { name: 'Next.js', icon: next },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Node JS', icon: nodejs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Firestore', icon: firestore },
  { name: 'Java', icon: java },
  { name: 'Python', icon: python },
  { name: 'Git', icon: git },
  { name: 'GraphQL', icon: graphql },
  { name: 'Cypress', icon: cypress },
];

const experiences = [
  {
    title: 'Field Consultant',
    company_name: 'Ab Initio Software',
    icon: abinitio,
    iconBg: '#000000',
    date: 'August 2024 - Present',
    link: '',
    points: [
      'Leveraged proprietary data software to help customers with governance and processing.',
      'Led frontend development on a product used by multi-billion dollar clients.',
      'Built a simulated retail banking system for use in the company\'s AI demo.',
    ],
  },
  {
    title: 'Development Officer',
    company_name: 'MacTutor, University of St Andrews',
    icon: mactutor,
    iconBg: '#ffffff',
    date: 'February 2022 - March 2024',
    link: 'https://mathshistory.st-andrews.ac.uk/',
    points: [
      'Maintained and developed new features for MacTutor, accessed by over 1M monthly users.',
      'Built an authentication system with Flask & React to allow editorial contributions.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Expedia Group',
    icon: expedia,
    iconBg: 'blue',
    date: 'July 2023 - September 2023',
    link: 'https://www.expedia.com/',
    points: [
      'Implemented UI features across 3 travel brands using React, TypeScript, and GraphQL.',
      'Migrated testing from Jest to Cypress, improving test speed by 100x.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company_name: 'BCB Group',
    icon: bcb,
    iconBg: 'white',
    date: 'July 2022 - September 2022',
    link: 'https://www.bcbgroup.com/',
    points: [
      'Created and demoed a decentralized chat app to 20K+ people, including BCB\'s board.',
      'Built a pin & reorganize grid system used by 15K+ organizations.',
    ],
  },
];

const projects = [
  {
    name: 'Decoding Democracy',
    description:
      'Sentiment analysis and topic modeling on Scottish public consultations. Used deep learning and Python.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'sqlite', color: 'green-text-gradient' },
    ],
    image: fpf,
    source_code_link: '',
  },
  {
    name: 'Vycto',
    description:
      'Fanzone generation platform for sports competitions, built with Next.js and PostgreSQL.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'postgresql', color: 'green-text-gradient' },
      { name: 'aws', color: 'pink-text-gradient' },
    ],
    image: fanzone,
    links: [
      { name: 'Live Example', url: 'https://max-hart.vycto.com/' },
    ],
    source_code_link: '',
  },
  {
    name: 'Xchanted',
    description:
      'Web3 portfolio and social media site supporting Ethereum, Solana, and Binance chains. 1k users.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
    ],
    image: xchanted,
    links: [
      { name: 'Live App', url: 'https://www.xchanted.com/' },
    ],
    source_code_link: 'https://github.com/BrunoCecco/xchanted',
  },
  {
    name: 'Mobile AI Apps',
    description:
      'Published multiple AI-based mobile apps on iOS and Android with over 30k installs.',
    tags: [
      { name: 'react-native', color: 'blue-text-gradient' },
      { name: 'firebase', color: 'green-text-gradient' },
    ],
    image: appstore,
    links: [
      {
        name: 'App Store',
        url: 'https://apps.apple.com/us/developer/vertical-ventures-ltd/id1566738641',
      },
    ],
    source_code_link: '',
  },
  {
    name: 'DAO Chat',
    description:
      'Decentralized peer-to-peer messaging platform with blockchain wallet authentication.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwindcss', color: 'green-text-gradient' },
    ],
    image: daochat,
    links: [
      {
        name: 'Demo',
        url: 'https://www.youtube.com/watch?v=Z7ayg-v7euE',
      },
    ],
    source_code_link: 'https://github.com/devsalmon/dao-chat-app',
  },
];

export { services, technologies, experiences, projects };