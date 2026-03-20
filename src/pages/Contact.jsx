// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import StayConnected from "@/components/shared/StayConnected";

function getEnv(key) {
  const meta = /** @type {{ env?: Record<string, string | undefined> }} */ (import.meta);
  return meta.env?.[key] || "";
}

const FIELD_CLASS =
  "w-full px-4 py-3 rounded-xl text-sm outline-none border transition-colors duration-200 bg-white focus:ring-2 focus:ring-offset-0";
const FIELD_STYLE = { borderColor: "#e2e8f0", color: "var(--text-primary)" };

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const set = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const endpoint = getEnv("VITE_CONTACT_ENDPOINT");

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Message submission failed.");
        }
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
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
              Get in Touch
            </p>

            <h1
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let&apos;s Start a
              <br />
              Conversation
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you have a question, an idea, or just want to say hello — Nel reads every
              message personally.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper id="contact-content" bg="#f3f5f7">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h2
                className="text-2xl font-semibold mb-4"
                style={{
                  color: "var(--navy)",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Reach Out
              </h2>

              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Nel welcomes conversations about speaking opportunities, the kidney journey,
                financial rebuilding, or simply connecting with someone who understands what
                adversity actually looks like.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--blue-accent)15" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "var(--blue-accent)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--navy)" }}>
                    Email
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    hello@nelduo.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--blue-accent)15" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "var(--blue-accent)" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--navy)" }}>
                    Based In
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--cream-dark)" }}>
              <p className="text-sm font-semibold mb-2" style={{ color: "var(--navy)" }}>
                Looking to book Nel?
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                For speaking engagements, podcast requests, and community events, the booking form
                has everything Nel needs to prepare a response.
              </p>
              <Link
                to={createPageUrl("BookNel")}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--blue-accent)" }}
              >
                Go to Book Nel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div
              className="rounded-xl px-5 py-4 border-l-4"
              style={{
                backgroundColor: "var(--cream)",
                borderColor: "#e2e8f0",
              }}
            >
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                The views expressed on this website are personal and do not represent the views of
                Nel&apos;s employer. Content is provided for educational and informational purposes
                only.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e6e8eb",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              {submitted ? (
                <div className="text-center py-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: "var(--blue-accent)15" }}
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
                    Message Sent
                  </h3>

                  <p className="text-base leading-relaxed max-w-xs mx-auto" style={{ color: "var(--text-secondary)" }}>
                    Thank you for reaching out. Nel will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="space-y-1.5">
                    <label htmlFor="ct-name" className="block text-sm font-medium" style={{ color: "var(--navy)" }}>
                      Full Name <span style={{ color: "var(--blue-accent)" }}>*</span>
                    </label>
                    <input
                      id="ct-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your name"
                      className={FIELD_CLASS}
                      style={FIELD_STYLE}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="ct-email" className="block text-sm font-medium" style={{ color: "var(--navy)" }}>
                      Email Address <span style={{ color: "var(--blue-accent)" }}>*</span>
                    </label>
                    <input
                      id="ct-email"
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
                    <label htmlFor="ct-msg" className="block text-sm font-medium" style={{ color: "var(--navy)" }}>
                      Message <span style={{ color: "var(--blue-accent)" }}>*</span>
                    </label>
                    <textarea
                      id="ct-msg"
                      required
                      value={form.message}
                      onChange={set("message")}
                      rows={6}
                      placeholder="What's on your mind? Nel reads every message personally."
                      className={FIELD_CLASS}
                      style={{ ...FIELD_STYLE, resize: "vertical" }}
                    />
                  </div>

                  {error ? <p className="text-sm text-red-500">{error}</p> : null}

                  <button
                    type="submit"
                    disabled={sending || !form.name || !form.email || !form.message}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "var(--navy)", color: "white" }}
                  >
                    {sending ? (
                      "Sending…"
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    Fields marked <span style={{ color: "var(--blue-accent)" }}>*</span> are required.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <StayConnected source="contact-page" />
    </div>
  );
}