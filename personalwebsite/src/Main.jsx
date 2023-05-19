import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import './App.css';
import UniLogo from './images/st-andrews-logo.png';
import Logo from './images/logo.png';
// import Interests from './pages/Interests';
// import WorkExperience from './pages/WorkExperience';
// import University from './pages/University';
import Button from './components/Button';
import { useEffect, useState, useRef } from 'react';

function scrollTo(id) {
  window.scrollTo({
    top: document.getElementById(id).offsetTop,
    behavior: 'smooth',
  });
}

const Container = ({ label, links, bgColor, children }) => {
  return (
    <div
      className={`box h-full w-full duration-200 transition-all ease-in-out ${bgColor}`}
    >
      <div className='box-inner'>
        <div className='box-front rounded-xl flex items-center justify-center'>
          <div className='text-2xl font-bold'>{label}</div>
        </div>
        {!children ? (
          <div className='box-back rounded-xl overflow-hidden grid grid-cols-2 items-center justify-center gap-2'>
            {links &&
              Object.entries(links).map(([key, val], i) => (
                <a
                  key={i}
                  href={`/${val}`}
                  className='w-full h-full p-4 flex items-center justify-center duration-200 transition-all group cursor-pointer bg-five text-slate-800'
                >
                  <div className='font-bold text-xl group-hover:text-2xl duration-200 transition-all'>
                    {key}
                  </div>
                </a>
              ))}
          </div>
        ) : (
          <div className='box-back rounded-xl overflow-hidden flex items-center justify-center'>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

const Links = () => {
  return (
    <div className='flex flex-wrap items-center gap-6'>
      <a
        href='#workexperience'
        className='cursor-pointer hover:scale-110 duration-200 transition-all bg-neutral-300 rounded-md px-2 py-1'
      >
        Experience
      </a>
      <a
        href='projects'
        className='cursor-pointer hover:scale-110 duration-200 transition-all bg-neutral-300 rounded-md px-2 py-1'
      >
        Projects
      </a>
      <a
        href='#uni'
        className='cursor-pointer hover:scale-110 duration-200 transition-all bg-neutral-300 rounded-md px-2 py-1'
      >
        Uni
      </a>
      <a
        href='#interests'
        className='cursor-pointer hover:scale-110 duration-200 transition-all bg-neutral-300 rounded-md px-2 py-1'
      >
        Interests
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href='mailto: bruno.ceccolini@.com'
        className='cursor-pointer hover:scale-110 duration-200 transition-all bg-neutral-300 rounded-md px-2 py-1'
      >
        <HiOutlineMail className='text-3xl' />
      </a>
      <a
        href='https://www.linkedin.com/in/bruno-ceccolini/'
        target='_blank'
        rel='noreferrer'
        className='cursor-pointer hover:scale-110 duration-200 transition-all bg-neutral-300 rounded-md px-2 py-1'
      >
        <AiOutlineLinkedin className='text-3xl' />
      </a>
      <a
        href='https://www.github.com/BrunoCecco/'
        target='_blank'
        rel='noreferrer'
        className='cursor-pointer hover:scale-110 duration-200 transition-all bg-neutral-300 rounded-md px-2 py-1'
      >
        <AiOutlineGithub className='text-3xl' />
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <header className='w-full sticky top-0 z-50 backdrop-blur flex flex-wrap gap-8 text-left items-center justify-center lg:justify-between py-6 lg:px-20 px-10'>
      <div className='flex items-center gap-2 p-4 rounded-lg bg-three shadow-lg shadow-gray-600 font-medium'>
        <a className='text-xl text-white' href='/'>
          <span className='text-transparent bg-gradient-to-r from-green-600 via-gray-200 to-red-600 bg-clip-text mr-2'>
            BRUNO
          </span>
          CECCOLINI
        </a>
      </div>
      <Links />
    </header>
  );
};

const Hero = () => {
  const [greeting, setGreeting] = useState([
    'H',
    'e',
    'l',
    'l',
    'o',
    ',',
    ' ',
    'w',
    'o',
    'r',
    'l',
    'd',
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(
        greeting[0] === 'H'
          ? ['C', 'i', 'a', 'o', ',', ' ', 'm', 'o', 'n', 'd', 'o', ' ']
          : ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd']
      );
      greetingRef.current.classList.remove('animate-greeting');
      greetingRef.current.classList.add('animate-greeting');
    }, 3000);
    return () => clearInterval(interval);
  }, [greeting]);

  const greetingRef = useRef(null);

  return (
    <section
      id='hero'
      className='h-[100vh] md:p-20 p-10 flex flex-col gap-10 items-center justify-center relative'
    >
      <div className='bg-three relative shadow-lg shadow-slate-700 rounded-xl md:p-20 p-10 text-four flex flex-col md:gap-10 gap-4'>
        <h1
          className='text-4xl md:text-6xl lg:text-8xl text-center animate-greeting'
          ref={greetingRef}
        >
          {greeting &&
            greeting.map((letter, i) => (
              <span key={i} className='mr-4'>
                {letter}
              </span>
            ))}
        </h1>
        <div className='text-xl md:text-4xl text-center'>
          I'm a computer science student at the{' '}
          <a
            href='https://www.st-andrews.ac.uk/'
            target='_blank'
            rel='noreferrer'
            className='decoration-solid underline hover:text-neutral-300 transition-all duration-200'
          >
            University of St Andrews
          </a>
        </div>
      </div>
      <Button onClick={() => scrollTo('info')} label={'Tell me more'} />
    </section>
  );
};

const Info = () => {
  return (
    <section id='info' className='h-64 md:p-40 p-10 bg-three relative'>
      <div className='w-full h-full relative grid lg:grid-cols-2 grid-cols-1 itesms-center justify-center gap-6'>
        {/* <Container
            label='Personal Projects'
            bgColor='bg-slate-700'
            links={{
              'Dao Chat': '#daochat',
              Xchanted: '#xchanted',
              Motive: '#motive',
              // Solswap: '#solswap',
            }}
          ></Container> */}
        <Container
          label='Work Experience'
          links={{
            'Solana Labs': '#solanalabs',
            'BCB Group': '#bcbgroup',
            MacTutor: '#mactutor',
            Expedia: '#expedia',
          }}
        ></Container>
        <Container
          label='Interests'
          links={{
            Blockchain: '#blockchain',
            DAOs: '#daos',
            'Web Development': '#webdev',
            Sports: '#sports',
          }}
        ></Container>
        {/* <Container label='University'>
            <img
              className='w-auto h-full bg-neutral-300'
              src={UniLogo}
              alt='St Andrews Logo'
            />
          </Container> */}
      </div>
    </section>
  );
};

const Main = () => {
  return (
    <main>
      <Hero />
      <Info />
      {/* <section
            id='workexperience'
            className='h-[100vh] md:p-40 p-10 relative'
          >
            <WorkExperience />
          </section>
          <section id='interests' className='h-[100vh] md:p-40 p-10 relative'>
            <Interests />
          </section>
          <section id='uni' className='h-[100vh] md:p-40 p-10 relative'>
            <University />
          </section> */}
      <section
        id='website-info'
        className='h-[100vh] md:p-40 p-10 flex flex-col gap-10 items-center text-4xl justify-center relative'
      >
        <div className='font-bold'>How was this website built?</div>
        <div>- React JS - Tailwind CSS -</div>
      </section>
    </main>
  );
};

export { Header, Main, Links };
