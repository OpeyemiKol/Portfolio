"use client";

import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

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

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-8 lg:px-12 dark:bg-gray-900 min-h-screen"
    >
      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="relative text-6xl md:text-7xl font-barlow tracking-widest font-bold text-center mb-10">
          📬 Contact Me
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-40] w-48 h-4 bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 animate-colorCycle rounded-md shadow-lg"></span>
        </h1>
        <p className="font-bellefair text-teal-400 text-2xl dark:text-gray-300">
          Have a project in mind, want to collaborate, or just want to say hi?
        </p>
      </div>

      {/* Reach Out Section */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-bellefair text-center text-teal-400 mb-8">
          Reach Out Directly
        </h2>
        <div className="flex justify-center gap-12">
          <a
            href="mailto:kolurejohorpy@gmail.com"
            className="flex flex-col items-center text-gray-200 hover:text-teal-400 transition"
          >
            <FaEnvelope className="text-6xl mb-2" />
            <span className="text-lg font-semibold">Gmail</span>
          </a>
          <a
            href="https://www.linkedin.com/in/opeyemi-kolurejo-a94117229/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-200 hover:text-teal-400 transition"
          >
            <FaLinkedin className="text-6xl mb-2" />
            <span className="text-lg font-semibold">LinkedIn</span>
          </a>
          <a
            href="https://github.com/OpeyemiKol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-200 hover:text-teal-400 transition"
          >
            <FaGithub className="text-6xl mb-2" />
            <span className="text-lg font-semibold">GitHub</span>
          </a>
        </div>
      </div>

      {/* Send Message Section */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bellefair text-center text-teal-400 mb-8">
          Send Me a Message
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-teal-800 dark:bg-gray-800 p-8 rounded-lg shadow space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
