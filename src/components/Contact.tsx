"use client";
import { motion } from "motion/react";
export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">ติดต่อเรา</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          สนใจบริการของเรา? กรุณากรอกข้อมูลเพื่อให้ทีมของเราติดต่อกลับ
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="ชื่อของคุณ"
            className="w-full border p-3 rounded dark:bg-gray-800 dark:border-gray-700"
          />
          <input
            type="email"
            placeholder="อีเมล"
            className="w-full border p-3 rounded dark:bg-gray-800 dark:border-gray-700"
          />
          <textarea
            rows={4}
            placeholder="ข้อความ"
            className="w-full border p-3 rounded dark:bg-gray-800 dark:border-gray-700"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold"
          >
            ส่งข้อความ
          </button>
        </form>
      </div>
    </motion.section>
  );
}
