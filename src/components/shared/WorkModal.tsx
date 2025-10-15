"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Wrench,
  ClipboardList,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { useWorkModal } from "@/hooks/useWorkModal";

export function WorkModal() {
  const { isOpen, close } = useWorkModal();

  const phone = "5549998239818";
  const message = encodeURIComponent(
    "Olá! Gostaria de enviar meu currículo para a vaga de mecânico na Mecânica Paludo."
  );
  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  const requirements = [
    "Experiência na área de mecânica automotiva",
    "CNH categoria B válida",
    "Comprometimento e proatividade",
    "Ensino Médio completo",
  ];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ 
                duration: 0.3, 
                ease: [0.16, 1, 0.3, 1]
              }}
              className="w-full max-w-lg max-h-[95vh] overflow-y-auto pointer-events-auto"
            >
              <div className="bg-amber-50 text-stone-900 rounded-sm border-2 sm:border-4 border-stone-800 shadow-2xl relative overflow-hidden">
                
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_2px,#000_4px)]" />
                
                <div className="relative bg-stone-800 p-4 sm:p-6 md:p-8 text-amber-50 border-b-2 sm:border-b-4 border-amber-600">
                  <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]" />

                  <motion.button
                    onClick={close}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-none bg-amber-50/20 hover:bg-amber-50/30 text-amber-50 transition-colors z-10 border border-amber-50/30"
                    aria-label="Fechar modal"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={18} className="sm:w-5 sm:h-5" strokeWidth={3} />
                  </motion.button>

                  <div className="relative flex flex-col items-center justify-center text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-sm bg-amber-600 mb-3 sm:mb-4 shadow-lg border-2 border-amber-700"
                    >
                      <Wrench className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-stone-900" strokeWidth={2.5} />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wide mb-2">
                        Vaga Disponível
                      </h2>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <div className="h-px w-6 sm:w-8 bg-amber-600" />
                      <p className="text-sm sm:text-base font-bold text-amber-400 uppercase tracking-widest">
                        Mecânico
                      </p>
                      <div className="h-px w-6 sm:w-8 bg-amber-600" />
                    </motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-xs sm:text-sm text-amber-300 mt-2"
                    >
                      Abelardo Luz / SC
                    </motion.p>
                  </div>
                </div>

                <div className="relative p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-4 sm:mb-5 pb-2 sm:pb-3 border-b-2 border-stone-300">
                      <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" strokeWidth={2.5} />
                      <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-stone-800">
                        Requisitos da Vaga
                      </h3>
                    </div>

                    <ul className="space-y-2.5 sm:space-y-3">
                      {requirements.map((req, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-start gap-2.5 sm:gap-3 text-stone-700 text-xs sm:text-sm"
                        >
                          <CheckCircle2 
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 flex-shrink-0 mt-0.5" 
                            strokeWidth={2.5}
                          />
                          <span className="leading-relaxed font-medium">{req}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-1 h-0.5 bg-stone-300" />
                    <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400" />
                    <div className="flex-1 h-0.5 bg-stone-300" />
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-stone-600 text-xs sm:text-sm text-center leading-relaxed font-medium px-2"
                  >
                    Se você é apaixonado por mecânica e busca crescer profissionalmente em uma equipe de confiança, envie seu currículo e faça parte da{" "}
                    <span className="text-amber-800 font-bold">
                      Mecânica Paludo
                    </span>.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <motion.a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={close}
                      className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-amber-700 hover:bg-amber-800 text-amber-50 font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-sm transition-all duration-300 uppercase text-xs sm:text-sm tracking-wider shadow-lg border-2 border-amber-800 w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                      <span className="text-center">Enviar Currículo via WhatsApp</span>
                    </motion.a>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="bg-stone-200 py-3 sm:py-4 px-3 sm:px-6 text-[10px] sm:text-xs text-stone-600 text-center border-t-2 border-stone-300"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 font-semibold">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-700 hidden sm:block" />
                    <span className="leading-tight sm:leading-normal">
                      Seg–Sex 07:30–12:00 / 13:30–18:30
                    </span>
                    <span className="hidden sm:inline">|</span>
                    <span className="leading-tight sm:leading-normal">
                      Sáb 07:00–12:00
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}