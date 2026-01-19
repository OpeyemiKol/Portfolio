"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Aspoi",
      description:
        "Safety and Protection Officers International (SPOI) is a global association committed to protecting lives, property, and human rights.",
      image: "/Aspoi-Img.JPG",
      link: "https://www.aspoi.com/",
    },
    {
      name: "TheRoot",
      description:
        "A modern learning platform built to simplify web development education.",
      image: "/TheRoot-Img.JPG",
      link: "https://www.therootshq.com/",
    },
    {
      name: "E-Commerce Platform",
      description:
        "A responsive e-commerce product page featuring image previews, a lightbox gallery, cart functionality, and a clean modern UI.",
      image: "/ECommerce-Img.JPG",
      link: "https://horpsy-e-commerce.netlify.app/",
    },
    {
      name: "Space Tourism",
      description:
        "A responsive Space Tourism website with tab navigation, interactive hover effects, and adaptive layouts.",
      image: "/Space-Img.JPG",
      link: "https://horpsy-space-tourism.netlify.app/",
    },
    {
      name: "Interactive card",
      description:
        "An interactive card component that updates in real time as you type.",
      image: "/Interactive-Img.JPG",
      link: "https://opeyemi-interactive-card.netlify.app/",
    },
    {
      name: "Todo App",
      description:
        "A fully-featured Todo application with a clean, modern interface.",
      image: "/Todo-Img.JPG",
      link: "https://new-vue-beta.vercel.app/",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-12 px-6 dark:bg-gray-900">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="relative text-6xl md:text-7xl font-barlow tracking-widest font-bold text-center mb-20"
      >
        🚀 My Projects
        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-40] w-48 h-4 bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 animate-colorCycle rounded-md shadow-lg"></span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="text-3xl text-teal-400 font-bellefair text-center mb-10 dark:text-gray-100"
      >
        A selection of projects showcasing my skills and creativity.
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <motion.div
            key={project.name}
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-xl flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-48 group">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-1">
                {project.description}
              </p>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: "#0ea5e9" }}
                className="mt-4 inline-block text-sm font-medium text-blue-600"
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
