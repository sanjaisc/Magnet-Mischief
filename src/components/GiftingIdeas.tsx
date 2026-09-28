import React from "react";
import { GIFTING_IDEAS } from "../data/giftingIdeas";
import {
  Users,
  HeartHandshake,
  Sparkles,
  Smile,
  Wine,
  Flower2,
  Sun,
  Store,
  GraduationCap,
  Gift,
  ThumbsUp,
  Laugh,
  ArrowRight
} from "lucide-react";

interface GiftingIdeasProps {
  onScrollToOrder: () => void;
}

export const GiftingIdeas: React.FC<GiftingIdeasProps> = ({ onScrollToOrder }) => {
  // Map icons safely
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users": return <Users className="w-5 h-5 text-[#C85A32]" />;
      case "HeartHandshake": return <HeartHandshake className="w-5 h-5 text-[#C85A32]" />;
      case "Sparkles": return <Sparkles className="w-5 h-5 text-[#C85A32]" />;
      case "Smile": return <Smile className="w-5 h-5 text-[#C85A32]" />;
      case "Wine": return <Wine className="w-5 h-5 text-[#C85A32]" />;
      case "Flower2": return <Flower2 className="w-5 h-5 text-[#C85A32]" />;
      case "Sun": return <Sun className="w-5 h-5 text-[#C85A32]" />;
      case "Store": return <Store className="w-5 h-5 text-[#C85A32]" />;
      case "GraduationCap": return <GraduationCap className="w-5 h-5 text-[#C85A32]" />;
      case "Gift": return <Gift className="w-5 h-5 text-[#C85A32]" />;
      case "ThumbsUp": return <ThumbsUp className="w-5 h-5 text-[#C85A32]" />;
      case "Laugh": return <Laugh className="w-5 h-5 text-[#C85A32]" />;
      default: return <Sparkles className="w-5 h-5 text-[#C85A32]" />;
    }
  };

  return (
    <section id="ideas" className="py-20 bg-[#F5EFE6] border-y border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#E0D7C9] text-xs font-semibold uppercase tracking-wider text-[#6B5336] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Endless Possibilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C18] tracking-tight mb-4">
            What Could Become a Magnet?
          </h2>
          <p className="text-base sm:text-lg text-[#554E46]">
            Every little snapshot has a story. Here are a few ways folks love to turn their pictures into lasting mischief.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {GIFTING_IDEAS.map((idea) => (
            <div
              key={idea.id}
              className="bg-white/90 backdrop-blur-xs rounded-2xl p-6 border border-[#E4DACB] hover:border-[#C85A32]/40 transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] flex items-center justify-center border border-[#EBE3D7]">
                    {getIcon(idea.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#8C765C] bg-[#FAF6F0] px-2.5 py-0.5 rounded-full border border-[#EFE5D6]">
                    {idea.tag}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1F1C18] mb-2">
                  {idea.title}
                </h3>
                <p className="text-sm text-[#5E574F] leading-relaxed">
                  {idea.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F0EAE0] flex items-center justify-between">
                <span className="text-xs font-medium text-[#8A8177]">
                  3" × 3" Square
                </span>
                <button
                  type="button"
                  onClick={onScrollToOrder}
                  className="text-xs font-bold text-[#C85A32] hover:text-[#9F3F1D] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Order this</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
