export const site = {
  brand: "Southlake Fire Restoration",
  shortBrand: "Southlake Fire Restoration",
  domain: "firedamagesouthlake.com",
  url: "https://firedamagesouthlake.com",
  region: "TX",
  city: "Southlake",
  phone: "000-000-0000",
  phoneE164: "+1-000-000-0000",
  phoneHref: "tel:+10000000000",
  hoursShort: "Help available 7 days a week",
  centroid: { lat: 32.9412, lng: -97.1342 },
  description:
    "Fire and smoke damage restoration in Southlake, TX. A local fire damage restoration crew handles soot cleanup, smoke odor removal, water extraction, and board-up. Call 000-000-0000.",
};

// Hours the phone is answered (used in schema). Broad availability for an emergency
// service, stated as answered hours, not as a round-the-clock staffing claim.
export const hours = [
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "07:00", closes: "21:00" },
];

export const areaCities = [
  { name: "Southlake", region: "TX" },
  { name: "Grapevine", region: "TX" },
  { name: "Colleyville", region: "TX" },
  { name: "Keller", region: "TX" },
  { name: "Westlake", region: "TX" },
  { name: "Trophy Club", region: "TX" },
  { name: "Roanoke", region: "TX" },
];

export const serviceNav = [
  { label: "Fire Damage Restoration", slug: "fire-damage-restoration-in-southlake", glyph: "i-flame", img: "/images/fire-damage-restoration.jpg" },
  { label: "Smoke & Soot Removal", slug: "smoke-and-soot-removal-in-southlake", glyph: "i-smoke", img: "/images/smoke-soot-removal.jpg" },
  { label: "Water Damage Restoration", slug: "water-damage-restoration-in-southlake", glyph: "i-drop", img: "/images/water-damage-restoration.jpg" },
  { label: "Emergency Board-Up & Roof Tarp", slug: "emergency-board-up-in-southlake", glyph: "i-board", img: "/images/board-up-roof-tarp.jpg" },
  { label: "Contents Cleaning & Pack-Out", slug: "contents-cleaning-pack-out-in-southlake", glyph: "i-box", img: "/images/contents-pack-out.jpg" },
  { label: "Smoke Odor Removal", slug: "smoke-odor-removal-in-southlake", glyph: "i-spray", img: "/images/odor-removal.jpg" },
];

export const categoryCards = [
  { label: "Fire Damage Restoration", sub: "Soot, char & structural cleanup", slug: "fire-damage-restoration-in-southlake", img: "/images/fire-damage-restoration.jpg" },
  { label: "Smoke & Soot Removal", sub: "Walls, ceilings, HVAC & contents", slug: "smoke-and-soot-removal-in-southlake", img: "/images/smoke-soot-removal.jpg" },
  { label: "Water Damage Restoration", sub: "Extraction & drying after firefighting", slug: "water-damage-restoration-in-southlake", img: "/images/water-damage-restoration.jpg" },
];

export const afterFire = {
  do: [
    "Wait for the fire department or officials to declare the structure safe before you go back inside.",
    "Keep movement to a minimum so soot is not ground deeper into carpet and upholstery.",
    "Open windows and doors to air out the structure if the weather is dry and it is safe to do so.",
    "Photograph the damage from a safe distance for your insurance claim before anything is moved.",
    "Empty the refrigerator and freezer and prop the doors open if the power is out.",
    "Change the HVAC filter and cover intake registers so soot is not pulled through the system.",
  ],
  dont: [
    "Do not wash walls, painted surfaces, or shampoo carpet yourself, the wrong product sets soot and stains permanently.",
    "Do not turn on ceiling fixtures or appliances if the ceiling is wet or wiring may be damaged.",
    "Do not touch soot-covered surfaces with bare hands; oils from your skin drive soot in and stain.",
    "Do not eat any canned or packaged food stored near heat, fire, or smoke.",
    "Do not send smoke-damaged clothing to a regular dry cleaner, improper cleaning locks in odor.",
    "Do not run the HVAC system until it has been checked, or soot spreads to untouched rooms.",
  ],
};

export const processSteps = [
  { n: "01", label: "Emergency Call", body: "Call and describe what happened. A local fire damage restoration crew gathers the details and heads to your Southlake property to begin the assessment." },
  { n: "02", label: "Assessment & Inspection", body: "Technicians test adjoining rooms to map how far fire, smoke, and soot traveled, then build a cleanup and restoration plan around what they find." },
  { n: "03", label: "Board-Up & Roof Tarp", body: "Broken windows, open walls, and damaged roofs are boarded up and tarped so the property is secured against weather, animals, and further loss." },
  { n: "04", label: "Water Removal & Drying", body: "Water left from firefighting is extracted and the structure is dried with commercial air movers and dehumidifiers before mold can take hold." },
  { n: "05", label: "Soot & Smoke Cleanup", body: "Soot is removed from walls, ceilings, and contents with the right method for each surface, and salvageable belongings are cleaned." },
  { n: "06", label: "Deodorize & Sanitize", body: "Smoke odor is neutralized at the source with air scrubbers, thermal fogging, and hydroxyl or ozone treatment, not just masked over." },
  { n: "07", label: "Restoration & Repairs", body: "The final step rebuilds what the fire damaged, from drywall, paint, and flooring to full room reconstruction, returning the home to pre-fire condition." },
];

export const gallery = [
  { img: "/images/work-soot-wall.jpg", alt: "Technician cleaning heavy soot from a fire-damaged wall in a Southlake home" },
  { img: "/images/work-air-mover.jpg", alt: "Commercial air movers drying a room after water damage from firefighting" },
  { img: "/images/work-board-up.jpg", alt: "Plywood board-up over a window broken during a house fire" },
  { img: "/images/work-contents.jpg", alt: "Smoke-damaged household contents packed out for off-site cleaning" },
  { img: "/images/work-ceiling.jpg", alt: "Smoke staining across a ceiling being assessed for restoration" },
  { img: "/images/work-air-scrubber.jpg", alt: "Air scrubber running to remove smoke odor during fire damage restoration" },
];

export const areaNav = [
  { label: "Grapevine, TX", slug: "grapevine-tx" },
  { label: "Colleyville, TX", slug: "colleyville-tx" },
  { label: "Keller, TX", slug: "keller-tx" },
  { label: "Westlake, TX", slug: "westlake-tx" },
  { label: "Trophy Club, TX", slug: "trophy-club-tx" },
  { label: "Roanoke, TX", slug: "roanoke-tx" },
];

export const areaImages = {
  "grapevine-tx": "/images/area-grapevine.jpg",
  "colleyville-tx": "/images/area-colleyville.jpg",
  "keller-tx": "/images/area-keller.jpg",
  "westlake-tx": "/images/area-westlake.jpg",
  "trophy-club-tx": "/images/area-trophy-club.jpg",
  "roanoke-tx": "/images/area-roanoke.jpg",
};

export const allPaths = [
  "/",
  "/services/",
  "/service-areas/",
  "/how-it-works/",
  "/what-to-do-after-a-fire/",
  "/about/",
  "/contact/",
  "/privacy-policy/",
  ...serviceNav.map((s) => `/${s.slug}/`),
  ...areaNav.map((a) => `/${a.slug}/`),
];
