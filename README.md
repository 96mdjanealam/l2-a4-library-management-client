# 📚 BookSync

A modern Library Management System designed to manage books and borrowing records in a simple and scalable library system, built using React 19, Redux Toolkit, React Router v7, and styled with Tailwind CSS. Designed for high performance and an optimized developer experience using Vite and TypeScript.

---

## 📘 Introduction

This project is the **client-side** of a Library Management System. It allows users to browse, borrow, and manage library items. The application uses modern React paradigms like hooks, functional components, and centralized state management via Redux Toolkit.

---

## ✨ Features

* ⚛️ Built with React 19 and TypeScript
* 📦 State management using Redux Toolkit
* 📄 Form handling via React Hook Form
* 🔥 Toast notifications with `react-hot-toast` and `sonner`
* 🌐 Routing powered by React Router v7
* 💨 Utility-first styling with Tailwind CSS
* ⚡ Fast dev experience with Vite
* ✅ Linting with ESLint

---

## 💾 Installation

```bash
# Clone the repository
git clone https://github.com/96mdjanealam/l2-a4-library-management-client.git
cd l2-a4-library-management-client

# Install dependencies
npm install
```

---

## ▶️ Usage

### Development Server

```bash
npm run dev
```

Starts the development server using **Vite**.

### Build for Production

```bash
npm run build
```

Builds the project with **TypeScript** and **Vite**.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally.

### Lint the Codebase

```bash
npm run lint
```

Runs ESLint on the project files.

---

## 📦 Dependencies

**Runtime:**

* `react` ^19.1.0
* `react-dom` ^19.1.0
* `react-router` ^7.6.3
* `@reduxjs/toolkit` ^2.8.2
* `react-redux` ^9.2.0
* `react-hook-form` ^7.59.0
* `react-hot-toast` ^2.5.2
* `sonner` ^2.0.6
* `tailwindcss` ^4.1.11
* `@tailwindcss/vite` ^4.1.11
* `lucide-react` ^0.525.0

**Development:**

* `vite` ^7.0.0
* `typescript` \~5.8.3
* `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
* `@vitejs/plugin-react`
* `@types/react`, `@types/react-dom`
* `typescript-eslint`

---

## ⚙️ Configuration

This project uses:

* **Vite** for build and dev server
* **TypeScript** for static typing
* **ESLint** for linting (`.eslintrc` should be configured)
* **Tailwind CSS** via `@tailwindcss/vite` plugin
* **Redux Toolkit** for global state
