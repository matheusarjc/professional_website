// Performance configuration for the application

export const PERFORMANCE_CONFIG = {
  // Image optimization settings
  IMAGES: {
    LAZY_LOADING_THRESHOLD: 0.1,
    WEBP_SUPPORT_CHECK: true,
    PLACEHOLDER_BLUR:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=",
  },

  // Animation settings
  ANIMATIONS: {
    REDUCED_MOTION: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    STAGGER_DELAY: 0.1,
    TRANSITION_DURATION: 300,
  },

  // Service Worker settings
  SERVICE_WORKER: {
    CACHE_NAME: "matheus-portfolio-v1",
    CACHE_DURATION: 24 * 60 * 60 * 1000, // 24 hours
    OFFLINE_FALLBACK: "/index.html",
  },

  // Resource loading settings
  RESOURCES: {
    PRELOAD_CRITICAL: true,
    PREFETCH_ON_HOVER: true,
    MAX_CONCURRENT_REQUESTS: 6,
  },

  // Performance monitoring
  MONITORING: {
    ENABLED: process.env.NODE_ENV === "development",
    REPORT_INTERVAL: 5000, // 5 seconds
    METRICS_RETENTION: 100, // Keep last 100 metrics
  },

  // Build optimizations
  BUILD: {
    MINIFY_CSS: true,
    MINIFY_JS: true,
    REMOVE_CONSOLE: process.env.NODE_ENV === "production",
    TREE_SHAKING: true,
    CODE_SPLITTING: true,
  },
} as const;

// Core Web Vitals thresholds
export const WEB_VITALS_THRESHOLDS = {
  FCP: { GOOD: 1800, NEEDS_IMPROVEMENT: 3000 }, // First Contentful Paint
  LCP: { GOOD: 2500, NEEDS_IMPROVEMENT: 4000 }, // Largest Contentful Paint
  FID: { GOOD: 100, NEEDS_IMPROVEMENT: 300 }, // First Input Delay
  CLS: { GOOD: 0.1, NEEDS_IMPROVEMENT: 0.25 }, // Cumulative Layout Shift
  TTFB: { GOOD: 800, NEEDS_IMPROVEMENT: 1800 }, // Time to First Byte
} as const;

// Performance optimization utilities
export const getPerformanceScore = (
  metric: keyof typeof WEB_VITALS_THRESHOLDS,
  value: number
): "good" | "needs-improvement" | "poor" => {
  const thresholds = WEB_VITALS_THRESHOLDS[metric];

  if (value <= thresholds.GOOD) return "good";
  if (value <= thresholds.NEEDS_IMPROVEMENT) return "needs-improvement";
  return "poor";
};

// Resource hints configuration
export const RESOURCE_HINTS = {
  DNS_PREFETCH: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
  PRECONNECT: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
  PRELOAD: ["/src/assets/4bc528308be412047376ac29fba78acc18182ad8.png"],
} as const;
