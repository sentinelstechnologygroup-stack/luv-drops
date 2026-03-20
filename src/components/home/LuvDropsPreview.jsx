import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    letter: "L",
    word: "LEARN",
    color: "#7fb3cc",
    tagline: "Learn What Matters",
    description:
      "Unleash the version of yourself that’s been buried beneath doubt, fear, and expectation. Growth isn’t about becoming someone new — it’s about removing what was never you, so who you truly are can move freely.",
  },
  {
    letter: "U",
    word: "UNLEASH",
    color: "#b89b5e",
    tagline: "Unleash What Was Always There",
    description:
      "Unleash the version of yourself that’s been buried beneath doubt, fear, and expectation. Growth isn’t about becoming someone new — it’s about removing what was never you, so who you truly are can move freely.",
  },
  {
    letter: "V",
    word: "VALUE",
    color: "#5b8fa8",
    tagline: "Value What You Love",
    description:
      "Align your life with what matters most. When your decisions reflect your values, direction becomes clear — even in difficult seasons.",
  },
];

export default function LuvDropsPreview() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "var(--section-white)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue-accent)" }}>
            The Philosophy
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
          >
            The L.U.V. Drops® Philosophy
          </h2>
          {/* Gold accent line */}
          <div className="w-12 h-0.5 mx-auto mb-5 rounded-full" style={{ backgroundColor: "var(--gold-warm)" }} />
          <p className="text-base text-gray-500 leading-relaxed">
            L.U.V. Drops® exists to help people learn what matters, unlearn what limits them, and value what they love.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.letter}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl p-8 transition-shadow duration-300 hover:shadow-lg"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e6e8eb", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}
            >
              {/* Letter badge */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: pillar.color + "18" }}
                >
                  <span
                    className="text-2xl font-bold"
                    style={{ color: pillar.color, fontFamily: "'Playfair Display', serif" }}
                  >
                    {pillar.letter}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: pillar.color }}>
                    {pillar.word}
                  </p>
                </div>
              </div>
              {/* Content */}
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
              >
                {pillar.tagline}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to={createPageUrl("LuvDrops")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--navy)", color: "white" }}
          >
            Explore L.U.V. Drops®
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}