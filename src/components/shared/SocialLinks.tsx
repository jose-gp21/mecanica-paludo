import { Facebook, Instagram } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-6 text-slate-600">
      <a
        href="https://www.instagram.com/mecanicapaludo_/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-600 transition"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href="https://www.facebook.com/MecanicaPaludo"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition"
      >
        <Facebook className="w-6 h-6" />
      </a>
    </div>
  );
}
