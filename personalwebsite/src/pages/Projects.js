import daochat from '../images/daochat.png';

export default function Projects() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 px-10'>
      <div className='text-2xl font-bold'>Personal Projects</div>
      <div className='font-semibold'>
        Here are some of my favourite projects I've worked on in my spare time.
      </div>
      <div
        className='text-2xl font-bold  mt-10 flex gap-6 items-center'
        id='daochat'
      >
        <img src={daochat} alt='dao chat' className='w-16' />
        DAO CHAT
      </div>
      <div className='rounded-lg p-4 flex items-center justify-center gap-2 relative bg-four'>
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
      </div>
      <div
        className='text-2xl font-bold  mt-10 flex gap-6 items-center'
        id='xchanted'
      >
        {/* <img src={daochat} alt='dao chat' className='w-16' /> */}
        Xchanted
      </div>
      <div className='rounded-lg p-4 flex flex-col items-center justify-center gap-2 relative bg-four'>
        <a href='https://www.xchanted.com/'>SIGN UP</a>
        <div>
          (use code <span className='italic'>XCHANTED_OG_MEMBER_25</span>)
        </div>
      </div>
      <div
        className='text-2xl font-bold  mt-10 flex gap-6 items-center'
        id='motive'
      >
        {/* <img src={daochat} alt='dao chat' className='w-16' /> */}
        Motive
      </div>
      <div className='rounded-lg p-4 flex flex-col items-center justify-center gap-2 relative bg-four'>
        <a
          href='https://github.com/BrunoCecco/Motive-Party-App'
          target='_blank'
          rel='noreferrer'
        >
          Github repo
        </a>
      </div>
    </div>
  );
}
