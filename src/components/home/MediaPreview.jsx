import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Play, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";

const MEDIA_ITEMS = [
  {
    type: "TikTok",
    title: "Why I Started Sharing My Story",
    description: "A candid look at what made Nel decide to use his experience to help others.",
  },
  {
    type: "Podcast",
    title: "Rebuilding After a Transplant",
    description: "Nel discusses the emotional and financial side of recovery on this featured podcast episode.",
  },
  {
    type: "Video",
    title: "Clarity in the Face of Adversity",
    description: "A short talk on how to find direction when everything feels uncertain.",
  },
];

export default function MediaPreview() {
  return (
    <SectionWrapper bg="var(--section-white)">
      <SectionHeader
        eyebrow="Media & Insights"
        title="Stories Worth Hearing"
        description="Follow Nel's journey through talks, podcasts, and short-form content."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {MEDIA_ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "var(--card-radius)", boxShadow: "var(--card-shadow)" }}
          >
            {/* Thumbnail placeholder */}
            <div className="relative aspect-video flex items-center justify-center" style={{ backgroundColor: "var(--navy)" }}>
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "var(--blue-accent)" }}
              >
                <Play className="w-6 h-6 text-white ml-0.5" />
              </div>
              <span className="absolute top-3 left-3 text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                {item.type}
              </span>
            </div>
            <div className="p-6">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to={createPageUrl("Media")}
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:gap-3"
          style={{ color: "var(--blue-accent)" }}
        >
          View All Media
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
}