import { MapPin, Calendar, Clock, Star } from "lucide-react";

const itineraries = [
  {
    id: 1,
    title: "Emerald Isles to Fjords",
    days: 10,
    rating: 4.9,
    depart: "Reykjavík",
    arrival: "Bergen",
    image:
      "https://images.unsplash.com/photo-1470115636492-6d2b56f9146e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mediterranean Grandeur",
    days: 12,
    rating: 5.0,
    depart: "Monaco",
    arrival: "Santorini",
    image:
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Caribbean Serenity",
    days: 8,
    rating: 4.8,
    depart: "St. Barts",
    arrival: "Turks & Caicos",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Alaskan Luxe Expedition",
    days: 14,
    rating: 4.9,
    depart: "Vancouver",
    arrival: "Juneau",
    image:
      "https://images.unsplash.com/photo-1520583457224-aee11bad5112?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function ItineraryGrid() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-[#F5F5DC] text-2xl md:text-3xl font-bold">
              Curated Voyages
            </h2>
            <p className="text-white/60 mt-1">
              Handpicked routes designed for unforgettable luxury escapes
            </p>
          </div>
          <button className="hidden md:inline-flex rounded-full bg-gradient-to-r from-[#17A2B8] to-[#0D929A] text-white px-5 py-2 font-semibold shadow-lg shadow-teal-900/40 hover:opacity-95 transition">
            View All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {itineraries.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-[#001730]/70 border border-white/10 shadow-xl shadow-black/30"
            >
              <div className="relative h-44">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent opacity-70" />
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-white text-xs">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" /> {item.rating}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-[#F5F5DC] font-semibold text-lg leading-snug">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-white/70 text-sm">
                  <Calendar size={16} />
                  {item.days} days
                </div>
                <div className="mt-2 grid grid-cols-2 gap-3 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#17A2B8]" />
                    <span>From {item.depart}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#0D929A]" />
                    <span>To {item.arrival}</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <button className="rounded-full bg-gradient-to-r from-[#FF6F61] to-rose-500 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-rose-900/40">
                    Book Suite
                  </button>
                  <button className="text-[#17A2B8] font-semibold hover:underline">
                    View details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
