import type { Metadata } from "next";
import Link from "next/link";
import { pageSocialMetadata } from "@/lib/metadata";

const title = "Privacy Policy | Tucson Leak Pros";
const description = "Read how Tucson Leak Pros handles service-request, contact and website-usage information.";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy/" },
  title,
  description,
  robots: { index: true, follow: true },
  ...pageSocialMetadata(title, description, "/privacy-policy/"),
};

const headingStyle = {
  marginTop: "2.25rem",
  marginBottom: "1rem",
  color: "var(--brand-red)",
};

const listStyle = {
  paddingLeft: "1.5rem",
  marginBottom: "1.25rem",
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <article className="container legal-card">
        <h1>Privacy Policy</h1>

        <div className="legal-content">
          <p><strong>Last updated: <time dateTime="2026-07-19">July 19, 2026</time></strong></p>

          <p>
            This Privacy Policy explains how Tucson Leak Pros (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            handles information associated with this website, service-area checks, service requests and other
            communications. This website provides information about slab-leak services and may connect a request
            with an independent local service provider. This policy applies only to this website and not to an
            independent provider&apos;s separate website, systems or privacy practices.
          </p>

          <h2 style={headingStyle}>1. Information You Provide</h2>
          <p>Depending on how you use the website or contact us, information you provide may include:</p>
          <ul style={listStyle}>
            <li>Your name and telephone number.</li>
            <li>A property ZIP code, service address or general service area.</li>
            <li>Details about suspected water loss, property symptoms, requested services or scheduling needs.</li>
            <li>The contents of messages and any other information you voluntarily provide.</li>
          </ul>
          <p>
            Do not submit government identification numbers, payment-card details, medical information or other
            sensitive information through a general service-request field. The ZIP-directory tool can evaluate a
            selected ZIP code in your browser; a directory result does not confirm an appointment or provider.
          </p>

          <h2 style={headingStyle}>2. Information Processed Automatically</h2>
          <p>
            When you visit the website, hosting, security and network providers may process technical information
            needed to deliver and protect the site. This can include an IP address, browser and device type,
            operating system, requested pages, referring page, approximate location derived from an IP address,
            timestamps and diagnostic or security events. We may receive aggregated information that does not
            directly identify an individual visitor.
          </p>

          <h2 style={headingStyle}>3. How Information May Be Used</h2>
          <p>Information may be used to:</p>
          <ul style={listStyle}>
            <li>Respond to an inquiry and evaluate requested service-area coverage.</li>
            <li>Communicate about a service request, availability or appropriate next steps.</li>
            <li>Route a request to an independent provider when referral is requested or reasonably necessary.</li>
            <li>Operate, secure, diagnose and improve the website.</li>
            <li>Prevent misuse, fraud or activity that threatens the website or its users.</li>
            <li>Maintain records and comply with applicable legal obligations.</li>
          </ul>

          <h2 style={headingStyle}>4. When Information May Be Shared</h2>
          <p>Information may be disclosed only as reasonably necessary in the following circumstances:</p>
          <ul style={listStyle}>
            <li>
              <strong>Independent service providers.</strong> Request details may be provided to an independent
              local plumbing or leak-detection provider so that provider can assess availability and respond.
            </li>
            <li>
              <strong>Website vendors.</strong> Hosting, security, communications and technical vendors may process
              information while providing services on our behalf.
            </li>
            <li>
              <strong>Legal and safety reasons.</strong> Information may be disclosed when reasonably necessary to
              comply with law, respond to valid legal process, protect rights or safety, or investigate misuse.
            </li>
            <li>
              <strong>Business changes.</strong> Information may be transferred as part of a merger, acquisition,
              financing, reorganization or sale of website-related assets, subject to applicable requirements.
            </li>
          </ul>
          <p>
            An independent provider that receives a request may handle the information under its own privacy policy
            and is responsible for its own services, communications and recordkeeping.
          </p>

          <h2 style={headingStyle}>5. Cookies and Similar Technologies</h2>
          <p>
            The website or its infrastructure may use cookies or similar technologies that are necessary for site
            delivery, security or user-requested functionality. If analytics, advertising or other optional
            technologies are introduced, this policy and any required consent controls should be updated before
            those technologies are used. See the <Link href="/cookie-policy/">Cookie Policy</Link> for additional
            information about browser controls.
          </p>

          <h2 style={headingStyle}>6. Data Retention</h2>
          <p>
            Information is retained only for as long as reasonably necessary for the purpose for which it was
            collected, including responding to requests, maintaining operational records, resolving disputes,
            preventing abuse and meeting legal obligations. Retention periods can vary according to the type of
            information and the reason it is held. Independent providers determine their own retention periods.
          </p>

          <h2 style={headingStyle}>7. Data Security</h2>
          <p>
            Reasonable administrative and technical safeguards are used to reduce the risk of unauthorized access,
            loss, alteration or disclosure. No internet transmission or storage method is completely secure, so
            absolute security cannot be guaranteed. Do not use this website to report an immediate threat to life,
            electrical safety or property safety; contact the appropriate emergency service instead.
          </p>

          <h2 style={headingStyle}>8. Your Choices and Privacy Requests</h2>
          <p>
            You may ask about personal information associated with your request or request correction or deletion,
            subject to identity verification and applicable recordkeeping requirements. Depending on where you live,
            additional privacy rights may apply. Browser settings can be used to control cookies, although blocking
            necessary technologies may affect site operation.
          </p>

          <h2 style={headingStyle}>9. Children&apos;s Privacy</h2>
          <p>
            This website is intended for adults seeking property-service information and is not directed to children
            under 13. We do not knowingly request personal information from children under 13. A parent or guardian
            who believes a child submitted information should contact us so the request can be reviewed.
          </p>

          <h2 style={headingStyle}>10. Third-Party Websites</h2>
          <p>
            Links to external websites are provided for convenience or supporting information. We do not control
            those websites and this Privacy Policy does not apply to them. Review the privacy notice of any external
            website before providing information.
          </p>

          <h2 style={headingStyle}>11. Changes to This Policy</h2>
          <p>
            This policy may be updated when website practices, services or legal requirements change. The revised
            version will be posted on this page and identified by a new &ldquo;Last updated&rdquo; date. Material
            changes should be communicated through the website when appropriate.
          </p>

          <h2 style={headingStyle}>12. Contact</h2>
          <p>
            Questions or privacy requests can be submitted through the <Link href="/contact/">contact page</Link>.
            Include enough information to identify the relevant communication, but do not send sensitive personal
            information through a general inquiry.
          </p>
        </div>
      </article>
    </main>
  );
}
