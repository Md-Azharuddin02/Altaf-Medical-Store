// ================================================================
// CENTRAL SITE CONFIG — change all store details in one place
// ================================================================

export const site = {
  name: "Altaf Medical Store",
  shortName: "Altaf Medical",

  tagline: "Open 24/7",

  description:
    "Altaf Medical Store is a trusted pharmacy in Mohiudinpur Pakri, Bihar offering genuine medicines, healthcare products, home delivery, and emergency support 24 hours a day.",

  // Replace after deployment
  url: "https://your-domain.com",

  locale: "en_IN",

  phone: "+91 7050071388",
  phoneRaw: "7050071388",

  whatsapp: "7050071388",
  whatsappIntl: "917050071388",

  // Replace with your real email
  email: "contact@altafmedical.in",

  address:
    "369C+85C, Pakri - Pohaddi Rd, Ashapur - Alinagar Rd, Mohiudinpur Pakri, Bihar 847103",

  geo: {
    lat: 26.0681029,
    lng: 86.2207534,
  },

  placeName: "Altaf Medical Store",

  hours: "Open 24 Hours · 7 Days a Week",

  established: "2008",
};

// ================================================================
// NAVIGATION
// ================================================================

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Medicines", href: "#categories" },
  { label: "Compounding", href: "#compounding" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

// ================================================================
// CONTACT LINKS
// ================================================================

export const whatsappLink = (
  text = "Hello! I'd like to know more about Altaf Medical Store."
) =>
  `https://wa.me/${site.whatsappIntl}?text=${encodeURIComponent(text)}`;

export const telLink = `tel:${site.phoneRaw}`;

// Opens navigation directly to the store
export const mapsLink =
  `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`;

// Opens Google Maps search
export const mapsSearchLink =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.placeName}, ${site.address}`
  )}`;

// ================================================================
// MAP EMBED
// ================================================================

// Most reliable iframe URL
export const embedMap =
  `https://maps.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=18&output=embed`;

// ================================================================
// SEO
// ================================================================

export const seo = {
  title: "Altaf Medical Store | Pharmacy in Mohiudinpur Pakri, Bihar",

  description:
    "Altaf Medical Store provides genuine medicines, healthcare products, emergency support, and home delivery services in Mohiudinpur Pakri, Bihar.",

  keywords: [
    "Altaf Medical Store",
    "Medical Store Bihar",
    "Pharmacy Bihar",
    "Medicine Shop Bihar",
    "24 Hour Pharmacy",
    "Medical Store Mohiudinpur Pakri",
    "Healthcare Products Bihar",
    "Emergency Medicines",
  ],

  openGraph: {
    title: "Altaf Medical Store",
    description:
      "Trusted pharmacy serving Mohiudinpur Pakri, Bihar with genuine medicines and healthcare services.",
    type: "website",
    locale: "en_IN",
  },
};