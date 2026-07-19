"use client";

import React, { useState, useEffect } from 'react';

interface HeroSlideshowProps {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}

export default function HeroSlideshow({ images, intervalMs = 5000 }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [images, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {images.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: index === currentIndex ? 0.35 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: 0
          }}
        />
      ))}
    </>
  );
}
