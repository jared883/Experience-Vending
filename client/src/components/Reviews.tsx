import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import SectionHeader from "./SectionHeader";

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
    <section className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <SiGoogle className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground uppercase tracking-widest">Google Reviews</span>
        </div>
        <SectionHeader 
          title="What Our Clients Say" 
          subtitle="Testimonials" 
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-lg shadow-soft border border-border/50 hover:border-primary/30 transition-colors relative"
              data-testid={`review-card-${review.id}`}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-serif font-semibold text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://g.page/r/experiencevendingllc/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            data-testid="link-google-reviews"
          >
            <SiGoogle className="w-4 h-4" />
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
