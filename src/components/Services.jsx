import { Factory, Wrench, Truck, Settings, Hammer, LineChart, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Factory,
    title: "Concept & Feasibility",
    desc: "Site selection, interconnection path, use-case modeling, and bankability studies.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: Settings,
    title: "Engineering",
    desc: "Full EPC design: electrical, civil, structural, and protection & controls.",
    accent: "from-sky-500 to-blue-600",
  },
  {
    icon: Truck,
    title: "Procurement",
    desc: "Tier-1 cells, containers, transformers, PCS, cabling, and logistics at scale.",
    accent: "from-fuchsia-500 to-pink-600",
  },
  {
    icon: Hammer,
    title: "Construction",
    desc: "Foundations, trenching, cable pulls, install, and grid tie-in with QA/QC.",
    accent: "from-lime-500 to-green-600",
  },
  {
    icon: ShieldCheck,
    title: "Commissioning",
    desc: "Functional testing, protection settings, market registration, and handover.",
    accent: "from-violet-500 to-purple-600",
  },
  {
    icon: Wrench,
    title: "Operations & Maintenance",
    desc: "24/7 monitoring, warranty management, spares, and preventative service.",
    accent: "from-rose-500 to-red-600",
  },
  {
    icon: LineChart,
    title: "Revenue Optimization",
    desc: "Dispatch strategies and market integrations to maximize $/kW and uptime.",
    accent: "from-teal-500 to-emerald-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[linear-gradient(180deg,#ffffff,rgba(250,250,250,1))]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-3 py-1 text-xs shadow-sm">
            Turn-key Delivery
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">From idea to a revenue-generating BESS</h2>
          <p className="mt-4 text-neutral-600">We own the lifecycle: engineering, procurement, construction, commissioning, operations, and market optimization. One partner, end-to-end accountability.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc, accent }) => (
            <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${accent} text-white flex items-center justify-center shadow-md`}>
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
