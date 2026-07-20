"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, ChevronDown, Info, MapPin } from "lucide-react";
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
    <div className="form-card zip-checker-card">
      <div className="zip-checker-header">
        <span className="zip-checker-kicker">
          <MapPin aria-hidden="true" />
          Tucson service area
        </span>
        <h3>Check Service Availability</h3>
        <p>Select the property ZIP and main symptom to see the appropriate next step.</p>
      </div>

      <form onSubmit={handleZipCheck} className="zip-checker-form">
        <div className="zip-checker-field">
          <label htmlFor={zipId} className="zip-checker-label">
            Property ZIP code <span aria-hidden="true">*</span>
          </label>
          <div className="zip-checker-select-wrap">
            <select
              id={zipId}
              name="zip"
              className="zip-checker-control"
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
            <ChevronDown className="zip-checker-select-icon" aria-hidden="true" />
          </div>
        </div>

        <div className="zip-checker-field">
          <label htmlFor={symptomId} className="zip-checker-label">
            Main symptom <span aria-hidden="true">*</span>
          </label>
          <div className="zip-checker-select-wrap">
            <select
              id={symptomId}
              name="symptom"
              className="zip-checker-control"
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
            <ChevronDown className="zip-checker-select-icon" aria-hidden="true" />
          </div>
        </div>

        <button type="submit" className="coverage-submit">
          Check Availability
          <ArrowRight aria-hidden="true" />
        </button>

        <div className="coverage-live-region" aria-live="polite">
          {result ? (
            <div className={`coverage-result ${result.covered ? "coverage-result-covered" : "coverage-result-review"}`}>
              {result.covered ? <CheckCircle2 aria-hidden="true" /> : <AlertCircle aria-hidden="true" />}
              <div>
                <p>{result.message}</p>
                <Link href={requestHref} className="coverage-result-link">
                  Continue to the request form
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          ) : null}
        </div>

        <p className="zip-checker-disclaimer">
          <Info aria-hidden="true" />
          ZIP results are preliminary. Address-level availability must still be confirmed.
        </p>
      </form>
    </div>
  );
}
