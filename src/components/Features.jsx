import { Battery, ShieldCheck, Gauge, Activity, PanelsTopLeft, Leaf } from "lucide-react";

const features = [
  {
    icon: Battery,
    title: "High energy density",
    desc: "More MWh per square foot with modular, rack-optimized packs.",
  },
  {
    icon: ShieldCheck,
    title: "Safety first",
    desc: "Cell-level monitoring, active thermal control, and multi-layer protection.",
  },
  {
    icon: Gauge,
    title: "Fast response",
    desc: "Millisecond dispatch for frequency regulation and peak shaving.",
  },
  {
    icon: Activity,
    title: "AI-driven optimization",
    desc: "Predictive algorithms maximize lifetime and revenue across markets.",
  },
  {
    icon: PanelsTopLeft,
    title: "Turnkey systems",
    desc: "Factory-integrated containers, transformers, and EMS—ready to plug in.",
  },
  {
    icon: Leaf,
    title: "Sustainable supply",
    desc: "Recyclable materials and second-life programs reduce lifecycle impact.",
  },
];

export default function Features() {
  return (
    <section id="benefits" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Designed for the grid. Built for the future.</h2>
          <p className="mt-4 text-neutral-600">From renewable integration to capacity markets, our systems deliver dependable performance with intuitive control.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-sm">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
