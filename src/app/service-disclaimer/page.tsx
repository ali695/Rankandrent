import React from 'react';
import { Metadata } from 'next';
import { pageSocialMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: "/service-disclaimer/" },
  title: 'Service Disclaimer | Tucson Leak Pros',
  description: 'Service Disclaimer for Tucson Leak Pros.',
  ...pageSocialMetadata('Service Disclaimer | Tucson Leak Pros', 'Service Disclaimer for Tucson Leak Pros.', '/service-disclaimer/'),
};

export default function ServiceDisclaimer() {
  return (
    <main style={{ backgroundColor: "#f8fafc", padding: "4rem 0", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "800px", backgroundColor: "var(--white)", padding: "3rem", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "var(--dark-charcoal)" }}>Service Disclaimer</h1>
        
        <div style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.7" }}>
          <p><strong>Last Updated: July 2026</strong></p>
          
          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>General Disclaimer</h3>
          <p>The information provided by Tucson Leak Pros on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>Service Limitations</h3>
          <p>While we use advanced diagnostic tools for slab leak detection, some leaks may be located in areas that are inaccessible or extremely difficult to detect without some degree of exploratory work. We cannot guarantee that all leaks will be found without invasive measures, though we strive to minimize any disruption.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>External Links</h3>
          <p>Our website may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p>
        </div>
      </div>
    </main>
  );
}
