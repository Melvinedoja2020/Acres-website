// components/SpeakersPreview.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Award, Building, MapPin, Users } from "lucide-react";

const featuredSpeakers = [
  {
    name: "Featured Government Leader",
    title: "Minister of Housing & Urban Development",
    company: "Federal Government of Nigeria",
    location: "Abuja, Nigeria",
    image: "/api/placeholder/300/300",
    bio: "Overseeing national housing and infrastructure policies driving urban development and sustainability efforts in Nigeria.",
    specialties: [
      "Public Policy",
      "Urban Infrastructure",
      "Affordable Housing",
    ],
    social: {},
    featured: true,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    name: "International Finance Expert",
    title: "Senior Investment Officer",
    company: "International Finance Corporation (IFC)",
    location: "Washington, D.C., USA",
    image: "/api/placeholder/300/300",
    bio: "Championing sustainable real estate investment strategies across African markets through IFC-backed initiatives.",
    specialties: [
      "Impact Investment",
      "Sustainable Finance",
      "Project Structuring",
    ],
    social: {},
    featured: true,
    color: "from-indigo-400 to-indigo-500",
  },
  {
    name: "Urban Development Specialist",
    title: "Program Officer",
    company: "UN-Habitat",
    location: "Nairobi, Kenya",
    image: "/api/placeholder/300/300",
    bio: "Driving global initiatives in sustainable urban planning, housing accessibility, and smart city frameworks in African cities.",
    specialties: ["Sustainability", "Smart Cities", "Urban Planning"],
    social: {},
    featured: true,
    color: "from-indigo-300 to-indigo-400",
  },
  {
    name: "Academic Partner",
    title: "Professor of Real Estate & Urban Studies",
    company: "African Real Estate Society (AFRES)",
    location: "Cape Town, South Africa",
    image: "/api/placeholder/300/300",
    bio: "Conducting cutting-edge research and capacity-building for Africa’s next generation of real estate professionals.",
    specialties: [
      "Education & Research",
      "Urban Studies",
      "Workforce Development",
    ],
    social: {},
    featured: false,
    color: "from-indigo-200 to-indigo-300",
  },
];

// Holographic Speaker Card Component
const HolographicSpeakerCard = ({
  speaker,
  index,
}: {
  speaker: (typeof featuredSpeakers)[0];
  index: number;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    }}
    initial={{ opacity: 0, rotateY: -30, scale: 0.8 }}
    whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
    whileHover={{
      y: -8,
      transition: { duration: 0.3 },
    }}
    className="group relative"
  >
    {/* Main card */}
    <div className="bg-black/60 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full hover:border-indigo-300/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:bg-black/70">
      {/* Speaker Avatar Section */}
      <div className="relative mb-6">
        <div className="relative">
          <div
            className={`w-16 h-16 bg-gradient-to-r ${speaker.color} rounded-xl flex items-center justify-center mx-auto shadow-2xl shadow-indigo-500/30 border border-indigo-400/50 group-hover:scale-110 transition-transform duration-300`}
          >
            <span className="text-xl font-bold text-white drop-shadow-lg">
              {speaker.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>
      </div>

      {/* Speaker Details */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors drop-shadow-lg">
          {speaker.name}
        </h3>
        <p className="text-indigo-300 font-semibold mb-2 drop-shadow-md text-sm">
          {speaker.title}
        </p>
        <p className="text-indigo-100 text-sm mb-2 flex items-center gap-1 drop-shadow-md">
          <Building className="w-4 h-4 flex-shrink-0" />
          <span className="leading-tight">{speaker.company}</span>
        </p>
        <p className="text-indigo-200 text-sm mb-4 flex items-center gap-1 drop-shadow-md">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          {speaker.location}
        </p>

        <p className="text-indigo-50 text-sm leading-relaxed mb-4 drop-shadow-md line-clamp-3">
          {speaker.bio}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2">
          {speaker.specialties.slice(0, 2).map((specialty, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-indigo-500/20 text-indigo-200 rounded-full border border-indigo-400/50 backdrop-blur-sm"
            >
              {specialty}
            </span>
          ))}
          {speaker.specialties.length > 2 && (
            <span className="text-xs px-3 py-1 bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-sm">
              +{speaker.specialties.length - 2} more
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

export function SpeakersPreview() {
  const stats = [
    { number: "12+", label: "Government Officials", icon: Users },
    { number: "25+", label: "Industry CEOs", icon: Building },
    { number: "15+", label: "Tech Innovators", icon: Award },
    { number: "18+", label: "Investment Leaders", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects - Matching AboutPreview */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/15 to-indigo-300/25" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="inline-block px-4 py-2 bg-black/60 backdrop-blur-lg border border-indigo-300/40 text-indigo-100 text-sm font-medium mb-6 shadow-2xl">
            Featured Speakers
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Visionary Leaders
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-100">
              Shaping Africa
            </span>
          </h1>

          <div className="space-y-6 text-lg text-indigo-50 leading-relaxed max-w-4xl">
            <p style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}>
              Engage with government leaders, industry experts, and global
              partners shaping the future of Africa&apos;s construction and real
              estate sectors.
            </p>
            <p style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}>
              Discover the collaborations, insights, and innovations driving
              sustainable urban growth and investment across the continent.
            </p>
          </div>
        </motion.div>

        {/* Featured Speakers Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
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
          {featuredSpeakers
            .filter((speaker) => speaker.featured)
            .map((speaker, index) => (
              <HolographicSpeakerCard
                key={index}
                speaker={speaker}
                index={index}
              />
            ))}
        </motion.div>

        {/* Stats Section - Matching AboutPreview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.5 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-black/60 backdrop-blur-lg rounded-xl border border-white/20 hover:shadow-2xl hover:shadow-indigo-500/30 hover:bg-black/70 hover:border-white/30 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-indigo-300 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                {stat.number}
              </div>
              <div className="text-sm text-indigo-200 font-medium drop-shadow-md">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Speakers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12"
        >
          <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:shadow-2xl hover:shadow-indigo-500/20 hover:bg-black/70 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-2xl shadow-indigo-500/30 border border-indigo-400/50">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                50+ Industry Leaders
              </h3>
              <p className="text-indigo-50 mb-6 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
                Join conversations with ministers, CEOs, architects, and
                investors from across Africa and beyond. Experience diverse
                perspectives on the future of construction and real estate.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 border border-indigo-400/50"
          >
            <Users className="w-5 h-5" />
            Meet All Speakers
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
