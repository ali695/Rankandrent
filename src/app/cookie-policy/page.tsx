import React from 'react';
import { Metadata } from 'next';
import { pageSocialMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: "/cookie-policy/" },
  title: 'Cookie Policy | Tucson Leak Pros',
  description: 'Learn about how we use cookies to improve your experience on our website.',
  ...pageSocialMetadata('Cookie Policy | Tucson Leak Pros', 'Learn about how we use cookies to improve your experience on our website.', '/cookie-policy/'),
};

export default function CookiePolicy() {
  return (
    <main style={{ backgroundColor: "#f8fafc", padding: "4rem 0", minHeight: "80vh" }}>
      <div className="container" style={{ maxWidth: "800px", backgroundColor: "var(--white)", padding: "3rem", borderRadius: "8px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "var(--dark-charcoal)" }}>Cookie Policy</h1>
        
        <div style={{ color: "#4a4a4a", fontSize: "1.05rem", lineHeight: "1.7" }}>
          <p><strong>Last Updated: July 2026</strong></p>
          
          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>1. What are Cookies?</h3>
          <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>2. How We Use Cookies</h3>
          <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not, in case they are used to provide a service that you use.</p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            <li><strong>Essential Cookies:</strong> These are cookies that are required for the operation of our website.</li>
            <li><strong>Analytical/Performance Cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
            <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website.</li>
          </ul>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>3. Disabling Cookies</h3>
          <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>

          <h3 style={{ marginTop: "2rem", marginBottom: "1rem", color: "var(--brand-red)" }}>4. More Information</h3>
          <p>Hopefully, that has clarified things for you. If there is something that you aren't sure whether you need or not, it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
        </div>
      </div>
    </main>
  );
}
