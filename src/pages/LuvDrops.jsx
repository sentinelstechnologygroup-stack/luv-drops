// src/pages/LuvDrops.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, BookOpen, RotateCcw, Compass } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import StayConnected from "@/components/shared/StayConnected";

const PILLARS = [
  {
    letter: "L",
    word: "Learn",
    icon: BookOpen,
    color: "var(--blue-accent)",
    tagline: "Learn What Matters",
    description:
      "In the hardest seasons of life, we’re forced to confront what actually matters — not what we assumed mattered. L is about gaining clarity. It’s about getting honest with yourself about your values, your priorities, and what you’re truly building toward. When the noise fades, what’s real becomes clear.",
  },
  {
    letter: "U",
    word: "Unleash",
    icon: RotateCcw,
    color: "var(--gold-warm)",
    tagline: "Unleash What Was Always There",
    description:
      "Most of us aren’t stuck because we need more — we’re stuck because of what we’re carrying. Beliefs, expectations, fear, and habits that were never meant for us. U is about removing what doesn’t belong so you can move freely again. Growth isn’t about becoming someone new — it’s about unleashing who you’ve been all along.",
  },
  {
    letter: "V",
    word: "Value",
    icon: Compass,
    color: "var(--navy)",
    tagline: "Value What You Love",
    description:
      "Once you’re clear on what matters and free from what holds you back, the next step is alignment. V is about living in a way that reflects what you truly value — not occasionally, but consistently. When your decisions align with what matters most, direction becomes clear, even in difficult seasons.",
  },
];

const HOW_IT_APPEARS = [
  {
    context: "In Conversations",
    description:
      "When Nel sits with someone navigating a major life challenge, L.U.V. Drops® provides the framework — honest questions, space to reflect, and practical next steps.",
  },
  {
    context: "In Speaking",
    description:
      "Nel brings L.U.V. Drops® to conferences, community events, and podcast conversations as a lens for thinking about resilience, rebuilding, and purpose.",
  },
  {
    context: "In Content",
    description:
      "Short-form insights, reflections, and stories — each one a small drop of perspective designed to land when someone needs it most.",
  },
  {
    context: "In the Kidney Journey",
    description:
      "The philosophy was born from Nel's own experience with kidney failure, dialysis, and transplant — and it speaks directly to anyone navigating a health crisis that reshapes everything.",
  },
];

export default function LuvDrops() {
  return (
    <div>
      <PageHero
        eyebrow="L.U.V. Drops®"
        title={"Small Moments.\nBig Shifts."}
        subtitle="L.U.V. Drops® is a philosophy built on the belief that insight doesn't always arrive in grand revelations — sometimes it comes in small drops, one at a time."
      />

      {/* Mission statement */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--section-white)" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-12 h-1 mx-auto mb-10 rounded-full"
              style={{ backgroundColor: "var(--blue-accent)" }}
            />
            <blockquote
              className="text-2xl md:text-3xl font-medium leading-relaxed italic"
              style={{
                color: "var(--navy)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              "L.U.V. Drops® exists to help people learn what matters, unleash
              who they truly are, and live aligned with what they value most."
            </blockquote>
            <p
              className="mt-6 text-sm font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              — Nel Duo, Founder of L.U.V. Drops®
            </p>
          </motion.div>
        </div>
      </section>

      {/* The three pillars */}
      <SectionWrapper bg="var(--section-gray)">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--blue-accent)" }}
          >
            The Framework
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{
              color: "var(--navy)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            What L.U.V. Stands For
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.letter}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid md:grid-cols-5 gap-6 md:gap-10 items-start rounded-xl p-8 md:p-10"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "var(--card-radius)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              {/* Letter */}
              <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: pillar.color + "15" }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{
                      color: pillar.color,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {pillar.letter}
                  </span>
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: pillar.color }}
                  >
                    {pillar.word}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-4">
                <h3
                  className="text-xl md:text-2xl font-semibold mb-3"
                  style={{
                    color: "var(--navy)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {pillar.tagline}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Nel Created It */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--section-white)" }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--blue-accent)" }}
              >
                The Origin
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold mb-6 leading-snug"
                style={{
                  color: "var(--navy)",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Why Nel Created L.U.V. Drops®
              </h2>
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                <p>
                  L.U.V. Drops® wasn't created in a quiet moment of inspiration.
                  It was forged in the middle of one of the most difficult
                  periods of Nel's life — kidney failure, dialysis, waiting for
                  a transplant, and the long, nonlinear work of rebuilding
                  everything that came after.
                </p>
                <p>
                  During that time, Nel noticed something: the moments that
                  helped him most weren't grand breakthroughs. They were small
                  drops of perspective that landed at exactly the right time. A
                  conversation. A question that reframed everything. A moment of
                  stillness that made the next step visible.
                </p>
                <p>
                  He created L.U.V. Drops® because he believed those moments
                  were worth naming, sharing, and cultivating — not just for
                  himself, but for anyone navigating a hard chapter and looking
                  for a way through.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--blue-accent)" }}
              >
                The Idea Behind the Name
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold mb-6 leading-snug"
                style={{
                  color: "var(--navy)",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                How Small Moments Create Big Change
              </h2>
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                <p>
                  A drop of water doesn't seem significant. But drops, over
                  time, carve canyons. They fill reservoirs. They sustain life.
                </p>
                <p>
                  L.U.V. Drops® works the same way. It doesn't promise
                  transformation through a single event or a system you
                  implement in a weekend. It's a philosophy built for the long
                  game — for the person who is in the middle of something hard
                  and needs small, steady moments of clarity to keep moving.
                </p>
                <p>
                  Each drop is an opportunity to learn something true, unleash
                  what was always there, and take one more step toward a life
                  that actually reflects who you are.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it appears */}
      <SectionWrapper bg="var(--section-gray)">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--blue-accent)" }}
          >
            In Practice
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{
              color: "var(--navy)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            How L.U.V. Drops® Shows Up
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {HOW_IT_APPEARS.map((item, i) => (
            <motion.div
              key={item.context}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-xl p-7 border-l-4"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "var(--blue-accent)",
                border: "1px solid #e6e8eb",
                borderLeftWidth: "4px",
                borderLeftColor: "var(--blue-accent)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: "var(--blue-accent)" }}
              >
                {item.context}
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--section-white)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
        >
          <div
            className="w-12 h-1 mx-auto mb-10 rounded-full"
            style={{ backgroundColor: "var(--blue-accent)" }}
          />
          <h2
            className="text-3xl md:text-4xl font-semibold mb-5"
            style={{
              color: "var(--navy)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Ready to Start With a Drop?
          </h2>
          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether you're navigating something difficult right now or simply
            looking to live with more clarity and intention — Nel would love to
            connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl("BookNel")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "var(--navy)", color: "white" }}
            >
              Book a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={createPageUrl("TheJourney")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border transition-all duration-200 hover:bg-gray-50"
              style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
            >
              Read Nel's Story
            </Link>
          </div>
        </motion.div>
      </section>

      <StayConnected source="luv-drops-page" />
    </div>
  );
}