import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import FaqCategory from '@/components/FaqCategory';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  alternates: { canonical: "/service-areas/oro-valley/" },
  title: 'Slab Leak Detection Oro Valley & Northwest Tucson',
  description: 'Request hidden water-line detection, slab leak repair and rerouting across Oro Valley, Rancho Vistoso and Northwest Tucson ZIP codes.',
  openGraph: {
    title: 'Slab Leak Detection Oro Valley & Northwest Tucson',
    description: 'Request hidden water-line detection, slab leak repair and rerouting across Oro Valley, Rancho Vistoso and Northwest Tucson ZIP codes.',
    url: 'https://tucsonslableakpros.com/service-areas/oro-valley/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Slab Leak Detection Oro Valley & Northwest Tucson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Detection Oro Valley & Northwest Tucson",
    description: "Request hidden water-line detection, slab leak repair and rerouting across Oro Valley, Rancho Vistoso and Northwest Tucson ZIP codes.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you cover Rancho Vistoso and ZIP code 85755?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, services are available across Rancho Vistoso and nearby Oro Valley areas. Provider availability is confirmed for the exact address."
      }
    },
    {
      "@type": "Question",
      "name": "Does a warm tile path mean the hot-water line is leaking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a useful warning sign, but not proof. Sunlight, ductwork, and other heat sources can also warm flooring. Hot-line pressure testing helps confirm water loss."
      }
    },
    {
      "@type": "Question",
      "name": "Can detection protect expensive tile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Detection can reduce unnecessary opening by narrowing the suspected line and area. It cannot guarantee that no tile, concrete, wall, or ceiling access will be required for final confirmation or repair."
      }
    },
    {
      "@type": "Question",
      "name": "Is rerouting common after an Oro Valley slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rerouting may be considered when slab access is difficult, the affected pipe route is long, or the surrounding pipe condition makes a spot repair less attractive. The best option depends on the home."
      }
    },
    {
      "@type": "Question",
      "name": "Can one hot-water branch be replaced without repiping the entire house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Often, a single branch or selected route can be replaced. Testing and an inspection of the plumbing layout are needed before that recommendation is made."
      }
    },
    {
      "@type": "Question",
      "name": "What should the repair estimate include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It should identify detection charges, the plumbing method, materials, testing, access, surface restoration responsibilities, warranty terms, and any exclusions."
      }
    }
  ]
};

export default function OroValleyNorthwestTucson() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Detection Oro Valley & Northwest Tucson", "description": "Request hidden water-line detection, slab leak repair and rerouting across Oro Valley, Rancho Vistoso and Northwest Tucson ZIP codes.", "url": "https://tucsonslableakpros.com/service-areas/oro-valley/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "8rem 0 6rem", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <Image title="Slab leak detection Oro Valley" src="/images/oro_valley_hero.webp" alt="Slab leak technician serving Oro Valley and Northwest Tucson" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.4 }} priority />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>LOCAL COVERAGE AREA</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Detection and Repair in Oro Valley and Northwest Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Homeowners in Oro Valley, Rancho Vistoso, and nearby Northwest Tucson communities can request <a href="/slab-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak detection</a>, water-line testing, repair, and rerouting services. 
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  A concealed leak may first appear as a warm tile area, <a href="/cold-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>unexplained water use</a>, pressure loss, or a water heater that runs more often than expected. Testing helps identify the affected line before the repair plan is chosen.
                </p>
                
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  <a href="#contact" className="btn-primary" style={{ backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>REQUEST LEAK DETECTION</a>
                  <a href="tel:555-555-5555" className="btn-secondary" style={{ backgroundColor: "transparent", color: "var(--white)", border: "2px solid var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>CALL ABOUT SUSPECTED LEAK</a>
                </div>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2.5rem", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <h3 style={{ color: "var(--dark-charcoal)", fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check Oro Valley Availability</h3>
                <ZipCheckerForm />
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b", textAlign: "center" }}>Main ZIP Codes: 85737, 85742, 85755</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem", textAlign: "center" }}>Neighborhoods Served Around Oro Valley & Northwest Tucson</h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
              We provide slab leak detection across Oro Valley and Northwest Tucson. Because neighborhood and ZIP boundaries overlap, we confirm coverage from the full address and handle the request without asking homeowners to select a separate page for every community.
            </p>
            
            
            <div style={{ position: "relative", width: "100%", height: "300px", marginBottom: "2rem", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
              <Image src="/images/oro_valley_hero.webp" alt="Residential slab leak service area in Oro Valley and Northwest Tucson" fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
              {['Oro Valley', 'Rancho Vistoso', 'Sun City Oro Valley', 'Stone Canyon', 'La Canada corridor', 'Naranja area', 'north Oro Valley', 'northwest Tucson', 'Tortolita foothill communities'].map((area) => (
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
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>What We Know About Oro Valley Properties</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Oro Valley includes established homes, later planned communities, and newer construction around Rancho Vistoso. Plumbing may include copper or PEX, with mixed materials where branches have been remodeled. Extensive tile, attached garages, utility rooms, and long interior routes affect whether direct <strong><a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak repair</a></strong> or a bypass is less disruptive.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                An 85755 homeowner may see the flow indicator on a digital meter, notice a narrow warm path, or receive a high-use alert. Oro Valley Water Utility offers water-audit information, but plumbing diagnosis still requires separating irrigation and exterior use from a pressurized interior line before acoustic or thermal findings are interpreted.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Utility responsibility and permit requirements should be confirmed for the exact address rather than borrowed from City of Tucson guidance. For Rancho Vistoso and north Oro Valley, the building layout, pipe history, attic exposure, and finished flooring determine whether <strong><a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water-line rerouting</a></strong> is practical.
              </p>
            </div>
            <div>
              <div style={{ backgroundColor: "#18181b", padding: "3rem", borderRadius: "12px", color: "var(--white)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1.5rem", color: "var(--brand-red)" }}>When to Request Slab Leak Detection</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Warm or hot flooring:</strong> A leaking hot-water line may transfer heat through concrete or tile, creating a need for <strong><a href="/hot-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>warm floor</a> leak detection in Rancho Vistoso</strong>.
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
                      <strong>Unexplained water use:</strong> A bill increase or high-use alert should lead to checks of toilets, irrigation, pools, appliances, and the private service line before final diagnosis.
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
              <Image src="/images/electronic_leak_detection.webp" alt="Plumbing technician performing electronic leak detection in Oro Valley and Northwest Tucson" fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>1. Review the symptoms</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We review digital-meter flow, high-use alerts, irrigation timing, water-heater cycling, and whether warmth follows a bathroom or kitchen branch.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>2. Check visible sources</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>Irrigation, pool equipment, softeners, toilets, garage connections, and the meter-to-house route are checked before interior branches are tested.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>3. Confirm water loss</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We check your water meter and perform <strong>hidden water leak testing in ZIP codes 85737 85742 and 85755</strong> to determine whether a pressurized plumbing section is losing water.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>4. Isolate the affected system</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>Hot and cold plumbing is isolated around garage or utility-room valves, and the result is documented over time to confirm that any loss is repeatable.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>5. Locate the suspected route</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We compare the likely route with thermal and acoustic findings across tile, garage slabs, cabinets, and adjoining rooms instead of relying on one image or sound.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>6. Compare repair options</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We compare tile and concrete access with garage, wall, or attic routes, including insulation needs for pipe installed in unconditioned space.</p>
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
                  <strong>Planning the work:</strong> Before repair, the estimate should clarify whether access will be through tile, concrete, drywall, attic space, or a utility area. Homes with valuable finished surfaces may benefit from comparing a focused spot repair with <strong>water-line rerouting Northwest Tucson</strong>. A reroute can reduce slab access, but it can still require openings in walls or ceilings.
                </p>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Spot Repair</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> The failure is isolated and direct access is practical without sacrificing a large area of finished flooring. For a tile-floor home in 85755, the access and tile-replacement plan should be compared with rerouting first. <br/><strong>Limitations:</strong> Spot repair still requires opening the floor and concrete near the pipe.</p>
                </div>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Water-Line Rerouting</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> We recommend this when the under-slab pipe is hard to reach, your flooring is expensive to replace, or bypassing the old line is more practical than digging through concrete. <br/><strong>Limitations:</strong> This avoids breaking through your slab but may require openings in walls, ceilings, or attic space.</p>
                </div>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Partial Repiping</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> One branch has repeated failures or serves several fixtures through an inaccessible slab route. <br/><strong>Limitations:</strong> The new Oro Valley route may require insulated attic piping and openings at each fixture connection, even when tile is preserved.</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>Slab Leak Services Offered Across Oro Valley</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              <Link href="/slab-leak-detection-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Slab Leak Detection</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Confirm water loss and narrow the affected hot or cold line using professional equipment.</p>
                </div>
              </Link>
              <Link href="/slab-leak-repair-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Slab Leak Repair</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Provide a complete <strong>under-slab pipe repair 85737</strong> by repairing or bypassing a confirmed failure.</p>
                </div>
              </Link>
              <Link href="/water-line-pressure-testing-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Pressure Testing</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We compare isolated hot- and cold-line pressure results before interpreting meter, thermal, or acoustic evidence.</p>
                </div>
              </Link>
              <Link href="/water-line-rerouting-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Water-Line Rerouting</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Bypass the failed route through garage, wall, or protected attic space when preserving continuous tile is the priority.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Slab Leak Questions from Oro Valley Property Owners</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Frequently Asked Questions"
                iconName="MessageCircleQuestion"
                faqs={faqSchema.mainEntity.map((faq, idx: number) => ({
                  id: `faq-${idx}`,
                  question: faq.name,
                  answer: faq.acceptedAnswer.text
                }))}
              />
            </div>
            
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <p style={{ color: "#64748b", marginBottom: "1rem" }}><strong>Related Areas:</strong> <Link href="/service-areas/north-tucson" style={{ color: "var(--brand-red)" }}>North Tucson and Casas Adobes</Link> | <Link href="/service-areas/catalina-foothills" style={{ color: "var(--brand-red)" }}>Catalina Foothills & Northeast Tucson</Link></p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <div style={{ position: "relative", width: "100%", height: "300px", marginBottom: "2rem", borderRadius: "12px", overflow: "hidden" }}>
              <Image src="/images/hero_emergency_leak.webp" alt="Requesting slab leak service at a Oro Valley and Northwest Tucson property" fill sizes="(max-width: 768px) 100vw, 800px" style={{ objectFit: "cover" }} />
            </div>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--white)" }}>Request Slab Leak Service in Oro Valley and Northwest Tucson</h2>
            <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "3rem", lineHeight: "1.6" }}>
              Provide the property address or ZIP code, the symptoms you have noticed, and whether water is actively spreading. Coverage, service availability, response time, and the appropriate next step will be confirmed before work is scheduled.
            </p>
            <div style={{ backgroundColor: "var(--white)", padding: "3rem", borderRadius: "12px", textAlign: "left", color: "var(--dark-charcoal)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check Oro Valley Availability Now</h3>
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
