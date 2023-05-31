import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';

const Tech = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className={styles.sectionHeadText}>Tech Skills.</p>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          <div
            className='flex flex-col items-center gap-2'
            key={technology.name}
          >
            <div className='w-20 h-20'>
              <img
                className='rounded-full bg-white p-4 flex items-center justify-center w-full h-full'
                src={technology.icon}
                alt={technology.name}
              />
            </div>
            <div className='text-center text-white mt-2'>{technology.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, '');
