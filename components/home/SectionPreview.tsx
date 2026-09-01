// components/SectionTitle.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  accent?: "emerald" | "amber" | "slate" | "indigo" | "purple" | "cyan";
  alignment?: "left" | "center";
  children?: ReactNode;
}

const accentColors = {
  emerald: {
    badge: "from-emerald-400 to-emerald-500",
    text: "from-emerald-300 via-emerald-200 to-emerald-100",
    border: "border-emerald-300/40",
    glow: "bg-emerald-500/20",
    badgeText: "text-emerald-100",
  },
  amber: {
    badge: "from-amber-400 to-amber-500",
    text: "from-amber-300 via-amber-200 to-amber-100",
    border: "border-amber-300/40",
    glow: "bg-amber-500/20",
    badgeText: "text-amber-100",
  },
  indigo: {
    badge: "from-indigo-400 to-indigo-500",
    text: "from-indigo-300 via-indigo-200 to-indigo-100",
    border: "border-indigo-300/40",
    glow: "bg-indigo-500/20",
    badgeText: "text-indigo-100",
  },
  slate: {
    badge: "from-slate-400 to-slate-500",
    text: "from-slate-300 via-slate-200 to-slate-100",
    border: "border-slate-300/40",
    glow: "bg-slate-500/20",
    badgeText: "text-slate-100",
  },
  purple: {
    badge: "from-purple-400 to-purple-500",
    text: "from-purple-300 via-purple-200 to-purple-100",
    border: "border-purple-300/40",
    glow: "bg-purple-500/20",
    badgeText: "text-purple-100",
  },
  cyan: {
    badge: "from-cyan-400 to-cyan-500",
    text: "from-cyan-300 via-cyan-200 to-cyan-100",
    border: "border-cyan-300/40",
    glow: "bg-cyan-500/20",
    badgeText: "text-cyan-100",
  },
};

export function SectionTitle({
  title,
  subtitle,
  description,
  accent = "indigo",
  alignment = "center",
  children,
}: SectionTitleProps) {
  const textAlign = alignment === "center" ? "text-center" : "text-left";
  const containerAlign =
    alignment === "center" ? "items-center" : "items-start";
  const colors = accentColors[accent];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects - Matching About/CTA */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/15 to-indigo-300/25" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className={`relative z-10 flex flex-col ${containerAlign} max-w-4xl ${
          alignment === "center" ? "mx-auto" : ""
        } py-20 px-6 lg:px-8`}
      >
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative ${
              alignment === "center" ? "self-center" : "self-start"
            } mb-8`}
          >
            {/* Enhanced holographic glow effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-indigo-500/15 to-indigo-400/10 rounded-full blur-xl animate-pulse`}
            />

            {/* Badge with enhanced styling */}
            <motion.div
              className={`relative inline-flex items-center px-6 py-3 bg-black/60 backdrop-blur-lg border ${colors.border} ${colors.badgeText} text-sm font-semibold shadow-2xl rounded-full hover:scale-105 transition-transform duration-300`}
              whileHover={{
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
              }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-full backdrop-blur-sm" />
              <span className="relative drop-shadow-md">{subtitle}</span>
            </motion.div>
          </motion.div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight ${textAlign} mb-8`}
        >
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.text} drop-shadow-2xl`}
            style={{
              textShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
              filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))",
            }}
          >
            {title}
          </span>
        </motion.h2>

        {description && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`max-w-3xl ${textAlign} mb-8`}
          >
            <p
              className="text-xl sm:text-2xl text-indigo-50 leading-relaxed font-medium"
              style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}
            >
              {description}
            </p>
          </motion.div>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 w-full"
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
}
