import React from "react";
import { Sparkles, Heart, Mail, ShieldCheck } from "lucide-react";
import { CONFIG } from "../config";
import { PolicyType } from "./PolicyModal";

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
  onOpenLargeOrders: () => void;
  onScrollToOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPolicy,
  onOpenLargeOrders,
  onScrollToOrder
}) => {
  return (
    <footer className="bg-[#262320] text-[#E8E1D5] pt-16 pb-12 border-t border-[#3B3632]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3E3935]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#C85A32] flex items-center justify-center text-white font-serif font-bold text-base">
                M
              </div>
              <span className="font-serif font-black text-2xl tracking-tight text-white">
                {CONFIG.businessName}
              </span>
            </div>

            <p className="text-sm text-[#B3AAA0] leading-relaxed max-w-sm">
              Personalized 3" × 3" square magnets made with photographs, artwork and a little mischief.
              Lovingly created one order at a time.
            </p>

            <div className="pt-2 text-xs text-[#9E958A] space-y-1">
              <p>📍 Handcrafted in {CONFIG.location}</p>
              <p>✉️ Business Contact: <span className="font-mono text-[#D7CEBF]">{CONFIG.businessEmail}</span></p>
              <p>⏱️ Production: {CONFIG.productionTime}</p>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-sm text-[#B3AAA0]">
              <li>
                <button
                  type="button"
                  onClick={onScrollToOrder}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Make a Magnet ($5)
                </button>
              </li>
              <li>
                <a href="#ideas" className="hover:text-white transition-colors">
                  Ideas & Keepsakes
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Sample Gallery
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#my-story" className="hover:text-white transition-colors">
                  My Story (Meet the Maker)
                </a>
              </li>
              <li>
                <a href="#fridge-and-beyond" className="hover:text-white transition-colors">
                  They Like to Wander
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Orders */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              ORDERS & HELP
            </h4>
            <ul className="space-y-2 text-sm text-[#B3AAA0]">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenLargeOrders}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Large Orders (25+)
                </button>
              </li>
              <li>
                <a href="#collages" className="hover:text-white transition-colors">
                  Photo Collages
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Policies & Assurance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              POLICIES
            </h4>
            <ul className="space-y-2 text-sm text-[#B3AAA0]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy("privacy")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy & Photo Handling
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy("terms")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy("shipping")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Shipping Information
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy("refunds")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8177]">
          <p>
            © {new Date().getFullYear()} {CONFIG.businessName}. All rights reserved.
            "No warehouse. No shareholders. Just magnets."
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> No photo uploads stored on server
            </span>
            <span>•</span>
            <span className="text-[#C85A32] font-semibold">
              $5 CAD per Magnet
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
