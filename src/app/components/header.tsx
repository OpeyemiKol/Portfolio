"use client";

import { useState } from "react";
import { HiHome, HiUser, HiCode, HiFolder, HiMail } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex justify-between p-4 text-white 
  bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      {/* Left side */}
      <div className="font-vibes text-[30px] tracking-widest w-[40%]">
        Opeyemi
      </div>

      {/* Right side for Desktop nav */}
      <nav className="font-bellefair border border-gray-400 rounded-[20px] text-[16px] hidden w-[60%] md:flex justify-around">
        <a
          href="#home"
          className="flex items-center gap-2 hover:text-teal-400 transition"
        >
          <HiHome className="text-[18px] shrink-0" /> Home
        </a>

        <a
          href="#about"
          className="flex items-center gap-2 hover:text-teal-400 transition"
        >
          <HiUser className="text-[18px] shrink-0" /> About
        </a>

        <a
          href="#skills"
          className="flex items-center gap-2 hover:text-teal-400 transition"
        >
          <HiCode className="text-[24px] shrink-0" /> Skills
        </a>

        <a
          href="#projects"
          className="flex items-center gap-2 hover:text-teal-400 transition"
        >
          <HiFolder className="text-[20px] shrink-0" /> Projects
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 hover:text-teal-400 transition"
        >
          <HiMail className="text-[20px] shrink-0" /> Contact
        </a>
      </nav>

      {/* Mobile nav here */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      <nav
        className={`absolute top-20 right-0 w-1/2 text-[24px] font-bellefair
  border border-white/30
  bg-linear-to-b from-teal-800 to-teal-900
  flex flex-col text-left px-4 py-6
  rounded-xl shadow-2xl
  md:hidden
  transform transition-all duration-700 ease-in-out
  ${
    open
      ? "translate-y-0 opacity-100"
      : "-translate-y-full opacity-0 pointer-events-none"
  }`}
      >
        {[
          { href: "#home", label: "Home", icon: HiHome },
          { href: "#about", label: "About", icon: HiUser },
          { href: "#skills", label: "Skills", icon: HiCode },
          { href: "#projects", label: "Projects", icon: HiFolder },
          { href: "#contact", label: "Contact", icon: HiMail },
        ].map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3 py-3 px-2 rounded-lg
      hover:bg-white/10 transition-all duration-300"
          >
            <Icon className="text-xl shrink-0 group-hover:text-teal-300 transition" />
            <span className="tracking-wide group-hover:text-teal-300 transition">
              {label}
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
}
