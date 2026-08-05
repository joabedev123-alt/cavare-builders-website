# Cavare Builders LLC — Premium Institutional Website

A production-ready, highly responsive, luxury institutional web application built for **Cavare Builders LLC** (construction, remodeling, and interior transformations in Broward County and Palm Beach County, Florida).

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Bootstrap Icons (`bootstrap-icons`)
- **SEO**: Dynamic metadata, OpenGraph cards, `sitemap.ts`, `robots.ts`, and Schema.org JSON-LD (`GeneralContractor`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`)
- **Fonts**: Google Fonts (`Cormorant Garamond` serif & `Manrope` sans-serif)

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Build production bundle:
   ```bash
   npm run build
   ```

4. Start production server:
   ```bash
   npm start
   ```

---

## How to Customize Company Data & Content

All content, contact details, project portfolios, services, and FAQ items are centralized in the `src/data/` folder for seamless maintenance.

### 1. Replacing Contact Information & Company Details
Edit `src/data/company.ts`:
- Update phone number: `phoneDisplay`, `phoneRaw`, `phoneInternational`
- Update WhatsApp number: `whatsappNumber`
- Update service counties or business availability

### 2. Replacing Services & Service Images
Edit `src/data/services.ts`:
- Modify descriptions, highlights, Bootstrap icons, or image URLs.

### 3. Replacing Portfolio Projects & Real Photos
Edit `src/data/projects.ts`:
- Replace mock project entries with official project titles, category tags, before/after images, interventions executed, and materials lists.

### 4. Updating FAQs
Edit `src/data/faqs.ts`:
- Add or edit questions and answers displayed in the home page accordion.

### 5. Configuring the Contact Form Endpoint
Create a `.env.local` file based on `.env.example`:
```env
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://your-api-endpoint.com/submit
```
*Note: If no endpoint is set, the contact form automatically fallback-redirects submission parameters directly to WhatsApp with pre-formatted inquiry text.*

### 6. Replacing the Temporary Monogram / Logo
The temporary vector signature monogram is built inside `src/components/ui/Logo.tsx`. To replace it with an official SVG logo file in the future:
1. Place your new SVG logo into `public/logo.svg`.
2. Update `src/components/ui/Logo.tsx` to render `<Image src="/logo.svg" ... />`.

---

## Design System Summary

- **70% Light / Neutral Backgrounds**: Ivory Marble (`#F6F2EB`), Natural Stone (`#E6E2DA`), Pure White (`#FFFFFF`).
- **20% High-Contrast Dark Accent Sections**: Matte Black (`#0D0D0D`), Dark Warm Gray (`#1A1917`).
- **10% Refined Accents**: Brushed Gold (`#C8A561`), Light Walnut (`#C8A47A`), Natural Oak (`#E1C79B`).
- **Typography**: Editorial high-contrast pairing of `Cormorant Garamond` serif headings and clean `Manrope` sans-serif body text.
- **Accessibility**: WCAG 2.1 AA focus rings, semantic tags, logical tab order, skip links, aria-labels, and `prefers-reduced-motion` support.
