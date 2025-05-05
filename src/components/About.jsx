'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <motion.section
      id="about"
      className="px-6 py-20 max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/*  Introduction */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Hi, I'm Likhith Sabbarapu 
        
      </h1>
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Aspiring Full-Stack Developer 🚀</h2>
      <p className="text-gray-800 dark:text-gray-300 mb-8 leading-relaxed">
        Passionate about building responsive and scalable web applications using React, Node.js, Python, Java, C, and cloud technologies.
      </p>

      {/* Toggle Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => toggleSection('skills')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-2xl shadow-md transition-all"
        >
          Skills → 🛠️
        </button>
        <button
          onClick={() => toggleSection('education')}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl shadow-md transition-all"
        >
          Education → 🎓
        </button>

        <button
          onClick={() => toggleSection('work experience')}
          className="bg-orange-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-2xl shadow-md transition-all"
        >
          Work → 💼
        </button>

        <button
          onClick={() => toggleSection('funfacts')}
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-2xl shadow-md transition-all"
        >
          Fun Facts → 🎉
        </button>
      </div>

      {/* Conditional Sections */}
      {activeSection === 'skills' && (
        <motion.div
          className="text-left bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h4 className="text-xl font-semibold mb-2">Tech Stack :</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Front-end: React, Tailwind CSS, HTML/CSS, JavaScript</li>
            <li>Back-end: Node.js, Express</li>
            <li>Languages: Python, Java, C, C++</li>
            <li>Databases: MongoDB, PostgreSQL</li>
            <li>Cloud: AWS, Firebase</li>
          </ul>
        </motion.div>
      )}

      {activeSection === 'education' && (
        <motion.div
          className="text-left bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h4 className="text-xl font-semibold mb-2">Education :</h4>
          <ul className="list-disc list-inside space-y-1">
          <li>Bachelor's Degree in Electronics and Communication Engineering (ECE)</li>
          <li>Specialized experience in Software Engineering & Cloud Computing</li>
          <li>Master's Degree in Computer Science from Auburn University Montgomery</li>
          </ul>
        </motion.div>
      )}

{activeSection === 'work experience' && (
        <motion.div
          className="text-left bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h4 className="text-xl font-semibold mb-2">Tata Consultancy Services [TCS]</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Experience in Development, testing and maintaience</li>
            <li>Duration: 3 years</li>
            <li>Projects: Java, SAP, ERP systems</li>
            <li>Cloud: AWS, googleAPI</li>
          </ul>
        </motion.div>
      )}

      {activeSection === 'funfacts' && (
        <motion.div
          className="text-left bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h4 className="text-xl font-semibold mb-2">Fun Facts</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>I built my first game at 14 using Java!</li>
            <li>I drink more coffee than I probably should ☕</li>
            <li>I love debugging—it's like solving mini puzzles!</li>
          </ul>
        </motion.div>
      )}
    </motion.section>
  );
}
