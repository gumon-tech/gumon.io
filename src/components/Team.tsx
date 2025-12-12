"use client";
import { motion, Variants } from "motion/react";
import Image from "next/image";
// @ts-ignore
import { Textfit } from "react-textfit";
export default function Team() {
  // Team members data
  const teamMembers = {
    ceo: [
      {
        name: "Komphet Meesab",
        position: "Chief Executive Officer",
        image: "/images/team/komphet.jpg",
      },
    ],
    heads: [
      {
        name: "Komphet Meesab",
        position: "Chief Executive Officer",
        image: "/images/team/komphet.jpg",
      },
      {
        name: "Panitchai Chaenglek",
        position: "Head of Research and Development Division ",
        image: "/images/team/o.jpg",
      },
      {
        name: "Kritsada Suriyachan",
        position: "Head of Technology Solutions Division ",
        image: "/images/team/newDev.jpg",
      },
      // {
      //   name: "Patiparn Panmee",
      //   position: "Head of Digital and Technology Social Network Division",
      //   image: "/images/team/human.jpg",
      // },
      {
        name: "Niti Kosutao",
        position: "Backend Developer",
        image: "/images/team/drink.png",
      },
      {
        name: "Apirat Jamnongrat",
        position: "Frontend Developer",
        image: "/images/team/palm.jpg",
      },
      {
        name: "Pongsathon Tungkanakul",
        position: "Frontend Developer",
        image: "/images/team/peach.jpg",
      },
      {
        name: "Poomchanok Sangprasert",
        position: "Frontend Developer",
        image: "/images/team/Pea.jfif",
      },
      {
        name: "Sorawit Poemponsri",
        position: "UX/UI Designer",
        image: "/images/team/F.jpg",
      },
      {
        name: "Sittipong Sainum",
        position: "Digital and Technology Social Network Officer",
        image: "/images/team/ken.jpg",
      },
      {
        name: "Suvapat Pimklang",
        position: "Mobile Developer",
        image: "/images/team/Stamp.jpg",
      },
      {
        name: "Witsawachit Wangklang",
        position: "Project Manager",
        image: "/images/team/Mark.jpg",
      },
      {
        name: "Noppon Changchai",
        position: "Media Staff",
        image: "/images/team/Nop.jpg",
      },
      {
        name: "Pramin Wangwun",
        position: "Fullstack Developer",
        image: "/images/team/Owen.png",
      },
      {
        name: "Thanathorn Chulay",
        position: "Fullstack Developer",
        image: "/images/team/Petch.png",
      },
      {
        name: "Parichat Hongsa",
        position: "Fullstack Developer",
        image: "/images/team/Donut.png",
      },
      {
        name: "Irin Maysasittiroj",
        position: "Fullstack Developer",
        image: "/images/team/View.png",
      },
      {
        name: "Nuntakarn Paonariang",
        position: "Business Analyst",
        image: "/images/team/Pure.png",
      },
      {
        name: "Suriya Thanee",
        position: "Media Staff",
        image: "/images/team/Pjent.png",
      },
      {
        name: "Wichayoot  Wongsason",
        position: "Media Staff",
        image: "/images/team/Shi-ryu.jpg",
      },
    ],
  };

  // Animation variants for cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="team"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen sm:min-h-screen py-16 sm:py-20 text-center px-4 sm:px-6"
    >
      <div className="">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 sm:mb-16">
          Our Team
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {/* Heads and Staff Section (Right) */}
          <div className="lg:w-1/2 flex flex-col gap-8 justify-center lg:justify-start">
            {/* Heads Section (Right Top) */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center lg:place-items-start">
              {teamMembers.heads.map((member, index) => (
                <motion.div
                  key={member.name}
                  custom={index + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative h-72 sm:h-72 bg-white dark:bg-gray-800 shadow-md w-[55%] md:w-[100%] lg:w-[90%] "
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-[50%_40%]"
                  />

                  <div className="absolute bottom-0 left-0 right-0 px-6 py-2 text-center bg-[#0886be] h-[80px] md:h-[90px]">
                    <Textfit
                      mode="single"
                      max={18}
                      className="text-white font-semibold leading-tight"
                      style={{ height: "24px" }}
                    >
                      {member.name}
                    </Textfit>
                    <Textfit
                      mode="multi"
                      min={10}
                      max={16}
                      maxLines={2}
                      className="text-gray-200 leading-snug mt-1"
                      style={{ height: "40px" }}
                    >
                      {member.position}
                    </Textfit>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
