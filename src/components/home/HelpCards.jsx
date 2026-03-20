import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Compass, Heart, Mic, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";

const CARDS = [
  {
    icon: Compass,
    title: "Life Strategy Conversations",
    description:
      "Helping individuals rebuild clarity and direction after major life challenges.",
    color: "var(--blue-accent)",
  },
  {
    icon: Heart,
    title: "Kidney Journey Support",
    description:
      "Sharing perspective and guidance for individuals and families navigating kidney disease or transplant.",
    color: "var(--gold-warm)",
  },
  {
    icon: Mic,
    title: "Speaking & Events",
    description:
      "Nel shares his story and the L.U.V. Drops® philosophy through talks, interviews, and community events.",
    color: "var(--navy)",
  },
];

export default function HelpCards() {
  return (
    <SectionWrapper bg="var(--section-white)">
      <SectionHeader
        eyebrow="How Nel Helps"
        title="Rebuilding Starts with the Right Support"
        description="Whether you're navigating a health crisis, rebuilding after adversity, or looking for perspective — Nel's experience can help light the way."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-xl p-8 transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--card-border)", borderRadius: "var(--card-radius)", boxShadow: "var(--card-shadow)" }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ backgroundColor: card.color + "15" }}
            >
              <card.icon className="w-6 h-6" style={{ color: card.color }} />
            </div>
            <h3
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
            >
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to={createPageUrl("HowNelHelps")}
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:gap-3"
          style={{ color: "var(--blue-accent)" }}
        >
          Learn More About How Nel Helps
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
}