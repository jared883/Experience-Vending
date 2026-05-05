import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, TrendingUp, Users, Zap, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import boothPhoto from "@assets/Photo_Booth_Home_Page_1778001708893.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Full-width Booth Photo */}
      <section className="bg-black pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img
            src={boothPhoto}
            alt="Our luxury photo booths"
            className="w-full h-auto block"
          />
        </motion.div>
      </section>

      {/* Hero Text */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-primary tracking-[0.3em] text-sm uppercase font-medium">Experience Vending LLC</span>
              <span className="text-foreground/40 tracking-[0.2em] text-sm uppercase">Servicing DFW and Surrounding Areas</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Bring the <span className="text-primary italic">Experience</span><br />to Your Venue
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
              We place one of our luxury photo booths in your business — fully managed, fully serviced. Your guests love it.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/partner">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8 py-6 rounded-full transition-transform hover:-translate-y-1">
                  Get a Booth Now!
                </Button>
              </Link>
              <Link href="/rentals">
                <Button variant="outline" size="lg" className="border-primary/40 text-primary hover:bg-primary/10 font-serif text-lg px-8 py-6 rounded-full">
                  Rent for an Event
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">Simple Process</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">How It Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Apply to Partner",
                desc: "Tell us about your venue. We'll review your space and reach out within 24 hours to discuss placement details.",
                icon: <Users className="w-7 h-7 text-primary" />
              },
              {
                step: "02",
                title: "We Handle Everything",
                desc: "We install, maintain, and service the booth. Zero effort on your end — we manage supplies, repairs, and updates.",
                icon: <Zap className="w-7 h-7 text-primary" />
              },
              {
                step: "03",
                title: "Your Guests Enjoy It",
                desc: "Guests pay per session or per print. Your venue becomes a destination. Everyone goes home with a memory.",
                icon: <Star className="w-7 h-7 text-primary" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-background border border-border/50 rounded-2xl p-8 shadow-soft hover:border-primary/40 transition-colors"
              >
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground font-serif font-bold text-sm px-3 py-1 rounded-full">
                  {item.step}
                </div>
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-full">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Booth Section */}
      <section className="py-24 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">Our Booths</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
              A Booth That Elevates Any Space
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              Our photo booths aren't your typical rental. Designed with a modern aesthetic, each unit is as much a piece of decor as it is an experience. They enhance your venue's atmosphere while delighting your guests.
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              {[
                "Compact footprint — fits in most venues",
                "DSLR-quality photos with professional lighting",
                "Instant digital sharing & print options",
                "Fully managed by our team — zero effort from you",
                "Custom branded prints with your venue's logo",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link href="/our-booth">
                <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 font-serif mt-2">
                  Learn More About Our Booths <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-card border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">Ideal Venues</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">Perfect For</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { label: "Restaurants & Bars", icon: "🍽️" },
              { label: "Wedding Venues", icon: "💍" },
              { label: "Hotels & Resorts", icon: "🏨" },
              { label: "Retail Stores", icon: "🛍️" },
              { label: "Event Centers", icon: "🎉" },
              { label: "Country Clubs", icon: "⛳" },
            ].map((venue, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="bg-background border border-border/50 rounded-xl p-6 text-center hover:border-primary/50 hover:shadow-gold transition-all cursor-default"
              >
                <div className="text-3xl mb-3">{venue.icon}</div>
                <p className="text-sm font-medium text-foreground/70 leading-tight">{venue.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-background border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">Service Area</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Proudly Serving the DFW Metroplex</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto font-light">
            Based in Fort Worth, Texas. We currently place booths throughout Dallas, Fort Worth, Arlington, Frisco, Plano, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* CTA */}
      <section className="py-32 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Ready to Add a New Experience?</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto mb-10 font-light">
            Join venues across DFW that are giving their guests something to talk about. Apply today and we'll reach out within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partner">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-10 py-8 rounded-full shadow-gold transition-all">
                Get a Booth Now!
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-serif text-lg px-10 py-8 rounded-full">
                Ask a Question
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
