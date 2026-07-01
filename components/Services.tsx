"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  LayoutGrid,
  Lightbulb,
  Car,
  Sun,
  MessageCircle,
} from "lucide-react";

const WA_LINK =
  "https://wa.me/5519983220498?text=Ol%C3%A1%20Adriano%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento";

const services = [
  {
    id: "chuveiros",
    icon: Droplets,
    title: "Chuveiros Elétricos",
    description:
      "Instalação e troca de resistência com total segurança. Diagnóstico preciso para evitar choques e falhas.",
    image: "/images/chuveiros.jpg",
    color: "#2563eb",
  },
  {
    id: "qdc",
    icon: LayoutGrid,
    title: "Quadros de Distribuição",
    description:
      "Manutenção, organização e prevenção de curtos-circuitos. QDC's residenciais e comerciais no padrão.",
    image: "/images/qdc.jpg",
    color: "var(--electric-blue)",
  },
  {
    id: "iluminacao",
    icon: Lightbulb,
    title: "Iluminação Residencial e Comercial",
    description:
      "Projetos de LED, instalação de lustres, spots e automação leve para ambientes modernos e econômicos.",
    image: "/images/iluminacao.jpg",
    color: "#7c3aed",
  },
  {
    id: "ev",
    icon: Car,
    title: "Carregadores Veiculares (EV)",
    description:
      "Instalação técnica de wallboxes e estações de recarga para carros elétricos. Segurança e eficiência.",
    image: "/images/carregadores.jpg",
    color: "#059669",
  },
  {
    id: "solar",
    icon: Sun,
    title: "Energia Solar",
    description:
      "Suporte e infraestrutura elétrica para sistemas fotovoltaicos. Preparação e adequação da instalação.",
    image: "/images/energia-solar.jpg",
    color: "#d97706",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 px-6"
      style={{ backgroundColor: "var(--gray-light)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--electric-yellow)" }}>
            O que posso fazer por você
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-4"
            style={{ color: "var(--electric-blue)" }}>
            Nossos Serviços
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--gray-text)" }}>
            Serviços elétricos residenciais e comerciais com qualidade técnica, segurança e pontualidade garantidas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, icon: Icon, title, description, image, color }) => (
            <div
              key={id}
              id={`service-${id}`}
              className="service-card bg-white rounded-2xl overflow-hidden shadow-md border"
              style={{ borderColor: "var(--gray-mid)" }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                {/* Color overlay */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{ background: `linear-gradient(to bottom, transparent 40%, ${color})` }}
                />
                {/* Icon badge */}
                <div
                  className="absolute bottom-3 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: color }}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--electric-blue)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--gray-text)" }}>
                  {description}
                </p>
                <Link
                  href={WA_LINK}
                  id={`cta-service-${id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl transition-all hover:opacity-90 hover:shadow-md"
                  style={{ backgroundColor: "#25d366", color: "#fff" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Pedir Orçamento
                </Link>
              </div>
            </div>
          ))}

          {/* CTA card – "Outro serviço?" */}
          <div
            className="service-card rounded-2xl flex flex-col items-center justify-center text-center p-8 border-2 border-dashed gap-4"
            style={{ borderColor: "var(--electric-yellow)", backgroundColor: "rgba(245,158,11,0.04)" }}
          >
            <span className="text-4xl">⚡</span>
            <h3 className="text-base font-bold" style={{ color: "var(--electric-blue)" }}>
              Precisa de outro serviço?
            </h3>
            <p className="text-sm" style={{ color: "var(--gray-text)" }}>
              Entre em contato e tire suas dúvidas diretamente com o Adriano.
            </p>
            <Link
              href={WA_LINK}
              id="cta-outros-servicos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--electric-blue)", color: "#fff" }}
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
