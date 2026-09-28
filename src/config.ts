/**
 * MAGNET MISCHIEF — CENTRAL CONFIGURATION
 * 
 * The business owner can easily update basic settings here in one spot
 * without modifying any complex code.
 */

export const CONFIG = {
  // Business Identity
  businessName: "Magnet Mischief",
  tagline: "Small Things. Big Personality.",
  ownerName: "Wendy Neilson",
  
  // Business Contact Email
  businessEmail: "info@magnetmischief.ca",
  
  // Phone (Optional, can be left empty)
  businessPhone: "",
  
  // Location
  location: "Ontario, Canada",
  
  // Pricing & Currency
  currency: "CAD",
  currencySymbol: "$",
  magnetPrice: 5.00, // $5 CAD per 3" x 3" magnet
  
  // Quantity limits for standard online orders
  minQuantity: 1,
  maxQuantity: 10,
  
  // Shipping & Taxes
  // (Change shippingPrice to charge shipping, or 0 for free standard shipping)
  shippingPrice: 0, 
  taxRate: 0, // e.g. 0.13 for 13% HST, or 0 for tax-included/exempt
  
  // Production estimate
  productionTime: "3–5 business days",
  
  // Product Dimensions
  dimensions: "3\" × 3\" (approx. 7.6 cm × 7.6 cm)",
  finish: "High-gloss protective finish with flexible artisan magnetic backing",
  
  // Maximum local image size limit for the browser preview (in MB)
  maxFileSizeMB: 15,
  
  // Social media placeholders
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  }
};
