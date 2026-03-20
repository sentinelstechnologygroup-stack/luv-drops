import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable dark navy hero for all interior pages.
 * Props: eyebrow, title, subtitle
 */
export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "var(--footer-bg)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--blue-soft)" }}
            >
              {eyebrow}
            </p>
          )}
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}