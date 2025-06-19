"use client";
import {
  BoxIcon,
  Lightbulb,
  Settings,
  Target,
  Rocket,
  Users,
  Code,
  BarChart,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function DksSecondPart() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.9],
    [0, 1, 1, 0]
  );
  return (
    <motion.section
      ref={ref}
      id="consulting-services"
      style={{ opacity: opacity }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 md:px-8 lg:px-16 bg-white"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-sky-600 text-white p-8 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technology Consulting Services
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            In addition to research, development, and technology dissemination,
            Gumon Technology also provides consultancy services to software
            houses or software developers who need advice on technology related
            to research and development trends in various industries. This helps
            software houses or developers efficiently utilize the company&apos;s
            tools by directly accessing end users&apos; research, enabling the
            technology solutions team to efficiently develop research based on
            user feedback and requirements.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              icon: <Lightbulb className="w-8 h-8 text-sky-600" />,
              text: "We help organizations and departments reduce costs, project durations, and human resources for each project with technology tools from our research.",
            },
            {
              icon: <Rocket className="w-8 h-8 text-sky-600" />,
              text: "We promote the development of technology in Thai society and internationally to accelerate technology development and make various ideas and concepts a reality.",
            },
            {
              icon: <Users className="w-8 h-8 text-sky-600" />,
              text: "We provide consulting services to users of our research-based tools to maximize their efficiency.",
            },
            {
              icon: <Code className="w-8 h-8 text-sky-600" />,
              text: "Software developers or software houses can contribute to the development of new features in research projects because the company has opened research projects as open-source.",
            },
            {
              icon: <BarChart className="w-8 h-8 text-sky-600" />,
              text: "Gumon Technology Limited's research focuses on advancing technology from existing technology, resulting in more efficient research.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="min-w-[40px]">{item.icon}</div>
              <p className="text-gray-700 text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
