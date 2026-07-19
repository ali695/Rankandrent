"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { BlogArticle } from "@/data/blogArticles";

export default function BlogList({ articles }: { articles: BlogArticle[] }) {
  const [visibleCount, setVisibleCount] = useState(9);

  const showMore = () => {
    setVisibleCount((count) => count + 9);
  };

  return (
    <>
      <div className="blog-index-grid">
        {articles.slice(0, visibleCount).map((article) => (
          <article key={article.slug} className="blog-list-card">
            <Link href={`/blog/${article.slug}`} className="blog-list-card-link">
              <div className="blog-list-image">
                <Image
                  src={article.heroImage}
                  alt={article.heroAlt}
                  fill
                  sizes="(max-width: 720px) calc(100vw - 2rem), (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="blog-list-category">{article.category}</span>
              </div>

              <div className="blog-list-content">
                <div className="blog-list-meta">
                  <CalendarDays size={16} aria-hidden="true" />
                  <span>{article.published} • {article.readTime}</span>
                </div>

                <h2>{article.title}</h2>
                <p>{article.description}</p>

                <span className="blog-list-read-more">
                  Read Article
                  <ArrowRight size={18} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {visibleCount < articles.length && (
        <div className="blog-load-more">
          <button type="button" onClick={showMore} className="btn-primary blog-load-more-button">
            Read more
          </button>
        </div>
      )}
    </>
  );
}
