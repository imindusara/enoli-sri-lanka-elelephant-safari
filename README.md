# Enoli Sri Lanka Elephant Safari — Website Documentation

A premium, modern, responsive multi-page website built with React, TypeScript, Vite, and Tailwind CSS v4.

## Folder Structure

```text
ceylon-nest-journeys/
├── dist/                  # Production builds (generated via npm run build)
├── public/                # Static assets (favicons, manifest, etc.)
├── src/
│   ├── assets/            # Component-specific images and local media
│   ├── components/        # Reusable global layout and form components
│   │   ├── Navbar.tsx     # Sticky navigation with tours dropdown
│   │   ├── Footer.tsx     # Site footer with contacts & links
│   │   ├── FloatingWhatsApp.tsx # Sticky animated WhatsApp widget
│   │   ├── TourCard.tsx   # Reusable card component for tours list
│   │   └── BookingForm.tsx # Enquiry form with client validation & WhatsApp option
│   ├── data/
│   │   └── tours.ts       # Tour descriptions, details, inclusions & lists
│   ├── hooks/
│   │   └── useScrollReveal.ts # IntersectionObserver scroll fade-in & routing utility
│   ├── pages/             # Route-specific page components
│   │   ├── Home.tsx       # Homepage (Hero, Why Choose Us, Steps, Testimonials)
│   │   ├── Tours.tsx      # Tours category page (Day/Multi-day toggle filter)
│   │   ├── TourDetail.tsx # Full tour itinerary, highlights, inclusions/exclusions
│   │   ├── About.tsx      # Company story, vision, mission, and team
│   │   └── Contact.tsx    # Inquiry forms, maps, office locations
│   ├── App.tsx            # Routes configurations
│   ├── index.css          # Theme setup, Tailwind imports, custom font variables
│   └── main.tsx           # React bootstrap entry point
├── index.html             # Main document (SEO title & description meta)
├── package.json           # Scripts and dependencies
└── vite.config.ts         # Vite build and Tailwind configuration
```

## How to Edit Content

### 1. WhatsApp Number
To change the WhatsApp phone number that users chat with, modify the default props or parameters:
- In [FloatingWhatsApp.tsx](file:///C:/Users/HASHAN/.gemini/antigravity-ide/scratch/ceylon-nest-journeys/src/components/FloatingWhatsApp.tsx#L9), change the phone number in `phoneNumber = '+94770000000'`.
- In [BookingForm.tsx](file:///C:/Users/HASHAN/.gemini/antigravity-ide/scratch/ceylon-nest-journeys/src/components/BookingForm.tsx#L55), update the WhatsApp link phone number `wa.me/94770000000`.
- In [Contact.tsx](file:///C:/Users/HASHAN/.gemini/antigravity-ide/scratch/ceylon-nest-journeys/src/pages/Contact.tsx#L19), update the WhatsApp list details and link.

### 2. Branding & Colors
Tailwind CSS v4 handles configuration inside the `@theme` block in [index.css](file:///C:/Users/HASHAN/.gemini/antigravity-ide/scratch/ceylon-nest-journeys/src/index.css#L5). You can change the primary and accent colors to any hex code you wish:
```css
@theme {
  --color-primary: #1E3A2F;      /* Change deep forest green */
  --color-accent: #C87A53;       /* Change warm terracotta */
  --color-cream: #FBF9F4;        /* Change background cream */
}
```

### 3. Tour Descriptions & Images
All tour details (highlights, inclusions, exclusions, overview paragraphs, and images) are centralized in [tours.ts](file:///C:/Users/HASHAN/.gemini/antigravity-ide/scratch/ceylon-nest-journeys/src/data/tours.ts). Simply modify or add objects to the `toursData` array to update the website immediately.

### 4. Contact Form Endpoint
The contact form in [BookingForm.tsx](file:///C:/Users/HASHAN/.gemini/antigravity-ide/scratch/ceylon-nest-journeys/src/components/BookingForm.tsx#L38) currently simulates submissions with a timeout. To hook it up to a real endpoint:
- Replace the submission code in `handleFormSubmit` with an API call (e.g. `fetch('/api/inquire')` or Formspree/Web3Forms endpoint URL).

---

## Deployment Recommendations

1. **Vercel** (Highly Recommended)
   - Push this codebase to GitHub.
   - Go to [vercel.com](https://vercel.com) and import the repository.
   - Vercel will automatically detect Vite and build the project with zero configuration.

2. **Netlify**
   - Import the repository on [netlify.com](https://netlify.com).
   - Set Build command to `npm run build` and Publish directory to `dist`.

## Backend & CRM Integration Recommendations

If you want to transition from WhatsApp-based enquiries to a structured booking platform later:
1. **Web3Forms / Formspree**: Very simple endpoints to receive forms directly in your inbox without configuring a server.
2. **Strapi / Sanity CMS**: To manage tour details, itineraries, and gallery pictures dynamically via a dashboard instead of editing code.
3. **Bokun / FareHarbor**: Dedicated booking engines for tour operators. They handle calendars, availability, ticket reservation, and payment gateways seamlessly.
