"use client";
import { BoxIcon, Lightbulb, Target } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
export default function Content() {
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
      id="content"
      style={{ opacity: opacity }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-10 bg-white text-center px-4 flex flex-col"
    >
      {/* กล่อง content */}
      <div className="flex-1 flex items-center justify-center px-4 mt-4 md:mt-0">
        <div className="flex flex-col md:flex-row gap-28 max-w-6xl w-full justify-center items-center md:items-start">
          {/* คอลัมน์ซ้าย */}
          <div className="flex flex-col gap-6 w-full md:w-1/2 text-left">
            <h2 className="font-bold text-2xl mb-2">
              The Gumon Ecosystem is designed to be more user-friendly and
              efficient, divided into three main parts:
            </h2>

            {/* Card 1 */}
            <div className="bg-gray-100 rounded-lg p-4 flex gap-6 items-start shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="min-w-[40px]">
                <Image
                  src="/images/icon-assets/application.png"
                  alt="Application Layer"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Application Layer</h3>
                <p className="text-base text-gray-700">
                  This is the part that users directly interact with. It serves
                  as the interface for various screens, known as the front end.
                  Each application has its own front end for diversity and
                  flexibility.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-lg p-4 flex gap-6 items-start shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="min-w-[40px]">
                <Image
                  src="/images/icon-assets/api.png"
                  alt="API Service Layer"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">API Service Layer</h3>
                <p className="text-base text-gray-700">
                  This is the microservices part, following the principles of
                  the event-driven microservices architecture. New services can
                  be created without having to create them from scratch every
                  time a new application is developed, saving time and
                  development costs.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-lg p-4 flex gap-6 items-start shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="min-w-[40px]">
                <Image
                  src="/images/icon-assets/data_stream.png"
                  alt="Data Stream Layer"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Data Stream Layer</h3>
                <p className="text-base text-gray-700">
                  This part manages the sync data and events of the API Service
                  Layer, ensuring smooth operation and efficiency by adhering to
                  Gumon standards.
                </p>
              </div>
            </div>
          </div>

          {/* คอลัมน์ขวา */}
          <div className="w-full md:w-1/2 text-left flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Advantages of using Gumon</h3>
            {/* <p className="text-gray-700 text-base">
              With the Gumon Ecosystem, application development becomes easier
              and more efficient, allowing users to enhance their development
              and improve their products or services effectively while saving
              time and costs.
            </p> */}

            <div className="flex flex-col md:flex-row gap-6 ">
              {/* Card 1 */}
              <div className="bg-sky-600 text-white rounded-lg p-6 flex-1 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 mx-auto mb-4">
                  <Image
                    src="/images/icon-assets/savetime.png"
                    alt="Time-saving"
                    width={24}
                    height={24}
                    className="invert brightness-0"
                  />
                </div>
                <h4 className="font-bold text-lg text-center mb-2">
                  Time and cost-saving
                </h4>
                <p className="text-base text-center">
                  Efficient API development eliminates the need to create new
                  services every time a new application is developed, saving
                  both time and server usage costs.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-sky-600 text-white rounded-lg p-6 flex-1 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 mx-auto mb-4">
                  <Image
                    src="/images/icon-assets/trophy.png"
                    alt="Software House"
                    width={24}
                    height={24}
                    className="invert brightness-0"
                  />
                </div>
                <h4 className="font-bold text-lg text-center mb-2">
                  Suitable for Software House
                </h4>
                <p className="text-base text-center">
                  For teams receiving continuous projects, using Gumon helps to
                  continuously save costs without the need to redevelop
                  previously developed parts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
