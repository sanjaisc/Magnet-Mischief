import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import Stripe from "stripe";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy Stripe initialization to prevent crashing if secret key is not yet set
let stripeClient: Stripe | null = null;
function getStripe(): Stripe | null {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) return null;
  if (!stripeClient) {
    stripeClient = new Stripe(secret);
  }
  return stripeClient;
}

// Health check
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    hasStripeKey: Boolean(process.env.STRIPE_SECRET_KEY),
    timestamp: new Date().toISOString()
  });
});

// Create Stripe Checkout Session endpoint
app.post("/api/create-checkout-session", async (req: Request, res: Response): Promise<void> => {
  try {
    const { quantity, personalizedText, customerName, customerEmail, orderNumber } = req.body;

    // Validate quantity (1 - 25)
    const qty = parseInt(quantity, 10);
    if (isNaN(qty) || qty < 1 || qty > 25) {
      res.status(400).json({ error: "Quantity must be between 1 and 25." });
      return;
    }

    const orderRef = orderNumber || `MM-${Math.floor(1000 + Math.random() * 9000)}`;
    const origin = req.headers.origin || `http://localhost:${PORT}`;
    const stripe = getStripe();

    if (!stripe) {
      // Demo / preview mode: When STRIPE_SECRET_KEY is not configured yet in .env,
      // return a graceful test redirection URL so user can preview the full success flow!
      console.log(`[Stripe Demo Mode] Order ${orderRef} processed without STRIPE_SECRET_KEY. Returning demo redirect.`);
      res.json({
        url: `${origin}/?success=true&order=${encodeURIComponent(orderRef)}&qty=${qty}&text=${encodeURIComponent(personalizedText || "")}&name=${encodeURIComponent(customerName || "")}&demo=true#success-section`,
        demo: true,
        orderNumber: orderRef,
        message: "Stripe key not configured in .env. Running in interactive demo mode."
      });
      return;
    }

    // Real Stripe Checkout Session creation
    const unitAmountCents = 500; // $5.00 CAD in cents

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: `Personalized 3" × 3" Square Magnet`,
              description: personalizedText
                ? `Custom Text: "${personalizedText}" (Ref: ${orderRef})`
                : `Custom Photo Magnet (Ref: ${orderRef})`,
              images: [`${origin}/images/hero-magnet.jpg`]
            },
            unit_amount: unitAmountCents
          },
          quantity: qty
        }
      ],
      mode: "payment",
      customer_email: customerEmail || undefined,
      metadata: {
        orderNumber: orderRef,
        quantity: qty.toString(),
        personalizedText: personalizedText || "None",
        customerName: customerName || "Not provided",
        customerEmail: customerEmail || "Not provided"
      },
      success_url: `${origin}/?session_id={CHECKOUT_SESSION_ID}&order=${encodeURIComponent(orderRef)}&qty=${qty}&text=${encodeURIComponent(personalizedText || "")}&name=${encodeURIComponent(customerName || "")}&success=true#success-section`,
      cancel_url: `${origin}/?canceled=true#order-section`
    });

    res.json({ url: session.url, orderNumber: orderRef });
  } catch (error: any) {
    console.error("Stripe session creation error:", error);
    res.status(500).json({ error: error.message || "Failed to create checkout session" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Magnet Mischief server running at http://localhost:${PORT}`);
  });
}

startServer();
