"use client";

import React, { useState, useEffect } from 'react';

interface HeroSlideshowProps {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}

export default function HeroSlideshow({ images, intervalMs = 5000 }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotationEnabled, setRotationEnabled] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (!window.matchMedia('(max-width: 768px)').matches) {
      const frame = window.requestAnimationFrame(() => setRotationEnabled(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const enableRotation = () => setRotationEnabled(true);
    const passiveOnce: AddEventListenerOptions = { once: true, passive: true };

    window.addEventListener('pointerdown', enableRotation, passiveOnce);
    window.addEventListener('scroll', enableRotation, passiveOnce);
    window.addEventListener('keydown', enableRotation, { once: true });

    return () => {
      window.removeEventListener('pointerdown', enableRotation);
      window.removeEventListener('scroll', enableRotation);
      window.removeEventListener('keydown', enableRotation);
    };
  }, [images.length]);

  useEffect(() => {
    if (!rotationEnabled || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [images.length, intervalMs, rotationEnabled]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {(rotationEnabled ? images : images.slice(0, 1)).map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt=""
          aria-hidden="true"
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={index === 0 ? 'high' : 'low'}
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
