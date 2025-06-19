"use client";
import { BoxIcon, Lightbulb, Target } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
export default function Innovation() {
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
    <motion.section
      ref={ref}
      id="innovation"
      style={{ opacity: opacity }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-10 bg-white text-center px-4 flex flex-col"
    >
      {/* ส่วนหัว */}
      <div className="text-white max-w-5xl p-5 mx-auto text-center bg-[#0886be] bg-opacity-75">
        <h2 className="text-5xl font-bold mb-5">Research and Development</h2>
        <div className="max-w-5xl mx-auto text-lg space-y-4 text-justify">
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

      {/* กล่อง content */}
      <div className="flex-1 flex items-center justify-center px-4 mt-4 md:mt-0">
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full justify-center items-center md:items-start">
          {/* คอลัมน์ซ้าย */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {/* การ์ด 1 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
              <div className="bg-[#0886be] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl">
                <BoxIcon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
                Software must utilize a Microservice Architecture.
              </h3>
            </div>

            {/* การ์ด 2 */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
              <div className="bg-[#0886be] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl">
                <BoxIcon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
                Each service must be able to support multitasking across
                multiple apps simultaneously.
              </h3>
            </div>
          </div>

          {/* คอลัมน์ขวา */}
          <div className="w-full">
            <Image
              src="/images/mock/gumon_arc.png"
              alt="Technology Illustration"
              width={1500}
              height={1500}
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
