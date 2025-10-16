import { useEffect } from "react";

export function ResourceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      const criticalResources = [
        { href: "/src/assets/4bc528308be412047376ac29fba78acc18182ad8.png", as: "image" },
        { href: "/src/assets/backgroundtrust.png", as: "image" },
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = resource.href;
        link.as = resource.as;
        document.head.appendChild(link);
      });
    };

    // Prefetch next likely resources
    const prefetchResources = () => {
      const prefetchUrls = [
        "/src/pages/About.tsx",
        "/src/pages/Projects.tsx",
        "/src/pages/Contact.tsx",
      ];

      prefetchUrls.forEach((url) => {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = url;
        document.head.appendChild(link);
      });
    };

    // Run optimizations after initial load
    const timer = setTimeout(() => {
      preloadResources();
      prefetchResources();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
