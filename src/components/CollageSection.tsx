import React from "react";
import { Grid, Sparkles, Mail, ArrowRight } from "lucide-react";
import { CONFIG } from "../config";

interface CollageSectionProps {
  onOpenLargeOrders: () => void;
}

export const CollageSection: React.FC<CollageSectionProps> = ({ onOpenLargeOrders }) => {
  return (
    <section id="collages" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5EFE6] rounded-3xl p-8 sm:p-12 border border-[#E4DACB] relative overflow-hidden">
          {/* Subtle background detail */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-white/40 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Collage Mockup Visual */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-56 h-56 rounded-2xl bg-white p-2.5 shadow-xl border border-[#D5CCC0] transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="w-full h-full rounded-xl overflow-hidden grid grid-cols-2 grid-rows-2 gap-1 p-1 bg-[#EBE3D7]">
                  <img
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&auto=format&fit=crop&q=80"
                    alt="Collage piece 1"
                    className="w-full h-full object-cover rounded-sm"
                  />
                  <img
                    src="/images/hero-magnet.jpg"
                    alt="Collage piece 2"
                    className="w-full h-full object-cover rounded-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&auto=format&fit=crop&q=80"
                    alt="Collage piece 3"
                    className="w-full h-full object-cover rounded-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=200&auto=format&fit=crop&q=80"
                    alt="Collage piece 4"
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#C85A32] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  Mini-Collage
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#E0D7C9] text-xs font-semibold uppercase tracking-wider text-[#6B5336]">
                <Grid className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>Special Artisan Arrangement</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C18] tracking-tight">
                One Picture Wasn't Enough?
              </h3>

              <p className="text-base sm:text-lg text-[#524B43] leading-relaxed">
                I can also combine several photographs into one slightly mischievous little collage — because apparently putting one picture on a square wasn't enough.
              </p>

              <p className="text-xs sm:text-sm text-[#736B62]">
                Simply mention that you’d like a multi-photo collage when sending your email or through our Large Order & Custom enquiry form. I'll arrange them by hand before printing!
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenLargeOrders}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D2A26] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Ask About Collages / Large Orders</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
