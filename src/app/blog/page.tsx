import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Tucson Slab Leak Resources & Tips',
  description: 'Read the latest resources, tips, and insights on slab leak detection, foundation repair, and home plumbing maintenance in Tucson, AZ.',
  openGraph: {
    title: 'Blog | Tucson Slab Leak Resources & Tips',
    description: 'Read the latest resources, tips, and insights on slab leak detection, foundation repair, and home plumbing maintenance in Tucson, AZ.',
    url: 'https://tucsonslableakpros.com/blog/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tucson Slab Leak Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Tucson Slab Leak Resources & Tips",
    description: "Read the latest resources, tips, and insights on slab leak detection, foundation repair, and home plumbing maintenance in Tucson, AZ.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const blogPosts = [
  {
    id: 1,
    title: "5 Early Warning Signs of a Slab Leak You Shouldn't Ignore",
    excerpt: "Slab leaks can cause massive structural damage if left unchecked. Learn how to spot the subtle signs like warm spots on the floor and unexpected spikes in your water bill.",
    image: "/images/signs_slab_leak.jpg",
    date: "July 12, 2026",
    category: "Detection Guide",
    link: "/signs-of-a-slab-leak/"
  },
  {
    id: 2,
    title: "How Much Does Slab Leak Repair Actually Cost in Tucson?",
    excerpt: "Worried about the cost of ripping up your concrete foundation? We break down the average costs of slab leak repair, including rerouting vs. direct repair options.",
    image: "/images/partial_repiping.jpg",
    date: "June 28, 2026",
    category: "Cost & Estimates",
    link: "/slab-leak-repair-cost-tucson/"
  },
  {
    id: 3,
    title: "Slab Leak vs. Foundation Problem: How to Tell the Difference",
    excerpt: "Cracks in your drywall? It could be a foundation settlement issue, or it could be a massive water leak eroding the soil under your home. Here is how to tell.",
    image: "/images/slab_leak_vs_foundation.jpg",
    date: "June 15, 2026",
    category: "Expert Advice",
    link: "/slab-leak-vs-foundation-problem/"
  },
  {
    id: 4,
    title: "Electronic Leak Detection: Finding Leaks Without the Damage",
    excerpt: "Gone are the days of jackhammering random holes in your living room to find a leak. Learn how modern electronic leak detection pinpoints water with pinpoint accuracy.",
    image: "/images/electronic_leak_detection.jpg",
    date: "May 30, 2026",
    category: "Technology",
    link: "/electronic-leak-detection-tucson/"
  },
  {
    id: 5,
    title: "Hot Water vs. Cold Water Slab Leaks",
    excerpt: "Did you know hot water lines fail more frequently under slabs than cold water lines? Discover why, and how to identify which pipe is leaking under your floor.",
    image: "/images/hot_water_slab_leak.jpg",
    date: "May 10, 2026",
    category: "Plumbing Basics",
    link: "/hot-water-slab-leak-tucson/"
  },
  {
    id: 6,
    title: "Why You Should Consider Water Line Rerouting",
    excerpt: "Sometimes, the best way to fix a pipe under a slab is to bypass the slab entirely. Learn why water line rerouting through the attic or walls is often the superior choice.",
    image: "/images/water_line_rerouting.jpg",
    date: "April 22, 2026",
    category: "Repair Methods",
    link: "/water-line-rerouting-tucson/"
  }
];

export default function BlogLandingPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "400px", display: "flex", alignItems: "center", textAlign: "center", color: "var(--white)" }}>
          {/* Dark Overlay Background */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Blog Hero" src="/images/services_hub_hero.jpg" alt="Tucson Slab Leak Blog" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <h1 style={{ fontSize: "3.5rem", fontWeight: "800", marginBottom: "1rem" }}>Our Blog & Resources</h1>
            <p style={{ fontSize: "1.2rem", color: "#cbd5e1", maxWidth: "700px", margin: "0 auto 3rem", lineHeight: "1.6" }}>
              Expert insights, guides, and tips on identifying, repairing, and preventing slab leaks in Tucson, Arizona.
            </p>
            <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto", display: "flex" }}>
              <input 
                type="text" 
                placeholder="Search articles (e.g. 'rerouting', 'cost', 'signs')..." 
                style={{ width: "100%", padding: "1.25rem 1.5rem", fontSize: "1.1rem", borderRadius: "8px 0 0 8px", border: "none", outline: "none", color: "var(--dark-charcoal)" }}
                aria-label="Search articles"
              />
              <button style={{ backgroundColor: "var(--brand-red)", border: "none", padding: "0 1.5rem", borderRadius: "0 8px 8px 0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Submit search">
                <Search size={24} color="var(--white)" />
              </button>
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2.5rem" }}>
              
              {blogPosts.map((post) => (
                <article key={post.id} className="premium-card blog-card" style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}>
                  <Link href={post.link} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                    
                    {/* Image Placeholder / Wrapper */}
                    <div style={{ width: "100%", height: "220px", position: "relative", overflow: "hidden", backgroundColor: "#e2e8f0" }}>
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="blog-image"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div style={{ position: "absolute", top: "1rem", right: "1rem", backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: "bold" }}>
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <div style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "1rem", fontWeight: "500", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        {post.date}
                      </div>
                      
                      <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "1rem", lineHeight: "1.3", color: "var(--text-color)" }}>
                        {post.title}
                      </h2>
                      
                      <p style={{ color: "#475569", lineHeight: "1.6", marginBottom: "2rem", flexGrow: 1 }}>
                        {post.excerpt}
                      </p>
                      
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--brand-red)", fontWeight: "600", marginTop: "auto" }}>
                        Read Article
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}

            </div>
          </div>
        </section>

      </main>
    </>
  );
}
