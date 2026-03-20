import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function StoryPreview() {
  return (
    <SectionWrapper bg="var(--section-gray)">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="./images/home/journey.jpg"
              alt="Watercolour painting of a winding path through seasons, representing Nel Duo's personal journey from adversity to renewal"
              width={600}
              height={400}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative accent */}
          <div
            className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 -z-10"
            style={{ backgroundColor: "var(--blue-accent)" }}
          />
        </div>

        {/* Content */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--blue-accent)" }}
          >
            Nel's Story
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold leading-tight mb-6"
            style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
          >
            A Journey Through
            <br />
            Adversity to Purpose
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            <p>
              Nel Duo's life changed when he was diagnosed with kidney failure. Through dialysis, the waiting,
              and ultimately a kidney transplant, he experienced firsthand the physical, emotional, and
              financial toll that a major health crisis brings.
            </p>
            <p>
              Recovery wasn't just physical — it meant rebuilding every part of his life. Drawing on
              his background in personal and business banking, Nel found a way to combine his
              professional expertise with his lived experience.
            </p>
            <p>
              Now, he shares what he's learned to help others find clarity, resilience, and
              direction when life demands they start over.
            </p>
          </div>
          <Link
            to={createPageUrl("TheJourney")}
            className="inline-flex items-center gap-2 mt-8 text-sm font-medium transition-colors duration-200 hover:gap-3"
            style={{ color: "var(--blue-accent)" }}
          >
            Read the Full Story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}