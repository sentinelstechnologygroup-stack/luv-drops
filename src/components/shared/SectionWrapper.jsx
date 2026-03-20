import React from "react";
import { motion } from "framer-motion";

/**
 * SectionWrapper — canonical section container for the entire site.
 * bg: pass a hex or CSS var string, defaults to "#ffffff"
 * divider: adds a 1px top border using --divider token
 */
export default function SectionWrapper({
  children,
  className = "",
  bg = "#ffffff",
  divider = false,
  id,
}) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${className}`}
      style={{
        backgroundColor: bg,
        ...(divider ? { borderTop: "1px solid var(--divider)" } : {}),
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}