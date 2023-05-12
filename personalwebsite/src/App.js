import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import './App.css';
import UniLogo from './images/st-andrews-logo.png';
import Logo from './images/logo.png';
import Projects from './pages/Projects';
import Interests from './pages/Interests';
import WorkExperience from './pages/WorkExperience';
import University from './pages/University';
import Button from './components/Button';
import { useEffect, useState, useRef } from 'react';

function scrollTo(id) {
  window.scrollTo({
    top: document.getElementById(id).offsetTop,
    behavior: 'smooth',
  });
}

function Container({ label, links, bgColor, children }) {
  return (
    <div
      class={`box h-full w-full duration-200 transition-all ease-in-out ${bgColor}`}
    >
      <div class='box-inner'>
        <div class='box-front rounded-xl flex items-center justify-center'>
          <div className='text-2xl font-bold'>{label}</div>
        </div>
        {!children ? (
          <div class='box-back rounded-xl overflow-hidden grid grid-cols-2 items-center justify-center gap-2'>
            {links &&
              Object.entries(links).map(([key, val], i) => (
                <a
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
}

function Links() {
  return (
    <div className='flex flex-wrap items-center gap-8 text-white'>
      <a
        href='#workexperience'
        className='cursor-pointer hover:scale-110 duration-200 transition-all'
      >
        Experience
      </a>
      <a
        href='#projects'
        className='cursor-pointer hover:scale-110 duration-200 transition-all'
      >
        Projects
      </a>
      <a
        href='#uni'
        className='cursor-pointer hover:scale-110 duration-200 transition-all'
      >
        Uni
      </a>
      <a
        href='#interests'
        className='cursor-pointer hover:scale-110 duration-200 transition-all'
      >
        Interests
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href='mailto: bruno.ceccolini@.com'
        className='cursor-pointer hover:scale-110 duration-200 transition-all'
      >
        <HiOutlineMail className='text-3xl' />
      </a>
      <a
        href='https://www.linkedin.com/in/bruno-ceccolini/'
        target='_blank'
        rel='noreferrer'
        className='cursor-pointer hover:scale-110 duration-200 transition-all'
      >
        <AiOutlineLinkedin className='text-3xl' />
      </a>
      <a
        href='https://www.instagram.com/brunoceccolini_/'
        target='_blank'
        rel='noreferrer'
        className='cursor-pointer hover:scale-110 duration-200 transition-all'
      >
        <AiOutlineInstagram className='text-3xl' />
      </a>
      <a
        href='https://www.github.com/BrunoCecco/'
        target='_blank'
        rel='noreferrer'
        className='cursor-pointer hover:scale-110 duration-200 transition-all'
      >
        <AiOutlineGithub className='text-3xl' />
      </a>
    </div>
  );
}

function Header() {
  return (
    <header className='w-full flex flex-wrap gap-8 text-left items-center lg:justify-between justify-center py-6 bg-three lg:px-20 px-10'>
      <div className='flex items-center gap-2 p-4 rounded-lg bg-white font-medium'>
        <div className='text-xl text-green-500'>BRUNO</div>
        <img src={Logo} alt='Logo' className='w-8' />
        <div className='text-xl'>
          <span className='text-red-500'>CEC</span>
          <span className='text-red-500'>COL</span>
          <span className='text-red-500'>INI</span>
        </div>
      </div>
      <Links />
    </header>
  );
}

function Hero() {
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
            greeting.map((letter) => <span className='mr-4'>{letter}</span>)}
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
      <Button onClick={() => scrollTo('info')} label={'About Me'} />
    </section>
  );
}

function Info() {
  return (
    <section id='info' className='h-[100vh] md:p-40 p-10 bg-three relative'>
      <div className='w-full h-full relative grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-6'>
        <Container
          label='Personal Projects'
          bgColor='bg-slate-700'
          links={{
            'Dao Chat': '#daochat',
            Xchanted: '#xchanted',
            Motive: '#motive',
            // Solswap: '#solswap',
          }}
        ></Container>
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
        <Container label='University'>
          <img
            className='w-auto h-full bg-neutral-300'
            src={UniLogo}
            alt='St Andrews Logo'
          />
        </Container>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className='App bg-neutral-300'>
      <Header />
      <main>
        <Hero />
        <Info />
        <section id='projects' className='h-[100vh] md:p-40 p-10 relative'>
          <Projects />
        </section>
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
      <footer className='flex flex-wrap gap-8 text-left items-center justify-between py-6 bg-three md:px-40 px-10 text-white'>
        <div className='text-xl font-bold'>&copy; Bruno Ceccolini</div>
        <Links />
      </footer>
    </div>
  );
}

export default App;
