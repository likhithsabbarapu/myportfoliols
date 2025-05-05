import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-6 py-24 mt-24 max-w-3xl mx-auto text-center bg-white dark:bg-gray-950 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h3 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-10">
        Have a project in mind or just want to connect? Feel free to reach out!
      </p>

      {/* Contact Form */}
      <form className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* Divider */}
      <div className="my-10 border-t border-gray-200 dark:border-gray-700"></div>

      {/* Alternative Contact */}
      <p className="text-gray-500 dark:text-gray-400 mb-4">
        Or reach out directly via email: lsabbara@aum.edu
      </p>
      <a
        href="mailto:you@example.com"
        className="inline-block px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
      >
        Send Email
      </a>

      {/* Social Media Links */}
      <div className="mt-10 flex justify-center gap-6">
        <a
          href="https://github.com/likhithsabbarapu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition text-2xl"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/likhithsabbarapu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition text-2xl"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/IMlikhith"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition text-2xl"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </motion.section>
  );
}
