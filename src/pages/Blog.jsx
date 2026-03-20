import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import StayConnected from "@/components/shared/StayConnected";

const CATEGORY_LABELS = {
  "kidney-journey": "Kidney Journey",
  "life-after-dialysis": "Life After Dialysis",
  "financial-resilience": "Financial Resilience",
  "resilience-adversity": "Resilience & Adversity",
  general: "General",
};

const CATEGORY_COLORS = {
  "kidney-journey": "var(--blue-accent)",
  "life-after-dialysis": "var(--gold-warm)",
  "financial-resilience": "var(--navy)",
  "resilience-adversity": "var(--blue-accent)",
  general: "var(--text-muted)",
};

const POSTS = [
  {
    id: "post-1",
    title: "What Nobody Tells You About Life After a Kidney Transplant",
    excerpt:
      "The surgery is a milestone, not a finish line. Here’s what the first year of post-transplant life actually looks like — the recovery, the medications, and the slow work of rebuilding.",
    category: "kidney-journey",
    read_time_minutes: 6,
    created_date: "2026-02-10",
  },
  {
    id: "post-2",
    title: "How I Used Banking Principles to Rebuild My Life After Illness",
    excerpt:
      "Years in personal and business banking taught me how to assess reality honestly and build a workable plan. Those same tools became essential when I had to rebuild after kidney failure.",
    category: "financial-resilience",
    read_time_minutes: 5,
    created_date: "2026-01-28",
  },
  {
    id: "post-3",
    title: "The Emotional Weight of Dialysis — and How to Carry It",
    excerpt:
      "Dialysis is relentless. People talk about the physical side. Less talked about is what it does to your mind, your relationships, and your sense of self.",
    category: "life-after-dialysis",
    read_time_minutes: 7,
    created_date: "2026-01-12",
  },
  {
    id: "post-4",
    title: "Resilience Isn’t a Personality Trait — It’s a Practice",
    excerpt:
      "We talk about resilience like some people have it and others don’t. I don’t think that’s true. I think it’s built, day by day, through small decisions to keep going.",
    category: "resilience-adversity",
    read_time_minutes: 4,
    created_date: "2025-12-20",
  },
];

function PostCard({ post, index }) {
  const color = CATEGORY_COLORS[post.category] || "var(--blue-accent)";
  const label = CATEGORY_LABELS[post.category] || "General";
  const dateStr = post.created_date
    ? new Date(post.created_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="aspect-video flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, var(--navy) 0%, #2a3a4e 100%)",
        }}
      >
        <div
          className="w-10 h-10 rounded-full opacity-30"
          style={{ backgroundColor: color }}
        />
      </div>

      <div className="p-7">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider"
            style={{ color }}
          >
            <Tag className="w-3 h-3" />
            {label}
          </span>
          {post.read_time_minutes && (
            <span
              className="flex items-center gap-1 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              <Clock className="w-3 h-3" />
              {post.read_time_minutes} min read
            </span>
          )}
        </div>

        <h2
          className="text-xl font-semibold leading-snug mb-3"
          style={{
            color: "var(--navy)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {post.title}
        </h2>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "var(--text-secondary)" }}
        >
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          {dateStr && (
            <span
              className="text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              {dateStr}
            </span>
          )}
          <span
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5"
            style={{ color: "var(--blue-accent)" }}
          >
            Read Article <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Object.keys(CATEGORY_LABELS)],
    []
  );

  const filtered =
    activeCategory === "All"
      ? POSTS
      : POSTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--navy)" }}
      >
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
              Blog
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Insights on Resilience
              <br />& Rebuilding
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Honest reflections on the kidney journey, life after dialysis,
              financial recovery, and what it actually takes to start over.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
              style={
                activeCategory === cat
                  ? { backgroundColor: "var(--navy)", color: "white" }
                  : {
                      backgroundColor: "transparent",
                      color: "var(--text-secondary)",
                      border: "1px solid #e2e8f0",
                    }
              }
            >
              {cat === "All" ? "All Articles" : CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p style={{ color: "var(--text-muted)" }}>
              No articles in this category yet.
            </p>
          </div>
        )}
      </SectionWrapper>

      <StayConnected source="blog-page" />
    </div>
  );
}