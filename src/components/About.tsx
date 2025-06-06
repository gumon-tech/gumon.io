"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);

  return (
    <motion.section
      ref={ref}
      id="about"
      style={{ opacity, y }}
      className="relative min-h-screen py-20 bg-white dark:bg-gray-900 text-center px-6 md:px-12 flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow Circle */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#0886be] opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl z-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black dark:text-white">
          Who We Are?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-2xl leading-relaxed">
          At{" "}
          <span className="text-[#0886be] font-semibold">Gumon Technology</span>
          , we are a team of passionate innovators driven by a singular vision:
          to redefine the landscape of digital technology. We are more than just
          a company; we are a collective force dedicated to pushing the
          boundaries of what&apos;s possible.
        </p>
      </motion.div>

      {/* Right Gradient Fade */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-10" />
    </motion.section>
  );
}
