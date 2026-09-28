import React from "react";
import { X, ShieldCheck, FileText, Truck, RefreshCw } from "lucide-react";
import { CONFIG } from "../config";

export type PolicyType = "privacy" | "terms" | "shipping" | "refunds" | null;

interface PolicyModalProps {
  policyType: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyType, onClose }) => {
  if (!policyType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E3D9C9] my-8 text-left max-h-[85vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F3EDE3] hover:bg-[#EBE2D3] text-[#554E46] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* PRIVACY POLICY */}
        {policyType === "privacy" && (
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy First</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1C18]">
              Privacy & Photograph Handling
            </h3>

            <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#EAE0D0] text-sm text-[#4A4239] font-medium leading-relaxed">
              <strong>Your photograph stays on your device while you're creating your order.</strong> After payment, you'll email the photograph directly to Magnet Mischief.
            </div>

            <div className="space-y-3 text-sm text-[#554E46] leading-relaxed">
              <h4 className="font-serif font-bold text-base text-[#1F1C18]">
                1. No Server Photo Storage
              </h4>
              <p>
                When you select a picture in our studio, your browser displays a local preview using standard client-side APIs. Your picture is never uploaded to our web server, cloud databases, or third-party servers during checkout.
              </p>

              <h4 className="font-serif font-bold text-base text-[#1F1C18]">
                2. Information Collected at Checkout
              </h4>
              <p>
                To process your order, we collect your name, email address, optional telephone number, and order reference. Payments are handled strictly by Stripe. We never see or store your credit card or financial account numbers.
              </p>

              <h4 className="font-serif font-bold text-base text-[#1F1C18]">
                3. Photographs Received by Email
              </h4>
              <p>
                When you email your photograph to Magnet Mischief, it is used solely to print and handcraft your 3" × 3" square magnets. We will never sell, publish, license, or publicly display your personal photographs without your written permission.
              </p>

              <h4 className="font-serif font-bold text-base text-[#1F1C18]">
                4. Customer Responsibility
              </h4>
              <p>
                Please ensure you have the right to use the photographs and artwork you submit.
              </p>
            </div>
          </div>
        )}

        {/* TERMS OF SERVICE */}
        {policyType === "terms" && (
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE7F6] text-[#5E35B1] text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Simple Terms</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1C18]">
              Terms of Service
            </h3>
            <div className="space-y-3 text-sm text-[#554E46] leading-relaxed">
              <p>
                Magnet Mischief is a small artisan business creating custom 3" × 3" square magnets for $5 CAD each.
              </p>
              <p>
                <strong>Handcrafted Nature:</strong> Because each magnet is prepared individually, slight variations in color, cropping, and positioning may naturally occur. We aim to present your photo in the best possible light.
              </p>
              <p>
                <strong>Email Matching:</strong> Orders are fulfilled once your matching email with the attached photo has been received and verified with your order reference.
              </p>
            </div>
          </div>
        )}

        {/* SHIPPING INFORMATION */}
        {policyType === "shipping" && (
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2F1] text-[#00695C] text-xs font-semibold uppercase tracking-wider">
              <Truck className="w-4 h-4" />
              <span>Careful Dispatch</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1C18]">
              Shipping & Production
            </h3>
            <div className="space-y-3 text-sm text-[#554E46] leading-relaxed">
              <p>
                <strong>Production Time:</strong> Each magnet order is lovingly handcrafted in approximately {CONFIG.productionTime} after receiving your emailed photograph.
              </p>
              <p>
                <strong>Packaging:</strong> Magnets are enclosed in protective envelopes with cardboard backing to ensure they arrive flat, clean, and ready to stick.
              </p>
              <p>
                <strong>Shipping Cost:</strong> Standard shipping is currently {CONFIG.shippingPrice === 0 ? "FREE" : `$${CONFIG.shippingPrice.toFixed(2)} CAD`}.
              </p>
            </div>
          </div>
        )}

        {/* REFUND POLICY */}
        {policyType === "refunds" && (
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3E0] text-[#E65100] text-xs font-semibold uppercase tracking-wider">
              <RefreshCw className="w-4 h-4" />
              <span>Friendly Policy</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1C18]">
              Refund & Satisfaction Policy
            </h3>
            <div className="space-y-3 text-sm text-[#554E46] leading-relaxed">
              <p>
                Because these are personalized handcrafted items, standard returns are not possible once printed.
              </p>
              <p>
                However, <strong>your happiness matters deeply.</strong> If your magnet arrives damaged in transit or has a clear defect, please email us with a quick photo of the issue and we will gladly make and send a free replacement or issue a refund.
              </p>
            </div>
          </div>
        )}

        <div className="pt-4 mt-6 border-t border-[#EAE0D0] text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#2D2A26] text-white text-xs font-semibold hover:bg-black transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
