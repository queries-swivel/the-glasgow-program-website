import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  // Priority tiers matched to the live navigation/IA.
  const primary = ["", "/research", "/program", "/services", "/publications"];
  const secondary = [
    "/services/core-lab",
    "/services/clinical-trials",
    "/services/licensing",
    "/training",
    "/team",
    "/contact",
  ];

  return [
    ...primary.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
    ...secondary.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
