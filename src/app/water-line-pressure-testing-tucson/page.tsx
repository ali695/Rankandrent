import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqCategory from '@/components/FaqCategory';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import ZigZagBlocks from '@/components/ZigZagBlocks';

export const metadata: Metadata = {
  title: 'Water-Line Pressure Testing Tucson | Leak Isolation',
  description: 'Confirm hidden water loss and isolate affected hot or cold plumbing lines with residential water-line pressure testing in Tucson.',
  openGraph: {
    title: 'Water-Line Pressure Testing Tucson | Leak Isolation',
    description: 'Confirm hidden water loss and isolate affected hot or cold plumbing lines with residential water-line pressure testing in Tucson.',
    url: 'https://tucsonslableakpros.com/water-line-pressure-testing-tucson/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    type: 'website',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Water-Line Pressure Testing",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tucson Leak Pros"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson"
  },
  "description": "Professional water-line pressure testing and plumbing line isolation in Tucson, AZ."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does a pressure drop confirm a slab leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A pressure drop confirms a leak on that specific line, but it does not prove it is beneath the slab until the rest of the line is inspected and isolated."
      }
    },
    {
      "@type": "Question",
      "name": "Can pressure testing locate the exact leak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A water-line leak test confirms the existence of the leak. We then use acoustic or electronic tracing to pinpoint the exact location."
      }
    },
    {
      "@type": "Question",
      "name": "Can hot and cold lines be tested separately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Hot and cold line isolation is standard procedure. We test hot- and cold-water lines separately to determine which water line is leaking."
      }
    },
    {
      "@type": "Question",
      "name": "Can pressure testing damage pipes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We test using normal static water pressure. The goal is to observe the natural pressure loss, not over-pressurize the system."
      }
    }
  ]
};

export default function WaterLinePressureTesting() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Water-Line Pressure Testing Tucson | Leak Isolation", "description": "Confirm hidden water loss and isolate affected hot or cold plumbing lines with residential water-line pressure testing in Tucson.", "url": "https://tucsonslableakpros.com/water-line-pressure-testing-tucson/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Under Slab Pipe Repair Tucson" src="/images/under_slab_pipe_repair.jpg" alt="Tucson under slab pipe repair services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>PLUMBING LINE ISOLATION</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Water-Line Pressure Testing Tucson</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "1rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Before anyone tears into your floor, you need proof that a leak exists and exactly which line is losing pressure.
                </p>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  <strong>Plumbing pressure testing Tucson</strong> relies on <strong>hot and cold line isolation</strong> to confirm a <strong>hidden pipe leak testing</strong> accurately. We run a <strong>pressure-drop test Tucson</strong> to stop the guessing.
                </p>
                
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Plumbing pressure gauge tests
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Test hot- and cold-water lines separately
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Static pressure test for hidden pipe leak
                  </li>
                </ul>
              </div>

              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* Content Section 1: The Process */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Plumbing Line Isolation Tucson</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A <strong>pressure test for suspected slab leak Tucson</strong> begins with <strong>system isolation</strong>. The technician will perform <strong>shutoff valve testing</strong> and connect a <strong>plumbing pressure gauge</strong> to measure <strong>static water pressure</strong>. 
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                By conducting a <strong>hot-line test</strong> and a <strong>cold-line test</strong> independently, we can <strong>determine which water line is leaking</strong>. If <strong>water pressure drops when fixtures are off</strong>, it's a proven loss of integrity.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Section Thermal Camera Tucson" src="/images/section_thermal_camera.jpg" alt="Residential thermal camera in Tucson" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* Importance of Testing */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container split-grid">
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Confirm Hidden Water Loss</h2>
              <p style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                <strong>Pressure testing before <a href="/electronic-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>electronic leak detection</a></strong> is mandatory. We <strong>confirm hidden water loss with pressure test</strong> data so we aren't wasting time listening for a leak that might just be a running toilet.
              </p>
              <p style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.6" }}>
                Our <strong>residential plumbing pressure test</strong> also ensures that the home's <strong>pressure regulator</strong> isn't the root cause of the issue.
              </p>
            </div>
            
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--dark-charcoal)", marginBottom: "1.5rem" }}>Testing After Repairs</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.6" }}>
                After we perform a <a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak repair</a>, we run a <strong>pressure test after slab leak repair</strong> to guarantee the new line holds strong. We use <strong>fixture isolation</strong> to ensure every faucet and shower receives the correct flow.
              </p>
            </div>
          </div>
        </section>

                        <ZigZagBlocks blocks={[
          {
            heading: "Understanding Your Pressure Test Results",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>After the test, we walk you through the results in plain language. You will see the starting pressure, the duration of the test, and the final reading for each line. If a line held pressure, it is confirmed leak-free and can be ruled out. If a line dropped, we calculate the rate of water loss and explain what that means.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>A pressure drop of more than 5 PSI over 15 minutes typically indicates a significant leak that needs prompt attention from our <a href="/emergency-slab-leak-service-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>emergency response</a> team. A drop of 1 to 3 PSI over the same period suggests a smaller failure that is still wasting water but may not require emergency service. We use these numbers to help you prioritize the next steps.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>The full test report is documented and provided to you in writing. This documentation is valuable for insurance claims, home sale disclosures, and future plumbing reference. It also serves as the baseline for the <a href="/electronic-leak-detection-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>acoustic leak detection</a> phase, giving the technician a clear target line to investigate.</p></>,
            imageSrc: "/images/pressure_testing.jpg",
            imageAlt: "Understanding pressure test results",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Isolating Hot vs. Cold Lines",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>One of the most important aspects of a professional <a href="/water-line-pressure-testing-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>pressure test</a> is isolating the different branches of your plumbing. A house-wide pressure drop tells us there is a leak, but it doesn't tell us where to start looking. By isolating the system, we save hours of diagnostic time.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>We first isolate the hot water system by closing the valve at your water heater. We then apply pressure to the hot lines independently. If the pressure holds, we know your hot water system is safe, and we immediately shift our focus to the cold water manifold. This isolation technique narrows the search area by 50% instantly.</p></>,
            imageSrc: "/images/section_pressure_gauge.jpg",
            imageAlt: "Isolating hot and cold lines",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          },
          {
            heading: "Ruling Out Fixture Leaks First",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Not every loss of water pressure means you have a cracked pipe under your foundation. Before we attach our testing gauges, our technicians perform a thorough sweep of the exposed plumbing in your home. A running toilet flapper or a dripping shower cartridge can cause a false positive during a pressure test.</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>We shut off the angle stops to all toilets, washing machines, and refrigerator ice makers. By removing these common culprits from the testing equation, we ensure that any pressure drop registered on our gauge is exclusively due to a failure in the hard piping hidden in your walls or slab.</p></>,
            imageSrc: "/images/section_water_meter.jpg",
            imageAlt: "Ruling out fixture leaks",
            imageOnLeft: true,
            backgroundColor: "#f8fafc"
          },
          {
            heading: "Using Gas for Micro-Leak Testing",
            content: <><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Sometimes, a pipe develops a pinhole leak so small that water pressure drops incredibly slowly, making <a href="/slab-leak-detection-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak detection</a> difficult. In these micro-leak scenarios, we escalate our testing methods by draining the water from the line and injecting an inert tracer gas (usually a mix of nitrogen and hydrogen).</p><p style={{ fontSize: '1.05rem', color: '#4a4a4a', marginBottom: '1rem', lineHeight: '1.7' }}>Because hydrogen molecules are smaller than water molecules, the gas escapes through the tiny pipe crack and permeates up through the concrete slab and flooring. We then use highly sensitive electronic gas "sniffers" to detect where the gas is surfacing, pinpointing the leak location accurately before beginning any <a href="/slab-leak-repair-tucson" style={{ color: "var(--brand-red)", fontWeight: "600", textDecoration: "underline" }}>slab leak repair</a>.</p></>,
            imageSrc: "/images/electronic_leak_detection.jpg",
            imageAlt: "Tracer gas leak testing",
            imageOnLeft: false,
            backgroundColor: "var(--white)"
          }
        ]} />


        {/* FAQs */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <FaqCategory 
                title="FAQ: Water-Line Pressure Testing"
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
      </main>
      <Footer />
    </>
  );
}
