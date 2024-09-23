import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import rollupPreserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

// https://vitejs.dev/config/
// @see https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [
    react(),
    rollupPreserveDirectives(), // to preserve directives like `use client`
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
    }),
  ],
  build: {
    sourcemap: true,
    // minify: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.devDependencies),
        "/node_modules/",
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
