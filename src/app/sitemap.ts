import type { MetadataRoute } from "next";
import { blogArticles } from "@/data/blogArticles";

export const dynamic = "force-static";

const baseUrl = "https://tucsonslableakpros.com";
const contentUpdatedAt = new Date("2026-07-19T00:00:00.000Z");

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type SitemapGroup = {
  paths: string[];
  changeFrequency: ChangeFrequency;
  priority: number;
};

const sitemapGroups: SitemapGroup[] = [
  {
    paths: [""],
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    paths: [
      "/services",
      "/slab-leak-faq",
      "/blog",
      "/contact",
      "/service-areas",
    ],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    paths: [
      "/slab-leak-detection-tucson",
      "/slab-leak-repair-tucson",
      "/water-line-rerouting-tucson",
      "/under-slab-pipe-repair-tucson",
      "/electronic-leak-detection-tucson",
      "/partial-repiping-tucson",
      "/emergency-slab-leak-service-tucson",
      "/hot-water-slab-leak-tucson",
      "/cold-water-slab-leak-tucson",
      "/water-line-pressure-testing-tucson",
      "/slab-leak-repair-cost-tucson",
      "/signs-of-a-slab-leak",
      "/slab-leak-vs-foundation-problem",
      "/how-slab-leak-detection-works",
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    paths: [
      "/service-areas/central-tucson",
      "/service-areas/north-tucson",
      "/service-areas/east-tucson",
      "/service-areas/south-tucson",
      "/service-areas/west-tucson",
      "/service-areas/oro-valley",
      "/service-areas/catalina-foothills",
      "/service-areas/rita-ranch",
      "/service-areas/southwest-tucson",
      "/service-areas/catalina-saddlebrooke",
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    paths: blogArticles.map((article) => `/blog/${article.slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    paths: [
      "/privacy-policy",
      "/terms-and-conditions",
      "/service-disclaimer",
      "/accessibility",
      "/cookie-policy",
    ],
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

function absoluteUrl(path: string) {
  return path ? `${baseUrl}${path}/` : `${baseUrl}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapGroups.flatMap(({ paths, changeFrequency, priority }) =>
    paths.map((path) => ({
      url: absoluteUrl(path),
      lastModified: contentUpdatedAt,
      changeFrequency,
      priority,
    })),
  );
}
