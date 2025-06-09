"use client";
import { BoxIcon, Lightbulb, Target } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
export default function Software() {
  return (
    <motion.section
      id="software"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-10 bg-gray-200 text-center px-4 flex flex-col"
    >
      {/* กล่อง content */}
      <div className="flex-1 flex items-center justify-center px-4 mt-4 md:mt-0">
        <div className="flex flex-col md:flex-row gap-28 max-w-6xl w-full justify-center items-center md:items-start">
          {/* คอลัมน์ขวา */}
          <div className="w-full md:w-1/2 text-left flex flex-col gap-4">
            <h3 className="text-2xl font-bold">
              Software Developer Tools (CLI)
            </h3>
            {/* <p className="text-base">
             Gumon CLI is an efficient tool for installing and managing services in the Gumon Ecosystem, 
            designed to simplify the Gumon system development process.  
            </p> */}

            <div className="flex flex-col md:flex-row gap-6">
              {/* Card 1 */}
              <div className="bg-gray-300 rounded-lg p-6 flex-1 shadow-md">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 mx-auto mb-4">
                  {/* <Image
                    src="/images/icon-assets/savetime.png"
                    alt="Time-saving"
                    width={24}
                    height={24}
                    className="invert brightness-0"
                  /> */}

                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg text-center mb-2">Purpose</h4>
                <p className="text-base text-center">
                  To make the installation and management of the Gumon system
                  efficient and user-friendly.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-300 rounded-lg p-6 flex-1 shadow-md">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 mx-auto mb-4">
                  {/* <Image
                    src="/images/icon-assets/trophy.png"
                    alt="Software House"
                    width={24}
                    height={24}
                    className="invert brightness-0"
                  /> */}

                  <Target className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-lg text-center mb-2">
                  Target Audience
                </h4>
                <p className="text-base text-center">
                  Software developers using Gumon principles in program
                  development and DevOps Engineers needing to install and manage
                  the Gumon Ecosystem.
                </p>
              </div>
            </div>
          </div>
          {/* คอลัมน์ขวา */}
          <div className="flex flex-col gap-6 w-full md:w-1/2 text-left">
            <h2 className="font-bold text-2xl mb-2">
              The capabilities of Gumon CLI include
            </h2>
            {/* list */}
            <ul className="list-disc list-outside pl-6 space-y-2 text-base text-gray-700">
              <li>Initiate ecosystem</li>
              <li>Configure Services</li>
              <li>List, Start, Restart, and Stop Services</li>
              <li>
                Add a new service (from the store) to the ecosystem and
                synchronize application data
              </li>
              <li>
                Remove a service from the ecosystem and reset application data
              </li>
              <li>Execute commands directly to a service</li>
              <li>
                Register custom or development services to the ecosystem
                manually
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
