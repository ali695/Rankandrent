import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "@/data/blogArticles";
import BlogList from "@/components/BlogList";
export const metadata: Metadata = {
  title: "Tucson Slab Leak Blog | Practical Homeowner Guides",
  description: "Read clear Tucson slab-leak guides covering symptoms, water meters, detection, pressure testing, repair, rerouting, costs, insurance and restoration.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Tucson Slab Leak Blog | Practical Homeowner Guides",
    description: "Thirty practical guides for understanding hidden water loss, testing and repair choices.",
    url: "https://tucsonslableakpros.com/blog/",
    siteName: "Tucson Leak Pros",
    locale: "en_US",
    images: [{ url: "/images/blog/understanding-slab-leaks.png", width: 1536, height: 1024, alt: "Tucson slab leak homeowner resource center" }],
  },
  twitter: { card: "summary_large_image", title: "Tucson Slab Leak Blog", description: "Practical homeowner guides about hidden water loss, detection and repair.", images: ["/images/blog/understanding-slab-leaks.png"] },
};

const categories = ["All", ...Array.from(new Set(blogArticles.map((article) => article.category)))];

export default function BlogLandingPage() {
  return (
    <main>
      <section className="blog-index-hero">
        <Image src="/images/blog/understanding-slab-leaks.png" alt="Water lines beneath a tiled concrete slab in a Tucson home" fill sizes="100vw" priority style={{ objectFit: "cover" }} />
        <div className="blog-index-overlay" />
        <div className="container blog-index-content">
          <span>HOMEOWNER RESOURCE CENTER</span>
          <h1>Tucson Slab Leak Blog</h1>
          <p>Clear answers about warning signs, water-meter checks, professional detection, repair choices, costs, insurance questions and restoration.</p>
        </div>
      </section>

      <section className="blog-index-shell">
        <div className="container">
          <BlogList articles={blogArticles} categories={categories} />
        </div>
      </section>
    </main>
  );
}
