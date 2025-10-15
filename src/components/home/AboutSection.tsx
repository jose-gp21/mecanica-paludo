"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import equipe from "../../../public/images/equipe.jpg";
import oficina from "../../../public/images/oficina.jpg";
import oficina2 from "../../../public/images/oficina2.jpg";
import oficina3 from "../../../public/images/oficina3.jpg";

export default function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Array de imagens da galeria
  const images = [
    { src: equipe, alt: "Equipe Mecânica Paludo" },
    { src: oficina, alt: "Oficina Mecânica Paludo" },
    { src: oficina2, alt: "Serviços na Mecânica Paludo" },
    { src: oficina3, alt: "Atendimento na Mecânica Paludo" }, 
  ];

  // Auto-play da galeria
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="sobre" className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-12 text-center uppercase">
          Sobre a Mecânica Paludo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Galeria */}
          <div className="relative">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Botões */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-zinc-900 p-2 rounded-lg shadow-lg transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-zinc-900 p-2 rounded-lg shadow-lg transition-all"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImage
                      ? 'w-8 bg-[#00d055]'
                      : 'w-2 bg-zinc-300'
                  }`}
                  aria-label={`Imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Texto */}
          <div className="space-y-6">
            <p className="text-zinc-700 text-lg leading-relaxed">
              A <strong className="text-[#00d055]">Mecânica Paludo</strong> é referência em Abelardo Luz - SC, com mais de{" "}
              <strong>10 anos</strong> oferecendo serviços de excelência em manutenção automotiva.
            </p>
            
            <p className="text-zinc-700 text-lg leading-relaxed">
              Especializada em camionetes e certificada em revisão e troca de óleo, nossa equipe está sempre pronta para atender com profissionalismo, honestidade e dedicação.
            </p>
            
            <p className="text-zinc-700 text-lg leading-relaxed">
              Nosso compromisso é com a <strong className="text-[#00d055]">segurança e tranquilidade</strong> de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}