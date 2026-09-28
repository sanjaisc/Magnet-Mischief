import React, { useState } from "react";
import { Sparkles, Move, Compass, Home, Briefcase, Key, DoorClosed } from "lucide-react";

export const FridgeShowcase: React.FC = () => {
  const surfaces = [
    {
      id: "fridge",
      name: "Refrigerator",
      tagline: "The Classic Gallery",
      bgGradient: "from-[#DFE6E9] via-[#D1D9DE] to-[#B2BEC3]",
      borderCol: "border-[#A4B0B6]",
      desc: "Morning coffee accompanied by your favourite faces and tail-wags.",
      icon: <Home className="w-4 h-4" />
    },
    {
      id: "filing-cabinet",
      name: "Filing Cabinet",
      tagline: "The Office Sanctuary",
      bgGradient: "from-[#CFD8DC] via-[#B0BEC5] to-[#90A4AE]",
      borderCol: "border-[#78909C]",
      desc: "Transform grey metal office drawers into personal joy machines.",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      id: "locker",
      name: "School / Gym Locker",
      tagline: "The Daily Boost",
      bgGradient: "from-[#ECEFF1] via-[#CFD8DC] to-[#B0BEC5]",
      borderCol: "border-[#90A4AE]",
      desc: "Keep memories close during classes, rehearsals, and workouts.",
      icon: <Key className="w-4 h-4" />
    },
    {
      id: "magnetic-board",
      name: "Magnetic Board",
      tagline: "Artisan Memo Station",
      bgGradient: "from-[#FFF9C4]/40 via-[#FFF59D]/30 to-[#FFE082]/30",
      borderCol: "border-[#FFE082]",
      desc: "Display beside postcards, receipts, and handwritten notes.",
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: "workshop",
      name: "Workshop Toolbox",
      tagline: "The Maker's Bench",
      bgGradient: "from-[#E0E0E0] via-[#BDBDBD] to-[#9E9E9E]",
      borderCol: "border-[#757575]",
      desc: "Add warmth to your garage, tool chest, and sawdust haven.",
      icon: <Compass className="w-4 h-4" />
    },
    {
      id: "metal-door",
      name: "Metal Front Door",
      tagline: "The Welcome Greeting",
      bgGradient: "from-[#D7CCC8] via-[#BCAAA4] to-[#A1887F]",
      borderCol: "border-[#8D6E63]",
      desc: "A warm hello and a joyful goodbye every time you leave home.",
      icon: <DoorClosed className="w-4 h-4" />
    }
  ];

  const [activeSurface, setActiveSurface] = useState(surfaces[0]);

  return (
    <section id="fridge-and-beyond" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0E6D8] border border-[#E2D4C0] text-xs font-semibold uppercase tracking-wider text-[#6B4F2E] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Versatile Magnetic Keepsakes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C18] tracking-tight mb-3">
            They're Magnets. They Like to Wander.
          </h2>
          <p className="font-serif italic text-xl text-[#C85A32] font-semibold">
            "They don't have to live on the fridge."
          </p>
          <p className="text-sm sm:text-base text-[#5A534B] mt-2">
            Wherever there's a scrap of metal, steel, or magnetic board, you've got a stage for a smile.
          </p>
        </div>

        {/* Surface selector buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {surfaces.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveSurface(s)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                activeSurface.id === s.id
                  ? "bg-[#2D2A26] text-white shadow-sm"
                  : "bg-white text-[#524B43] hover:bg-[#F3EDE3] border border-[#E0D7C9]"
              }`}
            >
              {s.icon}
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        {/* The Interactive Surface Display */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`rounded-3xl p-8 sm:p-12 shadow-xl border-4 ${activeSurface.borderCol} bg-linear-to-br ${activeSurface.bgGradient} relative overflow-hidden transition-all duration-500 min-h-[360px] flex flex-col justify-between`}
          >
            {/* Surface glare line */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between border-b border-black/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#474F56] block">
                  ACTIVE SURFACE
                </span>
                <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#1F1C18]">
                  {activeSurface.name}
                </h4>
              </div>
              <span className="text-xs sm:text-sm font-serif italic text-[#394248] font-bold bg-white/70 backdrop-blur-xs px-3 py-1 rounded-full">
                {activeSurface.tagline}
              </span>
            </div>

            {/* Simulated magnets stuck to this surface */}
            <div className="relative z-10 py-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {/* Magnet 1 */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl bg-white p-2 shadow-[0_12px_24px_rgba(0,0,0,0.22)] border border-[#D5CCC0] transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="w-full h-full rounded-lg overflow-hidden relative bg-[#F7F3EB]">
                  <img
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&auto=format&fit=crop&q=80"
                    alt="Cat magnet sample"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 left-1 right-1 bg-white/90 text-center py-0.5 rounded-sm">
                    <p className="font-serif text-[10px] font-bold text-[#1F1C18]">Lord of the Desk</p>
                  </div>
                </div>
              </div>

              {/* Magnet 2 */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl bg-white p-2 shadow-[0_12px_24px_rgba(0,0,0,0.22)] border border-[#D5CCC0] transform rotate-4 hover:rotate-0 transition-transform">
                <div className="w-full h-full rounded-lg overflow-hidden relative bg-[#F7F3EB]">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"
                    alt="Cottage magnet sample"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 left-1 right-1 bg-white/90 text-center py-0.5 rounded-sm">
                    <p className="font-serif text-[10px] font-bold text-[#1F1C18]">Lake Days 2026</p>
                  </div>
                </div>
              </div>

              {/* Magnet 3 */}
              <div className="hidden sm:block w-44 h-44 rounded-xl bg-white p-2 shadow-[0_12px_24px_rgba(0,0,0,0.22)] border border-[#D5CCC0] transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="w-full h-full rounded-lg overflow-hidden relative bg-[#F7F3EB]">
                  <img
                    src="/images/hero-magnet.jpg"
                    alt="Dog magnet sample"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 left-1 right-1 bg-white/90 text-center py-0.5 rounded-sm">
                    <p className="font-serif text-[10px] font-bold text-[#1F1C18]">Barnaby 🐾</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-black/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="text-xs sm:text-sm text-[#444D54] font-medium">
                {activeSurface.desc}
              </p>
              <span className="text-[11px] font-mono text-[#5A646C]">
                3" × 3" Square Magnets
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
