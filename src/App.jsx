import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
