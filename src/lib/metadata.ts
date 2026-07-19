import type { Metadata } from "next";

const siteName = "Tucson Leak Pros";
const socialImage = "/images/services_hub_hero.webp";

export function pageSocialMetadata(
  title: string,
  description: string,
  pathname: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title,
      description,
      url: pathname,
      siteName,
      type: "website",
      locale: "en_US",
      images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
