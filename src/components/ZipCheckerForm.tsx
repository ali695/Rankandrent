"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { listedServiceZips, serviceAreaOptions, symptomOptions } from "@/data/serviceAreas";

type CoverageResult = {
  covered: boolean;
  message: string;
} | null;

export default function ZipCheckerForm() {
  const zipId = useId();
  const symptomId = useId();
  const [zip, setZip] = useState("");
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState<CoverageResult>(null);

  const handleZipCheck = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const covered = listedServiceZips.has(zip);
    setResult({
      covered,
      message: covered
        ? `${zip} is listed in the Tucson-area request directory. A provider still needs to confirm address-level availability.`
        : "This ZIP is not listed in the current directory. Submit the exact property address so coverage can be checked.",
    });
  };

  const requestHref = `/request-slab-leak-inspection/?zip=${encodeURIComponent(zip)}&symptom=${encodeURIComponent(symptom)}`;

  return (
    <div className="form-card">
      <h3 style={{ marginTop: 0, marginBottom: "0.5rem", fontSize: "1.4rem", fontWeight: "800", color: "var(--dark-charcoal)", textAlign: "center" }}>
        Check the ZIP Directory
      </h3>
      <p style={{ fontSize: "0.95rem", color: "#4a4a4a", marginBottom: "1.5rem", textAlign: "center" }}>
        Check whether the property ZIP is listed before requesting address-level confirmation.
      </p>

      <form onSubmit={handleZipCheck} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <label htmlFor={zipId} className="form-label">Property ZIP code</label>
          <select
            id={zipId}
            name="zip"
            className="form-control"
            style={{ marginBottom: 0 }}
            value={zip}
            onChange={(event) => {
              setZip(event.target.value);
              setResult(null);
            }}
            required
          >
            <option value="">Select ZIP code…</option>
            {serviceAreaOptions.map(({ zip: optionZip, label }) => (
              <option key={optionZip} value={optionZip}>{optionZip} ({label})</option>
            ))}
            <option value="other">Other or not listed</option>
          </select>
        </div>

        <div>
          <label htmlFor={symptomId} className="form-label">Main symptom</label>
          <select
            id={symptomId}
            name="symptom"
            className="form-control"
            style={{ marginBottom: 0 }}
            value={symptom}
            onChange={(event) => {
              setSymptom(event.target.value);
              setResult(null);
            }}
            required
          >
            <option value="">Select a symptom…</option>
            {symptomOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>

        <button type="submit" className="coverage-submit">Check directory</button>

        <div className="coverage-result" aria-live="polite">
          {result && (
            <>
              <p style={{ margin: 0 }}>{result.message}</p>
              <Link href={requestHref} className="coverage-result-link">
                Continue to the request form
              </Link>
            </>
          )}
        </div>

        <p style={{ fontSize: "0.75rem", color: "#64748b", textAlign: "center", margin: 0 }}>
          A ZIP-directory result does not confirm a provider, appointment, price, or response time.
        </p>
      </form>
    </div>
  );
}
