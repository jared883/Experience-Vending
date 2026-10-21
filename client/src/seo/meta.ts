// Central SEO config: per-route <title>/description + site-wide structured data.
// Used both by the client (usePageMeta) and by the build-time prerender
// (script/build.ts), so crawlers and browsers always see the same tags.

export const SITE_URL = "https://experiencevending.com";
export const SITE_NAME = "Experience Vending";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface PageMeta {
  title: string;
  description: string;
  /** Canonical path (defaults to the route itself). */
  canonical?: string;
  /** Set for pages that shouldn't be indexed (e.g. 404). */
  noindex?: boolean;
}

export const ROUTE_META: Record<string, PageMeta> = {
  "/": {
    title: "Photo Booth Rental Fort Worth & DFW | Experience Vending",
    description:
      "Luxury photo booths in Fort Worth and Dallas–Fort Worth. We place fully managed photo booths in bars, breweries, restaurants and venues, and rent booths for weddings, corporate events and parties.",
  },
  "/our-booth": {
    title: "Our Photo Booths – Photoma Mini & Photoma Booth | Experience Vending DFW",
    description:
      "Meet our two professional photo booth models, the Photoma Mini and the full-size Photoma Booth: DSLR-quality photos, instant prints and digital sharing, fully managed by our Fort Worth team.",
  },
  "/partner": {
    title: "Photo Booth for Bars & Venues in Fort Worth | Get a Booth | Experience Vending",
    description:
      "Get a luxury photo booth placed in your bar, brewery, restaurant or venue in Fort Worth and DFW at no cost to you. We install, maintain and service everything. Apply in minutes.",
  },
  "/rentals": {
    title: "Photo Booth Rentals for Weddings & Events in Fort Worth & DFW | Experience Vending",
    description:
      "Rent a luxury photo booth for your wedding, corporate event, birthday or party in Fort Worth and Dallas. 4–8 hour packages with unlimited prints and digital photos, an on-site attendant, setup and teardown.",
  },
  "/book": {
    title: "Photo Booth Rentals for Weddings & Events in Fort Worth & DFW | Experience Vending",
    description:
      "Rent a luxury photo booth for your wedding, corporate event, birthday or party in Fort Worth and Dallas. 4–8 hour packages with unlimited prints and digital photos, an on-site attendant, setup and teardown.",
    canonical: "/rentals",
  },
  "/contact": {
    title: "Contact Us | Experience Vending Photo Booths, Fort Worth TX",
    description:
      "Questions about a photo booth rental or placing a booth at your venue? Contact Experience Vending in Fort Worth: (940) 327-7045, (817) 897-0460 or jared@experiencevending.com.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Experience Vending",
    description: "Privacy policy for Experience Vending LLC, luxury photo booths in Fort Worth and Dallas–Fort Worth, Texas.",
  },
  "/terms": {
    title: "Terms & Conditions | Experience Vending",
    description: "Terms and conditions for Experience Vending LLC photo booth rentals and venue placements in Dallas–Fort Worth, Texas.",
  },
};

export const NOT_FOUND_META: PageMeta = {
  title: "Page Not Found | Experience Vending",
  description: "The page you are looking for doesn't exist or has been moved.",
  noindex: true,
};

export function getPageMeta(path: string): PageMeta {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  return ROUTE_META[clean] ?? NOT_FOUND_META;
}

export function canonicalUrl(path: string, meta: PageMeta): string {
  const p = meta.canonical ?? (path.split(/[?#]/)[0].replace(/\/+$/, "") || "/");
  return p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`;
}

/** Routes that get a prerendered HTML file and a sitemap entry. */
export const INDEXABLE_ROUTES = ["/", "/our-booth", "/partner", "/rentals", "/contact", "/privacy-policy", "/terms"];

/** Site-wide LocalBusiness structured data — only facts present on the site. */
export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Experience Vending LLC",
  alternateName: "Experience Vending Photo Booths",
  description:
    "Luxury photo booths in Fort Worth and Dallas–Fort Worth: fully managed photo booth placements for bars, breweries, restaurants and venues, plus photo booth rentals for weddings, corporate events and parties.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: OG_IMAGE,
  email: "jared@experiencevending.com",
  telephone: "+1-940-327-7045",
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+1-940-327-7045", email: "jared@experiencevending.com", contactType: "customer service", areaServed: "US-TX" },
    { "@type": "ContactPoint", telephone: "+1-817-897-0460", email: "kylee@experiencevending.com", contactType: "customer service", areaServed: "US-TX" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fort Worth",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Fort Worth, TX" },
    { "@type": "City", name: "Dallas, TX" },
    { "@type": "City", name: "Arlington, TX" },
    { "@type": "City", name: "Frisco, TX" },
    { "@type": "City", name: "Plano, TX" },
    { "@type": "AdministrativeArea", name: "Dallas–Fort Worth metroplex" },
  ],
  sameAs: ["https://www.instagram.com/experiencevending"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photo booth services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photo booth rental for weddings, corporate events and parties", areaServed: "Dallas–Fort Worth, TX" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fully managed photo booth placement for bars, restaurants and venues", areaServed: "Dallas–Fort Worth, TX" } },
    ],
  },
};

export const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  publisher: { "@id": `${SITE_URL}/#business` },
};

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Head tags for a route, as an HTML string (used by the prerender step). */
export function renderHeadTags(path: string): string {
  const meta = getPageMeta(path);
  const url = canonicalUrl(path, meta);
  const t = esc(meta.title);
  const d = esc(meta.description);
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    meta.noindex ? `<meta name="robots" content="noindex, follow" />` : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    meta.noindex ? "" : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Experience Vending Photo Booths logo" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ]
    .filter(Boolean)
    .join("\n    ");
}
