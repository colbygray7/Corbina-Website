# 🚀 Quick Start Guide

## What You Got

A fully functional **React + TypeScript** project with:
- ✅ **Spline 3D integration** - Interactive 3D scenes
- ✅ **shadcn/ui structure** - Modern component architecture
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Lazy loading** - Optimized performance
- ✅ **Two Spotlight variants** - Aceternity (animated) & ibelick (interactive)

---

## 🎯 Project Location

```
/Users/colby/Documents/Corbina Website/spline-experiment/
```

---

## 🏃 Running the Project

The dev server is **already running** at:

**http://localhost:5173/**

If you need to restart:
```bash
cd "/Users/colby/Documents/Corbina Website/spline-experiment"
npm run dev
```

---

## 📂 File Structure (What You Need to Know)

```
src/
├── components/
│   ├── ui/
│   │   ├── splite.tsx       ← Main Spline component
│   │   ├── card.tsx         ← Card wrapper
│   │   └── spotlight.tsx    ← Spotlight effects
│   └── demo.tsx             ← Example usage (check this!)
├── lib/
│   └── utils.ts             ← Helper functions
└── App.tsx                  ← Main app (modify this)
```

---

## 🎨 Using the Components

### 1. Spline 3D Scene

```tsx
import { SplineScene } from "@/components/ui/splite";

<SplineScene
  scene="https://prod.spline.design/YOUR_SCENE/scene.splinecode"
  className="w-full h-full"
/>
```

### 2. Full Demo Component

```tsx
import { SplineSceneBasic } from './components/demo'

<SplineSceneBasic />
```

---

## 🔧 How to Customize

### Change the 3D Scene
Edit `src/components/demo.tsx` line 26:
```tsx
scene="YOUR_SPLINE_URL_HERE"
```

### Change Colors/Styles
- Edit Tailwind classes directly in components
- Modify `tailwind.config.js` for theme colors
- Update `src/index.css` for custom CSS

### Add More Components
```bash
# Components go in:
src/components/ui/      ← Reusable UI components
src/components/         ← Feature components
```

---

## 📝 Key Features

1. **Lazy Loading** - Spline scenes load only when needed
2. **Loading Spinner** - Custom animated loader
3. **Type Safety** - Full TypeScript support
4. **Path Aliases** - Use `@/` instead of `../../`
5. **Responsive** - Mobile-ready (with tweaks)

---

## 🎓 Component Props

### SplineScene
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `scene` | string | ✅ | Spline scene URL |
| `className` | string | ❌ | Tailwind classes |

### Spotlight (Aceternity)
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `className` | string | ❌ | Position/size classes |
| `fill` | string | ❌ | Spotlight color (default: white) |

### Card
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `className` | string | ❌ | Tailwind classes |
| `children` | ReactNode | ✅ | Card content |

---

## 🐛 Common Issues

**Issue: Port 5173 already in use**
```bash
# Kill the process or change port in vite.config.ts
```

**Issue: Spline not loading**
- Check your internet connection
- Verify the Spline scene URL is public
- Check browser console for errors

**Issue: Import errors**
- Restart your editor's TypeScript server
- Run `npm install` again

---

## 📚 Full Documentation

See **INTEGRATION_GUIDE.md** for:
- Complete project structure
- All component APIs
- Troubleshooting guide
- Customization examples
- Resources & links

---

## 🎉 Next Steps

1. ✅ **View the demo** - Already running at http://localhost:5173/
2. 🎨 **Customize styles** - Play with Tailwind classes
3. 🎭 **Replace 3D scene** - Add your own Spline design
4. 🚀 **Add to main site** - Copy components to your project
5. 📖 **Read INTEGRATION_GUIDE.md** - Deep dive into everything

---

**Happy coding!** 🎊
