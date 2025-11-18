import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[radial-gradient(60%_60%_at_70%_10%,rgba(59,130,246,0.25),rgba(255,255,255,0)_60%),linear-gradient(180deg,#ffffff,rgba(245,248,255,1))]" id="hero">
      <div className="absolute inset-0 mix-blend-multiply opacity-80">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-3 py-1 text-xs shadow-sm">
            Industrial-Grade BESS
          </div>
          <h1 className="mt-5 text-5xl sm:text-6xl font-semibold tracking-tight text-neutral-900">
            Turn‑key Battery Energy Storage for the Real Grid
          </h1>
          <p className="mt-6 text-lg text-neutral-700 max-w-2xl">
            We deliver full‑stack storage assets—engineering, procurement, construction, and operations—so you can go from idea to revenue faster.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#services" className="inline-flex rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md">See how we deliver</a>
            <a href="#contact" className="inline-flex rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium border border-black/10 hover:border-black/20">Request a proposal</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  );
}
