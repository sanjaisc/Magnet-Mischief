/**
 * MAGNET MISCHIEF — VANILLA JAVASCRIPT LOGIC
 *
 * Designed for simplicity and easy maintenance by the artisan business owner.
 */

// ==========================================
// 1. CENTRAL CONFIGURATION
// ==========================================
const CONFIG = {
  businessName: "Magnet Mischief",
  // Change your business email address right here:
  businessEmail: "YOUR-GMAIL-ADDRESS@gmail.com",
  currency: "CAD",
  magnetPrice: 5.00, // $5 CAD per magnet
  maxQuantity: 10,
  shippingPrice: 0, // Set to 0 for free standard shipping
  taxRate: 0,
  productionTime: "3–5 business days"
};

console.log("Magnet Mischief initialized. Config:", CONFIG);

// Order State
let currentPhotoData = null;
let currentQuantity = 1;
let currentText = "";

function updateSubtotal() {
  const subtotal = currentQuantity * CONFIG.magnetPrice;
  const total = subtotal + CONFIG.shippingPrice;
  
  const subtotalEl = document.getElementById("subtotal-display");
  const totalEl = document.getElementById("total-display");
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)} CAD`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)} CAD`;
}

function handlePhotoSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    currentPhotoData = e.target.result;
    const previewImg = document.getElementById("magnet-img-preview");
    if (previewImg) {
      previewImg.src = currentPhotoData;
      previewImg.style.display = "block";
    }
    const placeholder = document.getElementById("preview-placeholder");
    if (placeholder) placeholder.style.display = "none";
  };
  reader.readAsDataURL(file);
}

document.addEventListener("DOMContentLoaded", () => {
  const photoInput = document.getElementById("photo-input");
  if (photoInput) {
    photoInput.addEventListener("change", handlePhotoSelect);
  }

  const textInput = document.getElementById("custom-text");
  if (textInput) {
    textInput.addEventListener("input", (e) => {
      currentText = e.target.value;
      const textPreview = document.getElementById("text-preview");
      if (textPreview) textPreview.textContent = currentText;
    });
  }
});
