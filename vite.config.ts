import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // mapeie apenas assets estáticos necessários:
      "figma:asset/ec033549ae459485d1b6ff58d6dedf4fda2c6f3f.png": path.resolve(
        __dirname,
        "./src/assets/ec033549ae459485d1b6ff58d6dedf4fda2c6f3f.png"
      ),
      "figma:asset/4bc528308be412047376ac29fba78acc18182ad8.png": path.resolve(
        __dirname,
        "./src/assets/4bc528308be412047376ac29fba78acc18182ad8.png"
      ),
    },
  },
  build: {
    target: "es2019",
    outDir: "dist",
    // deixe o chunking padrão do Vite; reduz risco de 'require' errado
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = (assetInfo.name?.split(".").pop() || "").toLowerCase();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/.test(ext))
            return `assets/images/[name]-[hash][extname]`;
          if (/woff2?|eot|ttf|otf/.test(ext)) return `assets/fonts/[name]-[hash][extname]`;
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
  },
  server: { port: 3000, open: true },
});
