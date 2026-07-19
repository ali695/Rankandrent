"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
  level: number;
  subItems?: TocItem[];
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToElement = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
  };

  const renderItems = (tocItems: TocItem[], parentIndex = "") => (
    <ol className={parentIndex ? "article-toc-sublist" : "article-toc-list"}>
      {tocItems.map((item, index) => {
        const itemIndex = parentIndex ? `${parentIndex}.${index + 1}` : `${index + 1}`;
        return (
          <li key={item.id}>
            <a href={`#${item.id}`} onClick={(event) => scrollToElement(event, item.id)}>
              <span className="article-toc-number" aria-hidden="true">{itemIndex}.</span>
              <span>{item.title}</span>
            </a>
            {item.subItems?.length ? renderItems(item.subItems, itemIndex) : null}
          </li>
        );
      })}
    </ol>
  );

  return (
    <nav className="article-toc" aria-label="Table of contents">
      <button
        type="button"
        className="article-toc-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="table-of-contents-links"
      >
        <span>Table of Contents</span>
        {isOpen ? <ChevronUp size={20} aria-hidden="true" /> : <ChevronDown size={20} aria-hidden="true" />}
      </button>

      {isOpen && (
        <div id="table-of-contents-links" className="article-toc-links">
          {renderItems(items)}
        </div>
      )}
    </nav>
  );
}
