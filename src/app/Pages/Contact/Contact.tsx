"use client";
import React from "react";
import { BiEnvelope, BiMap, BiPhoneCall } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import ContactForm from "./ContactForm";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: BiPhoneCall,
    label: "Phone",
    value: "+92 311 4802732",
    href: "tel:+923114802732",
    external: false,
  },
  {
    icon: BiEnvelope,
    label: "Email",
    value: "youahmadkhan@gmail.com",
    href: "mailto:youahmadkhan@gmail.com",
    external: false,
  },
  {
    icon: BiMap,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "https://www.google.com/maps?q=Lahore,+Pakistan",
    external: true,
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      style={{ background: "var(--bg-surface)" }}
      className="py-24 relative overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="orb w-[500px] h-[500px] bg-cyan-600/8 top-0 right-0" style={{ animationDelay: "0s" }} />
      <div className="orb w-[400px] h-[400px] bg-blue-700/8 bottom-0 left-0" style={{ animationDelay: "3s" }} />

      <div
        ref={ref}
        className={`relative z-10 w-[90%] md:w-[82%] lg:w-[76%] mx-auto
          grid grid-cols-1 lg:grid-cols-2 gap-12 items-start
          transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Left: Info */}
        <div>
          <span className="section-eyebrow mb-5 block">Contact Me</span>
          <h2 className="display-font text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Let&apos;s build something
            <br />
            <span className="gradient-text">amazing together</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-10">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Contact info cards */}
          <div className="space-y-3 mb-8">
            {contactInfo.map(({ icon: Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06]
                  hover:border-cyan-500/25 hover:bg-white/[0.03] transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-medium mb-0.5">{label}</p>
                  <p className="text-slate-200 text-sm font-semibold group-hover:text-white transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <SocialIcon
              link="https://www.facebook.com/"
              icon={<FaFacebook className="text-white w-5 h-5" />}
              hoverColor="hover:bg-blue-700"
            />
            <SocialIcon
              link="https://www.linkedin.com/in/muhammad-ahmad-940653252/"
              icon={<FaLinkedin className="text-white w-5 h-5" />}
              hoverColor="hover:bg-sky-600"
            />
            <SocialIcon
              link="https://www.instagram.com/"
              icon={<FaInstagram className="text-white w-5 h-5" />}
              hoverColor="hover:bg-pink-600"
            />
            <SocialIcon
              link="https://github.com/Muhammad-Ahmad42"
              icon={<FaGithub className="text-white w-5 h-5" />}
              hoverColor="hover:bg-slate-700"
            />
          </div>
        </div>

        {/* Right: Form */}
        <ContactForm />
      </div>
    </section>
  );
}
