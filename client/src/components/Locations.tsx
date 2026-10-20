import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { boothLocations, directionsUrl } from "@/data/locations";

function Ornament() {
  return (
    <div className="flex items-center gap-3 w-fit mx-auto my-2">
      <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
      <span className="text-primary/50 text-[9px]">◆</span>
      <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  );
}

export default function Locations() {
  return (
    <section id="locations" className="py-28 bg-espresso-glow scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-luxury">Current Locations</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-4">Find Our Booths</h2>
          <Ornament />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {boothLocations.map((loc, idx) => (
            <motion.article
              key={loc.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="hairline-frame rounded-t-[18px] bg-card/70 flex flex-col text-center transition-all duration-500 hover:shadow-gold-sm hover:border-primary/70"
              data-testid={`location-${idx}`}
            >
              {/* Header bar — echoes the "PHOTOS" marquee on the booth */}
              <div className="px-6 pt-6 pb-4 border-b border-primary/30">
                <span className="text-primary tracking-[0.32em] text-[0.68rem] uppercase">
                  {loc.city}, {loc.state}
                </span>
              </div>

              <div className="flex-1 flex flex-col items-center px-6 py-8 gap-4">
                <h3 className="font-serif text-2xl font-semibold leading-tight text-foreground min-h-[4rem] flex items-center justify-center">
                  {loc.name}
                </h3>
                <div className="w-10 h-px bg-primary/40" />
                <address className="not-italic text-sm font-light text-foreground/75 leading-relaxed tracking-wide flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary/70 mt-1 shrink-0" />
                  <span>
                    {loc.street}
                    <br />
                    {loc.city}, {loc.state}
                  </span>
                </address>
              </div>

              <div className="px-6 pb-7">
                <a
                  href={directionsUrl(loc)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full text-[0.7rem] tracking-[0.2em] uppercase px-5 py-3 border border-primary/40 text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  Get Directions <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
