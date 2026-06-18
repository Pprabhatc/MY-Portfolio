import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GitHubStats from "./components/GitHubStats";
import Cert from "./components/Cert";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundGlow from "./components/BackgroundGlow";
import MouseGlow from "./components/MouseGlow";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-[#F5F1EA] dark:bg-black transition-all duration-500">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <MouseGlow />
        <BackgroundGlow />

        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubStats />
        <Cert />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;