// src/Layout.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUp } from "lucide-react";
import { createPageUrl } from "@/utils";
import SiteFooter from "@/components/layout/SiteFooter";
import PageSEO from "@/components/shared/PageSEO";

const NAV_ITEMS = [
  { label: "Home", page: "Home" },
  { label: "The Journey", page: "TheJourney" },
  { label: "L.U.V. Drops®", page: "LuvDrops" },
  { label: "How Nel Helps", page: "HowNelHelps" },
  { label: "Media", page: "Media" },
  { label: "Book Nel", page: "BookNel" },
  { label: "Contact", page: "Contact" },
];

export default function Layout({ children, currentPageName }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setShowScrollTop(y > 600);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPageName]);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <PageSEO pageName={currentPageName} />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/92 backdrop-blur-md shadow-sm border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="h-16 lg:h-20 flex items-center justify-between">
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3 min-w-0"
              aria-label="Go to home page"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center border flex-shrink-0"
                style={{
                  borderColor: "rgba(15,30,46,0.12)",
                  background:
                    "linear-gradient(135deg, rgba(108,157,196,0.18) 0%, rgba(184,155,94,0.16) 100%)",
                }}
              >
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "var(--navy)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  ND
                </span>
              </div>

              <div className="leading-tight min-w-0">
                <div
                  className="text-lg font-semibold tracking-tight truncate"
                  style={{
                    color: "var(--navy)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Nel Duo
                </div>
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.18em] truncate"
                  style={{ color: "var(--blue-accent)" }}
                >
                  L.U.V. Drops®
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6 xl:gap-7">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPageName === item.page;

                return (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className="text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                    style={{
                      color: isActive
                        ? "var(--blue-accent)"
                        : "var(--text-secondary)",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                to={createPageUrl("BookNel")}
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: "#b89b5e",
                  color: "#0f1e2e",
                }}
              >
                Book a Conversation
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center p-2 -mr-2"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" style={{ color: "var(--navy)" }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: "var(--navy)" }} />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24 }}
              className="lg:hidden overflow-hidden bg-white/96 backdrop-blur-md border-t border-black/5"
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentPageName === item.page;

                  return (
                    <Link
                      key={item.page}
                      to={createPageUrl(item.page)}
                      className="py-3 text-base font-medium transition-colors duration-200"
                      style={{
                        color: isActive
                          ? "var(--blue-accent)"
                          : "var(--text-secondary)",
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Link
                  to={createPageUrl("BookNel")}
                  className="mt-3 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: "#b89b5e",
                    color: "#0f1e2e",
                  }}
                >
                  Book a Conversation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-16 lg:pt-20">{children}</main>

      <SiteFooter />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-[60] w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:opacity-90"
            style={{
              backgroundColor: "var(--navy)",
              color: "white",
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}