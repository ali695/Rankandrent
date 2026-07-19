"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogArticle } from "@/data/blogArticles";

export default function BlogList({ articles }: { articles: BlogArticle[] }) {
  const [visibleCount, setVisibleCount] = useState(9);

  const showMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  return (
    <>


      <div className="blog-index-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2.5rem" }}>
        {articles.slice(0, visibleCount).map((article) => (
          <article key={article.slug} className="premium-card" style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}>
            <Link href={`/blog/${article.slug}`} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
              
              <div style={{ width: "100%", height: "220px", position: "relative", overflow: "hidden", backgroundColor: "#e2e8f0" }}>
                <Image 
                  src={article.heroImage} 
                  alt={article.heroAlt} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: "1rem", right: "1rem", backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.85rem", fontWeight: "bold" }}>
                  {article.category}
                </div>
              </div>

              <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "1rem", fontWeight: "500", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {article.published} • {article.readTime}
                </div>
                
                <h2 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "1rem", lineHeight: "1.3", color: "var(--dark-charcoal)" }}>
                  {article.title}
                </h2>
                
                <p style={{ color: "#475569", lineHeight: "1.6", marginBottom: "2rem", flexGrow: 1 }}>
                  {article.description}
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
      
      {visibleCount < articles.length && (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button 
            type="button"
            onClick={showMore}
            className="btn-primary" 
            style={{ 
              padding: "1rem 2.5rem", 
              fontSize: "1.1rem", 
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              backgroundColor: "var(--brand-red)",
              color: "var(--white)",
              borderRadius: "4px",
              textTransform: "uppercase"
            }}
          >
            Read more
          </button>
        </div>
      )}
    </>
  );
}
