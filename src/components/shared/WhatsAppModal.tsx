"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const phone = "5549998239818";
  const message = encodeURIComponent(
    "Olá! Gostaria de agendar um serviço na Mecânica Paludo."
  );
  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative text-center"
          >
            {/* Botão fechar */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center space-y-4">
              <MessageCircle className="w-10 h-10 text-green-600" />
              <h2 className="text-xl font-semibold text-slate-800">
                Falar pelo WhatsApp
              </h2>
              <p className="text-slate-600 text-sm">
                Você será redirecionado para o nosso WhatsApp oficial da{" "}
                <strong>Mecânica Paludo</strong>.
              </p>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
              >
                <MessageCircle size={18} />
                Abrir WhatsApp
              </a>

              <button
                onClick={onClose}
                className="text-slate-500 hover:text-slate-700 text-sm mt-2"
              >
                Cancelar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
