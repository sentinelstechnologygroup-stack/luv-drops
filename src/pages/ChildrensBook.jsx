import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import PageHero from "@/components/shared/PageHero";
import ComingSoonBanner from "@/components/shared/ComingSoonBanner";
import SectionWrapper from "@/components/shared/SectionWrapper";
import StayConnected from "@/components/shared/StayConnected";

export default function ChildrensBook() {
  return (
    <div>
      <ComingSoonBanner
        message="Nel's children's book is coming. Sign up below and be the first to know when it's available."
      />

      <PageHero
        eyebrow="Children's Book"
        title={"A Story for Every\nChild Facing Something Hard"}
        subtitle="Nel is writing a children's book that speaks honestly to young people who are navigating illness, change, and the unknown — and to the families walking alongside them."
      />

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-4xl mx-auto">
          {/* Visual placeholder */}
          <div
            className="rounded-2xl flex items-center justify-center p-16"
            style={{ backgroundColor: "var(--cream-dark)", minHeight: "320px" }}
          >
            <div className="text-center">
              <BookOpen
                className="w-20 h-20 mx-auto mb-4"
                style={{ color: "var(--blue-accent)", opacity: 0.35 }}
              />
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>Cover reveal coming soon</p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--blue-accent)" }}
            >
              About the Book
            </p>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-5"
              style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
            >
              Because Children Need Stories That Tell the Truth
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Nel's own journey through illness began long before adulthood. He knows what it's like to face something frightening as a young person — and to feel like the available stories don't quite fit your reality.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              This book is written for children navigating medical challenges, family disruption, or any moment that feels too big to hold — and for the adults who love them.
            </p>

            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 flex-shrink-0" style={{ color: "var(--gold-warm)" }} />
              <p className="text-sm italic" style={{ color: "var(--text-muted)" }}>
                Suitable for ages 4–10. Available in print.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-base leading-relaxed mb-6 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
            Interested in bulk orders for hospitals, clinics, or schools? Nel would love to hear from you.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: "var(--navy)", color: "white" }}
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      <StayConnected source="childrens-book-page" />
    </div>
  );
}