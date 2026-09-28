import React, { useState } from "react";
import { SAMPLE_MAGNETS, GALLERY_CATEGORIES } from "../data/sampleMagnets";
import { Sparkles, Tag, ArrowRight } from "lucide-react";
import { CONFIG } from "../config";

interface SampleGalleryProps {
  onScrollToOrder: () => void;
}

export const SampleGallery: React.FC<SampleGalleryProps> = ({ onScrollToOrder }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredMagnets =
    activeCategory === "All"
      ? SAMPLE_MAGNETS
      : SAMPLE_MAGNETS.filter((m) =>
          activeCategory === "Pets"
            ? m.category === "Pets"
            : activeCategory === "Cottage & Vacation"
            ? m.category === "Cottage & Vacation"
            : activeCategory === "Friends & Reunions"
            ? m.category === "Friends & Reunions"
            : activeCategory === "Weddings"
            ? m.category === "Weddings"
            : activeCategory === "Grandchildren"
            ? m.category === "Grandchildren"
            : activeCategory === "Funny Gifts"
            ? m.category === "Funny Gifts"
            : m.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <section id="gallery" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EDE3] border border-[#E5DEC3] text-xs font-semibold uppercase tracking-wider text-[#665033] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Artisan Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C18] tracking-tight mb-4">
            A Few Things I've Made
          </h2>
          <p className="text-base sm:text-lg text-[#5A534B]">
            From beloved dogs to quiet lake docks and 50-year wedding memories.
            Every magnet is a 3" × 3" square keepsake.
          </p>
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#2D2A26] text-[#FDFBF7] shadow-sm"
                  : "bg-[#F3EDE3] text-[#554E46] hover:bg-[#EBE2D3]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredMagnets.map((magnet) => (
            <div
              key={magnet.id}
              className="group flex flex-col items-center bg-[#FAF7F2] p-5 rounded-2xl border border-[#EBE3D7] hover:border-[#D5C7B5] transition-all hover:shadow-md"
            >
              {/* The Physical 3" x 3" Realistic Magnet Mockup */}
              <div className="relative w-52 h-52 sm:w-56 sm:h-56 my-2 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-full h-full rounded-xl bg-white p-2 shadow-[0_10px_24px_rgba(0,0,0,0.14),0_3px_8px_rgba(0,0,0,0.08)] border border-[#DDD5C7] overflow-hidden relative">
                  {/* Gloss shine */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-white/40 to-transparent pointer-events-none z-10" />

                  <div className="w-full h-full rounded-lg overflow-hidden bg-[#F3ECE0] relative">
                    <img
                      src={magnet.image}
                      alt={magnet.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    {magnet.caption && (
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-white/90 backdrop-blur-xs py-1 px-2 rounded-md shadow-2xs text-center border border-white/80">
                        <p className="font-serif italic font-semibold text-[11px] text-[#2A241E] truncate">
                          {magnet.caption}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Surface badge */}
                {magnet.surface && (
                  <span className="absolute -top-2 -left-2 bg-[#2D2A26]/90 text-white text-[10px] font-mono px-2 py-0.5 rounded-md shadow-xs">
                    on {magnet.surface}
                  </span>
                )}

                <span className="absolute -bottom-2 -right-2 bg-[#C85A32] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                  ${CONFIG.magnetPrice} CAD
                </span>
              </div>

              {/* Magnet details */}
              <div className="w-full text-center mt-3 pt-3 border-t border-[#EBE3D7]/70">
                <span className="text-[11px] font-semibold text-[#8C765C] uppercase tracking-wider block">
                  {magnet.category}
                </span>
                <h4 className="font-serif font-bold text-base text-[#1F1C18] mt-0.5">
                  {magnet.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={onScrollToOrder}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C85A32] text-white font-semibold text-sm hover:bg-[#B34D27] shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span>MAKE A MAGNET FROM YOUR PHOTO — ${CONFIG.magnetPrice}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
