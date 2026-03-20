import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Reusable inline CTA band.
 * variant: "light" (cream bg) | "dark" (navy bg) | "accent" (blue-accent bg)
 */
export default function InlineCTA({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  variant = "light",
}) {
  const isDark = variant === "dark" || variant === "accent";
  const bgColor =
    variant === "dark"
      ? "var(--footer-bg)"
      : variant === "accent"
      ? "var(--blue-accent)"
      : "var(--section-gray)";

  return (
    <section className="py-14 md:py-16" style={{ backgroundColor: bgColor }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
      >
        {eyebrow && (
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: isDark ? "rgba(255,255,255,0.5)" : "var(--blue-accent)" }}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className="text-2xl md:text-3xl font-semibold leading-snug mb-4"
          style={{
            color: isDark ? "white" : "var(--navy)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
            style={{ color: isDark ? "rgba(255,255,255,0.65)" : "var(--text-secondary)" }}
          >
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {primaryLabel && primaryTo && (
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
              style={
                isDark
                  ? { backgroundColor: "var(--blue-accent)", color: "white" }
                  : { backgroundColor: "var(--navy)", color: "white" }
              }
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border transition-all duration-200"
              style={
                isDark
                  ? { borderColor: "rgba(255,255,255,0.25)", color: "white" }
                  : { borderColor: "var(--navy)", color: "var(--navy)" }
              }
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}