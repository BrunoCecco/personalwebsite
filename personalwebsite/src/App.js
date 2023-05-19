import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import './App.css';
import Projects from './pages/Projects';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Outlet,
} from 'react-router-dom';
import { Main, Header, Links } from './Main';

function App() {
  return (
    <Router>
      <div className='App bg-neutral-300 min-h-[100vh]'>
        <Header />
        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/' exact component={Main} />
        </Switch>
        <footer className='w-full flex flex-wrap gap-8 text-left items-center justify-between py-2 bg-three md:px-40 px-10'>
          <div className='font-bold flex items-center gap-2 text-white'>
            <div className='text-3xl mt-3'>&copy;</div>
            <div className='text-xl'>Bruno Ceccolini</div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
