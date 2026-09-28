import React from "react";
import { Sparkles, Quote, Heart, Scissors, Check, CheckCircle2 } from "lucide-react";

export const MeetTheMaker: React.FC = () => {
  return (
    <section id="my-story" className="py-20 bg-[#F5EFE6] border-y border-[#E8DFC0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#E0D7C7] text-xs font-semibold uppercase tracking-wider text-[#6F5234] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Behind the Bench</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C18] tracking-tight">
            Meet the Maker
          </h2>
        </div>

        {/* Balanced Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Portrait & Workshop Ledger (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Primary Portrait Card */}
            <div className="bg-white rounded-3xl p-4 shadow-xs border border-[#E3D9C9] flex-1 flex flex-col justify-between">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-[#EFE9DF] shadow-inner">
                <img
                  src="/images/wendy-maker.jpg"
                  alt="Wendy Neilson and friends at the Magnet Mischief workshop bench"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold text-[#1F1C18] border border-[#DDD4C5] shadow-xs">
                  Wendy Neilson • 87 Years Young • Ontario, Canada
                </div>
              </div>

              <div className="pt-4 pb-1 px-1 text-center">
                <p className="font-serif italic font-bold text-base text-[#1F1C18]">
                  "At 87, I’ve decided to move on to something much more sensible: I’m making magnets."
                </p>
              </div>
            </div>

            {/* Behind the Bench Ledger Card */}
            <div className="bg-white/90 backdrop-blur-xs rounded-3xl p-6 border border-[#E2D8C8] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EBE3D7]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A736B]">
                  THE WORKSHOP LEDGER
                </span>
                <span className="text-xs font-serif font-bold text-[#C85A32]">
                  Est. 2026
                </span>
              </div>

              <div className="space-y-3 text-xs text-[#524B43]">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FAF4EC] text-[#7C5A37] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 border border-[#E2D7C5]">
                    60+
                  </span>
                  <div>
                    <strong className="text-[#1F1C18] block">Years of making things</strong>
                    <span>Pottery, clay & kiln, pen & ink, wax, paint, and now magnets</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FAF4EC] text-[#C85A32] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 border border-[#E2D7C5]">
                    0
                  </span>
                  <div>
                    <strong className="text-[#1F1C18] block">Corporate shareholders</strong>
                    <span>No Etsy empire, no quarterly results, just craft</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FAF4EC] text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 border border-[#E2D7C5]">
                    1
                  </span>
                  <div>
                    <strong className="text-[#1F1C18] block">Modest financial ambition</strong>
                    <span>Break even by the end of the year (hope springs eternal)</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EBE3D7] text-[11px] text-[#786F64] flex items-center justify-between">
                <span>Handcrafted one at a time</span>
                <span className="font-semibold text-[#1F1C18]">100% Independent</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Story (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-[#E4DACB] shadow-xs flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-5 text-[#3F3931] leading-relaxed">
              {/* Header */}
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C85A32] block mb-1">
                  A NOTE FROM THE ARTIST
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1C18] leading-tight">
                  Well, I’ve done it again. Another artistic adventure.
                </h3>
              </div>

              {/* Story paragraphs */}
              <p className="text-base sm:text-lg text-[#2D2A26]">
                After more than 60 years of making things, I have finally accepted an important fact:{" "}
                <strong className="text-[#1F1C18] font-bold">I am unlikely to become a Great Artist.</strong>
              </p>

              <p className="text-sm sm:text-base text-[#554E46]">
                I’ve had a go at the wheel, clay and kiln, pen and ink, coloured pencils, wax, paint and goodness knows what else. Some were triumphs. Some were learning experiences. A few were quietly disposed of.
              </p>

              {/* Modest Ambition Quote */}
              <div className="p-4 rounded-2xl bg-[#FAF6F0] border-l-4 border-[#C85A32] text-sm sm:text-base text-[#4A4239] italic">
                "My financial ambition was always equally modest: <strong className="text-[#1F1C18]">break even by the end of the year.</strong> I can’t honestly say that happened very often!"
              </div>

              <p className="text-sm sm:text-base text-[#554E46]">
                So, at 87, I’ve decided to give up trying to achieve artistic greatness and move on to something much more sensible:
              </p>

              {/* Pivot Banner */}
              <div className="py-2.5 px-5 rounded-2xl bg-[#FAF6F0] border border-[#EFE5D5] flex items-center justify-between">
                <span className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#C85A32]">
                  I’M MAKING MAGNETS.
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#736B62] hidden sm:inline-block">
                  3" × 3" SQUARES
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#554E46]">
                Three-inch-square little treasures, made from photographs, artwork and ideas — and I’m rather taken with them.
                Your favourite family photograph, the grandchildren, the dog, the cottage, the gang at the annual reunion, or the picture on your phone you couldn’t bear to delete.
              </p>

              <p className="text-sm sm:text-base text-[#554E46]">
                And they don’t have to live on the fridge. They could be party favours, wedding keepsakes, thank-you gifts, memorial tokens, or little promotional gifts for a business.
              </p>

              <p className="text-xs sm:text-sm text-[#736B62] italic">
                I can also combine several photographs into one slightly mischievous little collage — because apparently putting one picture on a square wasn’t enough for me.
              </p>
            </div>

            {/* Closing Manifesto Box */}
            <div className="mt-6 pt-5 border-t border-[#EBE3D7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#7A736B]">
                  THE MAGNET MISCHIEF PROMISE
                </p>
                <p className="font-serif italic font-bold text-base sm:text-lg text-[#1F1C18] mt-0.5">
                  No Etsy empire. No warehouse. No shareholders.
                </p>
                <p className="font-serif italic font-bold text-sm sm:text-base text-[#C85A32]">
                  Just me, my magnets and the faint possibility of breaking even.
                </p>
              </div>

              <div className="shrink-0 text-left sm:text-right">
                <span className="font-serif italic font-bold text-base text-[#1F1C18] block">
                  — The Maker
                </span>
                <span className="text-[11px] text-[#7A736B] block">
                  Ontario, Canada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
