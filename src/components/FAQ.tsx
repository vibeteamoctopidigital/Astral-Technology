"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    question: "How quickly can you start on my project?",
    answer:
      "We can typically kick off within 1-2 weeks of signing. During onboarding, we'll align on goals, set up communication channels, and start the discovery phase immediately.",
  },
  {
    question: "What's the minimum engagement period?",
    answer:
      "We recommend a minimum of 3 months for meaningful results, but we don't lock you into long-term contracts. Our month-to-month flexibility means you can scale up or down as needed.",
  },
  {
    question: "How do you handle communication and updates?",
    answer:
      "You'll have a dedicated project manager and direct Slack access to your team. We run weekly sprint demos, daily standups, and provide detailed progress reports so you always know where things stand.",
  },
  {
    question: "Can you work with our existing codebase?",
    answer:
      "Absolutely. We regularly join projects mid-stream. We'll start with a thorough code audit, document the architecture, and ramp up quickly while respecting your existing patterns and conventions.",
  },
  {
    question: "What happens after the project launches?",
    answer:
      "We offer ongoing support and maintenance packages. Post-launch, we monitor performance, fix bugs, and continue iterating based on user feedback and analytics data.",
  },
  {
    question: "How do you ensure code quality?",
    answer:
      "Every PR goes through code review, we maintain 80%+ test coverage, and we use CI/CD pipelines with automated testing. We follow industry best practices and document everything thoroughly.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      style={{ borderBottom: "1px solid #F1F5F9" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group cursor-pointer"
        style={{ padding: "20px 0" }}
      >
        <span
          style={{
            fontSize: "17px",
            fontWeight: 600,
            color: isOpen ? "#7C3AED" : "#0F172A",
            paddingRight: "16px",
            transition: "color 0.2s ease",
          }}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={20}
            style={{
              color: isOpen ? "#7C3AED" : "#94A3B8",
              transition: "color 0.2s ease",
            }}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              style={{
                paddingBottom: "20px",
                fontSize: "15px",
                color: "#64748B",
                lineHeight: 1.7,
              }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ background: "#FFFFFF", padding: "96px 0" }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[720px] mx-auto px-6"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-14">
          <span className="section-label">FAQ</span>
          <h2 className="section-heading">
            Frequently asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtext">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          style={{
            background: "white",
            borderRadius: "20px",
            border: "1px solid rgba(0,0,0,0.06)",
            padding: "8px 28px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
