# 🤝 Contributing Guide

Thanks for your interest in contributing.

## ✅ Prerequisites
- Node.js 18+
- npm 9+

## 🛠️ Setup
1. Fork the repository
2. Clone your fork
3. Install dependencies

```bash
npm install
```

4. Start development server

```bash
npm run dev
```

## 🌿 Branching Strategy
This project follows a strict branch flow:
- main: production
- develop: integration/staging
- dev-dimalsha: active coding branch

Please do not open direct code changes to main.

## ✍️ Coding Standards
- Keep changes focused and atomic
- Preserve existing design language and component patterns
- Prioritize responsive behavior and accessibility
- Use TypeScript-safe patterns and avoid unnecessary any usage

## 🧪 Validation Before PR
Run:

```bash
npm run lint
npm run build
```

## 📦 Pull Request Checklist
- Clear title and summary
- Screenshots/videos for UI changes (desktop + mobile)
- No unrelated file edits
- Lint/build pass locally

## 🐞 Reporting Issues
When opening an issue, include:
- Expected behavior
- Actual behavior
- Steps to reproduce
- Environment details (OS, browser, Node version)
