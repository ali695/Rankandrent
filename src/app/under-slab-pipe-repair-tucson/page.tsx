import React from 'react';
import { Metadata } from 'next';
import FaqCategory from '@/components/FaqCategory';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';

export const metadata: Metadata = {
  alternates: { canonical: "/under-slab-pipe-repair-tucson/" },
  title: 'Under-Slab Pipe Repair Tucson, AZ',
  description: 'Repair a confirmed leaking water line beneath concrete using controlled access, pipe-section replacement and post-repair pressure testing.',
  openGraph: {
    title: 'Under-Slab Pipe Repair Tucson, AZ',
    description: 'Repair a confirmed leaking water line beneath concrete using controlled access, pipe-section replacement and post-repair pressure testing.',
    url: 'https://tucsonslableakpros.com/under-slab-pipe-repair-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Under-Slab Pipe Repair Tucson, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Under-Slab Pipe Repair Tucson, AZ",
    description: "Repair a confirmed leaking water line beneath concrete using controlled access, pipe-section replacement and post-repair pressure testing.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Under-Slab Pipe Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Direct under-slab pipe repair via controlled concrete access for hidden plumbing leaks in Tucson."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does under-slab pipe repair always require breaking concrete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct access normally requires a controlled concrete opening. An alternative such as rerouting may avoid the slab but will usually require openings through walls, ceilings or another route."
      }
    },
    {
      "@type": "Question",
      "name": "How large will the opening be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The size depends on the confidence of the detection, pipe depth, working space and flooring. A responsible provider explains the expected access area but should not guarantee an exact dimension before the pipe is exposed."
      }
    },
    {
      "@type": "Question",
      "name": "Who repairs tile after slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily the plumber. Plumbing, concrete patching, and flooring restoration after slab leak are separate scopes. Ask for a written list of what is included."
      }
    },
    {
      "@type": "Question",
      "name": "How is the repaired line tested?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The repaired line should undergo a pressure test after pipe repair before the concrete is patched to ensure complete stability."
      }
    },
    {
      "@type": "Question",
      "name": "Is under-slab pipe repair foundation work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The work addresses plumbing beneath concrete. Foundation repair concerns structural movement, settlement or concrete support and belongs to a different trade."
      }
    }
  ]
};

export default function UnderSlabPipeRepair() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Under-Slab Pipe Repair Tucson, AZ", "description": "Repair a confirmed leaking water line beneath concrete using controlled access, pipe-section replacement and post-repair pressure testing.", "url": "https://tucsonslableakpros.com/under-slab-pipe-repair-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Slab Leak Service Process Tucson" src="/images/slab_leak_service_process.webp" alt="Tucson slab leak service process services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>CONTROLLED CONCRETE ACCESS</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Under-Slab Pipe Repair Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Under-slab pipe repair addresses a confirmed water-line failure beneath a concrete floor by safely exposing the pipe. 
                 Review the factors that shape <a href="/slab-leak-repair-cost-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak repair cost</a> before comparing estimates.</p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  A <strong>direct-access <a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak repair</a></strong> uses a controlled concrete opening to expose a confirmed failure, replace the affected section, and test the plumbing before backfill and closure.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Controlled floor and concrete access
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Damaged pipe-section replacement
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Pressure test after pipe repair
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Content Section 1: Direct Access */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Direct Access to a Confirmed Pipe Failure</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Opening a slab should be a planned repair step, not a search method. Detection should first narrow the source and affected line. The provider should explain the evidence used to select the access point before concrete is cut.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                The work area is protected before a limited floor opening is created. Concrete depth, reinforcement, flooring, nearby utilities, and safe working space determine its size. Once exposed, the failed pipe section and surrounding condition can be assessed.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", fontStyle: "italic", lineHeight: "1.7" }}>
                The written scope should identify the pipe material, joining method, test procedure, backfill, concrete patch, and whether finish flooring restoration is included or handled separately.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Slab Leak Repair Tucson" src="/images/slab_leak_repair.webp" alt="Tucson slab leak repair services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* When Considered & Repair Work Split */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>When is Direct Under-Slab Repair Best?</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem", color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> The failure appears isolated to one spot (<strong>replace damaged pipe section under slab</strong>).</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Pipe repair below tile flooring Tucson</strong> where you have extra replacement tiles on hand.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> Multiple detection findings support a limited access area over the affected line.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> The expected opening is acceptable compared with routing lines through walls or ceilings (<strong>under-slab repair or <a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water-line rerouting</a></strong> decision).</li>
              </ul>
            </div>
            
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>What the Repair Work May Involve</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                Flooring is removed first, followed by a controlled concrete opening. The access plan should account for nearby pipes, reinforcement, utilities, dust control, and the working room needed for a reliable connection.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                After the pipe section is replaced using an appropriate material and joining method, the provider tests the repair under documented conditions. Backfill and a concrete patch follow only after the joint and affected line have been checked.
              </p>
            </div>
          </div>
        </section>

                        <ZigZagBlocks blocks={[
          {
            heading: "Planning Concrete Access and Dust Controls",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The most visible part of an <a href="/under-slab-pipe-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>under-slab pipe repair</a> is the concrete opening. Its size cannot be promised before exposure because slab depth, reinforcement, pipe depth, flooring, and working clearance all matter.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Where practical, the access plan may follow grout lines or another repairable finish boundary. The provider should mark the proposed area, explain how nearby utilities were considered, and state whether exploratory findings could change the opening.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Cutting or breaking concrete can create respirable silica dust. Ask about wet cutting or vacuum controls, containment, ventilation, personal protective equipment, and protection of the occupied area. Containment reduces migration but does not justify a dust-free guarantee.</p></>,
            imageSrc: "/images/under_slab_pipe_repair.webp",
            imageAlt: "Precision concrete access",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Assessing and Replacing the Failed Section",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>After the pipe is exposed, the provider can inspect the failure and nearby pipe. The repair scope may change if the opening reveals a damaged fitting, abrasion, poor support, or deterioration beyond the originally marked point.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The replacement material and joining method must suit the existing system, burial conditions, local requirements, and product instructions. Ask the estimate to name the pipe and fittings, describe corrosion or abrasion protection, and distinguish a temporary isolation measure from the completed <a href="/slab-leak-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair</a>.</p></>,
            imageSrc: "/images/slab_leak_repair.webp",
            imageAlt: "Replacing failed pipe",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Testing Before the Repair Is Covered",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The exposed connection should be inspected and tested before it is buried. The appropriate method, pressure, duration, and isolation steps depend on the system, repair material, local requirements, and provider procedure.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A <a href="/water-line-pressure-testing-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>pressure test</a> must be interpreted in context. Temperature change, trapped air, valves, fixtures, and gauge resolution can affect readings. Request the start and finish readings, test duration, isolated section, visual inspection result, and explanation of any change before approving backfill.</p></>,
            imageSrc: "/images/pressure_testing.webp",
            imageAlt: "Pressure testing before backfill",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Backfill, Concrete Patch, and Finish Work",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Backfill should support and protect the repaired pipe without placing damaging debris against it. The method and material depend on the pipe system, excavation, and project requirements. Documentation should note any sleeve, wrapping, bedding, or support used.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The concrete patch should restore the opening according to the approved scope, but finish flooring is a separate trade on many projects. Confirm who handles tile matching, wood or carpet replacement, baseboards, curing time, furniture movement, and cleanup before work starts.</p></>,
            imageSrc: "/images/slab_leak_service_process.webp",
            imageAlt: "Concrete restoration",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Under-Slab Repair FAQ"
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
            <img title="Section Damp Floor Tucson" src="/images/section_damp_floor.webp" alt="Residential damp floor in Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>READY TO REPAIR?</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Discuss Under-Slab Pipe Repair in Tucson</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Provide the ZIP code, leak-location findings and the flooring type above the suspected pipe.
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Request a written explanation of access, pipe repair, <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a> and surface restoration before work starts.
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
