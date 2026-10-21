// Current Experience Vending booth placements.
// Edit this list to add, remove, or update a location — the Home page
// "Find Our Booths" section and its Google Maps links are generated from it.
// Photos: portrait 3:4 WebP in attached_assets/real/ (optional — omit `image` to show no photo).

import lockwoodPhoto from "@assets/real/booth-lockwood-garland.webp";
import secondRodeoPhoto from "@assets/real/booth-second-rodeo-fort-worth.webp";
import vibeTacoPhoto from "@assets/real/booth-vibe-taco-fort-worth.webp";
import twistedJPhoto from "@assets/real/booth-twisted-j-stephenville.webp";

export interface BoothLocation {
  name: string;
  street: string;
  city: string;
  state: string;
  image?: string;
  imageAlt?: string;
}

export const boothLocations: BoothLocation[] = [
  {
    name: "Lockwood Distilling",
    street: "532 Main St",
    city: "Garland",
    state: "TX",
    image: lockwoodPhoto,
    imageAlt: "Experience Vending photo booth inside Lockwood Distilling in Garland, TX",
  },
  {
    name: "Second Rodeo Brewing",
    street: "122 E Exchange Ave",
    city: "Fort Worth",
    state: "TX",
    image: secondRodeoPhoto,
    imageAlt: "Experience Vending photo booth at Second Rodeo Brewing in the Fort Worth Stockyards, TX",
  },
  {
    name: "Vibe Taco",
    street: "3201 S University Dr",
    city: "Fort Worth",
    state: "TX",
    image: vibeTacoPhoto,
    imageAlt: "Custom-wrapped Vibe Taco photo booth by Experience Vending in Fort Worth, TX",
  },
  {
    name: "Twisted J Live",
    street: "2281 N US Hwy 377",
    city: "Stephenville",
    state: "TX",
    image: twistedJPhoto,
    imageAlt: "Experience Vending photo booth at Twisted J Live in Stephenville, TX",
  },
];

export function directionsUrl(loc: BoothLocation): string {
  const query = `${loc.name}, ${loc.street}, ${loc.city}, ${loc.state}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
