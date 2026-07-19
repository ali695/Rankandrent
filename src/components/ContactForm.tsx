"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    zip: "",
    symptom: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}. Your request for ZIP ${formData.zip} has been submitted.`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-card">
      <h3 style={{ marginTop: 0, marginBottom: "0.5rem", fontSize: "1.6rem", fontWeight: "800", color: "var(--dark-charcoal)", textAlign: "center" }}>Request Service</h3>
      <p style={{ fontSize: "0.95rem", color: "#4a4a4a", marginBottom: "1.5rem", textAlign: "center" }}>Fill out the form below to receive a rapid response from our team.</p>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div className="responsive-flex">
          <div style={{ flex: 1 }}>
            <label htmlFor="contact-name" style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>Full Name</label>
            <input id="contact-name" type="text" name="name" autoComplete="name" className="form-control" style={{ marginBottom: 0 }} placeholder="John Doe" value={formData.name} onChange={handleChange} required />
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="contact-phone" style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>Phone Number</label>
            <input id="contact-phone" type="tel" name="phone" autoComplete="tel" className="form-control" style={{ marginBottom: 0 }} placeholder="(520) 555-0123" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>

        <div className="responsive-flex">
          <div style={{ flex: 1 }}>
            <label htmlFor="contact-zip" style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>ZIP code</label>
            <select id="contact-zip" name="zip" autoComplete="postal-code" className="form-control" style={{ marginBottom: 0 }} value={formData.zip} onChange={handleChange} required>
              <option value="">Select ZIP code...</option>
              <option value="85701">85701 (Central Tucson)</option>
              <option value="85704">85704 (Casas Adobes)</option>
              <option value="85705">85705 (Flowing Wells)</option>
              <option value="85706">85706 (Sunnyside)</option>
              <option value="85710">85710 (East Side)</option>
              <option value="85711">85711 (Midtown)</option>
              <option value="85712">85712 (Midtown)</option>
              <option value="85713">85713 (South Tucson)</option>
              <option value="85714">85714 (Southside)</option>
              <option value="85715">85715 (Northeast)</option>
              <option value="85716">85716 (Midtown)</option>
              <option value="85718">85718 (Catalina Foothills)</option>
              <option value="85719">85719 (University)</option>
              <option value="85730">85730 (East Side)</option>
              <option value="85737">85737 (Oro Valley)</option>
              <option value="85741">85741 (Northwest)</option>
              <option value="85742">85742 (Cortaro)</option>
              <option value="85743">85743 (Picture Rocks)</option>
              <option value="85745">85745 (West Side)</option>
              <option value="85746">85746 (Southwest)</option>
              <option value="85747">85747 (Rita Ranch)</option>
              <option value="85748">85748 (East Side)</option>
              <option value="85749">85749 (Tanque Verde)</option>
              <option value="85750">85750 (Catalina Foothills)</option>
              <option value="85756">85756 (Airport / South)</option>
              <option value="other">Other (Still call us!)</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="contact-symptom" style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>Main symptom</label>
            <select id="contact-symptom" name="symptom" className="form-control" style={{ marginBottom: 0 }} value={formData.symptom} onChange={handleChange} required>
              <option value="">Select...</option>
              <option value="Warm flooring">Warm flooring</option>
              <option value="Damp flooring">Damp flooring</option>
              <option value="High water bill">High water bill</option>
              <option value="Running water sound">Running water sound</option>
              <option value="Not sure">Not sure</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>Additional Details</label>
          <textarea id="contact-message" name="message" className="form-control" style={{ marginBottom: 0 }} rows={3} placeholder="Please describe any damages or specific concerns..." value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button type="submit" style={{ width: "100%", padding: "1.25rem", fontSize: "1.1rem", fontWeight: "bold", backgroundColor: "var(--brand-red)", color: "var(--white)", border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "0.5rem" }}>SUBMIT REQUEST</button>
        <p style={{ fontSize: "0.75rem", color: "#71717a", textAlign: "center", marginTop: "0.5rem", marginBottom: 0 }}>
          We aim to respond to all inquiries within 15 minutes during regular hours.
        </p>
      </form>
    </div>
  );
}
