// Current Experience Vending booth placements.
// Edit this list to add, remove, or update a location — the Home page
// "Find Our Booths" section and its Google Maps links are generated from it.

export interface BoothLocation {
  name: string;
  street: string;
  city: string;
  state: string;
}

export const boothLocations: BoothLocation[] = [
  { name: "Lockwood Distilling", street: "532 Main St", city: "Garland", state: "TX" },
  { name: "Second Rodeo Brewing", street: "122 E Exchange Ave", city: "Fort Worth", state: "TX" },
  { name: "Vibe Taco", street: "3201 S University Dr", city: "Fort Worth", state: "TX" },
  { name: "Twisted J Live", street: "2281 N US Hwy 377", city: "Stephenville", state: "TX" },
];

export function directionsUrl(loc: BoothLocation): string {
  const query = `${loc.name}, ${loc.street}, ${loc.city}, ${loc.state}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
