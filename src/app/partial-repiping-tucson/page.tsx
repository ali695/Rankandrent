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
        "text": "Often, one confirmed branch can be replaced while the rest of the system remains in service. The decision depends on pipe condition, shared connections, failure history, and a workable replacement route."
      }
    },
    {
      "@type": "Question",
      "name": "Does partial repiping require wall access?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually. Avoiding the slab shifts access to walls, ceilings, cabinets, or an attic. The route plan should show expected openings and state who handles drywall, texture, paint, and insulation restoration."
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
                  When the same plumbing route has failed more than once, replacing the affected branch may deserve comparison with another spot repair. The decision should start with documented leak history and <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure-testing</a> or detection findings.</p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Partial repiping in Tucson replaces a defined branch or group of lines without automatically repiping the whole home. The old section is disconnected from service, and a new route is installed, tested, and documented.
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
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>When Replacing a Branch Is Worth Comparing</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A partial repipe may make financial sense when a confirmed branch has failed repeatedly, direct access would damage difficult finishes, or several fixtures share an aging route. One past leak alone does not prove that the whole branch must be replaced.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Compare the remaining pipe condition, number of connections, attic or wall path, access openings, restoration, testing, warranty, and total cost. A clear proposal should show which fixtures the new branch will serve and which buried section will be abandoned.
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
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Define Exactly What the Partial Repipe Includes</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                “Partial repipe” can mean one fixture branch, one hot- or cold-water group, or several related lines. The estimate should name every fixture and connection included, the pipe size and material, the route, access points, and test procedure.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                A failed or unclear pressure test is not enough by itself to define the scope. Ask how the affected branches were identified and whether a spot repair, single-line reroute, broader partial repipe, or whole-home evaluation is being recommended—and why.
              </p>
            </div>
          </div>
        </section>

                        <ZigZagBlocks blocks={[
          {
            heading: "Materials, Testing, and Warranty Questions",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>PEX and copper are both considered for <a href="/partial-repiping-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>partial repiping</a>. PEX flexibility may reduce directional fittings on some routes, while copper may suit particular exposed or transition details. Material choice should match local requirements, water conditions, temperature and pressure ratings, and manufacturer instructions.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Ask for the product name, pipe size, joining system, supports, insulation, protection at framing, and documented test method. These installation details matter as much as the material label.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Labor and manufacturer warranties vary by provider and product. Request both in writing, including duration, exclusions, transferability, required registration, covered fittings, and who handles access and finish restoration if a warranty claim occurs.</p></>,
            imageSrc: "/images/partial_repiping.webp",
            imageAlt: "Partial Repiping Materials",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "When Partial Repiping Makes Sense",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A partial repipe sits between a limited <a href="/under-slab-pipe-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>under-slab pipe repair</a> and a whole-home repipe. It can target a known branch—for example, a <a href="/hot-water-slab-leak-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>hot-water line</a> serving several fixtures—while leaving unrelated piping in service.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The comparison should include failure history, nearby pipe condition, access and restoration, route length, fixture downtime, and total project cost. Replacing the branch removes that buried section from active service, but it does not eliminate leaks from other pipes or connections.</p></>,
            imageSrc: "/images/hero_partial_repiping.webp",
            imageAlt: "When partial repiping makes sense",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Planning Wall and Ceiling Access",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Replacing only selected lines usually requires fewer openings than a whole-home project, but access cannot be promised as minimal before the route is mapped. Framing, fire blocks, insulation, fixture valves, cabinets, and required supports can change the plan.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Ask the provider to mark expected wall and ceiling openings for the <a href="/water-line-rerouting-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>replacement route</a>. The written scope should state who moves belongings and appliances, protects occupied rooms, replaces insulation, patches drywall, matches texture, and paints.</p></>,
            imageSrc: "/images/slab_leak_detection_vs_repair.webp",
            imageAlt: "Minimizing wall damage",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Document the New Branch for Future Work",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A partial repipe can improve access to the lines it replaces, especially when shut-offs or a serviceable manifold are part of the approved design. These features are project choices, not automatic parts of every repipe.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Keep a route drawing, photos before wall closure, product information, connection locations, test results, permits when applicable, and warranty documents. Good records make future diagnosis and estimates clearer, helping a homeowner compare long-term options and <a href="/slab-leak-repair-cost-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair costs</a> without guessing where the new branch runs.</p></>,
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
