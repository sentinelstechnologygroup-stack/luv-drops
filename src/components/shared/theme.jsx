/**
 * NEL DUO / L.U.V. DROPS® — GLOBAL DESIGN SYSTEM
 * Single source of truth for all visual decisions.
 * Import from: @/components/shared/theme
 */

export const colors = {
  // Core palette
  navy:          "#0f1e2e",
  navyLight:     "#1a2e42",
  blueAccent:    "#5b8fa8",
  blueSoft:      "#7fb3cc",
  gold:          "#b89b5e",

  // Text
  textPrimary:   "#1a1f24",
  textSecondary: "#4a5568",
  textMuted:     "#718096",

  // Section backgrounds — ONLY these two light options
  white:         "#ffffff",
  lightGray:     "#f3f5f7",

  // Borders / dividers
  border:        "#e6e8eb",
  divider:       "#e4e7ea",

  // Footer
  footerBg:      "#0f1e2e",
  footerText:    "#e6edf4",
};

/**
 * Section background rhythm helper.
 * Use index % 2 === 0 → white, index % 2 === 1 → lightGray
 * Dark (navy) is reserved for hero + speaker CTA + footer only.
 */
export const sectionBg = (index) =>
  index % 2 === 0 ? colors.white : colors.lightGray;

/**
 * Standard card style — spread into a style prop.
 * All cards: service cards, media cards, LUV cards, content cards.
 */
export const cardStyle = {
  backgroundColor: colors.white,
  border:          `1px solid ${colors.border}`,
  borderRadius:    "12px",
  boxShadow:       "0 10px 30px rgba(0,0,0,0.04)",
};

/** Divider style */
export const dividerStyle = {
  borderTop: `1px solid ${colors.divider}`,
};

/** Typography */
export const fonts = {
  serif: "'Playfair Display', serif",
  sans:  "'Inter', sans-serif",
};

/** Standard section padding class */
export const sectionPadding = "py-16 md:py-20";