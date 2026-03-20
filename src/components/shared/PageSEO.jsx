import { useEffect } from "react";

const SEO_DATA = {
  Home: {
    title: "Nel Duo | Kidney Transplant Survivor & Life Strategy Speaker",
    description:
      "Nel Duo shares insights from surviving kidney failure and rebuilding life after adversity. Learn about his story, speaking work, and mission to help others find clarity.",
    keywords: "kidney transplant survivor, life strategy speaker, resilience, rebuilding after adversity, Nel Duo",
  },
  TheJourney: {
    title: "Nel's Journey | From Kidney Failure to Purpose — Nel Duo",
    description:
      "Read Nel Duo's personal story — kidney failure, dialysis, transplant, and rebuilding life with clarity and purpose. An honest account for anyone facing a major challenge.",
    keywords: "kidney failure story, dialysis experience, kidney transplant journey, life after transplant, personal resilience",
  },
  HowNelHelps: {
    title: "How Nel Helps | Life Strategy, Kidney Support & Speaking — Nel Duo",
    description:
      "Nel Duo offers life strategy conversations, kidney journey support, and speaking engagements. Practical guidance rooted in lived experience and banking expertise.",
    keywords: "life strategy coaching, kidney disease support, resilience speaker, life rebuilding guidance, adversity support",
  },
  Media: {
    title: "Media & Insights | Talks, Podcasts & TikTok — Nel Duo",
    description:
      "Watch and listen to Nel Duo's TikTok videos, podcast appearances, and speaking talks on resilience, kidney transplant recovery, and rebuilding life after crisis.",
    keywords: "Nel Duo podcast, kidney transplant talk, resilience speaker video, life rebuilding insights",
  },
  BookNel: {
    title: "Book Nel Duo | Speaking Engagements & Podcast Interviews",
    description:
      "Request Nel Duo for speaking engagements, podcast interviews, or community events. Nel speaks on resilience, kidney disease, life rebuilding, and financial clarity after crisis.",
    keywords: "book Nel Duo, resilience speaker booking, kidney transplant speaker, adversity keynote speaker",
  },
  Contact: {
    title: "Contact Nel Duo | Get in Touch",
    description:
      "Reach out to Nel Duo with questions, collaboration ideas, or to connect. Nel reads every message personally.",
    keywords: "contact Nel Duo, get in touch, Nel Duo email",
  },
  LuvDrops: {
    title: "L.U.V. Drops® | The Philosophy — Nel Duo",
    description:
      "Discover the L.U.V. Drops® philosophy by Nel Duo: Learn what matters, Unlearn what limits you, Live aligned with your values. A framework for resilience and rebuilding.",
    keywords: "L.U.V. Drops, LUV Drops philosophy, learn unlearn live, Nel Duo philosophy, resilience framework",
  },
  Blog: {
    title: "Blog | Insights on Resilience & Rebuilding — Nel Duo",
    description:
      "Articles and reflections from Nel Duo on the kidney transplant journey, life after dialysis, rebuilding finances after medical crisis, and finding resilience through adversity.",
    keywords: "kidney transplant blog, life after dialysis, rebuilding finances medical crisis, resilience articles, Nel Duo blog",
  },
};

const DEFAULT_SEO = {
  title: "Nel Duo | Kidney Transplant Survivor & Life Strategy Speaker",
  description:
    "Nel Duo shares insights from surviving kidney failure and rebuilding life after adversity.",
  keywords: "Nel Duo, kidney transplant survivor, resilience speaker",
};

export default function PageSEO({ pageName }) {
  const seo = SEO_DATA[pageName] || DEFAULT_SEO;

  useEffect(() => {
    // Title
    document.title = seo.title;

    // Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = seo.description;

    // Keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement("meta");
      metaKw.name = "keywords";
      document.head.appendChild(metaKw);
    }
    metaKw.content = seo.keywords;

    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = seo.title;

    // OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = seo.description;

    // OG Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement("meta");
      ogType.setAttribute("property", "og:type");
      document.head.appendChild(ogType);
    }
    ogType.content = "website";
  }, [pageName]);

  return null;
}