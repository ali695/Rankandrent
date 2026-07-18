import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import { Search, SearchCheck, Thermometer, Gauge, Clock, ShieldAlert, Calculator, Hammer, MessageCircleQuestion, Phone, Mail, Droplets, Wrench, MapPin, Home } from 'lucide-react';
import Link from 'next/link';
import ZipCodeDirectory from '@/components/ZipCodeDirectory';
import FaqCategory from '@/components/FaqCategory';
import { faqCategories } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Slab Leak FAQ | 70 Tucson Questions Answered',
  description: 'Find clear answers to 70 common questions about slab leak symptoms, detection, repair, costs, emergencies, insurance and Tucson service areas.',
  openGraph: {
    title: 'Slab Leak FAQ | 70 Tucson Questions Answered',
    description: 'Find clear answers to 70 common questions about slab leak symptoms, detection, repair, costs, emergencies, insurance and Tucson service areas.',
    url: 'https://tucsonslableakpros.com/slab-leak-faq/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Slab Leak FAQ | 70 Tucson Questions Answered",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak FAQ | 70 Tucson Questions Answered",
    description: "Find clear answers to 70 common questions about slab leak symptoms, detection, repair, costs, emergencies, insurance and Tucson service areas.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

export default function SlabLeakFaq() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak FAQ | 70 Tucson Questions Answered", "description": "Find clear answers to 70 common questions about slab leak symptoms, detection, repair, costs, emergencies, insurance and Tucson service areas.", "url": "https://tucsonslableakpros.com/slab-leak-faq/"}) }} />
      <Breadcrumbs items={[
        { label: 'Slab Leak Guide', href: '/slab-leak-faq/' },
        { label: 'FAQs' }
      ]} />
      
      <main>
        {/* Section 1: Hero with Search UI */}
        <section style={{ position: "relative", padding: "6rem 0", color: "var(--white)", overflow: "hidden", minHeight: "500px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/services_hub_hero.jpg" alt="Tucson slab leak FAQ background" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "800px" }}>
            <h1 style={{ color: "var(--white)", fontSize: "3.5rem", fontWeight: "800", marginBottom: "1rem", lineHeight: "1.1" }}>Tucson Slab Leak Questions and Answers</h1>
            <p style={{ fontSize: "1.2rem", color: "#cbd5e1", marginBottom: "3rem" }}>
              Find quick answers to common questions regarding slab leak signs, detection, repair costs, and emergency steps.
            </p>
            
            <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto", display: "flex" }}>
              <input 
                type="text" 
                placeholder="Search FAQs (e.g. 'cost', 'insurance', 'warm floor')..." 
                style={{ width: "100%", padding: "1.25rem 1.5rem", fontSize: "1.1rem", borderRadius: "8px 0 0 8px", border: "none", outline: "none", color: "var(--dark-charcoal)" }}
                aria-label="Search FAQs"
              />
              <button style={{ backgroundColor: "var(--brand-red)", border: "none", padding: "0 1.5rem", borderRadius: "0 8px 8px 0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Submit search">
                <Search size={24} color="var(--white)" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Category Navigation */}
        <section style={{ backgroundColor: "var(--brand-red)", padding: "1rem 0", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
          <div className="container" style={{ overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "0.5rem" }}>
            <div style={{ display: "flex", gap: "0.5rem", padding: "0 1rem" }}>
              {faqCategories.map(cat => (
                <a 
                  key={cat.id} 
                  href={`#${cat.id}`}
                  style={{ 
                    backgroundColor: "rgba(255,255,255,0.15)", 
                    color: "var(--white)", 
                    padding: "0.75rem 1.25rem", 
                    borderRadius: "999px", 
                    textDecoration: "none", 
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    transition: "background-color 0.2s"
                  }}
                  className="hover-lift"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Popular Questions Cards */}
        <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              <Link href="/signs-of-a-slab-leak/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="premium-card" style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
                  <Thermometer size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Signs & Symptoms</h3>
                  <p style={{ color: "#64748b", margin: 0 }}>Learn about warm floors, moving meters, and other hidden symptoms.</p>
                </div>
              </Link>
              <Link href="/slab-leak-detection-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="premium-card" style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
                  <SearchCheck size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Detection & Testing</h3>
                  <p style={{ color: "#64748b", margin: 0 }}>Understand pressure testing, isolation, and acoustic locating.</p>
                </div>
              </Link>
              <Link href="/slab-leak-repair-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="premium-card" style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
                  <Wrench size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Repair Options</h3>
                  <p style={{ color: "#64748b", margin: 0 }}>Review spot repair, direct access, and rerouting methods.</p>
                </div>
              </Link>
              <Link href="/slab-leak-repair-cost-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="premium-card" style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
                  <Calculator size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Cost & Insurance</h3>
                  <p style={{ color: "#64748b", margin: 0 }}>Review the factors that determine detection and repair pricing.</p>
                </div>
              </Link>
              <Link href="/emergency-slab-leak-service-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="premium-card" style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
                  <ShieldAlert size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Emergencies</h3>
                  <p style={{ color: "#64748b", margin: 0 }}>What to do when water is actively spreading.</p>
                </div>
              </Link>
              <Link href="/service-areas/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="premium-card" style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column" }}>
                  <MapPin size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.5rem" }}>Service Areas</h3>
                  <p style={{ color: "#64748b", margin: 0 }}>View ZIP codes and communities we cover.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Quick-Answer Strip */}
        <section style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)", padding: "2.5rem 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", textAlign: "center" }}>
              <div>
                <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Diagnosis First</strong>
                <span style={{ fontSize: "0.95rem", color: "#cbd5e1" }}>Detection precedes repair to limit floor damage.</span>
              </div>
              <div>
                <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Meter Movement</strong>
                <span style={{ fontSize: "0.95rem", color: "#cbd5e1" }}>Often the clearest sign of hidden water loss.</span>
              </div>
              <div>
                <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Avoid Demolition</strong>
                <span style={{ fontSize: "0.95rem", color: "#cbd5e1" }}>Rerouting may avoid concrete slab access entirely.</span>
              </div>
              <div>
                <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Active Spreading</strong>
                <span style={{ fontSize: "0.95rem", color: "#cbd5e1" }}>Needs immediate action to protect structure.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: The 70 FAQs in 10 Categories */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            {faqCategories.map((category, index) => {
              // Only open the first question of the first category by default
              const defaultOpenId = index === 0 ? category.faqs[0].id : null;

              return (
                <div id={category.id} key={category.id} style={{ scrollMarginTop: "5rem" }}>
                  <FaqCategory 
                    title={category.title}
                    iconName={category.iconName}
                    faqs={category.faqs}
                    defaultOpenId={defaultOpenId}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: Question Not Answered CTA */}
        <section style={{ backgroundColor: "#1e293b", padding: "4rem 0", color: "var(--white)", textAlign: "center" }}>
          <div className="container">
            <h2 style={{ color: "var(--white)", fontSize: "2rem", fontWeight: "800", marginBottom: "1rem" }}>Questions Not Answered?</h2>
            <p style={{ fontSize: "1.1rem", color: "#cbd5e1", marginBottom: "2rem", maxWidth: "600px", margin: "0 auto 2rem" }}>
              Our team is ready to help clarify any concerns about your specific plumbing situation. Describe your symptom and provide your ZIP code.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
              <a href="tel:5205550199" style={{ display: "flex", alignItems: "center", gap: "0.5rem", backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "1rem 2rem", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>
                <Phone size={20} /> Call (520) 555-0199
              </a>
              <a href="/contact/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", backgroundColor: "transparent", color: "var(--white)", border: "2px solid var(--white)", padding: "1rem 2rem", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>
                <Mail size={20} /> Use Contact Form
              </a>
            </div>
          </div>
        </section>

        {/* Section 7: Tucson Service Area Chips */}
        <section style={{ backgroundColor: "#f8fafc", padding: "4rem 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "2rem" }}>Service Areas</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", maxWidth: "800px", margin: "0 auto" }}>
              {["Central Tucson", "North Tucson", "East Tucson", "South Tucson", "West Tucson", "Oro Valley", "Catalina Foothills", "Rita Ranch"].map((area, i) => (
                <Link key={i} href="/service-areas/" style={{ backgroundColor: "var(--white)", border: "1px solid #cbd5e1", color: "#475569", padding: "0.5rem 1rem", borderRadius: "999px", textDecoration: "none", fontSize: "0.95rem", transition: "all 0.2s" }} className="hover-lift">
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Related Services & Guides */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Related Guides & Services
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

        {/* Section 9: */}
        <ZipCodeDirectory />

        {/* Section 10: Final CTA and lead form */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/slab_leak_detection.jpg" alt="Tucson slab leak plumbing assessment" title="Plumbing Assessment Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <div style={{ color: "var(--white)", fontSize: "1.5rem", fontWeight: "900", letterSpacing: "-1px", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <img src="/images/logo_icon.svg" alt="" style={{ height: "32px", width: "auto", filter: "brightness(0) invert(1)" }} />
                  TUCSON<span style={{ color: "var(--brand-red)" }}>LEAK</span>PROS
                </div>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Need a Plumbing Assessment?
                </h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  If you have a moving meter, running water sound, or <a href="/hot-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>warm floor</a>, let us isolate your plumbing system to see if water is escaping beneath your slab.
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
