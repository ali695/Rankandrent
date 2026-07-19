import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "@/data/blogArticles";

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
          <div className="blog-category-list" aria-label="Article topics">
            {categories.map((category) => <span key={category}>{category}</span>)}
          </div>

          <div className="blog-index-grid">
            {blogArticles.map((article, index) => (
              <article key={article.slug} className={`blog-index-card ${index === 0 ? "blog-index-featured" : ""}`}>
                <Link href={`/blog/${article.slug}`} className="blog-index-image">
                  <Image src={article.heroImage} alt={article.heroAlt} fill sizes={index === 0 ? "(max-width: 768px) 100vw, 55vw" : "(max-width: 768px) 100vw, 33vw"} style={{ objectFit: "cover" }} />
                </Link>
                <div className="blog-index-card-content">
                  <div className="blog-index-card-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                  <h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2>
                  <p>{article.description}</p>
                  <Link href={`/blog/${article.slug}`} className="blog-read-link">Read guide <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
