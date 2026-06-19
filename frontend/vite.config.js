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
        iranNewZealand: resolve(__dirname, "matches/iran-new-zealand.html"),
        franceSenegal: resolve(__dirname, "matches/france-senegal.html"),
        norwayIraq: resolve(__dirname, "matches/norway-iraq.html"),
        argentinaAlgeria: resolve(__dirname, "matches/argentina-algeria.html"),
        austriaJordan: resolve(__dirname, "matches/austria-jordan.html"),
        portugalDrCongo: resolve(__dirname, "matches/portugal-dr-congo.html"),
        englandCroatia: resolve(__dirname, "matches/england-croatia.html"),
        ghanaPanama: resolve(__dirname, "matches/ghana-panama.html"),
        uzbekistanColombia: resolve(__dirname, "matches/uzbekistan-colombia.html"),
        czechiaSouthAfrica: resolve(__dirname, "matches/czechia-south-africa.html"),
        switzerlandBosniaHerzegovina: resolve(__dirname, "matches/switzerland-bosnia-herzegovina.html"),
        canadaQatar: resolve(__dirname, "matches/canada-qatar.html"),
        mexicoSouthKorea: resolve(__dirname, "matches/mexico-south-korea.html")
      }
    }
  }
});
