export type ServiceAreaOption = {
  zip: string;
  label: string;
};

export const serviceAreaOptions: ServiceAreaOption[] = [
  { zip: "85701", label: "Central Tucson" },
  { zip: "85704", label: "Casas Adobes" },
  { zip: "85705", label: "Flowing Wells" },
  { zip: "85706", label: "Sunnyside" },
  { zip: "85710", label: "East Tucson" },
  { zip: "85711", label: "Midtown" },
  { zip: "85712", label: "Midtown" },
  { zip: "85713", label: "South Tucson" },
  { zip: "85714", label: "South Tucson" },
  { zip: "85715", label: "Northeast Tucson" },
  { zip: "85716", label: "Midtown" },
  { zip: "85718", label: "Catalina Foothills" },
  { zip: "85719", label: "University Area" },
  { zip: "85730", label: "East Tucson" },
  { zip: "85737", label: "Oro Valley" },
  { zip: "85741", label: "Northwest Tucson" },
  { zip: "85742", label: "Cortaro Area" },
  { zip: "85743", label: "Picture Rocks" },
  { zip: "85745", label: "West Tucson" },
  { zip: "85746", label: "Southwest Tucson" },
  { zip: "85747", label: "Rita Ranch" },
  { zip: "85748", label: "East Tucson" },
  { zip: "85749", label: "Tanque Verde" },
  { zip: "85750", label: "Catalina Foothills" },
  { zip: "85755", label: "Oro Valley" },
  { zip: "85756", label: "Airport and South Tucson" },
  { zip: "85757", label: "Southwest Tucson" },
];

export const listedServiceZips = new Set(serviceAreaOptions.map(({ zip }) => zip));

export const symptomOptions = [
  "Warm flooring",
  "Damp flooring",
  "Moving water meter",
  "High water usage",
  "Low water pressure",
  "Running water sound",
  "Active water damage",
  "Confirmed slab leak",
  "Not sure",
] as const;
