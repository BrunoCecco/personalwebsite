import daochat from '../images/daochat.jpg';
import xchanted from '../images/xchanted.svg';
import motive from '../images/motive.jpg';
import { useEffect, useRef } from 'react';

const Projects = () => {
  return (
    <div className='h-[75vh] w-[100vw]'>
      <div className='container mx-auto w-auto mt-20'>
        <input type='radio' name='slider' id='item-1' checked />
        <input type='radio' name='slider' id='item-2' />
        <input type='radio' name='slider' id='item-3' />
        <div className='cards'>
          <label className='card' for='item-1' id='song-1'>
            <div
              className='p-20 bg-two rounded-lg shadow-md flex items-center h-[300px] bg-no-repeat bg-center'
              style={{
                backgroundImage: `url(${daochat})`,
                backgroundSize: '50%',
              }}
            />
          </label>
          <label className='card' for='item-2' id='song-2'>
            <div
              className='p-4 bg-two rounded-lg shadow-md flex items-center h-[300px] bg-center bg-no-repeat'
              style={{
                backgroundImage: `url(${xchanted})`,
                backgroundSize: '50%',
              }}
            />
          </label>
          <label className='card' for='item-3' id='song-3'>
            <div
              className='p-20 bg-two rounded-lg shadow-md flex items-center h-[300px] bg-center bg-no-repeat'
              style={{
                backgroundImage: `url(${motive})`,
                backgroundSize: '50%',
              }}
            />
          </label>
        </div>
        <div className='player relative bg-four rounded-lg p-6'>
          <label className='song-info' id='song-info-1'>
            <div className='flex flex-col'>
              <div className='font-semibold'>
                DAO Chat is a decentralized messaging app build for a hackathon.
              </div>
              <a
                href='https://github.com/devsalmon/dao-chat-app'
                target='_blank'
                rel='noreferrer'
              >
                Github repo
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://docs.google.com/presentation/d/1Z52qJKRmhDV9yoaVSwETS_aWbLrpjB8pnRet353Z3Gw/edit#slide=id.g12556e177aa_0_6'
              >
                Presentation
              </a>
              <a
                href='https://dao-chat.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                Live app
              </a>
            </div>
          </label>
          <label className='song-info' id='song-info-2'>
            <a href='https://www.xchanted.com/'>SIGN UP</a>
            <div>
              (use code <span className='italic'>XCHANTED_OG_MEMBER_25</span>)
            </div>
          </label>
          <label className='song-info' id='song-info-3'>
            <a
              href='https://github.com/BrunoCecco/Motive-Party-App'
              target='_blank'
              rel='noreferrer'
            >
              Github repo
            </a>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Projects;
