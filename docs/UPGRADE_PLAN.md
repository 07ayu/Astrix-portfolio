# Astrix Award-Level Upgrade Plan & Architecture Report

## Status: COMPLETE (All 4 Phases Delivered & Verified)

### Architecture Baseline & Environment
- **Framework:** Next.js 16.2.9 App Router + Turbopack, React 19.2.4, TypeScript 5
- **Styling:** Tailwind CSS v4, Astrix brand tokens (`#070707`, `#0E0E12`, `#6D5DFC`, `#A89BFF`, `rgba(255,255,255,0.08)`)
- **Animation & Motion:** GSAP 3.15 + ScrollTrigger, Lenis 1.3 smooth scrolling, Motion 12.4
- **3D Stack:** React Three Fiber 9.8, Drei 10.7, Three 0.186, `@react-three/postprocessing` 3.2
- **Build Status:** Statically pre-rendered (all 7 routes), 0 TypeScript errors (`npx tsc --noEmit` code 0)

---

## Phase Implementations

### Phase 1: Quick-Win Micro-Animations
- **`components/ui/SplitReveal.tsx`**: Word/line-level masked text slide-up reveal driven by GSAP ScrollTrigger on viewport enter. Applied across all section headings via `SectionHeader.tsx`.
- **`components/ui/SpotlightCard.tsx`**: Pointer-following radial spotlight utilizing CSS custom properties (`--mx`, `--my`) with subtle conic-gradient border sheen (`from-[#6D5DFC] to-[#A89BFF]`) on hover.
- **`components/ui/MagneticButton.tsx`**: Physics-based magnetic attraction that gently pulls buttons toward the cursor with elastic spring reset.
- **`components/sections/Methodology.tsx`**: ScrollTrigger SVG `stroke-dashoffset` scrubbed conduit line that illuminates sprint steps progressively as the user scrolls.
- **`hooks/useCounter.ts` & `components/sections/Stats.tsx`**: Accurate numeric count-up animation supporting integers and decimals (e.g., `99.98%`), triggering once on viewport entry.
- **`components/services/TechStack.tsx` & `app/globals.css`**: Hardware-accelerated infinite horizontal marquee with pause-on-hover.

### Phase 2: Persistent Scroll-Driven 3D Scene
- **`components/3d/PersistentCanvas.tsx`**: Single full-screen fixed Canvas mounted behind page content (`z-index: 0`, `pointer-events: none`). Features Drei `<PerformanceMonitor>` (auto DPR adjustment between 1 and 1.5), `<AdaptiveDpr>`, tab-visibility rendering pause via `document.hidden`, and vector fallback on mobile (<768px) and `prefers-reduced-motion`.
- **`components/3d/ScrollCoreScene.tsx`**: 5-stage morphing core driven by ScrollTrigger scroll progress (`0.0` to `1.0`):
  1. **Hero (`p: 0.0 - 0.22`):** Central dark octahedron core with 3 spinning orbital rings and pointer parallax.
  2. **Services (`p: 0.22 - 0.48`):** Satellite nodes expand outward into 6 orbiting service beacons.
  3. **Projects (`p: 0.48 - 0.72`):** Camera drifts sideways as constellation graph lines illuminate connecting the nodes.
  4. **Methodology (`p: 0.72 - 0.88`):** Orbital rings align along a straight pipeline axis.
  5. **CTA / Footer (`p: 0.88 - 1.0`):** Nodes and rings collapse inward into a dense glowing quantum core.
- **`components/sections/Hero.tsx`**: Replaced standalone Hero Canvas with a glass aperture viewport looking through directly to the persistent background canvas, ensuring **strictly ONE WebGL context** on the landing page.

### Phase 3: Per-Service 3D Objects via Drei `<View>`
- **`components/3d/ServiceViews.tsx`**: Six lightweight procedural Three.js models:
  1. **Web:** Geodesic wireframe globe with concentric spinning rings and satellite.
  2. **App:** Tilting smartphone chassis with floating holographic UI cards.
  3. **Desktop:** Ultrawide curved display with floating cascading window panels.
  4. **Software:** Isometric microservice stack with layers that separate vertically on hover.
  5. **AR:** Spatial holographic bounding cube with sweeping vertical LiDAR laser plane.
  6. **AI:** 3-layer neural network graph with pulsing nodes and synapse connections.
- **Drei `<View>` Integration:** Mounted inside each service card in `components/sections/Services.tsx`. Shares the single WebGL context via `<View.Port />` in `PersistentCanvas.tsx`. On hover: objects rotate faster, explode parts outward, and brighten emissive intensity.

### Phase 4: Page-Level Polish
- **`components/ui/Preloader.tsx`**: ~1.4s futuristic particle assembly with numerical counter (`00%` to `100%`); remembers visits in `sessionStorage` (`astrix_preloader_seen`) and bypasses for reduced motion.
- **`components/ui/PageTransition.tsx`**: Route transition wrapper featuring an editorial violet wipe overlay (`scaleY: 1` -> `0`) and content fade.
- **`components/sections/Projects.tsx`**: Pinned horizontal-scroll container on desktop (`lg: 1024px+`) driven by GSAP ScrollTrigger scrub; gracefully degrades to responsive bento grid on mobile / touch.
- **`components/ui/ProjectCard.tsx`**: 3D perspective tilt physics (`rotateX`, `rotateY`) reacting to cursor movement with cubic-bezier spring return and image shimmer.
- **`components/3d/InteractiveChip.tsx` & `components/about/Mission.tsx`**: Interactive 3D silicon processor package with real-time cursor tilt replacing static SVG illustration on `/about`.
- **`components/about/Team.tsx`**: 3D perspective card flip on hover (`preserve-3d`, `rotateY: 180deg`) revealing team credentials, architecture specializations, and badges.
- **`components/3d/ReactiveContactScene.tsx` & `components/contact/ContactSection.tsx`**: Reactive 3D quantum beacon core that pulses on input focus, vibrates on typing, and unleashes a radial particle burst on successful inquiry submission.

---

## Verification & Guardrail Compliance
1. **Single WebGL Context:**
   - Landing page (`/`): Exactly 1 `<Canvas>` (`PersistentCanvas`) with `<View.Port />` handling both the scroll core and the 6 service card `<View>`s.
   - Dedicated pages (`/about`, `/contact`): Exactly 1 `<Canvas>` per route.
2. **Reduced Motion & Mobile Support:**
   - All 3D scenes inspect `(prefers-reduced-motion: reduce)` and viewport width (<768px). When triggered, high-power 3D is disabled and crisp SVG/CSS vector fallbacks are presented.
3. **Brand Token Integrity:**
   - Strictly preserved `#070707`, `#0E0E12`, `#6D5DFC`, `#A89BFF`, and `rgba(255,255,255,0.08)`.
4. **Authentic Data:**
   - Preserved `CONTACT_INFO`, authentic service offerings, and project details in `data/index.ts`.
5. **Build & Prerender Verification:**
   - `npx tsc --noEmit` passes with 0 errors.
   - `npm run build` compiles with 0 errors and prerenders all 7 routes (`/`, `/_not-found`, `/about`, `/contact`, `/portfolio`, `/services`).
