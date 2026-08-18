import { MetadataRoute } from "next";
import { CLINIC_CONFIG } from "@/config/clinic";
import { SERVICES_DATA } from "@/config/services";
import { CONDITIONS_DATA } from "@/config/conditions";
import { LOCATIONS_DATA } from "@/config/locations";
import { BLOGS_DATA } from "@/config/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const urlBase = CLINIC_CONFIG.domain;
  const now = new Date();

  // 1. Core Static Pages (highest priority)
  const corePaths = [
    { path: "", priority: 1.0, freq: "daily" as const },
    { path: "/about", priority: 0.9, freq: "monthly" as const },
    { path: "/doctor", priority: 0.9, freq: "monthly" as const },
    { path: "/contact", priority: 0.9, freq: "monthly" as const },
    { path: "/book-appointment", priority: 0.95, freq: "weekly" as const },
    { path: "/home-visit-physiotherapy", priority: 0.9, freq: "weekly" as const },
    { path: "/reviews", priority: 0.8, freq: "weekly" as const },
    { path: "/pricing", priority: 0.8, freq: "monthly" as const },
    { path: "/faqs", priority: 0.75, freq: "monthly" as const },
    { path: "/gallery", priority: 0.6, freq: "monthly" as const },
    { path: "/blog", priority: 0.8, freq: "daily" as const },
    { path: "/services", priority: 0.9, freq: "weekly" as const },
    { path: "/locations", priority: 0.9, freq: "weekly" as const },
  ];

  const staticSitemap = corePaths.map(({ path, priority, freq }) => ({
    url: `${urlBase}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority
  }));

  // 2. Services Pages (high SEO priority — core revenue pages)
  const serviceSitemap = SERVICES_DATA.map((service) => ({
    url: `${urlBase}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9
  }));

  // 3. Conditions Pages
  const conditionSitemap = CONDITIONS_DATA.map((cond) => ({
    url: `${urlBase}/conditions/${cond.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85
  }));

  // 4. Locations Pages (local SEO priority)
  const locationSitemap = LOCATIONS_DATA.map((loc) => ({
    url: `${urlBase}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.88
  }));

  // 5. Blog Pages
  const blogSitemap = BLOGS_DATA.map((post) => ({
    url: `${urlBase}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  return [
    ...staticSitemap,
    ...serviceSitemap,
    ...conditionSitemap,
    ...locationSitemap,
    ...blogSitemap
  ];
}
