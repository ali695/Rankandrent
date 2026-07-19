import React from 'react';
import { Metadata } from 'next';
import FaqCategory from '@/components/FaqCategory';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';

export const metadata: Metadata = {
  alternates: { canonical: "/water-line-rerouting-tucson/" },
  title: 'Water-Line Rerouting Tucson | Slab Leak Pipe Bypass',
  description: 'Explore water-line rerouting in Tucson to bypass a leaking under-slab pipe through a more accessible wall, ceiling or attic route.',
  openGraph: {
    title: 'Water-Line Rerouting Tucson | Slab Leak Pipe Bypass',
    description: 'Explore water-line rerouting in Tucson to bypass a leaking under-slab pipe through a more accessible wall, ceiling or attic route.',
    url: 'https://tucsonslableakpros.com/water-line-rerouting-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Water-Line Rerouting Tucson | Slab Leak Pipe Bypass",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water-Line Rerouting Tucson | Slab Leak Pipe Bypass",
    description: "Explore water-line rerouting in Tucson to bypass a leaking under-slab pipe through a more accessible wall, ceiling or attic route.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Water-Line Rerouting",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Water-line rerouting services in Tucson to bypass leaking under-slab plumbing lines through walls, ceilings, or attics."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does rerouting avoid all cutting and demolition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A slab leak repair without opening concrete floor avoids floor damage, but the replacement line usually requires drywall access through walls or ceilings."
      }
    },
    {
      "@type": "Question",
      "name": "Can only one leaking line be rerouted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Often, one confirmed branch can be rerouted without repiping the entire home. The provider should first map which fixtures share that branch and where the replacement line can connect."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to the old pipe under the slab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The old section is normally taken out of service by disconnecting and capping it at the appropriate points. The written scope should identify what will be abandoned and how it will be verified."
      }
    },
    {
      "@type": "Question",
      "name": "Is rerouting always cheaper than direct repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Rerouting cost vs slab repair cost depends on the route length, number of drywall openings needed, and finish restoration."
      }
    },
    {
      "@type": "Question",
      "name": "Can a hot-water line be rerouted through the attic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A hot-water line may be routed through a wall, ceiling, or attic when the path is suitable. Material limits, supports, insulation, heat exposure, access, and local requirements all need to be considered."
      }
    }
  ]
};

export default function WaterLineRerouting() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Water-Line Rerouting Tucson | Slab Leak Pipe Bypass", "description": "Explore water-line rerouting in Tucson to bypass a leaking under-slab pipe through a more accessible wall, ceiling or attic route.", "url": "https://tucsonslableakpros.com/water-line-rerouting-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Section Damp Floor Tucson" src="/images/section_damp_floor.webp" alt="Residential damp floor in Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>BYPASS DAMAGED UNDER-SLAB LINES</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Water-Line Rerouting Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Water-line rerouting bypasses a confirmed leaking section below the slab by creating a replacement path through a wall, ceiling, or attic. It can avoid opening finished flooring, although drywall and connection access are usually still required.
                 Homes in <a href="/service-areas/north-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>North Tucson</a> vary in layout, so the route must be planned around framing, utilities, and fixture locations.</p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  The old line is disconnected from the active system, and the new line is supported, protected, connected, and tested. In <a href="/service-areas/rita-ranch/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Rita Ranch</a> and elsewhere in Tucson, the best option depends on access, pipe history, finish restoration, and the condition of nearby plumbing.</p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Isolate the confirmed leaking branch
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Plan an accessible replacement route
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Test and document the completed line
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Content Section 1: A New Route */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>A Replacement Water-Line Route</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Slab leak pipe rerouting is considered when direct access would seriously affect finished flooring, when the same route has failed before, or when an accessible replacement path offers a clearer repair scope. The confirmed damaged section is removed from active service.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A route through wall cavities, ceilings, or an attic must account for framing, electrical and mechanical systems, heat exposure, pipe supports, insulation, and future access. Hot- and cold-water lines may need different material and routing details.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Section Water Meter Tucson" src="/images/section_water_meter.webp" alt="Residential water meter in Tucson" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* When Considered & Routes Split */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Rerouting vs Spot Repair</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem", color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Pipe condition:</strong> A single isolated failure may suit spot repair; repeated failures or broader deterioration may support rerouting.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong><a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Slab leak repair</a> without opening concrete floor:</strong> Rerouting shifts restoration from the floor to smaller drywall patches.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Repair history:</strong> A previous failure on the same route is useful evidence, but it does not make rerouting automatic.</li>
              </ul>
            </div>
            
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Planning a Replacement Water-Line Route</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                The proposal should show where the new line begins and ends, which fixtures it serves, the planned pipe material and size, and every expected access opening. Compare that limited reroute with <a href="/partial-repiping-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>partial repiping</a> if more than one branch is affected.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                Also confirm whether drywall patching, texture, paint, insulation replacement, permits, and fixture reconnection are included. These details often determine the complete project cost more than the pipe alone.
              </p>
            </div>
          </div>
        </section>

                        <ZigZagBlocks blocks={[
          {
            heading: "The Rerouting Process Step by Step",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A <a href="/water-line-rerouting-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>water-line reroute</a> begins by confirming the leaking branch and mapping the fixtures it serves. The provider then plans a route that limits access work while respecting framing, utilities, material requirements, and serviceability.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The approved pipe is installed with the required supports and protection. Insulation may be needed in unconditioned areas. Connections are tested under a documented procedure before the old under-slab section is disconnected and capped.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Project time depends on route length, number of fixture connections, attic or wall access, inspections, and finish restoration. The final documentation should identify the new route, test results, abandoned section, and any remaining work.</p></>,
            imageSrc: "/images/water_line_rerouting.webp",
            imageAlt: "Water line rerouting process",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Comparing PEX and Copper for a Reroute",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>PEX is flexible, so some routes can be installed with fewer directional fittings and smaller access openings than rigid copper. Copper is rigid, familiar to many installers, and may fit particular exposed or connection details. Neither material is right for every path.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Selection should follow local requirements, manufacturer instructions, temperature and pressure ratings, water conditions, and the provider's installation plan. Ask for the product name, joining method, warranty terms, and explanation of how the pipe will be protected from heat, abrasion, fasteners, and ultraviolet exposure.</p></>,
            imageSrc: "/images/partial_repiping.webp",
            imageAlt: "Using PEX for rerouting",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Protecting Pipes in Unconditioned Attics",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>An unconditioned Tucson attic can become very hot, and standing water in an overhead line may warm before a fixture is opened. Heat exposure also matters when selecting pipe, fittings, supports, and clearances.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The route and insulation should match the design, manufacturer instructions, and local requirements. Insulation can reduce heat transfer and energy loss, but it does not prevent a <a href="/cold-water-slab-leak-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>cold-water leak</a>. Proper supports, protection at framing penetrations, and accessible connections remain essential.</p></>,
            imageSrc: "/images/hero_water_line_rerouting.webp",
            imageAlt: "Pipe insulation in attic",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Minimizing Drywall Damage",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A reroute trades slab and flooring access for openings along the replacement path. The number and size of openings depend on framing, fixture connections, fire blocking, insulation, and the pipe's required bend and support details.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Ask the provider to mark expected openings before work begins and explain whether exploratory access could reveal additional needs. For a larger <a href="/partial-repiping-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>partial repipe</a>, confirm which walls and fixtures are included. The estimate should state who patches, textures, and paints the drywall.</p></>,
            imageSrc: "/images/slab_leak_detection_vs_repair.webp",
            imageAlt: "Minimizing drywall damage",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Water-Line Rerouting FAQ"
                iconName="MessageCircleQuestion"
                faqs={faqSchema.mainEntity.map((faq, idx: number) => ({
                  id: `faq-${idx}`,
                  question: faq.name,
                  answer: faq.acceptedAnswer.text
                }))}
              />
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <a href="/slab-leak-faq/" style={{ color: "var(--brand-red)", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>
                  View All Slab Leak FAQs →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Slab Leak Repair Tucson" src="/images/slab_leak_repair.webp" alt="Tucson slab leak repair services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>REVIEW THE COMPLETE ROUTE</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Compare Rerouting Options in Tucson</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Request a route plan that shows fixture connections, expected access, pipe material, testing, restoration, and the old section being removed from service.
                </p>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>
      </main>
</>
  );
}
