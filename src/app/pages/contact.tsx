"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Thanks for reaching out, we'll get back to you soon!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  // Animation variants
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
    <section id="contact" className="py-20 px-6 sm:px-8 lg:px-12 min-h-screen">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="relative text-6xl md:text-7xl font-barlow tracking-widest font-bold text-center mb-10">
          📬 Contact Me
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-40] w-48 h-4 bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 animate-colorCycle rounded-md shadow-lg"></span>
        </h1>
        <p className="font-bellefair text-teal-400 text-2xl dark:text-gray-300">
          Have a project in mind, want to collaborate, or just want to say hi?
        </p>
      </motion.div>

      {/* Reach Out Section */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-3xl mx-auto mb-20"
      >
        <motion.h2
          variants={item}
          className="text-3xl font-bellefair text-center text-teal-400 mb-8"
        >
          Reach Out Directly
        </motion.h2>
        <div className="flex justify-center gap-12">
          {[
            {
              icon: <FaEnvelope className="text-6xl mb-2" />,
              label: "Gmail",
              link: "mailto:kolurejohorpy@gmail.com",
            },
            {
              icon: <FaLinkedin className="text-6xl mb-2" />,
              label: "LinkedIn",
              link: "https://www.linkedin.com/in/opeyemi-kolurejo-a94117229/",
            },
            {
              icon: <FaGithub className="text-6xl mb-2" />,
              label: "GitHub",
              link: "https://github.com/OpeyemiKol",
            },
          ].map((itemData, idx) => (
            <motion.a
              key={idx}
              variants={item}
              href={itemData.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="flex flex-col items-center text-gray-200 hover:text-teal-400 transition"
            >
              {itemData.icon}
              <span className="text-lg font-semibold">{itemData.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Send Message Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={container}
        className="max-w-2xl mx-auto"
      >
        <motion.h2
          variants={item}
          className="text-3xl font-bellefair text-center text-teal-400 mb-8"
        >
          Send Me a Message
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          variants={container}
          className="bg-teal-800 dark:bg-gray-800 p-8 rounded-lg shadow space-y-6"
        >
          <motion.div variants={item}>
            <label className="block text-[18px] font-bold font-barlow tracking-widest text-gray-800 dark:text-gray-200 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 border font-bellefair rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </motion.div>

          <motion.div variants={item}>
            <label className="block text-[18px] font-bold font-barlow tracking-widest text-gray-800 dark:text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg font-bellefair  focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </motion.div>

          <motion.div variants={item}>
            <label className="block text-[18px] font-bold font-barlow tracking-widest text-gray-800 dark:text-gray-200 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2 border font-bellefair rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="w-full py-3 px-6 bg-teal-600 text-white text-[18px] font-barlow tracking-widest rounded-lg hover:bg-teal-500 focus:ring-2 focus:ring-teal-400 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
