import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import {
  Upload,
  Image as ImageIcon,
  RotateCcw,
  ZoomIn,
  Move,
  X,
  Sparkles,
  Lock,
  ArrowRight,
  Info,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Sliders
} from "lucide-react";
import { CONFIG } from "../config";
import { PhotoGuidelines } from "./PhotoGuidelines";

interface MagnetStudioProps {
  onOrderComplete?: (orderData: any) => void;
}

export const MagnetStudio: React.FC<MagnetStudioProps> = ({ onOrderComplete }) => {
  // Photo State (kept strictly local in browser memory)
  const [photoDataUrl, setPhotoDataUrl] = useState<string | null>(null);
  const [photoFileName, setPhotoFileName] = useState<string>("");
  const [photoDimensions, setPhotoDimensions] = useState<{ width: number; height: number } | null>(null);
  const [photoFileSize, setPhotoFileSize] = useState<string>("");

  // Crop & Transform state
  const [zoom, setZoom] = useState<number>(1.0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Custom text state
  const [customText, setCustomText] = useState<string>("");
  const [textStyle, setTextStyle] = useState<"white-ribbon" | "dark-ribbon" | "minimal">("white-ribbon");

  // Quantity state
  const [quantity, setQuantity] = useState<number>(1);

  // Customer contact state
  const [customerName, setCustomerName] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");

  // Status & checkout state
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Calculations
  const unitPrice = CONFIG.magnetPrice;
  const subtotal = quantity * unitPrice;
  const shipping = CONFIG.shippingPrice;
  const tax = subtotal * CONFIG.taxRate;
  const total = subtotal + shipping + tax;

  const exampleTexts = [
    "Happy Birthday Grandma!",
    "Best Dog Ever",
    "Lake Days 2026",
    "Our Wedding Day",
    "Thank You!"
  ];

  // Handle local photo selection via FileReader
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMsg(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setErrorMsg("That file type isn't supported. Please choose a JPG, PNG or WEBP image.");
      return;
    }

    // Validate size (e.g. 15MB)
    const maxBytes = CONFIG.maxFileSizeMB * 1024 * 1024;
    if (file.size > maxBytes) {
      setErrorMsg(`That photograph is a little too large to preview (over ${CONFIG.maxFileSizeMB}MB). Please choose a smaller file.`);
      return;
    }

    setPhotoFileName(file.name);
    setPhotoFileSize((file.size / (1024 * 1024)).toFixed(2) + " MB");

    // Read locally via FileReader without sending anything to server
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setPhotoDataUrl(result);
      // Reset transforms
      setZoom(1.0);
      setOffsetX(0);
      setOffsetY(0);

      // Measure dimensions
      const img = new Image();
      img.onload = () => {
        setPhotoDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  const handleResetCrop = () => {
    setZoom(1.0);
    setOffsetX(0);
    setOffsetY(0);
  };

  const handleRemovePhoto = () => {
    setPhotoDataUrl(null);
    setPhotoFileName("");
    setPhotoDimensions(null);
    setPhotoFileSize("");
    handleResetCrop();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Drag to reposition preview inside square
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!photoDataUrl) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - offsetX, y: e.clientY - offsetY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setOffsetX(e.clientX - dragStart.x);
    setOffsetY(e.clientY - dragStart.y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Checkout submission
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!photoDataUrl) {
      setErrorMsg("Please choose a photograph before continuing.");
      return;
    }

    if (!customerName.trim() || !customerEmail.trim()) {
      setErrorMsg("Please enter your name and email address for order confirmation.");
      return;
    }

    // Basic email validation
    if (!customerEmail.includes("@") || !customerEmail.includes(".")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Generate unique client reference order number
    const orderNumber = `MM-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantity,
          personalizedText: customText.trim(),
          customerName: customerName.trim(),
          customerEmail: customerEmail.trim(),
          customerPhone: customerPhone.trim(),
          orderNumber
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong with checkout. Please try again.");
      }

      if (data.url) {
        // Redirect customer to Stripe Hosted Checkout (or demo URL)
        window.location.href = data.url;
      } else {
        throw new Error("Did not receive a checkout URL.");
      }
    } catch (err: any) {
      console.error("Checkout error:", err);
      setErrorMsg(err.message || "Something went wrong with checkout. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="make-magnet" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0E6D8] border border-[#E2D4C0] text-xs font-semibold uppercase tracking-wider text-[#6B4F2E] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Artisan Interactive Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1C18] tracking-tight mb-4">
            Make Your Own Magnet
          </h2>
          <p className="text-lg text-[#554E46] leading-relaxed">
            3" × 3" Personalized Magnet — <strong className="text-[#C85A32]">${CONFIG.magnetPrice} CAD EACH</strong>
          </p>
          <p className="text-sm text-[#7D766E] mt-1">
            Your photograph stays completely on your phone or computer. You'll email it to me after placing your order.
          </p>
        </div>

        {/* Main 2-Column Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: Controls (Step 1, Step 2, Step 3, Customer Info) */}
          <div className="lg:col-span-7 space-y-8">
            {/* STEP 1: CHOOSE PHOTO */}
            <div id="step-1-photo" className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-[#EBE3D7]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#C85A32] text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#1F1C18]">
                    Choose Your Photo
                  </h3>
                </div>
                <span className="text-xs font-medium text-[#7C756D] bg-[#F7F3EB] px-2.5 py-1 rounded-md">
                  JPG, PNG, WEBP (Max {CONFIG.maxFileSizeMB}MB)
                </span>
              </div>

              {/* Upload trigger / Status */}
              {!photoDataUrl ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#D9CEBF] hover:border-[#C85A32] rounded-xl p-8 sm:p-10 text-center cursor-pointer transition-colors bg-[#FAF7F2]/60 hover:bg-[#F5EFE6]"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleFileChange}
                    className="hidden"
                    id="photo-file-input"
                  />
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#F0E6D8] text-[#7C5A37] flex items-center justify-center mb-4">
                    <Upload className="w-7 h-7" />
                  </div>
                  <p className="text-base font-semibold text-[#1F1C18] mb-1">
                    Click to choose a photograph from your device
                  </p>
                  <p className="text-xs text-[#7A736B] max-w-sm mx-auto">
                    Select any picture from your phone camera roll or computer. It will only be previewed locally right here.
                  </p>
                  <button
                    type="button"
                    className="mt-5 px-6 py-2.5 rounded-full bg-[#C85A32] text-white font-medium text-sm hover:bg-[#B34D27] shadow-xs"
                  >
                    CHOOSE PHOTO
                  </button>
                </div>
              ) : (
                <div className="bg-[#FAF7F2] rounded-xl p-4 border border-[#E8DFC0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white overflow-hidden shrink-0 border border-[#DDD5C7] shadow-2xs">
                      <img
                        src={photoDataUrl}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left overflow-hidden">
                      <p className="text-sm font-bold text-[#1F1C18] truncate max-w-[200px] sm:max-w-xs">
                        {photoFileName}
                      </p>
                      <p className="text-xs text-[#7A736B]">
                        {photoDimensions ? `${photoDimensions.width} × ${photoDimensions.height} px` : "Image loaded"} • {photoFileSize}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                        <CheckCircle className="w-3 h-3" /> Ready on device
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1 sm:flex-none text-xs font-medium px-3.5 py-2 rounded-lg bg-white hover:bg-[#F3EDE3] border border-[#DDD5C7] text-[#4A4137] transition-colors"
                    >
                      Replace
                    </button>
                    <button
                      type="button"
                      onClick={handleRemovePhoto}
                      className="text-xs font-medium px-3 py-2 rounded-lg bg-[#FBE9E7] hover:bg-[#FFCDD2] text-[#C62828] transition-colors"
                      title="Remove photo"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* STEP 2: PERSONALIZED TEXT */}
            <div id="step-2-text" className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-[#EBE3D7]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#C85A32] text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#1F1C18]">
                      Add a Little Something
                    </h3>
                    <span className="text-xs text-[#7A736B]">Optional personalized text</span>
                  </div>
                </div>
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                    customText.length > 50
                      ? "bg-amber-100 text-amber-900"
                      : "bg-[#F3EDE3] text-[#695F53]"
                  }`}
                >
                  {customText.length} / 60
                </span>
              </div>

              <div className="space-y-3">
                <input
                  id="custom-text-input"
                  type="text"
                  maxLength={60}
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="e.g. Happy Birthday Grandma!"
                  className="w-full px-4 py-3 rounded-xl border border-[#D9CEBF] focus:border-[#C85A32] focus:ring-2 focus:ring-[#C85A32]/20 outline-hidden text-base text-[#1F1C18] bg-[#FDFBF7]"
                />

                <p className="text-xs text-[#787168] flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-[#8C765C] shrink-0" />
                  <span>Shorter messages are generally easier to read on a 3-inch magnet.</span>
                </p>

                {/* Example pills */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#8C765C] uppercase tracking-wider block mb-2">
                    Popular Ideas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exampleTexts.map((example) => (
                      <button
                        key={example}
                        type="button"
                        onClick={() => setCustomText(example)}
                        className="text-xs px-3 py-1.5 rounded-full bg-[#F5EFE6] hover:bg-[#EBE2D3] text-[#4A433A] border border-[#E3D9C9] transition-colors cursor-pointer"
                      >
                        + "{example}"
                      </button>
                    ))}
                    {customText && (
                      <button
                        type="button"
                        onClick={() => setCustomText("")}
                        className="text-xs px-2.5 py-1.5 rounded-full bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
                      >
                        Clear Text
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3: QUANTITY SELECTOR */}
            <div id="step-3-quantity" className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-[#EBE3D7]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#C85A32] text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1F1C18]">
                  How Many?
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFC0]">
                <div>
                  <p className="text-sm font-semibold text-[#1F1C18]">
                    Order 1–25 Magnets
                  </p>
                  <p className="text-xs text-[#7A736B]">
                    ${CONFIG.magnetPrice} CAD each • Same or different recipients
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-[#D9CEBF] bg-white rounded-xl overflow-hidden shadow-2xs">
                    <button
                      id="qty-decrement"
                      type="button"
                      disabled={quantity <= 1}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-11 h-11 flex items-center justify-center text-lg font-bold text-[#332D26] hover:bg-[#F5EFE6] active:bg-[#E8DFD0] disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      –
                    </button>
                    <span className="w-12 text-center font-bold text-lg text-[#1F1C18]">
                      {quantity}
                    </span>
                    <button
                      id="qty-increment"
                      type="button"
                      disabled={quantity >= 25}
                      onClick={() => setQuantity(Math.min(25, quantity + 1))}
                      className="w-11 h-11 flex items-center justify-center text-lg font-bold text-[#332D26] hover:bg-[#F5EFE6] active:bg-[#E8DFD0] disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-[#7A736B] block">Subtotal</span>
                    <span className="text-xl font-bold font-serif text-[#C85A32]">
                      ${subtotal.toFixed(2)} CAD
                    </span>
                  </div>
                </div>
              </div>

              {/* Bulk order notice */}
              <div className="mt-3.5 pt-3 border-t border-[#EBE3D7] flex items-center justify-between text-xs text-[#6F665B]">
                <p>
                  For bulk orders above 25 magnets, please ask about bulk pricing using the{" "}
                  <a
                    href="#contact"
                    className="font-semibold text-[#C85A32] underline hover:text-[#A74421] transition-colors"
                  >
                    form below
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* STEP 4: CUSTOMER DETAILS */}
            <div id="step-4-details" className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-[#EBE3D7]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#C85A32] text-white text-xs font-bold flex items-center justify-center">
                  4
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1F1C18]">
                  Your Details
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-semibold text-[#5A5247] mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9CEBF] focus:border-[#C85A32] outline-hidden text-sm bg-[#FDFBF7]"
                  />
                </div>

                <div>
                  <label htmlFor="customer-email" className="block text-xs font-semibold text-[#5A5247] mb-1">
                    Your Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customer-email"
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9CEBF] focus:border-[#C85A32] outline-hidden text-sm bg-[#FDFBF7]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="customer-phone" className="block text-xs font-semibold text-[#5A5247] mb-1">
                    Phone Number <span className="text-[#8C8379] font-normal">(Optional, if we need to clarify details)</span>
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. (555) 012-3456"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9CEBF] focus:border-[#C85A32] outline-hidden text-sm bg-[#FDFBF7]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Live Magnet Preview & Order Summary */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            {/* The Live Magnet Preview Card */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-[#E0D7C9] text-center">
              <div className="flex items-center justify-between mb-3 text-left">
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1F1C18]">
                    Magnet Preview
                  </h4>
                  <p className="text-[11px] font-medium text-[#7C756D]">
                    Approximate magnet preview (3" × 3" Square)
                  </p>
                </div>
                {photoDataUrl && (
                  <button
                    type="button"
                    onClick={handleResetCrop}
                    className="inline-flex items-center gap-1 text-xs text-[#7C5A37] hover:text-[#523A21] bg-[#F5EFE6] px-2.5 py-1 rounded-md"
                    title="Reset Zoom & Crop"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                )}
              </div>

              {/* The Physical 3" x 3" Magnet Container */}
              <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 my-4">
                {/* 3D Drop shadow and realistic rounded magnet frame */}
                <div
                  className="w-full h-full rounded-2xl bg-white p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.10)] border border-[#D5CCC0] overflow-hidden select-none relative cursor-grab active:cursor-grabbing"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  {/* Glass / Gloss shine specular overlay */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-white/40 pointer-events-none z-20 rounded-xl" />

                  {/* Inner Photo Area */}
                  <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#F0EBE1] flex items-center justify-center">
                    {photoDataUrl ? (
                      <div
                        className="w-full h-full relative"
                        style={{
                          transform: `scale(${zoom}) translate(${offsetX / zoom}px, ${offsetY / zoom}px)`,
                          transition: isDragging ? "none" : "transform 0.1s ease-out"
                        }}
                      >
                        <img
                          src={photoDataUrl}
                          alt="Custom Magnet Preview"
                          className="w-full h-full object-cover pointer-events-none select-none"
                          draggable={false}
                        />
                      </div>
                    ) : (
                      /* Placeholder state */
                      <div className="p-6 text-center text-[#8C8379] space-y-2">
                        <div className="w-12 h-12 mx-auto rounded-full bg-[#EAE2D5] flex items-center justify-center text-[#736A60]">
                          <ImageIcon className="w-6 h-6" />
                        </div>
                        <p className="text-xs font-semibold text-[#5A5247]">
                          Your Photo Will Appear Here
                        </p>
                        <p className="text-[11px] text-[#8C8379]">
                          Click 'Choose Photo' to load an image from your device
                        </p>
                      </div>
                    )}

                    {/* Live Custom Text Ribbon on Magnet */}
                    {customText && (
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-30 pointer-events-none">
                        <div className="bg-white/95 backdrop-blur-xs py-1.5 px-3 rounded-lg shadow-sm border border-white/90 text-center">
                          <p className="font-serif italic font-bold text-xs sm:text-sm text-[#1F1C18] leading-tight break-words">
                            {customText}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Badge for actual size */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#2D2A26] text-[#FDFBF7] px-3 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider shadow-sm z-30 whitespace-nowrap">
                  3" × 3" Handcrafted Magnet
                </div>
              </div>

              {/* Crop Controls (Zoom Slider) */}
              {photoDataUrl && (
                <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DFC0] mt-5 space-y-2 text-left">
                  <div className="flex items-center justify-between text-xs text-[#5C5348] font-medium">
                    <span className="flex items-center gap-1">
                      <ZoomIn className="w-3.5 h-3.5 text-[#C85A32]" />
                      Zoom: {Math.round(zoom * 100)}%
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-[#7C756D]">
                      <Move className="w-3 h-3" /> Drag image to position
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="2.5"
                    step="0.05"
                    value={zoom}
                    onChange={(e) => setZoom(parseFloat(e.target.value))}
                    className="w-full accent-[#C85A32] cursor-pointer"
                  />
                </div>
              )}

              <p className="text-[11px] text-[#7A736B] mt-3">
                Your final magnet will be approximately 3" × 3". Some photographs may require cropping to fit the square format.
              </p>
            </div>

            {/* ORDER SUMMARY & CHECKOUT BOX */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-[#E0D7C9]">
              <h4 className="font-serif font-bold text-lg text-[#1F1C18] pb-3 border-b border-[#EBE3D7] mb-4">
                Order Summary
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-[#554E46]">
                  <span>Product:</span>
                  <span className="font-medium text-[#1F1C18]">3" × 3" Square Magnet</span>
                </div>

                <div className="flex items-center justify-between text-[#554E46]">
                  <span>Quantity:</span>
                  <span className="font-medium text-[#1F1C18]">{quantity} × ${unitPrice.toFixed(2)} CAD</span>
                </div>

                <div className="flex items-center justify-between text-[#554E46]">
                  <span>Personalized Text:</span>
                  <span className="font-medium text-[#1F1C18] truncate max-w-[180px]">
                    {customText ? `"${customText}"` : "None"}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#554E46]">
                  <span>Subtotal:</span>
                  <span className="font-medium text-[#1F1C18]">${subtotal.toFixed(2)} CAD</span>
                </div>

                <div className="flex items-center justify-between text-[#554E46]">
                  <span>Shipping:</span>
                  <span className="text-emerald-700 font-medium">
                    {shipping === 0 ? "FREE Standard Shipping" : `$${shipping.toFixed(2)} CAD`}
                  </span>
                </div>

                {tax > 0 && (
                  <div className="flex items-center justify-between text-[#554E46]">
                    <span>Estimated Tax:</span>
                    <span className="font-medium text-[#1F1C18]">${tax.toFixed(2)} CAD</span>
                  </div>
                )}

                <div className="pt-3 border-t border-[#EBE3D7] flex items-center justify-between">
                  <span className="text-base font-bold text-[#1F1C18]">TOTAL:</span>
                  <span className="font-serif text-2xl font-black text-[#C85A32]">
                    ${total.toFixed(2)} CAD
                  </span>
                </div>
              </div>

              {/* Error notification */}
              {errorMsg && (
                <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2 text-left">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                  <div>
                    <strong className="font-semibold block">Notice</strong>
                    {errorMsg}
                  </div>
                </div>
              )}

              {/* Pay with Stripe Button */}
              <button
                id="pay-with-stripe-btn"
                type="button"
                onClick={handleCheckout}
                disabled={!photoDataUrl || isSubmitting}
                className="w-full mt-6 py-4 rounded-full bg-[#C85A32] hover:bg-[#B34D27] disabled:bg-[#D9CEBF] disabled:cursor-not-allowed text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>{isSubmitting ? "Connecting to Stripe..." : "PAY WITH STRIPE"}</span>
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>

              <div className="mt-3 text-center space-y-1">
                <p className="text-[11px] text-[#787168] flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3 text-[#38764B]" />
                  <span>Secure 256-bit Stripe hosted payment</span>
                </p>
                <p className="text-[11px] text-[#787168]">
                  After payment, you will receive your Order Number and an instant button to email your photograph.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 25: Photo Guidelines Box placed directly near order form */}
        <div className="mt-16">
          <PhotoGuidelines />
        </div>
      </div>
    </section>
  );
};
