# ⚡ Mevot — Electric Skateboard Product Website

A sleek, responsive frontend website for showcasing high-performance electric skateboards, built during an internship at **Netbond Technologies**. Developed using modern frontend technologies like **React (TypeScript)**, **Vite**, **Tailwind CSS**, and **GSAP** for smooth animations.

🚀 **[Live Site](https://netbondtechnologies.github.io/mevot/)**

---

## 🛠 Tech Stack

- ⚛️ **React** (with **TypeScript** support)
- ⚡ **Vite** — lightning-fast frontend tooling
- 💨 **Tailwind CSS** — utility-first CSS framework
- 🎞 **GSAP (GreenSock)** — animation library for stunning UI effects
- 🎠 **React Slick** — responsive sliders/carousels
- 🌐 **GitHub Pages** — deployed via `gh-pages`

---

## 📁 Project Structure

```bash
mevot/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images and static files
│   ├── components/          # Reusable components (Navbar, Footer, etc.)
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Homepage.tsx
│   │   ├── Navbar.tsx
│   │   ├── Slider.tsx
│   │   └── TermsConditions.tsx
│   ├── App.tsx              # App root
│   ├── main.tsx             # Vite entry point
│   ├── index.css            # Global styles
│   └── App.css              # Component-level styles
├── .github/workflows/       # GitHub Actions for deployment
├── dist/                    # Build output (auto-generated)
├── package.json             # Project metadata and scripts
├── vite.config.ts           # Vite configuration
└── tsconfig.*.json          # TypeScript configurations
```

---

## 🧩 Installation & Setup

### 🔧 Prerequisites

Make sure you have the following installed:

- **Node.js** ≥ 18.x
- **npm** or **yarn**

### 📦 Install Dependencies

```bash
git clone https://github.com/NetbondTechnologies/mevot.git
cd mevot
npm install
```

### 💻 Run Locally (Dev)

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🚢 Build & Deploy

### 🛠 Build

```bash
npm run build
```

### 🌍 Deploy to GitHub Pages

```bash
npm run deploy
```

Deployment is handled using the `gh-pages` package and GitHub Actions (`.github/workflows/deploy.yml`).

---

## 💡 Key Features

- Modern, responsive UI for product display
- Smooth GSAP-powered animations
- Image carousel using `react-slick`
- Contact section and static legal pages
- Optimized build with Vite for blazing performance

---

## 📜 License

This project is owned by **Netbond Technologies** and was developed by [Your Name] as part of an internship. Distribution rights may be restricted.

---

## 🙋‍♂️ Author

**Md Ariyan**  
💼 Frontend Developer Intern @ Netbond Technologies  
🌐 [LinkedIn](https://www.linkedin.com/) *(optional)*  
📬 ariyan@example.com *(replace with real one if needed)*
