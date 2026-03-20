import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import StayConnected from "@/components/shared/StayConnected";
import InlineCTA from "@/components/shared/InlineCTA";
import PageHero from "@/components/shared/PageHero";

const CHAPTERS = [
  {
    id: "before",
    phase: "Chapter One",
    title: "Life Before Illness",
    pullQuote: "Life had a rhythm. A plan. A direction.",
    content: [
      "Before the diagnosis, Nel Duo was building something. A career in personal and business banking. A sense of direction. The kind of quiet confidence that comes from hard work paying off, from showing up every day and watching small efforts compound into real progress.",
      "He was focused on the future — on what came next, on what he was building toward. Like most people in their working years, illness wasn't part of the plan. It wasn't even a distant thought.",
      "Looking back, that version of life feels both familiar and foreign — familiar because the values and drive were always there, foreign because he didn't yet know what resilience really meant. Not the kind you can only learn by going through something that dismantles everything.",
    ],
  },
  {
    id: "diagnosis",
    phase: "Chapter Two",
    title: "The Kidney Diagnosis",
    pullQuote: "The doctor's words landed slowly, then all at once.",
    content: [
      "Kidney failure isn't always dramatic at first. For Nel, the signs were there — fatigue that didn't lift, changes that seemed easy to explain away. But when the diagnosis came, there was no explaining it away. The kidneys were failing. The path forward had fundamentally changed.",
      "There's a particular kind of fear that comes with a serious medical diagnosis — not just fear of what's happening physically, but fear of what it means for everything else. The job. The finances. The relationships. The future you'd been carefully assembling.",
      "Nel remembers the weight of those early days. The questions that didn't have easy answers. The conversations that had to happen. The moment when you realize that resilience isn't something you choose — it's something you're forced to find, whether you feel ready or not.",
    ],
  },
  {
    id: "dialysis",
    phase: "Chapter Three",
    title: "Dialysis and Uncertainty",
    pullQuote: "Dialysis doesn't pause for the rest of your life.",
    content: [
      "Dialysis is relentless. Multiple sessions per week, hours at a time, a machine doing the work your kidneys no longer can. It's physically exhausting in ways that are hard to describe to someone who hasn't lived it — a tiredness that settles into your bones, that makes ordinary tasks feel extraordinary.",
      "But what people don't often talk about is the emotional and practical weight of it. Dialysis reshapes your schedule, your relationships, your energy, your sense of self. It asks you to keep going — to keep working if you can, to keep showing up for the people who need you — while carrying something enormous.",
      "For Nel, this period was about learning a different kind of discipline. Not the discipline of ambition, but the discipline of endurance. Showing up not because everything was fine, but because giving up wasn't an option. Some days that looked like strength. Some days it just looked like getting out of bed.",
      "He also learned something important during those months of waiting: that uncertainty, while deeply uncomfortable, doesn't have to be paralyzing. You can hold the unknown and still move forward. You can be afraid and still be present.",
    ],
  },
  {
    id: "transplant",
    phase: "Chapter Four",
    title: "The Transplant Journey",
    pullQuote: "Someone else's generosity made a new life possible.",
    content: [
      "The call came. It's something transplant patients wait for and simultaneously dread — the hope of it, the sudden urgency, the weight of what it means. A donor. A match. A chance.",
      "The transplant surgery itself is a strange kind of milestone. You go under hoping to wake up different — not just medically, but in some deeper sense. And in many ways, Nel did. The first weeks after a successful transplant carry a kind of fragile gratitude that's hard to put into words. The body is adjusting. The medications are many. The future is suddenly, cautiously, possible again.",
      "But Nel also sat with the profound weight of the gift. Someone, or someone's family, made a decision that gave him this chance. That's not something you carry lightly. It became, and remains, part of his sense of purpose — the quiet obligation to live fully, to make the second chance mean something.",
    ],
  },
  {
    id: "rebuilding",
    phase: "Chapter Five",
    title: "Rebuilding Life After Transplant",
    pullQuote: "Recovery isn't a destination. It's a daily practice.",
    content: [
      "The transplant was a beginning, not an ending. Post-transplant life comes with its own complexity — medications for life, monitoring, adjustments, and the slow, nonlinear process of reclaiming physical and emotional stamina.",
      "Nel had to rebuild practically as well as physically. Years of health challenges leave marks on more than the body — they affect careers, finances, relationships, and the quiet confidence that comes from feeling like you're moving in a clear direction. Rebuilding required honesty about where things stood and intentionality about where he wanted to go.",
      "Drawing on his background in banking — a world built on planning, structure, and long-term thinking — Nel began applying those same tools to his own life. Not with rigid optimism, but with realistic hope. What's the current situation? What are the available resources? What's the most practical next step?",
      "That framework — honest assessment, practical planning, patient action — is something he now shares with others. Because rebuilding after adversity isn't mystical. It's methodical, and it takes time, and it's more possible than it feels in the hardest moments.",
    ],
  },
  {
    id: "lessons",
    phase: "Chapter Six",
    title: "Lessons Learned",
    pullQuote: "The most useful things I know, I learned the hard way.",
    content: [
      "Nel doesn't claim to have all the answers. What he has are hard-won insights from a journey that forced him to examine everything — his priorities, his assumptions, his relationship with control and uncertainty, and what it actually means to live well.",
      "He learned that clarity is a practice, not a state. That it requires honesty — with yourself, about where you are and what you can realistically do from here. That support systems matter enormously, and that asking for help is not weakness but wisdom.",
      "He learned that financial resilience and personal resilience are more connected than most people realize. That structure and planning, even simple versions of them, create stability when everything else feels uncertain. That the banking skills he spent years developing weren't separate from his recovery — they were central to it.",
      "Most of all, he learned that lived experience has value. Not just as personal history, but as something worth sharing — because someone else is in the middle of their own hard chapter right now, and knowing that someone else came through theirs can make the difference between giving up and finding a way forward.",
    ],
    cta: { label: "Explore L.U.V. Drops®", page: "LuvDrops" },
    isLast: true,
  },
];

function ChapterCard({ chapter, index }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative"
    >
      {/* Connector line */}
      {!chapter.isLast && (
        <div
          className="absolute left-[19px] top-[52px] bottom-0 w-px hidden md:block"
          style={{ backgroundColor: "var(--blue-accent)", opacity: 0.15 }}
        />
      )}

      <div className="flex gap-6 md:gap-8">
        {/* Chapter number dot */}
        <div className="flex-shrink-0 hidden md:flex flex-col items-center pt-1">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white z-10"
            style={{ backgroundColor: "var(--navy)" }}
          >
            {index + 1}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pb-14">
          {/* Header — always visible */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full text-left group cursor-pointer"
            aria-expanded={expanded}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--blue-accent)" }}
            >
              {chapter.phase}
            </p>
            <div className="flex items-center justify-between gap-4">
              <h2
                className="text-2xl md:text-3xl font-semibold leading-tight"
                style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
              >
                {chapter.title}
              </h2>
              <ChevronDown
                className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                style={{
                  color: "var(--blue-accent)",
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </div>
          </button>

          {/* Pull quote */}
          <p
            className="mt-4 text-lg italic font-medium"
            style={{ color: "var(--blue-accent)", fontFamily: "'Playfair Display', serif" }}
          >
            {chapter.pullQuote}
          </p>

          {/* Expandable body */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6 space-y-4">
                  {chapter.content.map((para, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function TheJourney() {
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
              The Journey
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From Kidney Failure
              <br />
              to Finding Purpose
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              This is Nel's story — told honestly, with the details that actually matter to someone who might be in the middle of their own hard chapter right now.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro note */}
      <section className="py-12 md:py-14" style={{ backgroundColor: "var(--section-white)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 md:p-10 border-l-4"
            style={{ backgroundColor: "var(--cream)", borderColor: "var(--blue-accent)" }}
          >
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Nel shares his story not because it's exceptional, but because it's real. Kidney failure, dialysis, transplant, recovery — these are experiences millions of people navigate, often without a roadmap. What follows is Nel's journey, told in his own voice, with the hope that some part of it resonates with yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapters */}
      <SectionWrapper bg="var(--section-white)">
        <div className="max-w-3xl mx-auto">
          {CHAPTERS.map((chapter, i) => (
            <ChapterCard key={chapter.id} chapter={chapter} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Closing quote */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--section-gray)" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
        >
          <div
            className="w-12 h-1 mx-auto mb-10 rounded-full"
            style={{ backgroundColor: "var(--blue-accent)" }}
          />
          <blockquote
            className="text-2xl md:text-3xl font-medium leading-relaxed italic"
            style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
          >
            "I didn't choose this journey, but I choose what I do with it.
            If my story can give someone else clarity or courage,
            then every hard day was worth it."
          </blockquote>
          <p className="mt-6 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
            — Nel Duo
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={createPageUrl("HowNelHelps")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "var(--navy)", color: "white" }}
            >
              See How Nel Helps
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={createPageUrl("BookNel")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border transition-all duration-200 hover:bg-gray-50"
              style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
            >
              Book a Conversation
            </Link>
          </div>
        </motion.div>
      </section>

      <StayConnected source="journey-page" />
    </div>
  );
}