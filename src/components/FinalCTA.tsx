import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { CONFIG } from "../config";

interface FinalCTAProps {
  onScrollToOrder: () => void;
  onOpenLargeOrders: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onScrollToOrder, onOpenLargeOrders }) => {
  return (
    <section className="py-24 bg-[#FAF7F2] text-center relative overflow-hidden">
      {/* Warm artisan backdrop */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-[#F0E6D8] text-[#C85A32] flex items-center justify-center mx-auto mb-6 shadow-xs border border-[#E4D7C2]">
          <Sparkles className="w-7 h-7" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C18] tracking-tight mb-4">
          Got a Picture You Can't Bear to Delete?
        </h2>

        <p className="font-serif italic text-2xl sm:text-3xl text-[#C85A32] font-semibold mb-8">
          Make it a magnet instead.
        </p>

        <p className="text-base text-[#59524A] max-w-xl mx-auto mb-10">
          Personalized 3" × 3" square magnets made with care and a little mischief.
          Just ${CONFIG.magnetPrice} CAD each.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onScrollToOrder}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#C85A32] text-white font-bold text-base hover:bg-[#B34D27] shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>MAKE MY MAGNET — ${CONFIG.magnetPrice}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenLargeOrders}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#EFE9DF] text-[#3D3730] font-semibold text-base hover:bg-[#E4DCCE] border border-[#DFD6C8] transition-all cursor-pointer"
          >
            <span>I NEED A LOT OF MAGNETS</span>
          </button>
        </div>
      </div>
    </section>
  );
};
