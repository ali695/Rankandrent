"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

type MenuLink = {
  href: string;
  label: string;
  emphasized?: boolean;
};

type MenuGroup = {
  id: string;
  href: string;
  label: string;
  links: MenuLink[];
};

const menuGroups: MenuGroup[] = [
  {
    id: "services",
    href: "/services/",
    label: "Services",
    links: [
      { href: "/slab-leak-detection-tucson/", label: "Slab Leak Detection" },
      { href: "/slab-leak-repair-tucson/", label: "Slab Leak Repair" },
      { href: "/emergency-slab-leak-service-tucson/", label: "Emergency Slab Leak Service" },
      { href: "/water-line-rerouting-tucson/", label: "Water-Line Rerouting" },
      { href: "/under-slab-pipe-repair-tucson/", label: "Under-Slab Pipe Repair" },
      { href: "/electronic-leak-detection-tucson/", label: "Electronic Leak Detection" },
      { href: "/water-line-pressure-testing-tucson/", label: "Pressure Testing" },
      { href: "/partial-repiping-tucson/", label: "Partial Repiping" },
      { href: "/services/", label: "View All Services", emphasized: true },
    ],
  },
  {
    id: "guide",
    href: "/signs-of-a-slab-leak/",
    label: "Slab Leak Guide",
    links: [
      { href: "/signs-of-a-slab-leak/", label: "Signs of a Slab Leak" },
      { href: "/hot-water-slab-leak-tucson/", label: "Hot-Water Slab Leaks" },
      { href: "/cold-water-slab-leak-tucson/", label: "Cold-Water Slab Leaks" },
      { href: "/slab-leak-repair-cost-tucson/", label: "Slab Leak Repair Cost" },
      { href: "/slab-leak-vs-foundation-problem/", label: "Slab Leak vs. Foundation Problem" },
      { href: "/slab-leak-faq/", label: "FAQs" },
    ],
  },
  {
    id: "areas",
    href: "/service-areas/",
    label: "Service Areas",
    links: [
      { href: "/service-areas/central-tucson/", label: "Central Tucson" },
      { href: "/service-areas/north-tucson/", label: "North Tucson" },
      { href: "/service-areas/east-tucson/", label: "East Tucson" },
      { href: "/service-areas/south-tucson/", label: "South Tucson" },
      { href: "/service-areas/west-tucson/", label: "West Tucson" },
      { href: "/service-areas/oro-valley/", label: "Oro Valley" },
      { href: "/service-areas/catalina-foothills/", label: "Catalina Foothills" },
      { href: "/service-areas/rita-ranch/", label: "Rita Ranch" },
      { href: "/service-areas/", label: "View All Areas", emphasized: true },
    ],
  },
];

const standaloneLinks: MenuLink[] = [
  { href: "/how-slab-leak-detection-works/", label: "How It Works" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    const closeAtDesktopWidth = () => {
      if (window.innerWidth > 1120) {
        setIsMobileMenuOpen(false);
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeAtDesktopWidth);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeAtDesktopWidth);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => {
      if (isOpen) setOpenSubmenu(null);
      return !isOpen;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu((current) => (current === menu ? null : menu));
  };

  const releaseDesktopMenuFocus = () => {
    requestAnimationFrame(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    });
  };

  return (
    <header className="site-header">
      <div className="utility-bar-shell">
        <div className="container utility-bar">
          <a href="tel:5205550199" className="utility-phone-link">
            <Phone size={14} aria-hidden="true" />
            <span>Call Now: (520) 555-0199</span>
          </a>
          <Link href="/contact/" className="utility-request-link">
            Request Leak Detection
          </Link>
        </div>
      </div>

      <div className="main-nav-shell">
        <div className="container main-nav-row">
          <Link href="/" aria-label="Tucson Leak Pros home" className="site-logo" onClick={closeMobileMenu}>
            TUCSON<span>LEAK</span>PROS
          </Link>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>

          <nav className="nav-menu desktop-nav" aria-label="Primary navigation" onClickCapture={releaseDesktopMenuFocus}>
            <div className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </div>

            {menuGroups.map((group) => (
              <div className="nav-item" key={group.id}>
                <Link href={group.href} className="nav-link">
                  {group.label}
                  <ChevronDown className="nav-chevron" size={14} aria-hidden="true" />
                </Link>
                <div className="dropdown-menu">
                  {group.links.map((link) => (
                    <Link
                      href={link.href}
                      className={`dropdown-link${link.emphasized ? " dropdown-link-emphasized" : ""}`}
                      key={`${group.id}-${link.href}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {standaloneLinks.map((link) => (
              <div className="nav-item" key={link.href}>
                <Link href={link.href} className="nav-link">{link.label}</Link>
              </div>
            ))}
          </nav>

          {isMobileMenuOpen && (
            <nav id="mobile-navigation" className="mobile-dropdown" aria-label="Mobile navigation">
              <Link href="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>

              {menuGroups.map((group) => {
                const isOpen = openSubmenu === group.id;
                return (
                  <div className="mobile-menu-group" key={group.id}>
                    <button
                      type="button"
                      className="mobile-nav-link mobile-submenu-button"
                      onClick={() => toggleSubmenu(group.id)}
                      aria-expanded={isOpen}
                      aria-controls={`mobile-${group.id}-menu`}
                    >
                      <span>{group.label}</span>
                      <span className={`mobile-nav-toggle-icon${isOpen ? " is-open" : ""}`} aria-hidden="true">
                        <ChevronDown size={18} />
                      </span>
                    </button>
                    {isOpen && (
                      <div id={`mobile-${group.id}-menu`} className="mobile-submenu">
                        {group.links.map((link) => (
                          <Link
                            href={link.href}
                            className={`mobile-nav-sublink${link.emphasized ? " mobile-nav-sublink-emphasized" : ""}`}
                            onClick={closeMobileMenu}
                            key={`mobile-${group.id}-${link.href}`}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {standaloneLinks.map((link) => (
                <Link href={link.href} className="mobile-nav-link" onClick={closeMobileMenu} key={`mobile-${link.href}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
