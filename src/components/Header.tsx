"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleSubmenu = (menu: string) => {
    if (openSubmenu === menu) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(menu);
    }
  };

  const releaseDesktopMenuFocus = () => {
    requestAnimationFrame(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    });
  };

  return (
    <header style={{ borderBottom: "4px solid var(--brand-red)", position: "relative", zIndex: 1000 }}>
      {/* Utility Bar */}
      <div style={{ backgroundColor: "var(--light-gray)", padding: "0.5rem 0", fontSize: "0.85rem", fontWeight: "700" }}>
        <div className="container utility-bar" style={{ display: "flex", justifyContent: "flex-end", gap: "2rem", alignItems: "center" }}>
          <a href="tel:5205550199" style={{ color: "var(--brand-red)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            CALL NOW: (520) 555-0199
          </a>
          <Link href="/contact/" style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)", padding: "0.25rem 1rem", borderRadius: "8px", textDecoration: "none", textTransform: "uppercase", fontSize: "0.75rem" }}>
            Request Leak Detection
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <div style={{ backgroundColor: "var(--dark-charcoal)", position: "relative" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem" }}>
          <Link href="/" aria-label="Tucson Leak Pros home" style={{ color: "var(--white)", fontSize: "1.5rem", fontWeight: "900", letterSpacing: "-1px", textDecoration: "none" }}>
            TUCSON<span style={{ color: "var(--brand-red)" }}>LEAK</span>PROS
          </Link>
          
          <button type="button" className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          {/* Desktop Nav */}
          <nav className="nav-menu desktop-nav" onClickCapture={releaseDesktopMenuFocus}>
            <div className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </div>

            <div className="nav-item">
              <Link href="/services/" className="nav-link" style={{ textDecoration: "none" }}>
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="/slab-leak-detection-tucson/" className="dropdown-link">Slab Leak Detection</Link>
                <Link href="/slab-leak-repair-tucson/" className="dropdown-link">Slab Leak Repair</Link>
                <Link href="/emergency-slab-leak-service-tucson/" className="dropdown-link">Emergency Slab Leak Service</Link>
                <Link href="/water-line-rerouting-tucson/" className="dropdown-link">Water-Line Rerouting</Link>
                <Link href="/under-slab-pipe-repair-tucson/" className="dropdown-link">Under-Slab Pipe Repair</Link>
                <Link href="/electronic-leak-detection-tucson/" className="dropdown-link">Electronic Leak Detection</Link>
                <Link href="/water-line-pressure-testing-tucson/" className="dropdown-link">Pressure Testing</Link>
                <Link href="/partial-repiping-tucson/" className="dropdown-link">Partial Repiping</Link>
                <Link href="/services/" className="dropdown-link" style={{ fontWeight: 700, borderTop: "1px solid var(--border-light)", marginTop: "0.5rem" }}>View All Services</Link>
              </div>
            </div>

            <div className="nav-item">
              <Link href="/signs-of-a-slab-leak/" className="nav-link">
                Slab Leak Guide
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="/signs-of-a-slab-leak/" className="dropdown-link">Signs of a Slab Leak</Link>
                <Link href="/hot-water-slab-leak-tucson/" className="dropdown-link">Hot-Water Slab Leaks</Link>
                <Link href="/cold-water-slab-leak-tucson/" className="dropdown-link">Cold-Water Slab Leaks</Link>
                <Link href="/slab-leak-repair-cost-tucson/" className="dropdown-link">Slab Leak Repair Cost</Link>
                <Link href="/slab-leak-vs-foundation-problem/" className="dropdown-link">Slab Leak vs. Foundation Problem</Link>
                <Link href="/slab-leak-faq/" className="dropdown-link">FAQs</Link>
              </div>
            </div>

            <div className="nav-item">
              <Link href="/service-areas/" className="nav-link" style={{ textDecoration: "none" }}>
                Service Areas
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="/service-areas/central-tucson/" className="dropdown-link">Central Tucson</Link>
                <Link href="/service-areas/north-tucson/" className="dropdown-link">North Tucson</Link>
                <Link href="/service-areas/east-tucson/" className="dropdown-link">East Tucson</Link>
                <Link href="/service-areas/south-tucson/" className="dropdown-link">South Tucson</Link>
                <Link href="/service-areas/west-tucson/" className="dropdown-link">West Tucson</Link>
                <Link href="/service-areas/oro-valley/" className="dropdown-link">Oro Valley</Link>
                <Link href="/service-areas/catalina-foothills/" className="dropdown-link">Catalina Foothills</Link>
                <Link href="/service-areas/rita-ranch/" className="dropdown-link">Rita Ranch</Link>
                <Link href="/service-areas/" className="dropdown-link" style={{ fontWeight: 700, borderTop: "1px solid var(--border-light)", marginTop: "0.5rem" }}>View All Areas</Link>
              </div>
            </div>

            <div className="nav-item">
              <Link href="/how-slab-leak-detection-works/" className="nav-link">How It Works</Link>
            </div>

            <div className="nav-item">
              <Link href="/blog/" className="nav-link">Blog</Link>
            </div>

            <div className="nav-item">
              <Link href="/contact/" className="nav-link">Contact</Link>
            </div>
          </nav>
          
          {/* Mobile Dropdown Nav */}
          {isMobileMenuOpen && (
            <nav id="mobile-navigation" className="mobile-dropdown" aria-label="Mobile navigation">
              <Link href="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</Link>
              
              <div>
                <button type="button" className="mobile-nav-link mobile-submenu-button" onClick={() => toggleSubmenu('services')} aria-expanded={openSubmenu === 'services'} aria-controls="mobile-services-menu">
                  Services
                  <span aria-hidden="true">{openSubmenu === 'services' ? '−' : '+'}</span>
                </button>
                {openSubmenu === 'services' && (
                  <div id="mobile-services-menu" style={{ backgroundColor: "#1c1c1e" }}>
                    <Link href="/slab-leak-detection-tucson/" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Slab Leak Detection</Link>
                    <Link href="/slab-leak-repair-tucson/" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Slab Leak Repair</Link>
                    <Link href="/emergency-slab-leak-service-tucson/" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Emergency Service</Link>
                    <Link href="/services/" className="mobile-nav-sublink" onClick={toggleMobileMenu}>View All Services</Link>
                  </div>
                )}
              </div>

              <div>
                <button type="button" className="mobile-nav-link mobile-submenu-button" onClick={() => toggleSubmenu('guide')} aria-expanded={openSubmenu === 'guide'} aria-controls="mobile-guide-menu">
                  Slab Leak Guide
                  <span aria-hidden="true">{openSubmenu === 'guide' ? '−' : '+'}</span>
                </button>
                {openSubmenu === 'guide' && (
                  <div id="mobile-guide-menu" style={{ backgroundColor: "#1c1c1e" }}>
                    <Link href="/signs-of-a-slab-leak/" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Signs of a Slab Leak</Link>
                    <Link href="/slab-leak-repair-cost-tucson/" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Repair Cost</Link>
                    <Link href="/slab-leak-faq/" className="mobile-nav-sublink" onClick={toggleMobileMenu}>FAQs</Link>
                  </div>
                )}
              </div>

              <div>
                <button type="button" className="mobile-nav-link mobile-submenu-button" onClick={() => toggleSubmenu('areas')} aria-expanded={openSubmenu === 'areas'} aria-controls="mobile-areas-menu">
                  Service Areas
                  <span aria-hidden="true">{openSubmenu === 'areas' ? '−' : '+'}</span>
                </button>
                {openSubmenu === 'areas' && (
                  <div id="mobile-areas-menu" style={{ backgroundColor: "#1c1c1e" }}>
                    <Link href="/service-areas/central-tucson/" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Central Tucson</Link>
                    <Link href="/service-areas/oro-valley/" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Oro Valley</Link>
                    <Link href="/service-areas/catalina-foothills/" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Catalina Foothills</Link>
                    <Link href="/service-areas/" className="mobile-nav-sublink" onClick={toggleMobileMenu}>View All Areas</Link>
                  </div>
                )}
              </div>

              <Link href="/how-slab-leak-detection-works/" className="mobile-nav-link" onClick={toggleMobileMenu}>How It Works</Link>
              <Link href="/blog/" className="mobile-nav-link" onClick={toggleMobileMenu}>Blog</Link>
              <Link href="/contact/" className="mobile-nav-link" onClick={toggleMobileMenu} style={{ borderBottom: "none" }}>Contact</Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
