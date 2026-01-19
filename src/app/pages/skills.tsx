"use client";

import Image from "next/image";
import { HiCode } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    core: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
    ],
    frameworks: [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
    ],
    styling: [
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    tooling: [
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
  };

  return (
    <section id="skills" className="min-h-screen py-12 px-6 dark:bg-gray-900">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="relative text-6xl md:text-7xl font-barlow tracking-widest font-bold text-center mb-20"
      >
        <HiCode className="inline" /> My Skills
        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-40] w-48 h-4 bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 animate-colorCycle rounded-md shadow-lg"></span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="text-4xl font-bellefair text-teal-400 font-bold text-center mb-4 dark:text-gray-100"
      >
        💻 Frontend Development
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-center font-bellefair text-2xl max-w-2xl mx-auto mb-10 dark:text-gray-300"
      >
        I specialize in building modern, responsive, and user-friendly web
        applications using contemporary frontend technologies.
      </motion.p>

      {/* Categories */}
      <SkillCategory title="Core Technologies" items={skills.core} />
      <SkillCategory title="Frameworks & Libraries" items={skills.frameworks} />
      <SkillCategory title="Styling & UI" items={skills.styling} />
      <SkillCategory title="Modern Tooling" items={skills.tooling} />
    </section>
  );
}

function SkillCategory({
  title,
  items,
}: {
  title: string;
  items: { name: string; icon: string }[];
}) {
  // Variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      variants={container}
      className="mb-16"
    >
      <motion.h3
        variants={item}
        className="text-3xl font-bellefair font-semibold text-center mb-10 text-teal-400 dark:text-gray-200"
      >
        {title}
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {items.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="group flex flex-col items-center justify-center py-8 rounded-2xl bg-gray-600 border-3 border-gray-800 hover:border-teal-400 transition"
          >
            {/* BIG ICON */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-6"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={100}
                height={100}
                className="drop-shadow-xl"
              />
            </motion.div>

            {/* NAME */}
            <motion.p
              variants={item}
              className="text-lg font-semibold tracking-wide text-gray-200"
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
