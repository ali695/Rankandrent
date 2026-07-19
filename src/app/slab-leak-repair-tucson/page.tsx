import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';
import FaqCategory from '@/components/FaqCategory';

export const metadata: Metadata = {
  alternates: { canonical: "/slab-leak-repair-tucson/" },
  title: 'Slab Leak Repair Tucson | Pipe Repair & Rerouting',
  description: 'Review slab leak repair options in Tucson, including controlled pipe access, spot repair, water-line rerouting and partial pipe replacement.',
  openGraph: {
    title: 'Slab Leak Repair Tucson | Pipe Repair & Rerouting',
    description: 'Review slab leak repair options in Tucson, including controlled pipe access, spot repair, water-line rerouting and partial pipe replacement.',
    url: 'https://tucsonslableakpros.com/slab-leak-repair-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Slab Leak Repair Tucson | Pipe Repair & Rerouting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Repair Tucson | Pipe Repair & Rerouting",
    description: "Review slab leak repair options in Tucson, including controlled pipe access, spot repair, water-line rerouting and partial pipe replacement.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Slab Leak Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Professional slab leak repair in Tucson, AZ, handling spot repairs and water-line reroutes for under-slab plumbing."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can a slab leak be repaired without breaking concrete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, by abandoning the under-slab pipe entirely and rerouting the water line through a wall or ceiling. Otherwise, a direct spot repair will require a controlled concrete opening."
      }
    },
    {
      "@type": "Question",
      "name": "Should I repair or reroute a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The decision depends on location confidence, pipe condition, repair history, access, flooring and cabinetry, route feasibility, restoration responsibility, and the complete quoted scope. Neither option is automatically best for every property."
      }
    },
    {
      "@type": "Question",
      "name": "How much does slab leak repair cost in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs vary with diagnostic work, access, pipe material, route length, permits when applicable, concrete and finish restoration, drying, and after-hours work. Compare written scopes rather than a single headline price."
      }
    },
    {
      "@type": "Question",
      "name": "What is repeated slab leak repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A new failure on a previously repaired branch can justify comparing another spot repair with rerouting or partial repiping. The decision should be based on documented repair history and observed pipe condition, not age or water hardness alone."
      }
    }
  ]
};

export default function SlabLeakRepair() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Repair Tucson | Pipe Repair & Rerouting", "description": "Review slab leak repair options in Tucson, including controlled pipe access, spot repair, water-line rerouting and partial pipe replacement.", "url": "https://tucsonslableakpros.com/slab-leak-repair-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Hero Partial Repiping Tucson" src="/images/hero_partial_repiping.webp" alt="Tucson partial repiping experts" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>DIRECT ACCESS & REROUTING</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Repair Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  A confirmed leak beneath a finished tile or concrete floor requires a clear repair plan, not just demolition. 
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Slab leak repair in Tucson generally involves either controlled <a href="/under-slab-pipe-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>direct access</a> to a confirmed failure or <a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water-line rerouting</a> around the damaged section. The right scope depends on evidence, access, pipe condition, and total restoration work.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Direct access spot repair
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Slab leak water-line rerouting
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Pressure testing</a> after repair
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Content Section 1: Plumbing Slab Leak Repair Tucson */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Understanding Slab Leak Repair Options</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A qualified provider should confirm the affected line and review the detection findings before selecting a repair. A <strong>direct-access spot repair</strong> exposes and replaces the failed section. A <strong>reroute</strong> removes the damaged route from service and supplies the fixture through an accessible path.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                The comparison should include flooring, cabinetry, slab construction, route length, available wall or attic access, pipe material, repair history, and who restores each surface. Review the complete <a href="/slab-leak-repair-cost-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>repair cost</a>, not only the plumbing portion.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Hot Water Slab Leak Tucson" src="/images/hot_water_slab_leak.webp" alt="Tucson hot water slab leak services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* Spot Repair vs Rerouting (Decision Keywords) */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Slab Leak Spot Repair vs Rerouting</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
              <div style={{ padding: "2.5rem", borderRadius: "8px", backgroundColor: "var(--white)", borderTop: "4px solid var(--dark-charcoal)", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Direct-Access Slab Leak Repair</h3>
                <p style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                  Direct repair may be practical when the suspected area is well supported, the surface can be accessed, and the exposed pipe is suitable for a localized repair. The scope should identify flooring removal, concrete cutting, excavation, pipe work, testing, backfill, slab patching, and finish restoration.
                </p>
              </div>
              <div style={{ padding: "2.5rem", borderRadius: "8px", backgroundColor: "var(--white)", borderTop: "4px solid var(--brand-red)", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Water-Line Rerouting</h3>
                <p style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                  Rerouting may avoid opening the floor over the failed section, but it usually requires wall, ceiling, cabinet, or attic access. The proposed route must account for heat, insulation, supports, electrical clearances, fixture connections, and future serviceability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost & Who Repairs */}
        <section style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ color: "var(--white)", fontSize: "2rem", fontWeight: "800", marginBottom: "1.5rem" }}>Choosing a Slab Leak Repair Provider</h2>
              <p style={{ fontSize: "1.05rem", color: "#a1a1aa", marginBottom: "1rem", lineHeight: "1.6" }}>
                Ask whether detection and repair are performed by the same provider or separate specialists. Confirm licensing, insurance, the proposed repair method, testing, cleanup, permit responsibility when applicable, finish restoration, and written warranty terms. For active water damage, first determine whether <a href="/emergency-slab-leak-service-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>emergency isolation</a> is needed.
              </p>
            </div>
            
            <div>
              <h2 style={{ color: "var(--white)", fontSize: "2rem", fontWeight: "800", marginBottom: "1.5rem" }}>Understanding Slab Leak Repair Cost Tucson</h2>
              <p style={{ fontSize: "1.05rem", color: "#a1a1aa", marginBottom: "1rem", lineHeight: "1.6" }}>
                Direct repair commonly includes floor access, concrete work, excavation, plumbing, backfill, and slab patching. Rerouting shifts more of the cost to new pipe, wall or ceiling access, insulation, fixture connections, and drywall repair. Ask for these items to be separated in writing so competing estimates cover the same work.
              </p>
            </div>
          </div>
        </section>

                        <ZigZagBlocks blocks={[
          {
            heading: "The Under-Slab Repair Process",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A direct <a href="/slab-leak-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair</a> should start with documented <a href="/slab-leak-detection-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>detection findings</a>. The proposed opening is based on the confidence of those findings, the pipe route, slab construction, floor finish, reinforcement, and safe working room.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>After the failed section is exposed, the provider can assess pipe material and condition, complete the approved repair, and perform a defined <a href="/water-line-pressure-testing-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>pressure test</a> before burial. The estimate should state who handles backfill, concrete, flooring, and cleanup.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Cuts may sometimes align with grout lines or removable flooring, but access cannot be promised before the route and working area are evaluated. Photographing the exposed pipe and completed repair creates a useful property record.</p></>,
            imageSrc: "/images/slab_leak_repair.webp",
            imageAlt: "Under-slab repair process",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Evaluating Spot Repair vs. Rerouting",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A localized repair may limit new pipe and wall access, but it leaves the remaining buried branch in service. Rerouting avoids the failed buried segment, yet it creates a new route that may require drywall, insulation, supports, and several fixture connections.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Tucson Water describes local water as hard to very hard, but hardness alone does not prove why a pipe failed or predict the next failure. Compare documented repair history, exposed pipe condition, pressure, installation details, access costs, and the proposed <a href="/water-line-rerouting-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>reroute</a> before deciding.</p></>,
            imageSrc: "/images/slab_leak_detection_vs_repair.webp",
            imageAlt: "Spot repair versus rerouting",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Minimizing Dust and Disruption",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Concrete cutting can release respirable silica dust. Before work begins, ask how the provider will isolate the area, protect nearby finishes, control HVAC pathways, and manage occupants, pets, debris, and cleanup.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Wet methods or suitable vacuum dust collection may be used depending on the equipment and work area. The written scope should describe containment and cleanup instead of relying on a general promise that the work will be dust-free.</p></>,
            imageSrc: "/images/section_damp_floor.webp",
            imageAlt: "Dust containment during repair",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Post-Repair Testing and Documentation",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The repaired section should be tested under a documented procedure before it is buried or covered. A successful test supports the completed repair, but it does not guarantee that every other concealed branch is free of defects.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Before authorizing an <a href="/under-slab-pipe-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>under-slab pipe repair</a>, request written warranty terms. Confirm the covered connection, labor period, exclusions, transferability, required maintenance, and whether concrete or finish restoration is included.</p></>,
            imageSrc: "/images/pressure_testing.webp",
            imageAlt: "Post-repair pressure testing",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Slab Leak Repair FAQ"
                iconName="MessageCircleQuestion"
                faqs={faqSchema.mainEntity.map((faq, idx: number) => ({
                  id: `repair-faq-${idx}`,
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
            <img title="Emergency Slab Leak Service Tucson" src="/images/emergency_slab_leak_service.webp" alt="Tucson emergency slab leak repair technician" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>COMPARE COMPLETE REPAIR SCOPES</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Get a Repair Estimate Today</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Provide the detection findings, affected line, flooring type, repair history, and property ZIP code. A provider can explain available repair methods and what each estimate includes.
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
