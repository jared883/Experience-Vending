import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, TrendingUp, Users, Zap, Star, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Locations from "@/components/Locations";
import { useEffect } from "react";
import boothPhoto from "@assets/Photo_Booth_Home_Page_1778001708893.webp";
import fullLogo from "@assets/ev-logo-full.png";

function Ornament() {
  return (
    <div className="flex items-center gap-3 w-fit mx-auto my-2">
      <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
      <span className="text-primary/50 text-[9px]">◆</span>
      <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  );
}

export default function Home() {
  // Support deep links like /#locations from other pages
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Full-width Booth Photo */}
      <section className="bg-background pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <img
            src={boothPhoto}
            alt="Experience Vending luxury photo booths — the Photoma Mini and full-size Photoma Booth — available for venue placement and event rentals in Fort Worth and DFW"
            width={1536}
            height={1024}
            className="w-full h-auto block"
          />
        </motion.div>
      </section>

      {/* Hero Text */}
      <section className="py-24 md:py-32 bg-espresso-glow text-center">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            <img
              src={fullLogo}
              alt="Experience Vending Photo Booths logo"
              width={560}
              height={741}
              className="w-44 md:w-56 h-auto mx-auto mb-4"
            />

            <div className="flex flex-col items-center gap-2">
              <span className="label-luxury">Experience Vending LLC</span>
              <span className="text-foreground/70 tracking-[0.22em] text-[0.65rem] uppercase font-light">
                Servicing DFW and Surrounding Areas
              </span>
            </div>

            <Ornament />

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[1.08] italic tracking-tight">
              Bring the <span className="text-gold-gradient not-italic font-normal">Experience</span><br />
              <span className="not-italic font-semibold font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight">to Your Venue</span>
            </h1>

            <p className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
              We place one of our luxury photo booths in your business — fully managed, fully serviced. Your guests love it.
            </p>

            <Ornament />

            <div className="pt-4 flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/partner">
                <button className="text-[0.75rem] tracking-[0.2em] uppercase font-light px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-400 shadow-gold-sm hover:shadow-gold">
                  Get a Booth Now
                </button>
              </Link>
              <Link href="/rentals">
                <button className="text-[0.75rem] tracking-[0.2em] uppercase font-light px-10 py-4 border border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-400">
                  Rent for an Event
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thin divider */}
      <div className="w-full gold-rule" />

      {/* Current Locations */}
      <Locations />

      <div className="w-full gold-rule" />

      {/* How It Works */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="label-luxury">Simple Process</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-4">How It Works</h2>
            <Ornament />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "I",
                title: "Apply to Partner",
                desc: "Tell us about your venue. We'll review your space and reach out within 24 hours to discuss placement details.",
                icon: <Users className="w-5 h-5 text-primary" />
              },
              {
                step: "II",
                title: "We Handle Everything",
                desc: "We install, maintain, and service the booth. Zero effort on your end — we manage supplies, repairs, and updates.",
                icon: <Zap className="w-5 h-5 text-primary" />
              },
              {
                step: "III",
                title: "Your Guests Enjoy It",
                desc: "Guests pay per session or per print. Your venue becomes a destination. Everyone goes home with a memory.",
                icon: <Star className="w-5 h-5 text-primary" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.15 }}
                className="relative bg-background border border-border/50 p-10 hover:border-primary/30 hover:shadow-gold-sm transition-all duration-500 group"
              >
                <div className="absolute -top-3 left-10">
                  <span className="font-display italic text-xs text-primary/60 tracking-widest">{item.step}</span>
                </div>
                <div className="mb-6 p-2.5 bg-primary/8 w-fit border border-primary/15">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 tracking-wide">{item.title}</h3>
                <p className="text-foreground/70 font-light leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full gold-rule" />

      {/* About / Booth Section */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <span className="label-luxury">Our Booths</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight">
              A Booth That Elevates Any Space
            </h2>
            <Ornament />
            <p className="text-foreground/70 text-base leading-relaxed font-light max-w-xl mx-auto tracking-wide">
              Our Photo Booths are the luxury amenity your venue &amp; guests want. Designed with a modern aesthetic, each unit is as much a piece of decor as it is an experience.
            </p>
            <ul className="space-y-4 text-left max-w-sm mx-auto pt-2">
              {[
                "Compact footprint — fits in most venues",
                "DSLR-quality photos with professional lighting",
                "Instant digital sharing & print options",
                "Fully managed by our team — zero effort from you",
                "Custom branded prints with your venue's logo",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0 opacity-80" />
                  <span className="text-foreground/65 text-sm font-light tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <Link href="/our-booth">
                <button className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.18em] uppercase font-light px-7 py-3 border border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-400">
                  Explore Our Booths <ArrowRight size={13} />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full gold-rule" />

      {/* Who It's For */}
      <section className="py-28 bg-card">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="label-luxury">Ideal Venues</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-4">Perfect For</h2>
            <Ornament />
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
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="bg-background border border-border/40 p-6 text-center hover:border-primary/35 hover:shadow-gold-sm transition-all duration-500 cursor-default group"
              >
                <div className="text-2xl mb-3 opacity-80 group-hover:opacity-100 transition-opacity">{venue.icon}</div>
                <p className="text-[0.72rem] font-light text-foreground/75 leading-snug tracking-wide uppercase">{venue.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full gold-rule" />

      {/* Service Area */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <MapPin className="w-4 h-4 text-primary/70" />
            <span className="label-luxury">Service Area</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5">Proudly Serving the DFW Metroplex</h2>
          <p className="text-foreground/70 text-base max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Based in Fort Worth, Texas. We currently place booths throughout Dallas, Fort Worth, Arlington, Frisco, Plano, and surrounding communities.
          </p>
        </div>
      </section>

      <div className="w-full gold-rule" />

      {/* Reviews */}
      <Reviews />

      <div className="w-full gold-rule" />

      {/* CTA */}
      <section className="py-36 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10 max-w-2xl">
          <span className="label-luxury">Ready to Begin?</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-5 mb-4">
            Add a New <span className="text-gold-gradient">Experience</span>
          </h2>
          <Ornament />
          <p className="text-base text-foreground/70 mx-auto mt-6 mb-12 font-light leading-relaxed tracking-wide">
            Join venues across DFW that are giving their guests something to talk about. Apply today — we'll be in touch within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/partner">
              <button className="text-[0.75rem] tracking-[0.2em] uppercase font-light px-12 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-400 shadow-gold hover:shadow-gold">
                Get a Booth Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-[0.75rem] tracking-[0.2em] uppercase font-light px-12 py-4 border border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-400">
                Ask a Question
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
