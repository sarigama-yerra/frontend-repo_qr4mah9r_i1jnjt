import { Recycle, Leaf, Globe2, Droplets } from "lucide-react";

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 border border-black/10 text-xs text-neutral-600 shadow-sm">
            Sustainability & Circularity
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Lower carbon. Longer life. Smarter end-of-life.</h2>
          <p className="mt-4 text-neutral-600">We design for minimal footprint across the full lifecycle, from material sourcing to reuse and recycling, without compromising performance.</p>
          <ul className="mt-6 grid gap-3 text-sm text-neutral-700">
            <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-md bg-emerald-600/10 text-emerald-600 flex items-center justify-center">♻️</span> Recycled aluminum enclosures and low-cobalt chemistries.</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-md bg-emerald-600/10 text-emerald-600 flex items-center justify-center">🌍</span> Verified supply chain with third‑party ESG audits.</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-md bg-emerald-600/10 text-emerald-600 flex items-center justify-center">💧</span> Closed‑loop coolant handling and reduced water usage on site.</li>
          </ul>
        </div>

        <div className="lg:col-span-6 grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center"><Recycle size={20} /></div>
            <h3 className="mt-4 font-medium">Second-life</h3>
            <p className="mt-1 text-sm text-neutral-600">Redeploy modules into less demanding applications before recycling.</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center"><Leaf size={20} /></div>
            <h3 className="mt-4 font-medium">Low impact</h3>
            <p className="mt-1 text-sm text-neutral-600">Lifecycle assessments guide continuous reduction of CO₂e per kWh.</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center"><Droplets size={20} /></div>
            <h3 className="mt-4 font-medium">Responsible fluids</h3>
            <p className="mt-1 text-sm text-neutral-600">Leak‑resistant designs and certified recycling partners.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
