# Spline 3D Component Integration Guide

## 🎯 Project Overview

This is a React + TypeScript + Vite project with **Spline 3D integration**, **shadcn/ui components**, and **Tailwind CSS**.

**Live Dev Server:** http://localhost:5173/

---

## 📁 Project Structure

```
spline-experiment/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── splite.tsx         # Main Spline component wrapper
│   │   │   ├── card.tsx           # shadcn Card component
│   │   │   └── spotlight.tsx      # Unified Spotlight exports
│   │   ├── aceternity/
│   │   │   └── spotlight.tsx      # Aceternity Spotlight (animated SVG)
│   │   ├── ibelick/
│   │   │   └── spotlight.tsx      # ibelick Spotlight (interactive)
│   │   └── demo.tsx               # Demo component using all above
│   ├── lib/
│   │   └── utils.ts               # cn() utility for class merging
│   ├── App.tsx                    # Main app component
│   ├── index.css                  # Tailwind + custom styles
│   └── main.tsx                   # App entry point
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.app.json              # TypeScript config with path aliases
└── vite.config.ts                 # Vite config with @ alias
```

---

## 🛠️ Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library structure
- **Spline** - 3D scene rendering
- **Framer Motion** - Animation library

---

## 📦 Installed Dependencies

### Core
- `@splinetool/runtime` - Spline runtime
- `@splinetool/react-spline` - React wrapper for Spline
- `framer-motion` - Animation library for interactive spotlight
- `clsx` - Conditional class utility
- `tailwind-merge` - Tailwind class merging

### Dev
- `tailwindcss` - CSS framework
- `postcss` - CSS processing
- `autoprefixer` - Vendor prefixing

---

## 🚀 Getting Started

### Installation
```bash
cd spline-experiment
npm install
```

### Development
```bash
npm run dev
# Opens at http://localhost:5173/
```

### Build
```bash
npm run build
npm run preview
```

---

## 🎨 Component Usage

### SplineScene Component

The main Spline wrapper with lazy loading and suspense:

```tsx
import { SplineScene } from "@/components/ui/splite";

<SplineScene
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  className="w-full h-full"
/>
```

**Features:**
- ✅ Lazy loading for performance
- ✅ Custom loading spinner
- ✅ TypeScript props validation
- ✅ Suspense boundary for graceful loading

---

### Spotlight Components

Two variants available:

#### 1. Aceternity Spotlight (Used in demo)
Animated SVG spotlight with gradient effect

```tsx
import { Spotlight } from "@/components/ui/spotlight";

<Spotlight
  className="-top-40 left-0 md:left-60 md:-top-20"
  fill="white"
/>
```

#### 2. Interactive Spotlight (ibelick)
Mouse-following spotlight effect

```tsx
import { SpotlightInteractive } from "@/components/ui/spotlight";

<SpotlightInteractive
  size={300}
  springOptions={{ bounce: 0.2 }}
/>
```

---

### Card Component

shadcn/ui Card component:

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card className="w-full h-[500px]">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

---

## 🎯 Demo Component Analysis

The `SplineSceneBasic` component demonstrates:

1. **Layout**: Two-column flex layout (text left, 3D right)
2. **Spotlight Effect**: Animated SVG gradient overlay
3. **Lazy Loading**: Spline scene loads on demand
4. **Responsive**: Adapts to mobile/tablet/desktop
5. **Dark Theme**: Black background with gradient text

### Key Features:
- **Left Column**: Gradient text heading + description
- **Right Column**: Interactive 3D Spline scene
- **Loading State**: Custom spinner during 3D load
- **Backdrop**: Spotlight SVG creates visual interest

---

## 🎨 Tailwind Configuration

Custom theme extensions in `tailwind.config.js`:

### Colors (CSS Variables)
- `background`, `foreground`
- `card`, `card-foreground`
- `primary`, `secondary`, `muted`, `accent`
- `border`, `input`, `ring`

### Animations
- `spotlight` - Custom keyframe animation for the spotlight effect

### Border Radius
- CSS variable-based radius system (`--radius`)

---

## 🔧 Path Aliases

The project uses `@/` path alias for cleaner imports:

```tsx
// Instead of: import { cn } from '../../lib/utils'
import { cn } from '@/lib/utils'
```

Configured in:
- `tsconfig.app.json` - TypeScript paths
- `vite.config.ts` - Vite resolver

---

## 📝 Important Notes

### Why `/components/ui` folder?

This folder structure follows **shadcn/ui conventions**:
- ✅ Standard location for reusable UI components
- ✅ Easy to add more shadcn components via CLI
- ✅ Clear separation from feature components
- ✅ Consistent with community best practices

### 'use client' Directives

Some components have `'use client'` at the top:
- This is for **Next.js compatibility** (optional in Vite)
- Can be removed if not planning to migrate to Next.js
- Kept for future-proofing

### Responsive Behavior

The demo component is responsive:
- **Desktop**: Side-by-side layout (text | 3D)
- **Mobile**: Could be stacked (requires CSS adjustment)
- Currently optimized for desktop viewing

---

## 🎓 Integration Checklist

When adding this to a new project:

1. ✅ Install dependencies (`npm install`)
2. ✅ Set up Tailwind CSS (`tailwind.config.js`)
3. ✅ Configure path aliases (`tsconfig.json`, `vite.config.ts`)
4. ✅ Copy `/components/ui` folder
5. ✅ Copy `/lib/utils.ts`
6. ✅ Update `src/index.css` with Tailwind directives
7. ✅ Import and use components in your app

---

## 🔍 Component Dependencies

### SplineScene requires:
- `@splinetool/react-spline`
- React Suspense support

### Spotlight (Aceternity) requires:
- `@/lib/utils` (cn function)
- Tailwind CSS

### Spotlight (ibelick) requires:
- `framer-motion`
- `@/lib/utils` (cn function)
- Tailwind CSS

### Card requires:
- `@/lib/utils` (cn function)
- Tailwind CSS

---

## 🎨 Customization Guide

### Change Spline Scene
Replace the scene URL in `demo.tsx`:
```tsx
scene="https://prod.spline.design/YOUR_SCENE_HERE/scene.splinecode"
```

### Change Spotlight Color
Modify the `fill` prop:
```tsx
<Spotlight fill="#00ff00" />
```

### Adjust Card Height
Change the height class:
```tsx
<Card className="h-[600px]"> {/* was h-[500px] */}
```

### Loading Spinner Style
Customize in `src/index.css`:
```css
.loader {
  /* Modify colors, size, animation */
}
```

---

## 🐛 Troubleshooting

### Issue: Spline scene not loading
- ✅ Check internet connection
- ✅ Verify scene URL is correct
- ✅ Check browser console for errors

### Issue: Tailwind classes not working
- ✅ Ensure `index.css` has `@tailwind` directives
- ✅ Check `tailwind.config.js` content paths
- ✅ Restart dev server

### Issue: Import errors with `@/` paths
- ✅ Check `tsconfig.app.json` paths config
- ✅ Check `vite.config.ts` alias config
- ✅ Restart TypeScript server in editor

### Issue: Types errors
- ✅ Run `npm install` again
- ✅ Check all dependencies are installed
- ✅ Restart TypeScript server

---

## 📚 Resources

- [Spline Documentation](https://docs.spline.design/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 🎉 Next Steps

1. **Explore the demo** at http://localhost:5173/
2. **Customize the Spline scene** with your own 3D design
3. **Add more components** from shadcn/ui
4. **Build additional pages** using the component structure
5. **Integrate with your existing website** (copy components over)

---

**Project Status:** ✅ Ready for development and customization!
