import { SplineSceneBasic } from './components/demo'

function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Spline 3D Integration Demo</h1>
          <p className="text-muted-foreground">
            Interactive 3D scenes powered by Spline in React + TypeScript
          </p>
        </div>

        <SplineSceneBasic />

        <div className="mt-8 p-6 border rounded-lg bg-card">
          <h2 className="text-2xl font-semibold mb-4">Component Features</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Lazy loading with Suspense for optimal performance</li>
            <li>✅ Custom loading spinner animation</li>
            <li>✅ Aceternity Spotlight effect for visual appeal</li>
            <li>✅ Fully responsive design with Tailwind CSS</li>
            <li>✅ TypeScript for type safety</li>
            <li>✅ shadcn/ui components integration</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
