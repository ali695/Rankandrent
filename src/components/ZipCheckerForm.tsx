"use client";
import React, { useState } from 'react';

export default function ZipCheckerForm() {
  const [zip, setZip] = useState("");
  const [symptom, setSymptom] = useState("");

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Request submitted for Zip: ${zip}`);
  };

  return (
    <div className="form-card">
      <h3 style={{ marginTop: 0, marginBottom: "0.5rem", fontSize: "1.4rem", fontWeight: "800", color: "var(--dark-charcoal)", textAlign: "center" }}>Check Availability</h3>
      <p style={{ fontSize: "0.95rem", color: "#4a4a4a", marginBottom: "1.5rem", textAlign: "center" }}>Enter your ZIP code to check coverage.</p>
      
      <form onSubmit={handleZipCheck} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>ZIP code</label>
          <select className="form-control" style={{ marginBottom: 0 }} value={zip} onChange={e => setZip(e.target.value)} required>
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
        <div>
          <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold", fontSize: "0.9rem" }}>Main symptom</label>
          <select className="form-control" style={{ marginBottom: 0 }} value={symptom} onChange={e => setSymptom(e.target.value)} required>
            <option value="">Select a symptom...</option>
            <option value="Warm flooring">Warm flooring</option>
            <option value="Damp flooring">Damp flooring</option>
            <option value="Moving water meter">Moving water meter</option>
            <option value="High water usage">High water usage</option>
            <option value="Low water pressure">Low water pressure</option>
            <option value="Active water damage">Active water damage</option>
            <option value="Confirmed slab leak">Confirmed slab leak</option>
            <option value="Not sure">Not sure</option>
          </select>
        </div>
        <button type="submit" style={{ width: "100%", padding: "1rem", fontSize: "1rem", fontWeight: "bold", backgroundColor: "var(--dark-charcoal)", color: "var(--white)", border: "none", borderRadius: "8px", cursor: "pointer", marginTop: "0.5rem" }}>CHECK COVERAGE</button>
        <p style={{ fontSize: "0.75rem", color: "#71717a", textAlign: "center", marginTop: "0.5rem", marginBottom: 0 }}>
          Submitting a ZIP code does not automatically confirm an appointment.
        </p>
      </form>
    </div>
  );
}
