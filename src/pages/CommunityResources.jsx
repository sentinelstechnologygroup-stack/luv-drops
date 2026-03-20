import React from "react";
import { motion } from "framer-motion";
import { Users, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import PageHero from "@/components/shared/PageHero";
import ComingSoonBanner from "@/components/shared/ComingSoonBanner";
import SectionWrapper from "@/components/shared/SectionWrapper";
import StayConnected from "@/components/shared/StayConnected";

// Placeholder resource categories — to be expanded with real links
const RESOURCE_CATEGORIES = [
  {
    title: "Understanding Kidney Disease",
    description: "Trusted guides and educational resources for patients newly diagnosed with chronic kidney disease or kidney failure.",
    status: "coming-soon",
  },
  {
    title: "Living on Dialysis",
    description: "Practical resources for hemodialysis and peritoneal dialysis patients — from scheduling and diet to mental health support.",
    status: "coming-soon",
  },
  {
    title: "The Transplant Process",
    description: "Step-by-step guidance on the transplant waiting list, evaluation process, surgery preparation, and post-transplant care.",
    status: "coming-soon",
  },
  {
    title: "Financial & Benefits Support",
    description: "Resources for navigating insurance, disability benefits, medical debt, and financial assistance programs during and after illness.",
    status: "coming-soon",
  },
  {
    title: "Mental Health & Resilience",
    description: "Support networks, counseling services, and tools for managing the emotional weight of chronic illness and recovery.",
    status: "coming-soon",
  },
  {
    title: "Family & Caregiver Guides",
    description: "Resources for the families and caregivers supporting someone through kidney disease, dialysis, or transplant recovery.",
    status: "coming-soon",
  },
];

export default function CommunityResources() {
  return (
    <div>
      <ComingSoonBanner
        message="This resource directory is being built. Sign up below to be notified when it launches."
      />

      <PageHero
        eyebrow="Community Resources"
        title={"A Curated Directory\nfor Transplant Patients"}
        subtitle="Nel is building a practical, no-nonsense resource guide for kidney patients, transplant recipients, and their families — covering everything from medical support to financial recovery."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--blue-accent)" }}
          >
            What's Coming
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-5"
            style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
          >
            Resources Nel Wishes He Had
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Everything here will be personally reviewed and recommended — not a generic link dump, but a curated set of resources that Nel would have wanted access to during his own journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RESOURCE_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl p-6 border border-gray-100 relative overflow-hidden"
              style={{ backgroundColor: "white" }}
            >
              {/* Coming soon badge */}
              <span
                className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4"
                style={{ backgroundColor: "var(--blue-accent)14", color: "var(--blue-accent)" }}
              >
                Coming Soon
              </span>
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: "var(--cream-dark)" }}
              >
                <Users className="w-4 h-4" style={{ color: "var(--navy)" }} />
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
              >
                {cat.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {cat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-base leading-relaxed mb-6 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            Know a resource Nel should include? He'd love to hear about it.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--navy)", color: "white" }}
          >
            Suggest a Resource <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      <StayConnected source="community-resources-page" />
    </div>
  );
}