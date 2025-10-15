# 🔧 Mecânica Paludo

<img src="public/logo.png" alt="Logo Mecânica Paludo" width="160"/>

> 🚗 **10 anos de confiança e excelência em manutenção automotiva**  
> Localizada em **Abelardo Luz - SC**, a Mecânica Paludo é especializada em **camionetes** e **serviços de revisão completa**, oferecendo segurança, qualidade e atendimento diferenciado.

---

## 🌐 Site Institucional

O site da **Mecânica Paludo** foi desenvolvido para apresentar os principais serviços da oficina, sua história e localização, facilitando o contato direto via **WhatsApp** e fortalecendo a presença digital da marca.

🖥️ **Acesse:** [https://mecanicapaludo.com.br](https://mecanicapaludo.com.br)

---

## 🧩 Tecnologias Utilizadas

| Categoria | Tecnologia | Descrição |
|------------|-------------|------------|
| **Frontend** | [Next.js 15](https://nextjs.org/) | Framework React moderno com renderização híbrida (SSG/SSR) |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | Tipagem estática e segurança em tempo de desenvolvimento |
| **Estilo** | [Tailwind CSS](https://tailwindcss.com/) | Estilização rápida, responsiva e personalizável |
| **Hospedagem** | [Vercel](https://vercel.com/) | Deploy contínuo e gratuito, com SSL automático |
| **Ícones** | [Lucide React](https://lucide.dev/) | Ícones leves e modernos |
| **Animações** | [Framer Motion](https://www.framer.com/motion/) | Efeitos suaves e transições fluídas |
| **Mapa** | [Google Maps Embed API](https://developers.google.com/maps) | Localização interativa da oficina |

---

## 📱 Páginas do Site

| Página | Conteúdo | Objetivo |
|---------|-----------|-----------|
| **Home** | Banner com logo, frase de impacto e botão de WhatsApp | Apresentar a marca |
| **Serviços** | Lista de serviços com ícones e descrições curtas | Mostrar especializações |
| **Sobre Nós** | História, fotos da oficina e da equipe | Gerar confiança e proximidade |
| **Contato** | Endereço, Google Maps, WhatsApp e redes sociais | Facilitar o contato |

---

## ⚙️ Estrutura de Pastas

```bash
src
│   ├── app
│   │   ├── contato
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── home
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── servicos
│   │   │   └── page.tsx
│   │   └── sobre
│   │       └── page.tsx
│   ├── components
│   │   ├── home
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   └── ServicesSection.tsx
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   ├── GlobalModals.tsx
│   │   │   └── Header.tsx
│   │   ├── shared
│   │   │   ├── MapSection.tsx
│   │   │   ├── SocialLinks.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   ├── WhatsAppModal.tsx
│   │   │   └── WorkModal.tsx
│   │   └── ui
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Section.tsx
│   ├── data
│   ├── hooks
│   │   ├── useWhatsAppModal.ts
│   │   └── useWorkModal.ts
