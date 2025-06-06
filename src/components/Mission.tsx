"use client";
import { Lightbulb, MessageSquare, Target } from "lucide-react";
import { motion } from "motion/react";
export default function Mission() {
  return (
    <motion.section
      id="mission"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 bg-white dark:bg-gray-900 text-center px-4 flex flex-col items-center justify-center"
    >
      {/* ส่วนข้อความนำเข้า */}
      <div className="max-w-4xl mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black dark:text-white">
          Mission & Vision
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-2xl leading-relaxed">
          To be a provider of up-to-date digital technology knowledge and tools
          that help reduce costs and development time in order to increase the
          growth of technology and introduce new innovations with globally
          developed technology created by Thai experts.
        </p>
      </div>

      {/* การ์ดข้อมูล 3 ใบ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* การ์ด 1 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
          <div className="bg-[#0886be] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl">
            <Lightbulb className="w-7 h-7" />
          </div>
          <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
            R&amp;D
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Develop research to reduce the time and costs of development.
          </p>
        </div>

        {/* การ์ด 2 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
          <div className="bg-[#0886be] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl">
            <Target className="w-7 h-7" />
          </div>
          <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
            Increase Success
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Increase the success rate of technology projects by using
            research-based technology.
          </p>
        </div>

        {/* การ์ด 3 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
          <div className="bg-[#0886be] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl">
            <MessageSquare className="w-7 h-7" />
          </div>
          <h3 className="font-semibold text-lg text-black dark:text-white mb-2">
            Community
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Connect with communities both locally and internationally to create
            a space for exchanging knowledge in technology and digital fields.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
