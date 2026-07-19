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
      <section className="blog-index-hero" style={{ alignItems: "center", textAlign: "center", justifyContent: "center" }}>
        <Image src="/images/blog/understanding-slab-leaks.png" alt="Water lines beneath a tiled concrete slab in a Tucson home" fill sizes="100vw" priority style={{ objectFit: "cover" }} />
        <div className="blog-index-overlay" style={{ background: "rgba(0, 0, 0, 0.6)" }} />
        <div className="container blog-index-content" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 1rem", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "800" }}>Tucson Slab Leak Blog</h1>
          <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", color: "#e4e4e7" }}>Clear answers about warning signs, water-meter checks, professional detection,<br />repair choices, costs, insurance questions and restoration.</p>
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
