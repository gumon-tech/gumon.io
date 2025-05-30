import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Head() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const xLeft = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-1000, 0, 0, -1000]
  );
  const xRight = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [1000, 0, 0, 1000]
  );

  return (
    <section
      ref={ref}
      id="head"
      className="relative bg-white text-black min-h-screen flex flex-col-reverse md:flex-row items-stretch overflow-hidden"
    >
      {/* Left Side (Content) */}
      <motion.div
        style={{ x: xLeft }}
        className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 text-center md:text-left z-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The Technology Provider
        </h1>
        <p className="text-lg mb-6">
          We specialize in groundbreaking R&D and software consulting. Plus, we
          offer tailored training, seminars, and events to keep you ahead in the
          digital realm. Join us for innovation and insight that drives success.
        </p>
      </motion.div>

      {/* Right Side (Image) - อยู่บนเมื่อเป็น mobile */}
      <motion.div
        style={{ x: xRight }}
        className="relative w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0886be] to-[#0886be] transform -skew-x-12 z-0" />
        <Image
          src="/hero-image.jpg"
          alt="Technology Illustration"
          fill
          className="object-cover mix-blend-overlay opacity-30 z-10"
        />
      </motion.div>
    </section>
  );
}
