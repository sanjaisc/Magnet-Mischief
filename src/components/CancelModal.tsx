import React from "react";
import { X, ArrowLeft, RefreshCcw } from "lucide-react";

interface CancelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
}

export const CancelModal: React.FC<CancelModalProps> = ({ isOpen, onClose, onRetry }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E3D9C9] text-center">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#F3EDE3] text-[#554E46] hover:bg-[#EBE2D3]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-full bg-[#FFF3E0] text-[#E65100] flex items-center justify-center mx-auto mb-4">
          <RefreshCcw className="w-7 h-7" />
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#1F1C18] mb-2">
          Checkout Was Cancelled
        </h3>

        <p className="text-sm text-[#554E46] leading-relaxed mb-6">
          No charge was made to your card. If you changed your mind or would like to adjust your photo, text, or quantity, your magnet design is still right here!
        </p>

        <div className="space-y-3">
          <button
            type="button"
            onClick={onRetry}
            className="w-full py-3 rounded-full bg-[#C85A32] text-white font-bold text-sm hover:bg-[#B34D27] shadow-xs cursor-pointer"
          >
            Continue Making Magnet
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-full bg-[#EFE9DF] text-[#4A4239] font-medium text-xs hover:bg-[#E3D9C9]"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
