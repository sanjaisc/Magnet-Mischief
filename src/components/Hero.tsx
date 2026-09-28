import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Heart, Camera, Stamp } from "lucide-react";
import { CONFIG } from "../config";

interface HeroProps {
  onScrollToOrder: () => void;
  onOpenLargeOrders: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToOrder, onOpenLargeOrders }) => {
  return (
    <section id="top" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Subtle warm background accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#F5EAD9]/60 via-transparent to-transparent -z-10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE3] border border-[#E5DEC3] text-xs font-semibold uppercase tracking-wider text-[#5A4528]">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Handcrafted 3" × 3" Square Magnets</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1F1C18] font-bold tracking-tight leading-[1.15]">
              Turn Your Favourite Pictures Into{" "}
              <span className="italic font-normal text-[#C85A32] font-serif">
                Little Magnets
              </span>{" "}
              of Mischief.
            </h1>

            <p className="text-lg sm:text-xl text-[#59534B] max-w-2xl leading-relaxed font-normal">
              Three-inch-square personalized magnets made from your photographs,
              artwork and ideas — lovingly created one order at a time by an 87-year-old artisan.
            </p>

            {/* Quick 3-step banner: PHOTO -> MAGNET -> $5 */}
            <div className="py-2.5 px-4 bg-white/80 backdrop-blur-xs rounded-2xl border border-[#E8E1D5] inline-flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-[#4A443D] shadow-2xs">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#F0E6D8] text-[#7C5A37] font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <span>Choose Photo</span>
              </div>
              <span className="text-[#AFA89F]">→</span>
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#F0E6D8] text-[#7C5A37] font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <span>Custom 3" × 3" Magnet</span>
              </div>
              <span className="text-[#AFA89F]">→</span>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-md bg-[#C85A32] text-white font-bold text-xs">
                  ${CONFIG.magnetPrice} CAD Each
                </span>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={onScrollToOrder}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C85A32] text-white font-semibold text-base hover:bg-[#B34D27] shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer"
              >
                <span>MAKE A MAGNET — ${CONFIG.magnetPrice}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                type="button"
                onClick={onOpenLargeOrders}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#EFE9DF] text-[#3D3730] font-semibold text-base hover:bg-[#E4DCCE] border border-[#DFD6C8] transition-all cursor-pointer"
              >
                <span>LARGE ORDERS / ENQUIRE</span>
              </button>
            </div>

            {/* Trust badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#6B645B]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#38764B]" />
                <span>Zero Photo Uploads (Stays on device until email)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#C85A32]" />
                <span>Secure Stripe Checkout</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Stamp className="w-4 h-4 text-[#7C5A37]" />
                <span>Made in Canada</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Magnet Mockups Display */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Realistic Magnetic Refrigerator Surface Card */}
            <div className="relative w-full max-w-[420px] aspect-4/5 rounded-3xl bg-linear-to-b from-[#E7EDF0] via-[#DCE3E8] to-[#CDD6DC] p-6 shadow-xl border-4 border-[#C1CCD3] flex flex-col justify-between overflow-hidden">
              {/* Stainless steel brushed reflection line */}
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/25 to-transparent pointer-events-none" />

              {/* Fridge Header detail */}
              <div className="relative z-10 flex items-center justify-between text-xs text-[#5C6670] font-mono border-b border-black/5 pb-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  KITCHEN REFRIGERATOR
                </span>
                <span className="tracking-widest uppercase text-[10px] font-bold">
                  ARTISAN DISPLAY
                </span>
              </div>

              {/* Hero Sample Magnet: Signature Cat Magnet */}
              <div className="relative z-10 my-auto flex flex-col items-center">
                <div className="relative group cursor-pointer transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  {/* Physical 3D Magnet shadow & thickness */}
                  <div className="relative w-60 h-60 sm:w-64 sm:h-64 rounded-xl bg-white p-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.22),0_4px_10px_rgba(0,0,0,0.12)] border border-[#DDD5C7] overflow-hidden">
                    {/* Corner shine */}
                    <div className="absolute top-0 right-0 w-28 h-28 bg-linear-to-bl from-white/40 to-transparent pointer-events-none z-10" />

                    <div className="w-full h-full rounded-lg overflow-hidden relative bg-[#F7F3EB]">
                      <img
                        src="/images/sample-magnet-image.png"
                        alt="Magnet Mischief signature sample magnet - Cat with red glasses"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Little handwritten playful tag */}
                  <div className="absolute -top-3 -right-3 bg-[#C85A32] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md transform rotate-6">
                    $5 CAD
                  </div>

                  <div className="absolute -bottom-3 -left-3 bg-white/95 border border-[#DFD6C7] text-[#4A4137] px-2.5 py-0.5 rounded-full text-[11px] font-serif italic shadow-sm">
                    Exact 3" × 3" Size
                  </div>
                </div>
              </div>

              {/* Secondary tagline mini-note */}
              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-black/5">
                <p className="text-xs text-[#525D66] font-medium">
                  "Small Things. Big Personality."
                </p>
                <span className="font-serif italic font-bold text-xs text-[#C85A32] shrink-0">
                  — Wendy Neilson
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
