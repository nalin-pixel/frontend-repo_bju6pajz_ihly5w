import { Crown, ConciergeBell, Wine, Waves } from "lucide-react";

const perks = [
  {
    icon: Crown,
    title: "Suite Indulgence",
    desc: "Expansive ocean-view suites with butler service, premium linens, and bespoke amenities.",
  },
  {
    icon: ConciergeBell,
    title: "White-Glove Service",
    desc: "A dedicated concierge to personalize every detail of your journey from embarkation to farewell.",
  },
  {
    icon: Wine,
    title: "Culinary Artistry",
    desc: "Michelin-inspired dining, curated wine pairings, and sunset tastings on deck.",
  },
  {
    icon: Waves,
    title: "Ocean Wellness",
    desc: "Thermal suites, oceanfront yoga, and spa therapies inspired by the sea.",
  },
];

export default function LuxuryPerks() {
  return (
    <section className="relative pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 md:p-8 shadow-2xl shadow-black/30">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-[#001730]/60 border border-white/10 p-5 shadow-xl shadow-black/30 hover:translate-y-[-2px] transition-transform"
              >
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#17A2B8] to-[#0D929A] flex items-center justify-center shadow-lg shadow-black/40 border border-white/10 mb-4">
                  <Icon className="text-white" size={20} />
                </div>
                <h4 className="text-[#F5F5DC] font-semibold mb-1">{title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
