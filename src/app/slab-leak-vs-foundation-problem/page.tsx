import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Home, Droplets, AlertTriangle, ArrowRight, CheckCircle2, XCircle, Search, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';
import ZipCodeDirectory from '@/components/ZipCodeDirectory';
import FaqCategory from '@/components/FaqCategory';

export const metadata: Metadata = {
  title: 'Slab Leak vs. Foundation Problem | Know the Difference',
  description: 'Compare plumbing slab leak symptoms with structural foundation problems and learn whether to contact a plumber or foundation specialist.',
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
        "text": "If you notice a moving water meter, hear running water, or feel a warm spot on the floor, call a slab leak plumber first. If you only see structural cracking with no changes in water usage or pressure, a foundation contractor is the appropriate first call."
      }
    },
    {
      "@type": "Question",
      "name": "Can a slab leak cause cracks in flooring or walls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Over time, the water escaping from a slab leak can wash away the supporting soil beneath the foundation. This loss of support can cause the concrete slab to settle and crack, which transfers upward as cracks in tile flooring or drywall."
      }
    },
    {
      "@type": "Question",
      "name": "Can foundation movement damage an under-slab water line?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. If the soil beneath a home expands, contracts, or settles significantly, the concrete foundation shifts. This shifting exerts massive physical stress on the rigid copper pipes embedded in or beneath the slab, often shearing them and creating a leak."
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
        "text": "Yes. Pressure testing isolates the plumbing system. If the plumbing lines hold pressure perfectly, the water or cracking you are seeing is not caused by a pressurized plumbing leak, pointing instead to drainage or structural issues."
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
        "text": "In severe cases, a slab leak can cause foundation damage, or foundation movement can cause a slab leak. The plumbing leak must be isolated and repaired first to stop the active water loss before any permanent structural stabilization can be performed."
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
            <img src="/images/under_slab_pipe_repair.jpg" alt="Under slab plumbing pipe leaking" title="Slab Leak Pipe" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem", background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Droplets size={32} color="var(--brand-red)" />
                <h2 style={{ color: "var(--white)", margin: 0, fontSize: "2rem", fontWeight: "800" }}>Plumbing Problem</h2>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 50%", position: "relative", minHeight: "300px" }}>
            <img src="/images/hero_home.jpg" alt="Home exterior indicating structural foundation cracks" title="Foundation Problem" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
              While some symptoms overlap, most issues lean heavily toward either plumbing or structure. Avoid presenting any single sign as a definitive diagnosis without testing.
            </p>
            <div style={{ overflowX: "auto" }}>
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
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Strong indicator</td>
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
                A plumber will check the meter, perform <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>, isolate the hot and cold lines, and use electronic locating to determine if water is escaping from the pressurized system beneath the slab.
              </p>
            </div>
            
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <Home size={32} color="var(--brand-red)" />
                <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", margin: 0 }}>Structural Assessment</h3>
              </div>
              <p style={{ color: "#4a4a4a", fontSize: "1.1rem", lineHeight: "1.7" }}>
                A foundation contractor or structural engineer evaluates soil movement, concrete cracks, and load-bearing concerns. We do not attempt structural diagnosis on our plumbing visits, but we can rule out plumbing leaks.
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
                <strong>"<a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Slab leak repair</a>"</strong> is plumbing work to fix a broken water pipe beneath the floor. 
                <br/><br/>
                <strong>"Slab repair"</strong> or "concrete repair" usually refers to concrete or foundation work to fix the structure itself. Ensure you are calling the right professional for your specific need!
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
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Rule out a plumbing failure definitively.</p>
                  </div>
                </div>
              </Link>

              <Link href="/under-slab-pipe-repair-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Under-Slab Pipe Repair</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Fixing the plumbing line beneath the concrete.</p>
                  </div>
                </div>
              </Link>

              <Link href="/signs-of-a-slab-leak/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Signs of a Slab Leak</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Review all the common plumbing symptoms.</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

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
            <img src="/images/slab_leak_detection.jpg" alt="Tucson slab leak plumbing assessment" title="Plumbing Assessment Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
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
                  If you have a moving meter, running water sound, or warm floor, let us isolate your plumbing system to see if water is escaping beneath your slab.
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
