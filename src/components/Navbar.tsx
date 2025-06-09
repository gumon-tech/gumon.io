"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // ใช้ไอคอนจาก lucide-react
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false); // <- เพิ่ม state สำหรับ shadow

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const headSection = document.querySelector("#head");
      if (headSection) {
        const rect = headSection.getBoundingClientRect();
        // ถ้า head ถึงหรือเลยขอบบนของ viewport (top <= 0)
        setHasShadow(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // เรียกทันทีในครั้งแรก

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#head", label: "Gumon" },
    { href: "#about", label: "About" },
    { href: "#mission", label: "Mission" },
    // { href: "#content", label: "เนื้อหา" },
    { href: "#innovation", label: "Innovation" },
    { href: "#team", label: "Team" },
  ];

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`bg-[#0886be] dark:bg-gray-800 ${
        hasShadow ? "shadow-md" : ""
      } sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div
          onClick={() => {
            const head = document.querySelector("#banner");
            if (head) head.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center space-x-4 cursor-pointer"
        >
          <Image
            src="/logo/4.png"
            alt="Gumon Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 invert brightness-0"
          />
          <div className="text-base sm:text-lg md:text-2xl font-bold text-white">
            Gumon Technology
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 space-y-2 bg-[#0886be] dark:bg-gray-800 overflow-hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block text-white text-left w-full hover:underline"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
