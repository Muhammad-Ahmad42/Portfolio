"use client";
import React, { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";

type FormState = { name: string; email: string; phone: string; message: string };
type Status = "idle" | "loading" | "success";

const inputBase =
  "w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm " +
  "placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.06] " +
  "transition-all duration-200";

const labelBase = "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card rounded-2xl p-6 sm:p-8"
      noValidate
    >
      <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="contact-name" className={labelBase}>
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className={labelBase}>
            Email Address <span className="text-cyan-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className={labelBase}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className={inputBase}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className={labelBase}>
            Message <span className="text-cyan-400">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me about your project..."
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status !== "idle"}
        className="mt-6 w-full py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600
          text-white text-sm font-semibold transition-all duration-300
          hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5
          disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === "loading"
          ? "Sending…"
          : status === "success"
          ? "Message Sent!"
          : "Send Message"}
      </button>

      {status === "success" && (
        <div className="mt-4 flex items-center gap-2.5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm animate-fade-in-up">
          <HiCheckCircle className="w-5 h-5 shrink-0" />
          <span>Thank you! I&apos;ll get back to you soon.</span>
        </div>
      )}
    </form>
  );
}
