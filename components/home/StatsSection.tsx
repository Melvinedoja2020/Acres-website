/* eslint-disable @typescript-eslint/no-explicit-any */
// components/StatsSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Building2,
  Users,
  Globe,
  Handshake,
  Award,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Stat {
  icon: any;
  value: string;
  label: string;
  description: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: "5000+",
    label: "Expected Attendees",
    description: "Industry professionals, investors, and government officials",
    color: "from-indigo-400 to-indigo-500",
  },
  {
    icon: Building2,
    value: "$2.5B",
    label: "Investment Opportunities",
    description: "Showcased projects and funding opportunities",
    color: "from-indigo-300 to-indigo-400",
  },
  {
    icon: Globe,
    value: "40+",
    label: "Countries Represented",
    description: "Pan-African and international participation",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Handshake,
    value: "200+",
    label: "Strategic Partnerships",
    description: "Business connections and collaborations formed",
    color: "from-indigo-200 to-indigo-300",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Satisfaction Rate",
    description: "From previous ACRES events",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    icon: Award,
    value: "50+",
    label: "Industry Awards",
    description: "Recognizing excellence and innovation",
    color: "from-indigo-300 to-indigo-500",
  },
];

function AnimatedCounter({
  target,
  duration = 2,
}: {
  target: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(target.replace(/[^\d]/g, ""));
  const suffix = target.replace(/[\d]/g, "");

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(numericValue * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [numericValue, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Holographic Card Component
const HolographicStatCard = ({
  stat,
  index,
}: {
  stat: Stat;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
    whileHover={{
      rotateY: 15,
      rotateX: 10,
      scale: 1.05,
      y: -8,
      transition: { duration: 0.3 },
    }}
    className="group relative"
  >
    {/* Holographic glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-indigo-500/15 to-indigo-400/10 rounded-2xl blur-xl animate-pulse group-hover:blur-2xl transition-all duration-500" />

    {/* Main card */}
    <div className="relative bg-black/60 backdrop-blur-lg border border-indigo-300/40 rounded-2xl p-1 shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500">
      <div className="bg-black/40 rounded-xl h-full p-8 backdrop-blur-sm border border-white/10 hover:border-indigo-300/50 transition-all duration-300">
        {/* Icon */}
        <div
          className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-indigo-500/30 border border-indigo-400/50`}
        >
          <stat.icon className="w-8 h-8 text-white" />
        </div>

        {/* Value */}
        <motion.div
          className="text-4xl md:text-5xl font-bold mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        >
          <span
            className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent drop-shadow-lg`}
          >
            <AnimatedCounter target={stat.value} />
          </span>
        </motion.div>

        {/* Label */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors drop-shadow-lg">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-indigo-50 leading-relaxed drop-shadow-md">
          {stat.description}
        </p>

        {/* Hover Effect Line */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-xl`}
        />
      </div>
    </div>
  </motion.div>
);

export function StatsSection() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      {/* Background Effects - Matching AboutPreview */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/15 to-indigo-300/25" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-black/60 backdrop-blur-lg border border-indigo-300/40 text-indigo-100 text-sm font-medium mb-6 shadow-2xl">
            Our Impact
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Impact by
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-100">
              Numbers
            </span>
          </h2>

          <p
            className="text-xl text-indigo-50 max-w-3xl mx-auto leading-relaxed"
            style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}
          >
            ACRES continues to drive transformation across Africa&apos;s
            construction and real estate sectors
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <HolographicStatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 border border-indigo-400/50"
          >
            Join the Movement
            <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
