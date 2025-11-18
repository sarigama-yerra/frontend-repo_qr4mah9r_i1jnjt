import { Factory, Wrench, Truck, Settings, Hammer, LineChart, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Factory,
    title: "Concept & Feasibility",
    desc: "Site selection, interconnection path, use-case modeling, and bankability studies.",
    accent: "from-amber-500 to-amber-600",
  },
  {
    icon: Settings,
    title: "Engineering (E)",
    desc: "Full EPC design: electrical, civil, structural, and protection & controls.",
    accent: "from-blue-600 to-blue-700",
  },
  {
    icon: Truck,
    title: "Procurement (P)",
    desc: "Tier-1 cells, containers, transformers, PCS, cabling, and logistics at scale.",
    accent: "from-amber-500 to-amber-600",
  },
  {
    icon: Hammer,
    title: "Construction (C)",
    desc: "Foundations, trenching, cable pulls, install, and grid tie-in with QA/QC.",
    accent: "from-blue-600 to-blue-700",
  },
  {
    icon: ShieldCheck,
    title: "Commissioning",
    desc: "Functional testing, protection settings, market registration, and handover.",
    accent: "from-amber-500 to-amber-600",
  },
  {
    icon: Wrench,
    title: "Operations & Maintenance",
    desc: "24/7 monitoring, warranty management, spares, and preventative service.",
    accent: "from-blue-600 to-blue-700",
  },
  {
    icon: LineChart,
    title: "Revenue Optimization",
    desc: "Dispatch strategies and market integrations to maximize $/kW and uptime.",
    accent: "from-amber-500 to-amber-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-3 py-1 text-xs shadow-sm">
            Turn-key Delivery
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">From idea to a revenue-generating BESS</h2>
          <p className="mt-4 text-neutral-600">We own the lifecycle: engineering, procurement, construction, commissioning, operations, and market optimization. Flexible sizing from 5–100 MWh with 2–10 hour configurations.</p>
        </div>

        {/* Visual timeline with fewer, larger milestones */}
        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-6 h-[2px] bg-gradient-to-r from-blue-600/40 via-amber-500/40 to-blue-600/40" />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-6 relative">
            {steps.map(({ icon: Icon, title, desc, accent }, idx) => (
              <div key={title} className="relative">
                <div className={`relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow`}>
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${accent} text-white flex items-center justify-center shadow-md`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-neutral-900">{title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{desc}</p>
                </div>
                <div className="hidden sm:block absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-[2px] bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
                <div className="hidden sm:block absolute top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white border border-neutral-300 shadow" />
                <p className="mt-3 text-xs text-neutral-500 text-center">Step {idx + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
