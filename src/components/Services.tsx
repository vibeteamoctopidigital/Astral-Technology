"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Check, ShieldCheck } from "lucide-react";
import { getTechData } from "./TechIcon";

interface TabData {
  label: string;
  tabIcon: string;
  tabIconType: "iconify" | "lucide";
  gradient: string;
  accent: string;
  title: string;
  description: string;
  features: string[];
  pills: string[];
}

const tabs: TabData[] = [
  {
    label: "Full-Stack Dev",
    tabIcon: "logos:react",
    tabIconType: "iconify",
    gradient: "linear-gradient(135deg, #7C3AED, #4F46E5)",
    accent: "#7C3AED",
    title: "Full-Stack Development",
    description: "End-to-end web applications built on modern frameworks. We handle the entire stack so you can focus on product-market fit.",
    features: [
      "End-to-end web apps built on modern frameworks",
      "React, Next.js, TypeScript — pixel-perfect frontend",
      "Scalable Node.js / Python / Go backends",
      "Database design, optimization & migrations",
      "Performance-first: Core Web Vitals & SEO baked in",
    ],
    pills: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "TypeScript"],
  },
  {
    label: "UI/UX Design",
    tabIcon: "logos:figma",
    tabIconType: "iconify",
    gradient: "linear-gradient(135deg, #EC4899, #F43F5E)",
    accent: "#EC4899",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love. From research to pixel-perfect handoff — design that converts.",
    features: [
      "Deep user research & competitor analysis",
      "Interactive Figma prototypes before any code is written",
      "Design systems & component libraries that scale",
      "Pixel-perfect handoff to engineering",
      "WCAG 2.1 accessibility compliance by default",
    ],
    pills: ["Figma", "Framer Motion", "Tailwind CSS", "Storybook"],
  },
  {
    label: "Cloud & DevOps",
    tabIcon: "logos:aws",
    tabIconType: "iconify",
    gradient: "linear-gradient(135deg, #0EA5E9, #06B6D4)",
    accent: "#0EA5E9",
    title: "Cloud & DevOps",
    description: "Scalable, reliable infrastructure that lets you ship fast and sleep well. From containers to monitoring.",
    features: [
      "AWS, GCP & Azure architecture design",
      "Docker & Kubernetes container orchestration",
      "CI/CD pipelines — code to production in minutes",
      "99.9% uptime infrastructure with auto-scaling",
      "Cost optimization & real-time monitoring dashboards",
    ],
    pills: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    label: "Mobile Apps",
    tabIcon: "logos:flutter",
    tabIconType: "iconify",
    gradient: "linear-gradient(135deg, #F97316, #FB923C)",
    accent: "#F97316",
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that feel fast and delightful. One codebase, every platform.",
    features: [
      "iOS & Android from a single React Native / Flutter codebase",
      "Offline-first architecture for reliable performance",
      "Biometric auth, push notifications, deep linking",
      "App Store & Google Play submission fully managed",
      "60fps animations with optimized native modules",
    ],
    pills: ["Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
  },
  {
    label: "Data & Analytics",
    tabIcon: "logos:python",
    tabIconType: "iconify",
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    accent: "#10B981",
    title: "Data & Analytics",
    description: "Turn raw data into actionable insights. Pipelines, dashboards, and ML — powering data-driven decisions.",
    features: [
      "Real-time ETL pipelines & data warehousing",
      "ML model training, deployment & monitoring",
      "Interactive business intelligence dashboards",
      "Predictive analytics & forecasting systems",
      "GDPR-compliant data governance frameworks",
    ],
    pills: ["Python", "dbt", "BigQuery", "Airflow", "TensorFlow"],
  },
  {
    label: "Security",
    tabIcon: "",
    tabIconType: "lucide",
    gradient: "linear-gradient(135deg, #EF4444, #DC2626)",
    accent: "#EF4444",
    title: "Security & Compliance",
    description: "Protect your users and your business. Compliance, audits, and 24/7 threat detection built in.",
    features: [
      "SOC 2 Type II compliance preparation & audit support",
      "Full penetration testing & vulnerability assessments",
      "OWASP Top 10 & SANS 25 security hardening",
      "GDPR, HIPAA, PCI-DSS implementation",
      "24/7 threat detection, incident response, alerting",
    ],
    pills: ["Snyk", "Datadog", "GitHub", "Supabase"],
  },
];

/* ── Mockup Components ── */

function CodeEditorMockup() {
  return (
    <div className="overflow-hidden" style={{ background: "#0F172A", borderRadius: "12px" }}>
      {/* VS Code title bar */}
      <div className="flex items-center justify-between" style={{ height: "28px", background: "#111827", borderBottom: "1px solid #1F2937", padding: "0 12px" }}>
        <div className="flex items-center" style={{ gap: "6px" }}>
          <svg width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="4" fill="#FF5F56" /></svg>
          <svg width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="4" fill="#FEBC2E" /></svg>
          <svg width="12" height="12" viewBox="0 0 12 12"><circle cx="6" cy="6" r="4" fill="#28C840" /></svg>
        </div>
        <span style={{ fontSize: "11px", color: "#6B7280" }}>astral-app — VS Code</span>
        <div style={{ width: "40px" }} />
      </div>
      {/* Tab bar */}
      <div className="flex items-center" style={{ height: "32px", background: "#1E293B", padding: "0 8px", gap: "2px" }}>
        {["page.tsx", "api.ts", "globals.css"].map((f, i) => (
          <span key={f} style={{ background: i === 0 ? "#0F172A" : "transparent", color: i === 0 ? "#E2E8F0" : "#6B7280", fontSize: "12px", padding: "4px 12px", borderRadius: "6px 6px 0 0" }}>{f}</span>
        ))}
        <span style={{ marginLeft: "auto", fontSize: "10px", background: "#1F2937", color: "#F97316", padding: "2px 6px", borderRadius: "4px" }}>.tsx</span>
      </div>
      <div className="flex">
        {/* File tree */}
        <div style={{ width: "60px", background: "#111827", borderRight: "1px solid #1F2937", padding: "8px 6px", fontSize: "10px", color: "#6B7280" }}>
          <div style={{ color: "#60A5FA", marginBottom: "2px" }}>▸ src/</div>
          <div style={{ paddingLeft: "8px", marginBottom: "2px" }}>▸ comp..</div>
          <div style={{ paddingLeft: "8px", color: "#E2E8F0", background: "#1F2937", borderRadius: "3px", padding: "1px 4px", marginBottom: "2px" }}>page.tsx</div>
          <div style={{ paddingLeft: "8px", marginBottom: "2px" }}>layout</div>
          <div style={{ paddingLeft: "8px" }}>▸ api/</div>
        </div>
        {/* Code area */}
        <div style={{ flex: 1, padding: "16px 20px", fontSize: "13px", lineHeight: 1.8, fontFamily: "monospace" }}>
          {[
            { num: 1, code: <><span style={{ color: "#C084FC" }}>export default</span> <span style={{ color: "#38BDF8" }}>function</span> <span style={{ color: "#FDE68A" }}>Page</span><span style={{ color: "#E2E8F0" }}>()</span> <span style={{ color: "#E2E8F0" }}>{"{"}</span></> },
            { num: 2, code: <span style={{ color: "#C084FC" }}>{"  return ("}</span> },
            { num: 3, code: <><span style={{ color: "#E2E8F0" }}>{"    "}</span><span style={{ color: "#7DD3FC" }}>{"<main"}</span> <span style={{ color: "#86EFAC" }}>className</span><span style={{ color: "#E2E8F0" }}>=</span><span style={{ color: "#FCA5A5" }}>{'"hero"'}</span><span style={{ color: "#7DD3FC" }}>{">"}</span></> },
            { num: 4, code: <><span style={{ color: "#E2E8F0" }}>{"      "}</span><span style={{ color: "#7DD3FC" }}>{"<Hero"}</span> <span style={{ color: "#86EFAC" }}>title</span><span style={{ color: "#E2E8F0" }}>=</span><span style={{ color: "#FCA5A5" }}>{'"Astral"'}</span> <span style={{ color: "#7DD3FC" }}>{"/>"}</span></> },
            { num: 5, code: <><span style={{ color: "#E2E8F0" }}>{"      "}</span><span style={{ color: "#7DD3FC" }}>{"<Services"}</span> <span style={{ color: "#86EFAC" }}>animated</span> <span style={{ color: "#7DD3FC" }}>{"/>"}</span></> },
            { num: 6, code: <><span style={{ color: "#E2E8F0" }}>{"    "}</span><span style={{ color: "#7DD3FC" }}>{"</main>"}</span></> },
            { num: 7, code: <span style={{ color: "#C084FC" }}>{"  )"}</span> },
            { num: 8, code: <span style={{ color: "#E2E8F0" }}>{"}"}</span> },
          ].map((line) => (
            <div key={line.num} className="flex">
              <span style={{ color: "#475569", fontSize: "12px", paddingRight: "12px", borderRight: "1px solid #1E293B", marginRight: "12px", minWidth: "16px", textAlign: "right", userSelect: "none" }}>{line.num}</span>
              <span>{line.code}</span>
            </div>
          ))}
          <span style={{ color: "#7C3AED", animation: "blink 1s step-end infinite", marginLeft: "28px" }}>|</span>
        </div>
      </div>
    </div>
  );
}

function DesignCanvasMockup() {
  return (
    <div className="overflow-hidden" style={{ background: "#F8FAFC", borderRadius: "12px" }}>
      <div className="flex items-center" style={{ background: "white", height: "44px", borderBottom: "1px solid #F1F5F9", padding: "0 16px", gap: "8px" }}>
        {[0, 1, 2, 3].map((i) => (<div key={i} style={{ width: "28px", height: "28px", borderRadius: "6px", background: i === 0 ? "#EDE9FE" : "#F8FAFC", border: "1px solid #E2E8F0" }} />))}
        <div style={{ width: "1px", height: "20px", background: "#E2E8F0", margin: "0 8px" }} />
        {["#7C3AED", "#06B6D4", "#F97316", "#10B981", "#F8FAFC"].map((c) => (<div key={c} className="rounded-full" style={{ width: "16px", height: "16px", background: c, border: c === "#F8FAFC" ? "1px solid #E2E8F0" : "none" }} />))}
      </div>
      <div className="flex" style={{ minHeight: "220px" }}>
        <div style={{ width: "120px", background: "white", borderRight: "1px solid #F1F5F9", padding: "12px" }}>
          <span style={{ fontSize: "11px", color: "#94A3B8", marginBottom: "8px", display: "block" }}>Layers</span>
          {["Hero Section", "Navigation", "Footer"].map((l, i) => (<div key={l} className="flex items-center" style={{ height: "28px", borderRadius: "6px", fontSize: "12px", padding: "0 8px", color: i === 0 ? "#7C3AED" : "#475569", background: i === 0 ? "#EDE9FE" : "transparent" }}>{l}</div>))}
        </div>
        <div className="flex-1 flex flex-col" style={{ padding: "16px", gap: "8px", background: "white" }}>
          <div style={{ height: "40px", background: "#EDE9FE", borderRadius: "8px", border: "1px dashed #C4B5FD" }} />
          <div style={{ height: "80px", background: "#F8FAFC", borderRadius: "8px", border: "1px solid #E2E8F0" }} />
          <div className="grid grid-cols-3" style={{ gap: "8px" }}>
            {[0, 1, 2].map((i) => (<div key={i} style={{ height: "48px", background: "#F1F5F9", borderRadius: "6px", border: "1px solid #E2E8F0" }} />))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfraDiagramMockup() {
  return (
    <div style={{ background: "#F8FAFC", borderRadius: "12px", padding: "24px" }}>
      <svg viewBox="0 0 400 280" fill="none" className="w-full">
        {[["M200 70 L130 120"], ["M200 70 L270 120"], ["M130 170 L170 210"], ["M270 170 L230 210"], ["M270 170 L320 210"]].map(([d], i) => (
          <path key={i} d={d} stroke="#C4B5FD" strokeWidth="2" strokeDasharray="6,3" style={{ animation: "dash 1s linear infinite" }} />
        ))}
        <rect x="140" y="20" width="120" height="50" rx="10" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
        <circle cx="252" cy="28" r="5" fill="#22C55E" />
        <text x="200" y="50" textAnchor="middle" fontSize="11" fontWeight="600" fill="#5B21B6">Load Balancer</text>
        <rect x="70" y="120" width="120" height="50" rx="10" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
        <circle cx="182" cy="128" r="5" fill="#22C55E" />
        <text x="130" y="150" textAnchor="middle" fontSize="11" fontWeight="600" fill="#5B21B6">App Server 1</text>
        <rect x="210" y="120" width="120" height="50" rx="10" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
        <circle cx="322" cy="128" r="5" fill="#22C55E" />
        <text x="270" y="150" textAnchor="middle" fontSize="11" fontWeight="600" fill="#5B21B6">App Server 2</text>
        <rect x="130" y="210" width="120" height="50" rx="10" fill="#ECFEFF" stroke="#0EA5E9" strokeWidth="1.5" />
        <circle cx="242" cy="218" r="5" fill="#22C55E" />
        <text x="190" y="240" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0369A1">PostgreSQL</text>
        <rect x="270" y="210" width="110" height="50" rx="10" fill="#FEF3C7" stroke="#F97316" strokeWidth="1.5" />
        <circle cx="372" cy="218" r="5" fill="#22C55E" />
        <text x="325" y="240" textAnchor="middle" fontSize="11" fontWeight="600" fill="#C2410C">Redis Cache</text>
      </svg>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="flex justify-center">
      <div style={{ width: "200px", height: "380px", borderRadius: "36px", background: "#0F172A", border: "6px solid #1E293B", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", position: "relative", overflow: "hidden" }}>
        <div style={{ width: "80px", height: "22px", background: "#0F172A", borderRadius: "0 0 16px 16px", position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", zIndex: 10 }} />
        <div style={{ background: "white", height: "100%", overflow: "hidden" }}>
          <div className="flex justify-between items-center" style={{ height: "28px", padding: "6px 16px 0", fontSize: "11px", fontWeight: 600, color: "#0F172A" }}>
            <span>9:41</span>
            <span style={{ fontSize: "10px" }}>......</span>
          </div>
          <div className="flex items-center" style={{ padding: "10px 16px 6px", gap: "6px" }}>
            <Icon icon="logos:flutter" width={16} height={16} />
            <span style={{ fontSize: "13px", fontWeight: 500, color: "#0F172A" }}>FlutterApp</span>
          </div>
          <div style={{ padding: "0 16px 8px", fontSize: "12px", color: "#64748B" }}>Welcome back, Alex</div>
          <div style={{ margin: "0 12px", background: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 50%, #06B6D4 100%)", borderRadius: "16px", padding: "14px", color: "white", position: "relative" }}>
            <div className="flex justify-between items-start">
              <div>
                <div style={{ fontSize: "10px", opacity: 0.8 }}>Total Balance</div>
                <div style={{ fontSize: "20px", fontWeight: 500, marginTop: "2px" }}>$124,580</div>
              </div>
              <div style={{ width: "16px", height: "12px", borderRadius: "3px", background: "linear-gradient(135deg, #FBBF24, #F59E0B)" }} />
            </div>
            <div style={{ fontSize: "10px", marginTop: "6px" }}>
              <span style={{ background: "rgba(255,255,255,0.2)", borderRadius: "4px", padding: "2px 6px" }}>+12.4%</span>
              <span style={{ opacity: 0.7, marginLeft: "4px" }}>•••• 4289</span>
            </div>
          </div>
          <div className="grid grid-cols-4" style={{ padding: "10px 12px", gap: "4px", textAlign: "center" }}>
            {[{ l: "Send", i: "↑" }, { l: "Receive", i: "↓" }, { l: "Invest", i: "↗" }, { l: "More", i: "•••" }].map((a) => (
              <div key={a.l}>
                <div className="mx-auto flex items-center justify-center" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", marginBottom: "3px", fontSize: "14px", color: "#7C3AED" }}>{a.i}</div>
                <span style={{ fontSize: "10px", color: "#64748B" }}>{a.l}</span>
              </div>
            ))}
          </div>
          {[{ name: "Netflix", sub: "Subscription", amt: "-$15.99", color: "#EF4444", avatar: "#E50914" }, { name: "Salary", sub: "Deposit", amt: "+$4,200", color: "#10B981", avatar: "#7C3AED" }].map((item) => (
            <div key={item.name} className="flex justify-between items-center" style={{ padding: "7px 14px", borderBottom: "0.5px solid #F1F5F9" }}>
              <div className="flex items-center" style={{ gap: "8px" }}>
                <div className="flex items-center justify-center rounded-full" style={{ width: "28px", height: "28px", background: item.avatar, fontSize: "10px", fontWeight: 700, color: "white" }}>{item.name[0]}</div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 600, color: "#0F172A" }}>{item.name}</div>
                  <div style={{ fontSize: "9px", color: "#94A3B8" }}>{item.sub}</div>
                </div>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 600, color: item.color }}>{item.amt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  const bars = [60, 45, 80, 55, 90, 70, 40];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div style={{ background: "white", borderRadius: "12px", padding: "20px", border: "1px solid #F1F5F9" }}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <div style={{ fontSize: "14px", fontWeight: 500, color: "#0F172A" }}>Analytics Overview</div>
          <div style={{ fontSize: "12px", color: "#64748B" }}>Last 30 days</div>
        </div>
        <span style={{ fontSize: "11px", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "6px", padding: "4px 10px", color: "#64748B" }}>Apr 2026</span>
      </div>
      <div className="grid grid-cols-3" style={{ gap: "8px", marginBottom: "16px" }}>
        {[
          { label: "Total Users", value: "48,291", change: "+12.5%", spark: "M0,12 L5,10 L10,8 L15,11 L20,6 L25,4 L30,2", color: "#7C3AED" },
          { label: "Revenue", value: "$89,240", change: "+8.7%", spark: "M0,14 L5,12 L10,10 L15,9 L20,7 L25,5 L30,3", color: "#10B981" },
          { label: "Conversion", value: "3.24%", change: "+0.4%", spark: "M0,8 L5,10 L10,12 L15,11 L20,9 L25,6 L30,5", color: "#F97316" },
        ].map((m) => (
          <div key={m.label} style={{ background: "#F8FAFC", borderRadius: "10px", padding: "12px", border: "1px solid #F1F5F9" }}>
            <div style={{ fontSize: "11px", color: "#64748B" }}>{m.label}</div>
            <div style={{ fontSize: "17px", fontWeight: 500, color: "#0F172A" }}>{m.value}</div>
            <div className="flex items-center justify-between" style={{ marginTop: "4px" }}>
              <span style={{ fontSize: "11px", color: "#10B981", fontWeight: 600 }}>{m.change}</span>
              <svg width="40" height="16" viewBox="0 0 30 16"><polyline points={m.spark} fill="none" stroke={m.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-end justify-between" style={{ height: "100px", padding: "0 8px" }}>
        {bars.map((h, i) => (
          <div key={i} className="flex flex-col items-center" style={{ gap: "4px" }}>
            <div className="chart-bar" style={{ width: "28px", height: `${h}%`, background: "linear-gradient(180deg, #7C3AED, #4F46E5)", borderRadius: "4px 4px 0 0", animationDelay: `${i * 0.1}s` }} />
            <span style={{ fontSize: "10px", color: "#94A3B8" }}>{days[i]}</span>
          </div>
        ))}
      </div>
      {/* Mini donut */}
      <div className="flex justify-end mt-3">
        <div className="relative flex items-center justify-center" style={{ width: "56px", height: "56px" }}>
          <svg width="56" height="56" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="22" fill="none" stroke="#E2E8F0" strokeWidth="6" />
            <circle cx="28" cy="28" r="22" fill="none" stroke="#7C3AED" strokeWidth="6" strokeDasharray="62 138" strokeDashoffset="0" strokeLinecap="round" />
            <circle cx="28" cy="28" r="22" fill="none" stroke="#06B6D4" strokeWidth="6" strokeDasharray="42 138" strokeDashoffset="-62" strokeLinecap="round" />
          </svg>
          <span className="absolute" style={{ fontSize: "8px", color: "#94A3B8", fontWeight: 600 }}>Traffic</span>
        </div>
      </div>
    </div>
  );
}

function SecurityTerminalMockup({ activeKey }: { activeKey: number }) {
  const lines = [
    { delay: 0, text: "$ running security audit...", color: "#E2E8F0" },
    { delay: 0.4, text: "\u2713 Scanning dependencies (247 packages)", color: "#22C55E" },
    { delay: 0.8, text: "\u2713 Checking OWASP top 10 vulnerabilities", color: "#22C55E" },
    { delay: 1.2, text: "\u2713 Running penetration test suite", color: "#22C55E" },
    { delay: 1.6, text: "\u2713 Validating SSL/TLS configuration", color: "#22C55E" },
    { delay: 2.0, text: "\u2713 Auditing access controls (IAM)", color: "#22C55E" },
    { delay: 2.4, text: "\u2501".repeat(30), color: "#475569" },
    { delay: 2.8, text: "\u2713 All 47 checks passed. Score: 98/100", color: "#A78BFA" },
    { delay: 3.2, text: "\u2192 Report saved to /reports/audit-2026.pdf", color: "#94A3B8" },
  ];
  return (
    <div key={activeKey} className="overflow-hidden" style={{ background: "#0D1117", borderRadius: "12px" }}>
      <div className="flex items-center" style={{ background: "#1C2128", height: "36px", padding: "0 16px", gap: "6px" }}>
        {["#FF5F56", "#FEBC2E", "#28C840"].map((c) => (<span key={c} className="rounded-full" style={{ width: "12px", height: "12px", background: c }} />))}
        <span style={{ fontSize: "12px", color: "#94A3B8", marginLeft: "12px" }}>security-audit.sh</span>
      </div>
      <div style={{ padding: "16px 20px", fontFamily: "monospace", fontSize: "12.5px", lineHeight: 2 }}>
        {lines.map((line, i) => (<div key={i} className="terminal-line" style={{ color: line.color, animationDelay: `${line.delay}s` }}>{line.text}</div>))}
        <span style={{ color: "#22C55E", animation: "blink 1s step-end infinite" }}>|</span>
      </div>
    </div>
  );
}

const mockups = [CodeEditorMockup, DesignCanvasMockup, InfraDiagramMockup, PhoneMockup, DashboardMockup];

/* ── Main Services Component ── */

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const tab = tabs[activeTab];

  const DURATION = 3000;
  const TICK = 30;

  // Progress bar tick — only updates progress, never changes tab
  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      progressRef.current += (TICK / DURATION) * 100;
      setProgress(progressRef.current);
    }, TICK);

    return () => clearInterval(id);
  }, [paused]);

  // When progress hits 100, advance tab
  useEffect(() => {
    if (progress >= 100) {
      setActiveTab((prev) => (prev + 1) % tabs.length);
      progressRef.current = 0;
      setProgress(0);
    }
  }, [progress]);

  const handleTabClick = (i: number) => {
    setActiveTab(i);
    progressRef.current = 0;
    setProgress(0);
  };

  return (
    <section id="services" style={{ background: "#FFFFFF", padding: "96px 0" }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-[1200px] mx-auto px-6"
      >
        <motion.div variants={fadeUp} className="text-center">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-heading">
            Everything you need to
            <br />
            build & <span className="gradient-text">scale</span>
          </h2>
          <p className="section-subtext">From concept to deployment, we cover every aspect of your technology stack with expertise and precision.</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center"
          style={{ gap: "10px", marginTop: "48px", marginBottom: "40px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {tabs.map((t, i) => {
            const isActive = i === activeTab;
            return (
              <motion.button
                key={t.label}
                onClick={() => handleTabClick(i)}
                whileHover={!isActive ? { scale: 1.03 } : {}}
                whileTap={{ scale: 0.96 }}
                className="relative inline-flex items-center cursor-pointer overflow-hidden"
                style={{
                  gap: "8px",
                  borderRadius: "100px",
                  padding: "10px 22px",
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 500,
                  background: isActive ? "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)" : "transparent",
                  border: isActive ? "1.5px solid transparent" : "1.5px solid #E2E8F0",
                  color: isActive ? "white" : "#64748B",
                  boxShadow: isActive ? "0 4px 16px rgba(124,58,237,0.35)" : "none",
                  transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {t.tabIconType === "iconify" ? (
                  <span style={{ filter: isActive ? "brightness(0) invert(1)" : "none", display: "flex" }}>
                    <Icon icon={t.tabIcon} width={16} height={16} />
                  </span>
                ) : (
                  <ShieldCheck size={16} style={{ color: isActive ? "white" : "#EF4444" }} />
                )}
                {t.label}

                {/* Progress bar at bottom of active tab */}
                {isActive && (
                  <span
                    className="absolute left-0 bottom-0"
                    style={{
                      height: "2px",
                      background: "rgba(255,255,255,0.5)",
                      borderRadius: "0 0 100px 100px",
                      width: `${progress}%`,
                      transition: `width ${TICK}ms linear`,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{ gap: "48px", minHeight: "480px" }}
          >
            {/* Left */}
            <div className="order-2 lg:order-1">
              <h3 style={{ fontSize: "32px", fontWeight: 500, letterSpacing: "-0.02em", color: "#0F172A", marginBottom: "12px" }}>{tab.title}</h3>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "28px", maxWidth: "440px" }}>{tab.description}</p>

              <motion.ul initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }} className="flex flex-col" style={{ gap: "12px" }}>
                {tab.features.map((f) => (
                  <motion.li key={f} variants={fadeUp} className="flex items-start" style={{ gap: "12px" }}>
                    <span className="flex items-center justify-center flex-shrink-0" style={{ width: "22px", height: "22px", borderRadius: "50%", background: `${tab.accent}1F`, marginTop: "1px" }}>
                      <Check size={12} style={{ color: tab.accent }} />
                    </span>
                    <span style={{ fontSize: "15px", color: "#374151", lineHeight: 1.5 }}>{f}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Tech pills with real icons */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                className="flex flex-wrap"
                style={{ gap: "8px", marginTop: "28px" }}
              >
                {tab.pills.map((p) => {
                  const pillData = getTechData(p);
                  return (
                    <motion.span
                      key={p}
                      variants={{ hidden: { opacity: 0, x: -8, scale: 0.9 }, visible: { opacity: 1, x: 0, scale: 1 } }}
                      className="inline-flex items-center"
                      style={{
                        gap: "6px",
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: "8px",
                        padding: "5px 12px",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#475569",
                        transition: "all 0.2s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = tab.accent;
                        e.currentTarget.style.color = tab.accent;
                        e.currentTarget.style.background = `${tab.accent}0D`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#E2E8F0";
                        e.currentTarget.style.color = "#475569";
                        e.currentTarget.style.background = "#F8FAFC";
                      }}
                    >
                      <Icon icon={pillData.icon} width={14} height={14} />
                      {p}
                    </motion.span>
                  );
                })}
              </motion.div>

            </div>

            {/* Right */}
            <div className="order-1 lg:order-2" style={{ background: "#F8FAFC", borderRadius: "20px", padding: "24px", border: "1px solid #F1F5F9" }}>
              {activeTab === 5 ? <SecurityTerminalMockup activeKey={activeTab} /> : (() => { const M = mockups[activeTab]; return <M />; })()}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
