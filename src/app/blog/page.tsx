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
          <h1 style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 1rem", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "800" }}>Tucson Slab Leak<br />Questions and Answers</h1>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 2.5rem", fontSize: "1.1rem", color: "#e4e4e7" }}>Find quick answers to common questions regarding slab leak signs,<br />detection, repair costs, and emergency steps.</p>
          
          <form action="/blog" method="GET" style={{ width: "100%", maxWidth: "600px", display: "flex", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", borderRadius: "6px", overflow: "hidden", margin: "0 auto" }}>
            <input 
              type="text" 
              name="q"
              placeholder="Search FAQs (e.g. 'cost', 'insurance', 'warm floor')..." 
              style={{ flexGrow: 1, padding: "1.2rem 1.5rem", border: "none", fontSize: "1rem", outline: "none", color: "var(--dark-charcoal)" }}
            />
            <button type="submit" style={{ backgroundColor: "var(--brand-red)", color: "var(--white)", border: "none", padding: "0 1.5rem", cursor: "pointer", display: "flex", alignItems: "center", justifyItems: "center" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </form>
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
