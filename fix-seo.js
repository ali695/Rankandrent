const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\user\\.gemini\\antigravity\\scratch\\nicheflow-nextjs\\src\\app\\service-areas';

const pages = [
  {
    folder: 'north-tucson',
    localContext: `              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                A large percentage of homes built in North Tucson and Casas Adobes between 1985 and 2010 were constructed on post-tension concrete slabs. These foundations are reinforced with steel cables stretched under immense pressure.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                If a <strong>plumber</strong> guesses the location of a leak and hits one of these cables with a jackhammer, it can cause catastrophic structural damage to your home. That's why we use highly calibrated acoustic listeners and electronic pressure testing to map out exactly where the leak is occurring.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                For homes with post-tension slabs or aging polybutylene pipes, we frequently recommend <strong>water line rerouting</strong> through the walls or attic to completely avoid the dangers of concrete excavation altogether.
              </p>`
  },
  {
    folder: 'east-tucson',
    localContext: `              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                East Tucson experienced a massive housing boom from the 1960s through the 1980s. The sprawling ranch-style homes built during this era have long, uninterrupted runs of soft copper pipe buried beneath the foundation.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Because these homes sit on larger lots, the first step is always determining if the leak is actually beneath your living room floor, or if it is on the main water service line running through your front yard. We utilize advanced line isolation testing to definitively prove where the water is escaping.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                When a leak is confirmed under the slab, we frequently recommend abandoning the degraded copper entirely. Jackhammering a long trench across a wide ranch home is incredibly disruptive. Instead, routing a flexible PEX line through the home's attic is a permanent, clean solution that protects your flooring.
              </p>`
  },
  {
    folder: 'south-tucson',
    localContext: `              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Many properties in South Tucson were built in the 1940s through the 1970s. It is incredibly common to find original galvanized steel supply lines that are heavily corroded, sometimes patched together with sections of copper from past renovations. 
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                When these older, mixed-material systems are buried beneath a concrete slab, finding a leak without destroying the floor requires highly sensitive acoustic equipment. Our technicians are trained to trace these older lines and distinguish between an active leak and normal pipe reverberation.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Because the plumbing is often past its lifespan, we frequently recommend partial or full water line rerouting. Installing a new PEX plumbing system in the walls or attic prevents you from having to tear up your slab again when the next section of old pipe inevitably fails.
              </p>`
  },
  {
    folder: 'west-tucson',
    localContext: `              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                West Tucson is renowned for its rocky soil and thick layers of caliche. Because caliche acts like natural concrete, water from a leaking pipe often cannot drain down into the earth. Instead, it travels sideways, surfacing yards away from the actual broken pipe.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Additionally, many homes near Starr Pass or the Tucson Mountains feature custom, split-level foundations. Plumbing routes in these homes are complex. Before any jackhammers are brought in, we perform rigorous isolation testing to confirm exactly which line is compromised.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                For rural properties further west, such as Picture Rocks, high water usage might actually be caused by a long exterior yard line failing, rather than an under-slab leak. We trace these lines accurately to save you money on unnecessary indoor repairs.
              </p>`
  },
  {
    folder: 'oro-valley',
    localContext: `              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Oro Valley saw massive residential growth during the 1990s and early 2000s. While these homes are beautiful, many were built using Polybutylene pipes—a material that is now known to become brittle and rupture without warning. If your home is from this era, a sudden spike in your water bill should not be ignored.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Furthermore, upscale properties in Rancho Vistoso often feature large, post-tension concrete slabs. Randomly jackhammering into these slabs to chase a leak is incredibly dangerous. We use precision electronic detection to locate the water loss before a single tool touches your floor.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Our primary goal in Oro Valley is preservation. We frequently utilize advanced pipe rerouting to bypass broken lines entirely, running clean PEX tubing through attics and walls to ensure your travertine, hardwood, and custom tile remain pristine.
              </p>`
  },
  {
    folder: 'catalina-foothills',
    localContext: `              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Building a luxury home into the Santa Catalina Mountains involves excavating solid rock and pouring stepped, multi-level concrete foundations. When a plumbing line ruptures beneath these massive slabs, the water will take the path of least resistance through the bedrock, frequently showing up on the opposite side of the house from the actual leak.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Because of the immense value of custom flooring, jackhammering to find a leak through trial and error is completely unacceptable. We use highly calibrated ground microphones and thermal imaging to verify the exact failure point.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                In almost all Foothills cases, we recommend a clean pipe reroute. By disconnecting the compromised underground line and routing a new water line through the attic and interior walls, we leave your foundation and flooring untouched.
              </p>`
  },
  {
    folder: 'rita-ranch',
    localContext: `              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                The rapid development of Rita Ranch in the 1990s means most homes share a similar structural profile: post-tension concrete slabs. These slabs are crisscrossed with high-tension steel cables. Hitting one of these cables with a jackhammer while blindly searching for a water leak is incredibly dangerous and can ruin the foundation.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Coupled with this is the era's heavy use of Polybutylene (PB) piping. This specific type of plastic pipe is now known to fail catastrophically as it ages. When a PB pipe ruptures under a post-tension slab, you need a plumbing team that understands both the material risks and the structural dangers.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                We use precise acoustic listeners to pinpoint the exact failure location. Once confirmed, we almost always recommend bypassing the slab entirely and installing a brand new, reliable PEX water line through the attic to secure your home's water supply permanently.
              </p>`
  },
  {
    folder: 'southwest-tucson',
    localContext: `              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Many neighborhoods in Southwest Tucson, particularly around Drexel Heights and Valencia West, sit on soils with higher clay content than other parts of the valley. When this soil gets wet during monsoon season, it expands violently. When it dries, it shrinks.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                This constant heaving and settling causes concrete foundations to crack and shift over time. Rigid copper plumbing pipes encased in this moving concrete simply cannot handle the stress, eventually bending, cracking, or snapping entirely beneath your floor.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Because ground movement is the underlying cause for many leaks in this area, we frequently advise against digging into the slab for a direct repair. A patched pipe is still encased in moving concrete. Instead, we advocate for rerouting a new, highly flexible PEX water line through the attic, keeping your plumbing safe from future foundation shifts.
              </p>`
  },
  {
    folder: 'catalina-saddlebrooke',
    localContext: `              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Many residents in SaddleBrooke and Sun City have beautifully appointed homes with expensive tile or wood floors. The last thing you want is a plumbing company dragging jackhammers through your living room and creating clouds of concrete dust.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                Our approach is entirely centered around preservation and cleanliness. By utilizing highly sensitive acoustic equipment and thermal imaging, we verify the exact location of the leak beneath the slab without causing any damage.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#4a4a4a", marginBottom: "1rem", lineHeight: "1.7" }}>
                To protect your home's interior, we strongly advocate for clean pipe rerouting. Instead of breaking your floor to fix a deteriorating copper pipe, we disconnect it entirely. Our technicians will carefully route a new, flexible PEX water line through your attic space. It is a quiet, clean, and permanent solution that respects your home.
              </p>`
  }
];

const seoReplacements = [
  { regex: /<p[^>]*>.*We provide professional <strong>slab leak detection in.*?\n.*?<\/p>/gm, replace: '<p style={{ textAlign: "center", color: "#4a4a4a", marginBottom: "3rem", maxWidth: "800px", margin: "0 auto 3rem" }}>\n              We provide professional <strong>slab leak detection across the area</strong>. Our service area covers the main communities seamlessly.\n            </p>' },
  { regex: /<h2[^>]*>What We Know About[^<]*<\/h2>\s*<p[^>]*>[\s\S]*?(?=<\/div>)/m, replace: 'REPLACE_LOCAL_CONTEXT' },
  { regex: /warm tile floor leak detection in \w+ \w+/g, replace: 'expert leak detection' },
  { regex: /under-slab pipe repair \w+ \w+/g, replace: 'under-slab pipe repair' },
  { regex: /slab leak repair in ZIP codes [\d\s]+/g, replace: 'slab leak repair' },
  { regex: /Water-line rerouting for a \w+ \w+ home/g, replace: 'Water-line rerouting' },
  { regex: /water leak detection \w+ \w+/g, replace: 'water leak detection' }
];

pages.forEach(page => {
  const filePath = path.join(baseDir, page.folder, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    seoReplacements.forEach(replacement => {
      if (replacement.replace === 'REPLACE_LOCAL_CONTEXT') {
        const titleRegex = /<h2[^>]*>What We Know About[^<]*<\/h2>/;
        const titleMatch = content.match(titleRegex);
        if (titleMatch) {
          const title = titleMatch[0];
          content = content.replace(/<h2[^>]*>What We Know About[^<]*<\/h2>\s*<p[^>]*>[\s\S]*?(?=<\/div>)/, title + '\n' + page.localContext + '\n            ');
        }
      } else {
        content = content.replace(replacement.regex, replacement.replace);
      }
    });

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Processed', page.folder);
  }
});
