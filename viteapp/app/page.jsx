import {
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "../src/components";

export default function Home() {
  return (
    <div className="relative z-0 bg-three">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      {/* <About /> */}
      <Experience />
      <Tech />
      <Works />
      {/* <Contact /> */}
    </div>
  );
}
