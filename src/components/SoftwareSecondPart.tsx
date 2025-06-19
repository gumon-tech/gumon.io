"use client";
import { BoxIcon, Code, Lightbulb, Settings, Target } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
export default function SoftwareSecondPart() {
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
        id="software2"
        style={{ opacity: opacity }}
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
              <div className="bg-gray-100 rounded-lg p-4 flex gap-6 items-start shadow-md hover:shadow-xl transition-shadow duration-300">
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
              <div className="bg-gray-100 rounded-lg p-4 flex gap-6 items-start shadow-md hover:shadow-xl transition-shadow duration-300">
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
              <div className="bg-gray-100 rounded-lg p-4 flex gap-6 items-start shadow-md hover:shadow-xl transition-shadow duration-300">
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
