import React from 'react';
import { Metadata } from 'next';
import { pageSocialMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy/" },
  title: 'Privacy Policy | Tucson Leak Pros',
  description: 'Privacy Policy for Tucson Leak Pros. Learn how we collect, use, and protect your data.',
  ...pageSocialMetadata('Privacy Policy | Tucson Leak Pros', 'Privacy Policy for Tucson Leak Pros. Learn how we collect, use, and protect your data.', '/privacy-policy/'),
};

export default function PrivacyPolicy() {
  return (
    <main style={{ backgroundColor: "#f8fafc", padding: "4rem 0", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "800px", backgroundColor: "var(--white)", padding: "3rem", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "var(--dark-charcoal)" }}>Privacy Policy</h1>
        
        <div style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.7" }}>
          <p><strong>Last Updated: July 2026</strong></p>
          
          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>1. Information We Collect</h3>
          <p>We collect information you provide directly to us, such as when you fill out a form, request a quote, or contact us for support. The types of personal information we may collect include your name, email address, postal address, phone number, and any other information you choose to provide.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>2. Use of Information</h3>
          <p>We use the information we collect to provide, maintain, and improve our services, to process transactions, and to send you related information, including confirmations and invoices. We may also use the information to respond to your comments, questions, and requests.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>3. Sharing of Information</h3>
          <p>We may share personal information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We may also share information if we believe disclosure is in accordance with any applicable law, regulation, or legal process.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>4. Security</h3>
          <p>We take reasonable measures to help protect personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>5. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at: <a href="tel:5205550199" style={{ color: "var(--brand-red)", fontWeight: "bold" }}>(520) 555-0199</a>.</p>
        </div>
      </div>
    </main>
  );
}
