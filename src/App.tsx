import { useEffect, useState } from "react";
import { CustomCursor } from "./components/common/CustomCursor";
import { Loader } from "./components/common/Loader";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Testimonials } from "./components/sections/Testimonials";
import { useReducedMotion } from "./hooks/useReducedMotion";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoaded(true), reduced ? 150 : 1500);
    return () => window.clearTimeout(timeout);
  }, [reduced]);

  return (
    <>
      <Loader done={loaded} />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
