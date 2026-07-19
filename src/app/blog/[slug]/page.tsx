import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticlePage from "@/components/BlogArticlePage";
import { blogArticleBySlug, blogArticles } from "@/data/blogArticles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogArticles
    .filter((article) => article.slug !== "understanding-slab-leaks")
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticleBySlug.get(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}/` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://tucsonslableakpros.com/blog/${article.slug}/`,
      images: [{ url: article.heroImage, alt: article.heroAlt }],
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.description, images: [article.heroImage] },
  };
}

export default async function ArticleRoute({ params }: Props) {
  const { slug } = await params;
  const article = blogArticleBySlug.get(slug);
  if (!article || slug === "understanding-slab-leaks") notFound();
  return <BlogArticlePage article={article} />;
}
