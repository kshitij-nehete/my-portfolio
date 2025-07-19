import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import ThemeToogle from "./components/ThemeToogle";

export default function App() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Certifications /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <ThemeToogle />
    </main>
  );
}
