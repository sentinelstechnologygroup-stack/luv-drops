import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="./images/home/hero.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchpriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,35,50,0.85) 0%, rgba(26,35,50,0.6) 50%, rgba(26,35,50,0.4) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo badge */}
            <div className="mb-8 flex items-center gap-3">
              <img
                src="./images/logo/logo.jpg"
                alt="Nel Duo emblem"
                width={48}
                height={48}
                className="rounded-full shadow-lg"
              />
              <div className="h-px w-12 bg-white/30" />
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Start With
              <br />
              <span style={{ color: "var(--blue-soft)" }}>Clarity</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              Kidney transplant survivor and banking professional sharing the{" "}
              <span style={{ color: "var(--blue-soft)", fontStyle: "italic" }}>L.U.V. Drops®</span>{" "}
              philosophy to help people rebuild life after adversity.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to={createPageUrl("BookNel")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "var(--blue-accent)", color: "white" }}
              >
                Book a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={createPageUrl("TheJourney")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border border-white/30 text-white transition-all duration-200 hover:bg-white/10"
              >
                Hear Nel's Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, #ffffff, transparent)`,
        }}
      />
    </section>
  );
}