import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

        const media = (
          <div className="zigzag-media">
            <Image
              src={block.imageSrc}
              alt={block.imageAlt}
              fill
              sizes="(max-width: 1024px) calc(100vw - 2.5rem), 560px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        );

        const copy = (
          <div className="zigzag-copy">
            {block.kicker && <span className="zigzag-kicker">{block.kicker}</span>}
            <h2 className="zigzag-heading" style={{ color: headingColor }}>{block.heading}</h2>
            <div className="zigzag-copy-body">{block.content}</div>
            {block.buttonText && block.buttonLink && (
              <div className="zigzag-action">
                <Link href={block.buttonLink} className="btn-primary">
                  {block.buttonText}
                </Link>
              </div>
            )}
          </div>
        );

        return (
          <section
            key={idx}
            className="zigzag-section"
            data-theme={isDarkBg ? 'dark' : 'light'}
            style={{ backgroundColor: block.backgroundColor }}
          >
            <div className={`container zigzag-grid ${block.imageOnLeft ? 'zigzag-image-left' : 'zigzag-image-right'}`}>
              {block.imageOnLeft ? <>{media}{copy}</> : <>{copy}{media}</>}
            </div>
          </section>
        );
      })}
    </>
  );
}
