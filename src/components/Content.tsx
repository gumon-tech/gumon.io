"use client";
import { motion } from "motion/react";
export default function Content() {
  return (
    <motion.section
      id="content"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 text-center px-4 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold mb-10">บริการของเรา</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg">
          <h3 className="font-semibold text-xl mb-2 text-blue-600">
            Gumon Ecosystem
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            ระบบพัฒนาซอฟต์แวร์แบบ Microservice ที่ยืดหยุ่นและปลอดภัย
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg">
          <h3 className="font-semibold text-xl mb-2 text-blue-600">
            Gumon CLI Tool
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            เครื่องมือสำหรับจัดการระบบและบริการแบบอัตโนมัติ
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg">
          <h3 className="font-semibold text-xl mb-2 text-blue-600">
            ที่ปรึกษาด้านเทคโนโลยี
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            ช่วยวางแผนและปรับใช้เทคโนโลยีให้เหมาะสมกับองค์กรของคุณ
          </p>
        </div>
      </div>
    </motion.section>
  );
}
