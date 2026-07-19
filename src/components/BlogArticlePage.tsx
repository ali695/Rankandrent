import Image from "next/image";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import { BlogArticle, blogArticles } from "@/data/blogArticles";

export default function BlogArticlePage({ article }: { article: BlogArticle }) {
  const tocItems = [
    ...article.sections.map((section) => ({ id: section.id, title: section.title, level: 1 })),
    { id: "frequently-asked-questions", title: "Frequently Asked Questions", level: 1 },
    { id: "next-step", title: "Practical Next Step", level: 1 },
  ];

  const related = blogArticles
    .filter((candidate) => candidate.slug !== article.slug)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `https://tucsonslableakpros.com${article.heroImage}`,
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    author: { "@type": "Organization", name: "Tucson Leak Pros" },
    publisher: { "@type": "Organization", name: "Tucson Leak Pros" },
    mainEntityOfPage: `https://tucsonslableakpros.com/blog/${article.slug}/`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="article-hero">
        <Image src={article.heroImage} alt={article.heroAlt} fill sizes="100vw" priority style={{ objectFit: "cover" }} />
        <div className="article-hero-overlay" />
        <div className="container article-hero-content">
          <Link href="/blog" className="article-back-link">← Blog & Resources</Link>
          <span className="article-category">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <div className="article-meta">
            <span>Published {article.published}</span>
            <span aria-hidden="true">•</span>
            <span>Reviewed {article.updated}</span>
            <span aria-hidden="true">•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      <section className="article-shell">
        <div className="container article-layout">
          <article className="article-content">
            <div className="article-answer-box">
              <strong>Quick answer</strong>
              <p>{article.description}</p>
            </div>

            <section className="article-takeaways" aria-labelledby="key-takeaways">
              <h2 id="key-takeaways">Key Takeaways</h2>
              <ul>{article.keyTakeaways.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            {article.sections.map((section) => (
              <section key={section.id} className="article-section" aria-labelledby={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.table && (
                  <div className="article-table-wrap">
                    <table>
                      <caption>{section.table.caption}</caption>
                      <thead><tr>{section.table.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
                      <tbody>{section.table.rows.map((row) => <tr key={row.join("|")}>{row.map((cell, index) => <td key={`${index}-${cell}`}>{cell}</td>)}</tr>)}</tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            <section className="article-section" aria-labelledby="frequently-asked-questions">
              <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
              <div className="article-faq-list">
                {article.faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="article-next-step" aria-labelledby="next-step">
              <h2 id="next-step">Practical Next Step</h2>
              <p>Document what you observed, rule out visible and automatic water uses, and avoid approving invasive work until the affected system and proposed access are explained in writing.</p>
              <div className="article-actions">
                <Link href={article.relatedService.href} className="btn-primary">Review {article.relatedService.label}</Link>
                {article.relatedArea && <Link href={article.relatedArea.href} className="btn-secondary">View {article.relatedArea.label}</Link>}
              </div>
            </section>
          </article>

          <aside className="article-sidebar" aria-label="Article navigation">
            <TableOfContents items={tocItems} />
            <div className="article-sidebar-card">
              <strong>Need help interpreting the signs?</strong>
              <p>Describe the symptoms and property location before choosing a repair method.</p>
              <Link href="/request-slab-leak-inspection">Request an inspection</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="article-related">
        <div className="container">
          <h2>Related Guides</h2>
          <div className="article-related-grid">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="article-related-card">
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
