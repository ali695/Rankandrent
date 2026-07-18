import React from 'react';
import { Metadata } from 'next';
import ZipCheckerForm from '@/components/ZipCheckerForm';
import HeroSlideshow from '@/components/HeroSlideshow';

export const metadata: Metadata = {
  title: 'Slab Leak Detection & Repair Tucson, AZ | Tucson Leak Pros',
  description: 'Suspect a hidden pipe leak? Request slab leak detection, pressure testing, pipe repair or water-line rerouting across Tucson, Arizona.',
  openGraph: {
    title: 'Slab Leak Detection & Repair Tucson, AZ | Tucson Leak Pros',
    description: 'Suspect a hidden pipe leak? Request slab leak detection, pressure testing, pipe repair or water-line rerouting across Tucson, Arizona.',
    url: 'https://tucsonslableakpros.com/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Slab Leak Detection & Repair Tucson, AZ | Tucson Leak Pros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slab Leak Detection & Repair Tucson, AZ | Tucson Leak Pros",
    description: "Suspect a hidden pipe leak? Request slab leak detection, pressure testing, pipe repair or water-line rerouting across Tucson, Arizona.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tucson Leak Pros",
  "image": "https://tucsonslableakpros.com/images/services_hub_hero.jpg",
  "telephone": "(520) 555-0199",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4751 S Irving Ave",
    "addressLocality": "Tucson",
    "addressRegion": "AZ",
    "postalCode": "85714",
    "addressCountry": "US"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 32.2226,
      "longitude": -110.9747
    },
    "geoRadius": "40000"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "07:00",
    "closes": "19:00"
  }
};

export default function Home() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Slab Leak Detection & Repair Tucson, AZ | Tucson Leak Pros", "description": "Suspect a hidden pipe leak? Request slab leak detection, pressure testing, pipe repair or water-line rerouting across Tucson, Arizona.", "url": "https://tucsonslableakpros.com/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <main>
        {/* 1. New Hero Section with Dark Overlay & Form Box */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "650px", display: "flex", alignItems: "center" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b", overflow: "hidden" }}>
            <HeroSlideshow images={[
              { src: '/images/services_hub_hero.jpg', alt: 'Premium slab leak expert inspecting floor' },
              { src: '/images/hero_home.jpg', alt: 'Tucson home exterior' },
              { src: '/images/electronic_leak_detection.jpg', alt: 'Electronic leak detection equipment' },
              { src: '/images/slab_leak_repair.jpg', alt: 'Professional slab leak repair' }
            ]} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>TUCSON'S PREMIER LEAK SPECIALISTS</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Slab Leak Detection & Repair in Tucson, AZ</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  If you have water pooling on your floor, a sudden spike in your water bill, or the sound of running water when all taps are off, you might have a slab leak. We specialize in <a href="/slab-leak-detection-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak detection</a> using advanced <a href="/water-line-pressure-testing-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>pressure testing</a>. Once located, we offer direct <a href="/slab-leak-repair-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>slab leak repair</a> or complete <a href="/water-line-rerouting-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>water line rerouting</a> without unnecessary damage.
                </p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Acoustic & Electronic Locating
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Minimally Invasive Diagnostics
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.1rem", fontWeight: "600" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Trusted by Tucson Homeowners
                  </li>
                </ul>
              </div>

              {/* Form Box */}
              <ZipCheckerForm />
            </div>
          </div>
        </section>

        {/* 2. Moving Certifications Marquee */}
        <section className="marquee-wrapper">
          <div className="marquee-content">
            {/* Sequence 1 */}
            <span>LICENSED, BONDED & INSURED</span>
            <span>★</span>
            <span>BBB ACCREDITED BUSINESS</span>
            <span>★</span>
            <span>TOP RATED HOMEADVISOR PRO</span>
            <span>★</span>
            <span>TUCSON'S #1 LEAK DETECTORS</span>
            <span>★</span>
            {/* Sequence 2 (Duplicated for infinite scroll) */}
            <span>LICENSED, BONDED & INSURED</span>
            <span>★</span>
            <span>BBB ACCREDITED BUSINESS</span>
            <span>★</span>
            <span>TOP RATED HOMEADVISOR PRO</span>
            <span>★</span>
            <span>TUCSON'S #1 LEAK DETECTORS</span>
            <span>★</span>
          </div>
        </section>

        {/* 3. Alternating Split 1: Content Left, Image Right */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container split-grid" style={{ alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "3rem" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>WHY CHOOSE US</span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", color: "var(--dark-charcoal)", lineHeight: "1.2" }}>Professional Detection First</h2>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Breaking through the floor in the wrong spot causes massive, unnecessary damage to your home and exponentially increases your repair expenses. 
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "2rem", lineHeight: "1.7" }}>
                We use highly specific acoustic and electronic testing methods to find the exact problem area before any concrete is ever opened. We believe in diagnosing with certainty rather than guessing with a jackhammer.
              </p>
              <div>
                <a href="/slab-leak-detection-tucson/" className="btn-primary" style={{ display: "inline-block", padding: "1rem 2rem", fontWeight: "bold" }}>Learn About Our Process</a>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img title="Partial Repiping Tucson" src="/images/partial_repiping.jpg" alt="Tucson partial repiping services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
        </section>

        {/* 4. Service Areas Grid */}
        <section style={{ backgroundColor: "#f8fafc", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", marginBottom: "3rem" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>COVERAGE</span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>Tucson Areas We Serve</h2>
            </div>
            
            <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              {[
                { name: "Central Tucson", img: "slab_leak_detection.jpg", link: "/service-areas/central-tucson/", desc: "Expert slab leak detection and historic home pipe repair services in Central Tucson." },
                { name: "North Tucson", img: "electronic_leak_detection.jpg", link: "/service-areas/north-tucson/", desc: "Advanced electronic leak detection and post-tension slab repair across North Tucson." },
                { name: "Oro Valley", img: "pressure_testing.jpg", link: "/service-areas/oro-valley/", desc: "Professional water-line routing, pressure testing, and emergency leak services in Oro Valley." },
                { name: "Catalina Foothills", img: "cold_water_slab_leak.jpg", link: "/service-areas/catalina-foothills/", desc: "Comprehensive under-slab pipe repair and leak diagnostics for Catalina Foothills estates." },
                { name: "East Tucson", img: "slab_leak_repair.jpg", link: "/service-areas/east-tucson/", desc: "Fast-response hot and cold water slab leak repair and repiping in East Tucson." },
                { name: "Rita Ranch", img: "under_slab_pipe_repair.jpg", link: "/service-areas/rita-ranch/", desc: "Precision leak locating and non-invasive pipe rerouting solutions for Rita Ranch homes." }
              ].map(area => (
                <div key={area.name} className="premium-card location-card" style={{ overflow: "hidden", display: "flex", flexDirection: "column", borderTop: "4px solid var(--brand-red)" }}>
                  <div style={{ position: "relative", paddingTop: "60%" }}>
                    <img title="Under Slab Pipe Repair Tucson" src={`/images/${area.img}`} alt={area.name} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", backgroundColor: "#e4e4e7" }} />
                  </div>
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3 style={{ marginBottom: "0.5rem", color: "var(--dark-charcoal)", fontSize: "1.25rem" }}>{area.name}</h3>
                    <p style={{ color: "#4a4a4a", fontSize: "0.95rem", marginBottom: "1rem", lineHeight: "1.5" }}>{area.desc}</p>
                    <a href={area.link} style={{ color: "var(--brand-red)", fontWeight: "bold", fontSize: "0.9rem", textDecoration: "none", marginTop: "auto" }}>View Service Area  </a>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <a href="/service-areas/" className="btn-outline" style={{ padding: "1rem 2rem", fontWeight: "bold" }}>View All Areas</a>
            </div>
          </div>
        </section>

        {/* 5. Alternating Split 2: Image Left, Content Right */}
        <section style={{ backgroundColor: "#334155", color: "var(--white)" }}>
          <div className="split-grid" style={{ gap: 0 }}>
            <div style={{ display: "flex" }}>
              <img title="Hot Water Slab Leak Tucson" src="/images/hot_water_slab_leak.jpg" alt="Tucson hot water slab leak services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem 5%", maxWidth: "800px", marginRight: "auto" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>EMERGENCY PROTOCOL</span>
              <h2 style={{ color: "var(--white)", fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", lineHeight: "1.2" }}>
                The Dangers of Waiting
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", marginBottom: "1rem", lineHeight: "1.7" }}>
                Discovering a potential leak under your home is stressful. If left untreated, a slab leak can severely undermine your home's foundation, cause mold growth, and ruin expensive flooring. 
              </p>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", marginBottom: "2rem", lineHeight: "1.7" }}>
                If you see active water coming up through the floor, or if your water bill is unusually high, turn off the main water valve to your house immediately. Once the water is off, <a href="/contact/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>contact us</a> to safely test the system.
              </p>
              <div>
                <a href="/emergency-slab-leak-service-tucson/" className="btn-primary" style={{ display: "inline-block", padding: "1rem 2rem", fontWeight: "bold" }}>Get Emergency Help</a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Services Card Grid Section */}
        <section style={{ backgroundColor: "var(--white)", padding: "5rem 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", marginBottom: "3rem" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>EXPERTISE</span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>Comprehensive Leak Services</h2>
            </div>
            
            <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {[
                { title: 'Electronic Leak Detection', desc: "Confirms water loss and pinpoints the exact underground location.", img: "electronic_leak_detection.jpg", link: "/slab-leak-detection-tucson/" },
                { title: 'Slab Leak Repair', desc: "Professional repairs including spot fixes and full bypassing.", img: "slab_leak_repair.jpg", link: "/slab-leak-repair-tucson/" },
                { title: 'Water-Line Rerouting', desc: "Abandon the leaking pipe and run a brand new line through the walls.", img: "water_line_rerouting.jpg", link: "/water-line-rerouting-tucson/" },
                { title: 'Hot Water Slab Leaks', desc: "Diagnosing warm flooring and reduced hot-water availability.", img: "hot_water_slab_leak.jpg", link: "/hot-water-slab-leak-tucson/" },
                { title: 'Cold Water Slab Leaks', desc: "Tracking hidden water loss and unexplained meter movement.", img: "cold_water_slab_leak.jpg", link: "/cold-water-slab-leak-tucson/" },
                { title: 'Pressure Testing', desc: "Confirms whether a line is actively losing pressure before opening floors.", img: "pressure_testing.jpg", link: "/water-line-pressure-testing-tucson/" }
              ].map(svc => (
                <div key={svc.title} className="premium-card location-card" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <img title="Emergency Slab Leak Service Tucson" src={`/images/${svc.img}`} alt={svc.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderBottom: "4px solid var(--dark-charcoal)" }} />
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3 style={{ marginBottom: "1rem", color: "var(--brand-red)", fontSize: "1.25rem", fontWeight: "800" }}>{svc.title}</h3>
                    <p style={{ fontSize: "0.95rem", color: "#4a4a4a", marginBottom: "1.5rem", flexGrow: 1 }}>{svc.desc}</p>
                    <a href={svc.link} className="btn-primary" style={{ textAlign: "center", padding: "0.75rem", fontSize: "0.85rem", textDecoration: "none" }}>Learn More</a>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <a href="/services/" className="btn-outline" style={{ padding: "1rem 2rem", fontWeight: "bold" }}>View All Services</a>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {/* Left Content Half */}
            <div style={{ padding: "5rem 10%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>WHY CHOOSE US</span>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "1.5rem", lineHeight: "1.1", color: "var(--white)" }}>Your Satisfaction is Our Priority</h2>
              <p style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "3rem" }}>
                Tucson Leak Pros stands for quality and reliable execution of modern plumbing and slab leak infrastructure. With decades of experience in acoustic detection, pressure testing, and non-invasive pipe routing, we execute your projects efficiently.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                {/* Feature 1 */}
                <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  <span style={{ color: "var(--dark-charcoal)", fontWeight: "700", fontSize: "0.95rem" }}>Non-Invasive Detection</span>
                </div>
                {/* Feature 2 */}
                <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  <span style={{ color: "var(--dark-charcoal)", fontWeight: "700", fontSize: "0.95rem" }}>Insurance Billing</span>
                </div>
                {/* Feature 3 */}
                <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span style={{ color: "var(--dark-charcoal)", fontWeight: "700", fontSize: "0.95rem" }}>Same-Day Service</span>
                </div>
                {/* Feature 4 */}
                <div style={{ backgroundColor: "var(--white)", borderRadius: "8px", padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  <span style={{ color: "var(--dark-charcoal)", fontWeight: "700", fontSize: "0.95rem" }}>Transparent Pricing</span>
                </div>
              </div>
            </div>
            {/* Right Image Half */}
            <div style={{ minHeight: "500px", position: "relative" }}>
              <img src="/images/why_choose_us_plumber.jpg" alt="Professional plumber performing leak detection" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* 7. Customer Reviews Section */}
        <section style={{ backgroundColor: "#f1f5f9", padding: "5rem 0", overflow: "hidden" }}>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>TESTIMONIALS</span>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--dark-charcoal)" }}>What Our Customers Say</h2>
            </div>
          </div>
            
          <div className="review-marquee-wrapper">
            <div className="review-marquee-content">
              {[
                { name: "Michael R.", area: "Oro Valley, AZ", text: "I noticed a huge spike in my water bill but saw no water anywhere. These guys came out, used their acoustic gear, and found a tiny pinhole leak under my kitchen island. They saved me from tearing up my entire tile floor." },
                { name: "Sarah J.", area: "Central Tucson, AZ", text: "Woke up to a warm floor in the hallway. They arrived same-day, isolated the hot water line, and rerouted a new pipe through the attic instead of jackhammering the slab. Incredible service and completely transparent pricing." },
                { name: "David T.", area: "Rita Ranch, AZ", text: "Highly professional from start to finish. They didn't guess; they proved exactly where the leak was before offering solutions. If you suspect a slab leak, do not call a regular plumber, call these specialists first." },
                { name: "Jessica W.", area: "Catalina Foothills, AZ", text: "The team was so respectful of our home. They put down protective mats everywhere and used electronic equipment to find the leak fast. The repair was done perfectly in just one afternoon." },
                { name: "Robert L.", area: "East Tucson, AZ", text: "I was terrified of the cost, but their pressure testing confirmed the exact problem line immediately. The reroute was clean and their final invoice matched the quote exactly. Fantastic job." },
                // Duplicate for seamless infinite scroll
                { name: "Michael R.", area: "Oro Valley, AZ", text: "I noticed a huge spike in my water bill but saw no water anywhere. These guys came out, used their acoustic gear, and found a tiny pinhole leak under my kitchen island. They saved me from tearing up my entire tile floor." },
                { name: "Sarah J.", area: "Central Tucson, AZ", text: "Woke up to a warm floor in the hallway. They arrived same-day, isolated the hot water line, and rerouted a new pipe through the attic instead of jackhammering the slab. Incredible service and completely transparent pricing." },
                { name: "David T.", area: "Rita Ranch, AZ", text: "Highly professional from start to finish. They didn't guess; they proved exactly where the leak was before offering solutions. If you suspect a slab leak, do not call a regular plumber, call these specialists first." },
                { name: "Jessica W.", area: "Catalina Foothills, AZ", text: "The team was so respectful of our home. They put down protective mats everywhere and used electronic equipment to find the leak fast. The repair was done perfectly in just one afternoon." },
                { name: "Robert L.", area: "East Tucson, AZ", text: "I was terrified of the cost, but their pressure testing confirmed the exact problem line immediately. The reroute was clean and their final invoice matched the quote exactly. Fantastic job." }
              ].map((review, i) => (
                <div key={i} className="review-card">
                  <div style={{ color: "#fbbf24", fontSize: "1.5rem", marginBottom: "1rem" }}>★★★★★</div>
                  <p style={{ fontSize: "1rem", color: "#4a4a4a", lineHeight: "1.6", fontStyle: "italic", marginBottom: "1.5rem", flexGrow: 1 }}>"{review.text}"</p>
                  <div>
                    <strong style={{ display: "block", color: "var(--dark-charcoal)", fontSize: "1.1rem" }}>{review.name}</strong>
                    <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: "600" }}>{review.area}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Bottom CTA (Matches Hero) */}
        <section id="contact" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "600px", display: "flex", alignItems: "center" }}>
          {/* Dark Overlay Background */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Water Line Rerouting Tucson" src="/images/water_line_rerouting.jpg" alt="Tucson water line rerouting services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              <div style={{ color: "var(--white)", paddingRight: "2rem" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>READY TO FIND THE LEAK?</span>
                <h2 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Schedule Your Expert Leak Evaluation</h2>
                <p style={{ fontSize: "1.1rem", marginBottom: "2rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  Provide the details of your plumbing issue, and we will contact you to confirm service availability and schedule your diagnostic.
                </p>
              </div>

              {/* FCS Style Bottom Form Box */}
              <ZipCheckerForm />
            </div>
          </div>
        </section>
      </main>
</>
  );
}
