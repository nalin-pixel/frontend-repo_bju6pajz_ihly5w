import HeaderNav from './components/HeaderNav';
import HeroShowcase from './components/HeroShowcase';
import ItineraryGrid from './components/ItineraryGrid';
import LuxuryPerks from './components/LuxuryPerks';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#002147] font-inter text-white">
      {/* Soft background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[#17A2B8]/25 to-[#0D929A]/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-[-6rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-[#FF6F61]/15 to-rose-400/10 blur-3xl" />
      </div>

      <HeaderNav />
      <main>
        <HeroShowcase />
        <ItineraryGrid />
        <LuxuryPerks />

        {/* Elevated callout */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#001730]/70 border border-white/10 p-8 md:p-10 shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D929A]/10 via-transparent to-[#FF6F61]/10" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-[#F5F5DC] text-2xl md:text-3xl font-bold leading-tight">
                    Your Private Sanctuary at Sea
                  </h3>
                  <p className="mt-3 text-white/70 leading-relaxed">
                    Reserve signature suites crafted with Cream Sand palettes, Ocean Teal accents,
                    and panoramic terraces. A tranquil haven with bespoke amenities and intuitive technology.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="rounded-full bg-gradient-to-r from-[#FF6F61] to-rose-500 text-white px-6 py-3 font-semibold shadow-xl shadow-rose-900/40 hover:opacity-95 transition">
                      Check Availability
                    </button>
                    <button className="rounded-full bg-white/10 border border-white/15 text-[#F5F5DC] px-6 py-3 font-semibold hover:bg-white/15 transition">
                      Virtual Suite Tour
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1974&auto=format&fit=crop"
                    alt="Luxury cruise deck at sunset"
                    className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-2xl shadow-2xl shadow-black/40"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-white/10 bg-[#001730]/70 px-6 py-5 flex flex-col md:flex-row items-center justify-between shadow-xl shadow-black/30">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} Aurelia Cruises — Curating exclusive high-end voyages
            </p>
            <div className="mt-3 md:mt-0 flex items-center gap-3">
              <span className="text-white/60 text-sm">Privacy</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60 text-sm">Terms</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60 text-sm">Contact</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
