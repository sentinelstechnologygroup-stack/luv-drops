import React from "react";

export default function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-14 ${alignClass}`}>
      {eyebrow && (
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--blue-accent)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl font-semibold leading-tight text-balance mb-3"
        style={{ color: "var(--navy)", fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      <div
        className={`h-0.5 w-10 rounded-full mb-5 ${align === "center" ? "mx-auto" : ""}`}
        style={{ backgroundColor: "var(--gold-warm)" }}
      />
      {description && (
        <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      )}
    </div>
  );
}