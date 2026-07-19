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
        "text": "If you have water spreading from the floor, rapid water-meter movement, or sudden pressure loss, it is a plumbing emergency that requires immediate mitigation, starting with shutting off the water supply."
      }
    },
    {
      "@type": "Question",
      "name": "Should I shut off water for a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If there is active water coming through the floor, locate your main house shut-off valve immediately to stop the flow until an urgent slab leak plumber Tucson arrives."
      }
    },
    {
      "@type": "Question",
      "name": "Should I turn off the water heater?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you suspect an active hot-water slab leak Tucson, turning off the water to the heater and shutting down its power/gas safely can prevent damage. Follow manufacturer guidelines."
      }
    },
    {
      "@type": "Question",
      "name": "Can slab leak repair happen on the first visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Emergency visits focus on mitigation, isolation, and detection. Actual concrete removal and repair planning usually happen after the leak is accurately located."
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
                  A burst pipe under slab Tucson can quickly turn into a flooding emergency. If you have active water spreading across your tile floor or sudden pressure loss, you need urgent help.
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Our network provides emergency water leak repair Tucson residents rely on to isolate the system, mitigate water damage, and locate the hidden plumbing leak fast.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Guidance for safe water shut-off
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Emergency hidden leak detection
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Urgent <a href="/under-slab-pipe-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>under-slab pipe repair</a>
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: "var(--white)", borderRadius: "12px", padding: "2rem", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem", color: "var(--dark-charcoal)", textAlign: "center" }}>Request Emergency Dispatch</h3>
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
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>If you see <strong>water spreading across tile floor Tucson</strong> or standing water near baseboards, you need an <strong>emergency plumber for pipe leak beneath concrete</strong>.</p>
              </div>
              
              <div style={{ padding: "2rem", backgroundColor: "#f8fafc", borderRadius: "8px", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Rapid Meter Movement</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A <strong>rapid water-meter movement emergency Tucson</strong> means high-pressure water is actively flowing under your home, threatening your foundation.</p>
              </div>

              <div style={{ padding: "2rem", backgroundColor: "#f8fafc", borderRadius: "8px", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Sudden Pressure Loss</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A <strong>sudden water pressure loss slab leak</strong> across your home indicates a massive line failure. This requires <strong>urgent hidden water-line leak repair Tucson</strong>.</p>
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
                If you are dealing with a suspected slab leak with active water damage, take immediate action to protect your property before the <strong>urgent slab leak plumber Tucson</strong> arrives.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "1.2rem" }}>1.</span>
                  <div>
                    <strong style={{ display: "block", fontSize: "1.1rem", marginBottom: "0.25rem" }}>Shut off the main water valve</strong>
                    <span style={{ color: "#a1a1aa" }}>Locate the valve where water enters the house or at the street meter.</span>
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "1.2rem" }}>2.</span>
                  <div>
                    <strong style={{ display: "block", fontSize: "1.1rem", marginBottom: "0.25rem" }}>Avoid electrical hazards</strong>
                    <span style={{ color: "#a1a1aa" }}>Keep away from water near electrical outlets.</span>
                  </div>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "1.2rem" }}>3.</span>
                  <div>
                    <strong style={{ display: "block", fontSize: "1.1rem", marginBottom: "0.25rem" }}>Call for urgent <a href="/slab-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak detection</a> near me Tucson</strong>
                    <span style={{ color: "#a1a1aa" }}>We will dispatch a professional to isolate the line safely.</span>
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
            heading: "Rapid Emergency Slab Leak Repair",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>When water is actively damaging your foundation or flooring, every minute counts. An <a href="/emergency-slab-leak-service-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>emergency response</a> requires a plumber who can arrive quickly, shut off the affected line, and begin damage mitigation before moisture spreads into drywall, cabinetry, or subflooring.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>We dispatch experienced technicians who carry pressure-testing gauges, acoustic listening gear, and common repair fittings on every truck. That means the initial assessment and line isolation happen in the same visit — no waiting for a second appointment while water continues to pool beneath your slab.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Most residential emergencies in Tucson involve copper lines that have corroded at joints or developed pinhole failures. We evaluate the damaged section on-site and recommend either a direct <a href="/under-slab-pipe-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>spot repair</a> or, when the pipe condition warrants it, a <a href="/water-line-rerouting-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>water-line reroute</a> through the attic to permanently bypass the failing segment.</p></>,
            imageSrc: "/images/hero_emergency_leak.webp",
            imageAlt: "Emergency slab leak repair",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Isolating the Leak to Restore Your Water",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The first priority in an emergency is stopping the water damage while minimizing disruption to your daily life. Shutting off the main water valve stops the leak, but it also leaves your family without running water for toilets, showers, and cooking.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Our technicians work quickly to identify exactly which line is leaking using <a href="/electronic-leak-detection-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>electronic leak detection</a>. If possible, we will cap or bypass the specific branch line feeding the leak. This allows us to turn the main water back on to the rest of the house, giving you functional bathrooms and sinks while we plan and execute the permanent repair.</p></>,
            imageSrc: "/images/section_pressure_gauge.webp",
            imageAlt: "Isolating the leak",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Targeted Concrete Access and Repair",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Once the active leak is isolated and the water supply is stabilized, we assess the fastest path to a permanent fix. A direct <a href="/slab-leak-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair</a> involves opening a small section of concrete directly above the failure point, replacing the damaged pipe segment with new copper or PEX, and pressure-testing the line before closing up.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Spot repair works best when the leak is in a single, accessible location and the surrounding pipe is still in good condition. For homes with tile flooring, we carefully cut the concrete to minimize surface damage. Once the plumbing repair is complete, the concrete is patched and the floor can be re-tiled.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>This targeted approach keeps the overall cost significantly lower than a full reroute. In many cases, we can complete the repair within a single day, restoring your water pressure and giving you peace of mind.</p></>,
            imageSrc: "/images/under_slab_pipe_repair.webp",
            imageAlt: "Targeted concrete access",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Clear Estimates During a Crisis",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>During a plumbing emergency, the last thing you need is pricing surprises. We provide a detailed estimate that breaks down every <a href="/slab-leak-repair-cost-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair cost</a> — from the detection fee and concrete access to the pipe repair, pressure verification, and surface patching. You see exactly what you are paying for before any concrete is cut.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Our estimates also factor in your specific flooring type. Homes with standard concrete and vinyl flooring have lower restoration costs, while custom tile, travertine, or stamped concrete may require specialized cutting. We document these variables upfront so there are no hidden charges after the repair is done.</p></>,
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
