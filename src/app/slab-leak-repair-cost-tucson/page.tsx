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
        "text": "Pricing varies by provider and scope. Ask whether the detection fee includes meter review, system isolation, pressure testing, route tracing, acoustic or thermal comparison, marked findings, photographs, and a written report. Detection should narrow evidence without promising an exact point in every floor assembly."
      }
    },
    {
      "@type": "Question",
      "name": "What factors affect the cost of slab leak repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Important factors include diagnostic work, pipe and branch layout, location confidence, floor or wall access, repair method, materials, route length, permits, pressure testing, concrete, flooring, drywall, paint, drying, cleanup, and after-hours response."
      }
    },
    {
      "@type": "Question",
      "name": "Is spot repair usually less expensive than rerouting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. Direct repair may use less new pipe but require flooring and concrete work. Rerouting may preserve the floor but require longer pipe, wall or attic access, insulation, penetrations, and several finish patches. Compare completed-project scopes rather than plumbing labor alone."
      }
    },
    {
      "@type": "Question",
      "name": "Does the repair price include tile, concrete or drywall restoration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no universal inclusion. Concrete closure, tile, carpet, wood, drywall, texture, paint, cabinets, drying, and cleanup should appear as separate included, excluded, allowance, or owner-responsibility items in the written estimate."
      }
    },
    {
      "@type": "Question",
      "name": "Can the final price change after the leak is located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It can change when concealed conditions differ from the documented assumptions. The agreement should explain which findings trigger a change order, how added work is photographed and priced, and who must approve it before the scope expands."
      }
    },
    {
      "@type": "Question",
      "name": "Does homeowners insurance cover slab leak damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coverage depends on the policy, endorsements, cause, timing, and claim facts. Separate the failed pipe, access, resulting damage, drying, mold, matching, and code-related work, then ask the insurer how each category is handled. Do not rely on a general coverage assumption."
      }
    },
    {
      "@type": "Question",
      "name": "Are emergency slab leak services more expensive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After-hours response may carry different rates. Active spreading water or an unsafe condition can justify immediate mitigation. When the loss is safely controlled, ask whether permanent diagnosis and repair can be scheduled separately and what emergency charges apply."
      }
    },
    {
      "@type": "Question",
      "name": "Should I choose the lowest slab leak estimate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not by price alone. Normalize each proposal for evidence, access, pipe work, material, testing, permits, inspection, restoration, cleanup, schedule, change orders, and warranty. A lower total may simply assign more work to the homeowner or another trade."
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
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Localized floor and concrete access to expose and repair a supported failure.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Less new pipe, but flooring, concrete, dust control, and finish matching may be significant.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Rerouting</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Disconnecting the failed run and installing an approved alternate route.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>More pipe and routing labor; may trade flooring work for drywall, attic, insulation, or paint work.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Partial <a href="/partial-repiping-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>repiping</a></td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Replacing a clearly defined branch or group of branches when failure history supports it.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Broader planned scope; value depends on the pipe addressed, access overlap, and remaining system condition.</td>
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
                A useful slab leak estimate should connect the proposed method to documented findings and separate every cost category. Check the following:
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
                A phone price given before the system, route, access, and finishes are known may be only a partial allowance. In <a href="/service-areas/east-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>East Tucson</a> and elsewhere in the service area, ask for the assumptions and exclusions behind any initial figure.</p>
              <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                <li><strong>Detection excluded:</strong> The figure assumes another provider has already identified the affected system and area.</li>
                <li><strong>Restoration excluded:</strong> Concrete, tile, flooring, drywall, paint, drying, or cleanup belongs to another scope.</li>
                <li><strong>Verification unclear:</strong> The estimate does not state how the repair or reroute will be pressure-tested and inspected.</li>
                <li><strong>Rate conditions unclear:</strong> After-hours, equipment, permit, disposal, and concealed-condition charges are not defined.</li>
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
                Coverage depends on the policy, endorsements, cause, timing, and facts of the loss. Arizona DIFI advises consumers to review the policy and consult the insurer about water damage. Separate the failed pipe, access, resulting damage, drying, mold, matching, personal property, and code work; obtain written plumbing findings and ask how each category is handled.
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
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Confirm the system and narrow the evidence area before comparing repair scopes.</p>
                  </div>
                </div>
              </Link>

              <Link href="/slab-leak-repair-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Slab Leak Repair</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Compare controlled direct access with the pipe, concrete, testing, and finish work included.</p>
                  </div>
                </div>
              </Link>

              <Link href="/water-line-rerouting-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Water-Line Rerouting</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Price an alternate route as a complete project, including walls, attic, insulation, testing, and finishes.</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        <ZigZagBlocks blocks={[
          {
            kicker: "Estimate Review",
            heading: "How to Compare Slab Leak Repair Estimates Line by Line",
            content: <>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Two estimates can show different totals because they include different work. Start by confirming whether each proposal covers diagnosis, pipe tracing, access, the plumbing repair or reroute, pressure testing after completion, debris removal, concrete closure, and finish restoration. An estimate that stops at the pipe repair should not be compared directly with one that includes flooring or drywall work.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Check allowances and exclusions closely. Tile matching, cabinet removal, hazardous-material testing, permit requirements, after-hours work, and concealed conditions may be outside the quoted price. Ask who coordinates each trade and which changes require written approval. This reduces the chance that a low initial figure becomes a series of unplanned additions.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: 0, lineHeight: "1.7" }}>
                Finally, compare warranty coverage and the exact pipe section included. A proposal for one spot repair is a different scope from a <a href="/partial-repiping-tucson/" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>partial repipe</a> serving several fixtures. A clear written scope is more useful than choosing from headline prices alone.
              </p>
            </>,
            imageSrc: "/images/blog/cost-estimate.png",
            imageAlt: "Homeowner comparing detailed Tucson slab leak repair estimates",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            kicker: "Total Project Cost",
            heading: "Why the Smallest Opening Is Not Always the Lowest-Cost Option",
            content: <>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A direct opening can be economical when the leak is beneath accessible flooring and the surrounding finishes are easy to replace. The same opening may be costly below custom cabinets, stone flooring, a shower assembly, or a room where matching material is unavailable. Detection should therefore inform both the pipe repair and the restoration plan.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Rerouting can avoid concrete demolition, but it introduces a different scope: finding a practical path, opening walls or ceilings, protecting pipe in hot or exposed spaces, reconnecting fixtures, and restoring access points. Review the full <a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>water-line rerouting</a> plan before assuming it costs less.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: 0, lineHeight: "1.7" }}>
                Repair history matters as well. One isolated failure in otherwise serviceable pipe may support a targeted repair, while repeated leaks on the same aging branch may justify comparing a broader replacement. The appropriate decision balances confirmed location, access, finishes, pipe condition, disruption, and the work included—not merely the size of the first access hole.
              </p>
            </>,
            imageSrc: "/images/blog/direct-slab-repair.png",
            imageAlt: "Direct slab opening evaluated against total repair and restoration cost",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />

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
                  Request a Scope-Based Repair Estimate
                </h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Start with documented testing, then compare access, pipe work, restoration, permits, verification, exclusions, and warranty in writing.
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
