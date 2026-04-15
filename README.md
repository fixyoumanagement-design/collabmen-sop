# collabmen-sop

Minimal, production-ready SOP portal rebuilt with **Vite + React + Tailwind CSS + React Router**.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. (Optional) Preview production build:
   ```bash
   npm run preview
   ```

## Routes

- `/` → Landing Page
- `/sops` → SOP List Page
- `/sop/onboarding` → SOP Detail Page
- `/sop/payment` → SOP Detail Page
- `/sop/campaign-flow` → SOP Detail Page

## Folder Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── Header.jsx
    │   └── Sidebar.jsx
    ├── data/
    │   └── sops.js
    ├── layout/
    │   └── AppLayout.jsx
    └── pages/
        ├── LandingPage.jsx
        ├── SopListPage.jsx
        └── SopDetailPage.jsx
```

## Key Files

- `src/App.jsx`: Router configuration and app-level route mapping
- `src/layout/AppLayout.jsx`: Shared layout with Header + Sidebar + Outlet
- `src/data/sops.js`: SOP source data and slug lookup map
- `src/pages/SopDetailPage.jsx`: Dynamic SOP detail rendering via `/sop/:slug`
- `src/index.css`: Tailwind CSS import and base styles
- `vite.config.js`: Vite config with React and Tailwind Vite plugins
