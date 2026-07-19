import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="container not-found-content">
        <p className="not-found-code">404</p>
        <h1>Page Not Found</h1>
        <p>
          The page may have moved, or the address may be incorrect. Use the main
          service directory or return to the homepage.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="btn-primary">Return Home</Link>
          <Link href="/services/" className="btn-secondary">View Services</Link>
        </div>
      </div>
    </main>
  );
}
