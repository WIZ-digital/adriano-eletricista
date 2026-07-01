import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Técnico em Eletrotécnica",
    description: "Formação técnica profissional com diploma reconhecido e base sólida.",
  },
  {
    icon: Briefcase,
    title: "+18 Anos de Experiência",
    description: "Confiança e prática garantida em centenas de instalações e manutenções.",
  },
  {
    icon: MapPin,
    title: "Atendimento Local",
    description: "Cobertura em Barão Geraldo, Campinas e região com agilidade.",
  },
];

export default function AuthorityBar() {
  return (
    <section id="autoridade" className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-center text-sm font-semibold uppercase tracking-widest mb-10"
          style={{ color: "var(--electric-yellow)" }}>
          Por que escolher o Adriano?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-8 rounded-2xl border transition-all hover:shadow-lg"
              style={{
                borderColor: "var(--gray-mid)",
                backgroundColor: "var(--gray-light)",
              }}
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--electric-blue)" }}
              >
                <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>

              {/* Yellow accent line */}
              <div className="w-10 h-1 rounded-full mb-4" style={{ backgroundColor: "var(--electric-yellow)" }} />

              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--electric-blue)" }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gray-text)" }}>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Safety phrase banner */}
        <div
          className="mt-12 flex items-center justify-center gap-3 py-4 px-8 rounded-xl text-center"
          style={{ backgroundColor: "var(--electric-blue-dark)", color: "#fff" }}
        >
          <span className="text-2xl">⚡</span>
          <p className="font-semibold text-sm md:text-base">
            <strong style={{ color: "var(--electric-yellow)" }}>Evite curtos, choques e incêndios</strong>
            {" "}— Sempre que precisar de um serviço elétrico, conte com um profissional certificado.
          </p>
          <span className="text-2xl">⚡</span>
        </div>
      </div>
    </section>
  );
}
