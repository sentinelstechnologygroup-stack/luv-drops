import React from "react";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";

const AUDIENCES = [
  "People facing major medical challenges",
  "Families navigating kidney disease",
  "Individuals rebuilding after life disruption",
  "People seeking clarity after adversity",
  "Those looking for honest, real-world perspective",
  "Communities and organizations seeking inspirational speakers",
];

export default function WhoThisIsFor() {
  return (
    <SectionWrapper bg="var(--section-gray)">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Content */}
        <div>
          <SectionHeader
            eyebrow="Who This Is For"
            title="If Life Has Handed You a Challenge"
            description="Nel's story and guidance resonate with anyone who has been through a life-altering experience and is looking for a way forward."
            align="left"
          />
          <ul className="space-y-4 mt-8">
            {AUDIENCES.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "var(--blue-accent)" + "20" }}
                >
                  <Check className="w-3.5 h-3.5" style={{ color: "var(--blue-accent)" }} />
                </div>
                <span className="text-base" style={{ color: "var(--text-secondary)" }}>
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="./images/home/who-this-is-for.jpg"
              alt="Two hands reaching toward each other with soft golden light, representing connection and support through life's challenges"
              width={600}
              height={400}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <div
            className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-15 -z-10"
            style={{ backgroundColor: "var(--gold-warm)" }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}