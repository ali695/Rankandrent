import React from 'react';
import { Metadata } from 'next';
import ZigZagBlocks from '@/components/ZigZagBlocks';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Search, MapPin, Wrench, Layers, Clock, Calculator, HelpCircle, Pickaxe, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';
import ZipCodeDirectory from '@/components/ZipCodeDirectory';
import FaqCategory from '@/components/FaqCategory';

export const metadata: Metadata = {
  title: 'Slab Leak Repair Cost Tucson | Price Factors Explained',
  description: 'Understand how leak location, detection, pipe condition, floor access, repair method and restoration affect slab leak repair costs in Tucson.',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does slab leak detection cost in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Detection is usually a flat fee separate from the repair. It covers the technician's time, pressure testing, and acoustic or electronic line locating to pinpoint the exact failure beneath the concrete."
      }
    },
    {
      "@type": "Question",
      "name": "What factors affect the cost of slab leak repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The final cost is driven by the depth and location of the leak, the repair method chosen (spot repair vs. rerouting), the type of flooring that must be removed, and the extent of required surface restoration."
      }
    },
    {
      "@type": "Question",
      "name": "Is spot repair usually less expensive than rerouting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spot repair is often cheaper upfront for the plumbing work itself. However, when you factor in the cost to replace luxury tile or repair extensive concrete and drywall damage, rerouting through an attic often becomes the more cost-effective option."
      }
    },
    {
      "@type": "Question",
      "name": "Does the repair price include tile, concrete or drywall restoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most plumbing estimates include rough concrete patching, but they rarely include finish work like matching expensive tile, replacing hardwood, or painting drywall. Always confirm what restoration is included in your written estimate."
      }
    },
    {
      "@type": "Question",
      "name": "Can the final price change after the leak is located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A detection service provides the exact location of the leak. Only after the location and severity are known can a plumber provide an accurate, final estimate for the repair work."
      }
    },
    {
      "@type": "Question",
      "name": "Does homeowners insurance cover slab leak damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Homeowners insurance often covers the resulting water damage (ruined floors, cabinets) and the cost to access the pipe (jackhammering), but policies typically do not cover the cost of the plumbing pipe repair itself. Always review your specific policy."
      }
    },
    {
      "@type": "Question",
      "name": "Are emergency slab leak services more expensive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, dispatching a crew after hours, on weekends, or on holidays usually incurs an emergency fee. If the leak can be isolated safely by shutting off the water, waiting for standard business hours can save money."
      }
    },
    {
      "@type": "Question",
      "name": "Should I choose the lowest slab leak estimate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. The lowest estimate may exclude vital services like pressure testing the remaining lines, concrete closure, or pulling necessary permits. Always compare the full scope of work, not just the bottom-line price."
      }
    }
  ]
};

export default function SlabLeakRepairCost() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Repair Cost Tucson | Price Factors Explained", "description": "Understand how leak location, detection, pipe condition, floor access, repair method and restoration affect slab leak repair costs in Tucson.", "url": "https://tucsonslableakpros.com/slab-leak-repair-cost-tucson/"}) }} />
      <Breadcrumbs items={[
        { label: 'Slab Leak Guide', href: '/slab-leak-faq/' },
        { label: 'Slab Leak Repair Cost' }
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main>
        {/* Section 1: Hero */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/hero_partial_repiping.jpg" alt="Tucson slab leak repair cost estimates" title="Hero Partial Repiping Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                  SLAB LEAK GUIDE
                </span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Slab Leak Repair Cost in Tucson: What Affects the Price?
                </h1>
                
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  There is no single <a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak repair</a> price because detection, access, and repair requirements vary significantly by property.
                </p>
              </div>

              <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "2rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "0.5rem", textAlign: "center" }}>
                  Request a Service Assessment
                </h3>
                <ZipCheckerForm />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Cost-Factor Icon Strip */}
        <section style={{ backgroundColor: "var(--dark-charcoal)", padding: "1.5rem 0", color: "var(--white)", borderBottom: "4px solid var(--brand-red)" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem", opacity: 0.9 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <MapPin size={18} color="var(--brand-red)" /> Leak location
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Search size={18} color="var(--brand-red)" /> Detection method
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <HelpCircle size={18} color="var(--brand-red)" /> Pipe condition
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Pickaxe size={18} color="var(--brand-red)" /> Access required
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Wrench size={18} color="var(--brand-red)" /> Repair method
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Layers size={18} color="var(--brand-red)" /> Surface restoration
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Detection Cost vs. Repair Cost */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Detection Cost vs. Repair Cost
            </h2>
            <div className="split-grid" style={{ gap: "2rem" }}>
              <div style={{ backgroundColor: "#f8fafc", padding: "2.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <Search size={32} color="var(--brand-red)" />
                  <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", margin: 0 }}>Detection</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem", fontSize: "1.1rem", color: "#4a4a4a" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ color: "var(--brand-red)", fontWeight: "bold" }}>✓</span> Confirms water loss</li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ color: "var(--brand-red)", fontWeight: "bold" }}>✓</span> Narrows affected area</li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ color: "var(--brand-red)", fontWeight: "bold" }}>✓</span> May use several tests (pressure, acoustic)</li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ color: "var(--brand-red)", fontWeight: "bold" }}>✓</span> Usually precedes the final repair estimate</li>
                </ul>
              </div>

              <div style={{ backgroundColor: "#f8fafc", padding: "2.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <Wrench size={32} color="var(--brand-red)" />
                  <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", margin: 0 }}>Repair</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem", fontSize: "1.1rem", color: "#4a4a4a" }}>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ color: "var(--brand-red)", fontWeight: "bold" }}>✓</span> Corrects the damaged line</li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ color: "var(--brand-red)", fontWeight: "bold" }}>✓</span> Repairs or bypasses the pipe</li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ color: "var(--brand-red)", fontWeight: "bold" }}>✓</span> May require surface access (jackhammering)</li>
                  <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ color: "var(--brand-red)", fontWeight: "bold" }}>✓</span> Depends completely on the final chosen method</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Main Cost Factors */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem" }}>
              Main Cost Factors
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
              {[
                { title: 'Leak Location & Depth', icon: <MapPin size={24} color="var(--brand-red)" /> },
                { title: 'Pipe Material & Condition', icon: <HelpCircle size={24} color="var(--brand-red)" /> },
                { title: 'Flooring Type & Access', icon: <Layers size={24} color="var(--brand-red)" /> },
                { title: 'Detection Method Used', icon: <Search size={24} color="var(--brand-red)" /> },
                { title: 'Repair Method Required', icon: <Wrench size={24} color="var(--brand-red)" /> },
                { title: 'Permits & Code Compliance', icon: <Calculator size={24} color="var(--brand-red)" /> },
                { title: 'Emergency vs. Scheduled', icon: <Clock size={24} color="var(--brand-red)" /> },
                { title: 'Concrete & Surface Restoration', icon: <Pickaxe size={24} color="var(--brand-red)" /> }
              ].map((factor, i) => (
                <div key={i} style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "1rem" }}>
                  {factor.icon}
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--dark-charcoal)", margin: 0 }}>{factor.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Repair Method Comparison */}
        <section style={{ padding: "5rem 0", backgroundColor: "var(--white)" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem" }}>
              Repair Method Comparison
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)" }}>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Method</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Description</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Cost Profile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Spot repair</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Direct under-slab access by breaking concrete to fix the specific failure.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Usually lower plumbing cost, but high potential restoration cost for flooring.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Rerouting</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Abandoning the under-slab line and running a new pipe above ground (attic/walls).</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Moderate to high plumbing cost, but minimal flooring restoration required.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Partial <a href="/partial-repiping-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>repiping</a></td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Replacing a large section or multiple branches of failing copper.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Higher upfront plumbing cost, but provides the best long-term security.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 6: What an Estimate Should Clarify & Misleading Quotes */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>What an Estimate Should Clarify</h2>
              <p style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                A professional slab leak quote should transparently break down exactly what is included. Ensure you check for the following:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--brand-red)" }}>•</span> Detection charge</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--brand-red)" }}>•</span> Plumbing work and labor</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--brand-red)" }}>•</span> Material costs (copper, PEX, fittings)</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--brand-red)" }}>•</span> Access methods (jackhammering, drywall cutting)</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--brand-red)" }}>•</span> Post-repair testing</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--brand-red)" }}>•</span> Concrete closure (rough patching)</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--brand-red)" }}>•</span> Tile, flooring, drywall, and paint restoration</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--brand-red)" }}>•</span> Warranty provided</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--brand-red)" }}>•</span> Permit and inspection costs (when applicable)</li>
              </ul>
            </div>
            
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#991b1b", marginBottom: "1.5rem" }}>Avoiding Misleading Low Quotes</h2>
              <p style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                A suspiciously low initial quote over the phone often hides exclusions that will balloon your final bill. Common exclusions include:
               If you live in <a href="/service-areas/east-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>East Tucson</a>, our specialists can be dispatched immediately.</p>
              <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                <li><strong>Detection not included:</strong> The quote assumes you already know exactly where the leak is.</li>
                <li><strong>Restoration excluded:</strong> The plumber fixes the pipe but leaves a massive open hole in your concrete and ruined tile.</li>
                <li><strong>No additional line testing:</strong> Failing to test if the rest of the aging pipe holds pressure.</li>
                <li><strong>Hidden emergency fees:</strong> Upcharging significantly if the repair happens after 5 PM.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Insurance Section */}
        <section style={{ padding: "4rem 0", backgroundColor: "var(--white)" }}>
          <div className="container">
            <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", padding: "3rem", borderRadius: "8px", textAlign: "center" }}>
              <Calculator size={48} color="#1d4ed8" style={{ marginBottom: "1.5rem" }} />
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#1e3a8a", marginBottom: "1rem" }}>Insurance and Slab Leaks</h2>
              <p style={{ color: "#1e40af", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
                Insurance coverage for slab leaks can be complex. Typically, homeowners insurance may cover the resulting "sudden and accidental" water damage (such as ruined flooring or baseboards) and the "access costs" required to reach the leak (such as tearing out drywall or concrete). However, the policy often excludes the actual plumbing repair of the failed pipe itself. You should obtain a written, professional diagnosis and contact your insurer directly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Related Services */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Related Services
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              
              <Link href="/slab-leak-detection-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Slab Leak Detection</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Pinpoint the leak to get an accurate repair estimate.</p>
                  </div>
                </div>
              </Link>

              <Link href="/slab-leak-repair-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Slab Leak Repair</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Professional direct spot repair beneath the concrete.</p>
                  </div>
                </div>
              </Link>

              <Link href="/water-line-rerouting-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Water-Line Rerouting</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Often the most cost-effective solution when flooring is expensive.</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Section 9: FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <FaqCategory 
              title="Frequently Asked Questions"
              iconName="MessageCircleQuestion"
              faqs={faqSchema.mainEntity.map((faq, idx) => ({
                id: `cost-faq-${idx}`,
                question: faq.name,
                answer: faq.acceptedAnswer.text
              }))}
            />
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/slab-leak-faq/" style={{ color: "var(--brand-red)", fontWeight: "bold", textDecoration: "none", fontSize: "1.1rem" }}>
                View All Slab Leak Questions →</Link>
            </div>
          </div>
        </section>

        <ZipCodeDirectory />

        {/* Section 10: Final CTA */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/hero_home.jpg" alt="Tucson hero home" title="Hero Home Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <div style={{ color: "var(--white)", fontSize: "1.5rem", fontWeight: "900", letterSpacing: "-1px", marginBottom: "1rem" }}>
                  TUCSON<span style={{ color: "var(--brand-red)" }}>LEAK</span>PROS
                </div>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Get an Accurate Assessment Today
                </h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Don't rely on guesswork. Request a professional assessment to find the leak and receive a transparent repair estimate.
                </p>
              </div>

              <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "2rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "0.5rem", textAlign: "center" }}>
                  Request Service
                </h3>
                <ZipCheckerForm />
              </div>
            </div>
          </div>
        </section>

      </main>
</>
  );
}
