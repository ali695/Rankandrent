'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: number;
  subItems?: TocItem[];
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    const headingElements = items.flatMap(item => {
      const el = document.getElementById(item.id);
      const subEls = (item.subItems || []).map(sub => document.getElementById(sub.id));
      return [el, ...subEls].filter(Boolean) as HTMLElement[];
    });

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    }
  };

  const renderItems = (items: TocItem[], parentIndex = '') => {
    return (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, index) => {
          const itemIndex = parentIndex ? `${parentIndex}.${index + 1}` : `${index + 1}`;
          const isActive = activeId === item.id;
          
          return (
            <li key={item.id} style={{ marginBottom: item.level === 1 ? '1rem' : '0.75rem', marginTop: item.level === 1 && index > 0 ? '1rem' : '0' }}>
              <a
                href={`#${item.id}`}
                onClick={(e) => scrollToElement(e, item.id)}
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  color: isActive ? '#b91c1c' : '#334155',
                  fontSize: item.level === 1 ? '0.95rem' : '0.9rem',
                  paddingLeft: item.level === 2 ? '1.5rem' : '0',
                  lineHeight: '1.4',
                  transition: 'color 0.2s',
                  fontWeight: isActive ? '600' : '400'
                }}
                className="toc-link"
              >
                <span style={{ minWidth: item.level === 1 ? '1rem' : '1.5rem', color: isActive ? '#b91c1c' : '#64748b' }}>
                  {itemIndex}.
                </span>
                <span>{item.title}</span>
              </a>
              {item.subItems && item.subItems.length > 0 && (
                <div style={{ marginTop: '0.75rem' }}>
                  {renderItems(item.subItems, itemIndex)}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div style={{ 
      backgroundColor: '#f8f7f2', // Light beige/warm background matching screenshot
      padding: '1.5rem',
      position: 'sticky',
      top: '100px'
    }}>
      <h3 style={{ 
        fontSize: '1.1rem', 
        fontWeight: '700', 
        color: '#1e293b', 
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Table of Contents
      </h3>
      
      <div style={{ 
        border: '1px solid #94a3b8',
        backgroundColor: '#f8f7f2'
      }}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="table-of-contents-links"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            borderBottom: isOpen ? '1px solid #94a3b8' : 'none',
            cursor: 'pointer',
            fontWeight: '600',
            color: '#334155',
            backgroundColor: 'transparent',
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0
          }}
        >
          <span>Content</span>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        
        {isOpen && (
          <div id="table-of-contents-links" style={{ padding: '1.25rem 1rem' }}>
            {renderItems(items)}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .toc-link:hover {
          color: #b91c1c !important;
        }
        .toc-link:hover span {
          color: #b91c1c !important;
        }
      `}} />
    </div>
  );
}
