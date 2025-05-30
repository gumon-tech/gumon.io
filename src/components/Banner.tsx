import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Banner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // curtainLeft เลื่อนไปทางซ้าย, curtainRight ไปทางขวา
  const leftX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-1000, 0, 0, -1000]
  );
  const rightX = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [1000, 0, 0, 1000]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [100, 1, 1, 100] // เริ่มใหญ่ -> ปกติ -> ปกติ -> ใหญ่อีกครั้ง
  );
  return (
    <section
      ref={ref}
      id="banner"
      className="relative min-h-screen flex justify-center items-center overflow-hidden"
    >
      {/* ม่านซ้าย */}
      <motion.div
        style={{ x: leftX }}
        className="absolute left-0 top-0 h-full w-1/2 bg-[#0886be] z-10"
      />

      {/* ม่านขวา */}
      <motion.div
        style={{ x: rightX }}
        className="absolute right-0 top-0 h-full w-1/2 bg-[#0886be] z-10"
      />
      <motion.div
        style={{ scale }}
        className="relative z-20 text-white text-5xl font-bold"
      >
        Gumon
      </motion.div>
    </section>
  );
}
