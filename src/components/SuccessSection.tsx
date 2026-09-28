import React from "react";
import { Mail, CheckCircle2, Paperclip, AlertCircle, ArrowLeft, Copy, Check } from "lucide-react";
import { CONFIG } from "../config";

interface SuccessSectionProps {
  orderNumber: string;
  quantity?: number;
  personalizedText?: string;
  customerName?: string;
  isDemo?: boolean;
  onBackToHome: () => void;
}

export const SuccessSection: React.FC<SuccessSectionProps> = ({
  orderNumber,
  quantity = 1,
  personalizedText = "",
  customerName = "",
  isDemo = false,
  onBackToHome
}) => {
  const [copied, setCopied] = React.useState(false);

  const totalPaid = (quantity * CONFIG.magnetPrice).toFixed(2);

  // Pre-filled email subject and body
  const emailSubject = encodeURIComponent(`Magnet Mischief Order ${orderNumber}`);
  const emailBody = encodeURIComponent(
`Hello Magnet Mischief,

Here is the photograph for my order.

Order number: ${orderNumber}
Quantity: ${quantity}
Personalized text: ${personalizedText || "(No custom text)"}
${customerName ? `Customer name: ${customerName}\n` : ""}
Thank you!`
  );

  const mailtoUrl = `mailto:${CONFIG.businessEmail}?subject=${emailSubject}&body=${emailBody}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONFIG.businessEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="success-section" className="py-20 bg-[#FAF7F2] min-h-[80vh] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Confetti or order confirmation badge */}
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6 shadow-xs">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {isDemo && (
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold">
            <span>Demo Mode: Payment completed in preview simulation</span>
          </div>
        )}

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C18] tracking-tight mb-3">
          Well, Look at That — Your Order Is In!
        </h1>

        <p className="text-lg text-[#554E46] mb-8 font-medium">
          Thank you for supporting Magnet Mischief.
        </p>

        {/* Order Reference Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#E3D9C9] max-w-xl mx-auto text-left mb-10">
          <div className="flex items-center justify-between pb-4 border-b border-[#EFE8DC]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A736B]">
              YOUR ORDER NUMBER
            </span>
            <span className="font-mono text-xl sm:text-2xl font-black text-[#C85A32] bg-[#FAF6F0] px-3 py-1 rounded-lg border border-[#EFE5D5]">
              {orderNumber}
            </span>
          </div>

          <div className="py-4 space-y-2.5 text-sm text-[#4A433A]">
            <div className="flex justify-between">
              <span className="text-[#787168]">Quantity:</span>
              <span className="font-bold text-[#1F1C18]">{quantity} × 3" × 3" Square Magnets</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#787168]">Personalized Text:</span>
              <span className="font-bold text-[#1F1C18]">
                {personalizedText ? `"${personalizedText}"` : "None"}
              </span>
            </div>
            {customerName && (
              <div className="flex justify-between">
                <span className="text-[#787168]">Ordered By:</span>
                <span className="font-bold text-[#1F1C18]">{customerName}</span>
              </div>
            )}
            <div className="flex justify-between pt-2 border-t border-[#EFE8DC]">
              <span className="font-bold text-[#1F1C18]">Total Paid:</span>
              <span className="font-serif font-black text-lg text-[#C85A32]">
                ${totalPaid} {CONFIG.currency}
              </span>
            </div>
          </div>
        </div>

        {/* THE CRUCIAL SECTION 4 / 26 WORKFLOW: "One Last Little Thing..." */}
        <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-10 border-2 border-[#C85A32]/30 shadow-lg max-w-xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3EDE3] rounded-bl-full pointer-events-none -z-0" />

          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32] block mb-1">
              ACTION REQUIRED
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1C18] mb-2">
              One Last Little Thing...
            </h2>
            <p className="text-base text-[#4D453C] font-semibold mb-3">
              Your order is paid for. Now I just need your photograph.
            </p>
            <p className="text-sm text-[#665D52] leading-relaxed mb-6">
              Please attach the photograph you'd like turned into your magnet and send it to us by email.
            </p>

            {/* BIG EMAIL MY PHOTO BUTTON */}
            <a
              id="email-my-photo-btn"
              href={mailtoUrl}
              className="w-full py-4 rounded-full bg-[#C85A32] hover:bg-[#B34D27] text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer text-center no-underline"
            >
              <Mail className="w-5 h-5" />
              <span>EMAIL MY PHOTO</span>
            </a>

            {/* CRUCIAL INSTRUCTION */}
            <div className="mt-5 p-4 rounded-2xl bg-[#FFF8E1] border border-[#FFE082] flex items-start gap-3">
              <Paperclip className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div className="text-xs text-[#5D4037] leading-relaxed">
                <strong className="block font-bold text-amber-950 text-sm mb-0.5">
                  IMPORTANT: Please attach your photograph before pressing Send.
                </strong>
                The website cannot automatically attach the photograph from your device using an email link.
              </div>
            </div>

            {/* Fallback Instructions */}
            <div className="mt-6 pt-5 border-t border-[#EFE8DC] text-xs text-[#736B62] space-y-2">
              <p>
                <strong>If the email button doesn't open your email application:</strong>
              </p>
              <p>
                Simply open your preferred email service (like Gmail, Outlook, or Apple Mail), send an email to:
              </p>
              <div className="flex items-center gap-2 bg-[#F3EDE3] p-2.5 rounded-xl">
                <span className="font-mono font-bold text-[#1F1C18] text-xs sm:text-sm truncate">
                  {CONFIG.businessEmail}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="ml-auto px-2.5 py-1 rounded-md bg-white hover:bg-[#FAF6F0] text-[#332D26] text-xs font-semibold border border-[#DDD5C7] shrink-0 inline-flex items-center gap-1"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <p>
                Include your order number (<strong>{orderNumber}</strong>) in the subject line, attach your photograph, and send it over!
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home CTA */}
        <div className="mt-10">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#EFE9DF] text-[#3D3730] font-semibold text-sm hover:bg-[#E4DCCE] border border-[#DFD6C8] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Magnet Mischief Homepage</span>
          </button>
        </div>
      </div>
    </section>
  );
};
