import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';
import FaqCategory from '@/components/FaqCategory';

export const metadata: Metadata = {
  alternates: { canonical: "/slab-leak-detection-tucson/" },
  title: 'Slab Leak Detection Tucson, AZ | Locate Hidden Leaks',
  description: 'Locate suspected water-line leaks beneath concrete using pressure testing, line isolation and professional leak detection methods in Tucson.',
  openGraph: {
    title: 'Slab Leak Detection Tucson, AZ | Locate Hidden Leaks',
    description: 'Locate suspected water-line leaks beneath concrete using pressure testing, line isolation and professional leak detection methods in Tucson.',
    url: 'https://tucsonslableakpros.com/slab-leak-detection-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Slab Leak Detection Tucson, AZ | Locate Hidden Leaks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Detection Tucson, AZ | Locate Hidden Leaks",
    description: "Locate suspected water-line leaks beneath concrete using pressure testing, line isolation and professional leak detection methods in Tucson.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Slab Leak Detection",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Professional slab leak detection in Tucson, AZ. Locating hidden water leaks beneath concrete safely."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A slab leak is a plumbing failure in the pressurized water lines beneath a concrete foundation."
      }
    },
    {
      "@type": "Question",
      "name": "How to detect a slab leak in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A qualified provider may review meter behavior, isolate fixtures or plumbing branches, perform pressure testing, trace the pipe route, and compare acoustic, thermal, or moisture evidence. The methods used depend on the piping material, layout, leak rate, flooring, and site conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Can a slab leak be found without breaking concrete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Testing can often narrow a suspected area without opening the floor. No instrument can guarantee an exact point in every property, so the provider should explain the confidence of the findings before recommending access."
      }
    },
    {
      "@type": "Question",
      "name": "Does a moving meter mean a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meter movement during a controlled no-use period shows that water is passing through the meter. It does not identify the source by itself. Toilets, irrigation, treatment equipment, the private service line, and interior branches may need to be isolated."
      }
    },
    {
      "@type": "Question",
      "name": "How long does slab leak detection take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The time varies with the plumbing layout, access to shutoff valves, the number of branches, pipe material, background noise, and how repeatable the evidence is. Ask the provider what testing is included before the visit."
      }
    }
  ]
};

export default function SlabLeakDetection() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Detection Tucson, AZ | Locate Hidden Leaks", "description": "Locate suspected water-line leaks beneath concrete using pressure testing, line isolation and professional leak detection methods in Tucson.", "url": "https://tucsonslableakpros.com/slab-leak-detection-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Pressure Testing Tucson" src="/images/pressure_testing.webp" alt="Tucson pressure testing services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>NON-DESTRUCTIVE TESTING</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Detection Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  When water escapes from a pipe beneath your home, the most expensive mistake is opening the floor in the wrong place. 
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Slab leak detection in Tucson should begin with controlled checks, not demolition. A qualified provider may use plumbing isolation, <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>, pipe-route tracing, and acoustic or thermal comparisons to narrow the suspected area before repair access is discussed.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Slab leak detection without opening the floor
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Plumbing isolation and static pressure testing
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Electronic and acoustic leak tracking
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Content Section 1: Signs & Symptoms */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Signs You Need a Slab Leak Inspection</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Many homeowners call for a professional inspection when they notice a <strong>warm spot on their floor</strong> (especially over tile), or when a <strong>water meter keeps spinning</strong> despite all fixtures being turned off. Other signs of a hidden leak include an unusually <strong>high water bill</strong>, or when you <strong>hear water running inside the walls</strong> when no taps are open.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Other warning signs include a <strong>musty smell near baseboards</strong>, a <strong>damp patch with no visible source</strong>, or moisture appearing at flooring edges. These symptoms can also come from fixtures, drains, appliances, irrigation, roofing, or HVAC equipment. Testing should separate those possibilities before the floor is opened.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", fontStyle: "italic", lineHeight: "1.7" }}>
                A useful inspection explains what each test proves, what remains uncertain, and why the collected evidence supports the next step.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Water Line Rerouting Tucson" src="/images/water_line_rerouting.webp" alt="Tucson water line rerouting services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* What May Justify Detection */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>What a Slab Leak Inspection Should Check</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem", color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Controlled meter check:</strong> Confirm that normal indoor and outdoor water use has stopped before interpreting flow.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Visible-source review:</strong> Rule out toilets, fixtures, appliances, irrigation, treatment equipment, and exposed piping.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>System isolation:</strong> Compare the hot system, cold system, service line, and accessible branches as the plumbing layout permits.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Pipe-route tracing:</strong> Establish where the suspected line runs before interpreting sound or temperature patterns.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Evidence comparison:</strong> Use more than one repeatable observation before recommending concrete access.</li>
              </ul>
            </div>
            
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Choosing a Tucson Leak Detection Provider</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                Ask which tests are included, who will perform them, and whether the provider supplies marked findings or a written summary. Equipment alone does not establish a reliable location; the technician must interpret the results in the context of the property&apos;s plumbing layout.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                A responsible provider should distinguish a confirmed system loss from a suspected under-slab location. The final explanation should identify the tested line, the evidence collected, the limits of that evidence, and any additional verification needed before repair.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "3rem", textAlign: "center", color: "var(--white)" }}>How Slab Leak Detection Works</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #333", backgroundColor: "rgba(255,255,255,0.02)" }}>
                <strong style={{ color: "var(--brand-red)", fontSize: "1.2rem", display: "block", marginBottom: "0.5rem" }}>1. Validate & Isolate</strong>
                <p style={{ color: "#a1a1aa", fontSize: "1.05rem", margin: 0 }}>Review meter behavior and visible sources, then isolate the hot, cold, service, or branch lines as the property layout permits.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #333", backgroundColor: "rgba(255,255,255,0.02)" }}>
                <strong style={{ color: "var(--brand-red)", fontSize: "1.2rem", display: "block", marginBottom: "0.5rem" }}>2. Trace the Route</strong>
                <p style={{ color: "#a1a1aa", fontSize: "1.05rem", margin: 0 }}>Trace the suspected pipe route and note construction features that may affect how sound, heat, or moisture travels.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #333", backgroundColor: "rgba(255,255,255,0.02)" }}>
                <strong style={{ color: "var(--brand-red)", fontSize: "1.2rem", display: "block", marginBottom: "0.5rem" }}>3. Pinpoint Electronically</strong>
                <p style={{ color: "#a1a1aa", fontSize: "1.05rem", margin: 0 }}>Compare acoustic, thermal, moisture, and pressure evidence, then document the most likely area and the confidence of the finding.</p>
              </div>
            </div>
          </div>
        </section>

                        <ZigZagBlocks blocks={[
          {
            heading: "Professional Slab Leak Detection in Tucson",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A visual inspection can identify symptoms, but it cannot confirm where a concealed supply pipe failed. A controlled <a href="/water-line-pressure-testing-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>pressure test</a> may help establish whether an isolated section loses pressure under defined test conditions.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}><a href="/electronic-leak-detection-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>Electronic leak detection</a> can add pipe-route, acoustic, or thermal evidence. Its effectiveness varies with pipe material, pressure, leak size, soil, floor coverings, background noise, and the accuracy of the traced route.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The goal is to narrow the search enough to compare a direct <a href="/under-slab-pipe-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>under-slab repair</a> with a <a href="/water-line-rerouting-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>water-line reroute</a>. The provider should explain the location confidence and any conditions that could change the repair plan.</p></>,
            imageSrc: "/images/electronic_leak_detection.webp",
            imageAlt: "Professional Slab Leak Detection in Tucson",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Protecting Your Home's Flooring During Detection",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Tile, stone, wood, cabinetry, and built-in fixtures can make direct access expensive. Detection work should therefore be completed before a repair opening is selected, and the proposed access area should be compared with the cost and disruption of an alternate pipe route.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Non-invasive testing means the diagnostic steps do not begin by cutting the floor. It does not promise that every repair can avoid access. If the suspected line runs beneath a difficult finish, <a href="/partial-repiping-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>partial repiping</a> or rerouting may be worth comparing with direct repair.</p></>,
            imageSrc: "/images/section_damp_floor.webp",
            imageAlt: "Protecting flooring during leak detection",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Understanding the Diagnostic Report",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Ask what documentation is included. A useful summary may record meter observations, isolated sections, starting and ending pressure, test duration, pipe-route markings, instrument observations, photographs, and the technician&apos;s stated confidence in the suspected area.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>If you plan to make an insurance claim, contact the insurer before authorizing non-emergency access when practical. Coverage varies by policy, cause of loss, exclusions, and the difference between plumbing repair, access, drying, and finish restoration.</p></>,
            imageSrc: "/images/slab_leak_service_process.webp",
            imageAlt: "Diagnostic report process",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Clear, Upfront Repair Options",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A written estimate should separate detection, plumbing work, concrete access, backfill, slab patching, finish restoration, permits when applicable, and any work assigned to another contractor. That makes the total <a href="/slab-leak-repair-cost-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair cost</a> easier to compare.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>For each option, ask which line will remain in service, what surfaces need access, how the work will be tested, who restores finishes, and what written warranty applies. The lowest plumbing price may not be the lowest complete project cost.</p></>,
            imageSrc: "/images/slab_leak_detection_vs_repair.webp",
            imageAlt: "Upfront repair options",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Frequently Asked Questions"
                iconName="MessageCircleQuestion"
                faqs={faqSchema.mainEntity.map((faq, idx: number) => ({
                  id: `detection-faq-${idx}`,
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
            <img title="Section Water Meter Tucson" src="/images/section_water_meter.webp" alt="Residential water meter in Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>START WITH EVIDENCE</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Request Slab Leak Detection in Tucson</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Provide the property ZIP code and describe the meter, flooring, sound, pressure, or moisture changes you have observed. A provider can confirm the available testing scope before an appointment is scheduled.
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
