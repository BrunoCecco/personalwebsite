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
  fanzone,
  motive,
  fpf,
  realms,
  next,
  graphql,
  cypress,
  abinitio,
  bodymax,
  appstore,
  vycto,
  // unitygame,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "https://drive.google.com/file/d/1Q6erQ4AWp8EKqVWRK-bedr3hU8iWWXna/view",
    newTab: true,
    title: "CV",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Firestore",
    icon: firestore,
  },
  {
    name: "Unity",
    icon: unity,
  },
];

const experiences = [
  {
    title: "Field Consultant (Forward Deployed Engineer)",
    company_name: "Ab Initio Software",
    icon: abinitio,
    iconBg: "white",
    date: "August 2024 - October 2025",
    link: "https://www.abinitio.com/",
    points: [
      "Leveraged proprietary software products to help customers with data governance and processing.",
      "Led frontend development on a product used by several multi-billion dollar companies.",
      "Built a retail banking system with dummy data for the company's AI demo.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Expedia Group",
    icon: expedia,
    iconBg: "blue",
    date: "June 2023 - September 2023",
    link: "https://www.expedia.com/",
    points: [
      "Working with the Onboarding and Rewards team to maintain, improve and test their frontend components.",
      "Using Cypress to write end-to-end tests for the frontend components.",
      "Collaborating with the team to implement new UI features and fix bugs.",
      "Using GraphQL to fetch data from the backend.",
    ],
  },
  {
    title: "Development Officer",
    company_name: "MacTutor University of St Andrews",
    icon: mactutor,
    iconBg: "#ffffff",
    date: "February 2022 - June 2024",
    link: "https://mathshistory.st-andrews.ac.uk/",
    points: [
      "Providing maintenance and developing new features for the MacTutor website at St Andrews University.",
      "Developing a Shibboleth authentication system so that external editors can edit and make contributions.",
      "Implementing a TinyMCE editor to improve the editing process.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "BCB Group",
    icon: bcb,
    iconBg: "white",
    date: "July 2022 - September 2023",
    link: "https://www.bcbgroup.com/",
    points: [
      "Responsible for the development and upkeep of web applications using React.js and related technologies.",
      "Using Agile development to collaborate effectively with a team of developers, designers, and product managers.",
      "Implementing responsive design techniques to ensure optimal user experience across various devices and browsers.",
      "Actively participating in code reviews and offering valuable feedback to enhance the work of fellow developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Solana Labs",
    icon: solana,
    iconBg: "#E6DEDD",
    date: "September 2022 - December 2022",
    link: "https://solana.com/",
    points: [
      "Implementing new features to a DAO directory website with React.js and related technologies.",
      "Implementing responsive design techniques to ensure optimal user experience across various devices and browsers.",
      "Actively participating in code reviews and offering valuable feedback to enhance the work of fellow developers.",
    ],
  },
];

const projects = [
  {
    name: "Vycto Platforms",
    description:
      "Built an AI-powered, multi-tenant fanzone platform used by several major sports entities.",
    links: [
      {
        name: "Vycto Platforms",
        url: "https://vycto.com/",
      },
      {
        name: "Live Example",
        url: "https://ael.vycto.com/",
      },
    ],
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: fanzone,
  },
  {
    name: "AI Mobile Apps",
    description:
      "Published AI-powered fitness and lifestyle apps ammassing 40k+ users.",
    links: [
      {
        name: "App Store",
        url: "https://apps.apple.com/ve/developer/vertical-ventures-ltd/id1566738641",
      },
    ],
    tags: [
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "llms",
        color: "green-text-gradient",
      },
    ],
    image: appstore,
    source_code_link: "https://github.com/BrunoCecco/bodymax",
  },
  {
    name: "DAO Chat",
    description: "Decentralized messaging platform built for a hackathon.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: daochat,
    links: [
      {
        name: "Live App",
        url: "https://dao-chat.vercel.app/sign-up",
      },
    ],
    source_code_link: "https://github.com/devsalmon/dao-chat-app",
  },
  {
    name: "Realms",
    description:
      "Website containing a directory of DAOs on the Solana blockchain.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: realms,
    links: [
      {
        name: "Live App",
        url: "https://app.realms.today/realms",
      },
    ],
    source_code_link:
      "https://github.com/solana-labs/governance-ui/pulls?q=is%3Apr+author%3A%40me+is%3Aclosed",
  },
  {
    name: "Xchanted",
    description: "Web3 assets social media platform.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: xchanted,
    links: [
      {
        name: "Live App",
        url: "https://www.xchanted.com/",
      },
    ],
    source_code_link: "https://github.com/xchanted/xchanted",
  },
];

export { services, technologies, experiences, projects };
