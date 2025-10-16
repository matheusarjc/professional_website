// Performance monitoring and optimization utilities

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Measure function execution time
  measureFunction<T extends (...args: any[]) => any>(fn: T, name: string): T {
    return ((...args: Parameters<T>) => {
      const start = performance.now();
      const result = fn(...args);
      const end = performance.now();

      this.metrics.set(name, end - start);

      if (process.env.NODE_ENV === "development") {
        console.log(`⏱️ ${name}: ${(end - start).toFixed(2)}ms`);
      }

      return result;
    }) as T;
  }

  // Measure async function execution time
  async measureAsyncFunction<T extends (...args: any[]) => Promise<any>>(
    fn: T,
    name: string
  ): Promise<ReturnType<T>> {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();

    this.metrics.set(name, end - start);

    if (process.env.NODE_ENV === "development") {
      console.log(`⏱️ ${name}: ${(end - start).toFixed(2)}ms`);
    }

    return result;
  }

  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics.clear();
  }

  // Report Core Web Vitals
  reportWebVitals(): void {
    if (typeof window !== "undefined" && "web-vitals" in window) {
      // This would integrate with web-vitals library if available
      console.log("📊 Web Vitals monitoring enabled");
    }
  }
}

// Throttle function for performance optimization
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): T {
  let inThrottle: boolean;

  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as T;
}

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout;

  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  }) as T;
}

// Optimize images loading
export function optimizeImageLoading(): void {
  // Intersection Observer for lazy loading
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            imageObserver.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src
    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

// Initialize performance optimizations
export function initializePerformanceOptimizations(): void {
  const monitor = PerformanceMonitor.getInstance();

  // Report web vitals
  monitor.reportWebVitals();

  // Optimize image loading
  optimizeImageLoading();

  // Preload critical resources
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", optimizeImageLoading);
  } else {
    optimizeImageLoading();
  }
}
