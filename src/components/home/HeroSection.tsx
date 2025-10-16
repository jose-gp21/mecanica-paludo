"use client";
import { motion } from "framer-motion";
import banner from '../../../public/images/daniel-de-lima-HIj8FDCj7jc-unsplash.jpg';
import Image from "next/image";
import { useWhatsAppModal } from "@/hooks/useWhatsAppModal";
import { useEffect, useState } from "react";

export default function HeroSection() {
 const { open } = useWhatsAppModal();
 const [headerHeight, setHeaderHeight] = useState(0);
 useEffect(() => {
    const header = document.getElementById("main-header");
    if (header) setHeaderHeight(header.offsetHeight);
  }, []);

  return (
    <section
      className="relative bg-zinc-900 text-white min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: `${headerHeight + 20}px` }} // ✅ espaçamento dinâmico
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={banner}
          alt="Caminhonete off-road"
          className="w-full h-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-zinc-950/98 via-zinc-950/60 md:via-zinc-950/55 to-zinc-950/70 md:to-zinc-950/40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-0">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hidden md:inline-flex items-center gap-2 sm:gap-3 bg-[#00d055]/20 border-2 border-[#00d055]/50 rounded-none px-5 sm:px-5 py-2.5 sm:py-2.5 mb-8 sm:mb-8"
            >
              <div className="w-2.5 sm:w-2.5 h-2.5 sm:h-2.5 bg-[#00d055] rounded-full animate-pulse"></div>
              <span className="text-[#00d055] text-xs sm:text-base font-extrabold tracking-widest uppercase">10 Anos na Estrada</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-none tracking-tight">
              <span className="text-zinc-100 drop-shadow-2xl block mb-1" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}>MECÂNICA</span>
              <span className="text-[#00d055] drop-shadow-2xl block text-6xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.5), 0 0 40px rgba(0, 208, 85, 0.4)' }}>
                PALUDO
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-zinc-200 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-2xl font-semibold mx-auto md:mx-0">
              Especialistas em caminhonetes.
            </p>

            {/* Features */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-10 md:mb-12">
              {[
                { icon: "🔧", text: "Mecânica de Camionetes" },
                { icon: "⚡", text: "Serviço Completo" },
                { icon: "✓", text: "Garantia" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 sm:gap-4 bg-zinc-800/70 backdrop-blur-sm rounded-none px-5 sm:px-5 py-4 sm:py-4 border-l-4 border-[#00d055] hover:bg-zinc-800/80 transition-all duration-300 shadow-lg"
                >
                  <span className="text-3xl sm:text-3xl">{feature.icon}</span>
                  <span className="text-sm sm:text-base md:text-lg font-extrabold text-zinc-100 uppercase tracking-wide">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="hidden md:flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-5"
            >
              <button
                onClick={open}
                className="group relative inline-flex items-center justify-center gap-3 sm:gap-3 bg-[#00d055] hover:bg-[#00e05f] text-black font-black px-10 sm:px-10 py-5 sm:py-5 rounded-none transition-all duration-300 shadow-2xl shadow-[#00d055]/40 hover:shadow-[#00d055]/60 hover:scale-105 active:scale-95 uppercase tracking-widest text-base sm:text-lg border-b-4 border-[#00a043] hover:border-[#00b04a]"
              >
                <svg 
                  className="w-7 h-7 sm:w-7 sm:h-7" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Agende Agora</span>
              </button>

              <a
                href="/servicos"
                className="inline-flex items-center justify-center gap-3 sm:gap-3 bg-transparent hover:bg-zinc-800/60 backdrop-blur-sm text-zinc-100 font-black px-10 sm:px-10 py-5 sm:py-5 rounded-none transition-all duration-300 border-2 border-zinc-600 hover:border-[#00d055] active:scale-95 uppercase tracking-widest text-base sm:text-lg"
              >
                <span>Nossos Serviços</span>
                <svg 
                  className="w-6 h-6 sm:w-6 sm:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>

    </section>
  );
}