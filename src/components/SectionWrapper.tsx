"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: "white" | "gray";
}

export default function SectionWrapper({
  id,
  className = "",
  children,
  bg = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${bg === "gray" ? "bg-[#FAFAFA]" : "bg-white"} ${className}`}
      style={{ padding: "96px 0" }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[1200px] mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}
