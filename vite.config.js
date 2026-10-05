import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // anpassat för att sidan ligger direkt på brukbardesign.se.
  base: "/",
});