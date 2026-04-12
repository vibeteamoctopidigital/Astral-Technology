"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We learn your business, users, and goals. Together we define the roadmap, tech stack, and milestones that will drive success.",
    items: ["Tech stack decision", "Project roadmap doc", "Team kickoff & onboarding"],
    offset: 0,
    dotPosition: "bottom",
  },
  {
    num: "02",
    title: "Design & Prototype",
    desc: "Our designers craft beautiful, user-tested interfaces. You get interactive Figma prototypes before a single line of code is written.",
    items: ["Figma design system", "Clickable prototype", "User testing report"],
    offset: 120,
    dotPosition: "top",
  },
  {
    num: "03",
    title: "Build & Iterate",
    desc: "Agile sprints with weekly demos. Your dedicated team ships features fast while maintaining enterprise-grade quality.",
    items: ["Weekly sprint demos", "Code review & QA", "Staging environment"],
    offset: 40,
    dotPosition: "bottom",
  },
  {
    num: "04",
    title: "Launch & Grow",
    desc: "We handle deployment, monitoring, and optimization. Post-launch, we continue to iterate based on real user data.",
    items: ["Production deployment", "Monitoring setup", "Post-launch support"],
    offset: 150,
    dotPosition: "top",
  },
];

function StepIcon({ index }: { index: number }) {
  if (index === 0)
    return (
      <svg width="24" height="24" viewBox="0 0 44 44" fill="none">
        <rect x="7" y="4" width="20" height="26" rx="3" stroke="#897EE3" strokeWidth="2" fill="#EDE9FE" fillOpacity="0.5" />
        <rect x="10" y="10" width="14" height="1.5" rx="0.75" fill="#897EE3" opacity="0.55" />
        <rect x="10" y="14" width="10" height="1.5" rx="0.75" fill="#897EE3" opacity="0.4" />
        <rect x="10" y="18" width="12" height="1.5" rx="0.75" fill="#897EE3" opacity="0.4" />
        <circle cx="24" cy="28" r="7" stroke="#897EE3" strokeWidth="2.2" fill="none" />
        <circle cx="24" cy="28" r="3" fill="#EDE9FE" />
        <line x1="29.5" y1="33.5" x2="35" y2="39" stroke="#897EE3" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  if (index === 1)
    return (
      <svg width="24" height="24" viewBox="0 0 44 44" fill="none">
        <rect x="11" y="4" width="16" height="28" rx="3.5" stroke="#897EE3" strokeWidth="1.8" fill="#EDE9FE" fillOpacity="0.35" />
        <rect x="15" y="6.5" width="8" height="1.5" rx="0.75" fill="#897EE3" fillOpacity="0.4" />
        <rect x="13" y="9.5" width="12" height="3" rx="1" fill="#897EE3" fillOpacity="0.35" />
        <rect x="13" y="14.5" width="8" height="2" rx="1" fill="#897EE3" fillOpacity="0.25" />
        <rect x="13" y="18" width="10" height="2" rx="1" fill="#897EE3" fillOpacity="0.25" />
        <path d="M29 8 L29 20 L32.5 16.5 L34.5 21.5 L36.5 20.8 L34.5 15.5 L38 15.5 Z" fill="#897EE3" fillOpacity="0.75" />
      </svg>
    );
  if (index === 2)
    return (
      <svg width="24" height="24" viewBox="0 0 44 44" fill="none">
        <rect x="4" y="7" width="36" height="28" rx="4" fill="#EAF4FC" fillOpacity="0.6" stroke="#469FDD" strokeWidth="1.5" strokeOpacity="0.5" />
        <rect x="4" y="7" width="36" height="10" rx="4" fill="#469FDD" fillOpacity="0.15" />
        <rect x="4" y="13" width="36" height="4" fill="#469FDD" fillOpacity="0.15" />
        <circle cx="11" cy="12" r="2.3" fill="#FF5F56" />
        <circle cx="18.5" cy="12" r="2.3" fill="#FEBC2E" />
        <circle cx="26" cy="12" r="2.3" fill="#28C840" />
        <rect x="8" y="21" width="4" height="2" rx="1" fill="#469FDD" fillOpacity="0.8" />
        <rect x="14" y="21" width="8" height="2" rx="1" fill="#469FDD" fillOpacity="0.5" />
        <rect x="11" y="26" width="14" height="2" rx="1" fill="#469FDD" fillOpacity="0.4" />
      </svg>
    );
  return (
    <svg width="24" height="24" viewBox="0 0 44 44" fill="none">
      <path d="M7 9 L7.8 11.5 L10.5 11.5 L8.4 13.1 L9.2 15.5 L7 14 L4.8 15.5 L5.6 13.1 L3.5 11.5 L6.2 11.5 Z" fill="#897EE3" fillOpacity="0.4" />
      <ellipse cx="22" cy="20" rx="14" ry="5.5" stroke="#897EE3" strokeWidth="0.9" fill="none" opacity="0.18" strokeDasharray="4 3" />
      <path d="M22 4 C22 4 30 9 31 19 L27 23 L17 23 L13 19 C14 9 22 4 22 4 Z" fill="#897EE3" fillOpacity="0.85" />
      <circle cx="22" cy="15" r="3.5" stroke="white" strokeWidth="1.5" fill="#897EE3" fillOpacity="0.25" />
      <path d="M17 23 L10 30 L17 27.5 Z" fill="#897EE3" fillOpacity="0.55" />
      <path d="M27 23 L34 30 L27 27.5 Z" fill="#897EE3" fillOpacity="0.55" />
      <path d="M19.5 23 C19.5 23 22 33 22 33 C22 33 24.5 23 24.5 23 Z" fill="#897EE3" fillOpacity="0.7" />
    </svg>
  );
}

function ConnectorDot() {
  return (
    <div
      style={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: "white",
        border: "2.5px solid #897EE3",
        boxShadow: "0 0 0 5px rgba(137,126,227,0.1), 0 0 0 9px rgba(137,126,227,0.04)",
        flexShrink: 0,
        zIndex: 2,
        position: "relative",
      }}
    />
  );
}

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  return (
    <motion.div
      className="step-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      whileHover={{ y: -6, scale: 1.02 }}
      style={{
        background: "#FFFFFF",
        border: "1px solid #EDEAF8",
        borderRadius: 20,
        padding: "28px 24px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Top accent bar */}
      <div
        className="card-accent"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, #897EE3, #469FDD)",
          borderRadius: "20px 20px 0 0",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.3s ease",
        }}
      />

      {/* Big faint step number */}
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          marginBottom: 14,
          background: "linear-gradient(135deg, rgba(137,126,227,0.13), rgba(70,159,221,0.07))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {step.num}
      </div>

      {/* Icon */}
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 13,
          border: "1px solid #F1F5F9",
          background: "#FAFAFA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <StepIcon index={index} />
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 17,
          fontWeight: 600,
          color: "#0F172A",
          letterSpacing: "-0.02em",
          lineHeight: 1.25,
          marginBottom: 10,
        }}
      >
        {step.title}
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: 13,
          color: "#64748B",
          lineHeight: 1.75,
          marginBottom: 18,
        }}
      >
        {step.desc}
      </div>

      {/* Deliverables */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {step.items.map((item, j) => (
          <div key={j} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                border: "1.5px solid rgba(137,126,227,0.2)",
                background: "rgba(137,126,227,0.04)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Check size={9} color="#897EE3" strokeWidth={2.5} />
            </div>
            <span style={{ fontSize: 13, color: "#475569" }}>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const svgDots = [
  { cx: 140, cy: 180 },
  { cx: 420, cy: 320 },
  { cx: 700, cy: 220 },
  { cx: 980, cy: 360 },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: "120px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.13em",
              color: "#897EE3",
              textTransform: "uppercase" as const,
              display: "block",
              marginBottom: 14,
            }}
          >
            Our Process
          </span>
          <h2
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 500,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            From idea to{" "}
            <span className="gradient-text">launch</span>
            <span style={{ color: "#0F172A" }}>.</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "#94A3B8",
              lineHeight: 1.75,
              maxWidth: 460,
              margin: "16px auto 0",
              textAlign: "center",
            }}
          >
            A four-step journey from concept to production-ready product — with you every step of the way.
          </p>
        </motion.div>

        {/* Zigzag Area */}
        <div style={{ position: "relative" }}>
          {/* SVG path behind cards */}
          <svg
            className="process-svg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
              overflow: "visible",
            }}
            viewBox="0 0 1120 500"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#897EE3" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#469FDD" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#897EE3" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            <motion.path
              d="M 140 180 C 280 180, 280 320, 420 320 C 560 320, 560 220, 700 220 C 840 220, 840 360, 980 360"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeDasharray="10 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
            />

            {svgDots.map((dot, i) => (
              <motion.circle
                key={i}
                cx={dot.cx}
                cy={dot.cy}
                r={5}
                fill="white"
                stroke="#897EE3"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.4, type: "spring", stiffness: 200 }}
                style={{ filter: "drop-shadow(0 0 6px rgba(137,126,227,0.5))" }}
              />
            ))}
          </svg>

          {/* 4-column horizontal grid */}
          <div
            className="process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
              alignItems: "flex-start",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  marginTop: step.offset,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {step.dotPosition === "top" && <ConnectorDot />}
                <StepCard step={step} index={i} />
                {step.dotPosition === "bottom" && <ConnectorDot />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
