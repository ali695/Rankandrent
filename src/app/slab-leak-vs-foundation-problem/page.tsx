import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Home, Droplets, AlertTriangle, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import Link from 'next/link';
import ZipCodeDirectory from '@/components/ZipCodeDirectory';
import FaqCategory from '@/components/FaqCategory';
import ZigZagBlocks from '@/components/ZigZagBlocks';
import { pageSocialMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: "/slab-leak-vs-foundation-problem/" },
  title: 'Slab Leak vs. Foundation Problem | Know the Difference',
  description: 'Compare plumbing slab leak symptoms with structural foundation problems and learn whether to contact a plumber or foundation specialist.',
  ...pageSocialMetadata('Slab Leak vs. Foundation Problem | Know the Difference', 'Compare plumbing slab leak symptoms with structural foundation problems and learn whether to contact a plumber or foundation specialist.', '/slab-leak-vs-foundation-problem/'),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between a slab leak and a foundation problem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A slab leak is a plumbing failure where a pressurized water pipe leaks beneath or within the concrete slab. A foundation problem is a structural issue where the concrete or supporting soil has moved, settled, or cracked, affecting the building's stability."
      }
    },
    {
      "@type": "Question",
      "name": "Should I call a plumber or a foundation contractor first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unexplained meter flow, water-heater cycling, a warm pattern, or supply-water sound supports a plumbing assessment. Progressive cracks, displacement, or sticking doors without water-loss evidence supports structural assessment. When both occur, control active water and coordinate both disciplines."
      }
    },
    {
      "@type": "Question",
      "name": "Can a slab leak cause cracks in flooring or walls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Water loss and cracking can occur together, but a crack does not prove that plumbing caused structural movement. Soil, drainage, construction, shrinkage, and other conditions may be involved. Confirm the pipe loss separately and have movement evaluated by a qualified structural professional."
      }
    },
    {
      "@type": "Question",
      "name": "Can foundation movement damage an under-slab water line?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Movement can stress concealed piping, joints, or penetrations, but the actual relationship is site-specific. A plumber can document whether a pressurized line loses water; a structural professional can evaluate movement. Neither conclusion should be inferred from cracks alone."
      }
    },
    {
      "@type": "Question",
      "name": "Does water near the foundation always mean there is a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Water pooling near the exterior foundation can be caused by poor yard drainage, broken irrigation lines, misdirected gutters, or a high water table. Pressure testing the plumbing system is required to determine if the water is escaping from the home's pressurized pipes."
      }
    },
    {
      "@type": "Question",
      "name": "Can pressure testing distinguish plumbing loss from structural damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pressure testing can show whether a defined plumbing section held during the test. A stable result makes an active loss in that section less likely under those conditions, but it does not diagnose the foundation, rule out intermittent plumbing, or identify every possible moisture source."
      }
    },
    {
      "@type": "Question",
      "name": "Is slab leak repair the same as concrete slab repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. 'Slab leak repair' is plumbing work to fix a broken water line. 'Concrete slab repair' (or slab repair) usually refers to foundation work, such as mudjacking, piering, or epoxy injection to stabilize moving concrete."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if both plumbing and structural problems are present?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Control active water when it is causing continued damage, then share the plumbing findings with the structural professional. The sequence for permanent work depends on safety, site conditions, and the recommendations of qualified providers; one trade should not make the other trade's diagnosis."
      }
    }
  ]
};

export default function SlabLeakVsFoundation() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak vs. Foundation Problem | Know the Difference", "description": "Compare plumbing slab leak symptoms with structural foundation problems and learn whether to contact a plumber or foundation specialist.", "url": "https://tucsonslableakpros.com/slab-leak-vs-foundation-problem/"}) }} />
      <Breadcrumbs items={[
        { label: 'Slab Leak Guide', href: '/slab-leak-faq/' },
        { label: 'Slab Leak vs. Foundation Problem' }
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main>
        {/* Section 1: Hero Split Visual */}
        <section style={{ display: "flex", flexWrap: "wrap", minHeight: "600px" }}>
          <div style={{ flex: "1 1 50%", position: "relative", minHeight: "300px" }}>
            <img src="/images/under_slab_pipe_repair.webp" alt="Under slab plumbing pipe leaking" title="Slab Leak Pipe" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem", background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Droplets size={32} color="var(--brand-red)" />
                <h2 style={{ color: "var(--white)", margin: 0, fontSize: "2rem", fontWeight: "800" }}>Plumbing Problem</h2>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 50%", position: "relative", minHeight: "300px" }}>
            <img src="/images/hero_home.webp" alt="Home exterior indicating structural foundation cracks" title="Foundation Problem" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem", background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Home size={32} color="var(--brand-red)" />
                <h2 style={{ color: "var(--white)", margin: 0, fontSize: "2rem", fontWeight: "800" }}>Structural Problem</h2>
              </div>
            </div>
          </div>
        </section>
        
        {/* Hero Content Overlay (Mobile safe) */}
        <section style={{ backgroundColor: "var(--dark-charcoal)", padding: "4rem 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
              SLAB LEAK GUIDE
            </span>
            <h1 style={{ color: "var(--white)", marginBottom: "2rem", fontSize: "3rem", lineHeight: "1.1", fontWeight: "800" }}>
              Slab Leak or Foundation Problem?<br/>How to Tell the Difference
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#e4e4e7", fontSize: "1.1rem" }}>
                <CheckCircle2 size={20} color="var(--brand-red)" /> Plumbing symptoms explained
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#e4e4e7", fontSize: "1.1rem" }}>
                <CheckCircle2 size={20} color="var(--brand-red)" /> Structural signs compared
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#e4e4e7", fontSize: "1.1rem" }}>
                <CheckCircle2 size={20} color="var(--brand-red)" /> Correct professional identified
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Immediate Definition Cards */}
        <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div className="split-grid" style={{ gap: "2rem" }}>
              <div style={{ backgroundColor: "var(--white)", padding: "3rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <Droplets size={40} color="var(--brand-red)" />
                  <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", margin: 0 }}>Slab leak</h2>
                </div>
                <p style={{ color: "#4a4a4a", fontSize: "1.1rem", lineHeight: "1.7", margin: 0 }}>
                  A pressurized plumbing line leaks beneath or within the concrete slab. This is a water loss issue requiring a licensed plumber.
                </p>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "3rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <Home size={40} color="var(--brand-red)" />
                  <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", margin: 0 }}>Foundation problem</h2>
                </div>
                <p style={{ color: "#4a4a4a", fontSize: "1.1rem", lineHeight: "1.7", margin: 0 }}>
                  Concrete or supporting soil has moved, settled or cracked, affecting structural performance. This requires a structural engineer or foundation contractor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Comparison Table */}
        <section style={{ padding: "5rem 0", backgroundColor: "var(--white)" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>
              Sign Comparison
            </h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 3rem", lineHeight: "1.7" }}>
              Some observations suggest which discipline should assess the property first, but symptoms can overlap. Use documented plumbing tests and a separate structural evaluation instead of treating one crack, damp spot, sound, or meter reading as a complete diagnosis.
            </p>
            <div className="responsive-table-wrap" role="region" aria-label="Slab leak and foundation problem signs table" tabIndex={0}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)" }}>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Sign</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Possible slab leak</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Possible foundation issue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Moving water meter</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Confirms metered flow after normal uses are controlled</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Not normally caused by structure</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Warm floor</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Possible hot-line leak</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Not typical</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Damp floor</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Possible plumbing leak</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Moisture may have another source</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Running-water sound</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Possible pipe leak</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Not typical</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Stair-step wall cracks</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Not a direct diagnosis</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>May require structural review</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Sticking doors</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>May have several causes</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Can occur with movement</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Uneven floor</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Water damage or structure</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>May require structural assessment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: Who to Contact First */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Who to Contact First
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
              
              <div style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ flex: 1 }}>
                  <strong style={{ color: "var(--dark-charcoal)", fontSize: "1.1rem", display: "block", marginBottom: "0.25rem" }}>Meter movement, water sound or warm floor</strong>
                </div>
                <ArrowRight size={24} color="#94a3b8" />
                <div style={{ flex: 1, textAlign: "right" }}>
                  <strong style={{ color: "var(--brand-red)", fontSize: "1.1rem" }}>Plumbing assessment</strong>
                </div>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ flex: 1 }}>
                  <strong style={{ color: "var(--dark-charcoal)", fontSize: "1.1rem", display: "block", marginBottom: "0.25rem" }}>Structural cracking without water-use changes</strong>
                </div>
                <ArrowRight size={24} color="#94a3b8" />
                <div style={{ flex: 1, textAlign: "right" }}>
                  <strong style={{ color: "var(--brand-red)", fontSize: "1.1rem" }}>Foundation assessment</strong>
                </div>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ flex: 1 }}>
                  <strong style={{ color: "var(--dark-charcoal)", fontSize: "1.1rem", display: "block", marginBottom: "0.25rem" }}>Both plumbing and structural symptoms</strong>
                </div>
                <ArrowRight size={24} color="#94a3b8" />
                <div style={{ flex: 1, textAlign: "right" }}>
                  <strong style={{ color: "var(--brand-red)", fontSize: "1.1rem" }}>Both may be needed</strong>
                </div>
              </div>

              <div style={{ backgroundColor: "#fee2e2", padding: "1.5rem", borderRadius: "8px", border: "1px solid #fca5a5", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ flex: 1 }}>
                  <strong style={{ color: "#991b1b", fontSize: "1.1rem", display: "block", marginBottom: "0.25rem" }}>Active water damage spreading</strong>
                </div>
                <ArrowRight size={24} color="#f87171" />
                <div style={{ flex: 1, textAlign: "right" }}>
                  <strong style={{ color: "#991b1b", fontSize: "1.1rem" }}>Control water first (Plumber)</strong>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: Plumbing vs Structural Assessment */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <Search size={32} color="var(--brand-red)" />
                <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", margin: 0 }}>Plumbing Detection</h3>
              </div>
              <p style={{ color: "#4a4a4a", fontSize: "1.1rem", lineHeight: "1.7" }}>
                A plumber checks fixtures and automatic systems, observes the meter, performs <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>, and isolates service, hot, cold, or accessible branches. Tracing, acoustic, thermal, and moisture evidence may then narrow a suspected concealed route.
              </p>
            </div>
            
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <Home size={32} color="var(--brand-red)" />
                <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", margin: 0 }}>Structural Assessment</h3>
              </div>
              <p style={{ color: "#4a4a4a", fontSize: "1.1rem", lineHeight: "1.7" }}>
                A qualified structural professional evaluates crack patterns, displacement, floor levels, drainage, soil conditions, and building performance. A plumbing visit can document whether defined water lines held during testing; it cannot certify structural condition or rule on the cause of movement.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Terminology Warning Box */}
        <section style={{ padding: "0 0 5rem" }}>
          <div className="container">
            <div style={{ backgroundColor: "#f8fafc", border: "2px solid #e2e8f0", padding: "2rem", borderRadius: "8px", textAlign: "center" }}>
              <AlertTriangle size={32} color="#f59e0b" style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Terminology Warning</h3>
              <p style={{ color: "#4a4a4a", fontSize: "1.1rem", margin: 0 }}>
                <strong>&ldquo;<a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Slab leak repair</a>&rdquo;</strong> is plumbing work to fix a broken water pipe beneath the floor.
                <br/><br/>
                <strong>&ldquo;Slab repair&rdquo;</strong> or &ldquo;foundation repair&rdquo; generally refers to concrete or structural work. Ask every provider to state whether the scope addresses plumbing, finishes, drainage, concrete, or structural performance so similarly named services are not confused.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Related Services */}
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
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Test defined water systems and document whether active loss is supported.</p>
                  </div>
                </div>
              </Link>

              <Link href="/under-slab-pipe-repair-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Under-Slab Pipe Repair</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Plan direct pipe access only after the failed system and evidence area are established.</p>
                  </div>
                </div>
              </Link>

              <Link href="/signs-of-a-slab-leak/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Signs of a Slab Leak</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Compare meter, temperature, sound, moisture, heater, and pressure evidence.</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        <ZigZagBlocks blocks={[
          {
            kicker: "Separate the Evidence",
            heading: "How Plumbing Evidence and Structural Evidence Are Collected",
            content: <>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A plumbing assessment asks whether a defined water system is losing water under controlled conditions. Useful evidence includes meter behavior, hot- and cold-side isolation, static pressure results, traced pipe routes, moisture observations, and repeatable acoustic or thermal patterns. These findings can support a repair location, but they do not measure foundation movement or determine structural capacity.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A structural assessment examines a different set of information: crack geometry, vertical or horizontal displacement, floor elevations, wall and opening behavior, drainage, soil conditions, and changes over time. A crack near a damp area may deserve both assessments, but proximity alone does not establish that a leaking pipe caused the crack.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: 0, lineHeight: "1.7" }}>
                Keep the reports separate and share them between qualified professionals when the symptoms overlap. A documented <a href="/slab-leak-detection-tucson/" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak detection</a> result helps define the plumbing work, while the appropriate structural professional determines whether movement or repair outside the plumbing scope requires attention.
              </p>
            </>,
            imageSrc: "/images/blog/foundation-vs-leak.webp",
            imageAlt: "Comparison of plumbing leak evidence and foundation movement evidence",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            kicker: "Choose the First Call",
            heading: "Which Professional Should Assess the Property First?",
            content: <>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Start with a plumber when water is actively spreading, the meter records unexplained flow, the water heater cycles without demand, a supply-water sound persists, or pressure testing indicates loss. Control an active leak promptly, especially when water is approaching electrical equipment or damaging finishes.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Start with a qualified structural professional when the primary concern is progressive cracking, measurable displacement, sloping floors, or sticking doors and windows without evidence of water loss. A plumber can report plumbing test results but should not certify foundation performance unless separately qualified to provide that opinion.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: 0, lineHeight: "1.7" }}>
                When both sets of symptoms are present, address active water first and document conditions before finishes are removed. Then coordinate the plumbing findings with the structural assessment. This sequence protects the property while avoiding the assumption that <a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair</a> will automatically resolve a separate concrete, soil, or foundation concern.
              </p>
            </>,
            imageSrc: "/images/blog/detection-report.webp",
            imageAlt: "Documented plumbing findings prepared for coordinated property assessment",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />

        {/* Section 8: FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <FaqCategory 
              title="Frequently Asked Questions"
              iconName="MessageCircleQuestion"
              faqs={faqSchema.mainEntity.map((faq, idx) => ({
                id: `foundation-faq-${idx}`,
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

        {/* Section 9: Final CTA */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/slab_leak_detection.webp" alt="Tucson slab leak plumbing assessment" title="Plumbing Assessment Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <div style={{ color: "var(--white)", fontSize: "1.5rem", fontWeight: "900", letterSpacing: "-1px", marginBottom: "1rem" }}>
                  TUCSON<span style={{ color: "var(--brand-red)" }}>LEAK</span>PROS
                </div>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Need a Plumbing Assessment?
                </h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  If you have unexplained meter flow, supply-water sounds, a warm floor, or damp finishes, request documented plumbing isolation. Structural movement still requires a separate qualified assessment.
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
