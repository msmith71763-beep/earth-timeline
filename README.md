# Earth Timeline

🌍 **300 Million Years of Geological History** — Interactive 3D globe visualization

## Live Demo

[https://ancient-globe-2.emergent.host/](https://ancient-globe-2.emergent.host/)

## Overview

An interactive 3D Earth timeline that lets you explore geological eras spanning 300 million years of history. Built with React, Three.js, and modern web technologies.

### Features

- 🌐 Interactive 3D globe with orbital controls
- ⏳ Timeline slider covering geological periods (Pennsylvanian → Present)
- 🎨 Beautiful space-themed UI with star field background
- 📊 Geological data visualization for each era
- 📱 Responsive design (desktop + mobile)

### Geological Periods Covered

- **Pennsylvanian** (~323–299 MYA)
- **Permian** (~299–252 MYA)
- **Triassic** (~252–201 MYA)
- **Jurassic** (~201–145 MYA)
- **Cretaceous** (~145–66 MYA)
- **Paleogene** (~66–23 MYA)
- **Neogene** (~23–2.6 MYA)
- **Quaternary** (~2.6 MYA – Present)

## Tech Stack

- **React** with TypeScript
- **Three.js** / React Three Fiber for 3D rendering
- **Vite** build system
- **Tailwind CSS** for styling
- **Google Fonts**: Space Grotesk, Inter, JetBrains Mono

## Project Structure

```
earth-timeline/
├── src/              # React source code
│   ├── components/   # React components (Globe, Timeline, UI)
│   ├── data/         # Geological era data
│   └── assets/       # Static assets
├── public/           # Public assets
│   ├── chunks/       # Binary globe data (chunk_001.bin - chunk_112.bin)
│   └── tiny/         # Compressed tile data (tiny_aa - tiny_ei, 113 files)
├── index.html        # Entry point
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Binary Data Files

The globe visualization uses pre-computed geological surface data:

- **Chunk files**: `chunk_001.bin` through `chunk_112.bin` (112 files) — 3D surface mesh data for each geological period
- **Tiny files**: `tiny_aa` through `tiny_ei` (113 files) — Compressed texture/color tiles for era visualization

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/` directory.

## Deployment

Currently deployed on [Emergent](https://emergent.sh).

## License

MIT
