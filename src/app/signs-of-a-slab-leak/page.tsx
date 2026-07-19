import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Thermometer, Droplets, Gauge, Volume2, ArrowDownToLine, Activity, Search, AlertTriangle, MessageCircleQuestion } from 'lucide-react';
import Link from 'next/link';
import ZipCodeDirectory from '@/components/ZipCodeDirectory';
import FaqCategory from '@/components/FaqCategory';
import ZigZagBlocks from '@/components/ZigZagBlocks';

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
        "text": "There is no single first sign. Many homeowners notice unexplained meter flow, higher water use, water-heater cycling, a warm floor, damp finishes, or a running-water sound. One symptom should trigger a controlled check, not an assumption that the failed pipe is beneath the slab."
      }
    },
    {
      "@type": "Question",
      "name": "Does a warm floor always mean there is a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Sunlight, air ducts, appliances, recirculation, and radiant systems can also warm flooring. A repeatable pattern becomes more meaningful when it aligns with unexplained meter flow, frequent water-heater operation, and pressure loss on the isolated hot-water system."
      }
    },
    {
      "@type": "Question",
      "name": "Can a slab leak occur without visible water?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Water can remain below the slab, follow a pipe trench, or appear at a distant baseboard or foundation edge. A controlled meter observation and separate hot-, cold-, service-line, pool, and irrigation checks are more useful than waiting for visible water."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my water meter move when every fixture is off?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meter movement means water passed through the meter during the observation. The cause could be a toilet, appliance, irrigation valve, pool autofill, service line, or concealed building pipe. Isolation and pressure testing are needed to identify the affected system before locating begins."
      }
    },
    {
      "@type": "Question",
      "name": "Can a slab leak cause low water pressure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A large active supply-line loss can reduce available flow or pressure, but low pressure also has other causes, including a utility condition, pressure regulator, closed valve, clogged fixture, or demand elsewhere in the home. Compare the meter and test the plumbing before assigning the cause."
      }
    },
    {
      "@type": "Question",
      "name": "What does a slab leak sound like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A pressurized leak may create a steady hiss or running-water sound, but sound can travel through pipe, concrete, and framing. Toilets, appliances, irrigation, drains, HVAC equipment, and neighboring plumbing can sound similar, so compare the noise with meter flow and system isolation."
      }
    },
    {
      "@type": "Question",
      "name": "Is a suspected slab leak an emergency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treat active spreading water, rapid meter flow, major pressure loss, or water near electrical equipment as urgent. If the evidence is subtle and no damage is spreading, document the symptoms and arrange prompt testing rather than opening the floor based on one clue."
      }
    },
    {
      "@type": "Question",
      "name": "Who should I call if I am unsure whether the problem is plumbing or foundation damage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meter flow, warm flooring, water-heater cycling, or supply-water sounds support a plumbing assessment. Progressive cracks, displacement, or sticking doors without evidence of water loss support a structural assessment. When both are present, control active water and coordinate qualified plumbing and structural professionals."
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
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>A repeatable warm path may support a hot-water line investigation, especially when the heater cycles without use. Sunlight, ducts, and appliances must also be excluded.</p>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                <Droplets size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.75rem" }}>Damp flooring</h3>
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>Damp carpet, swollen baseboards, loose flooring, or a musty area can justify moisture mapping. Supply, drain, wall, roof, HVAC, and exterior sources remain possible.</p>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                <Gauge size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.75rem" }}>Moving water meter</h3>
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>A changing meter during a controlled no-use period confirms water flow. It does not identify whether the source is a fixture, outdoor system, service line, or under-slab branch.</p>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                <Volume2 size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.75rem" }}>Running-water sound</h3>
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>A steady hiss or running-water sound with fixtures idle deserves investigation. Record its timing and compare it with the meter before assuming where the sound originates.</p>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                <ArrowDownToLine size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.75rem" }}>Pressure loss</h3>
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>A significant supply-line loss can affect fixture performance, but regulators, valves, utility work, and clogged fixtures can also reduce pressure. Test rather than diagnose from pressure alone.</p>
              </div>

              <div style={{ backgroundColor: "var(--white)", padding: "2rem", borderRadius: "8px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
                <Activity size={32} color="var(--brand-red)" style={{ marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--dark-charcoal)", marginBottom: "0.75rem" }}>Increased water usage</h3>
                <p style={{ color: "#475569", lineHeight: "1.6", margin: 0 }}>Compare actual consumption, billing days, and seasonal use. Irrigation, pools, toilets, appliances, guests, rate changes, and hidden plumbing can all affect the bill.</p>
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
                <p style={{ color: "#4a4a4a", lineHeight: "1.7", marginBottom: "1rem" }}>Escaping hot water can transfer heat through soil, concrete, mortar, and flooring. A narrow or repeatable warm pattern can support a <a href="/hot-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>hot-water slab leak</a> investigation when meter, heater, and pressure-test evidence agree. It is not a diagnosis by itself.</p>
                
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem", marginTop: "2rem" }}>Damp carpet, tile or baseboards</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.7" }}>Water may follow a pipe trench, crack, slab edge, or finish layer before becoming visible. Unexplained damp carpet, loose flooring, or swollen baseboards should be mapped, while wall, drain, roof, irrigation, and HVAC sources are checked separately.</p>
              </div>
              <div>
                <img src="/images/section_damp_floor.jpg" alt="Residential section damp floor in Tucson" title="Section Damp Floor Tucson" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
              </div>
            </div>

            {/* Alternating 2 */}
            <div className="split-grid" style={{ alignItems: "center", marginBottom: "4rem" }}>
              <div style={{ order: 2, paddingLeft: "2rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Water sounds when fixtures are off</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.7", marginBottom: "1rem" }}>A steady hiss or running-water sound may come from a pressurized pipe, but sound travels along piping and concrete. Note whether it continues with fixtures and automatic systems off and whether the meter records flow at the same time.</p>
                
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem", marginTop: "2rem" }}>Unexplained household water use</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.7" }}>A bill increase is useful only after comparing consumption units, billing-cycle length, irrigation, pool filling, guests, and appliance use. If those do not explain the change, a controlled meter check and staged isolation can narrow hidden water loss.</p>
              </div>
              <div style={{ order: 1 }}>
                <img src="/images/cold_water_slab_leak.jpg" alt="Tucson cold water slab leak services" title="Cold Water Slab Leak Tucson" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
              </div>
            </div>
            
            {/* Alternating 3 */}
            <div className="split-grid" style={{ alignItems: "center" }}>
              <div style={{ paddingRight: "2rem" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem" }}>Lower water pressure</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.7", marginBottom: "1rem" }}>A large active leak can reduce available flow, yet a pressure regulator, partly closed valve, fixture restriction, or utility condition can create the same complaint. Compare several fixtures and record whether the meter also shows unexplained flow.</p>
                
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1rem", marginTop: "2rem" }}>Water near the foundation edge</h3>
                <p style={{ color: "#4a4a4a", lineHeight: "1.7" }}>Water near a slab edge may come from an <a href="/under-slab-pipe-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>under-slab line</a>, the meter-to-house service line, irrigation, pool equipment, drainage, or runoff. Meter and valve isolation should identify the system before any excavation.</p>
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
                Choose a quiet period and place every known water user in a controlled condition. Check faucets, toilets, washing machines, dishwashers, ice makers, water treatment, irrigation, pool autofill, and evaporative cooling. Photograph the starting meter display instead of relying on memory.
              </p>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7", marginBottom: "1rem" }}>
                Observe the meter long enough to detect small continuous flow and photograph the ending display. Meter types vary, so follow Tucson Water guidance for reading the installed model and do not open, alter, or attach equipment to the utility meter in a way that could damage it.
              </p>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7", fontWeight: "600" }}>
                A changing reading confirms metered flow during the test. It does not prove a slab leak. Repeat an uncertain result, then isolate obvious fixtures, outdoor systems, the private service line, and interior hot or cold plumbing as the property layout permits.
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
              Not every meter change, sound, or damp spot comes from under the slab. Use timing, valve isolation, moisture mapping, and pressure testing to compare these common alternatives before choosing an invasive repair:
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
                Treat the condition as urgent when there is <strong>active spreading water, water near electrical equipment, rapid unexplained meter flow, sudden major pressure loss, or finishes changing quickly.</strong> If safe, close the private main shutoff, protect people and belongings, and arrange prompt plumbing help. Do not force an old or damaged valve.
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
              <p style={{ marginBottom: "1rem" }}>A technician first reviews visible fixtures, automatic equipment, outdoor systems, the meter, and accessible plumbing. The goal is to confirm repeatable unexplained water loss before interpreting floor temperature, sound, or moisture.</p>
              <p style={{ marginBottom: "1rem" }}>The service line, hot distribution, cold distribution, and accessible branches may then be isolated. <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Pressure testing</a> shows which defined section holds and which repeatedly loses pressure under the test conditions.</p>
              <p>Pipe tracing, acoustic comparison, thermal imaging, and moisture mapping can narrow the suspected route or area. No instrument sees the break through concrete, so the written result should state the evidence, limitations, and confidence before repair options are compared.</p>
            </div>
          </div>
        </section>

        {/* Section 9: Tucson Plumbing Context */}
        <section style={{ backgroundColor: "#f8fafc", padding: "4rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Tucson Plumbing Context</h2>
              <p style={{ color: "#4a4a4a", lineHeight: "1.7" }}>
                Tucson Water classifies local water as hard to very hard and provides current water-quality information by area. Hardness commonly creates scale in fixtures and water-heating equipment, but it does not diagnose an under-slab failure. Pipe material, installation, pressure, movement, abrasion, temperature cycling, repair history, and site conditions must be evaluated together.
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
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Confirm the affected system and narrow a concealed route before repair access is planned.</p>
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
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", margin: 0 }}>Compare acoustic, thermal, tracing, and moisture evidence after system isolation.</p>
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

        <ZigZagBlocks blocks={[
          {
            kicker: "Prepare for Testing",
            heading: "How to Document Slab Leak Symptoms Before Testing",
            content: <>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A short, accurate record helps a technician separate a plumbing loss from normal household water use. Note when each symptom started, whether it is constant or intermittent, and whether it changes after showers, laundry, irrigation, or pool equipment runs. Photograph damp flooring, discolored baseboards, and the water-meter reading so changes can be compared instead of relying on memory.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                For a controlled meter observation, stop known water uses and confirm that toilets, ice makers, water treatment equipment, irrigation, and pool autofill are not operating. Record the starting display, wait without using water, and photograph the ending display. Movement confirms metered flow during that period, but it does not identify whether the source is beneath the slab.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: 0, lineHeight: "1.7" }}>
                Mark warm, damp, or noisy areas on a simple floor plan and include nearby fixtures. This gives the plumber a useful starting point for <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>water-line pressure testing</a> while preventing one visible symptom from being mistaken for the pipe failure location.
              </p>
            </>,
            imageSrc: "/images/section_water_meter.jpg",
            imageAlt: "Homeowner documenting a Tucson water meter reading before slab leak testing",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            kicker: "Read the Pattern",
            heading: "How Multiple Clues Point to the Affected Water Line",
            content: <>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Slab leak symptoms are most useful when several independent observations agree. A warm floor combined with unexplained meter flow and repeated water-heater cycling supports testing the hot-water system. Meter movement without a warm area may justify checking toilets, appliances, the service line, irrigation, and the <a href="/cold-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>cold-water plumbing</a>.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Isolation changes a broad suspicion into a defined test boundary. When the hot-water supply is isolated, the technician can compare meter behavior and pressure loss before moving to thermal or acoustic tools. Outdoor branches and pool systems may need separate isolation because a buried yard leak can produce the same meter evidence as an under-slab pipe.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: 0, lineHeight: "1.7" }}>
                No single clue proves the route or break point. The goal is to establish which system is losing water, trace the likely pipe path, and then compare sound, temperature, moisture, and pressure evidence. That sequence produces a more defensible repair plan than opening concrete at the first warm or damp spot.
              </p>
            </>,
            imageSrc: "/images/blog/detection-report.png",
            imageAlt: "Slab leak test findings and pipe route documented for repair planning",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />

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
