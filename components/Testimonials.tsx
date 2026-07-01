import { Star } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    name: "Mariana R.",
    location: "Barão Geraldo, Campinas",
    rating: 5,
    text: "O Adriano foi pontual, super educado e deixou tudo impecável. Trocou o chuveiro e revisou o quadro elétrico da casa em menos de duas horas. Recomendo demais!",
    initials: "MR",
    color: "#2563eb",
  },
  {
    id: "t2",
    name: "Carlos Eduardo S.",
    location: "Campinas – Barão Geraldo",
    rating: 5,
    text: "Profissional de verdade. Instalou o carregador do meu carro elétrico com toda segurança, explicou cada etapa do serviço e o preço foi justo. Volto sempre!",
    initials: "CS",
    color: "#059669",
  },
  {
    id: "t3",
    name: "Fernanda L.",
    location: "Região de Barão Geraldo",
    rating: 5,
    text: "Meu QDC estava com problemas sérios. O Adriano identificou tudo rapidamente e resolveu com segurança. Conhecimento técnico impressionante. 10 estrelas!",
    initials: "FL",
    color: "#7c3aed",
  },
  {
    id: "t4",
    name: "Roberto M.",
    location: "Campinas",
    rating: 5,
    text: "Chamei para instalação de iluminação LED na minha loja. Resultado ficou incrível e o trabalho foi muito limpo. Com certeza vou chamar de novo para a energia solar.",
    initials: "RM",
    color: "var(--electric-blue)",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 star-filled" fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 px-6"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--electric-yellow)" }}>
            O que dizem os clientes
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-4"
            style={{ color: "var(--electric-blue)" }}>
            Avaliações Reais de Barão Geraldo
          </h2>
          <div className="flex items-center justify-center gap-2">
            <StarRating count={5} />
            <span className="font-bold text-lg" style={{ color: "var(--electric-blue)" }}>5.0</span>
            <span className="text-sm" style={{ color: "var(--gray-text)" }}>— Satisfação total dos clientes</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(({ id, name, location, rating, text, initials, color }) => (
            <div
              key={id}
              id={`testimonial-${id}`}
              className="p-6 rounded-2xl border hover:shadow-md transition-shadow"
              style={{ borderColor: "var(--gray-mid)", backgroundColor: "var(--gray-light)" }}
            >
              {/* Stars */}
              <div className="mb-3">
                <StarRating count={rating} />
              </div>

              {/* Quote */}
              <p className="text-sm leading-relaxed mb-5 italic"
                style={{ color: "var(--foreground)" }}>
                "{text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--electric-blue)" }}>
                    {name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--gray-text)" }}>
                    📍 {location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust note */}
        <p className="text-center text-sm mt-10" style={{ color: "var(--gray-text)" }}>
          ✅ Clientes reais da região de Barão Geraldo e Campinas
        </p>
      </div>
    </section>
  );
}
