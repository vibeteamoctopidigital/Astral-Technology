"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import LogoSlider from "./LogoSlider";

const headlineWords1 = ["Your", "startup's", "dedicated"];
const headlineWords2 = [
  { text: "technology", gradient: true },
  { text: "team", gradient: false },
];

export default function Hero() {

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* === ANIMATED MESH GRADIENT BACKGROUND === */}

      {/* Base gradient that slowly shifts */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 15%, #e8e6f9 30%, #e3f0fa 45%, #eaf4fc 60%, #eee9fc 75%, #f5f3ff 90%, #f0eeff 100%)",
          backgroundSize: "400% 400%",
          animation: "hero-mesh 15s ease infinite",
        }}
      />

      {/* Animated color blobs - morphing shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Purple blob - top left */}
        <div
          className="absolute"
          style={{
            top: "5%",
            left: "5%",
            width: "550px",
            height: "550px",
            background:
              "radial-gradient(circle, rgba(137,126,227,0.25) 0%, rgba(137,126,227,0.12) 40%, transparent 70%)",
            filter: "blur(40px)",
            animation: "blob-morph-1 12s ease-in-out infinite",
          }}
        />

        {/* Cyan blob - top right */}
        <div
          className="absolute"
          style={{
            top: "0%",
            right: "0%",
            width: "480px",
            height: "480px",
            background:
              "radial-gradient(circle, rgba(70,159,221,0.2) 0%, rgba(70,159,221,0.1) 40%, transparent 70%)",
            filter: "blur(40px)",
            animation: "blob-morph-2 10s ease-in-out infinite",
          }}
        />

        {/* Indigo blob - center */}
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(ellipse, rgba(108,112,233,0.15) 0%, rgba(108,112,233,0.06) 40%, transparent 65%)",
            filter: "blur(60px)",
            animation: "blob-morph-3 14s ease-in-out infinite",
          }}
        />

        {/* Pink blob - bottom right */}
        <div
          className="absolute"
          style={{
            bottom: "0%",
            right: "10%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(137,126,227,0.12) 0%, rgba(108,112,233,0.05) 40%, transparent 70%)",
            filter: "blur(50px)",
            animation: "blob-morph-4 11s ease-in-out infinite",
          }}
        />

        {/* Teal blob - bottom left */}
        <div
          className="absolute"
          style={{
            bottom: "10%",
            left: "5%",
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(circle, rgba(70,159,221,0.12) 0%, transparent 65%)",
            filter: "blur(45px)",
            animation: "blob-morph-2 13s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(137,126,227,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          zIndex: 0,
        }}
      />

      {/* Noise grain texture for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        className="relative text-center w-full"
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
          style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(137,126,227,0.2)",
            borderRadius: "100px",
            padding: "6px 16px",
            boxShadow:
              "0 2px 12px rgba(137,126,227,0.12), 0 0 0 1px rgba(255,255,255,0.5) inset",
          }}
        >
          <span className="relative flex items-center justify-center">
            <span
              className="absolute rounded-full"
              style={{
                width: "8px",
                height: "8px",
                background: "#22C55E",
                animation: "pulse-dot 2s ease-out infinite",
              }}
            />
            <span
              className="rounded-full"
              style={{ width: "8px", height: "8px", background: "#22C55E" }}
            />
          </span>
          <span
            className="text-[13px] font-medium"
            style={{ color: "#374151" }}
          >
            Now accepting new clients
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className="flex flex-col items-center"
          style={{
            fontSize: "48px",
            fontWeight: 400,
            letterSpacing: "-1px",
            lineHeight: "70px",
          }}
        >
          <span className="flex flex-wrap justify-center gap-x-[0.3em]">
            {headlineWords1.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                style={{ color: "var(--dark)" }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="flex flex-wrap justify-center gap-x-[0.3em]">
            {headlineWords2.map((word, i) => (
              <motion.span
                key={word.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + (headlineWords1.length + i) * 0.05,
                }}
                className={word.gradient ? "gradient-text-hero" : ""}
                style={!word.gradient ? { color: "var(--dark)" } : undefined}
              >
                {word.text}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto"
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#000000",
            lineHeight: 1.75,
            maxWidth: "560px",
            marginTop: "28px",
          }}
        >
          We embed with your team to design, build, and ship products — so you
          can focus on growing your business while we handle the tech.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center"
          style={{ gap: "14px", marginTop: "40px" }}
        >
          <a
            href="#contact"
            className="btn-shimmer inline-flex items-center text-[15px] font-semibold text-white rounded-full"
            style={{
              background:
                "linear-gradient(135deg, #897EE3 0%, #6C70E9 100%)",
              padding: "14px 28px",
              boxShadow: "0 4px 20px rgba(137,126,227,0.4)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(137,126,227,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(137,126,227,0.4)";
            }}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.97)")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
          >
            Book a Call
            <ArrowRight size={16} className="ml-1.5" />
          </a>
          <a
            href="#process"
            className="inline-flex items-center text-[15px] font-medium rounded-full"
            style={{
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(12px)",
              border: "1.5px solid rgba(137,126,227,0.25)",
              padding: "14px 28px",
              color: "#374151",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(137,126,227,0.06)";
              e.currentTarget.style.borderColor = "rgba(137,126,227,0.4)";
              e.currentTarget.style.color = "#897EE3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.65)";
              e.currentTarget.style.borderColor = "rgba(137,126,227,0.25)";
              e.currentTarget.style.color = "#374151";
            }}
          >
            <Play
              size={14}
              className="mr-1.5"
              style={{ fill: "currentColor" }}
            />
            See How It Works
          </a>
        </motion.div>
      </div>

      {/* Logo marquee strip — sits right below the CTA buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="w-full"
        style={{ zIndex: 1, marginTop: "56px" }}
      >
        <LogoSlider />
      </motion.div>
    </section>
  );
}
