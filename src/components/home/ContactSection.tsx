"use client";
import { MapPin, Phone, Clock, Facebook, Instagram, Wrench } from "lucide-react";
import { WhatsAppButton } from "../shared/WhatsAppButton";

function MapSection() {
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-[#00d055]/20 h-[450px] w-full relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d055]/10 to-emerald-500/10 pointer-events-none z-10" />
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.5204735141003!2d-52.33260421614561!3d-26.56591391665097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e51f3a403bd343%3A0x536f418ce9a02b75!2sMec%C3%A2nica%20Paludo%20Especializada%20Em%20Camionetas!5e1!3m2!1spt-BR!2sbr!4v1760551062623!5m2!1spt-BR!2sbr" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
export default function ContactSection() {
  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "LOCALIZAÇÃO",
      content: "SC-155, Km 17, nº 2515",
      subtitle: "Bairro Alvorada, Abelardo Luz – SC"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "TELEFONE",
      content: "(49) 99823-9818",
      subtitle: "WhatsApp disponível"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "HORÁRIO",
      content: "Segunda a Sexta",
      subtitle: "07:30 às 12:00 | 13:30 às 18:30"
    }
  ];

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-zinc-100 via-zinc-50 to-white relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#00d055] rounded-full opacity-50" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#00d055] rounded-full opacity-40" />
      <div className="absolute bottom-32 left-32 w-2 h-2 bg-[#00d055] rounded-full opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#00d055]" />
            <Wrench className="w-8 h-8 text-[#00d055]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#00d055]" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-zinc-900 mb-6 tracking-tight uppercase" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.1)'}}>
            Entre em Contato
          </h2>
          <p className="text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed font-bold">
            Especialistas em camionetas. 
            <span className="text-[#00d055]"> Confiança e potência</span> que você merece.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-zinc-200 hover:border-[#00d055]/50 transform hover:-translate-y-1"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#00d055]/30 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#00d055]/30 rounded-br-lg" />
              
              <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                <div className="bg-gradient-to-br from-[#00d055] to-emerald-600 p-5 rounded-lg shadow-xl border-2 border-[#00d055]/30">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-black text-zinc-900 text-lg tracking-wider">{item.title}</h3>
                <p className="text-zinc-900 font-bold text-lg">{item.content}</p>
                <p className="text-zinc-600 text-sm leading-relaxed font-medium">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <MapSection />
        </div>

        <div className="flex justify-center mb-12">
          <WhatsAppButton />
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 border-2 border-zinc-200">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-zinc-900 mb-2 uppercase tracking-wide">Redes Sociais</h3>
              <p className="text-zinc-700 font-bold">Acompanhe nosso trabalho</p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-pink-500 to-orange-500 text-white p-4 rounded-lg hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-pink-500/50 border-2 border-pink-600"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-lg hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-blue-500/50 border-2 border-blue-700"
                aria-label="Facebook"
              >
                <Facebook className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#00d055]/50" />
          <div className="w-2 h-2 bg-[#00d055] rounded-full" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#00d055]/50" />
        </div>
      </div>
    </section>
  );
}