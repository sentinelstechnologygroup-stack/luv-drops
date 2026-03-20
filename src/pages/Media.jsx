import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Headphones, Video, Mic2, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

const CATEGORIES = [
  { id: "All", label: "All Content" },
  { id: "TikTok", label: "TikTok" },
  { id: "Podcasts", label: "Podcasts" },
  { id: "Talks", label: "Talks & Interviews" },
];

const CATEGORY_ICONS = {
  TikTok: { icon: Video, color: "var(--blue-accent)" },
  Podcasts: { icon: Headphones, color: "var(--gold-warm)" },
  Talks: { icon: Mic2, color: "var(--navy)" },
};

const MEDIA_ITEMS = [
  {
    category: "TikTok",
    title: "Why I Started Sharing My Story",
    description:
      "A candid look at what made Nel decide to open up about his kidney journey — and why he believes lived experience is worth sharing, even when it's uncomfortable.",
    type: "Short Video",
    duration: "1 min",
    featured: true,
  },
  {
    category: "TikTok",
    title: "3 Things Nobody Tells You About Transplant Recovery",
    description:
      "The medical team prepares you for surgery. Nobody really prepares you for the months after. Nel shares what he wishes he'd known.",
    type: "Short Video",
    duration: "2 min",
    featured: false,
  },
  {
    category: "TikTok",
    title: "What Dialysis Actually Feels Like",
    description:
      "Not the clinical version — the real experience of sitting in that chair multiple times a week, exhausted, and choosing to keep going.",
    type: "Short Video",
    duration: "2 min",
    featured: false,
  },
  {
    category: "TikTok",
    title: "The Financial Side of Kidney Disease",
    description:
      "A subject most patients don't want to think about until they have to — and by then, it can feel overwhelming. Nel talks through the basics from firsthand experience.",
    type: "Short Video",
    duration: "3 min",
    featured: false,
  },
  {
    category: "Podcasts",
    title: "Rebuilding After a Transplant",
    description:
      "Nel joins the host to discuss the full arc of his kidney journey — from diagnosis to dialysis to transplant — and what rebuilding actually looked like in the years that followed.",
    type: "Podcast Episode",
    duration: "42 min",
    featured: true,
  },
  {
    category: "Podcasts",
    title: "Banking, Resilience, and Second Chances",
    description:
      "How Nel's career in personal and business banking unexpectedly gave him the tools to rebuild his life. A conversation about the overlap between financial literacy and personal resilience.",
    type: "Podcast Episode",
    duration: "38 min",
    featured: false,
  },
  {
    category: "Podcasts",
    title: "Navigating the Wait for a Donor",
    description:
      "The transplant waitlist is one of the most psychologically difficult parts of the kidney journey. Nel speaks openly about how he managed uncertainty, hope, and fear during that period.",
    type: "Podcast Episode",
    duration: "29 min",
    featured: false,
  },
  {
    category: "Talks",
    title: "Clarity in the Face of Adversity",
    description:
      "Recorded at a community health event, Nel talks about finding direction when everything feels uncertain — and the practical steps that helped him move forward.",
    type: "Talk",
    duration: "22 min",
    featured: true,
  },
  {
    category: "Talks",
    title: "The Gift of Time",
    description:
      "Nel reflects on what it means to receive the gift of a kidney from a donor — the weight of that gratitude, and how it reshaped his sense of purpose.",
    type: "Interview",
    duration: "18 min",
    featured: false,
  },
  {
    category: "Talks",
    title: "What I Learned from Starting Over",
    description:
      "A frank conversation about the hard lessons that only come from having your life genuinely disrupted — and why starting over, as frightening as it is, sometimes opens doors that were previously invisible.",
    type: "Interview",
    duration: "35 min",
    featured: false,
  },
];

function MediaCard({ item, index }) {
  const catConfig = CATEGORY_ICONS[item.category] || { icon: Play, color: "var(--blue-accent)" };
  const CatIcon = catConfig.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "var(--card-radius)", boxShadow: "var(--card-shadow)" }}
    >
      {/* Thumbnail */}
      <div
        className="relative aspect-video flex items-center justify-center cursor-pointer overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--navy) 0%, #2a3a4e 100%)`,
        }}
      >
        {item.featured && (
          <span className="absolute top-3 right-3 text-xs font-medium text-white bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">
            Featured
          </span>
        )}
        <span className="absolute top-3 left-3 text-xs font-medium text-white/75 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
          {item.type}
        </span>

        {/* Play button */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-10"
          style={{ backgroundColor: catConfig.color }}
        >
          <Play className="w-6 h-6 text-white ml-0.5" />
        </div>

        {/* Category icon watermark */}
        <CatIcon
          className="absolute bottom-3 right-4 w-8 h-8 opacity-10 text-white"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: catConfig.color }}
          >
            {item.category}
          </span>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {item.duration}
          </span>
        </div>
        <h3
          className="text-lg font-semibold mb-2 leading-snug"
          style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
        >
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Media() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? MEDIA_ITEMS
      : MEDIA_ITEMS.filter((item) => item.category === activeCategory);

  const featuredItem = MEDIA_ITEMS.find((item) => item.featured && item.category === "Talks") || MEDIA_ITEMS[0];

  return (
    <div>
      {/* Page Hero */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--footer-bg)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--blue-soft)" }}
            >
              Media & Insights
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stories, Talks &
              <br />
              Conversations
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              TikTok videos, podcast episodes, interviews, and talks — follow Nel's story and the ideas he's sharing along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured item */}
      <section className="py-14 md:py-16" style={{ backgroundColor: "var(--section-white)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--blue-accent)" }}
            >
              Featured
            </p>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center rounded-xl overflow-hidden" style={{ backgroundColor: "var(--section-gray)", border: "1px solid var(--card-border)" }}>
              {/* Thumbnail */}
              <div
                className="group relative aspect-video flex items-center justify-center cursor-pointer min-h-[220px]"
                style={{ background: "linear-gradient(135deg, var(--navy) 0%, #2a3a4e 100%)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "var(--blue-accent)" }}
                >
                  <Play className="w-7 h-7 text-white ml-1" />
                </div>
                <span className="absolute top-4 left-4 text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  {featuredItem.type} · {featuredItem.duration}
                </span>
              </div>
              {/* Text */}
              <div className="p-8 md:p-10">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--blue-accent)" }}
                >
                  {featuredItem.category}
                </span>
                <h2
                  className="text-2xl md:text-3xl font-semibold mt-3 mb-4 leading-snug"
                  style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
                >
                  {featuredItem.title}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {featuredItem.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <SectionWrapper bg="var(--section-gray)">
        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
              style={
                activeCategory === cat.id
                  ? { backgroundColor: "var(--navy)", color: "white" }
                  : {
                      backgroundColor: "transparent",
                      color: "var(--text-secondary)",
                      border: "1px solid #e2e8f0",
                    }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex gap-6 mb-10 flex-wrap">
          {CATEGORIES.filter((c) => c.id !== "All").map((cat) => {
            const count = MEDIA_ITEMS.filter((i) => i.category === cat.id).length;
            const config = CATEGORY_ICONS[cat.id];
            const CIcon = config.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex items-center gap-2 text-sm cursor-pointer transition-opacity hover:opacity-70"
                style={{ color: "var(--text-muted)" }}
              >
                <CIcon className="w-4 h-4" style={{ color: config.color }} />
                {count} {cat.label}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <MediaCard key={item.title} item={item} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p style={{ color: "var(--text-muted)" }}>No content in this category yet.</p>
          </div>
        )}
      </SectionWrapper>

      {/* Follow CTA */}
      <section className="py-14 md:py-16" style={{ backgroundColor: "var(--section-white)" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto px-6 lg:px-8 text-center"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--blue-accent)" }}
          >
            Stay Connected
          </p>
          <h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
          >
            New content added regularly
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Nel shares new TikToks, podcast appearances, and talks as they're published.
            Follow along to stay connected with the journey.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80 cursor-pointer"
              style={{ backgroundColor: "var(--navy)", color: "white" }}
            >
              Follow on TikTok
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}