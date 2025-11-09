import { Ship, Search, User, Settings } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="w-full sticky top-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl bg-[#001730]/70 backdrop-blur-md border border-white/10 shadow-xl shadow-black/30 px-5 py-3">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#17A2B8] to-[#0D929A] flex items-center justify-center shadow-lg shadow-black/40 border border-white/10">
              <Ship className="text-[#F5F5DC]" size={22} />
            </div>
            <div className="leading-tight">
              <p className="text-[#F5F5DC] font-semibold tracking-wide">Aurelia Cruises</p>
              <p className="text-xs text-white/60">Exclusive Voyages Worldwide</p>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
            <div className="flex items-center gap-2 w-full rounded-full bg-white/5 border border-white/10 px-4 py-2 shadow-inner">
              <Search size={18} className="text-white/70" />
              <input
                type="text"
                placeholder="Search ships, destinations, suites..."
                className="w-full bg-transparent outline-none text-sm text-[#F5F5DC] placeholder:text-white/50"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF6F61] to-rose-500 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-rose-900/40 hover:opacity-95 transition">
              Reserve Now
            </button>
            <button className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition" aria-label="Settings">
              <Settings size={18} />
            </button>
            <button className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 transition" aria-label="Account">
              <User size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
