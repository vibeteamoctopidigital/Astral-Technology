"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Plus } from "lucide-react";
import { fadeUp, staggerContainer, popIn } from "@/lib/animations";
import { getTechData } from "./TechIcon";

interface TechItem {
  name: string;
}

const groups: { label: string; items: TechItem[] }[] = [
  {
    label: "FRONTEND",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
  },
  {
    label: "BACKEND",
    items: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "Go" },
      { name: "GraphQL" },
    ],
  },
  {
    label: "DATABASE",
    items: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Supabase" },
    ],
  },
  {
    label: "INFRASTRUCTURE",
    items: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Terraform" },
      { name: "GitHub Actions" },
      { name: "Datadog" },
    ],
  },
  {
    label: "MOBILE & DESIGN",
    items: [
      { name: "Flutter" },
      { name: "Swift" },
      { name: "Kotlin" },
      { name: "Figma" },
      { name: "Firebase" },
      { name: "Expo" },
    ],
  },
];

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  const data = getTechData(tech.name);

  return (
    <motion.div
      variants={popIn}
      whileHover={{ y: -8, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="flex flex-col items-center cursor-pointer"
      style={{ gap: "10px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo box */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          width: "72px",
          height: "72px",
          background: hovered
            ? `linear-gradient(135deg, #FFFFFF 0%, ${data.bg} 100%)`
            : "#FFFFFF",
          border: `1px solid ${hovered ? data.color + "40" : "#F1F5F9"}`,
          borderRadius: "18px",
          boxShadow: hovered
            ? `0 12px 36px rgba(0,0,0,0.1), 0 4px 12px ${data.color}25`
            : "0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
          transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Shine sweep */}
        {hovered && (
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-50%",
              left: "-80px",
              width: "60px",
              height: "200%",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
              transform: "skewX(-20deg)",
              animation: "shineSweep 0.5s ease forwards",
            }}
          />
        )}
        <Icon icon={data.icon} width={36} height={36} />
      </div>

      {/* Label */}
      <span
        style={{
          fontSize: "12px",
          fontWeight: 500,
          color: hovered ? "#0F172A" : "#64748B",
          textAlign: "center",
          transition: "color 0.15s",
        }}
      >
        {tech.name}
      </span>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute pointer-events-none"
            style={{
              bottom: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#0F172A",
              color: "white",
              fontSize: "11px",
              padding: "4px 10px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
              zIndex: 10,
            }}
          >
            {tech.name}
            <div
              style={{
                position: "absolute",
                bottom: "-4px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: "5px solid #0F172A",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden"
      style={{ background: "#FAFAFA", padding: "96px 0" }}
    >
      {/* Floating background icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0, opacity: 0.04 }}>
        <div className="absolute" style={{ top: "10%", right: "8%", filter: "blur(2px)", animation: "float-3 8s ease-in-out infinite" }}>
          <Icon icon="logos:react" width={80} height={80} />
        </div>
        <div className="absolute" style={{ bottom: "15%", left: "5%", filter: "blur(2px)", animation: "float-1 10s ease-in-out infinite" }}>
          <Icon icon="logos:docker-icon" width={70} height={70} />
        </div>
        <div className="absolute" style={{ top: "50%", right: "15%", filter: "blur(1px)", animation: "float-2 12s ease-in-out infinite" }}>
          <Icon icon="logos:postgresql" width={60} height={60} />
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative max-w-[1200px] mx-auto px-6"
        style={{ zIndex: 1 }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-10">
          <span className="section-label">TECHNOLOGIES</span>
          <h2 className="section-heading">
            Languages, frameworks &
            <br />
            <span className="gradient-text">platforms</span>
          </h2>
          <p className="section-subtext">
            We work with the best tools in the industry to deliver exceptional
            results for your project.
          </p>
        </motion.div>

        {/* Category groups */}
        {groups.map((group, gi) => (
          <motion.div key={group.label} variants={fadeUp} style={{ marginTop: gi === 0 ? "0" : "40px" }}>
            {/* Category label with line */}
            <div
              className="flex items-center"
              style={{ gap: "12px", marginBottom: "16px" }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#94A3B8",
                  whiteSpace: "nowrap",
                }}
              >
                {group.label}
              </span>
              <div
                style={{
                  flexGrow: 1,
                  height: "1px",
                  background: "linear-gradient(90deg, #E2E8F0, transparent)",
                }}
              />
            </div>

            {/* Tech cards */}
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
              className="flex flex-wrap"
              style={{ gap: "16px" }}
            >
              {group.items.map((tech, i) => (
                <TechCard key={tech.name} tech={tech} index={i} />
              ))}
            </motion.div>
          </motion.div>
        ))}

        {/* Bottom CTA pill */}
        <motion.div
          variants={fadeUp}
          className="text-center"
          style={{ marginTop: "48px" }}
        >
          <span
            className="inline-flex items-center cursor-pointer"
            style={{
              gap: "10px",
              border: "1.5px dashed #CBD5E1",
              borderRadius: "100px",
              padding: "12px 28px",
              fontSize: "14px",
              color: "#64748B",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#897EE3";
              e.currentTarget.style.color = "#897EE3";
              e.currentTarget.style.background = "rgba(137,126,227,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#CBD5E1";
              e.currentTarget.style.color = "#64748B";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <Plus size={16} style={{ color: "#897EE3" }} />
            Using a different stack? We adapt to yours.
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
