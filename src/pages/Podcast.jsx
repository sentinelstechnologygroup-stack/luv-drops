import React from "react";
import { motion } from "framer-motion";
import { Mic, Headphones, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import PageHero from "@/components/shared/PageHero";
import ComingSoonBanner from "@/components/shared/ComingSoonBanner";
import SectionWrapper from "@/components/shared/SectionWrapper";
import StayConnected from "@/components/shared/StayConnected";

const PLANNED_TOPICS = [
  "What dialysis really feels like — and how to keep going",
  "Rebuilding your finances after a medical crisis",
  "The kidney transplant process: what no one prepares you for",
  "Resilience as a daily practice, not a personality trait",
  "Life strategy conversations with people who've been through it",
];

export default function Podcast() {
  return (
    <div>
      <ComingSoonBanner
        message="Nel's podcast is in development. Sign up below to be notified when it launches."
      />

      <PageHero
        eyebrow="Podcast"
        title={"Honest Conversations\nAbout Adversity"}
        subtitle="Long-form discussions on resilience, the kidney journey, rebuilding life after crisis, and finding clarity when everything falls apart."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--blue-accent)" }}
          >
            What to Expect
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
          >
            Real Stories, Real Guidance
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Nel will host and guest on conversations covering the topics that matter most to people navigating kidney disease, life disruption, and the slow work of rebuilding.
          </p>
        </div>

        {/* Planned topics */}
        <div className="max-w-2xl mx-auto space-y-4">
          {PLANNED_TOPICS.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100"
              style={{ backgroundColor: "white" }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--blue-accent)18" }}
              >
                <Mic className="w-4 h-4" style={{ color: "var(--blue-accent)" }} />
              </div>
              <p className="text-base leading-relaxed pt-1" style={{ color: "var(--text-secondary)" }}>
                {topic}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Guest CTA */}
        <div className="max-w-xl mx-auto mt-16 text-center rounded-2xl p-10" style={{ backgroundColor: "var(--cream-dark)" }}>
          <Headphones className="w-10 h-10 mx-auto mb-5" style={{ color: "var(--blue-accent)" }} />
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
          >
            Want to Be a Guest?
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            If you have a story of resilience, recovery, or rebuilding that Nel's audience would connect with, he'd love to hear from you.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--blue-accent)" }}
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      <StayConnected source="podcast-page" />
    </div>
  );
}