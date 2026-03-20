import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const NAV_LINKS = [
  { label: "Home", page: "Home" },
  { label: "The Journey", page: "TheJourney" },
  { label: "L.U.V. Drops®", page: "LuvDrops" },
  { label: "How Nel Helps", page: "HowNelHelps" },
  { label: "Media", page: "Media" },
  { label: "Book Nel", page: "BookNel" },
  { label: "Contact", page: "Contact" },
];

const EXPANDING_LINKS = [
  { label: "Podcast", page: "Podcast" },
  { label: "Children's Book", page: "ChildrensBook" },
  { label: "Kidney Advocacy", page: "KidneyAdvocacy" },
  { label: "Community Resources", page: "CommunityResources" },
];

const SOCIAL_LINKS = [
  {
    label: "TikTok",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.8a4.84 4.84 0 01-1-.11z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    url: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#0f1e2e" }}>
      {/* Top border accent */}
      <div className="h-0.5 w-full" style={{ backgroundColor: "#b89b5e", opacity: 0.6 }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand */}
          <div className="space-y-5 md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="./images/logo/logo.jpg"
                alt="Nel Duo logo"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Nel Duo
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#b89b5e" }}>
                  L.U.V. Drops®
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#8fa8be" }}>
              Helping people learn what matters, unlearn what limits them, and value what they love.
            </p>
            <div className="flex gap-3 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "#8fa8be" }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(184,155,94,0.2)"; e.currentTarget.style.color = "#b89b5e"; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#8fa8be"; }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#b89b5e" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.page}>
                  <Link
                    to={createPageUrl(link.page)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#8fa8be" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#e6edf4"}
                    onMouseLeave={e => e.currentTarget.style.color = "#8fa8be"}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coming Soon */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#b89b5e" }}
            >
              Coming Soon
            </h4>
            <ul className="space-y-3">
              {EXPANDING_LINKS.map((link) => (
                <li key={link.page} className="flex items-center gap-2">
                  <Link
                    to={createPageUrl(link.page)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#8fa8be" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#e6edf4"}
                    onMouseLeave={e => e.currentTarget.style.color = "#8fa8be"}
                  >
                    {link.label}
                  </Link>
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: "rgba(184,155,94,0.15)", color: "#b89b5e" }}
                  >
                    Soon
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "#b89b5e" }}
            >
              Connect
            </h4>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "#8fa8be" }}>
              Nel reads every message personally.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: "#e6edf4" }}
              onMouseEnter={e => e.currentTarget.style.color = "#b89b5e"}
              onMouseLeave={e => e.currentTarget.style.color = "#e6edf4"}
            >
              Get in Touch →
            </Link>
            <div className="mt-6">
              <Link
                to={createPageUrl("BookNel")}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#b89b5e", color: "#0f1e2e" }}
              >
                Book Nel
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-xs leading-relaxed mb-2" style={{ color: "#4a6278" }}>
            The views expressed on this website are personal and do not represent the views of Nel's employer. Content is provided for educational and informational purposes only.
          </p>
          <p className="text-xs" style={{ color: "#4a6278" }}>
            © {new Date().getFullYear()} Nel Duo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}