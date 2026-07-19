import { blogArticleExpansions } from "@/data/blogArticleExpansions";

export type BlogTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: BlogTable;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogContextLink = {
  href: string;
  label: string;
  description: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  published: string;
  updated: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  primaryKeyword: string;
  relatedService: { href: string; label: string };
  relatedArea?: { href: string; label: string };
  keyTakeaways: string[];
  sections: BlogSection[];
  contextualLinks: BlogContextLink[];
  faqs: BlogFaq[];
};

const publicationDate = "July 19, 2026";

const baseBlogArticles: Omit<BlogArticle, "contextualLinks">[] = [
  {
    slug: "understanding-slab-leaks",
    title: "Understanding Slab Leaks: A Tucson Homeowner’s Guide",
    description: "Learn what a slab leak is, why it happens, which warning signs matter, how plumbers test the system, and how repair options are compared.",
    category: "Pillar Guide",
    published: publicationDate,
    updated: publicationDate,
    readTime: "9 min read",
    heroImage: "/images/blog/understanding-slab-leaks.png",
    heroAlt: "Cutaway of water pipes beneath a tiled concrete slab in a Tucson home",
    primaryKeyword: "slab leak guide Tucson",
    relatedService: { href: "/slab-leak-detection-tucson", label: "Slab Leak Detection" },
    keyTakeaways: [
      "A slab leak is a pressurized water-line failure beneath or within a concrete foundation.",
      "Warm flooring, unexplained water use, damp finishes, and running-water sounds justify testing but do not identify the source by themselves.",
      "Detection normally combines visible checks, meter observation, line isolation, pressure testing, and locating equipment.",
      "Direct repair, rerouting, and partial repiping solve different pipe and access problems."
    ],
    sections: [
      {
        id: "what-is-a-slab-leak",
        title: "What Is a Slab Leak?",
        paragraphs: [
          "A slab leak occurs when a pressurized hot- or cold-water pipe fails beneath or inside a concrete slab. Water may remain hidden below the floor, travel along the pipe trench, or appear at a baseboard or foundation edge far from the damaged section.",
          "The phrase describes the location of the plumbing problem, not its cause. Corrosion, abrasion, stressed joints, installation defects, pressure, or movement can contribute. A symptom alone cannot show which cause applies to a particular home."
        ],
        table: {
          caption: "Common observations and what they can mean",
          headers: ["Observation", "Possible explanation", "Useful next check"],
          rows: [
            ["Warm strip across tile", "Hot-water line, sunlight, duct or appliance heat", "Isolate the hot-water system"],
            ["Meter moves with fixtures off", "Plumbing, irrigation, pool or appliance use", "Shut off each possible source"],
            ["Damp baseboard", "Slab, wall, roof, drain or exterior moisture", "Trace moisture and test supply lines"],
            ["Pressure drops suddenly", "Active line failure or utility issue", "Check neighbors, meter and private plumbing"]
          ]
        }
      },
      {
        id: "how-detection-works",
        title: "How Slab-Leak Detection Works",
        paragraphs: [
          "A responsible inspection begins with evidence. The technician reviews the timing and location of symptoms, checks accessible fixtures and exterior systems, observes the meter, and determines whether the property actually has unexplained water flow.",
          "If water loss remains likely, hot and cold systems can be isolated and pressure-tested. Acoustic listening, line tracing, thermal imaging, and moisture measurements may then narrow the suspected route. No single tool guarantees a precise result in every floor assembly."
        ],
        bullets: [
          "Rule out toilets, irrigation, pools, appliances, and visible service lines.",
          "Confirm repeatable water or pressure loss.",
          "Identify the affected hot, cold, exterior, or branch system.",
          "Use locating tools after the system has been narrowed."
        ]
      },
      {
        id: "repair-options",
        title: "How Repair Options Are Compared",
        paragraphs: [
          "Direct access can make sense for one well-located failure when the surrounding pipe appears serviceable and the floor can be restored reasonably. Rerouting bypasses the failed run through walls, ceilings, a garage, an attic, or another approved path. Partial repiping replaces a larger branch when repeated failures make another spot repair poor value.",
          "The estimate should define the pipe route, material, shutoff time, testing, permits, concrete closure, drywall work, flooring exclusions, and warranty terms. The least disruptive option is not automatically the least expensive or the best long-term choice."
        ]
      }
    ],
    faqs: [
      { question: "Can a slab leak be confirmed from a warm floor?", answer: "No. A warm floor is a useful clue, but sunlight, ductwork, appliances, and recirculation systems can also create warmth. Hot-line isolation and pressure testing provide stronger evidence." },
      { question: "Does detection always require opening the floor?", answer: "Often the system and suspected area can be narrowed without demolition. Limited access may still be needed for confirmation or repair when readings are unclear or conditions are complex." },
      { question: "Should the main water be shut off?", answer: "Shut it off from a safe location when water is actively spreading, pressure drops suddenly, or damage is increasing. A non-emergency symptom can usually be assessed before a prolonged whole-house shutdown." },
      { question: "Which repair method is best?", answer: "It depends on pipe condition, failure history, access, finished surfaces, route length, and the fixtures served. A written comparison should explain those trade-offs." }
    ]
  },
  {
    slug: "signs-of-a-slab-leak-tucson",
    title: "15 Signs of a Slab Leak Tucson Homeowners Should Not Ignore",
    description: "A practical guide to warm floors, moving meters, damp finishes, running-water sounds, pressure changes, and the situations that require urgent action.",
    category: "Detection Guide",
    published: publicationDate,
    updated: publicationDate,
    readTime: "8 min read",
    heroImage: "/images/blog/slab-leak-signs.png",
    heroAlt: "Homeowner noticing a damp baseboard and warm tiled floor",
    primaryKeyword: "signs of a slab leak Tucson",
    relatedService: { href: "/signs-of-a-slab-leak", label: "Signs of a Slab Leak" },
    keyTakeaways: ["One symptom rarely proves a slab leak.", "Meter movement with controlled water use is stronger evidence than a high bill alone.", "Warmth usually points toward a hot-water system but has several non-plumbing causes.", "Spreading water and electrical exposure require immediate safety action."],
    sections: [
      {
        id: "strongest-warning-signs",
        title: "The Strongest Warning Signs",
        paragraphs: [
          "The most useful signs are repeatable and connected to water use. Examples include a meter that continues registering flow after fixtures and outdoor systems are off, a hot-water system that loses pressure, or a water heater that cycles when no hot water is being used.",
          "Visible symptoms can include a warm path across tile, damp carpet edges, darkened grout, swelling baseboards, moisture near the foundation, or water emerging through a floor joint. Sounds of water movement and a sudden pressure change add context."
        ],
        table: {
          caption: "Fifteen observations worth investigating",
          headers: ["Group", "Signs"],
          rows: [
            ["Water use", "Moving meter; high-use alert; unexplained bill increase"],
            ["Floor and finishes", "Warm tile; damp carpet; dark grout; swollen baseboard; musty odor"],
            ["Plumbing behavior", "Pressure loss; heater cycling; delayed hot water; running-water sound"],
            ["Exterior clues", "Moisture at slab edge; unexplained wet soil; water entering an adjoining room"]
          ]
        }
      },
      {
        id: "lookalike-problems",
        title: "Problems That Can Look Like a Slab Leak",
        paragraphs: [
          "Running toilets, irrigation valves, pool autofill, appliance connections, water softeners, evaporative-cooler feeds, roof leaks, drains, and exterior grading can create similar bills or moisture. Warm floors may also reflect sunlight or ductwork.",
          "A useful diagnosis separates these sources before under-slab work is discussed. That prevents a homeowner from paying for specialized locating when a visible fixture or exterior line is responsible."
        ]
      },
      {
        id: "urgent-or-scheduled",
        title: "When the Situation Is Urgent",
        paragraphs: [
          "Treat the situation as urgent when water is actively spreading, pressure has dropped sharply, the main supply must remain off, or moisture is near electrical equipment. Keep people away from wet electrical areas and shut off water only from a safe location.",
          "A slowly changing bill, occasional sound, or isolated warm spot still deserves investigation, but it may be scheduled after simple fixture and meter checks."
        ]
      }
    ],
    faqs: [
      { question: "Is a high water bill enough to prove a slab leak?", answer: "No. Seasonal use, irrigation, pools, guests, toilets, and billing periods can change consumption. Compare usage and perform a controlled meter check." },
      { question: "Can a cold-water leak make the floor warm?", answer: "Normally it does not create a distinct heated area. Cold-water leaks are more often noticed through meter movement, dampness, pressure loss, or sound." },
      { question: "Can water appear far from the failed pipe?", answer: "Yes. Water can follow a pipe trench, crack, floor joint, or slope before becoming visible." },
      { question: "What should I document before an inspection?", answer: "Record when symptoms occur, photograph moisture, save high-use alerts, note meter movement, and list irrigation, pool, appliance, and water-heater behavior." }
    ]
  },
  {
    slug: "high-water-bill-no-visible-leak-tucson",
    title: "High Tucson Water Bill but No Visible Leak? Start Here",
    description: "Learn how to separate normal usage changes, irrigation, toilets, pools, service-line loss, and hidden interior plumbing problems.",
    category: "Water Use",
    published: publicationDate,
    updated: publicationDate,
    readTime: "7 min read",
    heroImage: "/images/blog/water-meter-bill.png",
    heroAlt: "Tucson water bill beside a residential water meter",
    primaryKeyword: "high water bill Tucson no visible leak",
    relatedService: { href: "/water-line-pressure-testing-tucson", label: "Water-Line Pressure Testing" },
    keyTakeaways: ["Compare gallons or CCF, not only the dollar total.", "Control outdoor and automatic water uses before checking the meter.", "A continuously moving meter confirms flow, not its location.", "Pressure testing becomes useful after visible and exterior sources are excluded."],
    sections: [
      { id: "read-the-bill", title: "Confirm That Usage Actually Increased", paragraphs: ["Rates, billing-cycle length, seasonal irrigation, pool filling, guests, and estimated readings can affect the total. Compare consumption units with the same period last year and recent months.", "If usage increased, identify automatic systems that can run unnoticed. Irrigation, pool autofill, softeners, toilets, and evaporative cooling are common places to begin."], table: { caption: "High-bill checklist", headers: ["Possible reason", "What to review", "Next step"], rows: [["Billing change", "Days, rates and actual usage", "Contact the utility if figures look wrong"], ["Outdoor use", "Irrigation and pool schedule", "Turn systems off for a controlled test"], ["Fixture leak", "Toilets and appliances", "Isolate or repair the source"], ["Hidden line", "Meter flow with sources off", "Request system testing"]] } },
      { id: "controlled-meter-check", title: "Perform a Controlled Meter Check", paragraphs: ["Stop intentional water use and ensure automatic systems will not start. Record the meter, wait without using water, and check it again. Digital indicators and analog dials vary, so use the utility’s instructions for that meter.", "Movement means water passed through the meter during the test. It does not by itself distinguish a toilet, irrigation line, exterior service line, wall pipe, or under-slab line."], bullets: ["Do not turn off equipment unsafely.", "Repeat the test if an automatic system may have operated.", "Record the time and meter reading.", "Use isolation valves only when their purpose and condition are known."] },
      { id: "when-to-test-lines", title: "When Plumbing Pressure Testing Helps", paragraphs: ["If visible fixtures and outdoor systems are excluded, a plumber can test interior hot and cold plumbing separately. A stable test makes an active pressurized leak less likely in that isolated system; repeatable pressure loss supports further locating.", "The meter-to-house line may need its own evaluation. Utility responsibility varies, so confirm which side of the meter is involved before authorizing private repair."] }
    ],
    faqs: [
      { question: "Can a toilet cause a large bill without being heard?", answer: "Yes. Intermittent flapper or fill-valve problems can pass water quietly and may not run during a brief inspection." },
      { question: "Does a moving meter mean the leak is under the slab?", answer: "No. It only confirms flow through the meter while the test conditions were in place." },
      { question: "Should I ask for a bill adjustment?", answer: "Ask your utility about its current policy and required repair documentation. Eligibility and procedures vary." },
      { question: "What information helps the plumber?", answer: "Bring usage history, alert dates, meter-test results, irrigation and pool schedules, and any locations with sound, warmth, or moisture." }
    ]
  },
  {
    slug: "how-to-check-water-meter-hidden-leak",
    title: "How to Check Your Water Meter for a Hidden Leak",
    description: "A safe, step-by-step residential meter check and an explanation of what movement can—and cannot—tell you about hidden water use.",
    category: "DIY Check",
    published: publicationDate,
    updated: publicationDate,
    readTime: "6 min read",
    heroImage: "/images/blog/water-meter-bill.png",
    heroAlt: "Close view of a residential water meter being checked for continuous flow",
    primaryKeyword: "water meter leak test Tucson",
    relatedService: { href: "/water-line-pressure-testing-tucson", label: "Pressure Testing" },
    keyTakeaways: ["Stop all intentional and automatic water use first.", "Record the meter rather than relying on memory.", "Movement confirms flow but not the source.", "Do not operate an unfamiliar or damaged valve."],
    sections: [
      { id: "prepare", title: "Prepare the Property", paragraphs: ["Tell everyone not to use faucets, toilets, showers, appliances, or outdoor water during the test. Pause irrigation and pool autofill if it can be done safely, and note whether a softener or other automatic device is scheduled.", "Locate the correct meter and avoid opening utility equipment beyond normal customer access. Meter types differ; some show a plus symbol or flow icon, while others use a low-flow dial."], bullets: ["Choose a quiet testing period.", "Confirm no appliance is filling or draining.", "Photograph the starting display.", "Wait long enough to observe slow flow."] },
      { id: "interpret", title: "Interpret the Result Carefully", paragraphs: ["No movement during a controlled test means there was no continuous metered flow at that time. It does not rule out an intermittent toilet, irrigation valve, appliance, or leak that appears only under certain conditions.", "Movement confirms water passed through the meter. Isolate obvious sources one at a time where safe and repeat the observation. Avoid guessing that the problem is beneath the slab."], table: { caption: "Meter observations", headers: ["Result", "Meaning", "Next action"], rows: [["No movement", "No continuous flow during test", "Check intermittent sources and monitor"], ["Slow movement", "Small ongoing use or leak", "Isolate fixtures and automatic systems"], ["Rapid movement", "Significant active use or loss", "Check for damage and shut off safely if needed"], ["Movement stops at main shutoff", "Loss is likely on the property side downstream", "Arrange plumbing diagnosis"]] } },
      { id: "professional-testing", title: "When to Move Beyond the Meter", paragraphs: ["If the meter repeatedly moves after visible and automatic uses are excluded, professional line isolation can separate the private service line, hot-water system, cold-water system, and individual branches where valves allow.", "Pressure and locating tests should follow the evidence. The meter is a screening tool, not a device that pinpoints a failed pipe."] }
    ],
    faqs: [
      { question: "How long should I watch the meter?", answer: "Long enough to detect slow flow without any intentional or automatic use. The appropriate interval depends on the meter display and suspected rate; repeating the test is often more useful than one brief glance." },
      { question: "Can I close the utility meter valve?", answer: "Use only valves you are authorized and competent to operate. Utility rules vary, and old valves can fail. Contact the utility or a plumber when uncertain." },
      { question: "Why did the meter move only once?", answer: "A toilet, ice maker, softener, pool, irrigation system, or pressure change may operate intermittently. Review automatic equipment schedules." },
      { question: "Does a digital alert prove a leak?", answer: "No. It reports unusual or continuous use. Normal activities such as pool filling or a hose can also trigger an alert." }
    ]
  },
  {
    slug: "warm-floor-no-visible-water",
    title: "Warm Floor but No Visible Water: Is It a Slab Leak?",
    description: "Understand why flooring becomes warm, how a hot-water leak differs from sunlight or duct heat, and which tests provide useful evidence.",
    category: "Symptoms",
    published: publicationDate,
    updated: publicationDate,
    readTime: "6 min read",
    heroImage: "/images/blog/thermal-detection.png",
    heroAlt: "Thermal camera showing a warm path across tile flooring",
    primaryKeyword: "warm floor slab leak",
    relatedService: { href: "/hot-water-slab-leak-tucson", label: "Hot-Water Slab Leaks" },
    keyTakeaways: ["A warm floor is a clue, not a diagnosis.", "A hot-water leak often creates repeatable warmth and heater activity.", "Sunlight, ducts, appliances, and recirculation can mimic the pattern.", "Thermal imaging must be combined with system testing."],
    sections: [
      { id: "why-floors-warm", title: "Why a Floor Can Feel Warm", paragraphs: ["Leaking hot water can transfer heat through soil, concrete, mortar, and tile. The warm area may follow the pipe route or spread beyond it, and visible moisture may never reach the surface.", "Non-leak sources include direct sun, warm air ducts, refrigerators, dishwashers, radiant systems, and hot-water recirculation. Compare timing and shape instead of relying on touch alone."], table: { caption: "Warm-floor patterns", headers: ["Pattern", "Possible source", "Check"], rows: [["Warm when sun reaches floor", "Solar gain", "Compare shaded times"], ["Warm near appliance", "Normal equipment heat", "Observe operating cycle"], ["Warm with heater cycling", "Possible hot-line loss", "Isolate hot system"], ["Long narrow path", "Pipe or duct route", "Compare plan and test results"]] } },
      { id: "useful-tests", title: "Tests That Add Evidence", paragraphs: ["Close the hot-water supply only when the valve is known to be safe and observe whether meter flow or warmth changes. A plumber can isolate and pressure-test the system without relying on temperature alone.", "Thermal imaging shows surface temperature differences, not the pipe break itself. Acoustic and line-tracing information can refine the suspected route after loss is confirmed."] },
      { id: "next-steps", title: "What to Do Next", paragraphs: ["Document the boundaries and timing of the warm area. Note whether the water heater runs unexpectedly, whether the meter moves, and whether pressure or hot-water delivery has changed.", "If water begins spreading or finishes are deteriorating, shut off the supply safely and request urgent help. Otherwise, schedule testing before anyone removes tile."] }
    ],
    faqs: [
      { question: "Can a cold-water leak create a warm spot?", answer: "It normally does not add heat. Ambient conditions can still make the area feel warm, so other evidence is needed." },
      { question: "Will a thermal camera locate the exact break?", answer: "No. It maps surface temperature patterns. Pipe depth, flooring, cabinets, airflow, and recent water use affect the image." },
      { question: "Should I turn off the water heater?", answer: "If its supply is shut off or it is running continuously, follow the manufacturer’s safe shutdown instructions. Avoid gas or electrical work when uncertain." },
      { question: "Can the floor stay warm after the line is shut off?", answer: "Yes. Concrete and tile retain heat, so the pattern can fade gradually." }
    ]
  },
  {
    slug: "running-water-sound-everything-off",
    title: "Why Do I Hear Running Water When Everything Is Off?",
    description: "Learn how to distinguish normal plumbing sounds, drains, irrigation, appliances, service-line loss, and possible under-slab water movement.",
    category: "Symptoms",
    published: publicationDate,
    updated: publicationDate,
    readTime: "6 min read",
    heroImage: "/images/blog/acoustic-detection.png",
    heroAlt: "Leak-detection technician listening to a tiled floor with acoustic equipment",
    primaryKeyword: "running water sound everything off",
    relatedService: { href: "/electronic-leak-detection-tucson", label: "Electronic Leak Detection" },
    keyTakeaways: ["Plumbing and non-plumbing systems can sound alike.", "Confirm whether the meter shows flow during the sound.", "Automatic appliances and irrigation must be excluded.", "Acoustic locating works best after the affected system is isolated."],
    sections: [
      { id: "common-sources", title: "Common Sources of Water Sounds", paragraphs: ["Toilet refill, water-heater recovery, softener regeneration, refrigerator ice makers, pool equipment, irrigation valves, drains, HVAC condensate, and neighboring plumbing can all be heard when faucets are closed.", "Record when the sound starts, whether it is constant, and where it is strongest. A sound that follows water-heater cycles suggests a different investigation from one near an exterior wall after irrigation."], table: { caption: "Sound clues", headers: ["Sound or timing", "Possible source", "Check"], rows: [["Short refill", "Toilet or appliance", "Observe fixture cycle"], ["Only overnight", "Softener or irrigation", "Review schedules"], ["Continuous with meter flow", "Supply-side water use or loss", "Isolate systems"], ["Gurgling after drainage", "Drain or vent", "Plumbing drain assessment"]] } },
      { id: "meter-and-isolation", title: "Use Meter and Isolation Evidence", paragraphs: ["During the sound, stop intentional use and observe the meter. If it does not register flow, the noise may not come from metered supply water. If it moves, turn off known automatic sources and repeat.", "A plumber can isolate hot and cold systems or branches. Acoustic equipment is then used along the likely route; listening to the entire floor without isolation creates false leads." ] },
      { id: "urgent-sounds", title: "When Sound Signals Urgency", paragraphs: ["A sudden loud rush accompanied by pressure loss, spreading water, or rapid meter flow can indicate an active failure. Shut off water safely and protect occupants and electrical areas.", "A faint, intermittent sound without flow can be monitored and investigated systematically. Do not approve demolition based on sound alone."] }
    ],
    faqs: [
      { question: "Can water be heard through concrete?", answer: "Sometimes. Pressure, pipe depth, floor materials, background noise, and soil conditions affect whether leak noise reaches the surface." },
      { question: "Why is the sound louder at night?", answer: "The house is quieter and system pressure or automatic schedules may differ. A louder perception does not necessarily mean the leak worsened." },
      { question: "Can drains sound like supply leaks?", answer: "Yes. Drain flow, venting, condensate, and neighboring units can produce similar sounds without meter movement." },
      { question: "Does acoustic detection work on every leak?", answer: "No. Low pressure, deep pipes, soft soil, multiple coverings, and very small losses can reduce usable noise." }
    ]
  },
  {
    slug: "hot-water-vs-cold-water-slab-leaks",
    title: "Hot-Water vs. Cold-Water Slab Leaks: How to Tell the Difference",
    description: "Compare the symptoms, meter behavior, testing sequence, and repair considerations for hot- and cold-water lines beneath a slab.",
    category: "Plumbing Basics",
    published: publicationDate,
    updated: publicationDate,
    readTime: "7 min read",
    heroImage: "/images/blog/thermal-detection.png",
    heroAlt: "Split view of hot and cold water pipes beneath tile flooring",
    primaryKeyword: "hot water vs cold water slab leak",
    relatedService: { href: "/hot-water-slab-leak-tucson", label: "Hot-Water Leak Detection" },
    keyTakeaways: ["Warmth and heater cycling point toward the hot system but are not proof.", "Cold-line failures can remain hidden longer because they add no heat.", "Separate isolation and pressure tests provide stronger evidence.", "Repair choice depends more on route and pipe condition than water temperature."],
    sections: [
      { id: "symptom-differences", title: "How the Symptoms Differ", paragraphs: ["A hot-water leak may create a warm floor, increase heater operation, reduce available hot water, or produce a narrow thermal path. A cold-water failure may show only as meter movement, damp finishes, pressure loss, or sound.", "Both can raise water use and move moisture away from the failed point. Temperature is therefore one clue among several."], table: { caption: "Hot and cold line comparison", headers: ["Clue", "Hot-water line", "Cold-water line"], rows: [["Floor temperature", "May feel warm", "Usually unchanged"], ["Water heater", "May cycle more", "Usually unaffected"], ["Meter", "May show continuous flow", "May show continuous flow"], ["Useful isolation", "Close heater supply safely", "Test cold branches or main system"]] } },
      { id: "testing", title: "How the Systems Are Tested", paragraphs: ["The technician first rules out fixtures and automatic water use. The hot system can often be separated at the water heater, while cold plumbing may require branch valves or staged testing.", "Repeatable pressure loss identifies which system needs locating. Thermal information is more useful on hot lines, while acoustic and line-tracing methods can support either system." ] },
      { id: "repair", title: "Does the Repair Method Change?", paragraphs: ["Direct repair, rerouting, and partial repiping can apply to either system. Hot routes must account for heat loss and recirculation; cold routes through hot attics need insulation and placement planning.", "The written scope should identify pipe material, route, joints, fixture reconnections, post-repair testing, and finish restoration." ] }
    ],
    faqs: [
      { question: "Do hot-water lines fail more often?", answer: "Heat and expansion can add stress, but failure frequency depends on material, installation, pressure, abrasion, water chemistry, and property history." },
      { question: "Can shutting off the heater stop a hot-line leak?", answer: "Closing the heater’s water supply may isolate the hot system when the valve and layout allow. Turning off heat alone does not stop pressurized water." },
      { question: "Can both systems leak at once?", answer: "It is possible, especially in older or altered plumbing. Each isolated test should be interpreted independently." },
      { question: "Is cold-line detection harder?", answer: "It can be less obvious because there is no thermal clue. Meter, pressure, acoustic, moisture, and route evidence become more important." }
    ]
  },
  {
    slug: "cold-water-slab-leak-no-warm-floor",
    title: "Can You Have a Cold-Water Slab Leak Without a Warm Floor?",
    description: "Yes. Learn which cold-line symptoms matter, which visible leaks can mimic them, and how pressure testing narrows the problem.",
    category: "Cold-Water Leaks",
    published: publicationDate,
    updated: publicationDate,
    readTime: "6 min read",
    heroImage: "/images/blog/slab-leak-signs.png",
    heroAlt: "Damp baseboard and moving water meter without a warm floor",
    primaryKeyword: "cold water slab leak signs",
    relatedService: { href: "/cold-water-slab-leak-tucson", label: "Cold-Water Slab Leaks" },
    keyTakeaways: ["Cold-water leaks usually do not warm the floor.", "A moving meter and repeatable cold-system pressure loss are stronger clues.", "Irrigation, pools, toilets, and service lines must be excluded.", "Moisture can appear far from the pipe failure."],
    sections: [
      { id: "signs", title: "Cold-Line Warning Signs", paragraphs: ["Look for unexplained meter movement, lower pressure, damp flooring, swollen baseboards, sounds of flow, or wet soil near the foundation. A higher bill may support the pattern but cannot locate it.", "Because cold water adds no heat, the problem can remain hidden until moisture or consumption becomes noticeable."], bullets: ["Meter changes with all known uses off", "Cold system loses pressure", "Dampness has no visible fixture source", "Water sound follows a cold branch route"] },
      { id: "rule-outs", title: "Rule Out Other Cold-Water Sources", paragraphs: ["Toilets, irrigation, pool autofill, refrigerator lines, washing machines, softeners, hose bibbs, and the meter-to-house service line can all create similar symptoms.", "Isolate these sources where safe and repeat the meter observation. An exterior loss needs a different locating and repair plan from an interior under-slab branch."], table: { caption: "Cold-water lookalikes", headers: ["Source", "Typical clue", "Check"], rows: [["Toilet", "Intermittent refill", "Dye and isolation"], ["Irrigation", "Use tied to schedule", "Disable controller and valves"], ["Service line", "Flow continues with house shutoff closed", "Test meter-to-house route"], ["Slab branch", "Interior system loses pressure", "Isolate and locate branch"]] } },
      { id: "detection", title: "How a Cold Line Is Narrowed", paragraphs: ["Pressure testing confirms whether the isolated cold system holds. Branch isolation, pipe tracing, acoustic listening, and moisture mapping can then reduce the search area.", "The result should be expressed as evidence and confidence, not a guarantee that every cold-water failure can be pinpointed without access." ] }
    ],
    faqs: [
      { question: "Will a cold leak feel cool?", answer: "Not reliably. Floor temperature is influenced by room conditions, soil, HVAC, and water flow." },
      { question: "Can a cold leak lower pressure at every faucet?", answer: "A significant loss can affect pressure, but regulators, utility conditions, clogged fixtures, and valve problems can do the same." },
      { question: "Can the meter move very slowly?", answer: "Yes. Small continuous losses may produce subtle movement that is easier to see over a longer controlled interval." },
      { question: "Can a cold branch be rerouted?", answer: "Often, if a safe code-compliant route can reach the served fixtures. Access and heat exposure must be considered." }
    ]
  },
  {
    slug: "slab-leak-vs-foundation-problem-comparison",
    title: "Slab Leak or Foundation Problem? A Homeowner’s Comparison",
    description: "Compare water-loss evidence with structural movement and learn when to call a plumber, structural professional, or both.",
    category: "Home Diagnosis",
    published: publicationDate,
    updated: publicationDate,
    readTime: "7 min read",
    heroImage: "/images/blog/foundation-vs-leak.png",
    heroAlt: "Foundation crack beside a water meter and damp tile comparison",
    primaryKeyword: "slab leak vs foundation problem",
    relatedService: { href: "/slab-leak-vs-foundation-problem", label: "Slab Leak vs. Foundation Guide" },
    keyTakeaways: ["Plumbing problems produce evidence of water use or pressure loss.", "Structural problems produce movement patterns that may exist without water loss.", "Cracks alone do not identify the cause.", "Both assessments may be appropriate when symptoms overlap."],
    sections: [
      { id: "plumbing-evidence", title: "Evidence That Points Toward Plumbing", paragraphs: ["A moving meter with controlled use, repeatable pressure loss, heater cycling, a warm floor, damp finishes, or supply-water sound supports a plumbing investigation.", "Water can contribute to soil movement, but the plumber’s role is to identify and correct the pipe failure—not certify the foundation." ] },
      { id: "structural-evidence", title: "Evidence That Points Toward Structure", paragraphs: ["Progressive wall, ceiling, door, window, and floor movement without evidence of water loss calls for structural assessment. Crack width, pattern, displacement, and change over time matter more than one photograph.", "Settlement, expansive soil, drainage, construction, and other factors require qualified evaluation. A plumbing test cannot rule on structural safety."], table: { caption: "Who to contact first", headers: ["Observation", "First assessment", "Possible second assessment"], rows: [["Meter moves; warm or damp floor", "Plumber or leak-detection provider", "Structural professional if movement exists"], ["Cracks and sticking doors; no water loss", "Structural professional", "Plumber if water evidence appears"], ["Both water loss and movement", "Control active water, then coordinate", "Both disciplines"], ["Outside groundwater after rain", "Drainage or structural review", "Plumber if meter also moves"]] } },
      { id: "avoid-terminology", title: "Avoid Confusing Repair Terms", paragraphs: ["Slab-leak repair usually means work on a water pipe below or within concrete. Foundation or slab repair usually means structural work on the building system.", "Ask each provider to state exactly what is being diagnosed, what evidence supports it, and which work is outside their scope." ] }
    ],
    faqs: [
      { question: "Can a slab leak crack a foundation?", answer: "Water loss can affect soil and finishes, but a crack’s cause requires structural evaluation. Do not assume direct causation from timing alone." },
      { question: "Can foundation movement break a pipe?", answer: "Movement can stress rigid piping or penetrations, but corrosion, pressure, abrasion, installation, and age may also contribute." },
      { question: "Who repairs the water damage?", answer: "Plumbing repair, drying, flooring, drywall, mold remediation, and structural work may involve different scopes and contractors." },
      { question: "Should water loss be controlled first?", answer: "Active water should be stopped safely to limit damage, while structural hazards should also be respected and assessed promptly." }
    ]
  },
  {
    slug: "pool-irrigation-or-slab-leak",
    title: "Pool Leak, Irrigation Leak or Slab Leak: How to Tell",
    description: "A Tucson-focused process for separating outdoor water use from hidden pressurized plumbing before specialized slab-leak testing.",
    category: "Outdoor Water",
    published: publicationDate,
    updated: publicationDate,
    readTime: "7 min read",
    heroImage: "/images/blog/outdoor-vs-slab.png",
    heroAlt: "Tucson home showing pool equipment, irrigation valve and interior slab",
    primaryKeyword: "pool leak vs slab leak Tucson",
    relatedService: { href: "/slab-leak-detection-tucson", label: "Slab Leak Detection" },
    relatedArea: { href: "/service-areas/east-tucson", label: "East Tucson Service Area" },
    keyTakeaways: ["Pools and irrigation can create high bills without an interior leak.", "Automatic systems must be controlled during a meter test.", "Wet soil location is not always the source.", "Interior pressure testing should follow outdoor isolation."],
    sections: [
      { id: "outdoor-clues", title: "Clues From Pools and Irrigation", paragraphs: ["A pool autofill can mask evaporation or pool-shell loss by adding water automatically. Irrigation valves may stick open, emitters can break underground, and schedules may change without being noticed.", "Check water level, equipment, valves, wet zones, controller history, and whether the meter changes when each system is disabled safely."], table: { caption: "Source comparison", headers: ["Source", "Common clue", "Isolation approach"], rows: [["Pool", "Autofill or level change", "Disable fill and perform pool test"], ["Irrigation", "Wet zone or scheduled use", "Shut controller and zone supply"], ["Service line", "Flow between meter and house", "Close house shutoff if safe"], ["Interior slab line", "Isolated house system loses pressure", "Hot/cold branch testing"]] } },
      { id: "meter-sequence", title: "Use a Test Sequence", paragraphs: ["Start with no intentional water use. Observe the meter, then isolate pool and irrigation sources one at a time. Repeat long enough to avoid mistaking delayed valve closure or automatic cycles for a constant loss.", "If flow continues with outdoor sources off, evaluate the private service line and interior plumbing separately." ] },
      { id: "when-to-call", title: "Choose the Right Specialist", paragraphs: ["Pool specialists evaluate shells, plumbing circuits, equipment, and autofill. Irrigation providers trace landscape valves and zones. Plumbers test pressurized domestic supply piping.", "A clear test history reduces duplicated visits and keeps a slab-leak provider focused on the correct system." ] }
    ],
    faqs: [
      { question: "Can pool autofill cause a continuous-use alert?", answer: "Yes. Normal filling or a pool-related loss can create continuous metered flow." },
      { question: "Can irrigation water appear near the foundation?", answer: "Yes. Soil, grading, broken lines, and emitters can move moisture toward the slab edge." },
      { question: "Does the bucket test find plumbing leaks in the house?", answer: "No. It helps assess pool water loss. Domestic plumbing requires separate meter and pressure tests." },
      { question: "Should every system be shut off at once?", answer: "Use a controlled sequence and operate only familiar, serviceable valves. A one-at-a-time approach provides more useful evidence." }
    ]
  },
  {
    slug: "how-professional-slab-leak-detection-works",
    title: "How Professional Slab-Leak Detection Works",
    description: "Follow the evidence-based sequence from symptom review and fixture checks to pressure testing, line isolation, and targeted locating.",
    category: "Detection Process",
    published: publicationDate,
    updated: publicationDate,
    readTime: "8 min read",
    heroImage: "/images/blog/acoustic-detection.png",
    heroAlt: "Leak-detection technician using acoustic equipment and a pressure gauge",
    primaryKeyword: "how slab leak detection works",
    relatedService: { href: "/how-slab-leak-detection-works", label: "Detection Process" },
    keyTakeaways: ["Detection begins by confirming water loss, not scanning the floor.", "Hot, cold, exterior, and branch systems should be separated where possible.", "Tools produce different types of evidence.", "The report should state findings, limitations, and confidence."],
    sections: [
      { id: "confirmation", title: "1. Confirm That Water Is Being Lost", paragraphs: ["The provider reviews bills, alerts, meter behavior, symptoms, plumbing layout, and recent work. Toilets, irrigation, pools, appliances, drains, and visible lines are checked first.", "This step prevents a normal heat pattern or exterior leak from being treated as an under-slab failure." ] },
      { id: "isolation", title: "2. Isolate and Pressure-Test", paragraphs: ["The hot-water system can often be separated at the heater. Cold branches, exterior service lines, or manifolds may require additional valves and staged tests.", "A repeatable pressure drop supports active loss in the isolated system. Stable pressure narrows attention elsewhere, subject to the test conditions and equipment limits."], table: { caption: "Detection sequence", headers: ["Stage", "Question answered", "Typical evidence"], rows: [["Visible checks", "Is there an obvious source?", "Fixture, irrigation or appliance findings"], ["Meter test", "Is metered flow continuing?", "Recorded flow or stable display"], ["Isolation", "Which system is involved?", "Hot, cold, branch or service line"], ["Locating", "Where is the suspected route or area?", "Acoustic, thermal, trace and moisture patterns"]] } },
      { id: "locating-and-report", title: "3. Locate and Document", paragraphs: ["Acoustic listening identifies sound patterns; line tracing estimates the pipe route; thermal imaging maps surface temperature; moisture tools show affected finishes. Results are compared rather than treated as interchangeable proof.", "The final report should document tests, readings, marked areas, limitations, photographs, and repair options. It should distinguish confirmed facts from professional judgment." ] }
    ],
    faqs: [
      { question: "Can detection be completed in one visit?", answer: "Many cases can, but complex branches, intermittent loss, inaccessible valves, or more than one problem may require additional testing." },
      { question: "Is detection the same as repair?", answer: "No. Detection identifies the affected system and suspected area; repair opens or bypasses the line and verifies the completed work." },
      { question: "Why test pressure before listening?", answer: "It confirms which system is losing pressure and reduces the area where acoustic evidence is relevant." },
      { question: "What if no active loss is found?", answer: "The provider should document the test conditions and discuss intermittent sources, monitoring, or other moisture investigations instead of inventing a location." }
    ]
  },
  {
    slug: "electronic-leak-detection-capabilities-limits",
    title: "Electronic Leak Detection: What It Can and Cannot Find",
    description: "Understand acoustic listening, line tracing, moisture testing, and the conditions that affect electronic leak-detection accuracy.",
    category: "Detection Technology",
    published: publicationDate,
    updated: publicationDate,
    readTime: "7 min read",
    heroImage: "/images/blog/acoustic-detection.png",
    heroAlt: "Electronic listening device being used on a concrete floor",
    primaryKeyword: "electronic leak detection Tucson",
    relatedService: { href: "/electronic-leak-detection-tucson", label: "Electronic Leak Detection" },
    keyTakeaways: ["Electronic detection is a category of tools, not one magic device.", "Acoustic equipment listens for pressure-related sound.", "Tracing estimates the line route rather than proving a break.", "Depth, pressure, soil, coverings, and background noise affect results."],
    sections: [
      { id: "tools", title: "What the Tools Measure", paragraphs: ["Ground microphones and listening sensors amplify vibration associated with water escaping a pressurized line. Electromagnetic tracing can help establish the route of compatible piping or tracer wires. Moisture meters and thermal cameras measure surface effects.", "None of these tools directly sees through concrete. Each contributes a different piece of evidence."], table: { caption: "Electronic detection tools", headers: ["Tool", "Useful for", "Does not prove"], rows: [["Acoustic sensor", "Leak-noise pattern", "Pipe condition or exact depth"], ["Line tracer", "Likely route", "Active failure point"], ["Thermal camera", "Surface temperature", "Cause of heat"], ["Moisture meter", "Affected material", "Source location"]] } },
      { id: "limitations", title: "Why Results Vary", paragraphs: ["Small losses, low pressure, deep pipes, soft soil, thick stone, cabinets, multiple floor layers, pumps, traffic, HVAC, and neighboring systems can obscure signals.", "A strong provider explains these limitations, repeats measurements, and compares them with meter and pressure evidence." ] },
      { id: "good-result", title: "What a Good Result Looks Like", paragraphs: ["The result should identify the tested system, likely route, strongest evidence area, and remaining uncertainty. A marked floor point without documented isolation or pressure loss is incomplete.", "The repair plan should allow for field conditions once access exposes the pipe." ] }
    ],
    faqs: [
      { question: "Is electronic detection non-invasive?", answer: "Testing usually does not require demolition, but final confirmation or repair may still require limited access." },
      { question: "Can it find plastic pipe?", answer: "Acoustic methods can work with pressurized plastic lines, while electromagnetic route tracing may need a tracer or compatible method." },
      { question: "Can it distinguish two nearby pipes?", answer: "Sometimes, but close routes, shared vibration, and limited isolation can reduce confidence." },
      { question: "Should equipment replace pressure testing?", answer: "No. Equipment is most useful after tests identify the system that is actually losing water or pressure." }
    ]
  },
  {
    slug: "thermal-imaging-vs-acoustic-leak-detection",
    title: "Thermal Imaging vs. Acoustic Leak Detection",
    description: "Compare what thermal cameras and acoustic sensors measure, when each method helps, and why neither should be used without plumbing tests.",
    category: "Detection Technology",
    published: publicationDate,
    updated: publicationDate,
    readTime: "6 min read",
    heroImage: "/images/blog/thermal-detection.png",
    heroAlt: "Thermal camera and acoustic sensor used to investigate a tiled floor",
    primaryKeyword: "thermal vs acoustic leak detection",
    relatedService: { href: "/electronic-leak-detection-tucson", label: "Electronic Leak Detection" },
    keyTakeaways: ["Thermal cameras map surface temperature.", "Acoustic sensors amplify vibration and leak noise.", "Hot lines often produce more useful thermal patterns.", "Both methods need meter, pressure, and route context."],
    sections: [
      { id: "thermal", title: "What Thermal Imaging Shows", paragraphs: ["A thermal camera displays temperature differences at the surface. A hot-water line may create a warm path through concrete and tile, while evaporation can sometimes cool a wet surface.", "Sunlight, ducts, appliances, cabinets, floor thickness, and recent water use can create similar patterns. The image does not display the pipe itself." ] },
      { id: "acoustic", title: "What Acoustic Equipment Hears", paragraphs: ["Water escaping under pressure can create vibration that travels through pipe, soil, concrete, and finishes. Sensors help compare sound intensity along a suspected route.", "Low pressure, small leaks, deep lines, plastic materials, soft soil, and background machinery can weaken or distort the pattern."], table: { caption: "Method comparison", headers: ["Method", "Measures", "Best support", "Key limitation"], rows: [["Thermal", "Surface temperature", "Active hot-water loss", "Heat has many causes"], ["Acoustic", "Vibration and sound", "Pressurized active leak", "Noise and depth interfere"], ["Moisture", "Material moisture", "Damage mapping", "Water may travel"], ["Pressure test", "System stability", "Confirming affected system", "Does not locate by itself"]] } },
      { id: "combined", title: "Why Providers Combine Methods", paragraphs: ["If a hot system loses pressure and a thermal path follows the traced line, the evidence is stronger than either result alone. An acoustic peak near the same area adds confidence.", "Conflicting evidence should trigger more testing or a qualified limitation—not a more confident claim." ] }
    ],
    faqs: [
      { question: "Is thermal imaging better for cold leaks?", answer: "Cold water may create a subtle temperature difference, but the pattern is often less distinct and strongly affected by ambient conditions." },
      { question: "Can a phone thermal attachment replace professional testing?", answer: "It may document temperature variation, but it cannot isolate plumbing, verify pressure loss, or interpret complex construction conditions." },
      { question: "Does the loudest point equal the break?", answer: "Not always. Sound can travel along pipe or concrete and may be reflected by cavities and fittings." },
      { question: "Can testing be performed through stone?", answer: "It can be attempted, but thickness, density, layers, and heat retention can limit surface evidence." }
    ]
  },
  {
    slug: "what-happens-water-line-pressure-test",
    title: "What Happens During a Water-Line Pressure Test?",
    description: "Learn what plumbing pressure testing can confirm, how lines are isolated, what affects results, and why a pressure drop does not locate a leak by itself.",
    category: "Pressure Testing",
    published: publicationDate,
    updated: publicationDate,
    readTime: "7 min read",
    heroImage: "/images/blog/pressure-testing.png",
    heroAlt: "Calibrated pressure gauge connected to residential water piping",
    primaryKeyword: "water line pressure testing Tucson",
    relatedService: { href: "/water-line-pressure-testing-tucson", label: "Water-Line Pressure Testing" },
    keyTakeaways: ["The system must be isolated from normal use.", "Hot, cold, service, and branch lines may need separate tests.", "Repeatable pressure loss supports an active problem.", "Temperature, valves, equipment, and test setup affect readings."],
    sections: [
      { id: "setup", title: "How the Test Is Set Up", paragraphs: ["The provider reviews the plumbing layout and chooses safe connection and isolation points. Fixtures, heaters, regulators, softeners, irrigation, and other equipment may need to be separated from the test section.", "A calibrated gauge records starting pressure and changes over a defined interval. The method and pressure must suit the piping and applicable procedures." ] },
      { id: "results", title: "What the Result Means", paragraphs: ["A repeatable drop can support active loss in the isolated section. Stable pressure suggests that section held under the test conditions, but it does not guarantee every component is trouble-free or rule out intermittent problems.", "Temperature change, trapped air, leaking isolation valves, gauge connections, and equipment can affect results. Unexpected readings should be verified."], table: { caption: "Pressure-test outcomes", headers: ["Outcome", "Possible meaning", "Next step"], rows: [["Stable", "Section held during test", "Evaluate other sources or monitor"], ["Repeatable drop", "Loss in isolated section", "Trace and locate that section"], ["Irregular movement", "Temperature, valve or setup effect", "Check setup and repeat"], ["Cannot isolate", "Layout or valves limit test", "Use staged approach or repair access"]] } },
      { id: "after-repair", title: "Testing After Repair", paragraphs: ["The repaired or rerouted line should be tested before access is closed. Connections, fixture operation, pressure, and visible work are checked according to the scope.", "Post-repair testing verifies current work under test conditions; it does not certify every concealed pipe in the building." ] }
    ],
    faqs: [
      { question: "Does pressure testing damage pipes?", answer: "A competent provider selects an appropriate method and pressure for the system. Existing fragile plumbing and unsafe conditions should be discussed first." },
      { question: "How long is the test?", answer: "It depends on the section, suspected loss rate, temperature, system volume, and applicable procedure. The provider should document the interval." },
      { question: "Can air or gas be used?", answer: "Specialized testing may use approved methods, but compressed gas introduces hazards and should only be handled by qualified professionals following code and safety requirements." },
      { question: "Does a pressure drop show the location?", answer: "No. It identifies a system or section that is not holding; locating requires additional route and field evidence." }
    ]
  },
  {
    slug: "how-long-slab-leak-detection-takes",
    title: "How Long Does Slab-Leak Detection Take?",
    description: "Understand what makes a straightforward inspection different from a complex shared, remodeled, rural, or intermittent plumbing investigation.",
    category: "Planning",
    published: publicationDate,
    updated: publicationDate,
    readTime: "5 min read",
    heroImage: "/images/blog/acoustic-detection.png",
    heroAlt: "Technician reviewing a plumbing route during a slab-leak inspection",
    primaryKeyword: "how long does slab leak detection take",
    relatedService: { href: "/request-slab-leak-inspection", label: "Request an Inspection" },
    keyTakeaways: ["There is no responsible universal time guarantee.", "Accessible valves and active symptoms shorten the process.", "Shared meters, additions, intermittent loss, and multiple systems add work.", "Prepare records and access before the visit."],
    sections: [
      { id: "straightforward", title: "What Makes a Case Straightforward", paragraphs: ["A continuously moving meter, accessible heater and shutoffs, a clear single-family layout, and repeatable hot- or cold-system pressure loss give the technician a focused starting point.", "A floor plan, known repair history, and visible meter can reduce time spent reconstructing the plumbing route." ] },
      { id: "complex", title: "What Adds Time", paragraphs: ["Intermittent loss, shared meters, unmarked valves, additions, mixed materials, recirculation, private wells, long service lines, pools, irrigation, and more than one symptom can require staged tests.", "Thick flooring, background noise, low pressure, or a loss that stops during the visit can also limit locating."], table: { caption: "Factors affecting inspection time", headers: ["Factor", "Effect"], rows: [["Accessible isolation valves", "Allows faster system separation"], ["Intermittent use or loss", "May require monitoring or repeat visit"], ["Shared or multifamily plumbing", "Requires ownership and branch mapping"], ["Multiple exterior systems", "Requires separate rule-out tests"]] } },
      { id: "prepare", title: "How to Prepare", paragraphs: ["Provide bills or alerts, symptom dates, repair history, and access to the meter, heater, shutoffs, affected rooms, garage, and utility areas. Pause automatic water uses only as instructed and safe.", "Ask whether the appointment covers diagnosis only, whether testing fees apply, and what deliverable is provided." ] }
    ],
    faqs: [
      { question: "Can repair start the same day?", answer: "Sometimes, but detection, estimate approval, materials, permits, access, and restoration planning may separate diagnosis from permanent repair." },
      { question: "Why might a second visit be needed?", answer: "The loss may be intermittent, valves may need work, more than one system may be involved, or additional access may be required." },
      { question: "Should the water remain off before arrival?", answer: "Keep it off when active water is causing damage. Otherwise follow the provider’s instructions because an active system may be needed for testing." },
      { question: "Can anyone promise a fixed detection time?", answer: "A provider can explain a typical appointment window, but concealed plumbing conditions make a guaranteed completion time unreliable." }
    ]
  },
  {
    slug: "locate-slab-leak-without-removing-tile",
    title: "Can a Slab Leak Be Located Without Removing Tile?",
    description: "Learn how pressure tests and locating tools can narrow an under-slab problem, plus when limited access may still be necessary.",
    category: "Floor Protection",
    published: publicationDate,
    updated: publicationDate,
    readTime: "6 min read",
    heroImage: "/images/blog/thermal-detection.png",
    heroAlt: "Technician scanning intact tile flooring for a hidden water line",
    primaryKeyword: "find slab leak without removing tile",
    relatedService: { href: "/electronic-leak-detection-tucson", label: "Electronic Leak Detection" },
    keyTakeaways: ["Most diagnostic steps can occur before demolition.", "Testing narrows a system and area rather than seeing through tile.", "Stone, layers, cabinets, depth, and pressure affect confidence.", "Repair still requires access or a bypass route."],
    sections: [
      { id: "non-invasive-steps", title: "What Can Be Done With the Floor Intact", paragraphs: ["Meter checks, fixture exclusion, hot/cold isolation, pressure testing, route tracing, acoustic listening, thermal scanning, and moisture mapping can all occur before tile is removed.", "Together, these steps can identify the affected line and a suspected area, reducing blind openings." ] },
      { id: "limits", title: "Why Limited Access May Still Be Needed", paragraphs: ["No instrument directly displays a concealed pipe break through every construction assembly. Thick stone, multiple underlayments, cabinets, low flow, deep pipes, soft soil, and competing noise can reduce confidence.", "A responsible scope explains the expected access area but allows for conditions discovered after the slab is opened."], table: { caption: "Floor-preservation options", headers: ["Approach", "Floor impact", "Trade-off"], rows: [["Detection only", "Usually none", "Does not complete repair"], ["Direct access", "Localized floor and concrete opening", "Shortest pipe route when suitable"], ["Rerouting", "May preserve floor", "Can require walls, ceilings or attic work"], ["Partial repipe", "May preserve slab", "More connections and routing work"]] } },
      { id: "before-approval", title: "Questions Before Tile Is Opened", paragraphs: ["Ask what tests confirmed the system, how the route was established, what limits remain, and the expected opening. Clarify who removes and replaces tile and whether matching material is available.", "Compare the full restoration impact of direct access with the wall or ceiling impact of rerouting." ] }
    ],
    faqs: [
      { question: "Can grout be removed instead of tile?", answer: "Grout lines may help planning, but adequate safe access depends on pipe depth, repair space, and flooring construction." },
      { question: "Will insurance replace matching tile?", answer: "Coverage depends on the policy, cause, access provisions, matching rules, and claim decision. Ask the insurer before assuming." },
      { question: "Can a reroute avoid all finish damage?", answer: "Not always. Wall, ceiling, cabinet, garage, attic, or exterior openings may be needed to reach fixtures." },
      { question: "Should spare tile be saved?", answer: "Yes, when available. Record the manufacturer and product because future matching may be difficult." }
    ]
  },
  {
    slug: "slab-leak-detection-report-checklist",
    title: "What Should a Slab-Leak Detection Report Include?",
    description: "Use this checklist to evaluate pressure readings, isolation notes, marked areas, photographs, limitations, and repair recommendations.",
    category: "Hiring Guide",
    published: publicationDate,
    updated: publicationDate,
    readTime: "6 min read",
    heroImage: "/images/blog/detection-report.png",
    heroAlt: "Organized slab-leak diagnostic report with gauge readings and floor plan",
    primaryKeyword: "slab leak detection report",
    relatedService: { href: "/slab-leak-detection-tucson", label: "Slab Leak Detection" },
    keyTakeaways: ["The report should identify what was tested and under which conditions.", "Facts and professional judgment should be separated.", "Marked areas need supporting route and test evidence.", "Repair and restoration exclusions belong in the next written scope."],
    sections: [
      { id: "required-details", title: "Core Diagnostic Details", paragraphs: ["The report should identify the property, date, symptoms, meter observations, visible checks, isolated systems, test method, starting and ending readings, test duration, and equipment used.", "Photographs of gauges, meter displays, moisture, thermal patterns, and marked routes make the record easier to understand."], bullets: ["Property and system tested", "Fixture and exterior sources checked", "Pressure readings and duration", "Likely route and suspected area", "Limitations and unresolved questions"] },
      { id: "language", title: "Look for Careful Language", paragraphs: ["A report can state that a system lost pressure and that evidence is strongest in a defined area. It should not turn uncertain tool readings into a guarantee.", "If multiple causes remain possible, those alternatives should be named along with the recommended next step."], table: { caption: "Report quality examples", headers: ["Clear wording", "Weak wording"], rows: [["Hot system lost pressure during documented test", "There is definitely a leak somewhere"], ["Strongest acoustic response near traced branch", "Machine found exact break"], ["Tile access may be required for repair", "No damage guaranteed"], ["Restoration excluded from detection scope", "Everything will be handled"]] } },
      { id: "use-report", title: "How the Report Is Used", paragraphs: ["The homeowner can use it to compare repair proposals, communicate with an insurer, and preserve a record of readings and marked locations.", "A detection report is not a coverage decision, engineering opinion, or guarantee of concealed pipe condition unless qualified professionals expressly provide those services." ] }
    ],
    faqs: [
      { question: "Should the report include a repair price?", answer: "It may, but diagnosis and repair scopes should be distinguishable. The estimate should list access and restoration assumptions." },
      { question: "Does an insurer require a report?", answer: "Requirements vary by insurer and claim. Ask what documentation is needed before work removes evidence." },
      { question: "Should exact pressure numbers be listed?", answer: "Yes, when pressure testing is part of the diagnosis, along with method, duration, and relevant conditions." },
      { question: "What if the provider gives only a verbal result?", answer: "Ask for a written summary before approving invasive work, especially when the result affects insurance or competing repair options." }
    ]
  },
  {
    slug: "why-one-leak-detection-tool-is-not-enough",
    title: "Why One Leak-Detection Tool Is Not Enough for Every Home",
    description: "Learn why plumbing isolation, pressure testing, acoustic listening, thermal imaging, tracing, and moisture mapping answer different questions.",
    category: "Detection Technology",
    published: publicationDate,
    updated: publicationDate,
    readTime: "6 min read",
    heroImage: "/images/blog/detection-tools.png",
    heroAlt: "Pressure gauge, acoustic sensor, thermal camera and moisture meter arranged for leak detection",
    primaryKeyword: "accurate slab leak detection tools",
    relatedService: { href: "/how-slab-leak-detection-works", label: "How Detection Works" },
    keyTakeaways: ["Different tools measure flow, pressure, sound, heat, route, or moisture.", "A tool result is meaningful only within the tested system.", "Construction conditions change tool performance.", "Converging evidence supports a better access decision."],
    sections: [
      { id: "different-questions", title: "Each Tool Answers a Different Question", paragraphs: ["The meter shows whether water passed through the utility meter. A pressure gauge shows whether an isolated section held. Tracing estimates route. Acoustic equipment compares sound. Thermal and moisture tools map surface effects.", "Using a thermal camera before confirming hot-system loss may produce an attractive but irrelevant image."], table: { caption: "Evidence map", headers: ["Question", "Useful method"], rows: [["Is water flowing?", "Meter observation"], ["Which system loses pressure?", "Isolation and pressure test"], ["Where might the pipe run?", "Plans and line tracing"], ["Where is evidence strongest?", "Acoustic, thermal and moisture comparison"]] } },
      { id: "property-conditions", title: "Property Conditions Change Performance", paragraphs: ["Stone, carpet, wood, cabinets, additions, pipe depth, soil, ambient temperature, pumps, traffic, and HVAC can help or hinder different methods.", "A provider should choose tools after learning the construction and plumbing layout, not use the same scan sequence as a sales demonstration." ] },
      { id: "confidence", title: "How Evidence Builds Confidence", paragraphs: ["Confidence improves when the isolated system loses pressure, the traced route crosses the symptom, and two independent locating methods agree.", "If results do not agree, the next step may be monitoring, another test, or carefully planned access—not an exaggerated conclusion." ] }
    ],
    faqs: [
      { question: "Does more equipment always mean a better inspection?", answer: "No. Appropriate setup, isolation, interpretation, and documentation matter more than the number of devices." },
      { question: "Can one tool be enough in a simple case?", answer: "A strong clear result may narrow a case quickly, but it should still be supported by basic confirmation of water loss and system identity." },
      { question: "Why might two tools disagree?", answer: "They measure different effects and are influenced by different construction and operating conditions." },
      { question: "What should the homeowner ask?", answer: "Ask what each result measures, how the affected system was confirmed, what limitations apply, and how the access point was chosen." }
    ]
  },
  {
    slug: "slab-leak-spot-repair-vs-rerouting",
    title: "Slab-Leak Spot Repair vs. Water-Line Rerouting",
    description: "Compare direct concrete access with bypassing a failed pipe through walls, ceilings, garages, or attics.",
    category: "Repair Options",
    published: publicationDate,
    updated: publicationDate,
    readTime: "8 min read",
    heroImage: "/images/blog/repair-vs-reroute.png",
    heroAlt: "Split view of direct slab repair and a rerouted water line",
    primaryKeyword: "spot repair vs rerouting slab leak",
    relatedService: { href: "/slab-leak-repair-tucson", label: "Slab Leak Repair" },
    keyTakeaways: ["Spot repair reaches one confirmed failure through the floor.", "Rerouting abandons the failed run and creates a new path.", "Flooring, pipe history, route length, and restoration can change the total impact.", "Neither method is automatically best for every home."],
    sections: [
      { id: "spot-repair", title: "When Spot Repair Fits", paragraphs: ["Direct repair can be appropriate when testing identifies one accessible failure, surrounding pipe appears serviceable, and a localized floor opening is practical. The failed section is exposed, replaced, tested, and the access is closed according to scope.", "Its apparent simplicity can be offset by expensive tile, stone, cabinets, dust control, concrete work, and surface restoration." ] },
      { id: "rerouting", title: "When Rerouting Fits", paragraphs: ["Rerouting disconnects the failed under-slab run and installs a new code-compliant path through walls, ceilings, a garage, attic, exterior chase, or another route. It can preserve flooring and avoid returning to a questionable branch.", "It may still require drywall openings, insulation, fire stopping, fixture reconnections, longer pipe runs, and careful protection from Tucson attic heat."], table: { caption: "Repair comparison", headers: ["Factor", "Spot repair", "Rerouting"], rows: [["Primary access", "Floor and concrete", "Walls, ceiling, garage or attic"], ["Pipe addressed", "One failed section", "Entire bypassed run"], ["Finish impact", "Flooring", "Drywall and route finishes"], ["Best fit", "Isolated accessible failure", "Inaccessible or unreliable run"]] } },
      { id: "estimate", title: "Compare Complete Scopes", paragraphs: ["Ask both proposals to include diagnosis, plumbing, shutoff time, testing, permits, concrete closure, drywall, flooring, painting, cleanup, and warranty terms.", "A lower plumbing line item can become the higher project cost when restoration is excluded. Compare equivalent scopes rather than headline prices." ] }
    ],
    faqs: [
      { question: "Is rerouting always more expensive?", answer: "No. Route complexity raises plumbing cost, while luxury flooring and concrete restoration can make direct access more expensive overall." },
      { question: "Is spot repair only temporary?", answer: "A correctly completed repair can remain sound. It does not improve other concealed sections that may have similar age or conditions." },
      { question: "Can one branch be rerouted?", answer: "Often, when it can be isolated and a safe route can reconnect all fixtures it serves." },
      { question: "Which option causes less damage?", answer: "That depends on floor finishes, wall and ceiling routes, attic access, cabinets, and the amount of restoration each scope includes." }
    ]
  },
  {
    slug: "when-under-slab-pipe-repair-is-right",
    title: "When Is Direct Under-Slab Pipe Repair the Right Choice?",
    description: "Learn when controlled access to a confirmed pipe failure is reasonable and when rerouting or broader replacement deserves comparison.",
    category: "Repair Options",
    published: publicationDate,
    updated: publicationDate,
    readTime: "7 min read",
    heroImage: "/images/blog/direct-slab-repair.png",
    heroAlt: "Controlled concrete opening exposing one failed water-pipe section",
    primaryKeyword: "under slab pipe repair Tucson",
    relatedService: { href: "/under-slab-pipe-repair-tucson", label: "Under-Slab Pipe Repair" },
    keyTakeaways: ["The affected line and area should be supported by testing.", "The opening must provide safe working space, not chase an arbitrary size promise.", "Pipe condition on both sides matters.", "Restoration responsibilities must be written."],
    sections: [
      { id: "good-candidate", title: "Characteristics of a Good Candidate", paragraphs: ["Direct access is most defensible when one failure is well supported, the surrounding run appears serviceable, and the floor location can be opened without disproportionate damage.", "It may suit a short exposed repair when rerouting would require an unusually long path, extensive cabinetry, or difficult fixture reconnections."], bullets: ["Repeatable loss in the identified system", "Consistent route and locating evidence", "Reasonable floor and concrete access", "No strong pattern of repeated branch failures"] },
      { id: "work", title: "What the Work May Include", paragraphs: ["The contractor protects the area, removes finish material and concrete, excavates safely around the pipe, replaces the failed section with compatible approved materials, and tests before backfill.", "The scope should define compaction, concrete closure, flooring, dust control, debris removal, permits, and the boundary between plumbing and finish trades."], table: { caption: "Direct-repair scope questions", headers: ["Item", "Question"], rows: [["Access", "Expected location and how it may change"], ["Pipe", "Material and connection method"], ["Testing", "How repair is verified before closure"], ["Restoration", "Concrete, tile, flooring and paint included?"]] } },
      { id: "poor-candidate", title: "When to Compare Another Method", paragraphs: ["Repeated failures, widespread deterioration, inaccessible finishes, an uncertain location, or a practical alternate route can make another spot repair poor value.", "A provider should explain why direct access is preferred and what evidence supports the decision." ] }
    ],
    faqs: [
      { question: "How large is the opening?", answer: "It depends on location confidence, pipe depth, working clearance, reinforcement, flooring, and field conditions. Exact dimensions should not be guaranteed before exposure." },
      { question: "Can the same concrete be replaced?", answer: "Removed concrete is normally replaced with new material according to the repair scope; finish matching is a separate question." },
      { question: "Will the repair stop future leaks?", answer: "It should correct the exposed failure when completed properly. It cannot guarantee every concealed section of the system." },
      { question: "Should the line be tested before backfill?", answer: "Yes. The completed connections and relevant system should be verified before the access is concealed." }
    ]
  },
  {
    slug: "reroute-one-water-line-without-repiping",
    title: "Can You Reroute One Water Line Without Repiping the House?",
    description: "Learn when an individual branch can be bypassed, how fixtures are reconnected, and when a broader repipe should be considered.",
    category: "Rerouting",
    published: publicationDate,
    updated: publicationDate,
    readTime: "7 min read",
    heroImage: "/images/blog/repair-vs-reroute.png",
    heroAlt: "New water-line branch routed through a wall and attic",
    primaryKeyword: "reroute one water line",
    relatedService: { href: "/water-line-rerouting-tucson", label: "Water-Line Rerouting" },
    keyTakeaways: ["A separable branch can often be rerouted by itself.", "Every fixture served by the old run must be identified.", "The old line is disconnected and left out of service.", "Broader replacement may be better when failures affect multiple branches."],
    sections: [
      { id: "branch", title: "What Counts as One Branch", paragraphs: ["A branch is a portion of the distribution system serving one or more fixtures. The plumbing layout must show where it begins, which fixtures depend on it, and where a new route can reconnect.", "Older and remodeled homes may not follow an obvious plan. Isolation tests and visual access help confirm that the proposed reroute will not leave a fixture on the failed line." ] },
      { id: "process", title: "How a Single-Line Reroute Works", paragraphs: ["The affected run is disconnected at suitable endpoints, a new approved pipe is routed through available building space, fixtures are reconnected, penetrations are protected, and the new work is pressure-tested.", "The abandoned pipe remains out of service beneath the slab. Its ends should be handled as required by the design and code."], table: { caption: "Single branch vs broader repipe", headers: ["Condition", "Single reroute", "Partial or broader repipe"], rows: [["One confirmed branch", "Often suitable", "May be unnecessary"], ["Several branches failing", "May repeat work", "Compare broader scope"], ["Good route to fixtures", "Favors reroute", "Depends on remaining system"], ["Mixed widespread deterioration", "Limited benefit", "Broader review warranted"]] } },
      { id: "tucson-routing", title: "Tucson Route Considerations", paragraphs: ["Attics can become extremely hot, so pipe placement, support, insulation, and manufacturer requirements matter. Exterior and garage routes need protection from damage and temperature exposure.", "The shortest path is not always the safest or easiest to maintain. Ask for the route to be shown before work begins." ] }
    ],
    faqs: [
      { question: "Will water pressure change after rerouting?", answer: "Route length, diameter, fittings, regulator settings, and fixture demand affect performance. The design should preserve appropriate service." },
      { question: "Must every wall be opened?", answer: "No, but openings are usually needed at routing turns and fixture connections. Access depends on the layout." },
      { question: "Can hot and cold lines share a route?", answer: "They may use the same building spaces when installed and supported appropriately, but each serves a separate function and design." },
      { question: "Does rerouting require a permit?", answer: "Requirements depend on jurisdiction and scope. Ask the contractor to identify applicable permits and inspections." }
    ]
  },
  {
    slug: "when-partial-repiping-beats-spot-repair",
    title: "When Is Partial Repiping Better Than Another Spot Repair?",
    description: "Use failure history, pipe condition, access, and fixture coverage to decide whether replacing a larger branch deserves consideration.",
    category: "Repiping",
    published: publicationDate,
    updated: publicationDate,
    readTime: "7 min read",
    heroImage: "/images/blog/repair-vs-reroute.png",
    heroAlt: "New PEX branch beside several repaired sections of older pipe",
    primaryKeyword: "partial repiping Tucson",
    relatedService: { href: "/partial-repiping-tucson", label: "Partial Repiping" },
    keyTakeaways: ["Repeated failures on one branch are different from one isolated defect.", "A partial repipe replaces a defined section, not the whole house.", "Mixed materials and inaccessible routes affect the decision.", "The estimate should map every fixture and endpoint."],
    sections: [
      { id: "signals", title: "Signals That Broader Replacement May Help", paragraphs: ["Several repairs on the same run, visible pitting or deterioration at exposed sections, mixed questionable joints, or an inaccessible slab route can make another isolated opening unattractive.", "One leak does not prove the entire system is failing. The recommendation should be limited to the evidence and the branch being considered."], bullets: ["More than one failure on the same run", "Poor condition observed at accessible sections", "Practical replacement route", "Several fixtures served by the affected branch"] },
      { id: "scope", title: "Define the Partial-Repipe Scope", paragraphs: ["The plan should mark where new pipe starts and ends, which fixtures are reconnected, which old sections are abandoned, and where walls or ceilings are opened.", "Material, sizing, support, insulation, penetrations, permits, pressure testing, finish repairs, and warranty terms belong in writing."], table: { caption: "Decision factors", headers: ["Factor", "Spot repair", "Partial repipe"], rows: [["Failure history", "One isolated event", "Repeated branch events"], ["Access", "Localized floor opening", "Route through building"], ["Pipe addressed", "One section", "Defined branch"], ["Disruption", "Floor and concrete", "Multiple route openings"]] } },
      { id: "avoid-overselling", title: "Avoid Unnecessary Whole-House Claims", paragraphs: ["A partial repipe is not proof that every pipe must be replaced. Ask the provider to separate confirmed defects from risk observations and future options.", "When different proposals recommend very different scopes, compare the documented evidence and consider an independent evaluation." ] }
    ],
    faqs: [
      { question: "Is partial repiping the same as whole-house repiping?", answer: "No. It replaces a defined branch or group of related lines while other plumbing remains in service." },
      { question: "Can different pipe materials be connected?", answer: "Approved transitions can connect compatible systems when selected and installed correctly." },
      { question: "Will the old branch be removed?", answer: "Concealed under-slab pipe is often disconnected and abandoned rather than excavated along its full length." },
      { question: "How is the new branch tested?", answer: "Connections and the completed section should be pressure-tested and fixtures checked before walls or ceilings are closed." }
    ]
  },
  {
    slug: "abandon-failed-pipe-under-slab",
    title: "Can a Failed Pipe Be Abandoned Safely Beneath the Slab?",
    description: "Understand what pipe abandonment means, how a failed run is disconnected, and why a new route must be tested before finishes are closed.",
    category: "Rerouting",
    published: publicationDate,
    updated: publicationDate,
    readTime: "5 min read",
    heroImage: "/images/blog/direct-slab-repair.png",
    heroAlt: "Diagram-like view of an abandoned under-slab pipe and new bypass route",
    primaryKeyword: "abandon leaking pipe under slab",
    relatedService: { href: "/water-line-rerouting-tucson", label: "Water-Line Rerouting" },
    keyTakeaways: ["Abandonment means the old run is permanently removed from active service.", "A new route supplies the affected fixtures.", "Endpoints and penetrations must be handled appropriately.", "The new system is tested before closure."],
    sections: [
      { id: "meaning", title: "What Abandonment Means", paragraphs: ["The failed under-slab pipe is disconnected so pressurized water can no longer enter it. The concealed pipe may remain physically in place because removing its full length would require unnecessary demolition.", "A new line or branch is installed through an accessible route and connected to the same intended fixtures." ] },
      { id: "safe-scope", title: "What a Safe Scope Should Address", paragraphs: ["The plan identifies disconnection points, new route, pipe sizing, fixture reconnections, penetrations, support, insulation, valves, and how unused openings are handled.", "Local code, permits, material instructions, and site conditions govern the exact method."], table: { caption: "Abandonment checklist", headers: ["Item", "Required outcome"], rows: [["Old run", "Disconnected from pressure"], ["New run", "Code-compliant route and material"], ["Fixtures", "Supplied and tested"], ["Openings", "Protected and restored per scope"]] } },
      { id: "verification", title: "Verify Before Closing Finishes", paragraphs: ["The new line and its connections are pressure-tested, fixtures are operated, and the old route is checked to confirm it no longer carries water.", "Photographs and a route diagram can help future homeowners and technicians understand which concealed pipe is active." ] }
    ],
    faqs: [
      { question: "Will water remain inside the abandoned pipe?", answer: "The method should address draining or isolating the run as applicable. Ask the installer to explain endpoint treatment." },
      { question: "Can the old pipe leak again?", answer: "Once correctly disconnected from all pressurized supply, it should no longer receive water from the active system." },
      { question: "Does abandoning pipe weaken the slab?", answer: "Leaving an existing concealed pipe in place is different from excavating it. Structural questions about unusual conditions should be referred appropriately." },
      { question: "Should the route be documented?", answer: "Yes. A drawing, photographs, materials, test results, and warranty information are useful records." }
    ]
  },
  {
    slug: "pex-water-line-rerouting-tucson",
    title: "Is PEX Suitable for Water-Line Rerouting in Tucson?",
    description: "Compare PEX with copper and CPVC, including routing flexibility, joints, support, heat exposure, compatibility, and installation quality.",
    category: "Pipe Materials",
    published: publicationDate,
    updated: publicationDate,
    readTime: "7 min read",
    heroImage: "/images/blog/attic-rerouting.png",
    heroAlt: "Properly supported and insulated PEX water lines in a Tucson attic",
    primaryKeyword: "PEX rerouting Tucson",
    relatedService: { href: "/water-line-rerouting-tucson", label: "Water-Line Rerouting" },
    keyTakeaways: ["PEX can reduce fittings on flexible routes.", "Material choice does not replace good design and workmanship.", "Attic heat, support, protection, and insulation matter in Tucson.", "Approved transitions are needed when connecting to existing plumbing."],
    sections: [
      { id: "benefits", title: "Why PEX Is Considered", paragraphs: ["PEX is flexible, corrosion-resistant as a plastic material, and can reduce the number of concealed directional fittings. It can be routed through walls and attics with less cutting than rigid pipe in some layouts.", "Product type, sizing, connection system, support spacing, bend limits, and compatibility must follow code and manufacturer requirements." ] },
      { id: "comparison", title: "PEX, Copper and CPVC", paragraphs: ["Copper is rigid, familiar, and durable when conditions and installation suit it, but it requires more fittings around complex routes and can be affected by corrosion mechanisms. CPVC is rigid plastic with its own temperature, support, joining, and handling requirements.", "The best material depends on existing plumbing, route, local requirements, exposure, installer competence, and long-term serviceability."], table: { caption: "Material considerations", headers: ["Material", "Potential advantage", "Planning concern"], rows: [["PEX", "Flexible route, fewer fittings", "Heat, UV, support and connection system"], ["Copper", "Rigid and widely understood", "Joints, corrosion conditions and routing labor"], ["CPVC", "Rigid nonmetallic option", "Handling, support and approved joining"], ["Mixed system", "Targeted replacement", "Approved transitions and compatibility"]] } },
      { id: "tucson", title: "Tucson Attic and Exterior Conditions", paragraphs: ["Unconditioned attics reach high temperatures. Keep pipe away from damaging surfaces, support it properly, protect penetrations, insulate where required, and follow temperature ratings.", "PEX must also be protected from prolonged ultraviolet exposure and physical damage. Exterior routing should not be treated as a shortcut without an approved protection plan." ] }
    ],
    faqs: [
      { question: "Does PEX eliminate slab leaks?", answer: "A reroute removes the selected run from the slab, but any material can fail from poor design, damage, defective connections, or unsuitable conditions." },
      { question: "Does PEX make water taste different?", answer: "Products approved for potable water must meet applicable standards. Temporary installation-related taste or odor questions should be discussed with the installer and manufacturer guidance." },
      { question: "Can PEX connect to existing copper?", answer: "Yes, using approved transition fittings and methods suitable for the specific systems." },
      { question: "Should attic PEX be insulated?", answer: "Insulation and placement should follow code, manufacturer instructions, energy and temperature considerations, and the project design." }
    ]
  },
  {
    slug: "tucson-attic-heat-rerouted-water-lines",
    title: "How Tucson Attic Heat Affects Rerouted Water Lines",
    description: "Learn how route placement, insulation, support, material ratings, and attic access affect water-line rerouting in desert heat.",
    category: "Tucson Plumbing",
    published: publicationDate,
    updated: publicationDate,
    readTime: "6 min read",
    heroImage: "/images/blog/attic-rerouting.png",
    heroAlt: "Insulated water lines routed neatly through a hot Tucson attic",
    primaryKeyword: "water lines in Tucson attic",
    relatedService: { href: "/water-line-rerouting-tucson", label: "Water-Line Rerouting" },
    keyTakeaways: ["Attic temperatures can heat standing cold water.", "Pipe materials and connections must be rated for the conditions.", "Insulation, spacing, support, and protection are part of the design.", "A serviceable route is better than the shortest route."],
    sections: [
      { id: "heat-effects", title: "What Desert Attic Heat Changes", paragraphs: ["Water sitting in a cold-water line can warm between uses, producing an initial burst of hot or lukewarm water. Heat also affects expansion, insulation performance, supports, nearby materials, and safe working conditions.", "The design should follow product temperature limits and keep pipe away from surfaces or equipment that can damage it." ] },
      { id: "installation", title: "Installation Details That Matter", paragraphs: ["The route should use approved pipe, fittings, supports, sleeves, nail protection, insulation, fire stopping, and access practices. Long unsupported runs and tight bends can create avoidable stress.", "Hot and cold lines should be identified, protected at penetrations, and planned around future maintenance."], table: { caption: "Attic routing checklist", headers: ["Detail", "Why it matters"], rows: [["Material rating", "Suitability for temperature and potable water"], ["Insulation", "Limits heat gain or loss"], ["Support", "Prevents sagging and movement"], ["Protection", "Reduces nail, abrasion and UV damage"], ["Access", "Allows inspection and future repair"]] } },
      { id: "compare-routes", title: "Compare Attic With Other Routes", paragraphs: ["A garage, interior wall, dropped soffit, exterior chase, or ceiling route may be more suitable for part of the run. Each choice changes finish work and exposure.", "Ask to see the proposed path and understand how the installer will protect pipe in every unconditioned section." ] }
    ],
    faqs: [
      { question: "Will cold water always be hot at first?", answer: "Attic routing can warm standing water, but pipe location, insulation, use frequency, and attic conditions determine the effect." },
      { question: "Can water lines touch ductwork?", answer: "The route should avoid damaging heat sources and follow required clearances and protection practices." },
      { question: "Does insulation prevent all heat gain?", answer: "No. It slows heat transfer but does not make an unconditioned attic behave like conditioned space." },
      { question: "Should attic work be inspected?", answer: "Applicable permit and inspection requirements depend on jurisdiction and scope. The contractor should identify them." }
    ]
  },
  {
    slug: "how-much-flooring-removed-slab-leak-repair",
    title: "How Much Flooring Is Removed During Slab-Leak Repair?",
    description: "Understand what determines a direct-access opening and how tile, stone, carpet, wood, cabinets, and concrete affect restoration planning.",
    category: "Floor Protection",
    published: publicationDate,
    updated: publicationDate,
    readTime: "6 min read",
    heroImage: "/images/blog/direct-slab-repair.png",
    heroAlt: "Small controlled floor and concrete opening for under-slab pipe repair",
    primaryKeyword: "flooring removal slab leak repair",
    relatedService: { href: "/under-slab-pipe-repair-tucson", label: "Under-Slab Pipe Repair" },
    keyTakeaways: ["No responsible provider can promise one opening size for every repair.", "Detection confidence, pipe depth, reinforcement, and working clearance affect access.", "Flooring removal and concrete access are different scopes.", "Matching material should be discussed before work."],
    sections: [
      { id: "opening-size", title: "What Determines the Opening", paragraphs: ["The repair team needs enough space to expose sound pipe, work safely, make approved connections, and test them. Depth, pipe direction, nearby utilities, reinforcement, soil, and field conditions can change the opening.", "Accurate detection helps reduce searching, but it cannot reveal every concealed obstacle." ] },
      { id: "floor-types", title: "How Flooring Changes the Plan", paragraphs: ["Carpet may be lifted and reset when condition and installation allow. Tile and stone often require removal of individual pieces around the access. Wood, continuous surfaces, cabinets, and custom finishes can expand the restoration impact.", "Ask whether the plumber, restoration contractor, or homeowner supplies matching material and completes finish work."], table: { caption: "Flooring considerations", headers: ["Finish", "Access issue", "Planning question"], rows: [["Tile", "Breakage and matching", "Is spare matching tile available?"], ["Stone", "Thickness and specialized cutting", "Who performs removal and reset?"], ["Carpet", "Lift, pad and seam condition", "Can existing material be reinstalled?"], ["Wood or continuous floor", "Wider matching impact", "Is rerouting a better comparison?"]] } },
      { id: "written-scope", title: "Put Restoration in Writing", paragraphs: ["The proposal should separate finish removal, concrete cutting, excavation, plumbing, backfill, concrete closure, flooring, baseboard, dust control, cleanup, and painting.", "Photograph the area and record finish products before work. If an insurance claim is possible, ask what documentation is required before evidence is removed." ] }
    ],
    faqs: [
      { question: "Can the opening fit within one tile?", answer: "Sometimes, but pipe location, depth, clearance, tile size, and field conditions determine whether that is safe and practical." },
      { question: "Does detection guarantee minimal damage?", answer: "It can reduce unnecessary searching, but it cannot guarantee a specific access size or zero finish damage." },
      { question: "Who replaces the concrete?", answer: "It depends on the contract. Concrete closure may be included while finished flooring remains excluded." },
      { question: "Can rerouting avoid the floor?", answer: "Often, but it may move finish openings to walls, ceilings, a garage, attic, or exterior route." }
    ]
  },
  {
    slug: "slab-leak-repair-cost-factors-tucson",
    title: "What Affects Slab-Leak Repair Cost in Tucson?",
    description: "A transparent explanation of detection, access, pipe work, rerouting, permits, restoration, urgency, and the limits of price estimates.",
    category: "Cost Guide",
    published: publicationDate,
    updated: publicationDate,
    readTime: "8 min read",
    heroImage: "/images/blog/cost-estimate.png",
    heroAlt: "Itemized plumbing estimate beside pipe plans and repair tools",
    primaryKeyword: "slab leak repair cost Tucson",
    relatedService: { href: "/slab-leak-repair-cost-tucson", label: "Slab Leak Repair Cost" },
    keyTakeaways: ["Detection and repair are separate cost categories.", "Access and finish restoration can exceed the pipe-work difference.", "Rerouting cost depends on route and fixture reconnections.", "A useful estimate lists inclusions, exclusions, and contingencies."],
    sections: [
      { id: "cost-groups", title: "The Main Cost Groups", paragraphs: ["Diagnosis can include meter checks, pressure testing, branch isolation, route tracing, and locating. Repair can include direct access, pipe replacement, rerouting, partial repiping, testing, permits, and restoration.", "Urgent scheduling, water extraction, unusual access, asbestos or hazardous-material procedures, custom finishes, and work outside normal hours may add separate costs."], table: { caption: "Cost factors", headers: ["Category", "Examples", "Question"], rows: [["Detection", "Testing and locating", "Is the written report included?"], ["Access", "Concrete, wall, ceiling or attic", "Who opens and closes finishes?"], ["Plumbing", "Material, joints and route", "What exact line is included?"], ["Restoration", "Tile, drywall, paint and cleanup", "Which trades are included?"], ["Administration", "Permit and inspection", "Who obtains and pays?"]] } },
      { id: "methods", title: "Why Repair Methods Price Differently", paragraphs: ["Spot repair concentrates labor at one floor opening. Rerouting may use more pipe and fixture connections but avoid expensive flooring. Partial repiping covers a larger defined branch.", "Compare total project impact rather than assuming the smallest plumbing scope creates the lowest final cost." ] },
      { id: "accurate-estimate", title: "How to Get a More Useful Estimate", paragraphs: ["Complete diagnosis first, provide repair history and finish information, and ask for the proposed route to be marked. Request allowances or contingencies for concealed conditions.", "Avoid quotes that omit access, testing, restoration, permits, water shutoff, cleanup, and warranty information." ] }
    ],
    faqs: [
      { question: "Can cost be quoted from symptoms alone?", answer: "A broad discussion is possible, but a reliable project estimate needs diagnosis, access review, pipe route, and restoration scope." },
      { question: "Is rerouting cheaper than direct repair?", answer: "Sometimes. The answer depends on route complexity and the cost of floor and concrete restoration." },
      { question: "Does emergency service cost more?", answer: "After-hours response, travel, extraction, temporary work, and scheduling may add cost. Ask what the emergency visit includes." },
      { question: "Should I choose the lowest quote?", answer: "Compare equivalent scope, evidence, materials, testing, restoration, permits, warranty, and contingencies—not only the total." }
    ]
  },
  {
    slug: "slab-leak-repair-estimate-checklist",
    title: "What Should Be Included in a Slab-Leak Repair Estimate?",
    description: "Use this checklist to compare diagnosis, access, materials, restoration, permits, testing, warranty, exclusions, and change conditions.",
    category: "Hiring Guide",
    published: publicationDate,
    updated: publicationDate,
    readTime: "7 min read",
    heroImage: "/images/blog/cost-estimate.png",
    heroAlt: "Detailed slab-leak repair estimate with checklist and floor plan",
    primaryKeyword: "slab leak repair estimate",
    relatedService: { href: "/slab-leak-repair-cost-tucson", label: "Repair Cost Factors" },
    keyTakeaways: ["The estimate should identify the confirmed system and proposed method.", "Access and restoration must be explicit.", "Materials, testing, permits, warranty, and exclusions belong in writing.", "Change-order triggers should be described before work."],
    sections: [
      { id: "diagnosis", title: "Diagnosis and Proposed Repair", paragraphs: ["The document should identify the tested line, supporting findings, suspected or exposed failure area, and why direct repair, rerouting, or partial repiping is recommended.", "For a reroute, ask for start and end points, fixtures served, route, pipe size and material. For direct access, ask for the expected opening and field-condition limits." ] },
      { id: "scope", title: "Scope, Exclusions and Responsibility", paragraphs: ["List water shutoff, protection, demolition, excavation, plumbing, pressure testing, backfill, concrete, drywall, flooring, paint, cleanup, permits, inspection, and disposal.", "Any item not included should be labeled clearly so the homeowner can budget for another trade."], table: { caption: "Estimate checklist", headers: ["Section", "Must clarify"], rows: [["Evidence", "What was tested and found"], ["Access", "Where and who opens"], ["Pipe work", "Material, size, fittings and route"], ["Verification", "Pressure and fixture testing"], ["Restoration", "Concrete, tile, drywall and paint"], ["Terms", "Price, schedule, warranty and changes"]] } },
      { id: "changes", title: "Plan for Concealed Conditions", paragraphs: ["Underground work can reveal different depth, direction, materials, joints, reinforcement, or secondary damage. The estimate should explain how discoveries are documented and priced before extra work proceeds.", "Do not rely on verbal promises that conflict with written exclusions." ] }
    ],
    faqs: [
      { question: "Should detection fees be separate?", answer: "They may be separate or credited, but the arrangement should be clear and should not make the diagnosis less independent." },
      { question: "Should warranty terms be written?", answer: "Yes. Identify duration, covered workmanship or materials, exclusions, transfer terms, and the claim process." },
      { question: "What is a change order?", answer: "It documents additional or revised work, price, and schedule after conditions differ from the original scope." },
      { question: "Should cleanup be included?", answer: "The estimate should state dust-control and debris-removal responsibilities as well as any final cleaning exclusions." }
    ]
  },
  {
    slug: "arizona-homeowners-insurance-slab-leaks",
    title: "Does Arizona Homeowners Insurance Cover Slab Leaks?",
    description: "Understand why coverage depends on cause and policy language, and how pipe repair, access, water damage, and maintenance exclusions can differ.",
    category: "Insurance",
    published: publicationDate,
    updated: publicationDate,
    readTime: "8 min read",
    heroImage: "/images/blog/insurance-water-damage.png",
    heroAlt: "Arizona homeowners policy beside documented indoor water damage",
    primaryKeyword: "does insurance cover slab leaks Arizona",
    relatedService: { href: "/slab-leak-repair-cost-tucson", label: "Cost and Insurance Factors" },
    keyTakeaways: ["Coverage depends on the policy, cause, timing, and claim decision.", "Pipe repair, access, resulting damage, and mold can be treated differently.", "Gradual deterioration and maintenance are commonly important exclusions.", "Document damage and speak with the insurer before assuming coverage."],
    sections: [
      { id: "coverage-parts", title: "Separate the Parts of the Loss", paragraphs: ["A slab-leak event can involve the failed pipe, access through concrete or finishes, resulting water damage, drying, personal property, temporary living costs, mold, and code-related work. A policy may treat each category differently.", "Do not assume that coverage for damaged flooring means the plumbing repair itself is covered, or that access is automatically included."], table: { caption: "Questions for the insurer", headers: ["Loss component", "Question"], rows: [["Failed pipe", "Is repair or replacement covered?"], ["Access", "Is tear-out and replacement covered?"], ["Resulting damage", "Which floors, cabinets or walls qualify?"], ["Mold and drying", "What limits and procedures apply?"], ["Matching", "How are continuous finishes evaluated?"]] } },
      { id: "document", title: "Document Before Evidence Changes", paragraphs: ["Photograph moisture and damaged finishes, save bills and alerts, record meter and pressure findings, keep the diagnostic report, and preserve estimates and invoices.", "Control active water safely and take reasonable steps to limit additional damage. Ask the insurer whether an inspection is required before demolition." ] },
      { id: "avoid-promises", title: "Avoid Coverage Promises", paragraphs: ["A plumber can document the plumbing condition but does not decide coverage. An agent, adjuster, or policy professional interprets the contract for the claim.", "Arizona’s insurance regulator advises consumers to review their policies and consult their insurer about water damage. Treat general articles as questions to ask, not as a promise of payment." ] }
    ],
    faqs: [
      { question: "Is gradual leakage covered?", answer: "Policies often distinguish sudden accidental events from long-term deterioration or maintenance. Read the specific contract and claim decision." },
      { question: "Will insurance pay to reroute the line?", answer: "That depends on policy coverage, cause, repair proposal, and insurer approval. Obtain written guidance." },
      { question: "Should I call before repair?", answer: "When safe and practical, ask about documentation and inspection requirements. Do not delay emergency steps needed to stop active damage." },
      { question: "Does this article provide coverage advice?", answer: "No. It identifies questions for your insurer. Only the policy and authorized claim process determine coverage." }
    ]
  },
  {
    slug: "tile-concrete-drywall-after-slab-leak",
    title: "Who Repairs Tile, Concrete and Drywall After a Slab Leak?",
    description: "Understand how plumbing, concrete closure, flooring, drywall, paint, drying, and cleanup may be divided among separate scopes.",
    category: "Restoration",
    published: publicationDate,
    updated: publicationDate,
    readTime: "6 min read",
    heroImage: "/images/blog/restoration-after-repair.png",
    heroAlt: "Restored tile, concrete patch and drywall after water-line repair",
    primaryKeyword: "slab leak floor restoration",
    relatedService: { href: "/slab-leak-repair-tucson", label: "Slab Leak Repair" },
    keyTakeaways: ["Plumbing repair and finish restoration are often separate scopes.", "Concrete closure does not necessarily include tile or paint.", "Drying and remediation may need specialized providers.", "Every responsibility should be listed before work begins."],
    sections: [
      { id: "trades", title: "Different Work May Require Different Trades", paragraphs: ["The plumber diagnoses and repairs or reroutes the water line. Concrete cutting and closure may be included by the plumbing contractor or subcontracted. Flooring installers, drywall professionals, painters, cabinet workers, and restoration companies may handle the remaining finishes.", "Water extraction and drying are different from pipe repair. Suspected contamination or mold requires appropriate assessment and procedures."], table: { caption: "Typical responsibility map", headers: ["Work", "Possible provider", "Confirm in writing"], rows: [["Pipe repair", "Licensed plumbing contractor", "Material, joints and testing"], ["Concrete closure", "Plumber or concrete trade", "Backfill and finish level"], ["Tile or flooring", "Flooring specialist", "Removal, matching and installation"], ["Drywall and paint", "Finish contractor", "Texture and color matching"], ["Drying or remediation", "Restoration provider", "Monitoring and clearance scope"]] } },
      { id: "before-work", title: "Plan Restoration Before Access", paragraphs: ["Photograph finishes, identify spare tile or product information, protect adjoining rooms, and decide who moves furniture and appliances. Ask whether the proposed opening affects cabinets, baseboards, transitions, or continuous flooring.", "If insurance may be involved, ask what evidence and estimates are required before demolition." ] },
      { id: "closeout", title: "Closeout Records", paragraphs: ["Keep photographs of exposed pipe, new materials, pressure-test results, concrete work, finish repairs, invoices, permits, and warranties.", "A complete record helps with future maintenance, property sale questions, and any later issue near the same area." ] }
    ],
    faqs: [
      { question: "Does concrete patching include tile?", answer: "Not necessarily. Concrete closure and finished flooring should be listed as separate scope items." },
      { question: "Who matches discontinued tile?", answer: "The estimate should assign sourcing and matching responsibility. Exact matching may not be possible." },
      { question: "Can drywall be closed immediately after rerouting?", answer: "The new plumbing should be tested and any required inspection completed before concealed finishes are closed." },
      { question: "Who handles water-damaged cabinets?", answer: "Cabinet repair or replacement is often outside plumbing scope and may involve restoration, cabinetry, and insurance coordination." }
    ]
  }
];

export const blogArticles: BlogArticle[] = baseBlogArticles.map((article) => {
  const expansion = blogArticleExpansions[article.slug];

  if (!expansion) {
    throw new Error(`Missing editorial expansion for blog article: ${article.slug}`);
  }

  return {
    ...article,
    updated: "July 20, 2026",
    readTime: expansion.readTime,
    sections: [...article.sections, ...expansion.sections],
    contextualLinks: expansion.contextualLinks,
  };
});

export const blogArticleBySlug = new Map(blogArticles.map((article) => [article.slug, article]));
