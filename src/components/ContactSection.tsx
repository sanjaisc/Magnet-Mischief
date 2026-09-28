import React, { useState } from "react";
import { Mail, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { CONFIG } from "../config";

export const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Magnet Mischief Website Enquiry");
    const body = encodeURIComponent(
`Hello Magnet Mischief,

${message}

--- SENDER DETAILS ---
Name: ${name}
Email: ${email}
`
    );

    window.location.href = `mailto:${CONFIG.businessEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F5EFE6] border-t border-[#E8DFC0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#E2D8C8]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF6F0] flex items-center justify-center text-[#C85A32] mx-auto mb-3 border border-[#EAE1D3]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1C18] tracking-tight mb-2">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-[#554E46]">
              Have a question about a magnet, want to say hello, or checking on an order? I'd love to hear from you.
            </p>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 text-left">
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
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-[#FDFBF7] outline-hidden focus:border-[#C85A32]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#544D44] mb-1">
                  Your Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-[#FDFBF7] outline-hidden focus:border-[#C85A32]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#544D44] mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's on your mind?..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D9CEBF] text-sm bg-[#FDFBF7] outline-hidden focus:border-[#C85A32]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#C85A32] text-white font-bold text-sm hover:bg-[#B34D27] shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE</span>
              </button>

              <p className="text-[11px] text-center text-[#787168]">
                This will prepare an email addressed to {CONFIG.businessEmail}.
              </p>
            </form>
          ) : (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-serif font-bold text-xl text-[#1F1C18]">
                Message Draft Opened
              </h4>
              <p className="text-sm text-[#554E46]">
                If your email application didn't open, write directly to:
              </p>
              <div className="font-mono text-sm font-bold bg-[#FAF6F0] px-4 py-2 rounded-lg inline-block text-[#1F1C18]">
                {CONFIG.businessEmail}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
