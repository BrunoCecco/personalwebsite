import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Contact, Experience, Hero, Navbar, Tech, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-three'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {/* <About /> */}
        <Experience />
        <Tech />
        <Works />
        <Contact />
      </div>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
