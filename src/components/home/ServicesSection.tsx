"use client";
import { Wrench, Droplet, ShieldCheck, Settings, Gauge, Car, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import oficina from "../../../public/images/tahamie-farooqui-K5624F8cipE-unsplash.jpg";
import { useWhatsAppModal } from "@/hooks/useWhatsAppModal";

const services = [
  { 
    icon: Droplet, 
    title: "Troca de Óleo", 
    desc: "Produtos de alta qualidade e troca rápida para manter seu motor sempre protegido.",
    features: ["Óleos Premium", "Filtros Originais", "Serviço em 30min"]
  },
  { 
    icon: Wrench, 
    title: "Revisões Preventivas", 
    desc: "Manutenção completa e certificada para evitar problemas futuros.",
    features: [ "Diagnóstico", "Relatório"]
  },
  { 
    icon: ShieldCheck, 
    title: "Sistema de Freios", 
    desc: "Segurança garantida com revisão completa do sistema de frenagem.",
    features: ["Pastilhas", "Fluido de Freio"]
  },
  { 
    icon: Settings, 
    title: "Suspensão", 
    desc: "Correção e alinhamento com precisão para máximo conforto e estabilidade.",
    features: ["Alinhamento", "Balanceamento", "Geometria"]
  },
  { 
    icon: Gauge, 
    title: "Caixa e Câmbio", 
    desc: "Diagnóstico e reparo especializado em transmissões manuais.",
    features: ["Diagnóstico Avançado", "Reparo Especializado", "Garantia"]
  },
  { 
    icon: Car, 
    title: "Motor", 
    desc: "Serviço completo de mecânica para máxima performance e durabilidade.",
    features: ["Injeção Eletrônica", "Turbo e Performance"]
  },
];

export function ServicesSection() {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (idx: number) => {
    setOpenService(openService === idx ? null : idx);
  };
  const { open } = useWhatsAppModal();
  
  return (
    <section id="servicos" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={oficina}
          alt="Oficina Mecânica"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/95 via-zinc-950/90 to-zinc-950/95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 bg-[#00d055]/20 border-2 border-[#00d055]/50 rounded-none px-5 py-2 mb-6">
            <div className="w-2 h-2 bg-[#00d055] rounded-full animate-pulse"></div>
            <span className="text-[#00d055] text-sm font-bold tracking-wider uppercase">Serviços Especializados</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            O QUE FAZEMOS DE
            <span className="block text-[#00d055]">MELHOR</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Serviços completos para todos os carros e especializados em caminhonetes, com equipamentos de última geração e equipe qualificada
          </p>
        </div>

        {/* Services Grid - Desktop */}
        <div className="hidden md:grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-zinc-900/60 backdrop-blur-sm border-2 border-zinc-800 hover:border-[#00d055]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d055]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Card Content */}
              <div className="relative p-6 sm:p-8">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-[#00d055]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-zinc-800 border-2 border-[#00d055]/30 group-hover:border-[#00d055] group-hover:scale-110 transition-all duration-300">
                    <service.icon className="text-[#00d055] w-8 h-8" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-[#00d055] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-[#00d055] rotate-45"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Line Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00d055] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-[#00d055]/20 group-hover:border-[#00d055]/50 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Services Accordion - Mobile */}
        <div className="md:hidden space-y-3 max-w-2xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 backdrop-blur-sm border-2 border-zinc-800 overflow-hidden"
            >
              {/* Header - Clickable */}
              <button
                onClick={() => toggleService(idx)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200 active:bg-zinc-800/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-zinc-800 border-2 border-[#00d055]/30">
                    <service.icon className="text-[#00d055] w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openService === idx ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-[#00d055]" strokeWidth={3} />
                </motion.div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence initial={false}>
                {openService === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2 border-t-2 border-zinc-800">
                      {/* Description */}
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {service.desc}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-zinc-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-[#00d055] rotate-45"></div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Bottom Accent Line */}
                      <div className="mt-4 pt-4 border-t border-[#00d055]/20">
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00d055] to-transparent"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center max-w-5xl mx-auto">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-zinc-900/80 backdrop-blur-sm border-2 border-[#00d055]/30 p-6 sm:p-8">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase">
                Não encontrou o serviço?
              </h3>
              <p className="text-zinc-400">
                Entre em contato e converse com nossa equipe especializada
              </p>
            </div>
            <button
              onClick={open}
              className="inline-flex items-center gap-3 bg-[#00d055] hover:bg-[#00e05f] text-black font-black px-8 py-4 transition-all duration-200 hover:scale-105 active:scale-95 uppercase tracking-wider shadow-lg shadow-[#00d055]/30 border-b-4 border-[#00a043] whitespace-nowrap"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Falar com Especialista</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}