import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
