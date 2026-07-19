import React from 'react';
import { Metadata } from 'next';
import ZigZagBlocks from '@/components/ZigZagBlocks';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Thermometer, Volume2, ArrowDownToLine, Activity, Search, Gauge, Wrench, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import ZipCodeDirectory from '@/components/ZipCodeDirectory';
import FaqCategory from '@/components/FaqCategory';

export const metadata: Metadata = {
  alternates: { canonical: "/hot-water-slab-leak-tucson/" },
  title: 'Hot-Water Slab Leak Tucson | Warm Floor Detection',
  description: 'Warm flooring or frequent water-heater operation may point to a hidden hot-water line leak. Explore detection and repair options in Tucson.',
  openGraph: {
    title: 'Hot-Water Slab Leak Tucson | Warm Floor Detection',
    description: 'Warm flooring or frequent water-heater operation may point to a hidden hot-water line leak. Explore detection and repair options in Tucson.',
    url: 'https://tucsonslableakpros.com/hot-water-slab-leak-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Hot-Water Slab Leak Tucson | Warm Floor Detection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot-Water Slab Leak Tucson | Warm Floor Detection",
    description: "Warm flooring or frequent water-heater operation may point to a hidden hot-water line leak. Explore detection and repair options in Tucson.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does a warm floor always mean there is a hot-water slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Sunlight, ductwork, appliances, recirculation, and radiant systems can produce similar heat. A repeatable warm pattern becomes useful evidence when the meter shows unexplained flow, the water heater cycles without demand, and the isolated hot system loses pressure."
      }
    },
    {
      "@type": "Question",
      "name": "Can a hot-water slab leak make the water heater run continuously?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An active hot-line loss can make the heater recover more often because heated water is replaced by incoming cold water. Frequent operation can also result from normal demand, recirculation, controls, sediment, or equipment problems, so compare heater behavior with meter and pressure-test evidence."
      }
    },
    {
      "@type": "Question",
      "name": "Can a hidden hot-water leak increase energy costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. An active hot-water loss can increase both metered water use and the gas or electricity needed for reheating. Compare actual consumption and energy use with similar periods, while accounting for household demand and equipment efficiency."
      }
    },
    {
      "@type": "Question",
      "name": "How is a hot-water line tested beneath a slab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A plumber defines and isolates the hot-water test section, connects an appropriate gauge, allows pressure and temperature to stabilize, and records the result. A repeatable drop supports loss within that boundary after gauge connections, valves, equipment, and temperature effects are checked."
      }
    },
    {
      "@type": "Question",
      "name": "Can thermal imaging confirm the exact leak location?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thermal imaging compares surface temperature; it does not see water or a pipe break through concrete. When a hot-line loss is already confirmed, thermal, acoustic, tracing, and moisture patterns may narrow an evidence area. Site conditions may prevent an exact pre-access location."
      }
    },
    {
      "@type": "Question",
      "name": "Should I turn off the water heater if I suspect a hot-water leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If water is actively causing damage, use the home or equipment shutoff only when it is clearly identified and safe to operate. Water heaters have gas, electrical, temperature, and pressure hazards. Follow the manufacturer’s shutdown instructions or contact a qualified plumber rather than guessing at valves or controls."
      }
    },
    {
      "@type": "Question",
      "name": "Can I continue using cold water?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some systems allow the hot side to be isolated while cold fixtures remain available, but recirculation loops, cross-connections, damaged valves, and equipment design can complicate this. Have the isolation confirmed and do not operate the water heater in an unsafe or partially drained condition."
      }
    },
    {
      "@type": "Question",
      "name": "Is rerouting better than opening the slab for a hot-water leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Neither option is automatically better. Direct repair may fit one well-located failure with practical floor access. Rerouting may fit an inaccessible or unreliable branch, but it still requires a designed path, sizing, insulation, supports, penetrations, fixture reconnections, testing, and finish repair."
      }
    }
  ]
};

export default function HotWaterSlabLeak() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Hot-Water Slab Leak Tucson | Warm Floor Detection", "description": "Warm flooring or frequent water-heater operation may point to a hidden hot-water line leak. Explore detection and repair options in Tucson.", "url": "https://tucsonslableakpros.com/hot-water-slab-leak-tucson/"}) }} />
      <Breadcrumbs items={[
        { label: 'Slab Leak Guide', href: '/slab-leak-faq/' },
        { label: 'Hot-Water Slab Leaks' }
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main>
        {/* Section 1: Hero */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/hero_hot_water_leak.webp" alt="Tucson hero hot water leak experts" title="Hero Hot Water Leak Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                  SLAB LEAK GUIDE
                </span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Hot-Water Slab Leak Detection and Repair in Tucson
                </h1>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Thermometer size={24} color="var(--brand-red)" />
                    Warm-floor assessment
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Gauge size={24} color="var(--brand-red)" />
                    Hot-line <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Wrench size={24} color="var(--brand-red)" />
                    Repair and rerouting options
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "2rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "0.5rem", textAlign: "center" }}>
                  Tell Us Where the Floor Feels Warm
                </h3>
                <ZipCheckerForm />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Symptom Icon Strip */}
        <section style={{ backgroundColor: "var(--dark-charcoal)", padding: "1.5rem 0", color: "var(--white)", borderBottom: "4px solid var(--brand-red)" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem", opacity: 0.9 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Thermometer size={18} color="var(--brand-red)" /> Warm tile
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Activity size={18} color="var(--brand-red)" /> Frequent heater operation
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <ArrowDownToLine size={18} color="var(--brand-red)" /> Reduced hot-water supply
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Gauge size={18} color="var(--brand-red)" /> Moving water meter
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Volume2 size={18} color="var(--brand-red)" /> Running-water sound
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Activity size={18} color="var(--brand-red)" /> Higher energy use
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Main Explanation */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "2rem", textAlign: "center" }}>
              Why a Hot-Water Leak Can Warm the Floor
            </h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 4rem", lineHeight: "1.7" }}>
              Hot water escaping beneath a slab can transfer heat through soil, concrete, mortar, and flooring. The surface pattern may follow the pipe route or spread away from it, and carpet or thick finishes can hide the change. A warm floor is therefore a clue—not confirmation. In <a href="/service-areas/rita-ranch/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Rita Ranch</a> and other Tucson service areas, diagnosis should combine timing, meter flow, heater activity, hot-system isolation, and repeatable pressure loss.</p>

            <div className="split-grid" style={{ alignItems: "flex-start" }}>
              <div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Hot-Water Warning Signs</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Warm tile or concrete</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A repeatable path that does not track sunlight, HVAC cycles, or nearby appliances.</span>
                  </li>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Water heater cycling frequently</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>The heater recovers when no fixture has used hot water; normal demand and equipment faults still need to be excluded.</span>
                  </li>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Reduced hot-water availability</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>Available hot water changes without a clear increase in household demand.</span>
                  </li>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Higher water and energy use</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>Metered water and heater energy rise together after billing days and normal use are considered.</span>
                  </li>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Warm moisture</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A warm moisture pattern may support the investigation, but water can travel far from its source.</span>
                  </li>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Sound near the floor</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A sound that continues with fixtures idle and aligns with unexplained meter flow deserves testing.</span>
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: "#f8fafc", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>What Else Can Cause Warm Flooring?</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", marginBottom: "1rem" }}>Before breaking concrete, we must rule out non-plumbing sources of heat. Common mimics include:</p>
                <ul style={{ paddingLeft: "1.5rem", color: "#4a4a4a", lineHeight: "1.7", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>Direct sunlight:</strong> Windows heating up a specific patch of floor during the day.</li>
                  <li><strong>HVAC ductwork:</strong> Uninsulated or poorly routed air ducts running near the foundation.</li>
                  <li><strong>Radiant floor heating:</strong> Older or malfunctioning electrical heating mats.</li>
                  <li><strong>Nearby hot-water appliance:</strong> Heat radiating from a dishwasher or under-sink boiler.</li>
                  <li><strong>Outdoor temperature effects:</strong> Heat transferring through the foundation edge during Tucson&apos;s hot summers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Safety Box */}
        <section style={{ padding: "0 0 5rem" }}>
          <div className="container">
            <div style={{ backgroundColor: "#fee2e2", borderLeft: "6px solid var(--brand-red)", padding: "2rem", borderRadius: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <ShieldAlert size={28} color="var(--brand-red)" />
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#991b1b", margin: 0 }}>Immediate Action: Isolate the Heater</h3>
              </div>
              <p style={{ color: "#7f1d1d", fontSize: "1.1rem", lineHeight: "1.6", margin: 0 }}>
                If water is actively spreading, use the private main or water-heater isolation valve only when it is clearly identified, accessible, and safe to operate. Do not force a corroded valve or guess at gas and electrical controls. Follow the manufacturer’s shutdown instructions or call a qualified plumber. A heater must not be operated in an unsafe, isolated, or partially drained condition.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Detection Process */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              The Hot-Water Detection Process
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {[
                { title: 'Isolate Hot-Water System', icon: <Search size={24} color="var(--brand-red)" /> },
                { title: 'Static Pressure Testing', icon: <Gauge size={24} color="var(--brand-red)" /> },
                { title: 'Trace the Pipe Route', icon: <Wrench size={24} color="var(--brand-red)" /> },
                { title: 'Compare Thermal Evidence', icon: <Activity size={24} color="var(--brand-red)" /> },
                { title: 'Compare Acoustic Evidence', icon: <Search size={24} color="var(--brand-red)" /> },
                { title: 'Document Findings and Options', icon: <Wrench size={24} color="var(--brand-red)" /> }
              ].map((step, i) => (
                <div key={i} style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ backgroundColor: "#fee2e2", padding: "0.75rem", borderRadius: "50%" }}>
                    {step.icon}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--dark-charcoal)", margin: 0 }}>{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Repair Options & Comparison */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Repair Options
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", marginBottom: "4rem" }}>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Direct spot repair</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A controlled floor and concrete opening exposes the failed section for compatible repair. It may fit one well-supported location with practical access and no pattern of branch failures.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Hot-water line rerouting</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>The failed run is disconnected and replaced through an approved wall, ceiling, garage, attic, or other route. It may preserve flooring while requiring different finish openings.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Partial hot-water repiping</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A defined group of unreliable hot-water branches is replaced when documented failure history supports more than one isolated repair. The boundary should be shown in writing.</p>
              </div>
            </div>

            <div className="responsive-table-wrap" role="region" aria-label="Hot-water slab leak repair comparison table" tabIndex={0}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)" }}>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem", width: "20%" }}>Factor</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem", width: "40%" }}>Direct Repair</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem", width: "40%" }}>Hot-Water Line Rerouting</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Access</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Requires localized flooring and concrete access.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Uses a designed alternate path; may preserve flooring but require wall or ceiling access.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Disruption</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Concrete, dust protection, and flooring restoration must be scoped.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>May affect drywall, insulation, cabinets, attic access, paint, and penetrations.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Suitable Situations</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>One well-located failure with reasonable access and serviceable surrounding pipe.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>An inaccessible, repeatedly repaired, or unreliable run with a practical replacement path.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Future Risk</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Addresses the exposed failure; concealed pipe condition remains partly unknown.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Removes the selected run from slab service; design and installation still determine reliability.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 7: Tucson Context */}
        <section style={{ backgroundColor: "#f8fafc", padding: "4rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Tucson Water and Hot-Line Conditions</h2>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7" }}>
                Tucson Water describes local water as hard to very hard, which commonly contributes to scale in fixtures and water-heating equipment. Hardness alone does not identify why a concealed pipe failed. Pressure, pipe material, workmanship, abrasion, movement, temperature cycling, repairs, and the actual condition found after access should guide the explanation and repair scope.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Related Services */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Related Services
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              
              <Link href="/slab-leak-detection-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Slab Leak Detection</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Confirm hot-system loss and narrow the concealed route before repair.</p>
                  </div>
                </div>
              </Link>

              <Link href="/water-line-rerouting-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Water-Line Rerouting</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Design and test an alternate route when bypassing the failed run is appropriate.</p>
                  </div>
                </div>
              </Link>

              <Link href="/electronic-leak-detection-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Electronic Leak Detection</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Combine route, acoustic, thermal, and moisture evidence without promising a perfect pinpoint.</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        <ZigZagBlocks blocks={[
          {
            kicker: "System Behavior",
            heading: "How a Hot-Water Slab Leak Changes the Plumbing System",
            content: <>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A hot-water line remains under pressure even when no faucet is open. If that line develops a leak below the slab, replacement water can continually enter the water heater and force it to recover more often. Homeowners may notice longer burner or heating-element cycles, less available hot water, or energy use that changes without a clear change in household routines.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Escaping hot water can warm the soil and concrete, but the surface pattern may be wider or displaced from the failed pipe. Floor coverings, pipe depth, soil moisture, and nearby ducts affect where heat appears. A thermal scan therefore shows temperature differences; it does not see through concrete or independently prove the exact break location.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: 0, lineHeight: "1.7" }}>
                The strongest diagnosis combines controlled meter readings, hot-side isolation, pressure behavior, pipe tracing, and repeatable thermal or acoustic evidence. See <a href="/how-slab-leak-detection-works/" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>how slab leak detection works</a> before deciding where any access opening belongs.
              </p>
            </>,
            imageSrc: "/images/section_thermal_camera.webp",
            imageAlt: "Thermal camera checking a Tucson floor for a hot-water slab leak pattern",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            kicker: "Repair Planning",
            heading: "What Determines Direct Repair or Hot-Line Rerouting",
            content: <>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Direct access may be practical when the failed section is confidently located beneath an open area with replaceable flooring. The full scope should still address concrete cutting, excavation, pipe repair, testing, slab closure, and finish restoration. A small plumbing opening can become an expensive project when it sits below cabinets, stone, a shower, or finished living space.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A <a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>hot-water line reroute</a> can avoid opening the slab by abandoning the leaking segment and installing an accessible route. The plumber must confirm which fixtures the line serves, where the new pipe can travel, how it will be insulated and protected, and whether walls or ceilings require access.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: 0, lineHeight: "1.7" }}>
                Pipe material, repair history, the number of affected branches, and restoration costs all influence the choice. Compare complete scopes rather than treating direct repair or rerouting as automatically superior. Written estimates should explain testing, access, restoration responsibility, warranty terms, and any conditions that could change the price.
              </p>
            </>,
            imageSrc: "/images/blog/repair-vs-reroute.webp",
            imageAlt: "Comparison of direct hot-water slab repair and water-line rerouting",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />

        {/* Section 9: FAQs */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <FaqCategory 
              title="Frequently Asked Questions"
              iconName="MessageCircleQuestion"
              faqs={faqSchema.mainEntity.map((faq, idx) => ({
                id: `hot-water-faq-${idx}`,
                question: faq.name,
                answer: faq.acceptedAnswer.text
              }))}
            />
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/slab-leak-faq/" style={{ color: "var(--brand-red)", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>
                View All Slab Leak Questions →</Link>
            </div>
          </div>
        </section>

        <ZipCodeDirectory />

        {/* Section 10: Final CTA */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/hot_water_slab_leak.webp" alt="Tucson hot water slab leak services" title="Hot Water Slab Leak Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <div style={{ color: "var(--white)", fontSize: "1.5rem", fontWeight: "900", letterSpacing: "-1px", marginBottom: "1rem" }}>
                  TUCSON<span style={{ color: "var(--brand-red)" }}>LEAK</span>PROS
                </div>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Schedule Hot-Water Leak Detection
                </h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Provide your ZIP code, describe when the floor feels warm, and note meter or water-heater changes. Testing should confirm the hot system before repair is selected.
                </p>
              </div>

              <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "2rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "0.5rem", textAlign: "center" }}>
                  Request Service
                </h3>
                <p style={{ textAlign: "center", color: "#64748b", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  Submit your details for a prompt response.
                </p>
                <ZipCheckerForm />
              </div>
            </div>
          </div>
        </section>

      </main>
</>
  );
}
