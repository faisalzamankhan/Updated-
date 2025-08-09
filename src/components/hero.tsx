"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "./typewriter";
import { motion } from "framer-motion";

export function Hero() {
  const typewriterTexts = [
    "Frontend Developer",
    "React Specialist",
    "Refine",
    "UI/UX Enthusiast",
    "Next.js Expert",
  ];

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20" />
      <div className="absolute inset-0 bg-black opacity-40" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              Hi, I&apos;m{" "}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent inline-block"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                type: "spring",
                bounce: 0.3,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              Faisal Zaman
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Typewriter
              texts={typewriterTexts}
              className="text-white font-semibold"
            />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting beautiful, responsive web experiences with React,
            Next.js,Refine and modern technologies
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-primary-600 hover:to-secondary-600 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="px-8 py-4 border-2 border-[var(--primary)] bg-black  text-primary-500 hover:bg-primary-500 hover:text-white text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float cursor-pointer"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-2xl text-gray-400" />
      </motion.div>
    </section>
  );
}
