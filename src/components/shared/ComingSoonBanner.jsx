import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * Reusable "Coming Soon" banner for pages under development.
 * Drop it at the top of any stub page.
 */
export default function ComingSoonBanner({ label = "Coming Soon", message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center gap-2.5 py-3 px-6 text-sm font-medium"
      style={{ backgroundColor: "var(--blue-accent)", color: "white" }}
    >
      <Sparkles className="w-4 h-4 flex-shrink-0" />
      <span>{message || `${label} — This page is coming soon. Check back soon for updates.`}</span>
    </motion.div>
  );
}