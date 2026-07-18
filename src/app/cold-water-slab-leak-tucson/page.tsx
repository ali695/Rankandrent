import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZigZagBlocks from '@/components/ZigZagBlocks';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Droplets, Gauge, Volume2, ArrowDownToLine, Activity, Search, MapPin, SearchCheck, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';
import ZipCodeDirectory from '@/components/ZipCodeDirectory';
import FaqCategory from '@/components/FaqCategory';

export const metadata: Metadata = {
  title: 'Cold-Water Slab Leak Tucson | Detection & Repair',
  description: 'Investigate unexplained water use, pressure loss or damp flooring caused by a possible cold-water line leak beneath a Tucson home.',
  openGraph: {
    title: 'Cold-Water Slab Leak Tucson | Detection & Repair',
    description: 'Investigate unexplained water use, pressure loss or damp flooring caused by a possible cold-water line leak beneath a Tucson home.',
    url: 'https://tucsonslableakpros.com/cold-water-slab-leak-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cold-Water Slab Leak Tucson | Detection & Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold-Water Slab Leak Tucson | Detection & Repair",
    description: "Investigate unexplained water use, pressure loss or damp flooring caused by a possible cold-water line leak beneath a Tucson home.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can a cold-water slab leak occur without a warm floor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely. Because the escaping water is unheated, it will not radiate warmth through the concrete or tile. The floor will remain at room temperature, making a cold-water leak harder to notice initially."
      }
    },
    {
      "@type": "Question",
      "name": "Can a cold-water leak remain hidden without visible moisture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If the pipe is buried deeply or the soil beneath the foundation is extremely dry and porous, thousands of gallons of water can drain down into the earth without ever wicking up into the home's flooring or walls."
      }
    },
    {
      "@type": "Question",
      "name": "Will a cold-water slab leak reduce water pressure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the severity of the leak. A small pinhole leak may not cause a noticeable pressure drop. However, a major failure in a main cold-water line will divert significant water volume, leading to noticeably lower pressure at showers and faucets."
      }
    },
    {
      "@type": "Question",
      "name": "Can the water meter help confirm a cold-water leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Since cold water bypasses the water heater, the main municipal water meter is the primary indicator of a cold-water leak. If the low-flow indicator or sweep hand moves while all fixtures are off, water is escaping somewhere on the property."
      }
    },
    {
      "@type": "Question",
      "name": "How is the cold-water system isolated for testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plumbers isolate the system by turning off the inlet valve to the water heater and isolating irrigation systems if possible. Pressure is then tested on the remaining cold-water loop inside the home. If pressure drops, the leak is confirmed on the indoor cold line."
      }
    },
    {
      "@type": "Question",
      "name": "Could the problem be an irrigation or service-line leak instead?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. This is why isolation is critical. A spinning meter could just as easily indicate a broken sprinkler pipe in the yard or a failure in the main service line running from the street to the house, rather than a slab leak."
      }
    },
    {
      "@type": "Question",
      "name": "Is a cold-water slab leak an emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If water is flooding the interior or undermining the foundation, it is an emergency and the main water must be shut off immediately. If it is entirely hidden and slow, it is still urgent due to the potential for foundational shifting and high utility bills, but not a same-day emergency."
      }
    },
    {
      "@type": "Question",
      "name": "Will the floor need to be opened for repair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. While direct spot repair requires opening the slab, cold-water lines can often be rerouted through the attic or walls, entirely abandoning the leaking pipe under the concrete."
      }
    }
  ]
};

export default function ColdWaterSlabLeak() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Cold-Water Slab Leak Tucson | Detection & Repair", "description": "Investigate unexplained water use, pressure loss or damp flooring caused by a possible cold-water line leak beneath a Tucson home.", "url": "https://tucsonslableakpros.com/cold-water-slab-leak-tucson/"}) }} />
      <Breadcrumbs items={[
        { label: 'Slab Leak Guide', href: '/slab-leak-faq/' },
        { label: 'Cold-Water Slab Leaks' }
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main>
        {/* Section 1: Hero */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/hero_cold_water_leak.jpg" alt="Tucson hero cold water leak experts" title="Hero Cold Water Leak Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                  SLAB LEAK GUIDE
                </span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Cold-Water Slab Leak Detection and Repair in Tucson
                </h1>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Gauge size={24} color="var(--brand-red)" />
                    Cold-line <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Search size={24} color="var(--brand-red)" />
                    Hidden moisture locating
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <SearchCheck size={24} color="var(--brand-red)" />
                    Repair and rerouting options
                  </li>
                </ul>
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

        {/* Section 2: Symptom Cards */}
        <section style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem" }}>
              Common Symptoms
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
              {[
                { title: 'Water Meter Movement', icon: <Gauge size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> },
                { title: 'Damp Flooring or Baseboards', icon: <Droplets size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> },
                { title: 'Sudden Pressure Drop', icon: <ArrowDownToLine size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> },
                { title: 'Running Water Sounds', icon: <Volume2 size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> },
                { title: 'Wet Spots Near Foundation', icon: <MapPin size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> },
                { title: 'Unexplained Water Bill Spike', icon: <Activity size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} /> }
              ].map((symptom, i) => (
                <div key={i} style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>
                  {symptom.icon}
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--dark-charcoal)", margin: 0 }}>{symptom.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Main Explanation */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "2rem", textAlign: "center" }}>
              Why Cold-Water Slab Leaks Can Be Harder to Notice
            </h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 4rem", lineHeight: "1.7" }}>
              Unlike hot-water leaks that create a noticeable warm spot on tile or concrete, cold-water slab leaks remain at room temperature. If the soil beneath your home is dry and porous, the water may drain downward rather than wicking up into your flooring. This means a cold-water leak can remain completely hidden without any visible moisture or surface symptoms for weeks, leaving a shockingly high water bill as your only warning sign.
             Our experts are highly trained in <a href="/partial-repiping-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>partial repiping</a>.</p>
          </div>
        </section>

        {/* Section 4: Other Sources to Rule Out */}
        <section style={{ padding: "5rem 0", backgroundColor: "#fee2e2", borderTop: "4px solid var(--brand-red)" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "#991b1b", marginBottom: "2rem", textAlign: "center" }}>
              Other Sources to Rule Out
            </h2>
            <p style={{ textAlign: "center", color: "#7f1d1d", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 3rem", lineHeight: "1.7" }}>
              Because cold-water leaks often present only as a moving water meter, it is absolutely critical to rule out other common cold-water sources before assuming a pipe has failed under the slab.
             If you live in <a href="/service-areas/catalina-saddlebrooke/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>SaddleBrooke</a>, our specialists can be dispatched immediately.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", maxWidth: "900px", margin: "0 auto" }}>
              {["Toilet flappers", "Irrigation systems", "Pool auto-fills", "Appliance lines", "Outdoor faucets", "Meter-to-home service line"].map((item, i) => (
                <div key={i} style={{ backgroundColor: "var(--white)", padding: "1rem", borderRadius: "4px", textAlign: "center", fontWeight: "600", color: "var(--dark-charcoal)", border: "1px solid #fca5a5" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Detection Process */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              The Cold-Water Detection Process
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {[
                "Stop normal water use",
                "Check visible plumbing",
                "Observe the meter",
                "Isolate cold-water branches",
                "Test pressure",
                "Narrow down the suspected area"
              ].map((step, i) => (
                <div key={i} style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                    {i + 1}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--dark-charcoal)", margin: 0 }}>{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Comparison Table */}
        <section style={{ padding: "5rem 0", backgroundColor: "var(--white)" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem" }}>
              Cold-Water Slab Leak vs. Other Hidden Household Leaks
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)" }}>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Leak Source</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Symptoms</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Action Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Slab line</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Moving meter, low pressure inside home, possible floor dampness.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Isolation, pressure testing, acoustic locating.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Irrigation</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Meter moves when irrigation is off; soft/muddy yard spots.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Isolate irrigation vacuum breaker to confirm.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Toilet</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Intermittent meter movement; faint running sound in bathroom.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Dye test in toilet tank; replace flapper or fill valve.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Appliance</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Visible water near fridge, dishwasher, or washing machine.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Check supply lines and connections behind appliances.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Service line</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Meter moves but home pressure holds steady; soggy yard between street and house.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Shut off main house valve to verify line between meter and home.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 7: Repair Options */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Repair Options
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Direct-access repair</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", margin: 0 }}>Opening the floor and concrete directly over the leak to repair the section of pipe. Often used for cold-water lines if rerouting is too invasive.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Cold-line rerouting</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", margin: 0 }}>Running a new line through attics or walls to bypass the leaking under-slab pipe entirely.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "var(--white)" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Partial branch replacement</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", margin: 0 }}>Replacing an entire branch of the cold-water system if multiple leaks or severe corrosion is detected.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Homeowner Responsibility */}
        <section style={{ backgroundColor: "var(--white)", padding: "4rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem", border: "2px dashed #cbd5e1", borderRadius: "8px" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem", textAlign: "center" }}>Tucson Water vs. Homeowner Responsibility</h2>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7", marginBottom: "1rem" }}>
                Tucson Water maintains the public infrastructure up to and including the water meter. Property owners are generally responsible for the private service line that runs from the meter toward the property, as well as all plumbing within the home's footprint (including under the slab). 
              </p>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7", margin: 0 }}>
                If you see water leaking on the street side of the meter, call the city. If the meter is spinning and the leak is on the house side, you need a private plumber. The precise leak location must be confirmed before responsibility is assigned.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Related Services */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Related Services
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              
              <Link href="/water-line-pressure-testing-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Pressure Testing</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Verify if your cold-water loop is holding static pressure.</p>
                  </div>
                </div>
              </Link>

              <Link href="/slab-leak-detection-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Slab Leak Detection</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Locate the exact failure point without breaking concrete blindly.</p>
                  </div>
                </div>
              </Link>

              <Link href="/under-slab-pipe-repair-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Under-Slab Pipe Repair</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Direct spot repair for under-slab lines.</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Section 10: FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <FaqCategory 
              title="Frequently Asked Questions"
              iconName="MessageCircleQuestion"
              faqs={faqSchema.mainEntity.map((faq, idx) => ({
                id: `cold-water-faq-${idx}`,
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

        {/* Section 11: Final CTA */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/cold_water_slab_leak.jpg" alt="Tucson cold water slab leak services" title="Cold Water Slab Leak Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <div style={{ color: "var(--white)", fontSize: "1.5rem", fontWeight: "900", letterSpacing: "-1px", marginBottom: "1rem" }}>
                  TUCSON<span style={{ color: "var(--brand-red)" }}>LEAK</span>PROS
                </div>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Solve the Moving Meter Mystery
                </h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Don't let a hidden cold-water leak wash away your money. Provide your ZIP code and symptoms to connect with a leak detection specialist.
                </p>
              </div>

              <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "2rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "0.5rem", textAlign: "center" }}>
                  Request Service
                </h3>
                <p style={{ textAlign: "center", color: "#64748b", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  Submit your details for a prompt response.
                </p>
                <ZipCheckerForm />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
