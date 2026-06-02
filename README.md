# Altaf Medical Store — Next.js Pharmacy Website

A modern, fast, SEO-friendly **Next.js (App Router)** application converted from the
original static HTML/CSS/JS site. Built for a 24/7 neighborhood pharmacy with full
light/dark mode, smooth animations, skeleton loading, and a fully responsive layout
for phones, tablets, and desktops.

---

## 🚀 Project Goals
- Convert the static "MediCare / Altaf Medical Store" site into a maintainable Next.js app.
- Modern, interactive, accessible UI with light/dark color modes.
- SEO-optimized, fast (image optimization, font optimization, minification).
- Smooth animations and skeleton loading states.
- Fully responsive across all devices.

## ✨ Completed Features
- **App Router architecture** (`app/`) with React Server + Client Components.
- **Light / Dark / System theme** via `next-themes` (persisted, no flash). Toggle in navbar.
- **SEO**: rich `metadata`, Open Graph, Twitter cards, canonical URL, JSON-LD
  `Pharmacy` structured data, dynamic `sitemap.xml`, `robots.txt`, PWA `manifest`.
- **Performance**: `next/font` (Inter + Poppins), AVIF/WebP image formats,
  SWC minify, console stripping in production, lazy-loaded map iframe.
- **Animations** (Framer Motion): scroll-reveal, hero entrance, animated nav pill,
  scroll progress bar, floating badges, marquee testimonials.
- **Skeleton loading**: route-level `loading.jsx` + product-grid shimmer skeletons.
- **Sections**:
  - Hero with particle canvas background, live "open now" badge, stats bar.
  - About (story, trust points).
  - Services grid (6 services with hover effects).
  - Medicine Categories — interactive **search + category filter** with animated grid.
  - Compounding — info + **request modal form** (forwards to WhatsApp).
  - Testimonials — auto-scrolling pause-on-hover carousel.
  - Location — Google Map embed + **geolocation distance calculator** (Haversine).
  - Contact — validated form (forwards to WhatsApp) + accordion FAQ + quick contacts.
- **Floating actions**: pulsing WhatsApp button + back-to-top.
- **Accessibility**: skip link, focus-visible outlines, ARIA labels, reduced-motion support.

## 🗂️ Project Structure
```
app/
  layout.jsx        # Root layout, fonts, SEO metadata, JSON-LD, ThemeProvider
  page.jsx          # Home page (assembles all sections)
  globals.css       # Theme tokens, utilities, skeleton, forms
  loading.jsx       # Route-level skeleton
  not-found.jsx     # 404 page
  sitemap.js / robots.js / manifest.js
components/
  Navbar, Footer, ThemeProvider, ThemeToggle, ScrollProgress,
  Particles, Reveal, SectionHeading, Modal, Icon, FloatingActions
  sections/  Hero, About, Services, Categories, Compounding,
             Testimonials, Location, Contact
lib/
  site.js           # Central store config (name, phone, address, geo, links)
  data.js           # Content: services, categories, products, testimonials, FAQs
public/
  favicon.svg
```

## 🔧 Customization
All store details live in **`lib/site.js`**:
- Store name, tagline, phone, WhatsApp number, email, address, geo coordinates, hours.
- Update `url` after publishing for correct SEO/sitemap absolute URLs.

Content (services, medicine list, testimonials, FAQs) lives in **`lib/data.js`**.

Theme colors are defined in `tailwind.config.js` (`mint`/`brand` palettes) and CSS
tokens in `app/globals.css` (`:root` and `.dark`).

## 🧭 Functional Entry Points (in-page anchors)
| Path | Section |
|------|---------|
| `/#home` | Hero |
| `/#about` | About |
| `/#services` | Services |
| `/#categories` | Medicines (search + filter) |
| `/#compounding` | Compounding (modal form) |
| `/#testimonials` | Reviews carousel |
| `/#location` | Map + distance calculator |
| `/#contact` | Contact form + FAQ |
| `/sitemap.xml` | SEO sitemap |
| `/robots.txt` | Crawler rules |
| `/manifest.webmanifest` | PWA manifest |

## 🛠️ Tech Stack
- **Next.js 14** (App Router) · **React 18**
- **Tailwind CSS 3** (class-based dark mode)
- **Framer Motion** (animations)
- **next-themes** (color mode)
- **lucide-react** (icons)

## ▶️ Run Locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## 📦 Data / Storage Notes
This is a **frontend-only** application. The Compounding and Contact forms do not use
a backend — on submit they open a pre-filled **WhatsApp** message (and/or `mailto:`),
which is the appropriate static-site approach. To persist submissions you could later
add the platform's RESTful Table API.

## 🚧 Not Yet Implemented / Optional Next Steps
- Real backend form persistence (e.g., via the Table API) instead of WhatsApp forwarding.
- Online ordering / cart and checkout.
- Real product database & inventory.
- Multi-language (Hindi/Urdu) support.
- Replace placeholder hero/about graphics with real store photos.
- Add OG/Twitter share image (`/opengraph-image`).

## 🌐 Deployment
To publish and get a live URL, use the **Publish tab** — it handles deployment
automatically. After publishing, update `site.url` in `lib/site.js`.
# Altaf-Medical-Store
