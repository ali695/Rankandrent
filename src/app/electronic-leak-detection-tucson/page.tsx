import React from 'react';
import { Metadata } from 'next';
import FaqCategory from '@/components/FaqCategory';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';

export const metadata: Metadata = {
  alternates: { canonical: "/electronic-leak-detection-tucson/" },
  title: 'Electronic Leak Detection Tucson | Acoustic Testing',
  description: 'Learn how electronic and acoustic testing can help narrow down hidden pressurized water-line leaks beneath tile and concrete floors.',
  openGraph: {
    title: 'Electronic Leak Detection Tucson | Acoustic Testing',
    description: 'Learn how electronic and acoustic testing can help narrow down hidden pressurized water-line leaks beneath tile and concrete floors.',
    url: 'https://tucsonslableakpros.com/electronic-leak-detection-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Electronic Leak Detection Tucson | Acoustic Testing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electronic Leak Detection Tucson | Acoustic Testing",
    description: "Learn how electronic and acoustic testing can help narrow down hidden pressurized water-line leaks beneath tile and concrete floors.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Electronic Leak Detection",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Non-destructive electronic and acoustic leak detection for hidden plumbing pipes in Tucson, AZ."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How accurate is electronic leak detection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It can narrow a search area, but accuracy depends on pipe material, leak flow, depth, floor construction, background noise, and operator interpretation. A sound diagnosis combines electronic findings with other evidence."
      }
    },
    {
      "@type": "Question",
      "name": "Can acoustic detection find a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It can help locate a pressurized leak when the escaping water creates a detectable signal. Results vary with pipe material, leak size, distance, soil, slab construction, and background noise."
      }
    },
    {
      "@type": "Question",
      "name": "Does electronic leak detection damage flooring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The scanning stage usually does not require opening the floor. However, access may be needed for valves, test connections, or the eventual repair, and uncertain results may require another diagnostic method."
      }
    },
    {
      "@type": "Question",
      "name": "Can acoustic equipment find cold-water leaks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It may detect either hot- or cold-water leaks when the line is pressurized and the sound reaches the sensor. Thermal imaging can add evidence for some hot-water leaks but does not see through concrete or show the pipe itself."
      }
    }
  ]
};

export default function ElectronicLeakDetection() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Electronic Leak Detection Tucson | Acoustic Testing", "description": "Learn how electronic and acoustic testing can help narrow down hidden pressurized water-line leaks beneath tile and concrete floors.", "url": "https://tucsonslableakpros.com/electronic-leak-detection-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Hero Slab Leak Repair Tucson" src="/images/hero_slab_leak_repair.webp" alt="Tucson slab leak repair experts" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>NON-INVASIVE SLAB LEAK LOCATING</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Electronic Leak Detection Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Electronic tools can help narrow a suspected leak before a repair opening is planned. They reduce guesswork, but no instrument guarantees an exact point in every building.
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Electronic <a href="/slab-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak detection in Tucson</a> may combine acoustic listening, line tracing, moisture readings, thermal patterns, meter observations, and pressure behavior. Agreement between methods creates a stronger basis for repair.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Acoustic listening for pressurized leaks
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Floor scanning before repair access
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Line tracing and pipe locating
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Detection Tools */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Tools Used to Narrow a Hidden Leak</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div style={{ padding: "2rem", backgroundColor: "#f8fafc", borderRadius: "8px", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Acoustic Listening Device</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A ground microphone can amplify vibration created by water escaping a pressurized pipe. Pipe material, flow, depth, soil, flooring, and mechanical noise affect what the operator can hear.</p>
              </div>
              
              <div style={{ padding: "2rem", backgroundColor: "#f8fafc", borderRadius: "8px", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Line Tracing</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A compatible signal transmitter and receiver may help trace conductive piping. The method does not work the same way on every material, and the marked route should be treated as an estimate.</p>
              </div>

              <div style={{ padding: "2rem", backgroundColor: "#f8fafc", borderRadius: "8px", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Thermal & Moisture Testing</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A thermal camera records surface temperatures, while a moisture meter checks material conditions. Either can support the search, but heat and moisture may spread away from the pipe failure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Testing is Needed First */}
        <section style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--white)" }}>Confirm the Affected System Before Listening</h2>
              <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                Acoustic listening is more useful when basic checks first show that a pressurized supply line is a likely source. Fixtures, irrigation, appliances, drains, and the utility side should not be confused with an under-slab leak.
              </p>
              <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "2rem", lineHeight: "1.6" }}>
                Depending on the plumbing layout, a provider may isolate hot and cold sections, observe the meter, or run a <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water-line pressure test</a>. The provider should explain what each test rules in or out before interpreting the acoustic signal.
              </p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
               <img title="Emergency Slab Leak Service Tucson" src="/images/emergency_slab_leak_service.webp" alt="Emergency slab leak detection equipment in Tucson" style={{ width: "100%", height: "100%", minHeight: "400px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.5)" }} />
            </div>
          </div>
        </section>

                        <ZigZagBlocks blocks={[
          {
            heading: "Acoustic Detection for Hidden Pipe Leaks",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A hidden supply leak may first appear as meter movement, a warm or damp area, changing pressure, or unexplained water use. These signs justify diagnosis, but they do not identify the exact source on their own.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}><a href="/electronic-leak-detection-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>Acoustic leak detection</a> compares sound at multiple points along a suspected route. Pipe material, leak flow, depth, soil, slab, flooring, distance, and background noise all affect the signal. Sound alone generally cannot prove whether the failure is a pinhole, joint, or another defect.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The scan itself usually leaves flooring intact. Its purpose is to reduce the access area and improve the repair plan. If findings conflict or remain weak, further testing is more responsible than promising an exact location.</p></>,
            imageSrc: "/images/electronic_leak_detection.webp",
            imageAlt: "Acoustic detection",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Electromagnetic Pipe Tracing",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Listening points are more useful when the likely pipe route is known. Plans, visible supply points, manifolds, construction clues, and compatible electronic tracing can help estimate that route.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A transmitter and receiver can follow a signal on some conductive lines, but plastic pipe, electrical interference, depth, and nearby metal can limit results. Surface markings are diagnostic estimates rather than a survey-grade map. They should be compared with the other <a href="/slab-leak-detection-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak detection</a> findings.</p></>,
            imageSrc: "/images/slab_leak_detection.webp",
            imageAlt: "Electromagnetic pipe tracing",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Thermal Imaging Supplements",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>For a suspected <a href="/hot-water-slab-leak-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>hot-water slab leak</a>, a thermal camera may show an unusual surface-temperature pattern. It measures infrared energy at the surface; it does not look through concrete or display the pipe.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Heat can travel through concrete, flooring, air leaks, sunlight, ducts, and appliances. Escaping water can also move through soil before the pattern reaches the floor. For that reason, thermal imaging should guide further checks rather than define a fixed repair radius.</p></>,
            imageSrc: "/images/section_thermal_camera.webp",
            imageAlt: "Thermal imaging leak detection",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Turning Findings Into a Repair Plan",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The useful outcome is a written explanation of the suspected line, marked search area, tests performed, limits of the findings, and recommended next step. Ask the provider to distinguish confirmed observations from assumptions.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>If the area is below cabinetry, stone, or difficult flooring, compare direct access with <a href="/water-line-rerouting-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>rerouting the affected pipe</a>. A reroute avoids the marked floor area but creates access elsewhere. Detection results, pipe history, route feasibility, restoration cost, and warranty terms should all inform the decision.</p></>,
            imageSrc: "/images/slab_leak_detection_vs_repair.webp",
            imageAlt: "Data driven repair options",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="FAQ: Electronic Leak Detection"
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
