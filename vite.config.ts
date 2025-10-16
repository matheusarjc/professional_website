import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "vaul@1.1.2": "vaul",
      "sonner@2.0.3": "sonner",
      "recharts@2.15.2": "recharts",
      "react-resizable-panels@2.1.7": "react-resizable-panels",
      "react-hook-form@7.55.0": "react-hook-form",
      "react-day-picker@8.10.1": "react-day-picker",
      "next-themes@0.4.6": "next-themes",
      "lucide-react@0.487.0": "lucide-react",
      "input-otp@1.4.2": "input-otp",
      "figma:asset/ec033549ae459485d1b6ff58d6dedf4fda2c6f3f.png": path.resolve(
        __dirname,
        "./src/assets/ec033549ae459485d1b6ff58d6dedf4fda2c6f3f.png"
      ),
      "figma:asset/4bc528308be412047376ac29fba78acc18182ad8.png": path.resolve(
        __dirname,
        "./src/assets/4bc528308be412047376ac29fba78acc18182ad8.png"
      ),
      "embla-carousel-react@8.6.0": "embla-carousel-react",
      "cmdk@1.1.1": "cmdk",
      "class-variance-authority@0.7.1": "class-variance-authority",
      "@radix-ui/react-tooltip@1.1.8": "@radix-ui/react-tooltip",
      "@radix-ui/react-toggle@1.1.2": "@radix-ui/react-toggle",
      "@radix-ui/react-toggle-group@1.1.2": "@radix-ui/react-toggle-group",
      "@radix-ui/react-tabs@1.1.3": "@radix-ui/react-tabs",
      "@radix-ui/react-switch@1.1.3": "@radix-ui/react-switch",
      "@radix-ui/react-slot@1.1.2": "@radix-ui/react-slot",
      "@radix-ui/react-slider@1.2.3": "@radix-ui/react-slider",
      "@radix-ui/react-separator@1.1.2": "@radix-ui/react-separator",
      "@radix-ui/react-select@2.1.6": "@radix-ui/react-select",
      "@radix-ui/react-scroll-area@1.2.3": "@radix-ui/react-scroll-area",
      "@radix-ui/react-radio-group@1.2.3": "@radix-ui/react-radio-group",
      "@radix-ui/react-progress@1.1.2": "@radix-ui/react-progress",
      "@radix-ui/react-popover@1.1.6": "@radix-ui/react-popover",
      "@radix-ui/react-navigation-menu@1.2.5": "@radix-ui/react-navigation-menu",
      "@radix-ui/react-menubar@1.1.6": "@radix-ui/react-menubar",
      "@radix-ui/react-label@2.1.2": "@radix-ui/react-label",
      "@radix-ui/react-hover-card@1.1.6": "@radix-ui/react-hover-card",
      "@radix-ui/react-dropdown-menu@2.1.6": "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-dialog@1.1.6": "@radix-ui/react-dialog",
      "@radix-ui/react-context-menu@2.2.6": "@radix-ui/react-context-menu",
      "@radix-ui/react-collapsible@1.1.3": "@radix-ui/react-collapsible",
      "@radix-ui/react-checkbox@1.1.4": "@radix-ui/react-checkbox",
      "@radix-ui/react-avatar@1.1.3": "@radix-ui/react-avatar",
      "@radix-ui/react-aspect-ratio@1.1.2": "@radix-ui/react-aspect-ratio",
      "@radix-ui/react-alert-dialog@1.1.6": "@radix-ui/react-alert-dialog",
      "@radix-ui/react-accordion@1.2.3": "@radix-ui/react-accordion",
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    outDir: "build",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        // More aggressive compression
        hoist_funs: true,
        hoist_vars: true,
        reduce_vars: true,
        collapse_vars: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        comparisons: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        if_return: true,
        join_vars: true,
        side_effects: false,
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/,
        },
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // More granular chunking for better caching
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            if (id.includes("motion")) {
              return "motion";
            }
            if (id.includes("lucide")) {
              return "icons";
            }
            if (id.includes("radix")) {
              return "radix-ui";
            }
            if (id.includes("tailwind") || id.includes("clsx")) {
              return "styles";
            }
            return "vendor";
          }

          // Page-specific chunks
          if (id.includes("/pages/")) {
            const pageName = id.split("/pages/")[1]?.split("/")[0];
            return `page-${pageName}`;
          }

          // Component chunks
          if (id.includes("/components/")) {
            return "components";
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".") || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext || "")) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext || "")) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500, // Reduced from 1000
    sourcemap: false, // Disable sourcemaps in production for smaller bundles
  },
  server: {
    port: 3000,
    open: true,
  },
});
