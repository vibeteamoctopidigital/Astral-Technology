"use client";

import { Icon } from "@iconify/react";

const ICON_MAP: Record<string, { icon: string; color: string; bg: string }> = {
  React:            { icon: "logos:react",              color: "#61DAFB", bg: "#E8F9FE" },
  "Next.js":        { icon: "logos:nextjs-icon",        color: "#000000", bg: "#F0F0F0" },
  TypeScript:       { icon: "logos:typescript-icon",    color: "#3178C6", bg: "#EBF3FB" },
  "Node.js":        { icon: "logos:nodejs-icon",        color: "#339933", bg: "#EBF7EB" },
  Python:           { icon: "logos:python",             color: "#3776AB", bg: "#EBF2FB" },
  Go:               { icon: "logos:go",                 color: "#00ADD8", bg: "#E5F7FB" },
  PostgreSQL:       { icon: "logos:postgresql",         color: "#336791", bg: "#EBF0F7" },
  MongoDB:          { icon: "logos:mongodb-icon",       color: "#47A248", bg: "#EBF5EB" },
  Redis:            { icon: "logos:redis",              color: "#DC382D", bg: "#FCECEA" },
  GraphQL:          { icon: "logos:graphql",            color: "#E10098", bg: "#FCE6F4" },
  AWS:              { icon: "logos:aws",                color: "#FF9900", bg: "#FFF4E5" },
  Docker:           { icon: "logos:docker-icon",        color: "#2496ED", bg: "#E8F4FE" },
  Kubernetes:       { icon: "logos:kubernetes",         color: "#326CE5", bg: "#EBF0FD" },
  Terraform:        { icon: "logos:terraform-icon",     color: "#7B42BC", bg: "#F0E8FB" },
  "GitHub Actions": { icon: "logos:github-actions",     color: "#2088FF", bg: "#E8F2FF" },
  Figma:            { icon: "logos:figma",              color: "#F24E1E", bg: "#FEF0EC" },
  Flutter:          { icon: "logos:flutter",            color: "#02569B", bg: "#E5EEFA" },
  Swift:            { icon: "logos:swift",              color: "#F05138", bg: "#FEF0ED" },
  Firebase:         { icon: "logos:firebase",           color: "#FFCA28", bg: "#FFFAE8" },
  "Tailwind CSS":   { icon: "logos:tailwindcss-icon",   color: "#06B6D4", bg: "#E5F9FC" },
  Supabase:         { icon: "logos:supabase-icon",      color: "#3ECF8E", bg: "#EAF9F2" },
  "Framer Motion":  { icon: "logos:framer",             color: "#0055FF", bg: "#E5EEFF" },
  Expo:             { icon: "simple-icons:expo",        color: "#000020", bg: "#EBEBF0" },
  Kotlin:           { icon: "logos:kotlin-icon",        color: "#7F52FF", bg: "#F0EBFF" },
  Storybook:        { icon: "logos:storybook-icon",     color: "#FF4785", bg: "#FFEAF2" },
  dbt:              { icon: "logos:dbt-icon",           color: "#FF694B", bg: "#FFF0ED" },
  BigQuery:         { icon: "logos:google-bigquery",    color: "#4285F4", bg: "#EBF2FF" },
  Airflow:          { icon: "logos:airflow-icon",       color: "#017CEE", bg: "#E5F2FF" },
  TensorFlow:       { icon: "logos:tensorflow",         color: "#FF6F00", bg: "#FFF3E5" },
  Tableau:          { icon: "simple-icons:tableau",     color: "#E97627", bg: "#FEF3EA" },
  Snyk:             { icon: "logos:snyk",               color: "#4C4A73", bg: "#EEECF7" },
  Datadog:          { icon: "logos:datadog",            color: "#632CA6", bg: "#F0E8FB" },
  GitHub:           { icon: "logos:github-icon",        color: "#181717", bg: "#F0F0F0" },
  Vercel:           { icon: "logos:vercel-icon",        color: "#000000", bg: "#F0F0F0" },
};

type TechIconProps = {
  tech: string;
  size?: number;
  className?: string;
  showLabel?: boolean;
  variant?: "default" | "card" | "pill" | "badge";
};

export function getTechData(tech: string) {
  return ICON_MAP[tech] || { icon: "mdi:code-tags", color: "#64748B", bg: "#F1F5F9" };
}

export default function TechIcon({
  tech,
  size = 24,
  className = "",
  variant = "default",
}: TechIconProps) {
  const data = getTechData(tech);

  if (variant === "badge") {
    return (
      <span
        className={`inline-flex items-center ${className}`}
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
        }}
      >
        <Icon icon={data.icon} width={14} height={14} />
        {tech}
      </span>
    );
  }

  if (variant === "pill") {
    return (
      <span
        className={`inline-flex items-center ${className}`}
        style={{
          gap: "10px",
          background: "#FFFFFF",
          border: "1px solid #F1F5F9",
          borderRadius: "12px",
          padding: "10px 16px",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <span
          className="flex items-center justify-center"
          style={{
            width: `${size + 12}px`,
            height: `${size + 12}px`,
            borderRadius: "10px",
            background: data.bg,
          }}
        >
          <Icon icon={data.icon} width={size} height={size} />
        </span>
        <span style={{ fontSize: "14px", fontWeight: 500, color: "#334155" }}>
          {tech}
        </span>
      </span>
    );
  }

  if (variant === "card") {
    return (
      <span
        className={`flex items-center justify-center ${className}`}
        style={{
          width: `${size + 24}px`,
          height: `${size + 24}px`,
          borderRadius: "14px",
          background: data.bg,
          boxShadow: `inset 0 1px 2px rgba(255,255,255,0.8), 0 2px 8px ${data.color}20`,
        }}
      >
        <Icon icon={data.icon} width={size} height={size} />
      </span>
    );
  }

  return <Icon icon={data.icon} width={size} height={size} className={className} />;
}
