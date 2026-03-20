import React from "react";
import { motion } from "framer-motion";
import { Handshake, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import PageHero from "@/components/shared/PageHero";
import ComingSoonBanner from "@/components/shared/ComingSoonBanner";
import SectionWrapper from "@/components/shared/SectionWrapper";
import StayConnected from "@/components/shared/StayConnected";

const PARTNERSHIP_TYPES = [
  {
    title: "Nonprofit Organizations",
    description: "Kidney foundations, transplant support groups, and health-focused nonprofits looking for a community voice and lived-experience perspective.",
  },
  {
    title: "Hospitals & Medical Centers",
    description: "Transplant programs and nephrology teams seeking a patient advocate who can speak candidly to patients and families navigating dialysis and transplant.",
  },
  {
    title: "Community Health Programs",
    description: "Organizations running health awareness campaigns or patient education programs that benefit from a speaker who has been through the kidney journey firsthand.",
  },
  {
    title: "Corporate Wellness & HR",
    description: "Companies seeking a compelling speaker on resilience, recovery, and returning to work after health crises — for their wellness programs or ERG events.",
  },
];

export default function KidneyAdvocacy() {
  return (
    <div>
      <ComingSoonBanner
        message="Nel's advocacy partnerships page is taking shape. Sign up below to stay updated."
      />

      <PageHero
        eyebrow="Kidney Advocacy"
        title={"Partnering to Support\nKidney Patients"}
        subtitle="Nel is available to partner with organizations committed to improving outcomes, awareness, and quality of life for people living with kidney disease and transplant recipients."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--blue-accent)" }}
          >
            Partnership Areas
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-5"
            style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
          >
            Who Nel Works With
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Nel brings authentic patient perspective and professional credibility to advocacy roles across healthcare and community sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PARTNERSHIP_TYPES.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl p-7 border border-gray-100"
              style={{ backgroundColor: "white" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--blue-accent)15" }}
              >
                <Handshake className="w-5 h-5" style={{ color: "var(--blue-accent)" }} />
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
              >
                {type.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Globe className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--blue-accent)", opacity: 0.4 }} />
          <p className="text-base leading-relaxed mb-6 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            If your organization is working to improve the lives of kidney patients, Nel would love to explore how he can contribute.
          </p>
          <Link
            to={createPageUrl("BookNel")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--navy)", color: "white" }}
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      <StayConnected source="kidney-advocacy-page" />
    </div>
  );
}