import Link from "next/link";
import { MessageCircle, Phone, MapPin, Zap, Shield } from "lucide-react";

const WA_LINK =
  "https://wa.me/5519983220498?text=Ol%C3%A1%20Adriano%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento";

const WA_EMERGENCY_LINK =
  "https://wa.me/5519983220498?text=Ol%C3%A1%20Adriano%2C%20preciso%20de%20atendimento%20urgente!";

export default function Footer() {
  return (
    <footer id="contato" style={{ backgroundColor: "var(--electric-blue-dark)" }}>
      {/* Emergency CTA strip */}
      <div
        className="py-10 px-6 text-center border-b"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <p className="text-slate-300 text-sm font-semibold uppercase tracking-widest mb-3">
          Problemas elétricos não esperam
        </p>
        <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
          Precisa de Atendimento de{" "}
          <span style={{ color: "var(--electric-yellow)" }}>Emergência?</span>
        </h2>
        <Link
          href={WA_EMERGENCY_LINK}
          id="footer-emergency-cta"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-pulse-whatsapp inline-flex items-center gap-3 px-8 py-5 rounded-2xl text-lg font-black text-white shadow-2xl hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#25d366" }}
        >
          <MessageCircle className="w-6 h-6" fill="white" />
          🔴 Chamar Agora – Emergência Elétrica
        </Link>
        <p className="text-slate-400 text-xs mt-4">
          Clique para abrir o WhatsApp diretamente — resposta rápida garantida
        </p>
      </div>

      {/* Info grid */}
      <div className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--electric-yellow)" }}
              >
                <Zap className="w-5 h-5 text-slate-900" fill="currentColor" />
              </div>
              <span className="text-white font-black text-xl">Adriano</span>
              <span className="text-slate-400 font-medium text-sm">Eletricista</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Técnico em Eletrotécnica com mais de 18 anos de experiência em instalações elétricas residenciais e comerciais.
            </p>
            <div className="flex items-center gap-2 text-sm"
              style={{ color: "var(--electric-yellow)" }}>
              <Shield className="w-4 h-4" />
              <strong>Evite curtos, choques e incêndios.</strong>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Serviços
            </h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              {[
                "Chuveiros Elétricos",
                "Quadros de Distribuição (QDC)",
                "Iluminação Residencial e Comercial",
                "Carregadores Veiculares (EV)",
                "Energia Solar (Infraestrutura)",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span style={{ color: "var(--electric-yellow)" }}>⚡</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href={WA_LINK}
                  id="footer-whatsapp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "#25d366" }}
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold">(19) 98322-0498</span>
                </Link>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "var(--electric-yellow)" }} />
                Atendimento Residencial e Comercial
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--electric-yellow)" }} />
                <span>Barão Geraldo, Campinas e região – São Paulo</span>
              </li>
            </ul>

            {/* WhatsApp button */}
            <Link
              href={WA_LINK}
              id="footer-whatsapp-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#25d366" }}
            >
              <MessageCircle className="w-4 h-4" />
              Abrir WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-4 px-6 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} Adriano Eletricista · Barão Geraldo, Campinas – SP ·{" "}
          <span style={{ color: "var(--electric-yellow)" }}>
            Técnico em Eletrotécnica certificado
          </span>
        </p>
      </div>
    </footer>
  );
}
