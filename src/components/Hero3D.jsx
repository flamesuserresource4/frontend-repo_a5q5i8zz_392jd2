import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-b from-white via-neutral-100 to-neutral-200" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live AMR Fleet
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
          Orchestrate your autonomous mobile robots
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Monitor jobs, assign routes, and visualize navigation in real-time with an interactive 3D robot experience.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#overview" className="rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-black transition-colors">View Dashboard</a>
          <a href="#routes" className="rounded-md bg-white/70 backdrop-blur px-4 py-2 text-neutral-900 hover:bg-white transition-colors">Assign Route</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-200 to-transparent" />
    </section>
  );
}
