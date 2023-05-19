/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';

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
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[300px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div
          className='bg-four relative shadow-lg shadow-slate-700 rounded-xl md:p-12 p-8 text-three flex flex-col md:gap-10 gap-4
        animate-fade-in-up'
        >
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
            I am a Software Engineer studying Computer Science at the{' '}
            <a
              href='https://news.st-andrews.ac.uk/archive/st-andrews-top-in-new-uk-ranking/'
              target='_blank'
              rel='noreferrer'
              className='decoration-solid underline hover:text-white transition-all duration-200'
            >
              University of St Andrews
            </a>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='flex items-center justify-center'>
            <div className='-rotate-[35deg]'>
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='w-8 h-8 border-r-2 transform -rotate-45 border-three'
              />
            </div>
            <div className='w-6 h-4'></div>
            <div className='rotate-[35deg]'>
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='w-8 h-8 border-l-2 transform rotate-45 border-three'
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
