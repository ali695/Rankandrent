import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZipCodeDirectory from '@/components/ZipCodeDirectory';

export const metadata: Metadata = {
  title: 'Slab Leak Service Areas in Tucson, AZ',
  description: 'Check slab leak service availability across Tucson, Oro Valley, Catalina Foothills, Rita Ranch and surrounding ZIP codes.',
  openGraph: {
    title: 'Slab Leak Service Areas in Tucson, AZ',
    description: 'Check slab leak service availability across Tucson, Oro Valley, Catalina Foothills, Rita Ranch and surrounding ZIP codes.',
    url: 'https://tucsonslableakpros.com/service-areas/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Slab Leak Service Areas in Tucson, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Service Areas in Tucson, AZ",
    description: "Check slab leak service availability across Tucson, Oro Valley, Catalina Foothills, Rita Ranch and surrounding ZIP codes.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const areaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Slab Leak Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": [
    { "@type": "City", "name": "Tucson" },
    { "@type": "City", "name": "Oro Valley" },
    { "@type": "City", "name": "Marana" },
    { "@type": "City", "name": "Catalina Foothills" }
  ]
};

export default function ServiceAreas() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Service Areas in Tucson, AZ", "description": "Check slab leak service availability across Tucson, Oro Valley, Catalina Foothills, Rita Ranch and surrounding ZIP codes.", "url": "https://tucsonslableakpros.com/service-areas/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }} />
      <main>
        {/* 1. Hero Section (FCS Style) */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          {/* Dark Overlay Background */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Hero Hot Water Leak Tucson" src="/images/hero_hot_water_leak.jpg" alt="Tucson hot water leak experts" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>LOCAL COVERAGE</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Tucson Service Areas</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  We provide expert hidden water leak detection and <a href="/under-slab-pipe-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>under-slab pipe repair</a> across the greater Tucson region. Enter your ZIP code to check local availability.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Rapid local response
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Familiar with Tucson hard water issues
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Licensed & insured in Arizona
                  </li>
                </ul>
              </div>

              {/* FCS Style Hero Form Box */}
              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* 2. Primary Service Areas Grid */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem" }}>Primary Coverage Zones</h2>
            
            <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {/* Card 1 */}
              <div className="location-card" style={{ backgroundColor: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column", borderTop: "4px solid var(--brand-red)", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
                <div style={{ position: "relative", paddingTop: "60%" }}>
                  <img title="Section Water Meter Tucson" src="/images/section_water_meter.jpg" alt="Residential water meter in Tucson" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#e4e4e7" }} />
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ marginBottom: "0.5rem", color: "var(--dark-charcoal)", fontSize: "1.3rem" }}>Central Tucson</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", marginBottom: "1rem" }}>Historic homes and aging copper pipes often require careful acoustic detection before replacing sections.</p>
                  <a href="/service-areas/central-tucson/" style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "0.9rem", textDecoration: "none", marginTop: "auto" }}>View Central Tucson Area →</a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="location-card" style={{ backgroundColor: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column", borderTop: "4px solid var(--brand-red)", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
                <div style={{ position: "relative", paddingTop: "60%" }}>
                  <img title="Section Thermal Camera Tucson" src="/images/section_thermal_camera.jpg" alt="Residential thermal camera in Tucson" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#e4e4e7" }} />
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ marginBottom: "0.5rem", color: "var(--dark-charcoal)", fontSize: "1.3rem" }}>North Tucson & Casas Adobes</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", marginBottom: "1rem" }}>Post-tension slabs and expansive soils in this area make precise locating critical before accessing pipes.</p>
                  <a href="/service-areas/north-tucson/" style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "0.9rem", textDecoration: "none", marginTop: "auto" }}>View North Tucson Area →</a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="location-card" style={{ backgroundColor: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column", borderTop: "4px solid var(--brand-red)", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
                <div style={{ position: "relative", paddingTop: "60%" }}>
                  <img title="Slab Leak Service Process Tucson" src="/images/slab_leak_service_process.jpg" alt="Tucson slab leak service process services" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#e4e4e7" }} />
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ marginBottom: "0.5rem", color: "var(--dark-charcoal)", fontSize: "1.3rem" }}>Oro Valley</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", marginBottom: "1rem" }}>High water pressure and hard water can accelerate pipe degradation. We offer full <a href="/partial-repiping-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>repiping</a> and spot repairs.</p>
                  <a href="/service-areas/oro-valley/" style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "0.9rem", textDecoration: "none", marginTop: "auto" }}>View Oro Valley Area →</a>
                </div>
              </div>

              {/* Card 4 */}
              <div className="location-card" style={{ backgroundColor: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column", borderTop: "4px solid var(--brand-red)", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
                <div style={{ position: "relative", paddingTop: "60%" }}>
                  <img title="Partial Repiping Tucson" src="/images/partial_repiping.jpg" alt="Tucson partial repiping services" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#e4e4e7" }} />
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ marginBottom: "0.5rem", color: "var(--dark-charcoal)", fontSize: "1.3rem" }}>Catalina Foothills</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", marginBottom: "1rem" }}>Complex custom home layouts often require <a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water-line rerouting</a> through the attic to bypass concrete.</p>
                  <a href="/service-areas/catalina-foothills/" style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "0.9rem", textDecoration: "none", marginTop: "auto" }}>View Catalina Foothills Area →</a>
                </div>
              </div>

              {/* Card 5 */}
              <div className="location-card" style={{ backgroundColor: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column", borderTop: "4px solid var(--brand-red)", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
                <div style={{ position: "relative", paddingTop: "60%" }}>
                  <img title="Water Line Rerouting Tucson" src="/images/water_line_rerouting.jpg" alt="Tucson water line rerouting services" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#e4e4e7" }} />
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ marginBottom: "0.5rem", color: "var(--dark-charcoal)", fontSize: "1.3rem" }}>East Tucson</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", marginBottom: "1rem" }}>Rapid response for sudden pressure loss or active water spreading across flooring in East side neighborhoods.</p>
                  <a href="/service-areas/east-tucson/" style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "0.9rem", textDecoration: "none", marginTop: "auto" }}>View East Tucson Area →</a>
                </div>
              </div>

              {/* Card 6 */}
              <div className="location-card" style={{ backgroundColor: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column", borderTop: "4px solid var(--brand-red)", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
                <div style={{ position: "relative", paddingTop: "60%" }}>
                  <img title="Slab Leak Detection Vs Repair Tucson" src="/images/slab_leak_detection_vs_repair.jpg" alt="Tucson slab leak detection vs repair services" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#e4e4e7" }} />
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ marginBottom: "0.5rem", color: "var(--dark-charcoal)", fontSize: "1.3rem" }}>Rita Ranch</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", marginBottom: "1rem" }}>Polybutylene pipe issues and newer slab construction methods require specialized isolation testing.</p>
                  <a href="/service-areas/rita-ranch/" style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "0.9rem", textDecoration: "none", marginTop: "auto" }}>View Rita Ranch Area →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The 4-Step Process Section */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem" }}>Our Process for Tucson Homeowners</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "#fafafa", textAlign: "center" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1rem" }}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>1. Symptom Review</h3>
                <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6" }}>We look at the specific signs of damage in your home.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "#fafafa", textAlign: "center" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1rem" }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>2. <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Pressure Testing</a></h3>
                <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6" }}>We connect gauges to confirm if the system is actively losing water.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "#fafafa", textAlign: "center" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1rem" }}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>3. Line Isolation</h3>
                <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6" }}>We isolate the hot and cold sides to determine which branch is compromised.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "#fafafa", textAlign: "center" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1rem" }}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>4. Acoustic Locating</h3>
                <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6" }}>We use electronic equipment to pinpoint the exact failure beneath the concrete.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Complete ZIP Directory for SEO */}
        <ZipCodeDirectory />

        {/* 5. Bottom CTA (Matches Hero) */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          {/* Dark Overlay Background */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Electronic Leak Detection Tucson" src="/images/electronic_leak_detection.jpg" alt="Tucson electronic leak detection services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>READY TO FIND THE LEAK?</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Schedule Your Expert Leak Evaluation</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Provide the details of your plumbing issue, and we will contact you to confirm service availability and schedule your diagnostic.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <span style={{ color: "var(--brand-red)" }}>✓</span> Explain your symptoms
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <span style={{ color: "var(--brand-red)" }}>✓</span> Confirm service availability
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <span style={{ color: "var(--brand-red)" }}>✓</span> Review the appropriate next step
                  </li>
                </ul>
              </div>

              {/* FCS Style Bottom Form Box */}
              <ZipCheckerForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
