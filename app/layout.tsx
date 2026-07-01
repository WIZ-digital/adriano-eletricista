import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Adriano Eletricista | Barão Geraldo e Campinas – +18 Anos de Experiência",
  description:
    "Eletricista profissional em Barão Geraldo e Campinas. Técnico em Eletrotécnica com +18 anos de experiência. Chuveiros, quadros elétricos, iluminação, carregadores EV e energia solar. Evite curtos, choques e incêndios – chame agora!",
  keywords: [
    "eletricista barão geraldo",
    "eletricista campinas",
    "eletricista residencial",
    "instalação elétrica",
    "quadro elétrico",
    "chuveiro elétrico",
    "carregador carro elétrico",
    "energia solar campinas",
    "eletricista 24h",
  ],
  openGraph: {
    title: "Adriano Eletricista | Barão Geraldo e Campinas",
    description:
      "Técnico em Eletrotécnica com +18 anos de experiência. Serviços residenciais e comerciais. Solicite seu orçamento agora!",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full antialiased font-sans">
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  );
}
