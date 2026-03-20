import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function StayConnected({ source = "website" }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            source,
          }),
        });

        if (!response.ok) {
          throw new Error("Subscription request failed.");
        }
      }

      setSubmitted(true);
      setForm({ name: "", email: "" });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--blue-soft)" }}
            >
              Stay Connected
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Receive Insights &
              <br />
              Updates from Nel
            </h2>
            <p className="text-base text-gray-400 leading-relaxed max-w-sm">
              Nel shares reflections on resilience, rebuilding, and life after
              adversity. No noise — just honest insights, when they&apos;re
              ready.
            </p>
            <p className="mt-4 text-xs text-gray-600">
              No spam. Unsubscribe any time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {submitted ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "var(--blue-accent)25" }}
                >
                  <CheckCircle
                    className="w-7 h-7"
                    style={{ color: "var(--blue-soft)" }}
                  />
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  You&apos;re in
                </h3>
                <p className="text-sm text-gray-400">
                  Thanks for signing up. Nel will be in touch.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 md:p-10 space-y-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                noValidate
              >
                <div>
                  <label
                    htmlFor="sc-name"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    First Name
                  </label>
                  <input
                    id="sc-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Your first name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-colors duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="sc-email"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Email Address <span className="text-gray-500">(required)</span>
                  </label>
                  <input
                    id="sc-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-colors duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />
                </div>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={sending || !form.email}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-90 cursor-pointer mt-2 disabled:opacity-60"
                  style={{ backgroundColor: "var(--blue-accent)", color: "white" }}
                >
                  {sending ? (
                    "Subscribing…"
                  ) : (
                    <>
                      Stay Connected <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}