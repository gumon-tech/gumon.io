"use client";
import Image from "next/image";
import random from "random";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
const dayjs = require("dayjs");
import { useState, useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Press_Start_2P } from "next/font/google";
const pressStart2P = Press_Start_2P({ weight: "400", subsets: ["latin"] });
import "animate.css";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Head from "@/components/Head";
import About from "@/components/About";
import Content from "@/components/Content";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "motion/react";
import { AnimatePresence } from "motion/react";
import Mission from "@/components/Mission";
import Innovation from "@/components/Innovation";
import Team from "@/components/Team";
import Banner from "@/components/Banner";

const luckyBgNumber = random.int(1, 16);
const luckyBgAudioNumber = random.int(1, 10);

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return {
      width: 0,
      height: 0,
    };
  }
}
const sections = [
  "banner",
  "head",
  "about",
  "mission",
  "content",
  "innovation",
  "team",
];
export default function Home() {
  const [isClient, setIsClient] = useState(true);
  const [isComplete, setComplete] = useState(false);
  const [isReadyToPlay, setReadyToPlay] = useState(false);
  const luckyLogoNumber = random.int(1, 20);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [isMuteTick, setMuteTick] = useState(false);

  const [digitBlockStyle, setDigitBlockStyle] = useState({
    width: 46,
    height: 80,
    fontSize: 50,
  });

  function handleResize() {
    const currentWindowDimensions = getWindowDimensions();
    setWindowDimensions(currentWindowDimensions);

    if (currentWindowDimensions.width < 450) {
      setDigitBlockStyle({ width: 30, height: 50, fontSize: 20 });
    } else if (currentWindowDimensions.width < 500) {
      setDigitBlockStyle({ width: 40, height: 60, fontSize: 30 });
    } else {
      setDigitBlockStyle({ width: 44, height: 80, fontSize: 45 });
    }
  }

  const play = () => {
    if (isClient && !isMuteTick) {
      var audio: any = document.getElementById("a1");
      audio.play();
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  // useEffect(() => {
  //   setIsClient(true);

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   redirect("/profile/gumon-profile-2024-01.pdf");
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  //

  // const containerRef = useRef(null);
  // const [maxX, setMaxX] = useState(0);

  // // หาความกว้างหน้าจอ - ความกว้างของ bar (3 = 12px)
  // useEffect(() => {
  //   const update = () => setMaxX(window.innerWidth - 12);
  //   update();
  //   window.addEventListener("resize", update);
  //   return () => window.removeEventListener("resize", update);
  // }, []);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end end"],
  // });

  // // แปลง scrollYProgress เป็นค่าเลื่อนไปซ้าย-ขวา-ซ้าย
  // const x = useTransform(
  //   scrollYProgress,
  //   [0, 0.5, 0.5, 1, 1],
  //   [0, maxX, 0, maxX, 0]
  // );

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
          <Content />
          <Innovation />
          <Team />
        </div>

        {/* <Contact /> */}
        <Footer />
      </AnimatePresence>
    </main>
    // <main>
    //   {isClient && (
    //     <video
    //       autoPlay
    //       loop
    //       muted
    //       controlsList="nofullscreen"
    //       className="bg-video"
    //       playsInline
    //     >
    //       <source src={`bg/${luckyBgNumber}.mp4`} />
    //     </video>
    //   )}

    //   <div className="content flex justify-center items-center flex-col text-indigo-900">
    //     {isClient && !isReadyToPlay && (
    //       <a href="/profile/gumon-profile-2024-01.pdf">
    //         <div className={`${pressStart2P.className} bubble shadow bottom`}>
    //           CLICK ME!
    //         </div>
    //         <div className="m-5"></div>
    //         <Image
    //           className="animate__animated animate__bounce animate__infinite	infinite animate__slow"
    //           src={`/logo/${luckyLogoNumber}.png`}
    //           width={200}
    //           height={200}
    //           alt="Picture of the GUMON"
    //         />
    //       </a>
    //     )}

    //     {isReadyToPlay && (
    //       <>
    //         <Image
    //           className="animate__animated animate__bounce animate__infinite	infinite animate__slow"
    //           src={`/logo/${luckyLogoNumber}.png`}
    //           width={200}
    //           height={200}
    //           alt="Picture of the GUMON"
    //         />
    //         <h2
    //           className={`${pressStart2P.className} bubble shadow top medium mb-10`}
    //         >
    //           {isComplete ? "WELCOME TO GUMON!" : "GUMON IS COMING SOON!"}
    //         </h2>

    //         <a href="#" onClick={() => setMuteTick(!isMuteTick)}>
    //           <FlipClockCountdown
    //             onTick={play}
    //             to={dayjs("2024-04-01 15:00:00.000+07:00")}
    //             onComplete={() => setComplete(true)}
    //             digitBlockStyle={digitBlockStyle}
    //           />
    //         </a>

    //         <audio id="a1">
    //           <source src="/sound/back-tick-107822.mp3" type="audio/mpeg" />
    //         </audio>
    //         <div className="mt-5">
    //           {isClient && (
    //             <ReactAudioPlayer
    //               src={`/sound/bg-audio/${luckyBgAudioNumber}.mp3`}
    //               autoPlay
    //               controls
    //               loop
    //             />
    //           )}
    //         </div>
    //         <a href="mailto:contact@gumon.io">
    //           <span className="mt-5 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
    //             contact@gumon.io
    //           </span>
    //         </a>
    //       </>
    //     )}
    //   </div>
    // </main>
  );
}
