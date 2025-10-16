// Production configuration for optimal performance

export const PRODUCTION_CONFIG = {
  // Performance monitoring
  PERFORMANCE: {
    ENABLE_MONITORING: process.env.NODE_ENV === "production",
    SAMPLE_RATE: 0.1, // 10% of users
    REPORT_URL: "/api/metrics",
  },

  // Image optimization
  IMAGES: {
    WEBP_SUPPORT: true,
    AVIF_SUPPORT: true,
    LAZY_LOADING: true,
    PLACEHOLDER_BLUR: true,
    MAX_WIDTH: 1920,
    QUALITY: 80,
  },

  // Bundle optimization
  BUNDLE: {
    CHUNK_SIZE_LIMIT: 500, // KB
    MAX_CHUNKS: 20,
    ENABLE_TREE_SHAKING: true,
    REMOVE_DEAD_CODE: true,
  },

  // Caching
  CACHE: {
    STATIC_ASSETS_TTL: 31536000, // 1 year
    HTML_TTL: 3600, // 1 hour
    API_TTL: 300, // 5 minutes
  },

  // Critical resource hints
  RESOURCE_HINTS: {
    PRELOAD_CRITICAL_CSS: true,
    PRELOAD_CRITICAL_FONTS: true,
    PREFETCH_ROUTES: ["/about", "/projects", "/contact"],
  },

  // Service Worker
  SERVICE_WORKER: {
    ENABLED: true,
    CACHE_VERSION: "v1.0.0",
    OFFLINE_FALLBACK: "/index.html",
    BACKGROUND_SYNC: false,
  },

  // Analytics (if needed)
  ANALYTICS: {
    ENABLED: false, // Set to true if you want analytics
    GOOGLE_ANALYTICS_ID: null,
    PLAUSIBLE_DOMAIN: null,
  },
} as const;

// Performance budget
export const PERFORMANCE_BUDGET = {
  FCP: 1800, // ms
  LCP: 2500, // ms
  FID: 100, // ms
  CLS: 0.1,
  TTFB: 800, // ms
  BUNDLE_SIZE: 1000, // KB
  IMAGE_SIZE: 5000, // KB
} as const;

// Critical CSS classes that should be inlined
export const CRITICAL_CSS_CLASSES = [
  // Layout
  "container",
  "mx-auto",
  "px-4",
  "py-8",

  // Typography
  "text-4xl",
  "text-3xl",
  "text-2xl",
  "text-xl",
  "font-bold",
  "font-semibold",

  // Colors
  "bg-background",
  "text-foreground",
  "text-accent",
  "bg-accent",

  // Components
  "button",
  "card",
  "badge",
] as const;
