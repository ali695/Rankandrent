import React from 'react';
import Link from 'next/link';

export type ZigZagBlock = {
  kicker?: string;
  heading: string;
  content: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft: boolean;
  backgroundColor: string;
  buttonText?: string;
  buttonLink?: string;
};

export default function ZigZagBlocks({ blocks }: { blocks: ZigZagBlock[] }) {
  return (
    <>
      {blocks.map((block, idx) => {
        const isDarkBg = block.backgroundColor.includes('var(--dark-charcoal)') || block.backgroundColor === '#18181b' || block.backgroundColor === '#1c1c1e';
        const headingColor = isDarkBg ? 'var(--white)' : 'var(--dark-charcoal)';

        return (
          <section key={idx} style={{ backgroundColor: block.backgroundColor, padding: "6rem 0" }}>
            <div className="container split-grid" style={{ alignItems: "center" }}>
              {block.imageOnLeft ? (
                <>
                  <div style={{ display: "flex", width: "100%" }}>
                    <img src={block.imageSrc} alt={block.imageAlt} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />
                  </div>
                  <div className="zigzag-copy zigzag-copy-left" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    {block.kicker && <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>{block.kicker}</span>}
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: headingColor, lineHeight: "1.2" }}>{block.heading}</h2>
                    {block.content}
                    {block.buttonText && block.buttonLink && (
                      <div style={{ marginTop: "2rem" }}>
                        <Link href={block.buttonLink} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                          {block.buttonText}
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="zigzag-copy zigzag-copy-right" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    {block.kicker && <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>{block.kicker}</span>}
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: headingColor, lineHeight: "1.2" }}>{block.heading}</h2>
                    {block.content}
                    {block.buttonText && block.buttonLink && (
                      <div style={{ marginTop: "2rem" }}>
                        <Link href={block.buttonLink} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                          {block.buttonText}
                        </Link>
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", width: "100%" }}>
                    <img src={block.imageSrc} alt={block.imageAlt} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />
                  </div>
                </>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
