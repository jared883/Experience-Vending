import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

const packages = [
  {
    id: "basic",
    name: "The Essential",
    price: "$750",
    duration: "2 Hours",
    description: "Perfect for intimate gatherings and cocktail hours.",
    features: [
      "2 Hours of Service",
      "Unlimited Print & Digital Photos",
      "Customizable Photo Options",
      "On-site Attendant",
      "Setup & Teardown"
    ],
    highlight: false
  },
  {
    id: "advanced",
    name: "The Classic",
    price: "$999",
    duration: "4 Hours",
    description: "Our most popular choice for weddings and parties.",
    features: [
      "4 Hours of Service",
      "Unlimited Print & Digital Photos",
      "Customizable Photo Options",
      "On-site Attendant",
      "Setup & Teardown"
    ],
    highlight: true
  },
  {
    id: "premium",
    name: "The Gala",
    price: "$1,950",
    duration: "8 Hours",
    description: "All-day coverage for corporate events and grand celebrations.",
    features: [
      "8 Hours of Service",
      "Unlimited Print & Digital Photos",
      "Customizable Photo Options",
      "Guestbook Service",
      "Two On-site Attendants",
      "Priority Support"
    ],
    highlight: false
  }
];

export default function Packages() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Curated Packages" 
            subtitle="Investment" 
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                  pkg.highlight 
                    ? "bg-white border-2 border-primary shadow-xl scale-105 z-10" 
                    : "bg-white/50 border border-border hover:border-primary/30 shadow-soft"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-muted-foreground text-sm font-medium uppercase tracking-wide mb-4">{pkg.duration}</div>
                  <div className="flex justify-center items-baseline gap-1 text-foreground">
                    <span className="text-4xl font-bold font-serif">{pkg.price}</span>
                  </div>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{pkg.description}</p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 p-0.5 rounded-full bg-primary/10 text-primary">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/book?package=${pkg.id}`}>
                  <Button 
                    className={`w-full font-serif tracking-wide ${
                      pkg.highlight 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" 
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Select {pkg.name}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold mb-4">Need something custom?</h3>
            <p className="text-muted-foreground mb-8">
              We specialize in custom activations for brands and multi-day events. 
              Let us create a bespoke package just for you.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-foreground/20 hover:bg-foreground/5 font-serif">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
