# ASTRIX Portfolio & Technical Agency Website Specification

> **Comprehensive System & Architecture Documentation**  
> **Repository:** `07ayu/Astrix-portfolio`  
> **Current Version:** `0.4.0 (Award-Level 3D & Creative Animation Upgrade)`  
> **Framework:** Next.js 16.2.9 (App Router, Turbopack) + React 19.2.4  
> **3D Graphics:** React Three Fiber 9.8.2 + Drei 10.7.9 + Three.js 0.186 + Postprocessing 3.2  
> **Aesthetic Archetype:** Dark Cyber-Editorial / Ultra-Modern Glassmorphism & Persistent WebGL Core  
> **Updated:** October 2026

---

## Table of Contents
1. [Core Brand Identity & Coordinates](#1-core-brand-identity--coordinates)
2. [Authentic Core Service Offerings](#2-authentic-core-service-offerings)
3. [Technology Stack & Core Dependencies](#3-technology-stack--core-dependencies)
4. [Design System & Theming Tokens](#4-design-system--theming-tokens)
5. [3D Architecture & Persistent Scene Engine](#5-3d-architecture--persistent-scene-engine)
6. [Global Providers & Animation Engine](#6-global-providers--animation-engine)
7. [Complete Route Breakdown](#7-complete-route-breakdown)
8. [Comprehensive Component Inventory](#8-comprehensive-component-inventory)
9. [Data Layer & Content Models](#9-data-layer--content-models)
10. [Accessibility & Verification Status](#10-accessibility--verification-status)

---

## 1. Core Brand Identity & Coordinates

**Astrix** is an engineering and technology studio delivering end-to-end modern digital products across web, mobile, desktop, AR, and artificial intelligence.

- **Agency Motto:** `Ideas | Code | Impact`
- **Agency Tagline:** `"Turning Ideas into Reality"`
- **Direct Phone / WhatsApp:** `7980779265` (*"Let's Build Together"*)
- **Official Inquiries Email:** `astrixlabs03.tech@gmail.com` (*"Get in Touch"*)
- **Visual Personality:** Deep obsidian background (`#070707`), signature electric violet (`#6D5DFC`), lavender highlights (`#A89BFF`), crisp Syne editorial typography, restrained ambient lighting, and an interactive 3D WebGL engineering core.

---

## 2. Authentic Core Service Offerings

The studio provides 6 core capabilities, designed with custom glowing iconography and dedicated feature tracks:

| # | Service Name | Tagline & Positioning | Technical Deliverables |
|---|---|---|---|
| **01** | **Web Development** | *Modern, Scalable & Responsive Web Solutions* | High-speed responsive web applications, Next.js architecture, scalable APIs, and performance optimization. |
| **02** | **App Development** | *Android & iOS Apps for Your Ideas* | Cross-platform and native mobile apps (React Native / Flutter) with offline synchronization and native device features. |
| **03** | **Desktop Application** | *Custom Software to Simplify Your Work* | Cross-platform desktop tools (Electron / Tauri), system utilities, and automated enterprise workflow software. |
| **04** | **Software Solutions** | *End-to-End Technology Solutions* | Full-lifecycle architectures, custom SaaS platforms, microservices, cloud APIs, and relational/NoSQL database modeling. |
| **05** | **Augmented Reality** | *Interactive AR Experiences for Real Impact* | Immersive WebGL, 3D product viewports, mobile AR experiences, and spatial computing interfaces. |
| **06** | **AI Integration** | *Smart Solutions with Artificial Intelligence* | Production LLM pipelines, RAG semantic search, vector database indexing, and automated intelligent workflows. |

---

## 3. Technology Stack & Core Dependencies

### 3.1 Core Framework & Runtime
- **Framework:** **Next.js 16.2.9** with React Server / Client Components (App Router, Turbopack)
- **UI Library:** **React 19.2.4** & **React DOM 19.2.4**
- **Language:** **TypeScript 5.x** (Strict mode with `@/*` path mapping)

### 3.2 3D Graphics Engine
- **Three.js Core:** `three: ^0.170.0`
- **React Canvas:** `@react-three/fiber: ^9.8.2`
- **R3F Utilities:** `@react-three/drei: ^10.7.9`
- **Types:** `@types/three: ^0.170.0`

### 3.3 Styling & Typography
- **CSS Engine:** **Tailwind CSS v4** (`@tailwindcss/postcss: ^4`, `tailwindcss: ^4`)
- **Typography:**
  - **Headings:** Google Font **Syne** (`--font-syne`), bold & extra bold weights
  - **Body / Interface:** Google Font **Inter** (`--font-inter`)
  - **Telemetry / Badges:** Monospace styling for live metrics

### 3.4 Animation & Motion Architecture
- **Kinetic Smooth Scrolling:** **Lenis** (`lenis: ^1.3.23`)
- **Scroll Choreography:** **GSAP 3.15.0** (`gsap`, `gsap/ScrollTrigger`)
- **UI Transitions & Micro-interactions:** `motion: ^12.40.0`
- **Iconography:** `react-icons: ^5.6.0`, `lucide-react: ^1.21.0`

---

## 4. Design System & Theming Tokens

| Token | Value | Semantic Purpose |
|---|---|---|
| `--bg` | `#070707` | Deep dark global canvas background |
| `--card` | `#0E0E12` / `#0E0E14` | Obsidian elevated card surface |
| `--card-hover` | `#12111A` / `#141220` | Hovered state card background |
| `--border` | `rgba(255, 255, 255, 0.08)` | Subtle border separators |
| `--text` | `#ffffff` | Primary text |
| `--muted` | `neutral-400` / `neutral-500` | Secondary description text |
| `--primary` | `#6D5DFC` | Signature electric purple/violet accent |
| `--primary-light` | `#A89BFF` | Light lavender highlight & live telemetry accent |

---

## 5. 3D Architecture & Performance Fallbacks

- **Interactive Quantum Core (`components/3d/HeroScene.tsx`)**:
  - Central dark metallic octahedron with obsidian PBR material (`metalness: 0.92, roughness: 0.18`).
  - Luminous violet wireframe lattice core (`emissive: #6D5DFC`).
  - Three concentric precision orbital rings rotating at varied mathematical frequencies.
  - Floating node beacons with real-time pointer parallax lerping.
- **Dynamic Loading & Zero-LCP Fallback (`components/3d/HeroCanvas.tsx`)**:
  - Dynamically imported with Next.js `ssr: false`.
  - Instant vector wireframe fallback rendered during asset load or when JavaScript/WebGL is unavailable.
  - Respects `prefers-reduced-motion` and auto-disables 3D on low-powered devices.
  - Clamped pixel ratio (`dpr={[1, 1.5]}`) preventing GPU throttling on 4K/retina displays.

---

## 6. Global Providers & Animation Engine

- **Lenis Smooth Scroll:** Configured with 1.2s smooth wheel momentum.
- **GSAP ScrollTrigger Sync:** Driven directly by Lenis tick event to eliminate micro-jitter and pinning desync.
- **CSS Reduced Motion:** Overrides animations, transitions, and scroll behavior when the user has enabled reduced motion preferences in their OS.

---

## 7. Complete Route Breakdown

### 7.1 Home Page (`/`)
1. **Navbar:** Floating pill with dynamic scroll blur and active route tracking.
2. **Hero:** Editorial Syne typography (`Engineering Excellence at Scale.`), 3D Quantum Core, runtime telemetry chips (`99.98% SLA / Sub-15ms Latency`), and synchronized stats.
3. **Stats Bar:** 4 synchronized metrics (`150+ Systems Deployed`, `45+ Global Clients`, `99.98% Uptime SLA`, `98% Client Retention`).
4. **Services (All 6 Offerings):** 6-item responsive grid featuring Web Development, App Development, Desktop Application, Software Solutions, Augmented Reality, and AI Integration with custom glowing neon icons. Includes the direct Astrix contact bar at the bottom (`7980779265` • `astrixlabs03.tech@gmail.com` • `Ideas | Code | Impact`).
5. **Projects Bento Grid:** High-scale case studies (`Nova Financial OS`, `Vanguard Commerce`, `NeuralSync Intelligence`, `Aether Spatial Engine`) with live metrics and tech pills.
6. **Methodology:** 4-stage sprint delivery lifecycle timeline connected by conduit lines, plus 3 core engineering pillars.
7. **Testimonials:** Verified quotes from CTOs and technical founders.
8. **FAQ:** Interactive accordion with animated expand/collapse.
9. **CTA:** Deep obsidian-violet card with direct email (`astrixlabs03.tech@gmail.com`) and phone (`7980779265`).
10. **Footer:** Studio overview, real-time newsletter dispatch form, and verified coordinates (`Ideas | Code | Impact — Turning Ideas into Reality`).

### 7.2 About Page (`/about`)
- Hero with studio identity statement.
- Mission quote with silicon chip illustration.
- Core Engineering Principles (Architectural Precision, Pragmatic Innovation, Transparent Velocity, Production Integrity).
- Systems Architects leadership team showcase.

### 7.3 Services Page (`/services`)
- Editorial services hero.
- Full capability matrix with all 6 service tracks.
- Proven engineering stack with interactive logos (Next.js, React, TypeScript, Nest.js, PostgreSQL, Docker, Cloudflare).
- Shared methodology, FAQ, and CTA sections.

### 7.4 Portfolio Page (`/portfolio`)
- Dedicated case study catalog featuring the upgraded bento cards with live throughput and latency chips.

### 7.5 Contact Page (`/contact`)
- Interactive project kickoff form with multi-select project classification pills (`Web Development`, `App Development`, `Desktop Application`, `Software Solutions`, `Augmented Reality`, `AI Integration`).
- Form submission state management with confirmation feedback.
- Direct studio coordinates:
  - Call / WhatsApp: `7980779265` (*"Let's Build Together"*)
  - Email: `astrixlabs03.tech@gmail.com` (*"Get in Touch"*)
  - Motto: `Ideas | Code | Impact` (*"Turning Ideas into Reality"*)

---

## 8. Data Layer & Content Models

All content is strictly typed in [data/index.ts](file:///c:/Users/ayush/Desktop/astrix/Astrix-portfolio/data/index.ts) with `CONTACT_INFO` as the single source of truth for phone, email, and motto.

```typescript
export const CONTACT_INFO = {
  phone: "7980779265",
  phoneFormatted: "+91 7980779265",
  phoneActionText: "Let's Build Together",
  email: "astrixlabs03.tech@gmail.com",
  emailActionText: "Get in Touch",
  motto: "Ideas | Code | Impact",
  tagline: "Turning Ideas into Reality",
};
```

---

## 9. Accessibility & Verification Status

| Step | Status | Verification Detail |
|---|---|---|
| **TypeScript Typecheck** | **Passed (Code 0)** | Verified via `npx tsc --noEmit` with zero errors |
| **Next.js Production Build** | **Passed (Code 0)** | All 7 routes (`/`, `/about`, `/services`, `/portfolio`, `/contact`, `/_not-found`) statically pre-rendered |
| **Reduced Motion Support** | **Verified** | `@media (prefers-reduced-motion: reduce)` in `app/globals.css` |
