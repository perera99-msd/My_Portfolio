# 🚀 Dimalsha Perera Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-149eca?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-111827?style=for-the-badge)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06b6d4?style=for-the-badge&logo=tailwindcss)

A premium personal portfolio built with Next.js App Router, cinematic motion, and a layered glass design system. This project showcases selected builds, technical capabilities, certifications, and contact pathways in a performance-focused experience.

## ✨ Highlights
- 🎨 Premium visual language with glassmorphism and dynamic background systems
- ⚡ Smooth route-level UX using Next.js App Router
- 🧭 Animated floating navigation and section reveal transitions
- 📱 Mobile-optimized responsive layouts with non-overlapping component flow
- 🧩 Reusable UI architecture powered by data in a central content layer

## 🌍 Live Demo
- Coming soon (update this section with the production URL)

## 🧱 Tech Stack
- Framework: Next.js 14
- UI Library: React 18
- Language: TypeScript
- Animation: Framer Motion
- Styling: Tailwind CSS 4 + custom global design tokens
- Icons: Lucide React + React Icons

## 📂 Project Structure

```text
My_Portfolio/
├── public/
│   ├── about/
│   ├── blog/
│   ├── Expertice/
│   ├── Featured/
│   ├── Footer/
│   ├── Hero/
│   ├── My Certificates/
│   ├── Project Images/
│   │   ├── SOUL-SYNC/
│   │   ├── SPHYNX-BLACK/
│   │   └── SPHYNX-FLICKS/
│   └── projects/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── home/
│   │   │   ├── CTA.tsx
│   │   │   ├── Expertise.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Marquee.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Stats.tsx
│   │   ├── AboutBackdrop.tsx
│   │   ├── AnimationProvider.tsx
│   │   ├── BackgroundSystem.tsx
│   │   ├── BlogBackdrop.tsx
│   │   ├── FloatingNav.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectsBackdrop.tsx
│   │   └── Reveal.tsx
│   ├── lib/
│   │   └── portfolio-data.ts
│   └── types/
│       └── styles.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 🧭 Route Map
- 🏠 Home: Hero, stats, expertise, featured projects, tech marquee, CTA
- 👤 About: Story, timeline, principles, grouped skills, certifications
- 🧪 Projects: Featured and detailed project cards with metrics and links
- 📝 Blog: Featured note + latest articles layout

## ⚙️ Local Development

### 1. Clone
```bash
git clone https://github.com/perera99-msd/My_Portfolio.git
cd My_Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Visit http://localhost:3000

## 📜 Available Scripts
- npm run dev: Start local development server
- npm run build: Create production build
- npm run start: Start production server
- npm run lint: Run lint checks

## 🛠️ Customization Guide
- Update content source in src/lib/portfolio-data.ts
- Add or replace media in public/
- Tune design system variables and utility classes in src/app/globals.css
- Update route-level metadata in each page file under src/app/

## 🔒 Security
Please review SECURITY.md for vulnerability reporting guidelines.

## 🤝 Contributing
Please review CONTRIBUTING.md before submitting changes.

## 📄 License
This project is licensed under the MIT License. See LICENSE for details.

## 👨‍💻 Author
- Name: Dimalsha Perera
- GitHub: https://github.com/perera99-msd
- LinkedIn: https://www.linkedin.com/in/msdimalsha-perera
