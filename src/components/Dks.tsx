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
import { motion } from "motion/react";
import Image from "next/image";

export default function Dks() {
  return (
    <div className="bg-gray-50">
      {/* Section 1: Technology Dissemination */}
      <motion.section
        id="technology-dissemination"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 ">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div className="bg-sky-600 text-white p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technology Dissemination
              </h2>
              <div className="text-base md:text-lg space-y-4 text-justify">
                <p>
                  Gumon Technology Co., Ltd. aims to connect various communities
                  both locally and internationally to create spaces for
                  exchanging ideas, sharing knowledge, stories, and experiences
                  related to digital and technological aspects, both online and
                  offline.
                </p>
                <p>
                  In addition, it supports learning and development of new
                  skills in digital and technology through organizing projects
                  or activities that help enhance skills and expertise, as well
                  as assisting in tool development based on company research.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            {[
              {
                icon: <BoxIcon className="w-10 h-10 text-sky-600" />,
                text: "DKS serves as a hub connecting digital and tech communities, facilitating collaboration through seminars and knowledge exchange activities.",
                image: "/images/icon-assets/application.png",
                alt: "Application Layer",
              },
              {
                icon: <Settings className="w-10 h-10 text-sky-600" />,
                text: "DKS utilizes online platforms for global idea exchange, knowledge sharing, and event announcements via its Facebook group and LINE chat.",
                image: "/images/icon-assets/api.png",
                alt: "API Service Layer",
              },
              {
                icon: <Target className="w-10 h-10 text-sky-600" />,
                text: "DKS organizes offline events to foster in-person knowledge exchange and networking, including meetings, seminars, and interactive activities.",
                image: "/images/icon-assets/data_stream.png",
                alt: "Data Stream Layer",
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-sky-600" />,
                text: "DKS offers training workshops and courses both independently and for organizations, aiming to enhance digital skills and technology usage efficiency.",
                image: "/images/icon-assets/data_stream.png",
                alt: "Training Layer",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-start hover:shadow-xl transition-shadow duration-300"
              >
                <div className="min-w-[40px]">{item.icon}</div>
                <div className="text-gray-700 text-base">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="consulting-services"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
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
              In addition to research, development, and technology
              dissemination, Gumon Technology also provides consultancy services
              to software houses or software developers who need advice on
              technology related to research and development trends in various
              industries. This helps software houses or developers efficiently
              utilize the company&apos;s tools by directly accessing end
              users&apos; research, enabling the technology solutions team to
              efficiently develop research based on user feedback and
              requirements.
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
    </div>
  );
}
