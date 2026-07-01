"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/5519983220498?text=Ol%C3%A1%20Adriano%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento";

export default function WhatsAppFAB() {
  return (
    <Link
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-fab"
      aria-label="Chamar Adriano no WhatsApp"
      className="whatsapp-fab flex items-center justify-center w-16 h-16 hover:scale-110 transition-transform"
      style={{ backgroundColor: "#25d366" }}
    >
      <MessageCircle className="w-8 h-8 text-white" fill="white" />
    </Link>
  );
}
