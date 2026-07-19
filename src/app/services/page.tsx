import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: "/services/" },
  title: 'Slab Leak Services Tucson, AZ | Detection & Repair',
  description: 'Explore slab leak detection, pipe repair, pressure testing, under-slab repair and water-line rerouting services available across Tucson.',
  openGraph: {
    title: 'Slab Leak Services Tucson, AZ | Detection & Repair',
    description: 'Explore slab leak detection, pipe repair, pressure testing, under-slab repair and water-line rerouting services available across Tucson.',
    url: 'https://tucsonslableakpros.com/services/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Slab Leak Services Tucson, AZ | Detection & Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Services Tucson, AZ | Detection & Repair",
    description: "Explore slab leak detection, pipe repair, pressure testing, under-slab repair and water-line rerouting services available across Tucson.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Slab Leak Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Comprehensive slab leak services in Tucson including detection, repair, rerouting, and partial repiping."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which service should I request first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Always start with Slab Leak Detection. We must confirm that a pressurized pipe is actually leaking and locate it before any repair can be quoted or performed."
      }
    },
    {
      "@type": "Question",
      "name": "Can detection and repair happen during the same visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes. If the leak is found quickly and the repair is straightforward (like a reroute through an open garage wall), work can begin immediately. Complex under-slab access may require scheduling a follow-up."
      }
    },
    {
      "@type": "Question",
      "name": "Can a slab leak be found without opening the floor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, acoustic and electronic detection equipment allow us to trace the lines and listen for the leak through the concrete without invasive digging."
      }
    },
    {
      "@type": "Question",
      "name": "Does a moving water meter mean the leak is under the slab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. A moving meter confirms a leak exists, but it could be a running toilet, a broken irrigation valve, or a leak in the main service line in your yard."
      }
    }
  ]
};

const servicesList = [
  { 
    title: 'Slab Leak Detection', 
    desc: "Confirms water loss and pinpoints the exact underground location before any floors are broken.", 
    img: "slab_leak_detection.webp",
    link: "/slab-leak-detection-tucson/" 
  },
  { 
    title: 'Slab Leak Repair', 
    desc: "Professional under-slab plumbing repair using direct access or spot fixes to restore your line safely.", 
    img: "slab_leak_repair.webp",
    link: "/slab-leak-repair-tucson/" 
  },
  { 
    title: 'Water-Line Rerouting', 
    desc: "Bypass the leaking pipe beneath the concrete and run a brand new line through the walls or attic.", 
    img: "water_line_rerouting.webp",
    link: "/water-line-rerouting-tucson/" 
  },
  { 
    title: 'Under-Slab Pipe Repair', 
    desc: "Controlled concrete openings for pipe repair, replacing the damaged pipe section beneath the foundation.", 
    img: "under_slab_pipe_repair.webp",
    link: "/under-slab-pipe-repair-tucson/" 
  },
  { 
    title: 'Electronic Leak Detection', 
    desc: "Acoustic line tracing and sound amplification to locate hidden leaks without opening floors.", 
    img: "electronic_leak_detection.webp",
    link: "/electronic-leak-detection-tucson/" 
  },
  { 
    title: 'Partial Repiping', 
    desc: "Replace an entire deteriorated plumbing branch for repeated slab leaks, avoiding whole-home repiping.", 
    img: "partial_repiping.webp",
    link: "/partial-repiping-tucson/" 
  },
  { 
    title: 'Emergency Slab Leak Service', 
    desc: "Urgent response for active water spreading from floors or rapid water-meter movement emergencies.", 
    img: "emergency_slab_leak_service.webp",
    link: "/emergency-slab-leak-service-tucson/" 
  },
  { 
    title: 'Hot-Water Slab Leak Detection', 
    desc: "Specialized detection for warm flooring, sudden water heater issues, and hot-line pressure loss.", 
    img: "hot_water_slab_leak.webp",
    link: "/hot-water-slab-leak-tucson/" 
  },
  { 
    title: 'Cold-Water Slab Leak Detection', 
    desc: "Identify hidden water loss and unexplained meter movement without the obvious heat symptoms.", 
    img: "cold_water_slab_leak.webp",
    link: "/cold-water-slab-leak-tucson/" 
  },
  { 
    title: 'Water-Line Pressure Testing', 
    desc: "Static pressure drops confirm a plumbing leak exists before we deploy electronic locating gear.", 
    img: "pressure_testing.webp",
    link: "/water-line-pressure-testing-tucson/" 
  }
];

export default function ServicesPage() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Services Tucson, AZ | Detection & Repair", "description": "Explore slab leak detection, pipe repair, pressure testing, under-slab repair and water-line rerouting services available across Tucson.", "url": "https://tucsonslableakpros.com/services/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        
        {/* 1. Hero Section with Form (matching the brand colors) */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "650px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Hero Cold Water Leak Tucson" src="/images/hero_cold_water_leak.webp" alt="Tucson cold water leak experts" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>COMPREHENSIVE SOLUTIONS</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Services in Tucson, AZ</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  A slab leak can begin beneath a concrete floor without visible water at the surface. The first signs may be a <a href="/hot-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>warm floor</a>, <a href="/cold-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>unexplained water use</a>, lower pressure, or the sound of running water.
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Because hidden pressurized water-line leaks beneath concrete slabs are complex, we offer a range of specialized under-slab plumbing services to identify and correct the problem.
                </p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Hidden water-line leak services
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Hot and cold line <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Pipe repair and rerouting options
                  </li>
                </ul>
              </div>

              {/* Form Box */}
              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* 2. Trust Bar (Marquee) */}
        <section className="marquee-wrapper">
          <div className="marquee-content">
            <span>LICENSED, BONDED & INSURED</span>
            <span>★</span>
            <span>BBB ACCREDITED BUSINESS</span>
            <span>★</span>
            <span>TOP RATED HOMEADVISOR PRO</span>
            <span>★</span>
            <span>TUCSON'S #1 LEAK DETECTORS</span>
            <span>★</span>
            <span>LICENSED, BONDED & INSURED</span>
            <span>★</span>
            <span>BBB ACCREDITED BUSINESS</span>
            <span>★</span>
            <span>TOP RATED HOMEADVISOR PRO</span>
            <span>★</span>
            <span>TUCSON'S #1 LEAK DETECTORS</span>
            <span>★</span>
          </div>
        </section>

        {/* 3. Alternating Split 1: Detection Comes First */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>DIAGNOSTICS</span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Detection Comes Before Repair</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                It is important to understand that finding the leak and fixing the leak are two distinct stages of our <strong>slab leak services in Tucson</strong>. 
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1.5rem", lineHeight: "1.7" }}>
                We use <strong>hidden water leak detection</strong> to confirm possible water loss and narrow down the affected line without unnecessary floor breaking. Only after the problem is isolated using <strong>pressure testing and acoustic tracing</strong> do we quote the actual <strong>plumbing repair beneath concrete</strong>.
              </p>
              <div>
                <Link href="/slab-leak-detection-tucson/" className="btn-primary" style={{ display: "inline-block", padding: "1rem 2rem", fontWeight: "bold" }}>Learn About Detection</Link>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Slab Leak Repair Tucson" src="/images/slab_leak_repair.webp" alt="Tucson slab leak repair services" style={{ width: "100%", height: "100%", minHeight: "400px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* 4. Alternating Split 2: Process */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex" }}>
              <img title="Cold Water Slab Leak Tucson" src="/images/cold_water_slab_leak.webp" alt="Tucson cold water slab leak services" style={{ width: "100%", height: "100%", minHeight: "400px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "3rem" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>THE PROCESS</span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>How Our Slab Leak Service Works</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem", color: "#4a4a4a", fontSize: "1.05rem" }}>
                <li>
                  <strong style={{ color: "var(--dark-charcoal)", display: "block", fontSize: "1.1rem" }}>1. Confirm Water Loss</strong>
                  <span>Testing is required to prove the leak is in the pressurized lines using hot and cold line isolation.</span>
                </li>
                <li>
                  <strong style={{ color: "var(--dark-charcoal)", display: "block", fontSize: "1.1rem" }}>2. Narrow Down the Area</strong>
                  <span>We use non-invasive acoustic or electronic methods to locate the pipe under the concrete.</span>
                </li>
                <li>
                  <strong style={{ color: "var(--dark-charcoal)", display: "block", fontSize: "1.1rem" }}>3. Compare Repair Options</strong>
                  <span>We present choices like direct spot repair, <a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water-line rerouting</a>, or partial repiping.</span>
                </li>
                <li>
                  <strong style={{ color: "var(--dark-charcoal)", display: "block", fontSize: "1.1rem" }}>4. Test Completed Repairs</strong>
                  <span>After the repair, the line must be checked and repressurized before normal water use resumes.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Symptoms Grid (Icons Style) */}
        <section style={{ backgroundColor: "#18181b", color: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>WARNING SIGNS</span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--white)", marginBottom: "1rem" }}>Signs You Need a Slab Leak Plumber</h2>
              <p style={{ fontSize: "1.05rem", color: "#cbd5e1", lineHeight: "1.6" }}>
                Look out for a <strong>hidden pressurized water leak</strong>. If you experience these symptoms, you may need immediate under-slab plumbing services.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", textAlign: "center" }}>
              <div style={{ padding: "2rem", backgroundColor: "#27272a", borderRadius: "8px", borderTop: "3px solid var(--brand-red)" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 1rem" }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <h3 style={{ fontSize: "1.1rem", color: "var(--white)", marginBottom: "0.5rem" }}>Moving Water Meter</h3>
                <p style={{ fontSize: "0.9rem", color: "#a1a1aa", margin: 0 }}>Meter spins when all fixtures are off.</p>
              </div>
              
              <div style={{ padding: "2rem", backgroundColor: "#27272a", borderRadius: "8px", borderTop: "3px solid var(--brand-red)" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 1rem" }}><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                <h3 style={{ fontSize: "1.1rem", color: "var(--white)", marginBottom: "0.5rem" }}>Warm Floor</h3>
                <p style={{ fontSize: "0.9rem", color: "#a1a1aa", margin: 0 }}>Hot water lines leaking beneath the tile.</p>
              </div>

              <div style={{ padding: "2rem", backgroundColor: "#27272a", borderRadius: "8px", borderTop: "3px solid var(--brand-red)" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 1rem" }}><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                <h3 style={{ fontSize: "1.1rem", color: "var(--white)", marginBottom: "0.5rem" }}>Running Water Sound</h3>
                <p style={{ fontSize: "0.9rem", color: "#a1a1aa", margin: 0 }}>Hearing flow behind walls or under floors.</p>
              </div>

              <div style={{ padding: "2rem", backgroundColor: "#27272a", borderRadius: "8px", borderTop: "3px solid var(--brand-red)" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 1rem" }}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                <h3 style={{ fontSize: "1.1rem", color: "var(--white)", marginBottom: "0.5rem" }}>Unexpected Bills</h3>
                <p style={{ fontSize: "0.9rem", color: "#a1a1aa", margin: 0 }}>High water bills with no visible leaks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Comprehensive Services Cards with Images */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>OUR EXPERTISE</span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>Tucson Water-Line Leak Services</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginTop: "1rem", lineHeight: "1.6" }}>
                Whether you need a slab leak specialist to locate an issue, or you're looking for a plumber for hidden water leak under concrete, our slab leak plumber serving Tucson has you covered.
              </p>
            </div>
            
            <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
              {servicesList.map(svc => (
                 <div key={svc.title} className="premium-card location-card" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <img title="Water Line Rerouting Tucson" src={`/images/${svc.img}`} alt={svc.title} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3 style={{ marginBottom: "1rem", color: "var(--brand-red)", fontSize: "1.3rem", fontWeight: "800" }}>{svc.title}</h3>
                    <p style={{ fontSize: "1rem", color: "#4a4a4a", marginBottom: "1.5rem", flexGrow: 1, lineHeight: "1.6" }}>{svc.desc}</p>
                    <Link href={svc.link} style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "0.95rem", textDecoration: "none" }}>Learn More →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>Slab Leak Service Questions</h2>
            <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              
              <div style={{ paddingBottom: "1.5rem", borderBottom: "1px solid var(--border-light)" }}>
                <h3 style={{ fontSize: "1.2rem", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Which service should I request first?</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", margin: 0 }}>Always start with Slab Leak Detection. We must confirm that a pressurized pipe is actually leaking and locate it before any repair can be quoted or performed.</p>
              </div>

              <div style={{ paddingBottom: "1.5rem", borderBottom: "1px solid var(--border-light)" }}>
                <h3 style={{ fontSize: "1.2rem", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Can a slab leak be found without opening the floor?</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", margin: 0 }}>Yes, acoustic and electronic detection equipment allow us to trace the lines and listen for the leak through the concrete without invasive digging.</p>
              </div>

              <div style={{ paddingBottom: "1.5rem", borderBottom: "1px solid var(--border-light)" }}>
                <h3 style={{ fontSize: "1.2rem", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Is a warm floor always caused by a hot-water leak?</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", margin: 0 }}>Usually, but not always. An electrical short in a radiant floor heating system or an uninsulated hot water line running too close to the surface can also cause warmth.</p>
              </div>
              
              <div>
                <h3 style={{ fontSize: "1.2rem", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Can a leaking line be rerouted instead of repaired under concrete?</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", margin: 0 }}>Yes, water-line rerouting is often the preferred repair method because it abandons the failing pipe and provides a brand-new line without destroying your existing flooring.</p>
              </div>

            </div>
          </div>
        </section>

        {/* 8. Bottom CTA (Matches Hero) */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          {/* Dark Overlay Background */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Section Thermal Camera Tucson" src="/images/section_thermal_camera.webp" alt="Residential thermal camera in Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>HIDDEN WATER LEAK SERVICES TUCSON</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Find the Right Slab Leak Service in Tucson</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Don't wait for a hidden pressurized water leak to damage your foundation. Provide your ZIP code and a short description of the problem. Service availability and repair options will be confirmed.
                </p>
              </div>

              {/* Form Box */}
              <ZipCheckerForm />
            </div>
          </div>
        </section>
      </main>
</>
  );
}
