import { ArrowDown, ArrowDownCircle } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Banner() {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end start"],
  // });

  // const leftX = useTransform(
  //   scrollYProgress,
  //   [0, 0.4, 0.6, 1],
  //   [-1000, 0, 0, -1000]
  // );
  // const rightX = useTransform(
  //   scrollYProgress,
  //   [0, 0.4, 0.6, 1],
  //   [1000, 0, 0, 1000]
  // );
  // const scale = useTransform(
  //   scrollYProgress,
  //   [0, 0.3, 0.6, 1],
  //   [100, 1, 1, 100]
  // );

  // return (
  //   <section
  //     ref={ref}
  //     id="banner"
  //     className="relative min-h-screen flex justify-center items-center overflow-hidden bg-[#0886be]"
  //   >
  //     {/* ม่านซ้าย */}
  //     <motion.div
  //       style={{ x: leftX }}
  //       className="absolute left-0 top-0 h-full w-1/2 bg-[#0886be] z-10"
  //     />
  //     {/* ม่านขวา */}
  //     <motion.div
  //       style={{ x: rightX }}
  //       className="absolute right-0 top-0 h-full w-1/2 bg-[#0886be] z-10"
  //     />

  //     {/* ตัวหนังสือ */}
  //     <motion.div
  //       style={{ scale }}
  //       className="relative z-20 text-white text-6xl sm:text-7xl md:text-9xl font-bold text-center"
  //     >
  //       GUMON TECHNOLOGY
  //     </motion.div>
  //   </section>
  // );

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Animation for text opacity and position
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Animation for background image scale
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Handle scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("head");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation for link
  const linkVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    tap: {
      scale: 0.9,
      y: 5,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };
  // Animation for arrow (continuous bounce)
  const arrowVariants = {
    animate: {
      y: [0, 5, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      id="banner"
      className="relative min-h-screen sm:min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:py-12"
    >
      {/* Background */}
      <motion.div
        // style={{ y: curtainY }}
        className="absolute inset-0 z-0 bg-[#0886be]"
      />

      {/* Content */}
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY,
          transition: "filter 1s ease",
        }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          GUMON TECHNOLOGY
        </h1>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
          We specialize in groundbreaking R&D and software consulting. Plus, we
          offer tailored training, seminars, and events to keep you ahead in the
          digital realm. Join us for innovation and insight that drives success.
        </p>
      </motion.div>

      {/* Scroll Down Link with Arrow */}
      <motion.a
        href="#contact"
        onClick={scrollToContact}
        variants={linkVariants}
        whileHover="hover"
        whileTap="tap"
        className="relative z-20 flex flex-col items-center justify-center w-24 sm:w-32 h-10 sm:h-12 text-white font-semibold duration-100 mt-72 sm:mt-72"
      >
        <span className="text-md sm:text-xl">Scroll Down</span>
        <motion.div variants={arrowVariants} animate="animate">
          <ArrowDownCircle
            className="w-6 sm:w-6 h-6 sm:h-6"
            color="white"
            strokeWidth={2}
          />
        </motion.div>
      </motion.a>
    </section>
  );
}
