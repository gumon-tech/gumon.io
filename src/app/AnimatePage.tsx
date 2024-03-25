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

export default function Home() {
  const [isClient, setIsClient] = useState(false);
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

  useEffect(() => {
    setIsClient(true);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //

  return (
    <main>
      {isClient && (
        <video
          autoPlay
          loop
          muted
          controlsList="nofullscreen"
          className="bg-video"
          playsInline
        >
          <source src={`bg/${luckyBgNumber}.mp4`} />
        </video>
      )}

      <div className="content flex justify-center items-center flex-col text-indigo-900">
        {isClient && !isReadyToPlay && (
          <a href="#" onClick={() => setReadyToPlay(true)}>
            <div className={`${pressStart2P.className} bubble shadow bottom`}>
              CLICK ME!
            </div>
            <div className="m-5"></div>
            <Image
              className="animate__animated animate__bounce animate__infinite	infinite animate__slow"
              src={`/logo/${luckyLogoNumber}.png`}
              width={200}
              height={200}
              alt="Picture of the GUMON"
            />
          </a>
        )}

        {isReadyToPlay && (
          <>
            <Image
              className="animate__animated animate__bounce animate__infinite	infinite animate__slow"
              src={`/logo/${luckyLogoNumber}.png`}
              width={200}
              height={200}
              alt="Picture of the GUMON"
            />
            <h2
              className={`${pressStart2P.className} bubble shadow top medium mb-10`}
            >
              {isComplete ? "WELCOME TO GUMON!" : "GUMON IS COMING SOON!"}
            </h2>

            <a href="#" onClick={() => setMuteTick(!isMuteTick)}>
              <FlipClockCountdown
                onTick={play}
                to={dayjs("2024-04-01 15:00:00.000+07:00")}
                onComplete={() => setComplete(true)}
                digitBlockStyle={digitBlockStyle}
              />
            </a>

            <audio id="a1">
              <source src="/sound/back-tick-107822.mp3" type="audio/mpeg" />
            </audio>
            <div className="mt-5">
              {isClient && (
                <ReactAudioPlayer
                  src={`/sound/bg-audio/${luckyBgAudioNumber}.mp3`}
                  autoPlay
                  controls
                  loop
                />
              )}
            </div>
            <a href="mailto:contact@gumon.io">
              <span className="mt-5 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                contact@gumon.io
              </span>
            </a>
          </>
        )}
      </div>
    </main>
  );
}
