import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZigZagBlocks from '@/components/ZigZagBlocks';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Thermometer, Volume2, ArrowDownToLine, Activity, Search, Gauge, Wrench, ShieldAlert, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';
import ZipCodeDirectory from '@/components/ZipCodeDirectory';
import FaqCategory from '@/components/FaqCategory';

export const metadata: Metadata = {
  title: 'Hot-Water Slab Leak Tucson | Warm Floor Detection',
  description: 'Warm flooring or frequent water-heater operation may point to a hidden hot-water line leak. Explore detection and repair options in Tucson.',
  openGraph: {
    title: 'Hot-Water Slab Leak Tucson | Warm Floor Detection',
    description: 'Warm flooring or frequent water-heater operation may point to a hidden hot-water line leak. Explore detection and repair options in Tucson.',
    url: 'https://tucsonslableakpros.com/hot-water-slab-leak-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hot-Water Slab Leak Tucson | Warm Floor Detection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot-Water Slab Leak Tucson | Warm Floor Detection",
    description: "Warm flooring or frequent water-heater operation may point to a hidden hot-water line leak. Explore detection and repair options in Tucson.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does a warm floor always mean there is a hot-water slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. A warm floor could be caused by direct sunlight heating the tile, uninsulated HVAC ductwork running beneath the floor, or a nearby hot-water appliance. However, if the spot remains consistently hot day and night and you notice your water heater running more frequently, it is very likely a hot-water slab leak."
      }
    },
    {
      "@type": "Question",
      "name": "Can a hot-water slab leak make the water heater run continuously?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Because hot water is constantly escaping from the broken pipe under the slab, the water heater tank is continuously refilling with cold water that it must heat. This causes the burner or heating elements to run almost non-stop."
      }
    },
    {
      "@type": "Question",
      "name": "Can a hidden hot-water leak increase energy costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. A hot-water slab leak hits you with a double penalty: you pay for the wasted water escaping the pipe, and you pay for the gas or electricity required to constantly heat that escaping water."
      }
    },
    {
      "@type": "Question",
      "name": "How is a hot-water line tested beneath a slab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A plumber isolates the hot-water system by shutting the valve at the water heater. They then attach a pressure gauge to the hot-water side. If the gauge shows a drop in pressure while the cold-water system remains stable, a hot-water leak is confirmed."
      }
    },
    {
      "@type": "Question",
      "name": "Can thermal imaging confirm the exact leak location?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thermal imaging cameras are excellent at finding the general area of a hot-water slab leak by displaying heat blooming through the concrete. However, water can travel along the pipe before surfacing. Acoustic detection is often used alongside thermal imaging to pinpoint the exact failure point."
      }
    },
    {
      "@type": "Question",
      "name": "Should I turn off the water heater if I suspect a hot-water leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, turning off the valve on the cold-water inlet pipe leading into the water heater will stop the flow of water to the hot-water leak. You should also turn down the gas or turn off the breaker to the water heater to prevent it from overheating while empty."
      }
    },
    {
      "@type": "Question",
      "name": "Can I continue using cold water?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you successfully shut off the inlet valve at the water heater, you have isolated the hot-water side. In most homes, this allows you to safely turn the main water back on and continue using cold water for toilets and cold sinks until repairs are made."
      }
    },
    {
      "@type": "Question",
      "name": "Is rerouting better than opening the slab for a hot-water leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rerouting is often preferred because it abandons the old, failing pipe under the slab entirely. Running a new PEX line through the attic or walls avoids the disruption of jackhammering your floors and prevents future leaks on that same under-slab line."
      }
    }
  ]
};

export default function HotWaterSlabLeak() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Hot-Water Slab Leak Tucson | Warm Floor Detection", "description": "Warm flooring or frequent water-heater operation may point to a hidden hot-water line leak. Explore detection and repair options in Tucson.", "url": "https://tucsonslableakpros.com/hot-water-slab-leak-tucson/"}) }} />
      <Breadcrumbs items={[
        { label: 'Slab Leak Guide', href: '/slab-leak-faq/' },
        { label: 'Hot-Water Slab Leaks' }
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main>
        {/* Section 1: Hero */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/hero_hot_water_leak.jpg" alt="Tucson hero hot water leak experts" title="Hero Hot Water Leak Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                  SLAB LEAK GUIDE
                </span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Hot-Water Slab Leak Detection and Repair in Tucson
                </h1>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Thermometer size={24} color="var(--brand-red)" />
                    Warm-floor assessment
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Gauge size={24} color="var(--brand-red)" />
                    Hot-line <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Wrench size={24} color="var(--brand-red)" />
                    Repair and rerouting options
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "2rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "0.5rem", textAlign: "center" }}>
                  Tell Us Where the Floor Feels Warm
                </h3>
                <ZipCheckerForm />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Symptom Icon Strip */}
        <section style={{ backgroundColor: "var(--dark-charcoal)", padding: "1.5rem 0", color: "var(--white)", borderBottom: "4px solid var(--brand-red)" }}>
          <div className="container">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1rem", opacity: 0.9 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Thermometer size={18} color="var(--brand-red)" /> Warm tile
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Activity size={18} color="var(--brand-red)" /> Frequent heater operation
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <ArrowDownToLine size={18} color="var(--brand-red)" /> Reduced hot-water supply
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Gauge size={18} color="var(--brand-red)" /> Moving water meter
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Volume2 size={18} color="var(--brand-red)" /> Running-water sound
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", fontWeight: 600 }}>
                <Activity size={18} color="var(--brand-red)" /> Higher energy use
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Main Explanation */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "2rem", textAlign: "center" }}>
              Why a Hot-Water Leak Can Warm the Floor
            </h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 4rem", lineHeight: "1.7" }}>
              When a hot-water pipe develops a pinhole leak or crack beneath the concrete slab, the escaping hot water releases thermal energy into the surrounding soil and concrete. Because heat naturally rises, the concrete absorbs this energy and transfers it to your flooring. This is why a warm or hot spot on your tile, carpet, or hardwood is often the first tactile sign of a failing hot-water line. However, not every warm spot is plumbing related.
             We proudly provide these services to homeowners in <a href="/service-areas/rita-ranch/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Rita Ranch</a>.</p>

            <div className="split-grid" style={{ alignItems: "flex-start" }}>
              <div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Hot-Water Warning Signs</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Warm tile or concrete</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A localized hot spot that does not change temperature throughout the day or night.</span>
                  </li>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Water heater cycling frequently</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>Your water heater turns on repeatedly to heat the incoming cold water that is replacing the lost hot water.</span>
                  </li>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Reduced hot-water availability</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>Showers run cold quickly because the tank cannot keep up with the continuous loss under the slab.</span>
                  </li>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Higher water and energy use</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A double penalty on your utility bills from wasted water and wasted gas or electricity.</span>
                  </li>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Warm moisture</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>Damp carpets or warped baseboards accompanied by physical warmth.</span>
                  </li>
                  <li>
                    <strong style={{ display: "block", color: "var(--brand-red)", fontSize: "1.1rem" }}>Sound near the floor</strong>
                    <span style={{ color: "#4a4a4a", lineHeight: "1.6" }}>A faint hissing or running water sound radiating through the warm area.</span>
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: "#f8fafc", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>What Else Can Cause Warm Flooring?</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6", marginBottom: "1rem" }}>Before breaking concrete, we must rule out non-plumbing sources of heat. Common mimics include:</p>
                <ul style={{ paddingLeft: "1.5rem", color: "#4a4a4a", lineHeight: "1.7", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><strong>Direct sunlight:</strong> Windows heating up a specific patch of floor during the day.</li>
                  <li><strong>HVAC ductwork:</strong> Uninsulated or poorly routed air ducts running near the foundation.</li>
                  <li><strong>Radiant floor heating:</strong> Older or malfunctioning electrical heating mats.</li>
                  <li><strong>Nearby hot-water appliance:</strong> Heat radiating from a dishwasher or under-sink boiler.</li>
                  <li><strong>Outdoor temperature effects:</strong> Heat transferring through the foundation edge during Tucson's hot summers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Safety Box */}
        <section style={{ padding: "0 0 5rem" }}>
          <div className="container">
            <div style={{ backgroundColor: "#fee2e2", borderLeft: "6px solid var(--brand-red)", padding: "2rem", borderRadius: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <ShieldAlert size={28} color="var(--brand-red)" />
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#991b1b", margin: 0 }}>Immediate Action: Isolate the Heater</h3>
              </div>
              <p style={{ color: "#7f1d1d", fontSize: "1.1rem", lineHeight: "1.6", margin: 0 }}>
                If you suspect a hot-water slab leak, you can stop the water loss immediately by turning off the cold-water inlet valve located on the pipe entering the top of your water heater. You should also turn down the gas thermostat or shut off the electrical breaker to the water heater to prevent the empty tank from overheating. Do not attempt further electrical or gas work beyond basic manufacturer shutoff guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Detection Process */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              The Hot-Water Detection Process
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {[
                { title: 'Isolate Hot-Water System', icon: <Search size={24} color="var(--brand-red)" /> },
                { title: 'Thermal Imaging Scan', icon: <Activity size={24} color="var(--brand-red)" /> },
                { title: 'Acoustic Line Tracing', icon: <Wrench size={24} color="var(--brand-red)" /> },
                { title: 'Static Pressure Testing', icon: <Gauge size={24} color="var(--brand-red)" /> },
                { title: 'Pinpoint Leak Location', icon: <Search size={24} color="var(--brand-red)" /> },
                { title: 'Repair Recommendation', icon: <Wrench size={24} color="var(--brand-red)" /> }
              ].map((step, i) => (
                <div key={i} style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ backgroundColor: "#fee2e2", padding: "0.75rem", borderRadius: "50%" }}>
                    {step.icon}
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--dark-charcoal)", margin: 0 }}>{step.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Repair Options & Comparison */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Repair Options
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", marginBottom: "4rem" }}>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Direct spot repair</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>Opening the concrete slab directly above the leak to patch the copper line. Best when the leak is easily accessible and the rest of the pipe is in good condition.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Hot-water line rerouting</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>Abandoning the failing line under the floor and running a new, continuous PEX line through the attic or walls. Avoids jackhammering floors.</p>
              </div>
              <div style={{ padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Partial hot-water repiping</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.6" }}>Replacing multiple failing hot-water branches entirely. Best if the home has a history of slab leaks and the copper is heavily corroded.</p>
              </div>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)" }}>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem", width: "20%" }}>Factor</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem", width: "40%" }}>Direct Repair</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem", width: "40%" }}>Hot-Water Line Rerouting</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Access</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Requires jackhammering concrete and removing flooring.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Utilizes attics and wall cavities; leaves floors intact.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Disruption</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>High noise and dust; requires tile or carpet matching later.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Moderate; may require some drywall patching.</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Suitable Situations</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Leaks near the foundation edge or under unfinished floors.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Leaks located in the middle of living rooms, kitchens, or under luxury flooring.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa", fontWeight: 700 }}>Future Risk</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>The rest of the old copper line remains under the slab and could leak again.</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>The new PEX line is highly durable and above ground, eliminating slab risk for that line.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 7: Tucson Context */}
        <section style={{ backgroundColor: "#f8fafc", padding: "4rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Tucson Hard Water</h2>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7" }}>
                Tucson's municipal water supply contains high mineral content (hard water). While these minerals can slowly degrade plumbing fixtures and water heaters, they are rarely the sole cause of a hot-water slab leak. Instead, hot water pipes expand and contract with temperature changes against the concrete. This thermal friction, combined with local water chemistry and original installation quality, leads to pinhole leaks.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Related Services */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Related Services
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              
              <Link href="/slab-leak-detection-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Slab Leak Detection</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Comprehensive testing to locate hidden pipe failures.</p>
                  </div>
                </div>
              </Link>

              <Link href="/water-line-rerouting-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Water-Line Rerouting</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Bypass the slab entirely with safer, above-ground lines.</p>
                  </div>
                </div>
              </Link>

              <Link href="/electronic-leak-detection-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Electronic Leak Detection</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Acoustic tracking for precise, non-destructive locating.</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Section 9: FAQs */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <FaqCategory 
              title="Frequently Asked Questions"
              iconName="MessageCircleQuestion"
              faqs={faqSchema.mainEntity.map((faq, idx) => ({
                id: `hot-water-faq-${idx}`,
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
            <img src="/images/hot_water_slab_leak.jpg" alt="Tucson hot water slab leak services" title="Hot Water Slab Leak Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <div style={{ color: "var(--white)", fontSize: "1.5rem", fontWeight: "900", letterSpacing: "-1px", marginBottom: "1rem" }}>
                  TUCSON<span style={{ color: "var(--brand-red)" }}>LEAK</span>PROS
                </div>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Schedule Hot-Water Leak Detection
                </h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Provide your ZIP code and let us know where the floor is warm so we can accurately diagnose the issue.
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
