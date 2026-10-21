import { motion } from "framer-motion";
import stripsSecondRodeo from "@assets/real/strips-second-rodeo-fort-worth.webp";
import stripsTwistedJ from "@assets/real/strips-twisted-j-stephenville.webp";

const strips = [
  {
    src: stripsSecondRodeo,
    alt: "Three custom Second Rodeo Brewing photo strip designs printed by Experience Vending, Fort Worth, TX",
    venue: "Second Rodeo Brewing",
    city: "Fort Worth, TX",
  },
  {
    src: stripsTwistedJ,
    alt: "Custom Twisted J Live photo strips printed by Experience Vending, Stephenville, TX",
    venue: "Twisted J Live",
    city: "Stephenville, TX",
  },
];

export default function CustomStrips() {
  return (
    <section className="py-24 bg-espresso-glow border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="label-luxury">Custom branded prints with your venue's logo</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-4">Custom Strips for Every Venue</h2>
          <div className="flex items-center gap-3 w-fit mx-auto my-3">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <span className="text-primary/50 text-[9px]">◆</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {strips.map((s, i) => (
            <motion.figure
              key={s.venue}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="hairline-frame rounded-t-[18px] bg-card/70 p-4 md:p-5"
            >
              <div className="overflow-hidden rounded-t-[12px] border border-primary/35">
                <img
                  src={s.src}
                  alt={s.alt}
                  width={1086}
                  height={1448}
                  loading="lazy"
                  decoding="async"
                  className="block w-full aspect-[3/4] object-cover"
                />
              </div>
              <figcaption className="pt-5 pb-1 text-center">
                <span className="block font-serif text-xl font-semibold text-foreground">{s.venue}</span>
                <span className="block mt-1 text-primary tracking-[0.3em] text-[0.65rem] uppercase">{s.city}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
