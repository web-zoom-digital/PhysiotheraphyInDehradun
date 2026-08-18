import { MetadataRoute } from "next";
import { CLINIC_CONFIG } from "@/config/clinic";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: CLINIC_CONFIG.name,
    short_name: CLINIC_CONFIG.shortName,
    description: `${CLINIC_CONFIG.name} — Dehradun's top-rated physiotherapy clinic. Expert back pain, stroke rehab, sports injury & home visit physiotherapy.`,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0D9488",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}
