"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Shield, Clock, Zap } from "lucide-react";

const WA_LINK =
  "https://wa.me/5519983220498?text=Ol%C3%A1%20Adriano%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/adriano-hero.jpg"
          alt="Adriano – Eletricista Profissional em Barão Geraldo"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center top" }}
          className="select-none"
        />
        {/* Dark gradient overlay */}
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Top safety banner */}
      <div
        className="absolute top-0 left-0 right-0 z-10 text-center py-2 text-sm font-semibold tracking-wider"
        style={{ backgroundColor: "var(--electric-yellow)", color: "#0f172a" }}
      >
        ⚡ Evite curtos, choques e incêndios — Chame um profissional! ⚡
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-float"
            style={{ backgroundColor: "rgba(245,158,11,0.15)", border: "1px solid var(--electric-yellow)", color: "var(--electric-yellow-light)" }}>
            <Zap className="w-4 h-4 animate-lightning" fill="currentColor" />
            Técnico em Eletrotécnica Certificado
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 animate-fade-in-up"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
            Eletricista Profissional em{" "}
            <span style={{ color: "var(--electric-yellow)" }}>
              Barão Geraldo
            </span>{" "}
            e Campinas
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-200 mb-3 font-medium leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}>
            <Shield className="inline w-5 h-5 mr-2" style={{ color: "var(--electric-yellow)" }} />
            <strong style={{ color: "var(--electric-yellow)" }}>Evite curtos, choques e incêndios.</strong>{" "}
            Confie em quem tem{" "}
            <strong className="text-white">+18 anos de experiência</strong>{" "}
            e formação técnica profissional.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {[
              { icon: Clock, label: "Atendimento Rápido" },
              { icon: Shield, label: "Serviço Garantido" },
              { icon: Zap, label: "Residencial e Comercial" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                <Icon className="w-4 h-4" style={{ color: "var(--electric-yellow)" }} />
                {label}
              </span>
            ))}
          </div>

          {/* Primary CTA – WhatsApp */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link
              href={WA_LINK}
              id="hero-whatsapp-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-whatsapp inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-lg font-bold text-white shadow-2xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#25d366", minWidth: "280px" }}
            >
              <MessageCircle className="w-6 h-6" fill="white" />
              Chamar no WhatsApp
            </Link>

            <Link
              href={WA_LINK}
              id="hero-orcamento-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-pulse-yellow inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl text-lg font-bold shadow-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--electric-yellow)", color: "#0f172a" }}
            >
              <Zap className="w-6 h-6" />
              Solicitar Orçamento
            </Link>
          </div>

          {/* Emergency note */}
          <p className="mt-6 text-slate-400 text-sm animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            🔴 <strong className="text-slate-300">Atendimento de emergência disponível</strong> — Resposta rápida via WhatsApp
          </p>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 80H1440V30C1200 70 900 0 720 20C540 40 240 70 0 30V80Z"
            fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}
