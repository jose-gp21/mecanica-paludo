"use client";
import { useWhatsAppModal } from "@/hooks/useWhatsAppModal";
import { useWorkModal } from "@/hooks/useWorkModal";
import { MapPin, Phone, Clock, Facebook, Instagram, Wrench, Mail, Send, Briefcase } from "lucide-react";

export default function Footer() {
const { open: openWhatsAppModal } = useWhatsAppModal(); // ✅
  const { open: openWorkModal } = useWorkModal();
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      {/* Top Section - CTA */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CTA WhatsApp */}
            <div className="bg-zinc-800 rounded-lg p-8 border-2 border-zinc-700 hover:border-[#00d055] transition-all">
              <div className="flex items-start gap-4">
                <Send className="w-8 h-8 text-[#00d055] flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white mb-2 uppercase">
                    Agende seu Serviço
                  </h3>
                  <p className="text-zinc-400 mb-4 text-sm">
                    Entre em contato via WhatsApp e garanta o melhor atendimento.
                  </p>
                  <button
                    onClick={openWhatsAppModal}
                    className="inline-flex items-center gap-2 bg-[#00d055] hover:bg-[#00e05f] text-zinc-950 font-black px-6 py-3 rounded-lg transition-all hover:scale-105 uppercase text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Falar no WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Trabalhe Conosco */}
            <div className="bg-zinc-800 rounded-lg p-8 border-2 border-zinc-700 hover:border-[#00d055] transition-all">
              <div className="flex items-start gap-4">
                <Briefcase className="w-8 h-8 text-[#00d055] flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white mb-2 uppercase">
                    Trabalhe Conosco
                  </h3>
                  <p className="text-zinc-400 mb-4 text-sm">
                    Faça parte da nossa equipe! Envie seu currículo.
                  </p>
                  <button
                    onClick={openWorkModal}  
                    className="inline-flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white font-black px-6 py-3 rounded-lg transition-all hover:scale-105 uppercase text-sm"
                  >
                    <Mail className="w-5 h-5" />
                    Entrar em contato
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-7 h-7 text-[#00d055]" />
              <h3 className="text-xl font-black text-white uppercase">Mecânica Paludo</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-4">
              Especialistas em camionetes com mais de 20 anos de experiência.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mecanicapaludo_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 text-white p-2.5 rounded-lg hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/MecanicaPaludo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2.5 rounded-lg hover:scale-110 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-base font-black text-white uppercase mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00d055] mt-0.5 flex-shrink-0" />
                <p className="text-zinc-400 text-sm">
                  SC-155, Km 17, nº 2515<br />
                  Bairro Alvorada, Abelardo Luz – SC
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00d055] flex-shrink-0" />
                <a href="tel:+5549998239818" className="text-zinc-400 hover:text-[#00d055] transition-colors text-sm">
                  (49) 99823-9818
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#00d055] mt-0.5 flex-shrink-0" />
                <p className="text-zinc-400 text-sm">
                  Segunda a Sexta<br />
                  07:30 - 12:00 | 13:30 - 18:30
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-base font-black text-white uppercase mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <a href="#sobre" className="block text-zinc-400 hover:text-[#00d055] transition-colors text-sm font-bold uppercase">
                Sobre Nós
              </a>
              <a href="#servicos" className="block text-zinc-400 hover:text-[#00d055] transition-colors text-sm font-bold uppercase">
                Serviços
              </a>
              <a href="#contato" className="block text-zinc-400 hover:text-[#00d055] transition-colors text-sm font-bold uppercase">
                Contato
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-6">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} <span className="text-[#00d055] font-bold">Mecânica Paludo</span>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}