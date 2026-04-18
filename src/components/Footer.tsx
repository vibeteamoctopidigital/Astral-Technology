"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Check, Send, Mail } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const colHeading: React.CSSProperties = {
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.22)",
  marginBottom: 16,
  display: "block",
};

const footerLink: React.CSSProperties = {
  fontSize: 13,
  color: "rgba(255,255,255,0.42)",
  textDecoration: "none",
  transition: "all 0.15s ease",
  width: "fit-content",
  display: "block",
};

const checkItems = [
  "Reply within 24 hours",
  "Free first consultation",
  "No long-term contracts",
];

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  border: "1px solid #E9E4F5",
  borderRadius: 9,
  fontSize: "13.5px",
  color: "#0F172A",
  background: "#FFFFFF",
  outline: "none",
  transition: "border-color 0.18s, box-shadow 0.18s",
  fontFamily: "inherit",
};

const labelBase: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 600,
  color: "#6B7280",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  marginBottom: 6,
};

function handleFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "#897EE3";
  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(137,126,227,0.07)";
}

function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "#E9E4F5";
  e.currentTarget.style.boxShadow = "none";
}

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <>
      {/* CTA / Contact Section */}
      <section
        id="contact"
        className="relative overflow-hidden"
        style={{
          background: "#FFFFFF",
          padding: "120px 0",
          borderTop: "1px solid #F1F5F9",
        }}
      >
        {/* Subtle bg blobs */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: -80,
            left: -80,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(137,126,227,0.04), transparent 70%)",
            zIndex: 0,
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: -60,
            right: -60,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(70,159,221,0.04), transparent 70%)",
            zIndex: 0,
          }}
        />

        <div
          className="relative grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 40px",
            gap: 80,
            zIndex: 1,
          }}
        >
          {/* Left Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "#897EE3",
                display: "block",
                marginBottom: 16,
              }}
            >
              Contact
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              style={{
                fontSize: "48px",
                fontWeight: 400,
                color: "#000000",
                letterSpacing: "-1px",
                lineHeight: "70px",
                marginBottom: 16,
              }}
            >
              Let&apos;s build
              <br />
              something{" "}
              <span
                className="gradient-text"
              >
                together.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#000000",
                lineHeight: 1.75,
                maxWidth: 300,
                marginBottom: 40,
              }}
            >
              Tell us what you&apos;re working on. We&apos;ll get back within 24
              hours.
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {checkItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.14 + i * 0.08 }}
                  style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#475569" }}
                >
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "#F0EEFF",
                      border: "1px solid rgba(137,126,227,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={10} color="#897EE3" strokeWidth={2.5} />
                  </span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            <div
              style={{
                background: "#FAFAFA",
                border: "1px solid #F0EDF8",
                borderRadius: 20,
                padding: 36,
              }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ textAlign: "center", padding: "40px 16px" }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #897EE3, #6C70E9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 18px",
                      boxShadow: "0 6px 20px rgba(137,126,227,0.25)",
                    }}
                  >
                    <Check size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <p style={{ fontSize: 18, fontWeight: 500, color: "#0F172A", marginBottom: 8 }}>
                    Message sent!
                  </p>
                  <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.65 }}>
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <h3 style={{ fontSize: 18, fontWeight: 500, color: "#0F172A", marginBottom: 4 }}>
                    Get in touch
                  </h3>
                  <p style={{ fontSize: 13, color: "#94A3B8", marginBottom: 24 }}>
                    We&apos;ll reply within 24 hours.
                  </p>

                  {/* Row 1 — Name + Email */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2"
                    style={{ gap: 12, marginBottom: 14 }}
                  >
                    <div>
                      <label style={labelBase}>
                        Name <span style={{ color: "#897EE3" }}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        style={inputBase}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <label style={labelBase}>
                        Email <span style={{ color: "#897EE3" }}>*</span>
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          type="email"
                          placeholder="Your email"
                          required
                          data-lpignore="true"
                          data-form-type="other"
                          data-1p-ignore="true"
                          data-bwignore="true"
                          autoComplete="off"
                          className="contact-email-input"
                          style={{ ...inputBase, paddingRight: 52 }}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          suppressHydrationWarning
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2 — Phone with country flag picker */}
                  <div style={{ marginBottom: 14 }}>
                    <label style={labelBase}>
                      Phone <span style={{ color: "#897EE3" }}>*</span>
                    </label>
                    <PhoneInput
                      defaultCountry="us"
                      value={phone}
                      onChange={setPhone}
                      inputClassName="contact-phone-input"
                      className="contact-phone-wrapper"
                      placeholder="Your phone number"
                    />
                  </div>

                  {/* Row 3 — Message */}
                  <div>
                    <label style={labelBase}>
                      Message <span style={{ color: "#897EE3" }}>*</span>
                    </label>
                    <textarea
                      placeholder="Tell us about your project..."
                      required
                      style={{
                        ...inputBase,
                        height: 92,
                        resize: "none" as const,
                        lineHeight: 1.65,
                      }}
                      onFocus={handleFocus as any}
                      onBlur={handleBlur as any}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="contact-submit-btn"
                    style={{
                      width: "100%",
                      padding: 13,
                      background: "linear-gradient(135deg, #897EE3 0%, #6C70E9 100%)",
                      color: "white",
                      border: "none",
                      borderRadius: 10,
                      fontSize: 14,
                      fontWeight: 500,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 7,
                      marginTop: 20,
                      letterSpacing: "-0.01em",
                      transition: "all 0.2s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(137,126,227,0.32)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
                    onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                  >
                    <Send size={14} />
                    Send Message
                  </button>

                  <p style={{ textAlign: "center", fontSize: "11.5px", color: "#C4B5FD", marginTop: 10 }}>
                    We never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0F172A", padding: "48px 0 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
          {/* Main Grid */}
          <div className="footer-grid">
            {/* Column 1 — Logo + Partners */}
            <div className="footer-col-logo">
              <div style={{ marginBottom: 24 }}>
                <img
                  src="https://assets.cdn.filesafe.space/VCuRrweOCvIBspfmXXkp/media/69e3ea2e38381eafa8635941.png"
                  alt="Astral Technology"
                  style={{ height: 64, width: "auto" }}
                />
              </div>

              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: "rgba(255,255,255,0.22)",
                  marginBottom: 12,
                  display: "block",
                }}
              >
                Our Partners
              </span>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { src: "https://astral-system.com/wp-content/uploads/2025/12/google-4x.webp", alt: "Google Partners" },
                  { src: "https://astral-system.com/wp-content/uploads/2025/12/meta-4x.webp", alt: "Meta Business Partner" },
                  { src: "https://astral-system.com/wp-content/uploads/2025/12/tiktok-4x.webp", alt: "TikTok Marketing Partners" },
                  { src: "https://astral-system.com/wp-content/uploads/2025/12/whatsapp-4x.webp", alt: "WhatsApp Business" },
                ].map((p) => (
                  <div
                    key={p.alt}
                    style={{ display: "flex", alignItems: "center", opacity: 0.4, transition: "opacity 0.2s ease", cursor: "default" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      style={{ height: 18, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 — Services */}
            <div>
              <span style={colHeading}>Services</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {["Web Development", "Mobile Development", "UI/UX Design", "Cloud & DevOps", "Data & Analytics"].map((link) => (
                  <a
                    key={link}
                    href="#services"
                    style={footerLink}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "translateX(3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.42)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3 — Company */}
            <div>
              <span style={colHeading}>Company</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {["About Us", "Careers", "Blog", "Case Studies", "Contact"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={footerLink}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "translateX(3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.42)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4 — Get in Touch */}
            <div>
              <span style={colHeading}>Get in Touch</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <a
                  href="mailto:info@myastraltech.com"
                  style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "12.5px", color: "rgba(255,255,255,0.42)", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.42)")}
                >
                  <Mail size={13} style={{ opacity: 0.55 }} />
                  info@myastraltech.com
                </a>
                <a
                  href="https://wa.me/12368864928"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "12.5px", color: "rgba(255,255,255,0.42)", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.42)")}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.55)">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  +1 (236) 886-4928
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="flex items-center justify-between flex-wrap"
            style={{ padding: "18px 0", gap: 10 }}
          >
            {/* Left — copyright */}
            <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.2)" }}>
              &copy; 2026 Astral Technology. All rights reserved.
            </span>

            {/* Center — 3 social icons */}
            <div className="flex items-center" style={{ gap: 6 }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/astralsystemhub/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" style={{ opacity: 0.38 }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/AstralSystemLtd"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white" style={{ opacity: 0.38 }}>
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/astral-system/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" style={{ opacity: 0.38 }}>
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>

            {/* Right — developed by */}
            <div className="flex items-center" style={{ gap: 20 }}>
              <span style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.2)" }}>
                Developed by{" "}
                <a
                  href="https://octopi-digital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}
                >
                  Octopi Digital LLC
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
