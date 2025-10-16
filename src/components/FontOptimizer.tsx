import { useEffect } from "react";

export function FontOptimizer() {
  useEffect(() => {
    // Minimal font optimization - just ensure font-display: swap
    const style = document.createElement("style");
    style.textContent = `
      * {
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return null;
}
