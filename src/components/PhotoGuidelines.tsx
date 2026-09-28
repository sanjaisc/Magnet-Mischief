import React from "react";
import { Check, Sparkles, AlertCircle, HelpCircle } from "lucide-react";

export const PhotoGuidelines: React.FC = () => {
  const tips = [
    "Use the highest-resolution photograph you have.",
    "Clear, sharp photographs produce the best results.",
    "Avoid extremely dark or blurry photographs.",
    "Make sure faces and important subjects are visible.",
    "Avoid putting important faces or objects too close to the edges.",
    "Square and landscape photographs generally work well.",
    "Portrait photographs can also be used, but cropping may be necessary.",
    "Good lighting produces better results.",
    "Screenshots and heavily compressed social-media images may produce lower-quality results.",
    "Because the finished magnet is square, some cropping may be necessary."
  ];

  return (
    <div id="photo-guidelines" className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E8DFC0] shadow-xs">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7C5A37] mb-2">
        <Sparkles className="w-4 h-4 text-[#C85A32]" />
        <span>Artisan Quality Advice</span>
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1C18] mb-4">
        A Few Tips for the Best Possible Magnet
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-6 text-sm text-[#4E473F]">
        {tips.map((tip, idx) => (
          <div key={idx} className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-[#EFE5D5] text-[#7C5A37] flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3 stroke-[3]" />
            </span>
            <span className="leading-snug">{tip}</span>
          </div>
        ))}
      </div>

      {/* The reassuring note */}
      <div className="mt-6 p-4 rounded-2xl bg-white border border-[#E3D8C6] flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-[#504941] italic font-serif leading-relaxed">
          <strong>Not sure whether your photograph will work?</strong> Don't worry.
          I'll take a look and contact you if I think another photograph would produce a better result.
        </p>
      </div>
    </div>
  );
};
