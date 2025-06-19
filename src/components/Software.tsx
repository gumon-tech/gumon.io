"use client";
import { BoxIcon, Code, Lightbulb, Settings, Target } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
export default function Software() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.9],
    [0, 1, 1, 0]
  );
  return (
    <>
      <motion.section
        ref={ref}
        id="software"
        style={{ opacity: opacity }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column */}
          <div className="w-full md:w-1/2 text-left space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Software Developer Tools (CLI)
            </h3>
            <p className="text-base md:text-lg text-gray-600">
              Gumon CLI is an efficient tool for installing and managing
              services in the Gumon Ecosystem, designed to simplify the Gumon
              system development process.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Card 1 */}
              <div className="bg-gray-100 rounded-lg p-6 flex-1 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 mx-auto mb-4">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg text-center text-gray-800 mb-2">
                  Purpose
                </h4>
                <p className="text-base text-center text-gray-600">
                  To make the installation and management of the Gumon system
                  efficient and user-friendly.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-100 rounded-lg p-6 flex-1 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 mx-auto mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg text-center text-gray-800 mb-2">
                  Target Audience
                </h4>
                <p className="text-base text-center text-gray-600">
                  Software developers using Gumon principles in program
                  development and DevOps Engineers needing to install and manage
                  the Gumon Ecosystem.
                </p>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 text-left space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              The Capabilities of Gumon CLI
            </h2>
            <ul className="space-y-3 text-base text-gray-700">
              {[
                "Initiate ecosystem",
                "Configure Services",
                "List, Start, Restart, and Stop Services",
                "Add a new service (from the store) to the ecosystem and synchronize application data",
                "Remove a service from the ecosystem and reset application data",
                "Execute commands directly to a service",
                "Register custom or development services to the ecosystem manually",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-sky-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>
    </>
  );
}
