import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowRight, Heart } from "lucide-react";
import { CONFIG } from "../config";

interface HeaderProps {
  onOpenLargeOrders: () => void;
  onScrollToOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLargeOrders, onScrollToOrder }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Make a Magnet", href: "#make-magnet" },
    { label: "Ideas", href: "#ideas" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "My Story", href: "#my-story" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#EBE5DA]"
          : "bg-[#FDFBF7] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo"
            href="#top"
            className="flex items-center gap-2 group text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-[#2D2A26] flex items-center justify-center text-[#FDFBF7] shadow-sm transform group-hover:rotate-3 transition-transform">
              <span className="font-serif font-black text-lg tracking-tight">M</span>
            </div>
            <div>
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-[#1F1C18] block leading-none">
                MAGNET MISCHIEF
              </span>
              <span className="text-[11px] font-medium tracking-wide text-[#756F68] uppercase block mt-0.5">
                3" × 3" Artisan Magnets • $5
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#4D4740] hover:text-[#1F1C18] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onOpenLargeOrders}
              className="text-sm font-medium text-[#7C5A37] hover:text-[#5B4025] transition-colors cursor-pointer"
            >
              Large Orders
            </button>
          </nav>

          {/* Primary CTA button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-cta-btn"
              type="button"
              onClick={onScrollToOrder}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C85A32] text-white font-medium text-sm hover:bg-[#B34D27] shadow-sm hover:shadow-md transform active:scale-98 transition-all cursor-pointer"
            >
              <span>MAKE A MAGNET</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-bold tracking-wide">
                ${CONFIG.magnetPrice} CAD
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-btn"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#2D2A26] hover:bg-[#EFE9DF] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#EBE5DA] px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#2D2A26] hover:bg-[#F3EDE3]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                onOpenLargeOrders();
              }}
              className="text-left px-3 py-2 rounded-lg text-base font-medium text-[#7C5A37] hover:bg-[#F3EDE3] cursor-pointer"
            >
              Large Orders & Enquiries
            </button>
            <div className="pt-2 border-t border-[#EBE5DA] mt-2">
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onScrollToOrder();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C85A32] text-white font-semibold text-base shadow-sm"
              >
                <span>MAKE A MAGNET — $5 CAD</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
