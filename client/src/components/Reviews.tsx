import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SiGoogle } from "react-icons/si";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The Photoma Mini was the highlight of our wedding! Guests couldn't stop talking about how elegant and fun it was. The photo quality is unmatched.",
    event: "Wedding Reception"
  },
  {
    id: 2,
    name: "Michael T.",
    rating: 5,
    text: "We hired Experience Vending for our corporate gala and it exceeded all expectations. Professional, stylish, and our guests loved the vintage feel.",
    event: "Corporate Gala"
  },
  {
    id: 3,
    name: "Jessica R.",
    rating: 5,
    text: "Absolutely stunning booth! The black and white photos came out like professional portraits. Worth every penny for our anniversary party.",
    event: "Anniversary Party"
  }
];

export default function Reviews() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <SiGoogle className="w-4 h-4 text-primary/60" />
            <span className="label-luxury">Google Reviews</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">What Our Clients Say</h2>
          <div className="flex items-center gap-3 w-fit mx-auto my-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <span className="text-primary/50 text-[9px]">◆</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="bg-card border border-border/40 p-10 relative hover:border-primary/25 hover:shadow-gold-sm transition-all duration-500 group"
              data-testid={`review-card-${review.id}`}
            >
              {/* Large decorative quote */}
              <div className="absolute top-6 right-8 font-display text-7xl text-primary/8 leading-none select-none pointer-events-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/65 text-sm font-light leading-relaxed mb-8 italic tracking-wide">
                "{review.text}"
              </p>

              <div className="pt-6 border-t border-border/40">
                <p className="font-serif font-semibold text-foreground text-sm tracking-wide">{review.name}</p>
                <p className="text-[0.65rem] text-primary/60 uppercase tracking-[0.2em] mt-1 font-light">{review.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="https://g.page/r/experiencevendingllc/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase font-light text-foreground/40 hover:text-primary transition-colors duration-300"
            data-testid="link-google-reviews"
          >
            <SiGoogle className="w-3.5 h-3.5" />
            See all reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
