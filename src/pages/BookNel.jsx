// src/pages/BookNel.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Radio,
  Users,
  Send,
  CheckCircle,
  Calendar,
  MapPin,
  Building2,
  Phone,
} from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import StayConnected from "@/components/shared/StayConnected";

function getEnv(key) {
  const meta = /** @type {{ env?: Record<string, string | undefined> }} */ (import.meta);
  return meta.env?.[key] || "";
}

const EVENT_TYPES = [
  {
    icon: Mic,
    title: "Speaking Engagements",
    description:
      "Keynote presentations and panel discussions for conferences, corporate events, health organizations, and community gatherings.",
  },
  {
    icon: Radio,
    title: "Podcast Interviews",
    description:
      "Candid, long-form conversations about resilience, recovery, kidney disease, and rebuilding life after adversity.",
  },
  {
    icon: Users,
    title: "Community Events",
    description:
      "Workshops, talks, and conversations for support groups, nonprofits, and organizations serving people through challenge.",
  },
];

const FIELD_CLASS =
  "w-full px-4 py-3 rounded-xl text-sm outline-none border transition-colors duration-200 bg-white focus:ring-2 focus:ring-offset-0";
const FIELD_STYLE = { borderColor: "#e2e8f0", color: "var(--text-primary)" };

export default function BookNel() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    event_type: "",
    event_date: "",
    event_location: "",
    event_description: "",
  });

  const set = (field) => (e) => {
    const value = typeof e === "string" ? e : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const endpoint = getEnv("VITE_BOOKING_ENDPOINT");

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Request submission failed.");
        }
      }

      setSubmitted(true);
      setForm({
        name: "",
        organization: "",
        email: "",
        phone: "",
        event_type: "",
        event_date: "",
        event_location: "",
        event_description: "",
      });
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundColor: "var(--footer-bg)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, var(--blue-accent) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--blue-soft)" }}
            >
              Book Nel
            </p>

            <h1
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bring Nel&apos;s Story
              <br />
              to Your Audience
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Nel is available for speaking engagements, podcast interviews, and community
              events. Fill out the form below and he&apos;ll follow up personally.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper id="book-nel-offers" bg="var(--section-gray)">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {EVENT_TYPES.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-xl p-8"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                borderRadius: "var(--card-radius)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--blue-accent)18" }}
              >
                <type.icon className="w-5 h-5" style={{ color: "var(--blue-accent)" }} />
              </div>

              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  color: "var(--navy)",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {type.title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--section-white)" }}>
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--blue-accent)" }}
              >
                Request Speaking Info
              </p>

              <h2
                className="text-3xl md:text-4xl font-semibold"
                style={{
                  color: "var(--navy)",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Tell Nel About Your Event
              </h2>

              <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                The more detail you share, the better Nel can prepare a relevant response.
              </p>
            </div>

            {submitted ? (
              <div
                className="rounded-2xl p-12 text-center border border-gray-100"
                style={{ backgroundColor: "var(--cream)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "var(--blue-accent)18" }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: "var(--blue-accent)" }} />
                </div>

                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{
                    color: "var(--navy)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Request Received
                </h3>

                <p className="text-base leading-relaxed max-w-sm mx-auto" style={{ color: "var(--text-secondary)" }}>
                  Thank you for reaching out. Nel will review your request and respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="bn-name" className="block text-sm font-medium" style={{ color: "var(--navy)" }}>
                      Full Name <span style={{ color: "var(--blue-accent)" }}>*</span>
                    </label>
                    <input
                      id="bn-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your full name"
                      className={FIELD_CLASS}
                      style={FIELD_STYLE}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="bn-org" className="block text-sm font-medium" style={{ color: "var(--navy)" }}>
                      Organization
                    </label>
                    <div className="relative">
                      <Building2
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                        style={{ color: "var(--text-muted)" }}
                      />
                      <input
                        id="bn-org"
                        type="text"
                        value={form.organization}
                        onChange={set("organization")}
                        placeholder="Company or org"
                        className={`${FIELD_CLASS} pl-10`}
                        style={FIELD_STYLE}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="bn-email" className="block text-sm font-medium" style={{ color: "var(--navy)" }}>
                      Email Address <span style={{ color: "var(--blue-accent)" }}>*</span>
                    </label>
                    <input
                      id="bn-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="your@email.com"
                      className={FIELD_CLASS}
                      style={FIELD_STYLE}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="bn-phone" className="block text-sm font-medium" style={{ color: "var(--navy)" }}>
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                        style={{ color: "var(--text-muted)" }}
                      />
                      <input
                        id="bn-phone"
                        type="tel"
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="+1 (555) 000-0000"
                        className={`${FIELD_CLASS} pl-10`}
                        style={FIELD_STYLE}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="bn-type" className="block text-sm font-medium" style={{ color: "var(--navy)" }}>
                    Event Type <span style={{ color: "var(--blue-accent)" }}>*</span>
                  </label>
                  <select
                    id="bn-type"
                    value={form.event_type}
                    onChange={set("event_type")}
                    className={FIELD_CLASS}
                    style={FIELD_STYLE}
                    required
                  >
                    <option value="">Select event type</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="podcast">Podcast Interview</option>
                    <option value="community">Community Event</option>
                    <option value="workshop">Workshop</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="bn-date" className="block text-sm font-medium" style={{ color: "var(--navy)" }}>
                      Event Date
                    </label>
                    <div className="relative">
                      <Calendar
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                        style={{ color: "var(--text-muted)" }}
                      />
                      <input
                        id="bn-date"
                        type="date"
                        value={form.event_date}
                        onChange={set("event_date")}
                        className={`${FIELD_CLASS} pl-10`}
                        style={FIELD_STYLE}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="bn-location" className="block text-sm font-medium" style={{ color: "var(--navy)" }}>
                      Event Location
                    </label>
                    <div className="relative">
                      <MapPin
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                        style={{ color: "var(--text-muted)" }}
                      />
                      <input
                        id="bn-location"
                        type="text"
                        value={form.event_location}
                        onChange={set("event_location")}
                        placeholder="City, State or Virtual"
                        className={`${FIELD_CLASS} pl-10`}
                        style={FIELD_STYLE}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="bn-desc" className="block text-sm font-medium" style={{ color: "var(--navy)" }}>
                    Event Description
                  </label>
                  <textarea
                    id="bn-desc"
                    value={form.event_description}
                    onChange={set("event_description")}
                    rows={5}
                    placeholder="Tell Nel about your event — the audience, the goals, what you're hoping he'll share…"
                    className={FIELD_CLASS}
                    style={{ ...FIELD_STYLE, resize: "vertical" }}
                  />
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    The more context you provide, the better Nel can tailor his response.
                  </p>
                </div>

                {error ? <p className="text-sm text-red-500">{error}</p> : null}

                <button
                  type="submit"
                  disabled={sending || !form.name || !form.email || !form.event_type}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "var(--navy)", color: "white" }}
                >
                  {sending ? (
                    "Submitting…"
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Request
                    </>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  Fields marked <span style={{ color: "var(--blue-accent)" }}>*</span> are required.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <StayConnected source="book-nel-page" />
    </div>
  );
}