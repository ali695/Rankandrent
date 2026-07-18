import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqCategory from '@/components/FaqCategory';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';

export const metadata: Metadata = {
  title: 'Under-Slab Pipe Repair Tucson, AZ',
  description: 'Repair a confirmed leaking water line beneath concrete using controlled access, pipe-section replacement and post-repair pressure testing.',
  openGraph: {
    title: 'Under-Slab Pipe Repair Tucson, AZ',
    description: 'Repair a confirmed leaking water line beneath concrete using controlled access, pipe-section replacement and post-repair pressure testing.',
    url: 'https://tucsonslableakpros.com/under-slab-pipe-repair-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    type: 'website',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Under-Slab Pipe Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Direct under-slab pipe repair via controlled concrete access for hidden plumbing leaks in Tucson."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does under-slab pipe repair always require breaking concrete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct access normally requires a controlled concrete opening. An alternative such as rerouting may avoid the slab but will usually require openings through walls, ceilings or another route."
      }
    },
    {
      "@type": "Question",
      "name": "How large will the opening be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The size depends on the confidence of the detection, pipe depth, working space and flooring. A responsible provider explains the expected access area but should not guarantee an exact dimension before the pipe is exposed."
      }
    },
    {
      "@type": "Question",
      "name": "Who repairs tile after slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily the plumber. Plumbing, concrete patching, and flooring restoration after slab leak are separate scopes. Ask for a written list of what is included."
      }
    },
    {
      "@type": "Question",
      "name": "How is the repaired line tested?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The repaired line should undergo a pressure test after pipe repair before the concrete is patched to ensure complete stability."
      }
    },
    {
      "@type": "Question",
      "name": "Is under-slab pipe repair foundation work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The work addresses plumbing beneath concrete. Foundation repair concerns structural movement, settlement or concrete support and belongs to a different trade."
      }
    }
  ]
};

export default function UnderSlabPipeRepair() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Under-Slab Pipe Repair Tucson, AZ", "description": "Repair a confirmed leaking water line beneath concrete using controlled access, pipe-section replacement and post-repair pressure testing.", "url": "https://tucsonslableakpros.com/under-slab-pipe-repair-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Slab Leak Service Process Tucson" src="/images/slab_leak_service_process.jpg" alt="Tucson slab leak service process services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>CONTROLLED CONCRETE ACCESS</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Under-Slab Pipe Repair Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Under-slab pipe repair addresses a confirmed water-line failure beneath a concrete floor by safely exposing the pipe. 
                 For more information, learn about our <a href="/slab-leak-repair-cost-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak repair cost</a> process.</p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Our <strong>direct-access <a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak repair</a></strong> involves removing a <strong>controlled concrete opening for pipe repair</strong>, replacing the failed section, and testing the plumbing before the opening is closed.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Controlled floor and concrete access
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Damaged pipe-section replacement
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Pressure test after pipe repair
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Content Section 1: Direct Access */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Direct Access to a Confirmed Pipe Failure</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Opening a slab should be a planned repair step, not a search method. If you need <strong>under-slab plumbing repair Tucson</strong> services, the exact spot needs to be narrowed down first. Once confirmed, we can perform a <strong>pipe repair beneath concrete Tucson</strong>.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                The work area is protected before a <strong>small floor opening for pipe repair</strong> is created. Concrete depth, reinforcement, flooring, and nearby utilities must be considered. Once the pipe is visible, our <strong>plumber to repair pipe beneath foundation</strong> will cut out the damaged copper or PEX and braze/fit a new section.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", fontStyle: "italic", lineHeight: "1.7" }}>
                We handle <strong>concrete floor pipe repair</strong> safely. Just remember that <strong>flooring restoration after slab leak</strong> (like replacing the aesthetic tile) might be a separate job.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Slab Leak Repair Tucson" src="/images/slab_leak_repair.jpg" alt="Tucson slab leak repair services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* When Considered & Repair Work Split */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>When is Direct Under-Slab Repair Best?</h2>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem", color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> The failure appears isolated to one spot (<strong>replace damaged pipe section under slab</strong>).</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> <strong>Pipe repair below tile flooring Tucson</strong> where you have extra replacement tiles on hand.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> The affected line has been accurately located, meaning we only need a <strong>small floor opening for pipe repair</strong>.</li>
                <li style={{ position: "relative", paddingLeft: "1.5rem" }}><span style={{ position: "absolute", left: 0, color: "var(--brand-red)", fontWeight: "bold" }}>•</span> The expected opening is acceptable compared with routing lines through walls or ceilings (<strong>under-slab repair or <a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water-line rerouting</a></strong> decision).</li>
              </ul>
            </div>
            
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>What the Repair Work May Involve</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                We <strong>open concrete for slab leak repair</strong> carefully. Flooring is removed first, followed by a limited concrete opening. The pipe is exposed safely so adjacent lines are not damaged. 
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                We perform the <strong>under-slab copper pipe repair Tucson</strong>, or PEX repair, and then run a <strong>pressure test after pipe repair</strong> before burying it. Finally, a <strong>concrete patch after slab leak</strong> is applied so the plumbing remains protected and supported.
              </p>
            </div>
          </div>
        </section>

                        <ZigZagBlocks blocks={[
          {
            heading: "Precision Concrete Access",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The most visible part of an <a href="/under-slab-pipe-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>under-slab pipe repair</a> is the concrete opening. We use precision concrete saws to cut clean edges rather than recklessly jackhammering, which reduces vibration damage to surrounding tile and minimizes the messy cleanup involved. The opening is sized just large enough to safely access the pipe — typically 18 to 24 inches wide.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>For homes with tile floors, we measure carefully to align our cuts with your existing grout lines whenever possible. This foresight makes the eventual floor restoration blend much more naturally with the surrounding surface, saving your flooring contractor significant time and saving you money.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Before making any cuts, we set up heavy plastic containment barriers. Breaking concrete generates fine silica dust, and our containment protocols ensure that this dust doesn't circulate through your HVAC system or coat your furniture.</p></>,
            imageSrc: "/images/under_slab_pipe_repair.jpg",
            imageAlt: "Precision concrete access",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Replacing the Failed Pipe Section",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Once the concrete is removed and the soil is excavated, we expose the leaking pipe. We cut out the damaged section entirely—we do not rely on temporary clamps, epoxy patches, or rubber sleeves. Those are band-aids, not plumbing repairs. Proper <a href="/slab-leak-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair</a> demands permanent solutions.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>We splice in a brand-new section of high-grade Type L copper or flexible PEX tubing, securing the connections with code-approved methods designed for direct burial. If we are brazing copper underground, we take extreme care to flush the line and ensure the joints are flawless before they are buried again.</p></>,
            imageSrc: "/images/slab_leak_repair.jpg",
            imageAlt: "Replacing failed pipe",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Rigorous Pressure Testing Before Backfill",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The most critical step in an under-slab repair happens before the concrete is patched. Once the new pipe is installed, we turn the water main back on and repressurize your home's entire system. We monitor the exposed repair joint under full municipal water pressure.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>We attach a sensitive <a href="/water-line-pressure-testing-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>pressure gauge</a> to verify that the system is holding perfectly steady. If the needle drops even a fraction of a PSI, it means there is another leak nearby or the new joint isn't secure. We never backfill dirt or pour concrete until the pressure test passes flawlessly.</p></>,
            imageSrc: "/images/pressure_testing.jpg",
            imageAlt: "Pressure testing before backfill",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Backfilling and Concrete Restoration",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>After the plumbing repair passes inspection, we begin the restoration phase. We carefully backfill the hole using clean sand or fine gravel immediately around the pipe. This protects the new copper or PEX from sharp rocks in the native Tucson soil that could cause friction damage during thermal expansion.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Finally, we pour high-strength concrete to match the exact thickness of your existing slab. We trowel the surface smooth and level so your flooring contractor has a perfect canvas to reinstall your tile, wood, or carpeting.</p></>,
            imageSrc: "/images/slab_leak_service_process.jpg",
            imageAlt: "Concrete restoration",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="Under-Slab Repair FAQ"
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
            <img title="Section Damp Floor Tucson" src="/images/section_damp_floor.jpg" alt="Residential damp floor in Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>READY TO REPAIR?</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Discuss Under-Slab Pipe Repair in Tucson</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Provide the ZIP code, leak-location findings and the flooring type above the suspected pipe.
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Request a written explanation of access, pipe repair, <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a> and surface restoration before work starts.
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
