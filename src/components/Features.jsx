import { Battery, ShieldCheck, Gauge, Activity, PanelsTopLeft, Leaf, Wrench } from "lucide-react";

const features = [
  {
    icon: PanelsTopLeft,
    title: "Turn‑key systems",
    desc: "Factory‑integrated containers, transformers, and EMS—ready to plug in.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: Battery,
    title: "High energy density",
    desc: "More MWh per square foot with modular, rack‑optimized packs.",
    accent: "from-sky-500 to-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Safety first",
    desc: "Cell‑level monitoring, active thermal control, and multi‑layer protection.",
    accent: "from-emerald-500 to-green-600",
  },
  {
    icon: Gauge,
    title: "Fast response",
    desc: "Millisecond dispatch for frequency regulation and peak shaving.",
    accent: "from-fuchsia-500 to-pink-600",
  },
  {
    icon: Activity,
    title: "AI‑driven optimization",
    desc: "Predictive algorithms maximize lifetime and revenue across markets.",
    accent: "from-violet-500 to-purple-600",
  },
  {
    icon: Wrench,
    title: "O&M included",
    desc: "24/7 monitoring, preventative service, and warranty management.",
    accent: "from-teal-500 to-cyan-600",
  },
  {
    icon: Leaf,
    title: "Sustainable supply",
    desc: "Recyclable materials and second‑life programs reduce lifecycle impact.",
    accent: "from-lime-500 to-green-600",
  },
];

export default function Features() {
  return (
    <section id="benefits" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Industrial performance. Bright economics.</h2>
          <p className="mt-4 text-neutral-600">From renewable integration to capacity markets, our systems deliver dependable performance with intuitive control.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, accent }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${accent} text-white flex items-center justify-center shadow-sm`}>
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
