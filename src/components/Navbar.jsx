'use client';
import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import ResumePDF from '../assets/RESUME.pdf';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Apply dark mode class to <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Highlight active nav link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.clientHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.name);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-white dark:bg-gray-950 shadow-md px-6 py-4 flex justify-between items-center transition duration-300"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a
        href="#"
        className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white font-poppins"
      >
        @LikhithSabbarapu
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`relative transition group ${
              activeSection === link.name
                ? "text-blue-500 font-semibold"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {link.name}
            <span className="block h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full absolute bottom-0 left-0"></span>
          </a>
        ))}
        <a
          href={ResumePDF}
          download="LikhithSabbarapu_Resume.pdf"
          className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          <FaDownload className="text-sm" />
          Resume
        </a>
        {/* <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button> */}
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center gap-4">
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button> */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700 dark:text-gray-300"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-950 px-6 py-6 flex flex-col gap-5 md:hidden shadow-xl z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href={ResumePDF}
            download="LikhithSabbarapu_Resume.pdf"
            className="flex items-center gap-2 justify-center px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
}
