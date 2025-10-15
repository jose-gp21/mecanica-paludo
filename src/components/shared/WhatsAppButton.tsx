"use client";
import { MessageCircle } from "lucide-react";
import { useWhatsAppModal } from "@/hooks/useWhatsAppModal";

export function WhatsAppButton() {
  const { open } = useWhatsAppModal(); // Hook que controla o modal global

  return (
    <button
      onClick={open}
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-medium shadow-md transition active:scale-95"
    >
      <MessageCircle className="w-5 h-5" />
      Agendar pelo WhatsApp
    </button>
  );
}
