import { Metadata } from "next";
import BlogArticlePage from "@/components/BlogArticlePage";
import { blogArticleBySlug } from "@/data/blogArticles";

const article = blogArticleBySlug.get("understanding-slab-leaks")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: "/blog/understanding-slab-leaks/" },
  openGraph: {
    title: article.title,
    description: article.description,
    type: "article",
    url: "https://tucsonslableakpros.com/blog/understanding-slab-leaks/",
    images: [{ url: article.heroImage, alt: article.heroAlt }],
  },
  twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [article.heroImage] },
};

export default function UnderstandingSlabLeaksPage() {
  return <BlogArticlePage article={article} />;
}
