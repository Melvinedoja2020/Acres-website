// components/PartnersPreview.tsx
"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Landmark,
  Users,
  Globe,
  Award,
  Handshake,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

import { ReactNode } from "react";

interface PartnerCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
  description: string;
  count: string;
  partners: string[];
}

const partnerCategories: PartnerCategory[] = [
  {
    title: "Government Partners",
    icon: Landmark,
    color: "from-indigo-500 to-indigo-600",
    iconColor: "text-indigo-300",
    description:
      "Endorsed by ministries and public agencies across African countries committed to sustainable urban development.",
    count: "Multiple National Governments",
    partners: [
      "Ministries of Housing & Urban Development",
      "Ministries of Infrastructure",
      "Urban Development Agencies",
    ],
  },
  {
    title: "Financial Institutions",
    icon: TrendingUp,
    color: "from-indigo-600 to-indigo-700",
    iconColor: "text-indigo-400",
    description:
      "Banks and development finance institutions supporting infrastructure and real estate investment across Africa.",
    count: "AfDB, IFC, and more",
    partners: [
      "African Development Bank (AfDB)",
      "World Bank Group",
      "International Finance Corporation (IFC)",
    ],
  },
  {
    title: "International Organizations",
    icon: Globe,
    color: "from-indigo-300 to-indigo-400",
    iconColor: "text-indigo-100",
    description:
      "Global institutions partnering to promote housing, sustainability, and real estate excellence in Africa.",
    count: "Global Support Partners",
    partners: ["UN-Habitat", "International Real Estate Federation (FIABCI)"],
  },
  {
    title: "Industry Associations",
    icon: Building2,
    color: "from-indigo-400 to-indigo-500",
    iconColor: "text-indigo-200",
    description:
      "Professional bodies advancing construction, engineering, and real estate practice across the continent.",
    count: "Regional Associations",
    partners: [
      "African Real Estate Society (AFRES)",
      "Federation of African Engineering Organizations",
      "Corea",
    ],
  },
];

const sponsorshipTiers = [
  {
    tier: "Platinum",
    color: "from-indigo-400 to-indigo-500",
    borderColor: "border-indigo-300/40",
    glowColor: "shadow-indigo-500/30",
    benefits: "5",
    companies: [
      "African Development Bank (AfDB)",
      "International Finance Corporation (IFC)",
    ],
  },
  {
    tier: "Gold",
    color: "from-indigo-500 to-indigo-600",
    borderColor: "border-indigo-400/50",
    glowColor: "shadow-indigo-500/40",
    benefits: "8",
    companies: ["UN-Habitat", "World Bank Group"],
  },
  {
    tier: "Silver",
    color: "from-indigo-600 to-indigo-700",
    borderColor: "border-indigo-500/60",
    glowColor: "shadow-indigo-500/50",
    benefits: "12",
    companies: [
      "African Real Estate Society (AFRES)",
      "Federation of African Engineering Organizations",
    ],
  },
];

interface HolographicPartnerCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Holographic Partner Card Component
const HolographicPartnerCard = ({
  children,
  className = "",
  delay = 0,
}: HolographicPartnerCardProps) => (
  <motion.div
    className={`relative ${className}`}
    initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 1, ease: "easeOut" }}
    whileHover={{
      rotateY: 15,
      rotateX: 10,
      scale: 1.05,
      transition: { duration: 0.3 },
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-indigo-500/15 to-indigo-400/10 rounded-2xl blur-xl animate-pulse" />
    <div className="relative bg-black/60 backdrop-blur-lg border border-indigo-300/40 rounded-2xl p-6 shadow-2xl hover:shadow-indigo-500/30 hover:border-indigo-300/60 transition-all duration-300 h-full">
      <div className="bg-black/40 rounded-xl h-full flex flex-col backdrop-blur-sm p-4">
        {children}
      </div>
    </div>
  </motion.div>
);

export function PartnersPreview() {
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className={`mb-16 `}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-400 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {" "}
            Our Partners
          </motion.h2>

          <motion.p
            className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Powered by Industry Leaders
          </motion.p>
        </motion.div>

        {/* Partner Categories */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partnerCategories.map((category, index) => (
            <HolographicPartnerCard key={index} delay={index * 0.2}>
              <div
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 shadow-2xl border border-indigo-400/50`}
              >
                <category.icon className={`w-8 h-8 ${category.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                {category.title}
              </h3>

              <p className="text-indigo-100 text-sm mb-4 leading-relaxed drop-shadow-md">
                {category.description}
              </p>

              <div className="mb-4">
                <span className="inline-block bg-black/60 backdrop-blur-lg text-indigo-200 text-sm font-semibold px-3 py-2 rounded-full border border-indigo-300/40 shadow-lg">
                  {category.count}
                </span>
              </div>

              <div className="space-y-2 flex-1">
                {category.partners.slice(0, 3).map((partner, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-indigo-50 flex items-center gap-2 drop-shadow-md"
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full shadow-sm"></div>
                    {partner}
                  </div>
                ))}
                {category.partners.length > 3 && (
                  <div className="text-sm text-indigo-200/70 italic drop-shadow-md">
                    +{category.partners.length - 3} more partners
                  </div>
                )}
              </div>
            </HolographicPartnerCard>
          ))}
        </motion.div>

        {/* Sponsorship Tiers */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-block px-4 py-2 bg-black/60 backdrop-blur-lg border border-indigo-300/40 text-indigo-100 text-sm font-medium mb-6 shadow-2xl rounded-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Sponsorship Opportunities
            </motion.div>

            <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-100 drop-shadow-lg">
              Sponsorship Tiers
            </h3>
            <p className="text-indigo-50 text-xl max-w-2xl mx-auto drop-shadow-md">
              Join our prestigious sponsors and showcase your commitment to
              Africa&apos;s construction and real estate future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-indigo-500/15 to-indigo-400/10 rounded-2xl blur-xl animate-pulse" />
                <div
                  className={`relative bg-black/60 backdrop-blur-lg rounded-2xl p-8 ${tier.borderColor} border-2 hover:${tier.glowColor} hover:shadow-2xl transition-all duration-300 text-center`}
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border border-indigo-400/50`}
                  >
                    <Award className="w-10 h-10 text-white" />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {tier.tier}
                  </h4>
                  <p className="text-indigo-100 mb-6 drop-shadow-md">
                    {tier.benefits} Premium Benefits
                  </p>

                  <div className="space-y-2 mb-6">
                    {tier.companies.map((company, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-indigo-50 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg border border-indigo-300/20 drop-shadow-md"
                      >
                        {company}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${tier.color} text-white py-3 rounded-xl font-semibold hover:shadow-2xl hover:${tier.glowColor} transition-all duration-300 border border-indigo-400/50`}
                  >
                    Join {tier.tier}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership Impact Stats */}
        <motion.div
          className="bg-black/60 backdrop-blur-lg rounded-3xl p-8 mb-16 border border-indigo-300/40 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-100 drop-shadow-lg">
              Partnership Impact
            </h3>
            <p className="text-indigo-50 text-lg drop-shadow-md">
              Together, we&apos;re transforming Africa&apos;s built environment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "$5.2B+",
                label: "Combined Investment",
                icon: TrendingUp,
              },
              { number: "150+", label: "Active Projects", icon: Building2 },
              { number: "35", label: "African Countries", icon: Globe },
              { number: "2M+", label: "Jobs Created", icon: Users },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-2xl border border-indigo-400/50 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-sm text-indigo-200 font-medium drop-shadow-md">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300 border border-indigo-400/50"
          >
            <Handshake className="w-7 h-7" />
            Become a Partner
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
