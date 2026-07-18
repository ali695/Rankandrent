import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Thermometer, Droplets, Gauge, Volume2, ArrowDownToLine, Activity, Search, AlertTriangle, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';
import ZipCodeDirectory from '@/components/ZipCodeDirectory';
import FaqCategory from '@/components/FaqCategory';

export const metadata: Metadata = {
  title: 'Signs of a Slab Leak | Tucson Homeowner Guide',
  description: 'Learn the warning signs of a slab leak, including warm floors, meter movement, damp flooring, running-water sounds and pressure loss.',
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is usually the first sign of a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The first sign of a slab leak is often an unexplained increase in your water bill or a water meter that continues to move even when all fixtures are turned off inside and outside the home. Because the leak is buried under concrete, visual signs may take weeks to appear."
      }
    },
    {
      "@type": "Question",
      "name": "Does a warm floor always mean there is a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, a warm floor does not always mean there is a slab leak. A warm spot could be caused by direct sunlight, a nearby hot water appliance, or radiant heating. However, an isolated, unusually warm spot on tile or concrete that never cools down is a strong indicator of a hot-water line leak beneath the slab."
      }
    },
    {
      "@type": "Question",
      "name": "Can a slab leak occur without visible water?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, a slab leak can absolutely occur without any visible water inside the home. The water escaping from the broken pipe may drain directly into the soil beneath the foundation, remaining entirely hidden while still causing your water meter to move and your water bill to rise."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my water meter move when every fixture is off?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your water meter is moving when every fixture is turned off, water is actively escaping from the pressurized plumbing system. This could be an irrigation leak, a running toilet, or an under-slab leak. Professional isolation testing is required to pinpoint the exact location."
      }
    },
    {
      "@type": "Question",
      "name": "Can a slab leak cause low water pressure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, a severe slab leak can cause low water pressure throughout the home. Because a significant amount of water is escaping beneath the foundation, there is less volume and pressure available to reach your faucets, showers, and appliances."
      }
    },
    {
      "@type": "Question",
      "name": "What does a slab leak sound like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A slab leak can sound like water running, hissing, or spraying beneath the floor, even when no faucets are turned on. In a quiet house, you might hear this faint rushing sound near the baseboards or directly through tile flooring."
      }
    },
    {
      "@type": "Question",
      "name": "Is a suspected slab leak an emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A suspected slab leak becomes an emergency if water is actively flooding the home, pooling near electrical outlets, or undermining the foundation. If there is no visible damage, it is a priority issue that should be addressed quickly to prevent structural damage and high water bills."
      }
    },
    {
      "@type": "Question",
      "name": "Who should I call if I am unsure whether the problem is plumbing or foundation damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you have a moving water meter, warm flooring, or hear running water, you should call a slab leak plumber first to conduct a pressure test. If you only see structural cracking with no water symptoms, a foundation contractor may be the appropriate first call."
      }
    }
  ]
};

export default function SignsOfSlabLeak() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Signs of a Slab Leak | Tucson Homeowner Guide", "description": "Learn the warning signs of a slab leak, including warm floors, meter movement, damp flooring, running-water sounds and pressure loss.", "url": "https://tucsonslableakpros.com/signs-of-a-slab-leak/"}) }} />
      <Breadcrumbs items={[
        { label: 'Slab Leak Guide', href: '/slab-leak-faq/' },
        { label: 'Signs of a Slab Leak' }
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main>
        {/* Section 1: Hero */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/slab_leak_detection.jpg" alt="Tucson slab leak detection experts checking for signs of a slab leak" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
                  SLAB LEAK GUIDE
                </span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Signs of a Slab Leak in Your Tucson Home
                </h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Slab leaks can remain hidden beneath concrete and may first appear through unexpected water usage, subtle sounds, temperature changes, or damp flooring. Knowing what to look for is the first step.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Thermometer size={24} color="var(--brand-red)" />
                    Warm or damp flooring
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Gauge size={24} color="var(--brand-red)" />
                    Moving water meter
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <Volume2 size={24} color="var(--brand-red)" />
                    Hidden running-water sounds
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "2rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "0.5rem", textAlign: "center" }}>
                  Describe the Signs You Have Noticed
                </h3>
                <p style={{ textAlign: "center", color: "#64748b", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  Let us know what you are experiencing and we will connect you with a leak detection specialist.
                </p>
                <ZipCheckerForm />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Quick Symptom Checker */}
        <section style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem" }}>
              Quick Symptom Checker
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              
              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                <Thermometer size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.75rem" }}>Warm floor</h3>
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>An unusually hot or warm area on your tile or concrete can indicate a hot-water line leaking beneath the slab. This often causes the water heater to run constantly.</p>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                <Droplets size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.75rem" }}>Damp flooring</h3>
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>Moisture wicking up through the foundation can cause damp carpets, warped wood, or wet baseboards. This happens even when there is no visible plumbing leak nearby.</p>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                <Gauge size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.75rem" }}>Moving water meter</h3>
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>If your water meter dials continue to spin when every fixture inside and outside the home is turned off, water is actively escaping the pressurized system.</p>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                <Volume2 size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.75rem" }}>Running-water sound</h3>
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>You may hear the faint sound of running or hissing water beneath the floorboards. In a quiet house, this sound travels through the concrete from the broken pipe.</p>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                <ArrowDownToLine size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.75rem" }}>Pressure loss</h3>
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>A severe slab leak diverts water away from your fixtures, resulting in lower water pressure in showers and sinks. This pressure drop usually affects the entire home.</p>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                <Activity size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.75rem" }}>Increased water usage</h3>
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>An unexpected spike in your monthly water bill is often the very first sign of a hidden leak. Thousands of gallons can be lost into the soil without surfacing.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: The Most Common Warning Signs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "3rem", color: "var(--dark-charcoal)", textAlign: "center" }}>
              Common Signs That May Point to a Slab Leak
            </h2>

            {/* Alternating 1 */}
            <div className="split-grid" style={{ alignItems: "center", marginBottom: "4rem" }}>
              <div style={{ paddingRight: "2rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Warm or unusually hot flooring</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.7", marginBottom: "1rem" }}>A hot-water line leak beneath the slab will radiate heat upward through the concrete, creating a localized warm spot on your tile or carpet. This is a very strong indicator of a <a href="/hot-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>hot-water slab leak</a>.</p>
                
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem", marginTop: "2rem" }}>Damp carpet, tile or baseboards</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.7" }}>When water escapes under the slab, hydrostatic pressure can force the moisture upward. You may notice unexplained dampness on carpets, water pooling on tile floors, or baseboards swelling and separating from the wall.</p>
              </div>
              <div>
                <img src="/images/section_damp_floor.jpg" alt="Residential section damp floor in Tucson" title="Section Damp Floor Tucson" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
              </div>
            </div>

            {/* Alternating 2 */}
            <div className="split-grid" style={{ alignItems: "center", marginBottom: "4rem" }}>
              <div style={{ order: 2, paddingLeft: "2rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Water sounds when fixtures are off</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.7", marginBottom: "1rem" }}>If your home is completely quiet and you can hear the faint sound of running water, you may be hearing water escaping from a pressurized pipe beneath the foundation.</p>
                
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem", marginTop: "2rem" }}>Unexplained household water use</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.7" }}>A sudden, dramatic increase in your monthly water bill is a classic symptom. If your usage habits haven't changed, a hidden leak is likely responsible for the excess water loss.</p>
              </div>
              <div style={{ order: 1 }}>
                <img src="/images/cold_water_slab_leak.jpg" alt="Tucson cold water slab leak services" title="Cold Water Slab Leak Tucson" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
              </div>
            </div>
            
            {/* Alternating 3 */}
            <div className="split-grid" style={{ alignItems: "center" }}>
              <div style={{ paddingRight: "2rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Lower water pressure</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.7", marginBottom: "1rem" }}>Because water is escaping the system before it reaches your fixtures, you may experience a noticeable drop in water pressure when you turn on your shower or sink.</p>
                
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem", marginTop: "2rem" }}>Water near the foundation edge</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.7" }}>Sometimes the path of least resistance for escaping water is outward rather than upward. Unexplained puddles or muddy areas around the exterior edge of your home's foundation can indicate an <a href="/under-slab-pipe-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>under-slab leak</a>.</p>
              </div>
              <div>
                <img src="/images/section_pressure_gauge.jpg" alt="Residential section pressure gauge in Tucson" title="Section Pressure Gauge Tucson" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: How to Check the Water Meter */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0", borderTop: "1px solid #e2e8f0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <Gauge size={40} color="var(--brand-red)" />
                <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", margin: 0 }}>A Simple Water-Meter Check for Hidden Water Use</h2>
              </div>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7", marginBottom: "1rem" }}>
                You can perform a simple test to confirm if water is escaping your system. First, ensure every water fixture inside and outside your home is completely turned off. This includes washing machines, dishwashers, and irrigation systems.
              </p>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7", marginBottom: "1rem" }}>
                Next, locate your water meter. Tucson Water notes that some meters have a low-flow indicator (a small red triangle or star). If this indicator is spinning, or if the main sweep hand is moving while all water is off, you have a leak. 
              </p>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7", fontWeight: "600" }}>
                Tucson Water recommends comparing the meter reading after a 30-minute period with no water use. Keep in mind: A moving meter confirms a leak on the property, but it does not prove the leak is beneath the slab.
              </p>
            </div>
            <div>
              <img src="/images/section_water_meter.jpg" alt="Residential section water meter in Tucson" title="Section Water Meter Tucson" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* Section 5: Hot-Water vs. Cold-Water Symptoms */}
        <section style={{ padding: "5rem 0", backgroundColor: "var(--white)" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem" }}>
              Hot-Water vs. Cold-Water Symptoms
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
                <thead>
                  <tr style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)" }}>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Possible hot-water leak</th>
                    <th style={{ padding: "1.5rem", textAlign: "left", fontSize: "1.1rem" }}>Possible cold-water leak</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa" }}>Warm floor area</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Damp area without warmth</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa" }}>Water heater runs more often</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Unexplained water use</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa" }}>Reduced hot-water supply</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>General pressure loss</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa" }}>Higher energy usage</td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>Meter movement</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "1.5rem", backgroundColor: "#fafafa" }}>
                      Warm moisture<br/>
                      <Link href="/hot-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", fontWeight: 600, textDecoration: "none", display: "inline-block", marginTop: "0.5rem" }}>Learn about hot-water leaks →</Link>
                    </td>
                    <td style={{ padding: "1.5rem", backgroundColor: "#ffffff" }}>
                      Cool or neutral moisture<br/>
                      <Link href="/cold-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", fontWeight: 600, textDecoration: "none", display: "inline-block", marginTop: "0.5rem" }}>Learn about cold-water leaks →</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 6: Other Problems That Can Look Similar */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "2rem", textAlign: "center" }}>
              Other Leaks That Can Mimic a Slab Leak
            </h2>
            <p style={{ textAlign: "center", color: "#4a4a4a", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
              Not every spinning meter or damp spot is a slab leak. Professional isolation testing helps rule out other common issues before making a diagnosis. These include:
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
              {[
                "Toilet flapper leak",
                "Irrigation leak",
                "Appliance connection",
                "Outdoor faucet",
                "Pool system",
                "Service line between meter and home",
                "Roof or HVAC condensation"
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "var(--white)", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <Search size={20} color="var(--brand-red)" />
                  <span style={{ fontWeight: 600, color: "var(--dark-charcoal)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: When the Situation Is Urgent */}
        <section style={{ padding: "4rem 0" }}>
          <div className="container">
            <div style={{ backgroundColor: "#fee2e2", border: "2px solid var(--brand-red)", borderRadius: "12px", padding: "3rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <AlertTriangle size={48} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#991b1b", marginBottom: "1rem" }}>When the Situation Is Urgent</h2>
              <p style={{ color: "#7f1d1d", fontSize: "1.1rem", maxWidth: "700px", marginBottom: "2rem", lineHeight: "1.6" }}>
                A suspected slab leak requires immediate professional intervention if you experience any of the following: 
                <strong> water actively spreading across floors, water pooling near electrical equipment, sudden and severe pressure loss, rapid meter activity, or hot flooring becoming increasingly warm.</strong>
              </p>
              <a href="tel:5205550199" style={{ backgroundColor: "var(--brand-red)", color: "var(--white)", padding: "1rem 2rem", borderRadius: "4px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "1px", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                <Volume2 size={20} /> CALL ABOUT AN ACTIVE LEAK
              </a>
            </div>
          </div>
        </section>

        {/* Section 8: How Detection Confirms the Problem */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "2rem", textAlign: "center" }}>
              How Detection Confirms the Problem
            </h2>
            <div style={{ maxWidth: "800px", margin: "0 auto", color: "#4a4a4a", fontSize: "1.1rem", lineHeight: "1.7" }}>
              <p style={{ marginBottom: "1rem" }}>If you notice these signs, the next step is professional detection. A technician will first check all visible sources to rule out easy fixes. Once ruled out, water loss is confirmed at the meter.</p>
              <p style={{ marginBottom: "1rem" }}>The hot and cold water systems are then isolated from each other. <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Pressure testing</a> is performed on the isolated lines to see which system drops in pressure, proving exactly which pipe has failed.</p>
              <p>Finally, electronic or acoustic locating equipment is used to listen through the concrete and pinpoint the exact location of the failure. Only then are repair options discussed.</p>
            </div>
          </div>
        </section>

        {/* Section 9: Tucson Plumbing Context */}
        <section style={{ backgroundColor: "#f8fafc", padding: "4rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Tucson Plumbing Context</h2>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7" }}>
                Tucson Water describes the local water supply as hard water and notes that mineral buildup can affect appliances and restrict pipes over time. While hard water affects plumbing, it does not directly cause every slab leak. Pipe material, water pressure, installation quality, home age, and prior repairs all play significant roles in the lifespan of an under-slab pipe.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Related Services */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "3rem", textAlign: "center" }}>
              Related Services
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              
              <Link href="/slab-leak-detection-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img src="/images/slab_leak_detection.jpg" alt="Tucson slab leak detection services" title="Slab Leak Detection Tucson" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Slab Leak Detection</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Pinpoint hidden leaks beneath your foundation without unnecessary destruction.</p>
                  </div>
                </div>
              </Link>

              <Link href="/electronic-leak-detection-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img src="/images/electronic_leak_detection.jpg" alt="Tucson electronic leak detection services" title="Electronic Leak Detection Tucson" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Electronic Leak Detection</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Advanced acoustic technology to locate pressurized pipe failures.</p>
                  </div>
                </div>
              </Link>

              <Link href="/emergency-slab-leak-service-tucson/" style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", transition: "transform 0.2s" }} className="hover-lift">
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img src="/images/emergency_slab_leak_service.jpg" alt="Tucson emergency slab leak service" title="Emergency Slab Leak Service Tucson" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "1.5rem", backgroundColor: "var(--white)" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--brand-red)", marginBottom: "0.5rem" }}>Emergency Slab Leak Service</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Immediate response for active water spreading or severe pressure loss.</p>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Section 11: FAQs */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <FaqCategory 
              title="Frequently Asked Questions"
              iconName="MessageCircleQuestion"
              faqs={faqSchema.mainEntity.map((faq, idx) => ({
                id: `signs-faq-${idx}`,
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

        {/* Section 12: Final CTA */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img src="/images/hero_slab_leak_repair.jpg" alt="Tucson hero slab leak repair experts" title="Hero Slab Leak Repair Tucson" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <div style={{ color: "var(--white)", fontSize: "1.5rem", fontWeight: "900", letterSpacing: "-1px", marginBottom: "1rem" }}>
                  TUCSON<span style={{ color: "var(--brand-red)" }}>LEAK</span>PROS
                </div>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>
                  Noticed One or More Slab Leak Signs?
                </h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Ask for a professional evaluation. Provide your ZIP code, describe your symptoms, and let us know if water is actively spreading.
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
</>
  );
}
