import React, { useState } from "react";
import { X, Mail, Sparkles, CheckCircle2, Send } from "lucide-react";
import { CONFIG } from "../config";

interface LargeOrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LargeOrdersModal: React.FC<LargeOrdersModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [eventType, setEventType] = useState("Wedding");
  const [approxQuantity, setApproxQuantity] = useState("25");
  const [desiredDate, setDesiredDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct clean pre-filled mailto
    const subject = encodeURIComponent(`Large Order Enquiry: ${eventType} (${approxQuantity} magnets) - ${name}`);
    const body = encodeURIComponent(
`Hello Magnet Mischief,

I would like to request a quote for a large magnet order.

--- ENQUIRY DETAILS ---
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Organization / Company: ${organization || "N/A"}
Event / Occasion: ${eventType}
Approximate Quantity: ${approxQuantity}
Desired Delivery Date: ${desiredDate || "Flexible"}

Notes / Ideas / Message:
${message || "No additional notes"}

Thank you!`
    );

    // Trigger user's mail client
    window.location.href = `mailto:${CONFIG.businessEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E3D9C9] my-8 text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F3EDE3] hover:bg-[#EBE2D3] text-[#554E46] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E6D8] border border-[#E2D4C0] text-xs font-semibold uppercase tracking-wider text-[#6B4F2E] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
              <span>Bulk & Special Events</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1C18] tracking-tight mb-2">
              Need More Than 25?
            </h3>

            <p className="text-sm sm:text-base text-[#5A534B] leading-relaxed mb-6">
              Planning a wedding, reunion, party, business event or something wonderfully over-the-top? I'd love to hear about it.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#544D44] mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-white outline-hidden focus:border-[#C85A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#544D44] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-white outline-hidden focus:border-[#C85A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#544D44] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-white outline-hidden focus:border-[#C85A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#544D44] mb-1">
                    Organization / Company (Optional)
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Acme Corp or Smith Family"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-white outline-hidden focus:border-[#C85A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#544D44] mb-1">
                    Type of Event
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-white outline-hidden focus:border-[#C85A32]"
                  >
                    <option value="Wedding Favours">Wedding Favours</option>
                    <option value="Family Reunion">Family Reunion</option>
                    <option value="Memorial Keepsake">Memorial Keepsake</option>
                    <option value="Party Favours">Party Favours / Birthday</option>
                    <option value="Corporate / Business Gift">Corporate / Business Promotion</option>
                    <option value="School / Club / Team">School / Club / Sports Team</option>
                    <option value="Fundraiser">Fundraiser</option>
                    <option value="Multi-Photo Collages">Multi-Photo Collages</option>
                    <option value="Other">Other Fun Idea</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#544D44] mb-1">
                    Approximate Quantity
                  </label>
                  <input
                    type="text"
                    required
                    value={approxQuantity}
                    onChange={(e) => setApproxQuantity(e.target.value)}
                    placeholder="e.g. 25, 50, 100+"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-white outline-hidden focus:border-[#C85A32]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#544D44] mb-1">
                    Desired Delivery Date (Optional)
                  </label>
                  <input
                    type="text"
                    value={desiredDate}
                    onChange={(e) => setDesiredDate(e.target.value)}
                    placeholder="e.g. October 15th, or flexible"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-white outline-hidden focus:border-[#C85A32]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#544D44] mb-1">
                    Message & Ideas
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me a little about what you have in mind (e.g. one photo for all, individual guest photos, multi-photo collages, or special packaging)..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-white outline-hidden focus:border-[#C85A32]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#C85A32] text-white font-bold text-sm hover:bg-[#B34D27] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>REQUEST A LARGE ORDER QUOTE</span>
                </button>
                <p className="text-[11px] text-center text-[#787168] mt-2">
                  Clicking will generate an email draft to {CONFIG.businessEmail}. No account or database required!
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Submission success view */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#1F1C18]">
              Enquiry Email Created!
            </h4>
            <p className="text-sm text-[#554E46] max-w-md mx-auto leading-relaxed">
              Your email draft has been generated. If your email application didn't open automatically, you can simply write directly to:
            </p>
            <div className="inline-block bg-[#F3EDE3] px-4 py-2 rounded-xl font-mono text-sm text-[#1F1C18] font-bold">
              {CONFIG.businessEmail}
            </div>
            <div>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#2D2A26] text-white text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
