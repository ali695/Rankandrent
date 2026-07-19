import React from 'react';
import { Metadata } from 'next';
import { pageSocialMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: "/accessibility/" },
  title: 'Accessibility Statement | Tucson Leak Pros',
  description: 'Our commitment to digital accessibility for all users.',
  ...pageSocialMetadata('Accessibility Statement | Tucson Leak Pros', 'Our commitment to digital accessibility for all users.', '/accessibility/'),
};

export default function Accessibility() {
  return (
    <main style={{ backgroundColor: "#f8fafc", padding: "4rem 0", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "800px", backgroundColor: "var(--white)", padding: "3rem", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "var(--dark-charcoal)" }}>Accessibility Statement</h1>
        
        <div style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.7" }}>
          <p><strong>Last Updated: July 2026</strong></p>
          
          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>Our Commitment</h3>
          <p>Tucson Leak Pros is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>Measures to Support Accessibility</h3>
          <p>We take the following measures to ensure accessibility of our website:</p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            <li>Include accessibility throughout our internal policies.</li>
            <li>Integrate accessibility into our procurement practices.</li>
            <li>Provide continual accessibility training for our staff.</li>
            <li>Assign clear accessibility targets and responsibilities.</li>
          </ul>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>Conformance Status</h3>
          <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We strive to maintain compliance with WCAG 2.1 level AA standards.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>Feedback</h3>
          <p>We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers on our site by contacting us via our contact form or calling <a href="tel:5205550199" style={{ color: "var(--brand-red)", fontWeight: "bold" }}>(520) 555-0199</a>.</p>
        </div>
      </div>
    </main>
  );
}
