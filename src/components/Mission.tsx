"use client";
import { motion } from "motion/react";
export default function Mission() {
  return (
    <motion.section
      id="mission"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 bg-white dark:bg-gray-900 text-center px-4 flex items-center justify-center"
    >
      <div>
        <h2 className="text-3xl font-bold mb-6">พันธกิจและวิสัยทัศน์</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-4xl mx-auto">
          เรามุ่งมั่นที่จะเป็นผู้ให้บริการความรู้และเครื่องมือทางเทคโนโลยีดิจิทัลที่ทันสมัย
          ช่วยลดต้นทุนและระยะเวลาในการพัฒนา เพื่อขับเคลื่อนการเติบโตของเทคโนโลยี
          และนำนวัตกรรมใหม่เข้าสู่ตลาดโลกโดยผู้เชี่ยวชาญชาวไทย
        </p>{" "}
      </div>
    </motion.section>
  );
}
