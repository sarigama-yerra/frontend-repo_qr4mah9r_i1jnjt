import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-white via-white to-blue-50" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 border border-black/10 text-xs text-neutral-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Grid-scale storage. Live today.
          </div>
          <h1 className="mt-5 text-5xl sm:text-6xl font-semibold tracking-tight text-neutral-900">
            Advanced Battery Energy Storage Systems
          </h1>
          <p className="mt-6 text-lg text-neutral-600 max-w-xl">
            We design, manufacture, and deploy utility-grade storage that makes renewable power reliable—safely, efficiently, and at scale.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md">Request a demo</a>
            <a href="#technology" className="inline-flex rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium border border-black/10 hover:border-black/20">Explore our tech</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  );
}
