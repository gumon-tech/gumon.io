"use client";
import { motion } from "motion/react";
export default function Team() {
  return (
    <motion.section
      id="team"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 bg-white dark:bg-gray-900 text-center px-4 flex items-center justify-center"
    >
      <div>
        <h2 className="text-3xl font-bold mb-10">ทีมผู้เชี่ยวชาญของเรา</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          <div>
            <h3 className="text-xl font-semibold text-blue-600">
              Komphet Meesab
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Chief Executive Officer
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">
              Panitchai Chaenglek
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              หัวหน้าฝ่ายวิจัยและพัฒนา
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">
              Kritsada Suriyachan
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              หัวหน้าฝ่าย Technology Solutions
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600">
              Patiparn Panmee
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              หัวหน้าฝ่าย Digital & Tech Community
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
