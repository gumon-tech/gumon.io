"use client";
import { motion } from "motion/react";
export default function Innovation() {
  return (
    <motion.section
      id="innovation"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 text-center px-4 flex items-center justify-center"
    >
      <div>
        <h2 className="text-3xl font-bold mb-10">Research and Development</h2>
        <div className="max-w-5xl mx-auto text-gray-600 dark:text-gray-300 text-lg space-y-4">
          <p>
            Gumon is an open-source tool designed to assist developers in making
            software development and application creation easier using
            Microservices. Microservice innovation reduces the complexity of
            development processes, increases productivity and efficiency, while
            maintaining the highest level of security. With Gumon, developers
            can easily manage and control their services, reducing development
            time and costs while maintaining the highest quality standards.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
