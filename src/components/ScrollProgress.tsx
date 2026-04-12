"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #897EE3, #6C70E9, #469FDD)",
        transformOrigin: "0%",
        scaleX,
        zIndex: 9999,
        boxShadow: "0 0 8px rgba(137,126,227,0.5)",
      }}
    />
  );
}
