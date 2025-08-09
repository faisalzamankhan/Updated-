"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  children?: ReactNode;
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.02,
}: AnimatedTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.25rem",
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface StaggeredTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function StaggeredText({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: StaggeredTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface GlowTextProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowText({ children, className = "" }: GlowTextProps) {
  return (
    <motion.span
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.span>
  );
}
