import { ShieldCheck, Award, ThumbsUp, CheckCircle, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--dark-charcoal)", color: "var(--white)", padding: "4rem 0 2rem 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
        
        {/* Brand Column */}
        <div style={{ gridColumn: "1 / -1", marginBottom: "1rem" }}>
          <div style={{ fontSize: "1.75rem", fontWeight: "900", letterSpacing: "-1px", marginBottom: "1rem" }}>
            TUCSON<span style={{ color: "var(--brand-red)" }}>LEAK</span>PROS
          </div>
          <p style={{ fontSize: "0.95rem", color: "#a1a1aa", maxWidth: "400px", marginBottom: "1.5rem" }}>
            Hidden water-line detection and slab leak repair services across Tucson and surrounding communities.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
             <a href="tel:5205550199" className="btn-primary" style={{ padding: "0.75rem 1.25rem", fontSize: "0.85rem" }}>CALL NOW</a>
             <a href="/contact/" className="btn-secondary" style={{ padding: "0.75rem 1.25rem", fontSize: "0.85rem" }}>REQUEST LEAK DETECTION</a>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 style={{ color: "var(--white)", marginBottom: "1rem", fontSize: "1.1rem" }}>SLAB LEAK SERVICES</h4>
          <ul style={{ listStyle: "none", fontSize: "0.9rem", color: "#a1a1aa", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><a href="/how-slab-leak-detection-works/" style={{ color: "inherit", textDecoration: "none" }}>Slab Leak Detection</a></li>
            <li><a href="/slab-leak-repair-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Slab Leak Repair</a></li>
            <li><a href="/emergency-slab-leak-service-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Emergency Slab Leak Service</a></li>
            <li><a href="/electronic-leak-detection-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Electronic Leak Detection</a></li>
            <li><a href="/under-slab-pipe-repair-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Under-Slab Pipe Repair</a></li>
            <li><a href="/water-line-rerouting-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Water-Line Rerouting</a></li>
            <li><a href="/water-line-pressure-testing-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Pressure Testing</a></li>
            <li><a href="/partial-repiping-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Partial Repiping</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h4 style={{ color: "var(--white)", marginBottom: "1rem", fontSize: "1.1rem" }}>HELPFUL RESOURCES</h4>
          <ul style={{ listStyle: "none", fontSize: "0.9rem", color: "#a1a1aa", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><a href="/signs-of-a-slab-leak/" style={{ color: "inherit", textDecoration: "none" }}>Signs of a Slab Leak</a></li>
            <li><a href="/hot-water-slab-leak-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Hot-Water Slab Leaks</a></li>
            <li><a href="/cold-water-slab-leak-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Cold-Water Slab Leaks</a></li>
            <li><a href="/slab-leak-repair-cost-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Slab Leak Repair Cost</a></li>
            <li><a href="/slab-leak-vs-foundation-problem/" style={{ color: "inherit", textDecoration: "none" }}>Slab Leak vs. Foundation Problem</a></li>
            <li><a href="/how-slab-leak-detection-works/" style={{ color: "inherit", textDecoration: "none" }}>How Detection Works</a></li>
            <li><a href="/slab-leak-faq/" style={{ color: "inherit", textDecoration: "none" }}>Slab Leak FAQ</a></li>
            <li><a href="/blog/" style={{ color: "inherit", textDecoration: "none" }}>Our Blog</a></li>
          </ul>
        </div>

        {/* Areas Column */}
        <div>
          <h4 style={{ color: "var(--white)", marginBottom: "1rem", fontSize: "1.1rem" }}>AREAS WE SERVE</h4>
          <ul style={{ listStyle: "none", fontSize: "0.9rem", color: "#a1a1aa", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><a href="/service-areas/central-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Central Tucson</a></li>
            <li><a href="/service-areas/north-tucson/" style={{ color: "inherit", textDecoration: "none" }}>North Tucson</a></li>
            <li><a href="/service-areas/east-tucson/" style={{ color: "inherit", textDecoration: "none" }}>East Tucson</a></li>
            <li><a href="/service-areas/south-tucson/" style={{ color: "inherit", textDecoration: "none" }}>South Tucson</a></li>
            <li><a href="/service-areas/west-tucson/" style={{ color: "inherit", textDecoration: "none" }}>West Tucson</a></li>
            <li><a href="/service-areas/catalina-saddlebrooke/" style={{ color: "inherit", textDecoration: "none" }}>Saddlebrooke</a></li>
            <li><a href="/service-areas/southwest-tucson/" style={{ color: "inherit", textDecoration: "none" }}>Southwest Tucson</a></li>
            <li><a href="/service-areas/oro-valley/" style={{ color: "inherit", textDecoration: "none" }}>Oro Valley</a></li>
            <li><a href="/service-areas/catalina-foothills/" style={{ color: "inherit", textDecoration: "none" }}>Catalina Foothills</a></li>
            <li><a href="/service-areas/rita-ranch/" style={{ color: "inherit", textDecoration: "none" }}>Rita Ranch</a></li>
            <li><a href="/service-areas/" style={{ color: "inherit", textDecoration: "underline" }}>View All Service Areas</a></li>
          </ul>
        </div>

        {/* Get Help Column */}
        <div>
          <h4 style={{ color: "var(--white)", marginBottom: "1rem", fontSize: "1.1rem" }}>GET HELP</h4>
          <ul style={{ listStyle: "none", fontSize: "0.9rem", color: "#a1a1aa", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><a href="/contact/" style={{ color: "inherit", textDecoration: "none" }}>Request Leak Detection</a></li>
            <li><a href="/contact/" style={{ color: "inherit", textDecoration: "none" }}>Contact Us</a></li>
            <li><a href="/how-slab-leak-detection-works/" style={{ color: "inherit", textDecoration: "none" }}>How It Works</a></li>
            <li><a href="/service-areas/" style={{ color: "inherit", textDecoration: "none" }}>Check Service Availability</a></li>
            <li><a href="tel:5205550199" style={{ color: "inherit", textDecoration: "none" }}>Call Now</a></li>
            <li style={{ marginTop: "1rem", color: "var(--white)" }}><strong>Phone:</strong> (520) 555-0199</li>
            <li style={{ color: "var(--white)" }}>4751 S Irving Ave, Tucson, AZ 85714, United States</li>
            <li style={{ color: "var(--white)" }}><strong>Hours:</strong> 7:00 AM - 7:00 PM</li>
          </ul>
        </div>

      </div>
      
      {/* Trust Badges */}
      <div className="container" style={{ borderTop: "1px solid #3f3f46", paddingTop: "2rem", paddingBottom: "1rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", alignItems: "center", color: "var(--white)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><ShieldCheck size={28} color="var(--brand-red)" /><span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Licensed & Insured</span></div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Award size={28} color="var(--brand-red)" /><span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>BBB Accredited</span></div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Star size={28} color="var(--brand-red)" /><span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>5-Star Rated</span></div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><ThumbsUp size={28} color="var(--brand-red)" /><span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>HomeAdvisor Pro</span></div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><CheckCircle size={28} color="var(--brand-red)" /><span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>100% Satisfaction</span></div>
      </div>

      {/* Sub Footer */}
      <div className="container" style={{ borderTop: "1px solid #3f3f46", paddingTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.8rem", color: "#71717a", textAlign: "center" }}>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <a href="/contact/" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
          <a href="/contact/" style={{ color: "inherit", textDecoration: "none" }}>Terms and Conditions</a>
          <a href="/contact/" style={{ color: "inherit", textDecoration: "none" }}>Service Disclaimer</a>
          <a href="/contact/" style={{ color: "inherit", textDecoration: "none" }}>Accessibility</a>
          <a href="/contact/" style={{ color: "inherit", textDecoration: "none" }}>Cookie Policy</a>
          <a href="/sitemap.xml" style={{ color: "inherit", textDecoration: "none" }}>Sitemap</a>
        </div>

        <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.5" }}>
          Tucson Slab Leak Detection is a service connection website.<br/>
          Requests may be referred to an independent local plumbing provider.
        </p>

        <p>&copy; 2026 Tucson Slab Leak Detection. All rights reserved.</p>
      </div>
    </footer>
  );
}
