"use client";
import { motion } from "motion/react";
export default function Innovation() {
  return (
    <motion.section
      id="innovation"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800 text-center px-4 flex items-center justify-center"
    >
      <div>
        <h2 className="text-3xl font-bold mb-10">การวิจัยและนวัตกรรม</h2>
        <div className="max-w-5xl mx-auto text-gray-600 dark:text-gray-300 text-lg space-y-4">
          <p>
            ที่ Gumon Technology เราได้พัฒนาเครื่องมือโอเพนซอร์สที่ชื่อว่า{" "}
            <strong>Gumon CLI</strong>
            และระบบ <strong>Gumon Ecosystem</strong> ซึ่งช่วยให้การพัฒนา
            Software แบบ Microservice ง่ายและปลอดภัยขึ้น
          </p>
          <p>
            ระบบของเราช่วยลดต้นทุน โครงสร้างพื้นฐาน และเวลาในการพัฒนาได้มากถึง{" "}
            <strong>50%</strong>
            เหมาะกับทีม DevOps และ Software House ที่มีโครงการต่อเนื่อง
          </p>
        </div>
      </div>
    </motion.section>
  );
}
