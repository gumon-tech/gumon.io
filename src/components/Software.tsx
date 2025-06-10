"use client";
import { BoxIcon, Code, Lightbulb, Settings, Target } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
export default function Software() {
  return (
    <>
      <motion.section
        id="software"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
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

      <motion.section
        id="software2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-12 text-center px-4 flex flex-col"
      >
        {/* ส่วนหัว */}
        <div className="flex w-full max-w-5xl mx-auto overflow-hidden shadow-lg">
          <div className="bg-[#2b2b2b] text-white p-6 flex-1">
            <h2 className="text-4xl font-bold mb-2 text-left">
              Gumon Core Set
            </h2>
            <p className="text-base leading-relaxed text-justify">
              The Gumon Core Set is a set of API Service Layer consisting of
              essential services for the system, with key functions that will be
              used across the entire system. It will be automatically installed
              in the Gumon Ecosystem when using Gumon CLI for installation.
            </p>
          </div>

          <div className="bg-[#0886be] flex items-center justify-center w-48">
            <Settings className="text-white w-24 h-24" />
          </div>
        </div>

        {/* กล่อง content */}
        <div className="flex-1 flex justify-center px-4 mt-4 md:mt-20">
          <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full justify-center items-center md:items-start">
            {/* คอลัมน์ซ้าย */}
            <div className="flex flex-col gap-6 w-full md:w-1/2 text-left">
              <h2 className="font-bold text-2xl mb-2">
                The list of services that are part of the Core Set includes
              </h2>
              {/* list */}
              <ul className="list-disc list-outside pl-6 space-y-2 text-base text-gray-700">
                <li>
                  <span className="font-bold">Core Service:</span> Manages
                  services, certificates, and credentials.
                </li>
                <li>
                  <span className="font-bold">Application Service:</span>{" "}
                  Manages applications and theming.
                </li>
                <li>
                  <span className="font-bold">Authentication Service:</span>{" "}
                  Manages user authentication and tokens.
                </li>
                <li>
                  <span className="font-bold">Access Control Service:</span>{" "}
                  Manages service permissions and user policies.
                </li>
                <li>
                  <span className="font-bold">Profile Service:</span> Manages
                  user information and sensitive data.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Unit Service:</span> Manages
                  organizations and business units.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Notification Service:</span>{" "}
                  Manages notification channels.
                </li>
                <li>
                  <span className="font-bold">Schedule Service:</span> Manages
                  schedules and executes tasks based on set dates and times.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Storage Service:</span> Manages
                  the file system.
                </li>
              </ul>
            </div>

            {/* คอลัมน์ขวา */}
            <div className="flex flex-col gap-6 w-full md:w-1/2 text-left">
              {/* Card 1 */}
              <div className="bg-gray-100 rounded-lg p-4 flex gap-6 items-start shadow-md">
                <div className="min-w-[40px]">
                  <Image
                    src="/images/icon-assets/process_speed.png"
                    alt="Application Layer"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Increase Development Process Speed by 50%
                  </h3>
                  <p className="text-base text-gray-700">
                    Since developing only the new front end part, the
                    development process speeds up significantly.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-100 rounded-lg p-4 flex gap-6 items-start shadow-md">
                <div className="min-w-[40px]">
                  <Image
                    src="/images/icon-assets/performance.png"
                    alt="API Service Layer"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Enhance Performance by 50%
                  </h3>
                  <p className="text-base text-gray-700">
                    Implementing this solution boosts software and hardware
                    performance, enhancing overall system efficiency and
                    responsiveness.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-100 rounded-lg p-4 flex gap-6 items-start shadow-md">
                <div className="min-w-[40px]">
                  <Image
                    src="/images/icon-assets/low_cost.png"
                    alt="Data Stream Layer"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Reduce Infrastructure Costs by 50%
                  </h3>
                  <p className="text-base text-gray-700">
                    Adopting this solution slashes expenses by optimizing
                    resource allocation, halving infrastructure costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
