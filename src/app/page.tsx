"use client";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "animate.css";
import Navbar from "@/components/Navbar";
import Head from "@/components/Head";
import About from "@/components/About";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import Mission from "@/components/Mission";
import Innovation from "@/components/Innovation";
import Team from "@/components/Team";
import Banner from "@/components/Banner";
import Software from "@/components/Software";
import Dks from "@/components/Dks";
import SoftwareSecondPart from "@/components/SoftwareSecondPart";
import DksSecondPart from "@/components/DksSecondPart";

export default function Home() {
  return (
    <main className=" dark:bg-gray-900 dark:text-white transition-colors duration-500 bg-white">
      <AnimatePresence mode="wait">
        <div className="relative">
          {/* Left Accent Bar */}

          <motion.div
            // style={{ x }}
            className="absolute top-0 left-0 w-3 h-full bg-[#0886be] z-30"
          />
          <motion.div
            // style={{ x }}
            className="absolute top-0 right-0 w-3 h-full bg-[#0886be] z-30"
          />

          <Navbar />
          <Banner />
          <Head />
          <About />
          <Mission />

          <Innovation />
          <Content />
          <Software />
          <SoftwareSecondPart />
          <Dks />
          <DksSecondPart />
          <Team />
        </div>

        {/* <Contact /> */}
        <Footer />
      </AnimatePresence>
    </main>
  );
}
