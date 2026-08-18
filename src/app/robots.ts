import { MetadataRoute } from "next";
import { CLINIC_CONFIG } from "@/config/clinic";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",
          "/api/",
          "/scratch/"
        ]
      },
      // Allow major AI/search bots explicitly
      {
        userAgent: "GPTBot",
        allow: "/"
      },
      {
        userAgent: "Google-Extended",
        allow: "/"
      },
      {
        userAgent: "PerplexityBot",
        allow: "/"
      },
      {
        userAgent: "ClaudeBot",
        allow: "/"
      },
      {
        userAgent: "anthropic-ai",
        allow: "/"
      },
      {
        userAgent: "Gemini",
        allow: "/"
      }
    ],
    sitemap: `${CLINIC_CONFIG.domain}/sitemap.xml`,
    host: CLINIC_CONFIG.domain
  };
}
