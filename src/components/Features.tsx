"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";
import {
  Rocket,
  Users,
  Shield,
  Zap,
  Clock,
  Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Launch Faster",
    description:
      "Go from idea to MVP in weeks, not months. Our streamlined process eliminates bottlenecks and keeps your product on track.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Get a full team of senior engineers, designers, and PMs who work exclusively on your project — no juggling priorities.",
  },
  {
    icon: Shield,
    title: "Enterprise Quality",
    description:
      "Production-grade code with best practices baked in: testing, CI/CD, monitoring, and security from day one.",
  },
  {
    icon: Zap,
    title: "Scale Seamlessly",
    description:
      "Architecture designed to grow with you. From 100 to 100M users, your tech stack won't hold you back.",
  },
  {
    icon: Clock,
    title: "Flexible Engagement",
    description:
      "Scale your team up or down as needed. No long-term contracts, no hiring headaches, no overhead.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring and support. We're always on call so you can sleep soundly.",
  },
];

function FeatureCard({
  feature,
}: {
  feature: { icon: LucideIcon; title: string; description: string };
}) {
  return (
    <motion.div
      variants={scaleIn}
      className="feature-card bg-white rounded-[20px] p-7 cursor-default"
      style={{
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "var(--shadow-sm)",
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      whileHover={{
        y: -6,
        boxShadow:
          "0 16px 48px rgba(137,126,227,0.1), 0 4px 12px rgba(0,0,0,0.04)",
      }}
    >
      {/* Icon box */}
      <motion.div
        className="flex items-center justify-center mb-5 relative overflow-hidden"
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "14px",
          background: "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)",
          boxShadow:
            "inset 0 1px 2px rgba(255,255,255,0.8), 0 2px 8px rgba(137,126,227,0.12)",
        }}
        whileHover={{ rotate: [0, -3, 3, 0], scale: 1.1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="absolute pointer-events-none" style={{ top: "-50%", left: "-50%", width: "200%", height: "200%", background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)" }} />
        <feature.icon size={24} style={{ color: "#897EE3" }} />
      </motion.div>

      <h3
        style={{
          fontSize: "18px",
          fontWeight: 500,
          color: "#0F172A",
          marginBottom: "10px",
          letterSpacing: "-0.01em",
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "#64748B",
          lineHeight: 1.7,
        }}
      >
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" style={{ background: "#FAFAFA", padding: "96px 0" }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[1200px] mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-14">
          <span className="section-label">WHY ASTRAL</span>
          <h2 className="section-heading">
            Built for founders who need to move
            <br />
            <span
              className="gradient-text"
              style={{ animation: "hue 3s ease-in-out alternate infinite" }}
            >
              fast
            </span>
          </h2>
          <p className="section-subtext">
            Everything you need to turn your vision into a world-class product,
            without the complexity of building an in-house team.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "20px", marginTop: "56px" }}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
