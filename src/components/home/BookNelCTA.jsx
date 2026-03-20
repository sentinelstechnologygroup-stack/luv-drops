import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BookNelCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="./images/home/BookNelCTA.jpg
          "
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,35,50,0.92) 0%, rgba(26,35,50,0.8) 100%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--blue-soft)" }}>
          Book Nel
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Bring Nel's Story to Your Audience
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Invite Nel for speaking engagements, podcast interviews, or community events.
          His message of resilience and rebuilding resonates with audiences facing real challenges.
        </p>
        <Link
          to={createPageUrl("BookNel")}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: "var(--blue-accent)", color: "white" }}
        >
          Request Speaking Info
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}