import React from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { CONFIG } from "../config";

interface ProductIntroProps {
  onScrollToOrder: () => void;
}

export const ProductIntro: React.FC<ProductIntroProps> = ({ onScrollToOrder }) => {
  return (
    <section id="product-intro" className="py-16 bg-[#F5EFE6] border-y border-[#E8E0D2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#DFD6C7] text-xs font-semibold text-[#6E5536] uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
          <span>The One & Only Magnet Specification</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C18] tracking-tight mb-5">
          Three Inches of Photographic Mischief.
        </h2>

        <p className="text-lg sm:text-xl text-[#524B43] max-w-3xl mx-auto leading-relaxed mb-8">
          Your favourite photograph can become a 3" × 3" personalized magnet.
          Order one for yourself, or several as gifts, keepsakes, party favours or promotional goodies.
        </p>

        {/* Feature Grid pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
          <div className="bg-white/80 p-3.5 rounded-xl border border-[#E3D9C9] shadow-2xs">
            <span className="text-xs font-semibold text-[#8C765C] uppercase block">Dimensions</span>
            <span className="text-sm font-bold text-[#231F1B] font-serif">3" × 3" Square</span>
          </div>
          <div className="bg-white/80 p-3.5 rounded-xl border border-[#E3D9C9] shadow-2xs">
            <span className="text-xs font-semibold text-[#8C765C] uppercase block">Price</span>
            <span className="text-sm font-bold text-[#C85A32] font-serif">${CONFIG.magnetPrice} CAD Each</span>
          </div>
          <div className="bg-white/80 p-3.5 rounded-xl border border-[#E3D9C9] shadow-2xs">
            <span className="text-xs font-semibold text-[#8C765C] uppercase block">Finish</span>
            <span className="text-sm font-bold text-[#231F1B] font-serif">Gloss Protective</span>
          </div>
          <div className="bg-white/80 p-3.5 rounded-xl border border-[#E3D9C9] shadow-2xs">
            <span className="text-xs font-semibold text-[#8C765C] uppercase block">Backing</span>
            <span className="text-sm font-bold text-[#231F1B] font-serif">Full Magnetic Grip</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="text-2xl sm:text-3xl font-serif font-black text-[#1F1C18]">
            <span className="text-[#C85A32]">${CONFIG.magnetPrice}</span> EACH
          </div>
          <span className="hidden sm:inline text-[#B5ABA0]">•</span>
          <button
            type="button"
            onClick={onScrollToOrder}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C85A32] text-white font-semibold text-base hover:bg-[#B34D27] shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span>MAKE YOUR MAGNET</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
