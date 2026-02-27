"use client";

import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="w-8/10 mt-10 xl:mt-20 flex flex-col justify-center items-center gap-5 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative border-4 border-teal-400 px-6 py-4 font-vibes 
            rounded-3xl text-white text-[16px] lg:text-2xl tracking-widest
            bg-linear-to-r from-gray-900 via-teal-900 to-gray-800 
            shadow-xl hover:shadow-2xl animate-bounce transition-shadow duration-500"
        >
          <FaStar className="inline mb-3 lg:mb-1 mr-3 text-yellow-400 text-[22px] animate-spin drop-shadow-lg" />
          Welcome to My Portfolio
          <span
            className="absolute inset-0 rounded-3xl bg-linear-to-r from-transparent via-white/10 to-transparent 
              animate-shimmer"
          ></span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl lg:text-4xl font-bold text-gray-400"
        >
          <span className="font-bellefair text-teal-400 tracking-widest text-5xl lg:text-6xl font-bold">
            Building Interfaces
          </span>{" "}
          with Code &{" "}
          <span className="font-bellefair text-teal-400 tracking-widest text-5xl lg:text-6xl font-bold">
            Creativity
          </span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-[18px] font-barlow tracking-widest max-w-3xl"
        >
          I’m a <span className="font-bold">frontend engineer</span> focused on
          crafting intuitive digital experiences while continuously improving my
          skills and mindset.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row items-center gap-7 mt-5"
        >
          <Link href="#contact">
            <button
              className="flex font-barlow tracking-widest text-[20px] lg:text-[18px] items-center gap-2 bg-linear-to-r from-teal-600 to-teal-800 
                text-white px-10 py-3 rounded-[20px] shadow-lg hover:from-teal-700 hover:to-teal-900 
                transition-transform transform hover:scale-105 w-full lg:w-auto"
            >
              ✨ Create with me
            </button>
          </Link>

          <a
            href="/Kolurejo's_CV.docx"
            download="Opeyemi-Kolurejo-CV.docx"
            className="flex font-barlow tracking-widest text-[20px] lg:text-[18px] items-center gap-2 bg-gray-400 text-gray-900 px-10 py-3 rounded-[20px] 
              shadow-lg hover:bg-gray-300 transition-transform transform hover:scale-105 w-full lg:w-auto"
          >
            📄 Download CV
          </a>
        </motion.div>
      </div>
    </div>
  );
}
