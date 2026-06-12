import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        mexicoSouthAfrica: resolve(__dirname, "matches/mexico-south-africa.html"),
        southKoreaCzechia: resolve(__dirname, "matches/south-korea-czechia.html"),
        canadaBosniaHerzegovina: resolve(__dirname, "matches/canada-bosnia-herzegovina.html"),
        usaParaguay: resolve(__dirname, "matches/usa-paraguay.html")
      }
    }
  }
});
