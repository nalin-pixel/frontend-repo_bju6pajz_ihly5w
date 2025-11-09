import { useEffect, useState } from 'react';

export default function HeroShowcase() {
  const [SplineComp, setSplineComp] = useState(null);

  useEffect(() => {
    let mounted = true;
    // Dynamically import Spline on client to avoid SSR/build issues if the package fails
    import('@splinetool/react-spline')
      .then((mod) => {
        if (mounted) setSplineComp(() => mod.default);
      })
      .catch(() => {
        // If Spline fails to load, keep fallback background
        if (mounted) setSplineComp(null);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative w-full h-[58vh] md:h-[64vh] lg:h-[68vh] xl:h-[72vh] overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#002147]" />

      {/* Spline 3D scene or graceful fallback */}
      <div className="absolute inset-0">
        {SplineComp ? (
          <SplineComp
            scene="https://prod.spline.design/6GqkVbR8QqM1JrQp/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1523705480679-b6f9f6c1f8e5?q=80&w=1920&auto=format&fit=crop"
            alt="Ocean horizon at sunrise"
            className="w-full h-full object-cover opacity-60"
            loading="lazy"
          />
        )}
      </div>

      {/* Gradient overlays - do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#00142B]/20 via-transparent to-[#002147]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#002147] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-[#17A2B8] font-semibold tracking-widest uppercase text-xs mb-3">Flagship Collection 2025</p>
          <h1 className="text-[#F5F5DC] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Sail Beyond Extraordinary
          </h1>
          <p className="mt-4 text-white/70 text-lg md:text-xl">
            Discover serene ocean voyages curated for the discerning traveler. Contemporary elegance, intuitive service, and destinations that captivate.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-gradient-to-r from-[#FF6F61] to-rose-500 text-white px-6 py-3 font-semibold shadow-xl shadow-rose-900/40 hover:opacity-95 transition">Plan My Voyage</button>
            <button className="rounded-full bg-white/10 border border-white/15 text-[#F5F5DC] px-6 py-3 font-semibold hover:bg-white/15 transition">Explore Suites</button>
          </div>
        </div>
      </div>
    </section>
  );
}
