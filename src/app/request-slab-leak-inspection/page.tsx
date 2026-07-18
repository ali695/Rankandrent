import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Request Slab Leak Detection in Tucson, AZ',
  description: 'Request help with warm flooring, hidden water loss, meter movement or a suspected pipe leak beneath your Tucson home’s concrete slab.',
  openGraph: {
    title: 'Request Slab Leak Detection in Tucson, AZ',
    description: 'Request help with warm flooring, hidden water loss, meter movement or a suspected pipe leak beneath your Tucson home’s concrete slab.',
    url: 'https://tucsonslableakpros.com/request-slab-leak-inspection/',
    siteName: 'Tucson Leak Pros',
    locale: 'en_US',
    images: [
      {
        url: "/images/services_hub_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Request Slab Leak Detection in Tucson, AZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Slab Leak Detection in Tucson, AZ",
    description: "Request help with warm flooring, hidden water loss, meter movement or a suspected pipe leak beneath your Tucson home’s concrete slab.",
    images: ["/images/services_hub_hero.jpg"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Tucson Leak Pros",
  "description": "Contact us for emergency slab leak detection and repair in Tucson."
};

export default function Contact() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Request Slab Leak Detection in Tucson, AZ", "description": "Request help with warm flooring, hidden water loss, meter movement or a suspected pipe leak beneath your Tucson home\u2019s concrete slab.", "url": "https://tucsonslableakpros.com/request-slab-leak-inspection/"}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <main>
        {/* Hero Section */}
        <section style={{ position: "relative", padding: "6rem 0", overflow: "hidden", minHeight: "750px", display: "flex", alignItems: "center" }}>
          {/* Dark Overlay Background */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, backgroundColor: "#18181b" }}>
            <img title="Slab Leak Detection Tucson" src="/images/slab_leak_detection.jpg" alt="Tucson slab leak detection services" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }} />
          </div>
          
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-grid">
              {/* Contact Info (Left Side) */}
              <div style={{ color: "var(--white)", paddingRight: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>GET IN TOUCH</span>
                <h1 style={{ color: "var(--white)", marginBottom: "1.5rem", fontSize: "3.5rem", lineHeight: "1.1", fontWeight: "800" }}>Contact Tucson Leak Pros</h1>
                <p style={{ fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "600px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  We are ready to respond. Whether you need immediate emergency service or want to schedule a routine diagnostic, reach out today.
                 For more information, learn about our <a href="/emergency-slab-leak-service-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>emergency slab leak service</a> process.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ backgroundColor: "var(--brand-red)", padding: "1rem", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--white)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "bold" }}>Call Us Immediately</h4>
                      <a href="tel:5205550199" style={{ color: "#e4e4e7", textDecoration: "none", fontSize: "1.1rem" }}>(520) 555-0199</a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "1rem", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "bold" }}>Service Hours</h4>
                      <p style={{ margin: 0, color: "#e4e4e7", fontSize: "1.1rem" }}>Monday - Sunday: 7:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "1rem", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "bold" }}>Service Area</h4>
                      <p style={{ margin: 0, color: "#e4e4e7", fontSize: "1.1rem" }}>Greater Tucson Area, <a href="/service-areas/oro-valley/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>Oro Valley</a>, Marana, Sahuarita</p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "1rem", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "bold" }}>Address</h4>
                      <p style={{ margin: 0, color: "#e4e4e7", fontSize: "1.1rem" }}>4751 S Irving Ave, Tucson, AZ 85714, United States Our experts are highly trained in <a href="/hot-water-slab-leak-tucson/" style={{ color: "var(--brand-red)", textDecoration: "underline", fontWeight: "600" }}>hot-water slab leak</a>.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comprehensive Contact Form Box (Right Side) */}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Emergency Protocol */}
        <section style={{ backgroundColor: "#334155", color: "var(--white)" }}>
          <div className="split-grid" style={{ gap: 0 }}>
            <div style={{ display: "flex" }}>
              <img title="Hot Water Slab Leak Tucson" src="/images/hot_water_slab_leak.jpg" alt="Tucson hot water slab leak services" style={{ width: "100%", height: "100%", minHeight: "450px", objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem 5%", maxWidth: "800px", marginRight: "auto" }}>
              <span style={{ color: "var(--brand-red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "0.5rem", fontSize: "0.85rem" }}>URGENT ACTION</span>
              <h2 style={{ color: "var(--white)", fontSize: "2.2rem", fontWeight: "800", marginBottom: "1.5rem", lineHeight: "1.2" }}>
                Active Water Emergency?
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#cbd5e1", marginBottom: "1rem", lineHeight: "1.7" }}>
                If water is rapidly spreading across your floor or if you hear a massive rush of water beneath the concrete, <strong>do not wait for an email reply.</strong>
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", color: "#cbd5e1", fontSize: "1.1rem" }}>
                <li style={{ marginBottom: "0.5rem" }}>1. Immediately turn off your home's main water shut-off valve.</li>
                <li style={{ marginBottom: "0.5rem" }}>2. Move valuables and furniture away from the affected area.</li>
                <li style={{ marginBottom: "0.5rem" }}>3. Call our dispatch number directly for rapid emergency service.</li>
              </ul>
              <div>
                <a href="tel:5205550199" className="btn-primary" style={{ display: "inline-block", padding: "1rem 2rem", fontWeight: "bold" }}>CALL (520) 555-0199</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
