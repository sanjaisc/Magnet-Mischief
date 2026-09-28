import React from "react";
import { Camera, Type, ShoppingBag, Mail, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { CONFIG } from "../config";

interface HowItWorksProps {
  onScrollToOrder: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onScrollToOrder }) => {
  const steps = [
    {
      num: "01",
      icon: <Camera className="w-6 h-6 text-[#C85A32]" />,
      title: "CHOOSE YOUR PHOTO",
      description: "Pick a favourite photograph from your phone or computer. It stays safely on your device for instant local preview.",
      highlight: "No server uploads required"
    },
    {
      num: "02",
      icon: <Type className="w-6 h-6 text-[#C85A32]" />,
      title: "PERSONALIZE IT",
      description: "Add a short message if you'd like (up to 60 characters), or leave it clean with just your lovely photograph.",
      highlight: "Optional custom text"
    },
    {
      num: "03",
      icon: <ShoppingBag className="w-6 h-6 text-[#C85A32]" />,
      title: "CHOOSE YOUR QUANTITY",
      description: `Order 1–25 magnets at $${CONFIG.magnetPrice} CAD each. Subtotal is calculated automatically with zero surprise fees.`,
      highlight: `$${CONFIG.magnetPrice} each • No minimums`
    },
    {
      num: "04",
      icon: <Mail className="w-6 h-6 text-[#C85A32]" />,
      title: "PAY & EMAIL",
      description: "Pay securely with Stripe Checkout. On your order confirmation page, simply click 'EMAIL MY PHOTO', attach your photo, and send!",
      highlight: "Simple email workflow"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EDE3] border border-[#E5DEC3] text-xs font-semibold uppercase tracking-wider text-[#6B5336] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C18] tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#554E46]">
            No complicated apps or accounts. Just choose, preview, pay, and email your picture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#EAE2D5] relative flex flex-col justify-between hover:border-[#C85A32]/40 transition-all hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-[#E3D9C9] shadow-2xs">
                    {step.icon}
                  </div>
                  <span className="font-serif font-black text-2xl text-[#D9CEBE]">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#1F1C18] mb-2 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-[#5E574F] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE2D5]">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7C5A37]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner on Step 4 Clarity */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F0EBE0] border border-[#DDD3C2] max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-[#C85A32] text-white flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="font-serif font-bold text-sm text-[#1F1C18]">
              Why email the photo after payment?
            </h4>
            <p className="text-xs text-[#5C554D] leading-relaxed mt-0.5">
              It keeps your photographs completely private, guarantees original uncompressed resolution, and means there is zero creepy cloud database storing your family memories.
            </p>
          </div>
          <button
            type="button"
            onClick={onScrollToOrder}
            className="shrink-0 px-5 py-2 rounded-full bg-[#2D2A26] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            START NOW
          </button>
        </div>
      </div>
    </section>
  );
};
