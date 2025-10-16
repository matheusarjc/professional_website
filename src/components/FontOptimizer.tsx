import { useEffect } from "react";

export function FontOptimizer() {
  useEffect(() => {
    // Preload critical fonts
    const preloadFonts = () => {
      const fontUrls = [
        // Add your critical font URLs here
        "https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&family=Poppins:wght@400;700&display=swap",
      ];

      fontUrls.forEach((url) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "style";
        link.href = url;
        link.onload = () => {
          link.rel = "stylesheet";
        };
        document.head.appendChild(link);
      });
    };

    // Only preload fonts if not already loaded
    if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
      preloadFonts();
    }
  }, []);

  return null;
}
