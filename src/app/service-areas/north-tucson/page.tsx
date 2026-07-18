import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import FaqCategory from '@/components/FaqCategory';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Slab Leak Detection North Tucson & Casas Adobes',
  description: 'Find slab leak detection, pressure testing and pipe repair services across North Tucson, Flowing Wells and Casas Adobes.',
  openGraph: {
    title: 'Slab Leak Detection North Tucson & Casas Adobes',
    description: 'Find slab leak detection, pressure testing and pipe repair services across North Tucson, Flowing Wells and Casas Adobes.',
    url: 'https://tucsonslableakpros.com/service-areas/north-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Slab Leak Detection North Tucson & Casas Adobes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Detection North Tucson & Casas Adobes",
    description: "Find slab leak detection, pressure testing and pipe repair services across North Tucson, Flowing Wells and Casas Adobes.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you serve Casas Adobes ZIP codes 85704 and 85741?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Requests are accepted for Casas Adobes and surrounding North Tucson areas. Availability is confirmed using the property address, ZIP code, and assigned provider coverage."
      }
    },
    {
      "@type": "Question",
      "name": "Can irrigation cause the water meter to move?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Irrigation valves, underground yard lines, and outdoor faucets can cause continuous water use. These sources should be checked before the loss is treated as an under-slab leak."
      }
    },
    {
      "@type": "Question",
      "name": "What if the leak is between the meter and the house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That may be a private service-line leak rather than a slab leak. The exact location determines the repair method and whether the line runs outdoors or beneath the structure."
      }
    },
    {
      "@type": "Question",
      "name": "Is acoustic detection useful in a large home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It can be useful, but the result depends on pipe material, pressure, depth, flooring, and background noise. Pressure testing and line isolation often help narrow the search first."
      }
    },
    {
      "@type": "Question",
      "name": "Can a leaking line be rerouted instead of opening tile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes. A replacement line may be routed through walls, ceilings, or another accessible area. The property layout and affected fixtures determine whether rerouting is practical."
      }
    },
    {
      "@type": "Question",
      "name": "How should I prepare for the visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clear access to the water meter, main shutoff, water heater, and rooms with symptoms. Note when the issue began and whether the floor is warm, damp, or making a running-water sound."
      }
    }
  ]
};

export default function NorthTucsonCasasAdobes() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Detection North Tucson & Casas Adobes", "description": "Find slab leak detection, pressure testing and pipe repair services across North Tucson, Flowing Wells and Casas Adobes.", "url": "https://tucsonslableakpros.com/service-areas/north-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "8rem 0 6rem", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <Image title="Slab leak detection North Tucson" src="/images/north_tucson_hero.jpg" alt="Slab leak technician serving North Tucson and Casas Adobes" fill sizes="100vw" style={{ objectFit: "cover", opacity: 0.4 }} priority />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>LOCAL COVERAGE AREA</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Detection and Repair in North Tucson and Casas Adobes</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Slab leak services are available for homes and residential properties across North Tucson, Casas Adobes, Flowing Wells, and nearby northwest communities. 
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  A request may begin with an unexplained increase in water use, a <a href="/hot-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>warm floor</a>, lower pressure, or the sound of water moving when fixtures are off. Detection is used to confirm the affected plumbing system before a repair method is selected.
                </p>
                
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                  <a href="#contact" className="btn-primary" style={{ backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>REQUEST LEAK DETECTION</a>
                  <a href="tel:555-555-5555" className="btn-secondary" style={{ backgroundColor: "transparent", color: "var(--white)", border: "2px solid var(--white)", padding: "1rem 2rem", borderRadius: "4px", fontWeight: "bold", textDecoration: "none" }}>CALL ABOUT SUSPECTED LEAK</a>
                </div>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2.5rem", borderRadius: "8px", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <h3 style={{ color: "var(--dark-charcoal)", fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check North Tucson Availability</h3>
                <ZipCheckerForm />
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b", textAlign: "center" }}>Main ZIP Codes: 85704, 85705, 85741</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem", textAlign: "center" }}>Neighborhoods Served Around North Tucson & Casas Adobes</h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
              We provide professional <strong><a href="/slab-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak detection</a> in Casas Adobes AZ</strong> and surrounding areas. Our service area covers the main communities naturally without creating a separate request for every neighborhood.
            </p>
            
            
            <div style={{ position: "relative", width: "100%", height: "300px", marginBottom: "2rem", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
              <Image src="/images/north_tucson_hero.jpg" alt="Residential slab leak service area in North Tucson and Casas Adobes" fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
              {['Casas Adobes', 'Flowing Wells', 'Amphi', 'Limberlost', 'Miracle Manor', 'Campus Farm', 'Prince Tucson', 'Northwest Tucson', 'Orange Grove corridor', 'Cottonwood Manor', 'Balboa Heights'].map((area) => (
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
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>What We Know About North Tucson Properties</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A large percentage of homes built in North Tucson and Casas Adobes between 1985 and 2010 were constructed on post-tension concrete slabs. These foundations are reinforced with steel cables stretched under immense pressure.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                If a <strong>plumber</strong> guesses the location of a leak and hits one of these cables with a jackhammer, it can cause catastrophic structural damage to your home. That's why we use highly calibrated acoustic listeners and electronic pressure testing to map out exactly where the leak is occurring.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                For homes with post-tension slabs or aging polybutylene pipes, we frequently recommend <strong>water line rerouting</strong> through the walls or attic to completely avoid the dangers of concrete excavation altogether.
              </p>
            </div>
            <div>
              <div style={{ backgroundColor: "#18181b", padding: "3rem", borderRadius: "12px", color: "var(--white)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1.5rem", color: "var(--brand-red)" }}>When to Request Slab Leak Detection</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <span style={{ color: "var(--brand-red)", fontSize: "1.2rem", marginTop: "2px" }}>■</span>
                    <div>
                      <strong>Warm or hot flooring:</strong> A leaking hot-water line may transfer heat through concrete or tile, creating a <strong>warm floor and moving water meter in North Tucson</strong>.
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
                      <strong>Damp flooring or baseboards:</strong> Moisture without an obvious source may come from an under-slab line, wall pipe, or drainage problem.
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
                      <strong>Lower water pressure:</strong> A sudden pressure change can justify testing, especially with continuous use.
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
              <Image src="/images/electronic_leak_detection.jpg" alt="Plumbing technician performing electronic leak detection in North Tucson and Casas Adobes" fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: "cover" }} />
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
                <p style={{ color: "#4a4a4a", fontSize: "0.95rem", lineHeight: "1.6" }}>We check your water meter and perform <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a> to determine whether a pressurized plumbing section is losing water.</p>
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
                  <strong>Planning the work:</strong> Casas Adobes and North Tucson properties can have large lots, side-yard meters, additions, and plumbing routes that do not follow a simple plan. If the leak is confirmed beneath finished flooring, the homeowner should compare direct access with a possible reroute through walls, ceilings, or another accessible path.
                </p>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Spot Repair</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> We confirm the failure is isolated to a single point and the surrounding pipe is still in good condition. Best for for repair. <br/><strong>Limitations:</strong> We cut a controlled opening in the floor near the damaged section — as small as possible to minimize disruption.</p>
                </div>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Water-Line Rerouting</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> The under-slab route is difficult to reach, finished surfaces are a concern, or bypassing the line is practical. <br/><strong>Limitations:</strong> <strong><a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Water-line rerouting</a> in ZIP codes 85704 85705 and 85741</strong> may require openings in walls, ceilings, attic space, garages, or exterior surfaces.</p>
                </div>
                <div style={{ backgroundColor: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Partial Repiping</h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}><strong>When it fits:</strong> We recommend this when the same pipe branch has failed multiple times or shows widespread corrosion that makes spot repairs a short-term fix. <br/><strong>Limitations:</strong> We plan a new pipe route through your walls or attic and reconnect all fixtures served by the failing branch.</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>Slab Leak Services Offered Across North Tucson</h2>
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
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Slab Leak Questions from Casas Adobes Property Owners</h2>
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
              <p style={{ color: "#64748b", marginBottom: "1rem" }}><strong>Related Areas:</strong> <Link href="/service-areas/central-tucson" style={{ color: "var(--brand-red)" }}>Central Tucson</Link> | <Link href="/service-areas/catalina-foothills" style={{ color: "var(--brand-red)" }}>Catalina Foothills & Northwest Tucson</Link></p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <div style={{ position: "relative", width: "100%", height: "300px", marginBottom: "2rem", borderRadius: "12px", overflow: "hidden" }}>
              <Image src="/images/hero_emergency_leak.jpg" alt="Requesting slab leak service at a North Tucson and Casas Adobes property" fill sizes="(max-width: 768px) 100vw, 800px" style={{ objectFit: "cover" }} />
            </div>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--white)" }}>Request Slab Leak Service in North Tucson</h2>
            <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "3rem", lineHeight: "1.6" }}>
              Provide the property address or ZIP code, the symptoms you have noticed, and whether water is actively spreading. Coverage, service availability, response time, and the appropriate next step will be confirmed before work is scheduled.
            </p>
            <div style={{ backgroundColor: "var(--white)", padding: "3rem", borderRadius: "12px", textAlign: "left", color: "var(--dark-charcoal)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", textAlign: "center" }}>Check Availability Now</h3>
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
