import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';

export const metadata: Metadata = {
  title: 'How Slab Leak Detection Works in Tucson',
  description: 'See how meter checks, pressure testing, line isolation and electronic locating help identify hidden water-line leaks beneath concrete.',
  openGraph: {
    title: 'How Slab Leak Detection Works in Tucson',
    description: 'See how meter checks, pressure testing, line isolation and electronic locating help identify hidden water-line leaks beneath concrete.',
    url: 'https://tucsonslableakpros.com/how-slab-leak-detection-works/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.jpg",
        width: 1200,
        height: 630,
        alt: "How Slab Leak Detection Works in Tucson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Slab Leak Detection Works in Tucson",
    description: "See how meter checks, pressure testing, line isolation and electronic locating help identify hidden water-line leaks beneath concrete.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Detect a Slab Leak Professionally",
  "description": "Our 6-step process for finding hidden under-slab water leaks without destroying your home.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Visual Symptom Review",
      "text": "Examine water meter, assess visible damage, and review timeline of symptoms."
    },
    {
      "@type": "HowToStep",
      "name": "System Pressure Testing",
      "text": "Attach precision gauges to confirm if the system is actively losing pressure."
    },
    {
      "@type": "HowToStep",
      "name": "Line Isolation",
      "text": "Separate hot and cold branches to determine which side is leaking."
    },
    {
      "@type": "HowToStep",
      "name": "Acoustic Pinpointing",
      "text": "Use electronic ground mics to listen through the concrete and pinpoint the precise location."
    }
  ]
};

export default function HowItWorks() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "How Slab Leak Detection Works in Tucson", "description": "See how meter checks, pressure testing, line isolation and electronic locating help identify hidden water-line leaks beneath concrete.", "url": "https://tucsonslableakpros.com/how-slab-leak-detection-works/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Hero Under Slab Pipe Repair Tucson" src="/images/hero_under_slab_pipe_repair.jpg" alt="Tucson under slab pipe repair experts" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>OUR METHODOLOGY</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>How Slab Leak Detection Works</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  We do not guess where your pipes are leaking. We use a systematic, non-invasive process to locate the exact problem area before any concrete is ever opened.
                 If you live in <a href="/service-areas/catalina-foothills/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Catalina Foothills</a>, our specialists can be dispatched immediately.</p>
              </div>

              {/* Form Box */}
              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Educational Split 1: Why We Don't Guess */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>THE PROBLEM WITH TRADITIONAL PLUMBING</span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Why We Don't Guess</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Water is incredibly deceptive. When a pipe breaks under the concrete slab, the water might travel 20 feet horizontally before finding a crack to push up through your floor. 
               We also specialize in professional <a href="/signs-of-a-slab-leak/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>signs of a slab leak</a>.</p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "2rem", lineHeight: "1.7" }}>
                If a plumber simply jackhammers the concrete where they see the water pooling, they are often wrong. This results in "search and destroy" plumbing—destroying your home looking for the source. Our acoustic and electronic equipment allows us to trace the actual pipe and hear the exact location of the break.
               We have a dedicated team serving the <a href="/service-areas/south-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>South Tucson</a> community.</p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Section Water Meter Tucson" src="/images/section_water_meter.jpg" alt="Residential water meter in Tucson" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* The 6-Step Process Grid */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem" }}>Our Complete Six-Step Process</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {/* Step 1 */}
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--brand-red)", color: "var(--white)", marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "bold" }}>1</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Visual Symptom Review</h3>
                <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We examine your water meter, assess the visible damage to flooring or walls, and discuss the timeline of the symptoms you have experienced.</p>
              </div>
              {/* Step 2 */}
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--brand-red)", color: "var(--white)", marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "bold" }}>2</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Rule Out Fixture Leaks</h3>
                <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We thoroughly check running toilets, dripping faucets, water heater PRVs, and outdoor irrigation systems to ensure the leak isn't above ground.</p>
              </div>
              {/* Step 3 */}
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--brand-red)", color: "var(--white)", marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "bold" }}>3</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>System Pressure Testing</h3>
                <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We attach precision pressure gauges to your plumbing. If the system cannot hold pressure when everything is off, we confirm an <a href="/under-slab-pipe-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>under-slab leak</a>.</p>
              </div>
              {/* Step 4 */}
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--brand-red)", color: "var(--white)", marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "bold" }}>4</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Line Isolation</h3>
                <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We isolate the hot water lines from the cold water lines to determine exactly which side of your plumbing system is actively losing water.</p>
              </div>
              {/* Step 5 */}
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--brand-red)", color: "var(--white)", marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "bold" }}>5</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Acoustic Pinpointing</h3>
                <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>We use specialized headphones and electronic ground mics to listen through the concrete and pinpoint the precise location of the failure.</p>
              </div>
              {/* Step 6 */}
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "var(--brand-red)", color: "var(--white)", marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "bold" }}>6</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Repair Blueprinting</h3>
                <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>With the location confirmed, we map out the best repair solution—whether that's a direct spot repair, or bypassing the pipe entirely.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Split 2: What Happens Next */}
        <section style={{ backgroundColor: "#334155", color: "var(--white)" }}>
          <div className="split-grid" style={{ gap: 0 }}>
            <div style={{ display: "flex" }}>
              <img title="Emergency Slab Leak Service Tucson" src="/images/emergency_slab_leak_service.jpg" alt="Tucson emergency slab leak service services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem 5%", maxWidth: "800px", marginRight: "auto" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>AFTER DETECTION</span>
              <h2 style={{ color: "var(--white)", fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", lineHeight: "1.2" }}>
                Moving from Detection to Repair
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", marginBottom: "1rem", lineHeight: "1.7" }}>
                Once the leak is pinpointed, the detection phase is complete. We will then present you with the options for permanently repairing the system.
              </p>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", marginBottom: "2rem", lineHeight: "1.7" }}>
                In some cases, breaking a small 2x2 hole in the concrete to patch the pipe is the most cost-effective method. In other homes, especially those with severely degraded lines, abandoning the underground pipe and rerouting a new one through the walls or attic is the superior long-term choice.
              </p>
              <div>
                <a href="/slab-leak-repair-tucson/" className="btn-primary" style={{ display: "inline-block", padding: "1rem 2rem", fontWeight: "bold" }}>View Repair Options</a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA (Matches Hero) */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          {/* Dark Overlay Background */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Electronic Leak Detection Tucson" src="/images/electronic_leak_detection.jpg" alt="Tucson electronic leak detection services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>READY TO FIND THE LEAK?</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Schedule Your Expert Leak Evaluation</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Provide the details of your plumbing issue, and we will contact you to confirm service availability and schedule your diagnostic.
                </p>
              </div>

              {/* FCS Style Bottom Form Box */}
              <ZipCheckerForm />
            </div>
          </div>
        </section>
      </main>
</>
  );
}
