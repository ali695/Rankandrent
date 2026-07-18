import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import FaqCategory from '@/components/FaqCategory';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Slab Leak Detection Catalina Foothills, Tucson',
  description: 'Find slab leak detection and repair services across Catalina Foothills, Sabino Canyon, Tanque Verde and Northeast Tucson.',
  openGraph: {
    title: 'Slab Leak Detection Catalina Foothills, Tucson',
    description: 'Find slab leak detection and repair services across Catalina Foothills, Sabino Canyon, Tanque Verde and Northeast Tucson.',
    url: 'https://tucsonslableakpros.com/service-areas/catalina-foothills/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Slab Leak Detection Catalina Foothills, Tucson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Detection Catalina Foothills, Tucson",
    description: "Find slab leak detection and repair services across Catalina Foothills, Sabino Canyon, Tanque Verde and Northeast Tucson.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you serve Catalina Foothills ZIP codes 85718 and 85750?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve both ZIP codes and nearby foothill communities. Exact availability is confirmed using the service address."
      }
    },
    {
      "@type": "Question",
      "name": "Can a slab leak be located beneath stone or thick tile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It may be possible to narrow the leak with pressure testing, line isolation, acoustic equipment, and other methods. Thick finishes can affect sound transmission and may require more than one test."
      }
    },
    {
      "@type": "Question",
      "name": "Does thermal imaging show the exact pipe break?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thermal imaging may show temperature patterns associated with a hot-water leak. It does not see through concrete like an X-ray and should be used with other testing."
      }
    },
    {
      "@type": "Question",
      "name": "Can a leak on a sloped lot appear far from the damaged pipe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Water can travel along surfaces, joints, or lower areas before it becomes visible. The visible moisture point may not be the pipe failure location."
      }
    },
    {
      "@type": "Question",
      "name": "Will rerouting avoid damage to finished flooring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It may avoid opening the slab, but a new route can require wall, ceiling, garage, attic, or exterior access. The provider should compare both disruption types."
      }
    },
    {
      "@type": "Question",
      "name": "Is moisture near an exterior wall always a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Irrigation, roof drainage, exterior service lines, condensation, and sealing issues can produce similar moisture. Plumbing testing is needed before repair."
      }
    }
  ]
};

export default function CatalinaFoothillsNortheastTucson() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Detection Catalina Foothills, Tucson", "description": "Find slab leak detection and repair services across Catalina Foothills, Sabino Canyon, Tanque Verde and Northeast Tucson.", "url": "https://tucsonslableakpros.com/service-areas/catalina-foothills/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "8rem 0 6rem", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <Image title="Slab leak detection Catalina Foothills" src="/images/catalina_foothills_hero.jpg" alt="Slab leak technician serving Catalina Foothills and Northeast Tucson" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.4 }} priority />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>LOCAL COVERAGE AREA</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Detection and Repair in Catalina Foothills and Northeast Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  <a href="/slab-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Slab leak detection</a> and repair services across Catalina Foothills, Sabino Canyon, Tanque Verde, Bear Canyon, and nearby Northeast Tucson communities. 
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  We start by confirming whether a water line is losing pressure. From there, we narrow the suspected route and area, then compare direct repair, rerouting, and targeted repiping based on the evidence and access conditions.
                </p>
                
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  <a href="#contact" className="btn-primary" style={{ backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>REQUEST LEAK DETECTION</a>
                  <a href="tel:555-555-5555" className="btn-secondary" style={{ backgroundColor: "transparent", color: "var(--white)", border: "2px solid var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>CALL ABOUT SUSPECTED LEAK</a>
                </div>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2.5rem", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <h3 style={{ color: "var(--dark-charcoal)", fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check Foothills Availability</h3>
                <ZipCheckerForm />
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b", textAlign: "center" }}>Main ZIP Codes: 85718, 85749, 85750</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem", textAlign: "center" }}>Neighborhoods Served Around Catalina Foothills & Northeast Tucson</h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
              We provide slab leak detection across Catalina Foothills and Northeast Tucson, including hillside neighborhoods and properties near Sabino Canyon. Submit one request with the full address, and we will confirm coverage without requiring a separate neighborhood-specific inquiry.
            </p>
            
            
            <div style={{ position: "relative", width: "100%", height: "300px", marginBottom: "2rem", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
              <Image src="/images/catalina_foothills_hero.jpg" alt="Residential slab leak service area in Catalina Foothills and Northeast Tucson" fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
              {['Catalina Foothills', 'Skyline area', 'Sabino Canyon', 'Bear Canyon', 'Tanque Verde', 'Ventana Canyon area', 'Northeast Tucson', 'Foothill neighborhoods east of Swan Road'].map((area) => (
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
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>What We Know About Catalina Foothills Properties</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Catalina Foothills includes mid-century ranch homes, later custom builds, and remodeled hillside properties. Plumbing may include original copper, replacement PEX, or a mix of materials added during renovations. Stone, tile, sloped lots, long driveways, and equipment in garages or utility rooms make access planning especially important for <strong><a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak repair</a></strong>.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                For an 85718 or 85750 home, the least disruptive route may pass through a garage, utility chase, attic, or exterior wall. Detection can reduce unnecessary floor openings, but thick stone and layered finishes can affect readings. We compare direct access with <strong><a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water-line rerouting</a></strong> before finished surfaces are disturbed.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Hard water is common across the Tucson region, but mineral scale alone does not prove that a pipe has failed. We separate a possible hot-water leak from recirculation systems, irrigation, appliances, and exterior drainage. The water provider should also be confirmed by address before responsibility is assigned; the private line after the meter is commonly the owner’s responsibility.
              </p>
            </div>
            <div>
              <div style={{ backgroundColor: "#18181b", padding: "3rem", borderRadius: "12px", color: "var(--white)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1.5rem", color: "var(--brand-red)" }}>When to Request Slab Leak Detection</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Warm or hot flooring:</strong> A leaking hot-water line may transfer heat through concrete or tile, although sunlight and ductwork can produce similar warmth.
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
                      <strong>Running-water sound:</strong> A pressurized leak can create a hiss or flowing sound, but the sound may travel through framing and surfaces.
                    </div>
                  </li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Lower water pressure:</strong> A sudden or persistent pressure change can justify testing.
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
              <Image src="/images/electronic_leak_detection.jpg" alt="Plumbing technician performing electronic leak detection in Catalina Foothills and Northeast Tucson" fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>1. Review the symptoms</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We document whether warmth follows a hallway or bathroom route, whether moisture appears downhill from the suspected source, and whether a recirculation system changes the symptom.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>2. Check visible sources</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We inspect irrigation zones, pool equipment, pressure regulators, recirculation plumbing, and long meter-to-home lines before treating moisture on a sloped lot as an under-slab failure.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>3. Confirm water loss</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We check your water meter and perform <strong>under-slab pipe testing in ZIP codes 85749 and 85750</strong> to confirm whether a pressurized line is actually losing water.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>4. Isolate the affected system</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>Hot and cold systems are isolated at available valves, with recirculation equipment accounted for, so a pressure change is not confused with normal system movement.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>5. Locate the suspected route</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>Acoustic and thermal findings are compared with the likely pipe route; thick stone, cabinets, elevation changes, and layered floors can limit any single reading.</p>
              </div>
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>6. Compare repair options</h3>
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We compare the cost of accessing custom flooring with routes through garages, attics, utility spaces, or exterior walls, then define which finish restoration is included.</p>
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
                  <strong>Planning the work:</strong> When the leaking line runs beneath finished flooring, we discuss the impact on tile or stone, the route to affected fixtures, and and what access we need through walls or ceilings. <strong>Water-line rerouting in Tanque Verde AZ</strong> can save your floors from being torn up, but we may still need access through drywall, paint, or exterior walls.
                </p>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Spot Repair</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> Testing points to one repairable failure and the adjacent pipe appears serviceable. This can suit a Sabino Canyon-area home when direct access is less disruptive than rerouting. <br/><strong>Limitations:</strong> The work requires a controlled opening through the floor and concrete near the damaged pipe.</p>
                </div>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Water-Line Rerouting</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> We recommend this when the under-slab pipe is hard to reach, your flooring is expensive to replace, or bypassing the old line is more practical than digging through concrete. <br/><strong>Limitations:</strong> This avoids breaking through your slab but may require openings in walls, ceilings, or attic space.</p>
                </div>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Partial Repiping</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> A branch serving several fixtures has repeated failures or mixed repairs that make another spot fix poor value. <br/><strong>Limitations:</strong> Foothills routes may cross garages, utility rooms, exterior walls, or insulated attic space and can require finish openings away from the slab.</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>Slab Leak Services Offered Across Catalina Foothills</h2>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
              <Link href="/slab-leak-detection-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Slab Leak Detection</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We confirm whether your hot or cold water line is losing pressure and pinpoint the exact leak location using acoustic and electronic equipment.</p>
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
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We pressure-test hot and cold lines separately to help confirm which system is losing pressure before locating begins.</p>
                </div>
              </Link>
              <Link href="/water-line-rerouting-tucson" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer", backgroundColor: "#fff" }} className="hover-lift">
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--brand-red)", marginBottom: "1rem" }}>Water-Line Rerouting</h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>Plan a replacement route around stone flooring using available garage, utility, wall, exterior, or insulated attic access.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Slab Leak Questions from Catalina Foothills Property Owners</h2>
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
              <p style={{ color: "#64748b", marginBottom: "1rem" }}><strong>Related Areas:</strong> <Link href="/service-areas/central-tucson" style={{ color: "var(--brand-red)" }}>Central Tucson</Link> | <Link href="/service-areas/catalina-saddlebrooke" style={{ color: "var(--brand-red)" }}>Oro Valley and Northwest Tucson</Link></p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <div style={{ position: "relative", width: "100%", height: "300px", marginBottom: "2rem", borderRadius: "12px", overflow: "hidden" }}>
              <Image src="/images/hero_emergency_leak.jpg" alt="Requesting slab leak service at a Catalina Foothills and Northeast Tucson property" fill sizes="(max-width: 768px) 100vw, 800px" style={{ objectFit: "cover" }} />
            </div>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--white)" }}>Request Slab Leak Service in Catalina Foothills and Northeast Tucson</h2>
            <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "3rem", lineHeight: "1.6" }}>
              Provide the property address or ZIP code, the symptoms you have noticed, and whether water is actively spreading. Coverage, service availability, response time, and the appropriate next step will be confirmed before work is scheduled.
            </p>
            <div style={{ backgroundColor: "var(--white)", padding: "3rem", borderRadius: "12px", textAlign: "left", color: "var(--dark-charcoal)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check Foothills Availability Now</h3>
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
