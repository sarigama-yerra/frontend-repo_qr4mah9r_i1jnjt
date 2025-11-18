export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Ready to modernize your grid assets?</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl">Partner with us to design storage that unlocks more renewables, stabilizes your network, and improves project returns.</p>
        </div>
        <div className="lg:col-span-5">
          <form className="rounded-2xl border border-black/10 bg-white p-4 sm:p-6 shadow-sm grid sm:grid-cols-2 gap-3">
            <input className="col-span-2 sm:col-span-1 h-11 rounded-xl border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Name" />
            <input className="col-span-2 sm:col-span-1 h-11 rounded-xl border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Company" />
            <input className="col-span-2 h-11 rounded-xl border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="Work email" />
            <textarea className="col-span-2 h-24 rounded-xl border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30" placeholder="How can we help?" />
            <button type="button" className="col-span-2 inline-flex items-center justify-center rounded-full bg-black text-white px-5 h-11 text-sm font-medium shadow-sm hover:shadow-md">Request a demo</button>
            <p className="col-span-2 text-xs text-neutral-500">By submitting, you agree to our Terms and acknowledge our Privacy Policy.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
