import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqCategory from '@/components/FaqCategory';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';

export const metadata: Metadata = {
  title: 'Water-Line Rerouting Tucson | Slab Leak Pipe Bypass',
  description: 'Explore water-line rerouting in Tucson to bypass a leaking under-slab pipe through a more accessible wall, ceiling or attic route.',
  openGraph: {
    title: 'Water-Line Rerouting Tucson | Slab Leak Pipe Bypass',
    description: 'Explore water-line rerouting in Tucson to bypass a leaking under-slab pipe through a more accessible wall, ceiling or attic route.',
    url: 'https://tucsonslableakpros.com/water-line-rerouting-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    type: 'website',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Water-Line Rerouting",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Water-line rerouting services in Tucson to bypass leaking under-slab plumbing lines through walls, ceilings, or attics."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does rerouting avoid all cutting and demolition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A slab leak repair without opening concrete floor avoids floor damage, but the replacement line usually requires drywall access through walls or ceilings."
      }
    },
    {
      "@type": "Question",
      "name": "Can only one leaking line be rerouted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Often, yes. We can reroute one plumbing branch after slab leak without requiring a whole-home repipe."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to the old pipe under the slab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We abandon damaged under-slab pipe, fully disconnecting it from the system so it no longer carries water."
      }
    },
    {
      "@type": "Question",
      "name": "Is rerouting always cheaper than direct repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Rerouting cost vs slab repair cost depends on the route length, number of drywall openings needed, and finish restoration."
      }
    },
    {
      "@type": "Question",
      "name": "Can a hot-water line be rerouted through the attic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we can reroute hot-water line through wall or attic, but heat, insulation, and support must be considered to protect the new pipe."
      }
    }
  ]
};

export default function WaterLineRerouting() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Water-Line Rerouting Tucson | Slab Leak Pipe Bypass", "description": "Explore water-line rerouting in Tucson to bypass a leaking under-slab pipe through a more accessible wall, ceiling or attic route.", "url": "https://tucsonslableakpros.com/water-line-rerouting-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Section Damp Floor Tucson" src="/images/section_damp_floor.jpg" alt="Residential damp floor in Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>BYPASS DAMAGED UNDER-SLAB LINES</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Water-Line Rerouting Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Don't destroy your expensive tile floor for a pipe that might leak again. <strong>Water-line rerouting Tucson</strong> homeowners trust replaces the function of a leaking pipe without breaking the floor.
                 If you live in <a href="/service-areas/north-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>North Tucson</a>, our specialists can be dispatched immediately.</p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  A <strong>slab leak reroute Tucson</strong> isolates the damaged route and runs a new pipe through an accessible area like a wall or attic. This <strong>plumbing line bypass Tucson</strong> can save your floors and offer a more permanent solution.
                 We proudly provide these services to homeowners in <a href="/service-areas/rita-ranch/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Rita Ranch</a>.</p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Bypass leaking under-slab pipe
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Reroute pipe through attic Tucson
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Abandon leaking pipe under slab
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Content Section 1: A New Route */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>A Replacement Water-Line Route</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A <strong>slab leak pipe rerouting</strong> is considered when direct slab access would damage valuable flooring, or when the pipe condition suggests one spot repair isn't enough. We <strong>reroute water pipe around slab</strong> to remove the damaged segment from service.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                When you <strong>reroute plumbing through wall</strong> cavities or opt for an <strong>overhead plumbing reroute</strong>, the new line must avoid heat, freezing risk, and electrical conflicts. We handle both <strong>hot-water line rerouting Tucson</strong> and <strong>cold-water line rerouting Tucson</strong>.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Section Water Meter Tucson" src="/images/section_water_meter.jpg" alt="Residential water meter in Tucson" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* When Considered & Routes Split */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Rerouting vs Spot Repair</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem", color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Water-line rerouting vs spot repair:</strong> Rerouting is better when the under-slab route is long or the pipe shows wider deterioration.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong><a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Slab leak repair</a> without opening concrete floor:</strong> Rerouting shifts restoration from the floor to smaller drywall patches.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Pipe rerouting instead of slab spot repair:</strong> Essential if the same line has failed before.</li>
              </ul>
            </div>
            
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Plumber for Water-Line Rerouting Tucson AZ</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                Whether you need to <strong>bypass damaged pipe under house slab</strong> or are considering <strong>rerouting vs <a href="/partial-repiping-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>repiping</a></strong> entirely, you need a professional <strong>replacement pipe route Tucson</strong> evaluation.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                We help homeowners <strong>abandon damaged under-slab pipe and replace it</strong> with a safer <strong>replacement water line through ceiling Tucson</strong>.
              </p>
            </div>
          </div>
        </section>

                <ZigZagBlocks blocks={[
          {
            heading: "The Rerouting Process Step by Step",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A typical water-line reroute takes one to two days depending on the number of lines being replaced and the layout of your home. We start by mapping the existing plumbing to identify which lines need rerouting and planning the most efficient path for the new pipe through your walls or attic space.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The new PEX line is run from the water main or meter connection to each fixture supply point, secured with proper hangers and insulated where it passes through unconditioned attic space. Each connection is pressure-tested individually before we move to the next. Once all new lines are confirmed leak-free, we disconnect the old under-slab pipe at both ends and cap it off.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The result is a completely new water supply system that is accessible, maintainable, and built to handle extreme temperature swings for decades. Your water pressure is restored (often improved, since new PEX has smoother interior walls than corroded copper), and you never have to worry about that old pipe failing again.</p></>,
            imageSrc: "/images/water_line_rerouting.jpg",
            imageAlt: "Water line rerouting process",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Why We Use PEX for Rerouting",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>When moving your plumbing out of the slab and into the walls and attic, we almost exclusively use high-grade PEX (cross-linked polyethylene) piping. Unlike rigid copper, PEX is highly flexible. This allows us to "fish" the pipe through long wall cavities and complex attic framing with minimal drywall removal.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>PEX is also completely immune to the soil corrosion and hard water scaling that destroys copper pipes in Arizona. Furthermore, because it can bend around corners, PEX installations require far fewer fittings and joints than a comparable copper system. Fewer joints mean fewer potential points of failure over the lifespan of your home.</p></>,
            imageSrc: "/images/partial_repiping.jpg",
            imageAlt: "Using PEX for rerouting",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Protecting Pipes in Unconditioned Attics",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Running water lines through a Tucson attic presents a unique challenge: extreme heat. Summer attic temperatures can routinely exceed 140 degrees, which can heat the water sitting in your cold-water lines to uncomfortable temperatures.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>To combat this, we meticulously insulate all new PEX lines routed through unconditioned spaces. We use thick, high-R-value foam insulation wrap, securing it tightly at every joint and hanger. This not only keeps your cold water cool in the summer, but it also protects hot water lines from losing thermal energy during the winter months.</p></>,
            imageSrc: "/images/hero_water_line_rerouting.jpg",
            imageAlt: "Pipe insulation in attic",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Minimizing Drywall Damage",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Many homeowners worry that a reroute means tearing down entire walls of drywall. While some drywall access is unavoidable to connect the new overhead lines to your lower sink and shower valves, we use specialized techniques to keep cuts to an absolute minimum.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>We map out the exact stud bays housing your plumbing fixtures. We make small, precise access squares—usually behind toilets or under bathroom vanities where they are less visible. Once the new PEX is dropped down from the attic and connected to your angle stops, the small drywall squares can be easily patched, taped, and painted by a drywall professional.</p></>,
            imageSrc: "/images/slab_leak_detection_vs_repair.jpg",
            imageAlt: "Minimizing drywall damage",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Water-Line Rerouting FAQ"
                iconName="MessageCircleQuestion"
                faqs={faqSchema.mainEntity.map((faq: any, idx: number) => ({
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
            <img title="Slab Leak Repair Tucson" src="/images/slab_leak_repair.jpg" alt="Tucson slab leak repair services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>READY FOR A NEW ROUTE?</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Compare Rerouting Options in Tucson</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Ask us to map a proposed route and explain exactly what access points are needed before we begin work.
                </p>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
