import React from 'react';
import { Metadata } from 'next';
import { pageSocialMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: "/terms-and-conditions/" },
  title: 'Terms and Conditions | Tucson Leak Pros',
  description: 'Terms and Conditions for using Tucson Leak Pros services and website.',
  ...pageSocialMetadata('Terms and Conditions | Tucson Leak Pros', 'Terms and Conditions for using Tucson Leak Pros services and website.', '/terms-and-conditions/'),
};

export default function TermsAndConditions() {
  return (
    <main style={{ backgroundColor: "#f8fafc", padding: "4rem 0", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "800px", backgroundColor: "var(--white)", padding: "3rem", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "var(--dark-charcoal)" }}>Terms and Conditions</h1>
        
        <div style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.7" }}>
          <p><strong>Last Updated: July 2026</strong></p>
          
          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>1. Agreement to Terms</h3>
          <p>By accessing or using our website and services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>2. Services</h3>
          <p>Tucson Leak Pros provides plumbing, slab leak detection, and repair services. All services are subject to availability and our acceptance of your request. We reserve the right to refuse service to anyone for any reason at any time.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>3. Estimates and Pricing</h3>
          <p>Any estimates provided are based on the initial assessment and are subject to change if unforeseen complications arise during the service. Final pricing will be communicated and agreed upon before work commences.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>4. Limitation of Liability</h3>
          <p>In no event shall Tucson Leak Pros or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website or the services provided.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>5. Governing Law</h3>
          <p>These terms and conditions are governed by and construed in accordance with the laws of the State of Arizona, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>
      </div>
    </main>
  );
}
