# ⚡ Dimalsha Perera — Premium Software Engineering Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-0ea5e9?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?style=for-the-badge&logo=typescript)
![Style](https://img.shields.io/badge/Style-Obsidian%20Glass-8b5cf6?style=for-the-badge)

A high-performance, interactive personal portfolio built to showcase my **projects**, **certifications**, and **technical skill set** as a Full Stack Software Engineer. 

Originally built in Vanilla HTML/JS, this project has been fully migrated to a modern **Next.js (App Router)** and **TypeScript** architecture. It features a custom **Obsidian Glass** aesthetic, custom React hooks for physics-based animations, and seamless performance. ✨🖤

---

## 🌐 Live Demo

🔗 **[dimalshaperera.netlify.app](https://dimalshaperera.netlify.app/)** *(Update with your new Next.js deployment link!)*

---

## 📸 Preview

> Add a high-quality screenshot or GIF of your new Hero section and 3D Carousel here.

![Portfolio Preview](https://img.shields.io/badge/Preview-Add%20Screenshot%20Here-111827?style=for-the-badge)

---

## ✨ Architectural Highlights & Features

### 💎 Obsidian Glass UI (Glassmorphism)
- Deep-dark frosted panels with dynamic blur and subtle glow accents.
- Modern typography (`Space Grotesk` & `Inter`) and carefully tuned CSS variables for premium depth and contrast.

### ⚛️ Advanced React & Next.js Implementation
- **App Router Architecture:** Utilizes the latest Next.js 14 `app/` directory structure for optimal routing.
- **Custom React Hooks:** Replaced vanilla DOM scripts with reusable, performant React hooks:
  - `useSpotlight`: Tracks mouse coordinates to generate a dynamic lighting effect on cards.
  - `useTilt`: A lightweight, custom physics hook calculating mouse trajectory for 3D card tilting.
  - `useScrollReveal`: Utilizes the `IntersectionObserver` API integrated into the React lifecycle.
- **Client/Server Component Separation:** Optimized rendering by isolating interactive elements inside `"use client"` boundaries while keeping the layout server-rendered.

### 🎪 Interactive Masterpieces
- **3D Feature Carousel:** A draggable, auto-rotating 3D CSS carousel built entirely in React state for showcasing flagship projects.
- **Infinite Tech Marquee:** A seamless, CSS-driven infinite loop highlighting the technical arsenal.

### 📬 Real-time Contact Integration
- Serverless email delivery powered by **@emailjs/browser**, featuring active loading states and error handling directly in the UI.

---

## 🧰 Tech Stack

- **Framework:** Next.js 14.2 (App Router)
- **Library:** React 18
- **Language:** TypeScript / JavaScript (ES6+)
- **Styling:** Custom CSS (Obsidian Glass Theme) + Bootstrap 5 Grid System
- **Integrations:** EmailJS
- **Version Control:** Git & GitHub (Main -> Develop -> Feature branching strategy)

---

## 📁 Project Structure

```text
My_Portfolio/
├── public/                     # Static media assets (Next.js optimized)
│   ├── Featured/               # MP4 videos for 3D Carousel
│   ├── My Certificates/        # Certification badges & images
│   ├── Project Images/         # Screenshots of featured work
│   ├── DimalshaPerera_Resume.pdf 
│   └── Logo.jpg
├── src/
│   ├── app/                    # Next.js App Router Core
│   │   ├── globals.css         # Master stylesheet (CSS variables, animations)
│   │   ├── layout.tsx          # Root wrapper, Meta tags, and Global Scripts
│   │   └── page.tsx            # Main assembly of all components
│   └── components/             # Modular React Components
│       ├── About.tsx
│       ├── AnimationProvider.tsx # Global DOM observer for scroll reveals
│       ├── BackgroundSystem.tsx  # Floating orbs & noise overlay
│       ├── Certifications.tsx
│       ├── Contact.tsx         # EmailJS integrated form
│       ├── Experience.tsx
│       ├── Featured.tsx        # 3D Draggable Carousel
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx          # Scroll-aware dynamic navbar
│       ├── Projects.tsx        
│       ├── Skills.tsx
│       ├── TechMarquee.tsx
│       ├── useScrollReveal.ts  # Custom Hook
│       ├── useSpotlight.ts     # Custom Hook
│       └── useTilt.ts          # Custom Hook
├── .gitignore
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started (Local Setup)

Want to run this locally? Follow these steps:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/perera99-msd/My_Portfolio.git
cd My_Portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser to see the application running.

---

## 🔐 Environment Setup (Contact Form)

If you fork this project, you will need to set up your own EmailJS account for the contact form to work.

1. Create a free account at EmailJS.
2. Create an Email Service and an Email Template.
3. Update the credentials inside src/components/Contact.tsx:

```js
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';
```

(For production, it is recommended to move these to a .env.local file).

---

## 👨‍💻 Git Workflow Standard

This project follows a professional branching model:

- `main` - Production-ready code.
- `develop` - Active development and staging branch.
- `feature/*` or `dev-*` - Isolated branches for new components or fixes.

---

## 📄 License

This project is intended for personal portfolio use. If you wish to draw inspiration from the Obsidian Glass UI or the custom React hooks, please provide attribution. 🙏

---

## 👤 Author

Dimalsha Perera 💼 Software Engineering Student | Aspiring Full Stack Engineer

🌐 GitHub: @perera99-msd

🔗 LinkedIn: Dimalsha Perera
