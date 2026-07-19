"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqAccordionProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

export default function FaqAccordion({ question, answer, isOpen, onToggle, id }: FaqAccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className="faq-card"
      style={{ 
        backgroundColor: "var(--white)", 
        border: "1px solid #e2e8f0", 
        marginBottom: "1rem", 
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Active Accent Mark */}
      {isOpen && (
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", backgroundColor: "var(--brand-red)" }} />
      )}

      <button
        className="faq-toggle"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          color: "var(--dark-charcoal)",
          transition: "padding 0.2s ease"
        }}
      >
        <span className="faq-question" style={{ fontWeight: isOpen ? "800" : "600" }}>
          {question}
        </span>
        <span className="faq-toggle-icon">
          {isOpen ? (
            <Minus size={24} color="var(--brand-red)" />
          ) : (
            <Plus size={24} color="var(--brand-red)" />
          )}
        </span>
      </button>

      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        aria-hidden={!isOpen}
        style={{
          height: height === undefined ? 'auto' : `${height}px`,
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div ref={contentRef} className="faq-answer" style={{ paddingLeft: isOpen ? "2rem" : "1.5rem" }}>
          {answer}
        </div>
      </div>
    </div>
  );
}
