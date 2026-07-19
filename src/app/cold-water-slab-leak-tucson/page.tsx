import React from 'react';
import { Metadata } from 'next';
import ZigZagBlocks from '@/components/ZigZagBlocks';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Droplets, Gauge, Volume2, ArrowDownToLine, Activity, Search, MapPin, SearchCheck } from 'lucide-react';
import Link from 'next/link';
import ZipCodeDirectory from '@/components/ZipCodeDirectory';
import FaqCategory from '@/components/FaqCategory';

export const metadata: Metadata = {
  alternates: { canonical: "/cold-water-slab-leak-tucson/" },
  title: 'Cold-Water Slab Leak Tucson | Detection & Repair',
  description: 'Investigate unexplained water use, pressure loss or damp flooring caused by a possible cold-water line leak beneath a Tucson home.',
  openGraph: {
    title: 'Cold-Water Slab Leak Tucson | Detection & Repair',
    description: 'Investigate unexplained water use, pressure loss or damp flooring caused by a possible cold-water line leak beneath a Tucson home.',
    url: 'https://tucsonslableakpros.com/cold-water-slab-leak-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Cold-Water Slab Leak Tucson | Detection & Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold-Water Slab Leak Tucson | Detection & Repair",
    description: "Investigate unexplained water use, pressure loss or damp flooring caused by a possible cold-water line leak beneath a Tucson home.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can a cold-water slab leak occur without a warm floor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A cold-water line usually produces no warm-floor clue. Evidence may instead include controlled meter movement, repeatable cold-system pressure loss, damp finishes, sound, or a service-line pattern after fixtures and outdoor systems are excluded."
      }
    },
    {
      "@type": "Question",
      "name": "Can a cold-water leak remain hidden without visible moisture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Water may remain below the slab, follow a pipe trench, or appear away from the break. A lack of visible moisture does not rule out loss, but meter flow must be separated from toilets, appliances, irrigation, pools, and the service line."
      }
    },
    {
      "@type": "Question",
      "name": "Will a cold-water slab leak reduce water pressure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A larger active loss may reduce fixture performance, while a small one may not be noticeable. Low pressure can also come from the utility, a regulator, valve, restriction, or simultaneous demand, so it should be compared with meter and isolation results."
      }
    },
    {
      "@type": "Question",
      "name": "Can the water meter help confirm a cold-water leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The meter can confirm water passed through it during a controlled no-use period. It cannot identify a cold slab branch by itself. Record the reading and isolate fixtures, outdoor systems, the private service line, and interior branches as the layout permits."
      }
    },
    {
      "@type": "Question",
      "name": "How is the cold-water system isolated for testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The plumber defines the cold-water test boundary and separates the heater, outdoor supplies, service line, or accessible branches as needed. A repeatable pressure drop supports loss within that isolated section after the gauge, valves, temperature, and connected equipment are checked."
      }
    },
    {
      "@type": "Question",
      "name": "Could the problem be an irrigation or service-line leak instead?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Irrigation valves, pool autofill, exterior branches, and the private line from the meter to the home can all create continuous meter flow. Each system should be placed in a known condition and tested separately before an under-slab diagnosis."
      }
    },
    {
      "@type": "Question",
      "name": "Is a cold-water slab leak an emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treat active spreading water, rapid unexplained meter flow, major pressure loss, or water near electrical equipment as urgent. Use the private main shutoff only when it is safe and identifiable. Subtle evidence still deserves prompt testing, but not blind floor opening."
      }
    },
    {
      "@type": "Question",
      "name": "Will the floor need to be opened for repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. Direct repair requires localized floor and concrete access. A verified failed branch may instead be disconnected and rerouted through an approved path, but that option can require wall, ceiling, garage, attic, or exterior openings and careful sizing and protection."
      }
    }
  ]
};

export default function ColdWaterSlabLeak() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Cold-Water Slab Leak Tucson | Detection & Repair", "description": "Investigate unexplained water use, pressure loss or damp flooring caused by a possible cold-water line leak beneath a Tucson home.", "url": "https://tucsonslableakpros.com/cold-water-slab-leak-tucson/"}) }} />
      <Breadcrumbs items={[
        { label: 'Slab Leak Guide', href: '/slab-leak-faq/' },
        { label: 'Cold-Water Slab Leaks' }
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main>
        {/* Section 1: Hero */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/hero_cold_water_leak.webp" alt="Tucson hero cold water leak experts" title="Hero Cold Water Leak Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                  SLAB LEAK GUIDE
                </span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Cold-Water Slab Leak Detection and Repair in Tucson
                </h1>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Gauge size={24} color="var(--brand-red)" />
                    Cold-line <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Search size={24} color="var(--brand-red)" />
                    Hidden moisture locating
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <SearchCheck size={24} color="var(--brand-red)" />
                    Repair and rerouting options
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "2rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "0.5rem", textAlign: "center" }}>
                  Request Service
                </h3>
                <ZipCheckerForm />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Symptom Cards */}
        <section style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem" }}>
              Common Symptoms
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
              {[
                { title: 'Water Meter Movement', icon: <Gauge size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> },
                { title: 'Damp Flooring or Baseboards', icon: <Droplets size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> },
                { title: 'Sudden Pressure Drop', icon: <ArrowDownToLine size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> },
                { title: 'Running Water Sounds', icon: <Volume2 size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> },
                { title: 'Wet Spots Near Foundation', icon: <MapPin size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> },
                { title: 'Unexplained Water Bill Spike', icon: <Activity size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> }
              ].map((symptom, i) => (
                <div key={i} style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>
                  {symptom.icon}
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--dark-charcoal)", margin: 0 }}>{symptom.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Main Explanation */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "2rem", textAlign: "center" }}>
              Why Cold-Water Slab Leaks Can Be Harder to Notice
            </h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 4rem", lineHeight: "1.7" }}>
              Cold-water slab leaks usually do not create the warm-floor pattern associated with an active hot line. Water may remain below the slab, follow a trench, or appear at a distant finish, so the strongest early evidence is often controlled meter flow and repeatable cold-system pressure loss. If one branch has a documented history of failures, compare direct repair or rerouting with a clearly defined <a href="/partial-repiping-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>partial repiping</a> scope.</p>
          </div>
        </section>

        {/* Section 4: Other Sources to Rule Out */}
        <section style={{ padding: "5rem 0", backgroundColor: "#fee2e2", borderTop: "4px solid var(--brand-red)" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#991b1b", marginBottom: "2rem", textAlign: "center" }}>
              Other Sources to Rule Out
            </h2>
            <p style={{ textAlign: "center", color: "#7f1d1d", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 3rem", lineHeight: "1.7" }}>
              A moving meter proves flow, not location. Before assuming an under-slab cold line has failed, control toilets, appliances, irrigation, pool autofill, hose connections, water treatment, and the meter-to-house service line. The same staged process applies in <a href="/service-areas/catalina-saddlebrooke/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>SaddleBrooke</a> and throughout the Tucson service area.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", maxWidth: "900px", margin: "0 auto" }}>
              {["Toilet flappers", "Irrigation systems", "Pool auto-fills", "Appliance lines", "Outdoor faucets", "Meter-to-home service line"].map((item, i) => (
                <div key={i} style={{ backgroundColor: "var(--white)", padding: "1rem", borderRadius: "4px", textAlign: "center", fontWeight: "600", color: "var(--dark-charcoal)", border: "1px solid #fca5a5" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Detection Process */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              The Cold-Water Detection Process
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {[
                "Stop normal water use",
                "Check visible plumbing",
                "Observe the meter",
                "Isolate cold-water branches",
                "Test pressure",
                "Narrow down the suspected area"
              ].map((step, i) => (
                <div key={i} style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                    {i + 1}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--dark-charcoal)", margin: 0 }}>{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Comparison Table */}
        <section style={{ padding: "5rem 0", backgroundColor: "var(--white)" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem" }}>
              Cold-Water Slab Leak vs. Other Hidden Household Leaks
            </h2>
            <div className="responsive-table-wrap" role="region" aria-label="Cold-water slab leak comparison table" tabIndex={0}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)" }}>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Leak Source</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Symptoms</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Action Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Slab line</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Interior system loses pressure; meter flow may continue; floor may remain neutral.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Confirm cold branch, trace route, compare acoustic and moisture evidence.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Irrigation</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Flow follows a schedule, valve condition, or wet landscape zone.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Disable the controller and isolate the supply or zones where safe.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Toilet</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Intermittent meter movement; faint running sound in bathroom.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Dye test in toilet tank; replace flapper or fill valve.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Appliance</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Visible water near fridge, dishwasher, or washing machine.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Check supply lines and connections behind appliances.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Service line</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Meter flow may continue while the private house shutoff is safely closed.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Test the private line between the meter and home; confirm valve condition and layout.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 7: Repair Options */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Repair Options
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Direct-access repair</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", margin: 0 }}>A controlled opening exposes one well-supported failure for compatible repair. Flooring, concrete, testing, closure, and restoration should be defined before work begins.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Cold-line rerouting</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", margin: 0 }}>The failed run is disconnected and a new approved route supplies every affected fixture through walls, ceiling, garage, attic, or another practical path.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Partial branch replacement</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", margin: 0 }}>A complete defined branch is replaced when repeated failures or shared access support more than one spot repair. The proposal should mark what remains in service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Homeowner Responsibility */}
        <section style={{ backgroundColor: "var(--white)", padding: "4rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", border: "2px dashed #cbd5e1", borderRadius: "8px" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem", textAlign: "center" }}>Tucson Water vs. Homeowner Responsibility</h2>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7", marginBottom: "1rem" }}>
                Tucson Water explains that responsibility is divided at the meter: the utility maintains the service line from the water main to the meter, while the property owner is responsible for the line from the meter to the home and the plumbing within the property. Confirm the meter and valve layout because private systems and service arrangements can vary.
              </p>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7", margin: 0 }}>
                Report a suspected public-side main or meter problem to Tucson Water. When controlled testing points to the private side, a licensed plumbing provider can evaluate the service line and building branches. Meter movement alone does not show which side or pipe is involved; isolation establishes that boundary.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Related Services */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Related Services
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              
              <Link href="/water-line-pressure-testing-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Pressure Testing</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Test a clearly defined cold-water section and document repeatable pressure behavior.</p>
                  </div>
                </div>
              </Link>

              <Link href="/slab-leak-detection-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Slab Leak Detection</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Confirm the affected system and narrow the suspected route before access.</p>
                  </div>
                </div>
              </Link>

              <Link href="/under-slab-pipe-repair-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Under-Slab Pipe Repair</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Plan controlled access, compatible pipe work, testing, concrete closure, and finishes.</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        <ZigZagBlocks blocks={[
          {
            kicker: "Hidden Symptoms",
            heading: "Why Cold-Water Slab Leaks Can Be Harder to Notice",
            content: <>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A cold-water leak does not normally create the warm floor pattern associated with a leaking hot line. Water may remain below the slab, travel through a pipe trench, or emerge at a wall or foundation edge away from the failure. In dry Tucson conditions, surface moisture can also evaporate before it creates an obvious puddle.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                The first evidence may be a meter that advances during a controlled no-use period, a repeatable pressure drop, an unexplained change in consumption, or a sound that continues after fixtures stop. Each clue has alternatives: toilets can cycle silently, irrigation valves can seep, pool autofill can operate unnoticed, and a service-line leak may stay outdoors.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: 0, lineHeight: "1.7" }}>
                That is why <a href="/electronic-leak-detection-tucson/" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>electronic leak detection</a> follows isolation and pressure testing. Listening equipment is more useful after the affected water system and likely pipe route have been established.
              </p>
            </>,
            imageSrc: "/images/cold_water_slab_leak.webp",
            imageAlt: "Inspection for concealed cold-water slab leak symptoms in a Tucson home",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            kicker: "Isolation Strategy",
            heading: "How Technicians Separate Indoor Plumbing from Outdoor Water Use",
            content: <>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                The water meter records flow through the metered service, not the location of a leak. A technician first controls expected uses and notes whether the meter continues to advance. The home&apos;s main shutoff, when present and functioning, can then help distinguish the private service line from plumbing downstream of that valve.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Irrigation branches, hose connections, water treatment equipment, evaporative coolers, pools, and detached structures must be considered according to how the property is piped. Some branches split before the building shutoff, so closing one valve does not always remove every outdoor source from the test. The actual plumbing layout controls what each isolation step proves.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: 0, lineHeight: "1.7" }}>
                Once outdoor and service-line losses are reasonably excluded, <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>pressure testing the cold-water system</a> can document whether that defined section loses pressure. Pipe tracing and acoustic comparison can then narrow the search without treating the meter alone as a slab leak locator.
              </p>
            </>,
            imageSrc: "/images/blog/pressure-testing.webp",
            imageAlt: "Pressure gauge used to isolate a cold-water plumbing leak",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />

        {/* Section 10: FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <FaqCategory 
              title="Frequently Asked Questions"
              iconName="MessageCircleQuestion"
              faqs={faqSchema.mainEntity.map((faq, idx) => ({
                id: `cold-water-faq-${idx}`,
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

        {/* Section 11: Final CTA */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/cold_water_slab_leak.webp" alt="Tucson cold water slab leak services" title="Cold Water Slab Leak Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <div style={{ color: "var(--white)", fontSize: "1.5rem", fontWeight: "900", letterSpacing: "-1px", marginBottom: "1rem" }}>
                  TUCSON<span style={{ color: "var(--brand-red)" }}>LEAK</span>PROS
                </div>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Find the Source of Unexplained Cold-Water Flow
                </h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Provide your ZIP code, meter observations, outdoor-system status, and any moisture or pressure changes. The next step is to identify the affected system before choosing a repair.
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
