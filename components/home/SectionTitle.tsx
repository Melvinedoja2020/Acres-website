// components/SectionTitle.tsx
"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  accent?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  accent,
  alignment = "center",
  className = "",
}: SectionTitleProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      className={`mb-16 ${alignmentClasses[alignment]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {accent && (
        <motion.div
          className="inline-block mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide px-3 py-1 bg-emerald-50 rounded-full">
            {accent}
          </span>
        </motion.div>
      )}

      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative underline */}
      <motion.div
        className={`w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mt-8 ${
          alignment === "center"
            ? "mx-auto"
            : alignment === "right"
            ? "ml-auto"
            : ""
        }`}
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
}
