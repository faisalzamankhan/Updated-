"use client";
import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        ...Object.fromEntries(
          Object.entries(directionOffset[direction]).map(([key]) => [key, 0])
        ),
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      });
    }
  }, [isInView, controls, direction, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <ScrollAnimation className={className} delay={delay} direction="up">
      {children}
    </ScrollAnimation>
  );
}
