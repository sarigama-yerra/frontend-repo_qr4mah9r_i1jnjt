import { Server, Cpu, ThermometerSun, PlugZap } from "lucide-react";

export default function Tech() {
  return (
    <section id="technology" className="relative py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 border border-black/10 text-xs text-neutral-600 shadow-sm">
            Platform Architecture
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
            Containerized, software-defined energy storage
          </h2>
          <p className="mt-4 text-neutral-600">
            Flexible configurations to fit your use case: 5–100 MWh systems with 2–10 hour durations across markets.
          </p>

          <ul className="mt-6 grid gap-3 text-sm text-neutral-700">
            <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-md bg-blue-600/10 text-blue-600 flex items-center justify-center">⚡</span> Modular blocks that scale linearly in power and energy.</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-md bg-blue-600/10 text-blue-600 flex items-center justify-center">🧠</span> ML-based degradation modeling extends asset life and uptime.</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-md bg-blue-600/10 text-blue-600 flex items-center justify-center">🔒</span> End-to-end cybersecurity, from embedded firmware to cloud APIs.</li>
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex rounded-full bg-black text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md">Talk to sales</a>
            <a href="#sustainability" className="inline-flex rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium border border-black/10 hover:border-black/20">Read about sustainability</a>
          </div>
        </div>

        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center">
              <Cpu size={20} />
            </div>
            <h3 className="mt-4 font-medium">Battery modules</h3>
            <p className="mt-1 text-sm text-neutral-600">High-rate cells with redundant BMS and per-cell telemetry.</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center">
              <ThermometerSun size={20} />
            </div>
            <h3 className="mt-4 font-medium">Thermal system</h3>
            <p className="mt-1 text-sm text-neutral-600">Liquid cooling loop keeps temperature uniform under all loads.</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center">
              <PlugZap size={20} />
            </div>
            <h3 className="mt-4 font-medium">Power conversion</h3>
            <p className="mt-1 text-sm text-neutral-600">Bi-directional PCS with islanding and black-start capability.</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="h-10 w-10 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center">
              <Server size={20} />
            </div>
            <h3 className="mt-4 font-medium">Energy management</h3>
            <p className="mt-1 text-sm text-neutral-600">Real-time control with market integrations and remote updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
