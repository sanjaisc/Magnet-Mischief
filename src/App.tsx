import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductIntro } from "./components/ProductIntro";
import { MagnetStudio } from "./components/MagnetStudio";
import { SampleGallery } from "./components/SampleGallery";
import { GiftingIdeas } from "./components/GiftingIdeas";
import { HowItWorks } from "./components/HowItWorks";
import { MeetTheMaker } from "./components/MeetTheMaker";
import { FridgeShowcase } from "./components/FridgeShowcase";
import { CollageSection } from "./components/CollageSection";
import { FAQ } from "./components/FAQ";
import { ContactSection } from "./components/ContactSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { SuccessSection } from "./components/SuccessSection";
import { LargeOrdersModal } from "./components/LargeOrdersModal";
import { PolicyModal, PolicyType } from "./components/PolicyModal";
import { CancelModal } from "./components/CancelModal";

export default function App() {
  // Navigation & Modal state
  const [isLargeOrdersOpen, setIsLargeOrdersOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  // Success view state (from URL query params or after checkout)
  const [successOrder, setSuccessOrder] = useState<{
    orderNumber: string;
    quantity: number;
    personalizedText: string;
    customerName: string;
    isDemo: boolean;
  } | null>(null);

  useEffect(() => {
    // Check URL parameters on mount
    const params = new URLSearchParams(window.location.search);
    const success = params.get("success");
    const order = params.get("order");
    const qty = parseInt(params.get("qty") || "1", 10);
    const text = params.get("text") || "";
    const name = params.get("name") || "";
    const isDemo = params.get("demo") === "true";
    const canceled = params.get("canceled");

    if (success === "true" && order) {
      setSuccessOrder({
        orderNumber: order,
        quantity: isNaN(qty) ? 1 : qty,
        personalizedText: text,
        customerName: name,
        isDemo
      });
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (canceled === "true") {
      setIsCancelModalOpen(true);
    }
  }, []);

  const scrollToOrder = () => {
    // If on success page, return to main view first
    if (successOrder) {
      setSuccessOrder(null);
      // Clean query params
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    setTimeout(() => {
      const el = document.getElementById("make-magnet");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const handleBackToHome = () => {
    setSuccessOrder(null);
    window.history.replaceState({}, document.title, window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2D2A26]">
      {/* Top Header */}
      <Header
        onOpenLargeOrders={() => setIsLargeOrdersOpen(true)}
        onScrollToOrder={scrollToOrder}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {successOrder ? (
          /* Success Screen (Section 4 & Section 26) */
          <SuccessSection
            orderNumber={successOrder.orderNumber}
            quantity={successOrder.quantity}
            personalizedText={successOrder.personalizedText}
            customerName={successOrder.customerName}
            isDemo={successOrder.isDemo}
            onBackToHome={handleBackToHome}
          />
        ) : (
          /* Full Artisan Storefront */
          <>
            <Hero
              onScrollToOrder={scrollToOrder}
              onOpenLargeOrders={() => setIsLargeOrdersOpen(true)}
            />

            <ProductIntro onScrollToOrder={scrollToOrder} />

            <MagnetStudio />

            <SampleGallery onScrollToOrder={scrollToOrder} />

            <GiftingIdeas onScrollToOrder={scrollToOrder} />

            <HowItWorks onScrollToOrder={scrollToOrder} />

            <MeetTheMaker />

            <FridgeShowcase />

            <CollageSection
              onOpenLargeOrders={() => setIsLargeOrdersOpen(true)}
            />

            <FAQ />

            <ContactSection />

            <FinalCTA
              onScrollToOrder={scrollToOrder}
              onOpenLargeOrders={() => setIsLargeOrdersOpen(true)}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicy={(policy) => setActivePolicy(policy)}
        onOpenLargeOrders={() => setIsLargeOrdersOpen(true)}
        onScrollToOrder={scrollToOrder}
      />

      {/* Modals */}
      <LargeOrdersModal
        isOpen={isLargeOrdersOpen}
        onClose={() => setIsLargeOrdersOpen(false)}
      />

      <PolicyModal
        policyType={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

      <CancelModal
        isOpen={isCancelModalOpen}
        onClose={() => {
          setIsCancelModalOpen(false);
          window.history.replaceState({}, document.title, window.location.pathname);
        }}
        onRetry={() => {
          setIsCancelModalOpen(false);
          window.history.replaceState({}, document.title, window.location.pathname);
          scrollToOrder();
        }}
      />
    </div>
  );
}
