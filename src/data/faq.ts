import { FAQItem } from "../types";
import { CONFIG } from "../config";

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How big are the magnets?",
    answer: "Each magnet is approximately 3\" × 3\" square (about 7.6 cm × 7.6 cm). It's the ideal size for refrigerators, office cabinets, lockers, and magnetic boards."
  },
  {
    question: "How much does one cost?",
    answer: `$${CONFIG.magnetPrice.toFixed(2)} ${CONFIG.currency} each. No hidden fees or setup charges.`
  },
  {
    question: "Can I order just one?",
    answer: "Absolutely! Whether you want just one special photo for your fridge or a handful of gifts, single-magnet orders are always welcome."
  },
  {
    question: "How many can I order online?",
    answer: "You can order between 1 and 10 magnets directly through the online studio on this page. If you need more than 10, please use our Large Order enquiry form!"
  },
  {
    question: "What if I need more than 10?",
    answer: "Use our simple Large Order enquiry form below or click 'Large Orders / Enquire' in the menu. Tell me your estimated quantity and date, and I will be delighted to prepare a friendly quote for your wedding, reunion, party, or business event."
  },
  {
    question: "Can I use a photo from my phone?",
    answer: "Yes, definitely! Most customer photos come directly from iPhones and Android phones. Just select the photo from your device camera roll or gallery."
  },
  {
    question: "What photograph works best?",
    answer: "Clear, sharp, well-lit photographs generally produce the best results. Try to avoid dark, blurry, or heavily compressed screenshots. Make sure important faces aren't right against the very edge."
  },
  {
    question: "Can I add text?",
    answer: "Yes! You can add up to 60 characters of personalized text (names, dates, inside jokes, or greetings). Shorter messages are generally easier to read on a 3-inch magnet."
  },
  {
    question: "Can you make collages?",
    answer: "Yes! If one picture wasn't enough, I can combine several photographs into one slightly mischievous mini-collage. Simply mention that in the Large Order form or email after placing your order."
  },
  {
    question: "Will my photo be cropped?",
    answer: "Possibly. Because the finished magnet is a 3\" × 3\" square, rectangular or portrait photos will be cropped to fit. Our interactive studio allows you to preview, zoom, and reposition your square crop before ordering."
  },
  {
    question: "Where does my photograph go?",
    answer: "The photograph you select on the website is only used locally inside your web browser for previewing your magnet. It is never uploaded to a database or server. After payment, you email the actual photograph directly to Magnet Mischief."
  },
  {
    question: "How do I send my photograph?",
    answer: "After your payment is completed on Stripe, the success page will give you your unique order number and an 'EMAIL MY PHOTO' button. Clicking it opens a pre-filled email draft where you simply attach your photo and hit Send!"
  },
  {
    question: "What if the email button doesn't work?",
    answer: `If your computer or phone doesn't automatically open an email app, simply open your usual email (like Gmail or Yahoo), address an email to ${CONFIG.businessEmail}, include your Order Number in the subject line, attach your photograph, and send it over.`
  },
  {
    question: "How long does it take?",
    answer: `Each magnet is handcrafted individually. Current production time is approximately ${CONFIG.productionTime}, after which your order is packaged safely and dispatched.`
  },
  {
    question: "Do you ship?",
    answer: `Yes, we ship across Canada (and to the US upon request). Standard shipping is currently ${CONFIG.shippingPrice === 0 ? "FREE" : `$${CONFIG.shippingPrice.toFixed(2)}`}. Local pickup can also be arranged if you are nearby.`
  }
];
