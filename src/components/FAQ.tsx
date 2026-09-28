import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/faq";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EDE3] border border-[#E5DEC3] text-xs font-semibold uppercase tracking-wider text-[#6B5336] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Questions & Answers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C18] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#5A534B]">
            Everything you need to know about placing an order, sending your photo, and how these little magnets come to life.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FAF7F2] rounded-2xl border border-[#EAE2D5] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F3EDE3]/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#1F1C18]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#736B62] shrink-0 border border-[#DDD5C7] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#C85A32] text-white border-[#C85A32]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#524B43] leading-relaxed border-t border-[#EAE2D5]/70 bg-white/40">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
