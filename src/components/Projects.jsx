import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "FrontEnd all tasks.",
    link: " https://likhithsabbarapu.github.io/main"
  },
  {
    title: "Project Two",
    description: "Python working projects Repo",
    link: "https://github.com/likhithsabbarapu/ls_repo_g24"
  },
  {
    title: "Project Three",
    description: "Working progress",
    link: "#"
  },
  {
    title: "Project Four",
    description: "Working progress",
    link: "#"
  },
  {
    title: "Project Five",
    description: "Working progress",
    link: "#"
  },
  {
    title: "Project Six",
    description: "Working progress",
    link: "#"
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-10">
          PROJECTS
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
