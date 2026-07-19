import React from 'react';
import { Metadata } from 'next';
import ZigZagBlocks from '@/components/ZigZagBlocks';
import FaqCategory from '@/components/FaqCategory';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  alternates: { canonical: "/emergency-slab-leak-service-tucson/" },
  title: 'Emergency Slab Leak Service Tucson, AZ',
  description: 'Get help with active water spreading, rapid meter movement, sudden pressure loss or another urgent suspected slab leak in Tucson.',
  openGraph: {
    title: 'Emergency Slab Leak Service Tucson, AZ',
    description: 'Get help with active water spreading, rapid meter movement, sudden pressure loss or another urgent suspected slab leak in Tucson.',
    url: 'https://tucsonslableakpros.com/emergency-slab-leak-service-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Emergency Slab Leak Service Tucson, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Slab Leak Service Tucson, AZ",
    description: "Get help with active water spreading, rapid meter movement, sudden pressure loss or another urgent suspected slab leak in Tucson.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Emergency Slab Leak Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Urgent emergency slab leak repair and detection in Tucson, AZ. Fast response for active water leaks under slabs."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is a slab leak an emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Water spreading from the floor, rapid meter movement after all fixtures are off, or a major pressure loss needs urgent attention. If it is safe, close the home's private main shut-off and keep clear of wet electrical equipment."
      }
    },
    {
      "@type": "Question",
      "name": "Should I shut off water for a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If water is actively spreading and you can safely identify the home's private main shut-off, close it. Do not operate a utility-owned meter valve unless the utility or a qualified professional tells you to do so."
      }
    },
    {
      "@type": "Question",
      "name": "Should I turn off the water heater?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A suspected hot-water leak may require the heater to be shut down, but gas and electric equipment must be handled correctly. Follow the manufacturer's instructions or ask a qualified professional for guidance."
      }
    },
    {
      "@type": "Question",
      "name": "Can slab leak repair happen on the first visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes, but it should not be assumed. The first visit may focus on stopping water loss, identifying the affected line, and collecting enough evidence to plan a direct repair or reroute."
      }
    }
  ]
};

export default function EmergencySlabLeakService() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Emergency Slab Leak Service Tucson, AZ", "description": "Get help with active water spreading, rapid meter movement, sudden pressure loss or another urgent suspected slab leak in Tucson.", "url": "https://tucsonslableakpros.com/emergency-slab-leak-service-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Hero Emergency Leak Tucson" src="/images/hero_emergency_leak.webp" alt="Tucson emergency leak experts" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>URGENT WATER-LOSS ASSISTANCE</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Emergency Slab Leak Repair Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Water spreading across a floor, a meter moving rapidly with every fixture off, or a major pressure change can signal an active plumbing leak. The source may be below the slab, inside a wall, or near a fixture, so the first goal is to limit damage and identify the affected line.
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Request urgent plumbing availability and describe what you can see, hear, and measure. A qualified provider can explain the callout fee, expected arrival window, initial safety steps, and whether detection or repair can begin during the visit.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Guidance for safe water shut-off
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Evidence-based hidden-leak checks
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Repair or rerouting options after diagnosis
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: "var(--white)", borderRadius: "12px", padding: "2rem", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", color: "var(--dark-charcoal)", textAlign: "center" }}>Request Urgent Availability</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Signs of a Slab Leak Emergency</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              <div style={{ padding: "2rem", backgroundColor: "#f8fafc", borderRadius: "8px", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Water Spreading From Floor</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>Active water at flooring, baseboards, cabinets, or wall edges needs prompt attention. Keep people away from wet electrical areas and close the private house shut-off if it is safe to do so.</p>
              </div>
              
              <div style={{ padding: "2rem", backgroundColor: "#f8fafc", borderRadius: "8px", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Rapid Meter Movement</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>If the meter continues moving quickly after faucets, irrigation, appliances, and toilets are off, water is still being used or lost. The meter confirms flow, not the leak's location.</p>
              </div>

              <div style={{ padding: "2rem", backgroundColor: "#f8fafc", borderRadius: "8px", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Sudden Pressure Loss</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A large, sudden pressure change can have several causes, including a supply interruption, valve problem, or active leak. Check for utility notices, then request urgent diagnosis if the cause is unclear.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Steps */}
        <section style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--white)" }}>What to Do When Water Comes Through the Floor</h2>
              <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "2rem", lineHeight: "1.6" }}>
                If a suspected slab leak is causing active water damage, focus on personal safety and stopping the flow. Do not cut concrete or open electrical panels to investigate.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "1.2rem" }}>1.</span>
                  <div>
                    <strong style={{ display: "block", fontSize: "1.1rem", marginBottom: "0.25rem" }}>Shut off the main water valve</strong>
                    <span style={{ color: "#a1a1aa" }}>Use the home's private main shut-off only if you can identify and reach it safely. Leave a utility-owned meter valve alone unless authorized.</span>
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "1.2rem" }}>2.</span>
                  <div>
                    <strong style={{ display: "block", fontSize: "1.1rem", marginBottom: "0.25rem" }}>Avoid electrical hazards</strong>
                    <span style={{ color: "#a1a1aa" }}>Keep away from water near outlets, appliances, or the electrical panel. Contact emergency services if there is an immediate electrical danger.</span>
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "1.2rem" }}>3.</span>
                  <div>
                    <strong style={{ display: "block", fontSize: "1.1rem", marginBottom: "0.25rem" }}>Request urgent <a href="/slab-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak detection</a></strong>
                    <span style={{ color: "#a1a1aa" }}>Tell the provider when the issue began, whether the meter moves, and which areas are wet, warm, or losing pressure.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
               <img title="Cold Water Slab Leak Tucson" src="/images/cold_water_slab_leak.webp" alt="Tucson cold water slab leak services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.5)" }} />
            </div>
          </div>
        </section>

                        <ZigZagBlocks blocks={[
          {
            heading: "What an Urgent Plumbing Visit Should Cover",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>An urgent visit should begin with safety, water-loss control, and a clear description of what the provider can complete that day. Arrival times and after-hours coverage vary, so ask about availability and the callout fee before authorizing service.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The initial checks may include the meter, fixture shut-offs, pressure behavior, moisture readings, and <a href="/electronic-leak-detection-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>electronic leak detection</a>. No single reading proves that a pipe below the slab has failed. The provider should explain which observations support the diagnosis.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Once the affected branch is reasonably identified, compare a direct <a href="/under-slab-pipe-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>under-slab repair</a> with a <a href="/water-line-rerouting-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>water-line reroute</a>. The right choice depends on pipe condition, access, finishes, and whether the same route has failed before.</p></>,
            imageSrc: "/images/hero_emergency_leak.webp",
            imageAlt: "Emergency slab leak repair",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Can the Affected Branch Be Isolated?",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Closing the main stops incoming water, but it also removes service throughout the home. In some plumbing layouts, a qualified plumber can isolate or temporarily bypass only the affected branch. In others, shared lines or inaccessible valves make that impractical.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Ask which fixtures will remain out of service, whether a temporary measure is code-compliant, and what must happen before the main can be reopened. Branch isolation limits ongoing loss; it does not replace accurate diagnosis or a planned repair.</p></>,
            imageSrc: "/images/section_pressure_gauge.webp",
            imageAlt: "Isolating the leak",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Choosing the Repair After Stabilization",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>After active water loss is controlled, the next decision is whether to open the slab or bypass the failed section. A direct <a href="/slab-leak-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair</a> provides access to a confirmed failure point. A reroute avoids that floor opening but creates access work along a new wall, ceiling, or attic path.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A spot repair may make sense for one accessible failure when the surrounding pipe appears serviceable. Repeated leaks, difficult flooring, or a practical replacement route may support rerouting. Detection findings and pipe history should drive that comparison.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Access size, repair time, and finish restoration depend on the location and construction. Ask the estimate to separate water mitigation, detection, plumbing, concrete or drywall work, and flooring restoration so the full scope is visible.</p></>,
            imageSrc: "/images/under_slab_pipe_repair.webp",
            imageAlt: "Targeted concrete access",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Separate Emergency Work From the Full Repair",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>An emergency authorization may cover only the callout, diagnosis, and temporary isolation. Before concrete is cut or a new route is installed, request a written <a href="/slab-leak-repair-cost-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair estimate</a> for the permanent work.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Useful line items include after-hours fees, detection, access, pipe and fittings, testing, concrete or drywall closure, flooring, drying, and permit costs when applicable. Also confirm which company is responsible for each phase and what workmanship or material warranty is offered in writing.</p></>,
            imageSrc: "/images/emergency_slab_leak_service.webp",
            imageAlt: "Clear emergency estimates",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Emergency FAQ"
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
      </main>
</>
  );
}
