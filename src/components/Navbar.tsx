"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Technologies", href: "#technologies" },
  { name: "Results", href: "#results" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        boxShadow: scrolled
          ? "0 1px 0 rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.04)"
          : "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div
          className="flex items-center justify-between"
          style={{
            height: scrolled ? "60px" : "72px",
            transition: "height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center group"
            style={{ transition: "transform 0.2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src="https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69e3ea2e38381eafa8635941.png"
              alt="Astral Technology"
              style={{ height: "48px", width: "auto", filter: "brightness(0)" }}
            />
            <span
              style={{
                marginLeft: 6,
                fontFamily: "var(--font-noto-serif), 'Noto Serif', serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "19px",
                letterSpacing: "0",
                color: "#0F172A",
                whiteSpace: "nowrap",
              }}
            >
              Astral Technology
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-[15px] font-medium transition-colors duration-200"
                style={{ color: "var(--gray-500)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--purple)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--gray-500)")
                }
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex btn-shimmer items-center text-[14px] font-semibold text-white rounded-full"
            style={{
              background: "linear-gradient(135deg, #897EE3 0%, #6C70E9 100%)",
              padding: "10px 22px",
              boxShadow: "0 4px 15px rgba(137,126,227,0.35)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(137,126,227,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(137,126,227,0.35)";
            }}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.97)")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.transform = "translateY(-1px)")
            }
          >
            Get Started
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            style={{ color: "var(--gray-500)" }}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
            style={{
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid var(--gray-100)",
            }}
          >
            <div className="px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobile}
                  className="flex items-center text-[15px] font-medium"
                  style={{
                    color: "var(--gray-500)",
                    height: "48px",
                    borderBottom: "1px solid var(--gray-100)",
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMobile}
                className="btn-shimmer flex items-center justify-center text-[14px] font-semibold text-white rounded-full mt-4"
                style={{
                  background:
                    "linear-gradient(135deg, #897EE3 0%, #6C70E9 100%)",
                  padding: "12px 28px",
                  boxShadow: "0 4px 15px rgba(137,126,227,0.35)",
                }}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
