"use client";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative bg-[#2d2d2d] dark:bg-gray-800 text-white min-h-96 overflow-hidden flex flex-col justify-end px-4 pb-10">
      {/* Animated Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex justify-center items-center"
      >
        <h1 className="text-[100px] md:text-[160px] font-extrabold text-white pointer-events-none select-none z-0 leading-none">
          GUMON TECHNOLOGY
        </h1>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center space-y-2">
        <div className="text-lg">Contact: contact@gumon.io</div>
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Gumon Technology Co., Ltd. สงวนลิขสิทธิ์
        </div>
      </div>
    </footer>
  );
}
