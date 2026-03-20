import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Compass, Heart, Mic, ArrowRight, Check, Quote } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import StayConnected from "@/components/shared/StayConnected";

const SERVICES = [
  {
    id: "life-strategy",
    icon: Compass,
    color: "var(--blue-accent)",
    bg: "var(--cream)",
    eyebrow: "Service One",
    title: "Life Strategy Conversations",
    intro:
      "After a major life disruption, it's common to feel like you've lost your footing. The clarity you once had about where you were going — it can disappear overnight. This is where Nel starts.",
    description:
      "Nel draws on his own experience of rebuilding after kidney failure and transplant, combined with years of work in personal and business banking, to help individuals think clearly about where they are and where they want to go. These aren't therapy sessions or motivational pep talks. They're honest, structured conversations designed to help you cut through the noise and identify what actually matters and what your most realistic next step is.",
    note: "This is especially useful for people who feel stuck, overwhelmed, or unsure how to prioritize when everything feels important and nothing feels manageable.",
    points: [
      "Rebuilding clarity after life disruption",
      "Practical goal-setting and life planning",
      "Navigating financial recovery after illness or crisis",
      "Identifying what matters most and what to do first",
      "Building structure and momentum when starting over",
    ],
  },
  {
    id: "kidney-support",
    icon: Heart,
    color: "var(--gold-warm)",
    bg: "white",
    eyebrow: "Service Two",
    title: "Kidney Journey Support",
    intro:
      "Kidney disease — whether it's a new diagnosis, years on dialysis, the transplant process, or life post-transplant — can feel profoundly isolating. The medical system handles the clinical side. But there's a lot it doesn't cover.",
    description:
      "Nel has been through it. Dialysis. The wait. The surgery. The recovery. The adjustment that doesn't end when you leave the hospital. He speaks from experience, not from a textbook, and that makes a real difference when you're in the middle of it and need to hear from someone who actually knows what it's like.",
    note: "This is for kidney patients at any stage, and for their families, who are often navigating something enormous with very little preparation.",
    points: [
      "Perspective from someone who has lived the kidney journey",
      "Guidance for patients navigating diagnosis, dialysis, or transplant",
      "Support for family members who feel lost or overwhelmed",
      "Honest conversation about the emotional and financial realities",
      "Community connection and shared understanding",
    ],
  },
  {
    id: "speaking",
    icon: Mic,
    color: "var(--navy)",
    bg: "var(--cream)",
    eyebrow: "Service Three",
    title: "Speaking & Interviews",
    intro:
      "Nel's story works in a room because it's honest. He's not selling a formula or claiming to have figured everything out. He's sharing what he actually went through and what he actually learned — and audiences connect with that.",
    description:
      "He speaks at conferences, community events, health organizations, nonprofits, and on podcasts. The topics naturally center on resilience, rebuilding, and finding direction after adversity, but Nel also brings in the financial literacy angle — a perspective that's often missing from conversations about health crises and life disruption.",
    note: "Organizations working in health, financial wellness, community support, or personal development tend to find Nel's message resonates strongly with their audiences.",
    topics: [
      {
        label: "Resilience after adversity",
        detail: "What resilience actually looks like — not as a motivational concept, but as a daily practice when life has genuinely fallen apart.",
      },
      {
        label: "Rebuilding life after a health crisis",
        detail: "The practical and emotional work of starting over — physically, financially, and personally — after a serious illness.",
      },
      {
        label: "Financial clarity after crisis",
        detail: "Using the tools of financial planning to bring structure and direction to a life that's been derailed by health challenges.",
      },
      {
        label: "Lessons from the kidney journey",
        detail: "A frank account of what dialysis, transplant, and recovery teach you — about patience, gratitude, and what actually matters.",
      },
    ],
    points: [],
  },
];

function SpeakingTopics({ topics }) {
  return (
    <div className="mt-8 space-y-4">
      <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
        Speaking Topics
      </p>
      {topics.map((topic) => (
        <div
          key={topic.label}
          className="rounded-xl p-5"
          style={{ backgroundColor: "var(--section-gray)", border: "1px solid var(--card-border)" }}
        >
          <p className="text-sm font-semibold mb-1" style={{ color: "var(--navy)" }}>
            {topic.label}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {topic.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

function ServiceSection({ service, index }) {
  const isEven = index % 2 === 0;

  const bgColor = index % 2 === 0 ? "var(--section-white)" : "var(--section-gray)";
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-start`}
        >
          {/* Text side */}
          <div className={isEven ? "" : "md:order-2"}>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: service.color }}
            >
              {service.eyebrow}
            </p>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ backgroundColor: service.color + "18" }}
            >
              <service.icon className="w-6 h-6" style={{ color: service.color }} />
            </div>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-5 leading-snug"
              style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
            >
              {service.title}
            </h2>

            {/* Intro (italic pull) */}
            <p
              className="text-lg italic leading-relaxed mb-5"
              style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif", opacity: 0.75 }}
            >
              {service.intro}
            </p>

            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {service.description}
            </p>

            {/* Note box */}
            <div
              className="rounded-xl px-5 py-4 border-l-4 mb-8"
              style={{
                backgroundColor: service.color + "0d",
                borderColor: service.color,
              }}
            >
              <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
                {service.note}
              </p>
            </div>

            {/* Bullet points */}
            {service.points.length > 0 && (
              <ul className="space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: service.color + "22" }}
                    >
                      <Check className="w-3 h-3" style={{ color: service.color }} />
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Speaking topics */}
            {service.topics && <SpeakingTopics topics={service.topics} />}
          </div>

          {/* Visual side */}
          <div className={`${isEven ? "" : "md:order-1"} flex items-center justify-center`}>
            <div
              className="w-full rounded-2xl p-12 md:p-16 flex flex-col items-center justify-center gap-6 min-h-[280px]"
              style={{ backgroundColor: service.color + "10", border: `1px solid ${service.color}20` }}
            >
              <service.icon
                className="w-20 h-20"
                style={{ color: service.color, opacity: 0.25 }}
              />
              <div className="text-center max-w-xs">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  Reach out to start a conversation about how Nel can support you or your audience.
                </p>
              </div>
              <Link
                to={createPageUrl("BookNel")}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:gap-3 mt-2"
                style={{ color: service.color }}
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HowNelHelps() {
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
              How Nel Helps
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Practical Support,
              <br />
              Real Perspective
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nel doesn't offer programs or packages. He offers honest conversation, lived experience, and the kind of perspective that only comes from having actually been through it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {SERVICES.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}

      {/* Final CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--section-white)" }}>
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
            style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
          >
            Not Sure Where to Start?
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
            That's completely normal. A simple conversation is often the first step. Nel is happy to connect, hear where you are, and figure out together whether and how he can help.
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
              to={createPageUrl("Contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border transition-all duration-200 hover:bg-gray-50"
              style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
            >
              Send a Message
            </Link>
          </div>
        </motion.div>
      </section>

      <StayConnected source="how-nel-helps-page" />
    </div>
  );
}