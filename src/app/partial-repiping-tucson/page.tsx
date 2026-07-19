import React from 'react';
import { Metadata } from 'next';
import FaqCategory from '@/components/FaqCategory';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';

export const metadata: Metadata = {
  alternates: { canonical: "/partial-repiping-tucson/" },
  title: 'Partial Repiping Tucson | Replace Damaged Water Lines',
  description: 'Replace selected plumbing branches or recurring problem sections without automatically repiping the entire Tucson home.',
  openGraph: {
    title: 'Partial Repiping Tucson | Replace Damaged Water Lines',
    description: 'Replace selected plumbing branches or recurring problem sections without automatically repiping the entire Tucson home.',
    url: 'https://tucsonslableakpros.com/partial-repiping-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.webp",
        width: 1200,
        height: 630,
        alt: "Partial Repiping Tucson | Replace Damaged Water Lines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partial Repiping Tucson | Replace Damaged Water Lines",
    description: "Replace selected plumbing branches or recurring problem sections without automatically repiping the entire Tucson home.",
    images: ["/images/services_hub_hero.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Partial Repiping",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Partial repiping and water-line replacement for properties with repeated slab leaks in Tucson, AZ."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is partial repiping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Partial repiping replaces a specific, heavily deteriorated plumbing branch or section of the home, rather than replacing every single pipe in the house."
      }
    },
    {
      "@type": "Question",
      "name": "Can only one water line be repiped?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can replace one plumbing branch without whole-home repipe if the rest of the plumbing is in good condition."
      }
    },
    {
      "@type": "Question",
      "name": "Does partial repiping require wall access?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. While we avoid breaking the concrete floor, running the new partial plumbing repipe usually requires drywall access in walls or ceilings."
      }
    },
    {
      "@type": "Question",
      "name": "When is whole-home repiping necessary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When the entire plumbing system (like old galvanized steel or polybutylene) is failing system-wide, partial repiping may not be enough."
      }
    }
  ]
};

export default function PartialRepiping() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Partial Repiping Tucson | Replace Damaged Water Lines", "description": "Replace selected plumbing branches or recurring problem sections without automatically repiping the entire Tucson home.", "url": "https://tucsonslableakpros.com/partial-repiping-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Hero Water Line Rerouting Tucson" src="/images/hero_water_line_rerouting.webp" alt="Tucson water line rerouting experts" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>SOLVE REPEATED SLAB LEAKS</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Partial Repiping Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Tired of paying for repeated slab leak repairs on the exact same plumbing line? It might be time to replace that branch entirely.
                 Our experts are highly trained in <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>.</p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  <strong>Partial repiping Tucson</strong> allows you to <strong>replace one plumbing branch without whole-home repipe</strong>. We abandon the failing under-slab section and install a permanent new route.
                 You may also need <a href="/signs-of-a-slab-leak/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>signs of a slab leak</a> depending on the severity of the issue.</p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Plumbing branch replacement Tucson
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Replace deteriorated pipe section beneath slab
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Hot-water line repiping Tucson
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Content Section 1: When to repipe */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Stop Paying for Repeated Repairs</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A <strong>slab leak repiping Tucson</strong> strategy makes financial sense when you have <strong>repeated slab leaks on same plumbing line</strong>. If you are constantly hiring plumbers for spot repairs, <strong>partial house repiping Tucson</strong> provides a permanent fix.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                We <strong>repipe damaged plumbing branch</strong> sections by routing a new, durable pipe through the attic or walls. Whether you need a <strong>cold-water branch replacement</strong> or you need to <strong>replace pipes beneath slab</strong>, we design the best <strong>replacement plumbing route Tucson</strong>.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Slab Leak Repair Tucson" src="/images/slab_leak_repair.webp" alt="Tucson slab leak repair services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* Repiping vs Rerouting */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Comparing Your Options</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem", color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Partial repiping vs whole-house repiping:</strong> Whole-house covers everything. Partial targets only the <strong>repeated leak section</strong> that is failing.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Repiping vs slab leak spot repair:</strong> Repiping is preventative. Spot repairs are temporary bandages if the line is bad.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Partial repiping vs <a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water-line rerouting</a>:</strong> They are similar, but a partial repipe often involves a longer <strong>water-line branch rerouting</strong> covering multiple fixtures.</li>
              </ul>
            </div>
            
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Plumber for Selected Pipe Replacement Tucson</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                Our <strong>partial plumbing repipe Tucson</strong> professionals will handle the <strong>partial home repiping through walls and ceiling</strong> safely. We <strong>replace cold-water branch beneath foundation</strong> by abandoning it and pulling new lines overhead.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                If you have a <strong>partial repiping after failed pressure test</strong> scenario, don't worry. We will <strong>abandon multiple damaged under-slab lines</strong> and get your home secure again.
              </p>
            </div>
          </div>
        </section>

                        <ZigZagBlocks blocks={[
          {
            heading: "Partial Repiping Materials and Warranty",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>We use PEX (cross-linked polyethylene) for the majority of <a href="/partial-repiping-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>partial repiping</a> projects in Tucson. PEX offers several advantages over copper in under-slab and through-wall applications: it resists the corrosion that causes slab leaks in the first place, handles thermal expansion without stress cracking, and requires fewer joints — meaning fewer potential failure points.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>All pipe materials we use are rated for potable water and comply with current Arizona plumbing codes. Each connection is pressure-tested individually before the wall cavities are closed, and the entire new branch receives a final system-wide pressure verification before the project is considered complete.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The completed repiping work comes with a labor warranty covering our workmanship and connections, while the PEX pipe itself carries a manufacturer warranty of 25 years or more. We provide full documentation of the work performed, materials used, and test results for your records and for any future home inspections or insurance needs.</p></>,
            imageSrc: "/images/partial_repiping.webp",
            imageAlt: "Partial Repiping Materials",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "When Partial Repiping Makes Sense",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A partial repipe is the perfect middle ground between a simple <a href="/under-slab-pipe-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>under-slab pipe repair</a> and a whole-home repipe. If you have experienced a leak on a specific branch line—for instance, the <a href="/hot-water-slab-leak-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>hot water line</a> feeding your master bathroom—but the rest of your home's plumbing appears healthy, a partial repipe targets the known problem area.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Instead of breaking your bathroom floor to fix one hole, we cap off the entire failing line under the slab. We then run a brand new PEX line through the attic and drop it down the wall to feed your shower and sinks. This permanently eliminates the risk of that specific line ever leaking under your foundation again.</p></>,
            imageSrc: "/images/hero_partial_repiping.webp",
            imageAlt: "When partial repiping makes sense",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Minimizing Wall Damage",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Because we are only replacing a specific section of your plumbing, the structural impact on your home is minimal. We don't need to tear out ceilings or open every wall in your house. By carefully mapping the route from the water source to the fixtures, we strategically plan small access panels, unlike a full <a href="/water-line-rerouting-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>water-line reroute</a>.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Most of the new pipe is routed securely through the attic where it is out of sight. The only drywall that needs to be cut is typically behind toilets or inside vanity cabinets where the new line connects to your angle stops. These small cuts are easily patched and painted, leaving your home looking untouched.</p></>,
            imageSrc: "/images/slab_leak_detection_vs_repair.webp",
            imageAlt: "Minimizing wall damage",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Future-Proofing Your Plumbing",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Every partial repipe we perform is designed with the future in mind. If we are rerouting the hot water line to your kitchen today, we install accessible manifolds and shut-off valves that make future upgrades easy.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>If another under-slab line fails in a different part of the house five years from now, our technicians can simply tie a new PEX line into the accessible manifold we built during this repair. It transforms a scattered, buried plumbing system into a modern, manageable, overhead network piece by piece, helping manage the long-term <a href="/slab-leak-repair-cost-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair cost</a>.</p></>,
            imageSrc: "/images/slab_leak_repair.webp",
            imageAlt: "Future proofing plumbing",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="FAQ: Partial Repiping"
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
