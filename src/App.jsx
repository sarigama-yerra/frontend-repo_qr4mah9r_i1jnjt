import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tech from './components/Tech';
import Services from './components/Services';
import Sustainability from './components/Sustainability';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Tech />
        <Sustainability />
        <CTA />
      </main>
      <footer className="border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} FluxGrid Energy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-700">Privacy</a>
            <a href="#" className="hover:text-neutral-700">Terms</a>
            <a href="#" className="hover:text-neutral-700">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
