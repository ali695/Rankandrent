import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import FaqCategory from '@/components/FaqCategory';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Slab Leak Detection Central Tucson, AZ',
  description: 'Request slab leak detection and repair across Downtown, Midtown, Blenman-Elm and the University area, including ZIPs 85701, 85712, 85716 and 85719.',
  openGraph: {
    title: 'Slab Leak Detection Central Tucson, AZ',
    description: 'Request slab leak detection and repair across Downtown, Midtown, Blenman-Elm and the University area, including ZIPs 85701, 85712, 85716 and 85719.',
    url: 'https://tucsonslableakpros.com/service-areas/central-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Slab Leak Detection Central Tucson, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Detection Central Tucson, AZ",
    description: "Request slab leak detection and repair across Downtown, Midtown, Blenman-Elm and the University area, including ZIPs 85701, 85712, 85716 and 85719.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you provide slab leak detection in Downtown Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Service services cover Downtown Tucson and surrounding ZIP codes, including 85701. Exact coverage and scheduling are confirmed using the property address and ZIP code."
      }
    },
    {
      "@type": "Question",
      "name": "Can a condo have a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A ground-floor unit may have pressurized plumbing beneath concrete, but the leak may also involve a shared building line. The meter arrangement and ownership of the pipe should be checked before repair responsibility is assigned."
      }
    },
    {
      "@type": "Question",
      "name": "Does a warm floor near the University area confirm a hot-water leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A warm area can be caused by a leaking hot-water line, sunlight, ductwork, or another heat source. Hot-line isolation and pressure testing help determine whether plumbing water loss is involved."
      }
    },
    {
      "@type": "Question",
      "name": "Can the leak be located without removing tile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many leaks can be narrowed down with meter checks, pressure testing, line isolation, and acoustic or electronic equipment. A limited access opening may still be needed for confirmation or repair."
      }
    },
    {
      "@type": "Question",
      "name": "Who handles drywall or tile repair afterward?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That depends on the assigned plumbing provider and the written scope. The estimate should state whether concrete closure, tile, drywall, paint, or other surface restoration is included."
      }
    },
    {
      "@type": "Question",
      "name": "Is ZIP code 85722 treated like a normal residential service area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coverage for 85722 should be confirmed by the exact address because it may be used for institutional or special delivery purposes rather than a standard residential neighborhood."
      }
    }
  ]
};

export default function CentralTucson() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Detection Central Tucson, AZ", "description": "Request slab leak detection and repair across Downtown, Midtown, Blenman-Elm and the University area, including ZIPs 85701, 85712, 85716 and 85719.", "url": "https://tucsonslableakpros.com/service-areas/central-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "8rem 0 6rem", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <Image title="Slab leak detection Central Tucson" src="/images/hero_home.jpg" alt="Slab leak technician serving Central Tucson" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.4 }} priority />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>LOCAL COVERAGE AREA</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Detection and Repair in Central Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  A hidden water-line leak can develop beneath tile, concrete, or finished flooring without showing a clear source at the surface. 
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Tucson Leak Pros connects property owners in Central Tucson with <a href="/slab-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak detection</a>, <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>, pipe repair, and <a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water-line rerouting</a> services based on the property ZIP code and the symptoms reported.
                </p>
                
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  <a href="#contact" className="btn-primary" style={{ backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>REQUEST LEAK DETECTION</a>
                  <a href="tel:555-555-5555" className="btn-secondary" style={{ backgroundColor: "transparent", color: "var(--white)", border: "2px solid var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>CALL ABOUT SUSPECTED LEAK</a>
                </div>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2.5rem", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <h3 style={{ color: "var(--dark-charcoal)", fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check Central Availability</h3>
                <ZipCheckerForm />
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b", textAlign: "center" }}>Main ZIP Codes: 85701, 85712, 85716, 85719</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem", textAlign: "center" }}>Neighborhoods Served Around Central Tucson</h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
              We provide professional <strong>slab leak detection in Downtown Tucson AZ</strong> and surrounding areas. Our service area covers the main communities naturally without creating a separate request for every neighborhood.
            </p>
            
            
            <div style={{ position: "relative", width: "100%", height: "300px", marginBottom: "2rem", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
              <Image src="/images/hero_home.jpg" alt="Residential slab leak service area in Central Tucson" fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
              {['Downtown Tucson', 'Armory Park', 'Barrio Viejo', 'El Presidio', 'Iron Horse', 'West University', 'North University', "Feldman's", 'Jefferson Park', 'Blenman-Elm', 'Sam Hughes', 'Miramonte', 'Doolen-Fruitvale', 'Oak Flower'].map((area) => (
                <div key={area} style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", borderLeft: "4px solid var(--brand-red)", fontWeight: "600", color: "var(--dark-charcoal)", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Service Context */}
        <section style={{ padding: "5rem 0", backgroundColor: "var(--white)" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>What We Know About Central Tucson Properties</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Central Tucson includes detached homes, condominiums, duplexes, and small multifamily buildings. Before assuming the leak is under the slab, a <strong>slab leak plumber Midtown Tucson</strong> may need to separate private unit plumbing from shared building lines, irrigation, common water meters, or appliance connections. 
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Access can also vary from a ground-floor home with tile to a unit where the plumbing route passes through shared walls or ceilings. When executing a <strong><a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak repair</a> Central Tucson</strong>, planning around these layouts is vital to minimize disruption.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A common request begins with a meter that continues moving after faucets, toilets, and appliances have been checked. In another case, a resident may notice a warm strip across tile or hear water running near an interior wall. If you need a <strong>plumber for a hidden pipe leak near the University area</strong>, these clues justify testing, but they do not prove the exact location. 
              </p>
            </div>
            <div>
              <div style={{ backgroundColor: "#18181b", padding: "3rem", borderRadius: "12px", color: "var(--white)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1.5rem", color: "var(--brand-red)" }}>When to Request Slab Leak Detection</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Warm or hot flooring:</strong> A leaking hot-water line may transfer heat through concrete or tile, creating a need for <strong>warm tile floor leak detection in Central Tucson</strong>.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Water-meter movement:</strong> Continuous movement while fixtures are off suggests water loss somewhere on the metered system.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Damp flooring or baseboards:</strong> Moisture without an obvious source may come from an under-slab line, wall pipe, exterior service line, or drainage problem.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Running-water sound:</strong> A pressurized leak can create a hiss or flowing sound traveling through framing.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong><a href="/cold-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Unexplained water use</a>:</strong> A bill increase or high-use alert should lead to checks of toilets, irrigation, pools, appliances, and the private service line before final diagnosis.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Process Grid */}
        <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem" }}>DETECTION PROCESS</span>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>How Hidden Water-Line Testing Works</h2>
              <p style={{ fontSize: "1.1rem", color: "#64748b", maxWidth: "700px", margin: "1rem auto 0" }}>
                We follow a structured process on every visit instead of jumping straight to opening your floor. Here is what our detection process looks like and what you can expect at each step.
              </p>
            </div>
            
            
            <div style={{ position: "relative", width: "100%", height: "400px", marginBottom: "3rem", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <Image src="/images/electronic_leak_detection.jpg" alt="Plumbing technician performing electronic leak detection in Central Tucson" fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>1. Review the symptoms</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We ask you when the problem started, which rooms are affected, whether the floor feels warm, and whether water is actively spreading. Your observations help us target the right area fast.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>2. Check visible sources</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We check your toilets, faucets, appliance connections, irrigation system, and any accessible service lines to rule out visible leaks before going under the slab.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>3. Confirm water loss</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We check your water meter and perform pressure testing to determine whether a pressurized plumbing section is losing water.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>4. Isolate the affected system</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We test your hot and cold lines separately using calibrated pressure gauges, which tells us exactly which system is losing water and how fast.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>5. Locate the suspected route</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We deploy acoustic, electronic, and thermal detection equipment as needed. No single method works perfectly in every home, and we are upfront about that.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>6. Compare repair options</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We walk you through your repair options — direct spot repair, water-line rerouting, or partial repiping — with honest cost comparisons so you can make the right decision for your home.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Options & Available Services */}
        <section style={{ padding: "5rem 0", backgroundColor: "var(--white)" }}>
          <div className="container">
            <div className="split-grid" style={{ marginBottom: "5rem" }}>
              <div>
                <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Direct Pipe Repair, Rerouting, and Selected Repiping</h2>
                <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                  Once we identify the affected line, we explain exactly why we recommend a specific repair method for your property. The lowest-disruption option is not always the cheapest, and we make sure you understand the trade-offs before any work begins.
                </p>
                <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                  <strong>Planning the work:</strong> In dense central neighborhoods, technicians may need clear access to the water meter, water heater, shutoff valves, and the rooms where symptoms appear. Condominiums and rental properties may also require coordination with an owner, manager, or association before an <strong>under-slab pipe repair Central Tucson</strong> begins. Detection should come before unnecessary demolition.
                </p>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Spot Repair</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> We confirm the failure is isolated to a single point and the surrounding pipe is still in good condition. Best for for repair. <br/><strong>Limitations:</strong> A <strong>slab leak repair in ZIP codes 85701 85712 85716 and 85719</strong> usually requires controlled floor and concrete access near the damaged section.</p>
                </div>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Water-Line Rerouting</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> The under-slab route is difficult to reach, finished surfaces are a concern, or bypassing the line is practical. <br/><strong>Limitations:</strong> <strong>Water-line rerouting for a Central Tucson home</strong> may avoid slab access but can require openings in walls, ceilings, attic space, garages, or exterior surfaces.</p>
                </div>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Partial Repiping</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> We recommend this when the same pipe branch has failed multiple times or shows widespread corrosion that makes spot repairs a short-term fix. <br/><strong>Limitations:</strong> We plan a new pipe route through your walls or attic and reconnect all fixtures served by the failing branch.</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>Slab Leak Services Offered Across Central Tucson</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              <Link href="/slab-leak-detection-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Slab Leak Detection</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Confirm <strong>water leak detection Downtown Tucson</strong> and narrow the affected hot or cold line.</p>
                </div>
              </Link>
              <Link href="/slab-leak-repair-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Slab Leak Repair</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We repair or bypass confirmed pipe failures beneath your concrete slab with minimal disruption to your flooring.</p>
                </div>
              </Link>
              <Link href="/water-line-pressure-testing-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Pressure Testing</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We run calibrated pressure tests on your hot and cold lines separately to confirm exactly which system is leaking.</p>
                </div>
              </Link>
              <Link href="/water-line-rerouting-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Water-Line Rerouting</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We install a brand-new water line through your walls or attic, permanently bypassing the failing under-slab pipe.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Slab Leak Questions from Central Tucson Property Owners</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Frequently Asked Questions"
                iconName="MessageCircleQuestion"
                faqs={faqSchema.mainEntity.map((faq: any, idx: number) => ({
                  id: `faq-${idx}`,
                  question: faq.name,
                  answer: faq.acceptedAnswer.text
                }))}
              />
            </div>
            
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <p style={{ color: "#64748b", marginBottom: "1rem" }}><strong>Related Areas:</strong> <Link href="/service-areas/north-tucson" style={{ color: "var(--brand-red)" }}>North Tucson and Casas Adobes</Link> | <Link href="/service-areas/east-tucson" style={{ color: "var(--brand-red)" }}>East Tucson</Link></p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <div style={{ position: "relative", width: "100%", height: "300px", marginBottom: "2rem", borderRadius: "12px", overflow: "hidden" }}>
              <Image src="/images/hero_emergency_leak.jpg" alt="Requesting slab leak service at a Central Tucson property" fill sizes="(max-width: 768px) 100vw, 800px" style={{ objectFit: "cover" }} />
            </div>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--white)" }}>Request Slab Leak Service in Central Tucson</h2>
            <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "3rem", lineHeight: "1.6" }}>
              Provide the property address or ZIP code, the symptoms you have noticed, and whether water is actively spreading. Coverage, service availability, response time, and the appropriate next step will be confirmed before work is scheduled.
            </p>
            <div style={{ backgroundColor: "var(--white)", padding: "3rem", borderRadius: "12px", textAlign: "left", color: "var(--dark-charcoal)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check Central Availability Now</h3>
              <ZipCheckerForm />
            </div>
          </div>
        </section>

      </main>
<style dangerouslySetInnerHTML={{__html: `
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      `}} />
    </>
  );
}
