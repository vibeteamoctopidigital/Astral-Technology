"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    description: "Across 12+ industries",
  },
  {
    value: 8,
    suffix: "",
    label: "Avg. Weeks to MVP",
    description: "From kickoff to launch",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support & Monitoring",
    description: "Always-on reliability",
  },
  {
    value: 40,
    suffix: "%+",
    label: "Cost Savings",
    description: "vs. in-house hiring",
  },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setDisplayValue(Math.round(v)),
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="gradient-text" style={{ fontSize: "48px", fontWeight: 400 }}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="results" style={{ background: "#FAFAFA", padding: "96px 0" }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[1200px] mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-14">
          <span className="section-label">RESULTS</span>
          <h2 className="section-heading">
            Real work. Real{" "}
            <span className="gradient-text">results</span>.
          </h2>
          <p className="section-subtext">
            Numbers that reflect our commitment to delivering exceptional value
            to every client we partner with.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ gap: "20px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center"
              style={{
                padding: "32px 24px",
                borderRadius: "20px",
                background: "white",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "var(--shadow-sm)",
                transition: "all 0.25s ease",
              }}
              whileHover={{
                y: -4,
                boxShadow:
                  "0 12px 40px rgba(137,126,227,0.08), 0 4px 12px rgba(0,0,0,0.04)",
              }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#000000",
                  marginTop: "8px",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </h3>
              <p style={{ fontSize: "13px", color: "#64748B" }}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
