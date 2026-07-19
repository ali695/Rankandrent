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
        "text": "Highly accurate when performed by a professional. It drastically narrows the location of the leak, reducing the amount of flooring that needs to be removed for repair."
      }
    },
    {
      "@type": "Question",
      "name": "Can acoustic detection find a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Acoustic listening devices and ground microphones are the primary tools used to hear the frequency of water escaping from a pressurized pipe beneath concrete."
      }
    },
    {
      "@type": "Question",
      "name": "Does electronic leak detection damage flooring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Electronic detection is entirely non-invasive. The goal is to locate the leak safely without opening any concrete or removing tile."
      }
    },
    {
      "@type": "Question",
      "name": "Can acoustic equipment find cold-water leaks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. While hot water leaks might also show up on thermal imaging, acoustic equipment detects the sound of pressurized water escaping, which works for both hot and cold lines."
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
                  Finding a leak under concrete used to mean destroying the floor until the pipe was found. Not anymore. 
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Modern <strong>electronic <a href="/slab-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak detection</a> Tucson</strong> relies on <strong>acoustic testing for pipe leak beneath concrete</strong> and <strong>electronic sound amplification</strong> to pinpoint the hidden failure accurately.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Acoustic leak detection Tucson
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Non-destructive leak detection Tucson
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

        {/* The Technology We Use */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Electronic Equipment to Locate Slab Leak Tucson</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div style={{ padding: "2rem", backgroundColor: "#f8fafc", borderRadius: "8px", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Acoustic Listening Device</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>An <strong>acoustic leak detector for under-slab pipe</strong> utilizes a highly sensitive <strong>ground microphone</strong>. It amplifies the sound of pressurized water escaping through the concrete, helping us <strong>listen for water leak beneath tile floor</strong>.</p>
              </div>
              
              <div style={{ padding: "2rem", backgroundColor: "#f8fafc", borderRadius: "8px", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Line Tracing</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>Before listening, we must know where the pipes run. <strong>Electronic water-line locating service Tucson</strong> uses radio frequency to trace the copper or metallic lines beneath the foundation.</p>
              </div>

              <div style={{ padding: "2rem", backgroundColor: "#f8fafc", borderRadius: "8px", borderTop: "4px solid var(--brand-red)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Thermal & Moisture Testing</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>In specific cases, such as an active hot water leak, a <strong>thermal imaging</strong> camera or <strong>moisture meter</strong> can supplement the acoustic data to map out the heat pattern beneath the floor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Testing is Needed First */}
        <section style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--white)" }}>Why Pressure Testing is Needed Before Acoustic Detection</h2>
              <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                You cannot simply put on headphones and find a leak. <strong>Electronic detection for pressurized pipe leak</strong> requires the system to be properly isolated first. 
              </p>
              <p style={{ fontSize: "1.1rem", color: "#a1a1aa", marginBottom: "2rem", lineHeight: "1.6" }}>
                A <strong>hidden pipe leak locator</strong> will first separate your hot and cold water systems, hook up a pressure gauge, and prove which line is actually losing pressure. Only then do we use our <strong>electronic sound amplification</strong> gear to trace that specific line.
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
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A hidden pipe leak beneath concrete can run for weeks before visible symptoms appear. By the time you notice damp flooring, warm spots, or an unusually high water bill, the leak may have already saturated the soil beneath your home and begun affecting your foundation. <a href="/electronic-leak-detection-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>Acoustic leak detection</a> finds these hidden failures before the damage compounds.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Our acoustic equipment amplifies underground sounds up to 100x, allowing the technician to distinguish between a pinhole leak, a joint failure, and normal water flow through adjacent pipes. The intensity and pitch of the sound change as the microphone moves closer to the leak source, giving us a reliable gradient to follow.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>This non-invasive approach means we can locate your leak without drilling exploratory holes or tearing up flooring. For homes with expensive tile, stone, or polished concrete floors, this makes a significant difference — both in cost and in preserving the appearance of your home.</p></>,
            imageSrc: "/images/electronic_leak_detection.webp",
            imageAlt: "Acoustic detection",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Electromagnetic Pipe Tracing",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Acoustic listening is incredibly accurate, but it works best when we know exactly where the pipes are laid beneath your foundation. Because plumbing blueprints are rarely accurate (or available) for older Tucson homes, we use electromagnetic line tracers to map your system first.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>We induce a safe electrical signal into your copper water lines and use a receiver wand to trace the signal above the floor. This allows us to draw a precise map of your underground plumbing on the surface of your tile or concrete. Once we know the path of the pipe, our <a href="/slab-leak-detection-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak detection</a> sweeps become significantly faster and more accurate.</p></>,
            imageSrc: "/images/slab_leak_detection.webp",
            imageAlt: "Electromagnetic pipe tracing",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Thermal Imaging Supplements",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>When dealing with a <a href="/hot-water-slab-leak-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>hot water slab leak</a>, thermal imaging cameras are an invaluable secondary tool. Hot water escaping from a ruptured under-slab line will eventually heat the surrounding soil and transfer that thermal energy up through the concrete foundation.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>By scanning your floors with an infrared camera, our technicians can visually identify the "plume" of heat spreading beneath the surface. While thermal imaging cannot pinpoint the exact millimeter of the leak on its own (since water spreads as it rises), it immediately directs our acoustic tools to the correct 3-foot radius, drastically speeding up the detection process.</p></>,
            imageSrc: "/images/section_thermal_camera.webp",
            imageAlt: "Thermal imaging leak detection",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Data-Driven Repair Recommendations",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The ultimate goal of electronic leak detection isn't just to find the leak; it's to gather the data needed to recommend the best repair strategy. Once we mark the exact location of the failure, we evaluate where it sits in relation to your home's layout.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>If the leak is located under a kitchen island, custom cabinetry, or an expensive hardwood floor, breaking the concrete might cost thousands in restoration fees. In those scenarios, our detection data allows us to confidently recommend abandoning the underground line and <a href="/water-line-rerouting-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>rerouting a new pipe</a> through the attic, saving your floors and providing a permanent fix.</p></>,
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
