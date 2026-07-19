import React from 'react';
import { Metadata } from 'next';
import FaqCategory from '@/components/FaqCategory';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';

export const metadata: Metadata = {
  alternates: { canonical: "/water-line-pressure-testing-tucson/" },
  title: 'Water-Line Pressure Testing Tucson | Leak Isolation',
  description: 'Confirm hidden water loss and isolate affected hot or cold plumbing lines with residential water-line pressure testing in Tucson.',
  openGraph: {
    title: 'Water-Line Pressure Testing Tucson | Leak Isolation',
    description: 'Confirm hidden water loss and isolate affected hot or cold plumbing lines with residential water-line pressure testing in Tucson.',
    url: 'https://tucsonslableakpros.com/water-line-pressure-testing-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Water-Line Pressure Testing Tucson | Leak Isolation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Water-Line Pressure Testing Tucson | Leak Isolation",
    description: "Confirm hidden water loss and isolate affected hot or cold plumbing lines with residential water-line pressure testing in Tucson.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Water-Line Pressure Testing",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Professional water-line pressure testing and plumbing line isolation in Tucson, AZ."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does a pressure drop confirm a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A pressure drop confirms a leak on that specific line, but it does not prove it is beneath the slab until the rest of the line is inspected and isolated."
      }
    },
    {
      "@type": "Question",
      "name": "Can pressure testing locate the exact leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A properly controlled test can show whether an isolated section behaves as expected, but it does not identify the leak's exact location. Acoustic, moisture, thermal, or tracing results may be used to narrow the search."
      }
    },
    {
      "@type": "Question",
      "name": "Can hot and cold lines be tested separately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They may be tested separately when the plumbing layout and valves allow reliable isolation. The provider should explain which section was isolated and whether any shared connections could affect the result."
      }
    },
    {
      "@type": "Question",
      "name": "Can pressure testing damage pipes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The test method and pressure must suit the plumbing system, materials, equipment, and applicable requirements. A qualified provider should state the test pressure, duration, gauge range, and safety limits before starting."
      }
    }
  ]
};

export default function WaterLinePressureTesting() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Water-Line Pressure Testing Tucson | Leak Isolation", "description": "Confirm hidden water loss and isolate affected hot or cold plumbing lines with residential water-line pressure testing in Tucson.", "url": "https://tucsonslableakpros.com/water-line-pressure-testing-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Under Slab Pipe Repair Tucson" src="/images/under_slab_pipe_repair.webp" alt="Tucson under slab pipe repair services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>PLUMBING LINE ISOLATION</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Water-Line Pressure Testing Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Before a floor is opened, controlled testing can help show whether a pressurized supply section is likely losing integrity. It does not prove the leak's exact location by itself.
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Water-line pressure testing in Tucson should document the isolated section, starting and ending readings, duration, water temperature, fixture status, and test conditions. Those details make the result useful for the next diagnostic step.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Plumbing pressure gauge tests
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Test hot- and cold-water lines separately
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Static pressure test for hidden pipe leak
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Content Section 1: The Process */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Isolating the Section Being Tested</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A <strong>pressure test for suspected slab leak Tucson</strong> begins with <strong>system isolation</strong>. The technician will perform <strong>shutoff valve testing</strong> and connect a <strong>plumbing pressure gauge</strong> to measure <strong>static water pressure</strong>. 
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Where valves and layout permit, hot and cold sections may be observed separately. A pressure change can support a leak diagnosis, but temperature, trapped air, valve leakage, fixtures, the regulator, and gauge accuracy must also be considered.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Section Thermal Camera Tucson" src="/images/section_thermal_camera.webp" alt="Residential thermal camera in Tucson" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* Importance of Testing */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Confirm Hidden Water Loss</h2>
              <p style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                A pressure test can be useful before <a href="/electronic-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>electronic leak detection</a>, but it is not the only valid first step. Meter checks, fixture isolation, visible inspection, and the plumbing layout may provide the needed direction.
              </p>
              <p style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                The provider should also consider the pressure regulator, shut-off valves, appliances, irrigation, and fixture leaks. These can change pressure behavior without proving an under-slab pipe failure.
              </p>
            </div>
            
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Testing After Repairs</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                After a <a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak repair</a>, the exposed connection and affected section should be checked before closure. Pressure testing, visual inspection, and fixture-flow checks answer different questions and should be documented separately.
              </p>
            </div>
          </div>
        </section>

                        <ZigZagBlocks blocks={[
          {
            heading: "How to Read a Pressure Test Report",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A useful report records the isolated section, fixture and valve status, gauge range, starting pressure, ending pressure, duration, water or ambient temperature, and any pressure added by the test equipment. It should also note visible leakage and equipment limitations.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>There is no universal pressure-drop number that grades every residential leak as small, large, or urgent. System volume, trapped air, thermal change, valve condition, gauge resolution, and test procedure affect the reading. Active water spreading or an electrical hazard is urgent regardless of a specific gauge threshold.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Ask for the provider's interpretation and the next test needed to confirm it. Written results can guide <a href="/electronic-leak-detection-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>electronic leak detection</a>, but insurance coverage and disclosure requirements depend on the policy and transaction.</p></>,
            imageSrc: "/images/pressure_testing.webp",
            imageAlt: "Understanding pressure test results",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Comparing Hot- and Cold-Water Sections",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Separating sections can make a <a href="/water-line-pressure-testing-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>pressure test</a> easier to interpret. The result depends on whether the valves truly isolate the section and whether recirculation lines, mixing valves, appliances, or cross-connections remain connected.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Closing a water-heater valve is not automatically a complete hot-side test procedure. Gas and electric equipment also require safe handling. A qualified provider should explain the isolation points, test medium, applied pressure, and why the setup is suitable for that home.</p></>,
            imageSrc: "/images/section_pressure_gauge.webp",
            imageAlt: "Isolating hot and cold lines",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Check Fixtures and Connected Equipment First",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A running toilet, irrigation valve, refrigerator, water treatment unit, evaporative cooler, hose bib, or dripping fixture can create water use that resembles a hidden supply leak. Visible and meter checks should identify these common alternatives first.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Fixture shut-offs can help isolate equipment, but old angle stops may not seal fully and some branches may lack individual valves. A remaining pressure change is evidence to investigate; it is not automatic proof that hard piping below the slab has failed.</p></>,
            imageSrc: "/images/section_water_meter.webp",
            imageAlt: "Ruling out fixture leaks",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "When a Specialist Suggests Tracer Gas",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A trained specialist may suggest tracer-gas testing when water-based and acoustic methods do not produce clear findings. It is a separate diagnostic method, not a routine step for every suspected slab leak.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The line must be prepared and tested with compatible equipment, a suitable tracer mixture, controlled pressure, ventilation, and manufacturer safety procedures. Gas can travel through soil and building gaps, so a surface reading still requires interpretation before any <a href="/slab-leak-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair</a> opening is selected.</p></>,
            imageSrc: "/images/electronic_leak_detection.webp",
            imageAlt: "Tracer gas leak testing",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="FAQ: Water-Line Pressure Testing"
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
