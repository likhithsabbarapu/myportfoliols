import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative bg-white/60 dark:bg-gray-950/60 backdrop-blur-md text-gray-700 dark:text-gray-300 py-10 border-t border-gray-200 dark:border-gray-800 shadow-inner mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold">MyPortfolio</span>. All rights reserved.
        </p>

        <div className="flex gap-6 text-xl">
          <motion.a
            href="https://github.com/likhithsabbarapu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/likhithsabbarapu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://twitter.com/IMlikhith"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="hover:text-blue-500 dark:hover:text-blue-400 transition"
          >
            <FaTwitter />
          </motion.a>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to Top"
        className="absolute right-6 bottom-6 p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-600 dark:hover:bg-blue-700 transition shadow-lg"
      >
        ↑
      </motion.button>
    </footer>
  );
}

export default Footer;
