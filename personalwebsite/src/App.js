import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import "./App.css";
import UniLogo from "./images/st-andrews-logo.png";
import Projects from "./Projects";
import Interests from "./Interests";
import WorkExperience from "./WorkExperience";
import University from "./University";

function Container({ label, links, bgColor, children }) {
  return (
    <div
      class={`box h-full w-full duration-200 transition-all ease-in-out ${bgColor}`}
    >
      <div class="box-inner">
        <div class="box-front rounded-xl flex items-center justify-center">
          <div className="text-2xl font-bold">{label}</div>
        </div>
        {!children ? (
          <div class="box-back rounded-xl overflow-hidden grid grid-cols-2 items-center justify-center gap-2">
            {links &&
              Object.entries(links).map(([key, val], i) => (
                <a
                  href={`/${val}`}
                  className="w-full h-full flex items-center justify-center duration-200 transition-all group cursor-pointer bg-neutral-300 text-slate-800"
                >
                  <div className="font-bold text-xl group-hover:text-2xl duration-200 transition-all">
                    {key}
                  </div>
                </a>
              ))}
          </div>
        ) : (
          <div className="box-back rounded-xl overflow-hidden flex items-center justify-center">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="flex items-center gap-8">
      <a
        href="mailto: bruno.ceccolini@.com"
        className="cursor-pointer hover:scale-110 duration-200 transition-all"
      >
        <HiOutlineMail className="text-4xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/bruno-ceccolini/"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer hover:scale-110 duration-200 transition-all"
      >
        <AiOutlineLinkedin className="text-4xl" />
      </a>
      <a
        href="https://www.instagram.com/brunoceccolini_/"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer hover:scale-110 duration-200 transition-all"
      >
        <AiOutlineInstagram className="text-4xl" />
      </a>
      <a
        href="https://www.github.com/BrunoCecco/"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer hover:scale-110 duration-200 transition-all"
      >
        <AiOutlineGithub className="text-4xl" />
      </a>
    </div>
  );
}

function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-teal-400 text-slate-700 font-bold py-2 px-4 rounded-md shadow-md group hover:scale-105 transition-all duration-200"
    >
      {label}
    </button>
  );
}

function App() {
  function scrollTo(id) {
    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div className="App bg-neutral-300">
      <header className="w-full flex flex-wrap gap-8 text-left items-center justify-between py-6 bg-teal-400 md:px-40 px-10 text-slate-700">
        <div className="font-extrabold text-4xl">BRUNO CECCOLINI</div>
        <Links />
      </header>
      <main>
        <section
          id="hero"
          className="h-[100vh] md:p-40 p-10 flex flex-col gap-10 items-center justify-center relative"
        >
          <div className="bg-slate-700 relative shadow-lg shadow-slate-700 rounded-xl md:p-20 p-10 text-orange-200 flex flex-col md:gap-10 gap-4">
            <div className="text-4xl md:text-6xl lg:text-8xl text-center">
              HELLO, WORLD
            </div>
            <div className="text-xl md:text-4xl text-center">
              I'm a computer science student at the{" "}
              <a
                href="https://www.st-andrews.ac.uk/"
                target="_blank"
                rel="noreferrer"
                className="decoration-solid underline hover:text-neutral-300 transition-all duration-200"
              >
                University of St Andrews
              </a>
            </div>
          </div>
          <Button onClick={() => scrollTo("info")} label={"About Me"} />
        </section>
        <section
          id="info"
          className="h-[100vh] md:p-40 p-10 bg-slate-800 relative"
        >
          <div className="w-full h-full relative grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-6">
            <Container
              label="Projects"
              bgColor="bg-slate-700"
              links={{
                "Dao Chat": "#daochat",
                Xchanted: "#xchanted",
                Motive: "#motive",
                Solswap: "#solswap",
              }}
            ></Container>
            <Container
              label="Work Experience"
              links={{
                "Solana Labs": "#solanalabs",
                "BCB Group": "#bcbgroup",
                MacTutor: "#mactutor",
                "Eunoia Ventures": "#eunoia",
              }}
            ></Container>
            <Container
              label="Interests"
              links={{
                Blockchain: "#blockchain",
                DAOs: "#daos",
                "Web Development": "#webdev",
                Sports: "#sports",
              }}
            ></Container>
            <Container label="University">
              <img
                className="w-full h-full bg-neutral-300"
                src={UniLogo}
                alt="St Andrews Logo"
              />
            </Container>
          </div>
        </section>
        {/* <section id="projects" className="h-[100vh] md:p-40 p-10 relative">
          <Projects />
        </section>
        <section
          id="work experience"
          className="h-[100vh] md:p-40 p-10 relative"
        >
          <WorkExperience />
        </section>
        <section id="interests" className="h-[100vh] md:p-40 p-10 relative">
          <Interests />
        </section>
        <section id="uni" className="h-[100vh] md:p-40 p-10 relative">
          <University />
        </section> */}
        <section
          id="website-info"
          className="h-[100vh] md:p-40 p-10 flex flex-col gap-10 items-center text-4xl justify-center relative"
        >
          <div className="font-bold">How was this website built?</div>
          <div>- React JS - Tailwind CSS - Github Pages -</div>
        </section>
      </main>
      <footer className="flex flex-wrap gap-8 text-left items-center justify-between py-6 bg-teal-400 md:px-40 px-10 text-slate-700">
        <div className="text-xl font-bold">&copy; Bruno Ceccolini</div>
        <Links />
      </footer>
    </div>
  );
}

export default App;
