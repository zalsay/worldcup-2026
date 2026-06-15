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
        usaParaguay: resolve(__dirname, "matches/usa-paraguay.html"),
        qatarSwitzerland: resolve(__dirname, "matches/qatar-switzerland.html"),
        brazilMorocco: resolve(__dirname, "matches/brazil-morocco.html"),
        haitiScotland: resolve(__dirname, "matches/haiti-scotland.html"),
        australiaTurkiye: resolve(__dirname, "matches/australia-turkiye.html"),
        germanyCuracao: resolve(__dirname, "matches/germany-curacao.html"),
        netherlandsJapan: resolve(__dirname, "matches/netherlands-japan.html"),
        coteDivoireEcuador: resolve(__dirname, "matches/cote-divoire-ecuador.html"),
        swedenTunisia: resolve(__dirname, "matches/sweden-tunisia.html"),
        spainCapeVerde: resolve(__dirname, "matches/spain-cape-verde.html"),
        belgiumEgypt: resolve(__dirname, "matches/belgium-egypt.html"),
        saudiArabiaUruguay: resolve(__dirname, "matches/saudi-arabia-uruguay.html"),
        iranNewZealand: resolve(__dirname, "matches/iran-new-zealand.html")
      }
    }
  }
});
