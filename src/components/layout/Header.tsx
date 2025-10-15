"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ importa o hook
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useWhatsAppModal } from "@/hooks/useWhatsAppModal";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // ✅ rota atual
  const { open } = useWhatsAppModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = dayjs().locale("pt-br");
      const day = now.day(); // 0=Dom, 1=Seg, ... 6=Sáb
      const hour = now.hour();
      const minute = now.minute();
      const currentTime = hour + minute / 60;

      let open = false;

      // Segunda a Sexta: 07:30–12:00 e 13:30–18:30
      if (day >= 1 && day <= 5) {
        open =
          (currentTime >= 7.5 && currentTime <= 12) ||
          (currentTime >= 13.5 && currentTime <= 18.5);
      }

      // Sábado: 07:00–12:00
      if (day === 6) {
        open = currentTime >= 7 && currentTime <= 12;
      }

      // Domingo: fechado
      if (day === 0) open = false;

      setIsOpen(open);
    };
     checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60 * 1000); // verifica a cada 1 min
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: "/home", label: "Início" },
    { href: "/servicos", label: "Serviços" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div
        className={`w-full bg-black text-zinc-300 text-sm transition-all duration-300 ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-5">
            <a
              href="tel:5549998239818"
              className="flex items-center gap-2 hover:text-[#00d055] transition-colors"
            >
              <Phone size={14} />
              <span className="font-medium">(49) 99982-3981</span>
            </a>
            <div className="hidden sm:flex items-center gap-2">
              <MapPin size={14} />
              <span>Abelardo Luz, SC</span>
            </div>
          </div>{/* 🔥 Status dinâmico */}
      <div className="text-xs text-zinc-400">
        {isOpen ? (
          <span className="inline-flex items-center gap-2 text-[#00d055] font-medium">
            <span className="w-2 h-2 bg-[#00d055] rounded-full animate-pulse"></span>
            Aberto agora
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 text-red-500 font-medium">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Fechado agora
          </span>
        )}
      </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        id="main-header"
        className={`fixed w-full top-0 z-50 transition-all pt-3 pb-3 duration-500 ${
            isScrolled
            ? "bg-zinc-900/95 backdrop-blur-lg shadow-2xl border-b border-[#00d055]/20"
            : "bg-transparent"
        } ${isScrolled ? "mt-0" : "mt-8"}`}
        >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00d055]/20 blur-xl rounded-full group-hover:bg-[#00d055]/30 transition-all duration-300"></div>
              <Image
                src={logo}
                alt="Logo Mecânica Paludo"
                width={50}
                height={50}
                className="rounded-full relative z-10 ring-2 ring-[#00d055]/50 group-hover:ring-[#00d055] transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-xl tracking-tight leading-none">
                MECÂNICA
              </span>
              <span className="text-[#00d055] font-black text-xl tracking-tight leading-none">
                PALUDO
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // ✅ verifica se é a rota atual
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2.5 font-bold uppercase text-sm tracking-wider transition-all duration-300 group ${
                    isActive
                      ? "text-[#00d055]"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00d055] transform origin-left transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <button
            onClick={open}
            className="hidden lg:flex items-center gap-2 bg-[#00d055] hover:bg-[#00e05f] text-black font-black px-6 py-3 uppercase text-sm tracking-wider transition-all duration-300 hover:scale-105 shadow-lg shadow-[#00d055]/30 hover:shadow-[#00d055]/50 border-b-2 border-[#00a043]"
          >
            <Phone size={18} />
            <span>Agendar</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white bg-[#00d055] hover:bg-[#00e05f] p-3 transition-all duration-300 hover:scale-110 shadow-lg shadow-[#00d055]/30"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-zinc-900 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 border-b border-zinc-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-white font-black text-2xl leading-none">
                      MECÂNICA
                    </span>
                    <span className="text-[#00d055] font-black text-2xl leading-none">
                      PALUDO
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-400 hover:text-white p-2 hover:bg-zinc-800 rounded transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-zinc-400 text-sm">
                  Especialistas em caminhonetes há 10 anos
                </p>
              </div>

              <ul className="py-6 px-4 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-4 text-lg font-bold uppercase tracking-wide group ${
                          isActive
                            ? "text-[#00d055]"
                            : "text-zinc-300 hover:text-white"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span
                          className={`${
                            isActive
                              ? "opacity-100 text-[#00d055]"
                              : "opacity-0 group-hover:opacity-100"
                          } transition-opacity`}
                        >
                          →
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-zinc-700 border-t border-zinc-800">
                <button
                  onClick={open}
                  className="flex items-center justify-center gap-3 w-full bg-[#00d055] hover:bg-[#00e05f] text-black font-black py-4 uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#00d055]/30"
                >
                  <Phone size={20} />
                  <span>Agendar Agora</span>
                </button>
                <div className="mt-4 text-center text-zinc-500 text-xs">
                  <p>Segunda a Sexta: 7h - 18h</p>
                  <p>Sábado: 7h - 12h</p>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
