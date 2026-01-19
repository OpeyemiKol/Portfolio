"use client";

import { HiUser } from "react-icons/hi";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 px-6 text-white">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative text-6xl md:text-7xl font-barlow tracking-widest font-bold text-center mb-20"
      >
        <HiUser className="inline mr-2" /> Who I Am
        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-40] w-48 h-4 bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 animate-colorCycle rounded-md shadow-lg"></span>
      </motion.h1>

      {/* Content Grid */}
      <div className="max-w-6xl font-bellefair mx-auto grid md:grid-cols-2 gap-12">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-800/60 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
        >
          <h2 className="text-4xl text-teal-400 font-semibold mb-6 border-b border-teal-500 pb-2">
            About Me
          </h2>
          <p className="text-2xl leading-relaxed">
            I’m{" "}
            <span className="font-bold text-teal-300">Opeyemi Kolurejo</span>, a
            frontend developer passionate about crafting responsive interfaces
            and smooth user interactions that feel effortless and premium.
          </p>
        </motion.div>

        {/* What Drives Me */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-800/60 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
        >
          <h2 className="text-4xl text-teal-400 font-semibold mb-6 border-b border-teal-500 pb-2">
            What Drives Me
          </h2>
          <p className="text-2xl leading-relaxed">
            Clean design, performance, and experiences that users love coming
            back to. I believe in building digital products that balance
            aesthetics with functionality.
          </p>
        </motion.div>

        {/* Outside Work */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gray-800/60 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 md:col-span-2 text-center"
        >
          <h2 className="text-4xl text-teal-400 font-semibold mb-6 border-b border-teal-500 pb-2">
            Outside Work
          </h2>
          <p className="text-2xl leading-relaxed">
            Football ⚽ · Gaming 🎮 · Movies 🎬 — creativity inspires me
            everywhere, and I bring that energy back into my work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
