// vite.config.ts
import { resolve } from "node:path";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.mjs";
import rollupPreserveDirectives from "file:///home/project/node_modules/rollup-preserve-directives/dist/es/index.mjs";
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import dts from "file:///home/project/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "glasscn-ui",
  version: "0.7.1",
  homepage: "https://itsjavi.com/glasscn-ui",
  repository: {
    type: "git",
    url: "https://github.com/itsjavi/glasscn-ui.git"
  },
  license: "MIT",
  type: "module",
  exports: {
    ".": {
      import: "./dist/index.js",
      require: "./dist/index.js"
    },
    "./style.css": "./dist/style.css"
  },
  main: "./dist/index.js",
  module: "./dist/index.js",
  types: "./dist/index.d.ts",
  files: [
    "dist",
    "src",
    "README.md",
    "LICENSE"
  ],
  scripts: {
    build: "tsc -b && vite build && pnpm build:postprocess",
    "build:postprocess": "rm -r dist/bgs dist/glasscn-ui",
    "build:storybook": "storybook build",
    dev: "pnpm storybook",
    format: "pnpm lint:fix",
    lint: "pnpm typecheck && prettier --check ./src ./stories ./.storybook ./.github",
    "lint:fix": "sort-package-json && pnpm prettify",
    prepare: "husky && sort-package-json",
    prepublishOnly: "pnpm run lint && pnpm run build && publint",
    prettify: "prettier --write ./src ./stories ./.storybook ./.github",
    release: "standard-version",
    storybook: "storybook dev -p 6006",
    test: 'echo "No tests yet"',
    "test:ci": 'echo "No tests yet"',
    typecheck: "tsc --build --noEmit",
    "upgrade-deps": "pnpm update --latest"
  },
  dependencies: {
    "@radix-ui/react-accordion": "^1.2.1",
    "@radix-ui/react-alert-dialog": "^1.1.2",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.1",
    "@radix-ui/react-checkbox": "^1.1.2",
    "@radix-ui/react-collapsible": "^1.1.1",
    "@radix-ui/react-context-menu": "^2.2.2",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.2",
    "@radix-ui/react-hover-card": "^1.1.2",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.2",
    "@radix-ui/react-navigation-menu": "^1.2.1",
    "@radix-ui/react-popover": "^1.1.2",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.1",
    "@radix-ui/react-scroll-area": "^1.2.1",
    "@radix-ui/react-select": "^2.1.2",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.1",
    "@radix-ui/react-tabs": "^1.1.1",
    "@radix-ui/react-toast": "^1.2.2",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.4",
    "class-variance-authority": "^0.7.0",
    cmdk: "1.0.4",
    "framer-motion": "^12.23.0",
    "input-otp": "^1.4.1",
    "react-resizable-panels": "^2.1.7",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    vaul: "^1.1.1"
  },
  devDependencies: {
    "@commitlint/config-conventional": "^19.6.0",
    "@storybook/addon-docs": "^8.4.5",
    "@storybook/addon-essentials": "^8.4.5",
    "@storybook/addon-interactions": "^8.4.5",
    "@storybook/addon-links": "^8.4.5",
    "@storybook/addon-themes": "^8.4.5",
    "@storybook/blocks": "^8.4.5",
    "@storybook/components": "^8.4.5",
    "@storybook/icons": "^1.2.12",
    "@storybook/manager-api": "^8.4.5",
    "@storybook/preview-api": "^8.4.5",
    "@storybook/react": "^8.4.5",
    "@storybook/react-vite": "^8.4.5",
    "@storybook/test": "^8.4.5",
    "@storybook/theming": "^8.4.5",
    "@types/node": "^22.9.3",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react-swc": "^3.7.1",
    autoprefixer: "^10.4.20",
    clsx: "^2.1.1",
    commitlint: "^19.6.0",
    "eslint-plugin-better-tailwindcss": "^3.4.4",
    globals: "^15.12.0",
    husky: "^9.1.7",
    "lucide-react": "^0.460.0",
    postcss: "^8.4.49",
    prettier: "^3.3.3",
    publint: "^0.2.12",
    react: "^18.3.1",
    "react-dom": "^18.3.1",
    "rollup-preserve-directives": "^1.1.3",
    "sort-package-json": "^2.12.0",
    "standard-version": "^9.5.0",
    storybook: "^8.4.5",
    tailwindcss: "^3.4.15",
    typescript: "^5.7.2",
    vite: "^5.4.11",
    "vite-plugin-dts": "^4.3.0"
  },
  packageManager: "pnpm@9.12.2",
  publishConfig: {
    access: "public"
  }
};

// vite.config.ts
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    rollupPreserveDirectives(),
    // to preserve directives like `use client`
    dts({
      tsconfigPath: resolve(__vite_injected_original_dirname, "tsconfig.app.json")
    })
  ],
  build: {
    sourcemap: true,
    // minify: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index"
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        ...Object.keys(package_default.dependencies),
        ...Object.keys(package_default.devDependencies),
        "/node_modules/"
      ]
    }
  },
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJub2RlOnBhdGhcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcm9sbHVwUHJlc2VydmVEaXJlY3RpdmVzIGZyb20gXCJyb2xsdXAtcHJlc2VydmUtZGlyZWN0aXZlc1wiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHBrZyBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbi8vIEBzZWUgaHR0cHM6Ly92aXRlanMuZGV2L2d1aWRlL2J1aWxkLmh0bWwjbGlicmFyeS1tb2RlXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICByb2xsdXBQcmVzZXJ2ZURpcmVjdGl2ZXMoKSwgLy8gdG8gcHJlc2VydmUgZGlyZWN0aXZlcyBsaWtlIGB1c2UgY2xpZW50YFxuICAgIGR0cyh7XG4gICAgICB0c2NvbmZpZ1BhdGg6IHJlc29sdmUoX19kaXJuYW1lLCBcInRzY29uZmlnLmFwcC5qc29uXCIpLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAvLyBtaW5pZnk6IGZhbHNlLFxuICAgIGxpYjoge1xuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgZm9ybWF0czogW1wiZXNcIl0sXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgXCJyZWFjdFwiLFxuICAgICAgICBcInJlYWN0LWRvbVwiLFxuICAgICAgICBcInJlYWN0L2pzeC1ydW50aW1lXCIsXG4gICAgICAgIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIsXG4gICAgICAgIC4uLk9iamVjdC5rZXlzKHBrZy5kZXBlbmRlbmNpZXMpLFxuICAgICAgICAuLi5PYmplY3Qua2V5cyhwa2cuZGV2RGVwZW5kZW5jaWVzKSxcbiAgICAgICAgXCIvbm9kZV9tb2R1bGVzL1wiLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJnbGFzc2NuLXVpXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuNy4xXCIsXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2l0c2phdmkuY29tL2dsYXNzY24tdWlcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pdHNqYXZpL2dsYXNzY24tdWkuZ2l0XCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLlwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L2luZGV4LmpzXCJcbiAgICB9LFxuICAgIFwiLi9zdHlsZS5jc3NcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCJcbiAgfSxcbiAgXCJtYWluXCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICBcImZpbGVzXCI6IFtcbiAgICBcImRpc3RcIixcbiAgICBcInNyY1wiLFxuICAgIFwiUkVBRE1FLm1kXCIsXG4gICAgXCJMSUNFTlNFXCJcbiAgXSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwidHNjIC1iICYmIHZpdGUgYnVpbGQgJiYgcG5wbSBidWlsZDpwb3N0cHJvY2Vzc1wiLFxuICAgIFwiYnVpbGQ6cG9zdHByb2Nlc3NcIjogXCJybSAtciBkaXN0L2JncyBkaXN0L2dsYXNzY24tdWlcIixcbiAgICBcImJ1aWxkOnN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBidWlsZFwiLFxuICAgIFwiZGV2XCI6IFwicG5wbSBzdG9yeWJvb2tcIixcbiAgICBcImZvcm1hdFwiOiBcInBucG0gbGludDpmaXhcIixcbiAgICBcImxpbnRcIjogXCJwbnBtIHR5cGVjaGVjayAmJiBwcmV0dGllciAtLWNoZWNrIC4vc3JjIC4vc3RvcmllcyAuLy5zdG9yeWJvb2sgLi8uZ2l0aHViXCIsXG4gICAgXCJsaW50OmZpeFwiOiBcInNvcnQtcGFja2FnZS1qc29uICYmIHBucG0gcHJldHRpZnlcIixcbiAgICBcInByZXBhcmVcIjogXCJodXNreSAmJiBzb3J0LXBhY2thZ2UtanNvblwiLFxuICAgIFwicHJlcHVibGlzaE9ubHlcIjogXCJwbnBtIHJ1biBsaW50ICYmIHBucG0gcnVuIGJ1aWxkICYmIHB1YmxpbnRcIixcbiAgICBcInByZXR0aWZ5XCI6IFwicHJldHRpZXIgLS13cml0ZSAuL3NyYyAuL3N0b3JpZXMgLi8uc3Rvcnlib29rIC4vLmdpdGh1YlwiLFxuICAgIFwicmVsZWFzZVwiOiBcInN0YW5kYXJkLXZlcnNpb25cIixcbiAgICBcInN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBkZXYgLXAgNjAwNlwiLFxuICAgIFwidGVzdFwiOiBcImVjaG8gXFxcIk5vIHRlc3RzIHlldFxcXCJcIixcbiAgICBcInRlc3Q6Y2lcIjogXCJlY2hvIFxcXCJObyB0ZXN0cyB5ZXRcXFwiXCIsXG4gICAgXCJ0eXBlY2hlY2tcIjogXCJ0c2MgLS1idWlsZCAtLW5vRW1pdFwiLFxuICAgIFwidXBncmFkZS1kZXBzXCI6IFwicG5wbSB1cGRhdGUgLS1sYXRlc3RcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtYWNjb3JkaW9uXCI6IFwiXjEuMi4xXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtYWxlcnQtZGlhbG9nXCI6IFwiXjEuMS4yXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtYXNwZWN0LXJhdGlvXCI6IFwiXjEuMS4wXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtYXZhdGFyXCI6IFwiXjEuMS4xXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3hcIjogXCJeMS4xLjJcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1jb2xsYXBzaWJsZVwiOiBcIl4xLjEuMVwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LWNvbnRleHQtbWVudVwiOiBcIl4yLjIuMlwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiOiBcIl4xLjEuMlwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIjogXCJeMi4xLjJcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1ob3Zlci1jYXJkXCI6IFwiXjEuMS4yXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtbGFiZWxcIjogXCJeMi4xLjBcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1tZW51YmFyXCI6IFwiXjEuMS4yXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtbmF2aWdhdGlvbi1tZW51XCI6IFwiXjEuMi4xXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtcG9wb3ZlclwiOiBcIl4xLjEuMlwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXByb2dyZXNzXCI6IFwiXjEuMS4wXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtcmFkaW8tZ3JvdXBcIjogXCJeMS4yLjFcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1zY3JvbGwtYXJlYVwiOiBcIl4xLjIuMVwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNlbGVjdFwiOiBcIl4yLjEuMlwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNlcGFyYXRvclwiOiBcIl4xLjEuMFwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNsaWRlclwiOiBcIl4xLjIuMVwiLFxuICAgIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjogXCJeMS4xLjBcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1zd2l0Y2hcIjogXCJeMS4xLjFcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC10YWJzXCI6IFwiXjEuMS4xXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtdG9hc3RcIjogXCJeMS4yLjJcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC10b2dnbGVcIjogXCJeMS4xLjBcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC10b2dnbGUtZ3JvdXBcIjogXCJeMS4xLjBcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC10b29sdGlwXCI6IFwiXjEuMS40XCIsXG4gICAgXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjogXCJeMC43LjBcIixcbiAgICBcImNtZGtcIjogXCIxLjAuNFwiLFxuICAgIFwiZnJhbWVyLW1vdGlvblwiOiBcIl4xMi4yMy4wXCIsXG4gICAgXCJpbnB1dC1vdHBcIjogXCJeMS40LjFcIixcbiAgICBcInJlYWN0LXJlc2l6YWJsZS1wYW5lbHNcIjogXCJeMi4xLjdcIixcbiAgICBcInRhaWx3aW5kLW1lcmdlXCI6IFwiXjIuNS41XCIsXG4gICAgXCJ0YWlsd2luZGNzcy1hbmltYXRlXCI6IFwiXjEuMC43XCIsXG4gICAgXCJ2YXVsXCI6IFwiXjEuMS4xXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbFwiOiBcIl4xOS42LjBcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tZG9jc1wiOiBcIl44LjQuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1lc3NlbnRpYWxzXCI6IFwiXjguNC41XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWludGVyYWN0aW9uc1wiOiBcIl44LjQuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1saW5rc1wiOiBcIl44LjQuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi10aGVtZXNcIjogXCJeOC40LjVcIixcbiAgICBcIkBzdG9yeWJvb2svYmxvY2tzXCI6IFwiXjguNC41XCIsXG4gICAgXCJAc3Rvcnlib29rL2NvbXBvbmVudHNcIjogXCJeOC40LjVcIixcbiAgICBcIkBzdG9yeWJvb2svaWNvbnNcIjogXCJeMS4yLjEyXCIsXG4gICAgXCJAc3Rvcnlib29rL21hbmFnZXItYXBpXCI6IFwiXjguNC41XCIsXG4gICAgXCJAc3Rvcnlib29rL3ByZXZpZXctYXBpXCI6IFwiXjguNC41XCIsXG4gICAgXCJAc3Rvcnlib29rL3JlYWN0XCI6IFwiXjguNC41XCIsXG4gICAgXCJAc3Rvcnlib29rL3JlYWN0LXZpdGVcIjogXCJeOC40LjVcIixcbiAgICBcIkBzdG9yeWJvb2svdGVzdFwiOiBcIl44LjQuNVwiLFxuICAgIFwiQHN0b3J5Ym9vay90aGVtaW5nXCI6IFwiXjguNC41XCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMi45LjNcIixcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4zLjEyXCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjMuMVwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI6IFwiXjMuNy4xXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4yMFwiLFxuICAgIFwiY2xzeFwiOiBcIl4yLjEuMVwiLFxuICAgIFwiY29tbWl0bGludFwiOiBcIl4xOS42LjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tYmV0dGVyLXRhaWx3aW5kY3NzXCI6IFwiXjMuNC40XCIsXG4gICAgXCJnbG9iYWxzXCI6IFwiXjE1LjEyLjBcIixcbiAgICBcImh1c2t5XCI6IFwiXjkuMS43XCIsXG4gICAgXCJsdWNpZGUtcmVhY3RcIjogXCJeMC40NjAuMFwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuNDlcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMy4zXCIsXG4gICAgXCJwdWJsaW50XCI6IFwiXjAuMi4xMlwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMy4xXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMy4xXCIsXG4gICAgXCJyb2xsdXAtcHJlc2VydmUtZGlyZWN0aXZlc1wiOiBcIl4xLjEuM1wiLFxuICAgIFwic29ydC1wYWNrYWdlLWpzb25cIjogXCJeMi4xMi4wXCIsXG4gICAgXCJzdGFuZGFyZC12ZXJzaW9uXCI6IFwiXjkuNS4wXCIsXG4gICAgXCJzdG9yeWJvb2tcIjogXCJeOC40LjVcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xNVwiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjcuMlwiLFxuICAgIFwidml0ZVwiOiBcIl41LjQuMTFcIixcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl40LjMuMFwiXG4gIH0sXG4gIFwicGFja2FnZU1hbmFnZXJcIjogXCJwbnBtQDkuMTIuMlwiLFxuICBcInB1Ymxp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
