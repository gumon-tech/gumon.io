"use client";
import { motion } from "motion/react";
export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 bg-white dark:bg-gray-900 text-center px-4 flex items-center justify-center"
    >
      <div>
        <h2 className="text-3xl font-bold mb-6">เกี่ยวกับเรา</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-4xl mx-auto">
          Gumon Technology คือผู้นำด้านการให้คำปรึกษาและพัฒนาเทคโนโลยีดิจิทัล
          ด้วยความเชี่ยวชาญในการวิจัยและ
          พัฒนาเครื่องมือที่ช่วยให้องค์กรลดต้นทุนและเวลาในการพัฒนา
          พร้อมสร้างระบบที่ปลอดภัยและยืดหยุ่นสูง
        </p>
      </div>
    </motion.section>
  );
}
