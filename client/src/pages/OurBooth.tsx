import { motion } from "framer-motion";
import { Link } from "wouter";
import { Camera, Smartphone, Printer, Palette, Zap, Shield, Users, Monitor, Wifi, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import boothMini from "@assets/Lockwood_Booth_1777999897959.png";
import boothFull from "@assets/Full_Size_Photoma_Booth_1778000466152.png";
import strip1 from "@assets/Lockwood_Strip_1_1777999912743.png";
import strip2 from "@assets/Lockwood_Strip_2_1777999920690.png";

function SpecBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-2">{label}</p>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-foreground/60 font-light flex items-start gap-2">
            <span className="text-primary mt-0.5 shrink-0">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OurBooth() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">Experience Vending LLC</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mt-3 mb-6">
              Our <span className="text-primary italic">Booths</span>
            </h1>
            <p className="text-foreground/60 text-lg font-light leading-relaxed">
              We offer two professional photo booth models — each fully managed by our team, designed for permanent venue placement, and built to delight guests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BOOTH 1: Photoma Mini ── */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-gold bg-black">
                <img src={boothMini} alt="The Photoma Mini photo booth" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:flex gap-3">
                <div className="w-24 bg-card p-2 rounded-lg shadow-gold -rotate-3 border border-border/50">
                  <img src={strip1} alt="Photo strip sample" className="w-full h-full object-cover rounded" />
                </div>
                <div className="w-24 bg-card p-2 rounded-lg shadow-gold rotate-2 mt-4 border border-border/50">
                  <img src={strip2} alt="Photo strip sample" className="w-full h-full object-cover rounded" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">Model 01</span>
                <h2 className="font-serif text-4xl font-bold mt-1">Photoma Mini</h2>
                <p className="text-foreground/40 text-sm mt-1">by Apple Industries</p>
              </div>
              <p className="text-foreground/60 text-lg font-light leading-relaxed">
                A self-contained photo booth with a compact footprint — ideal for restaurants, bars, retail spaces, and boutique venues. Bold presence without taking over the room. Indoor use.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <Camera className="w-5 h-5 text-primary" />, title: "Professional Camera", desc: "DSLR-quality optics with studio ring lighting for flawless portraits." },
                  { icon: <CreditCard className="w-5 h-5 text-primary" />, title: "Cashless Payments", desc: "Tap, swipe, or digital wallet — no cash handling required." },
                  { icon: <Printer className="w-5 h-5 text-primary" />, title: "Instant Prints", desc: "2\"×6\" strips or 4\"×6\" prints. 700 vends per paper roll." },
                  { icon: <Smartphone className="w-5 h-5 text-primary" />, title: "Digital Sharing", desc: "Email, Facebook, X, Instagram, and TikTok — all built in." },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary/10 rounded-full shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-serif font-bold text-base">{f.title}</h4>
                      <p className="text-foreground/50 text-sm font-light mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Full spec grid — Mini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border/50 rounded-2xl p-8"
          >
            <h3 className="font-serif text-xl font-bold mb-8">Full Specifications — Photoma Mini</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Length", value: "38\"" },
                { label: "Width", value: "30\"" },
                { label: "Height", value: "84\"" },
                { label: "Weight", value: "600 lbs" },
              ].map((s, i) => (
                <div key={i} className="text-center bg-background rounded-xl p-4 border border-border/40 shadow-soft">
                  <p className="font-serif font-bold text-2xl text-primary">{s.value}</p>
                  <p className="text-xs text-foreground/40 mt-1 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <SpecBlock label="General Features" items={["Fully Customizable","Indoor Use","Touch Screen Navigation","Cashless Payments","Digital & Print Options","Multiple Languages","700 Vends Per Roll"]} />
              <SpecBlock label="Power Requirements" items={["110–240 VAC","50/60 Hz","7 AMPS","800W"]} />
              <SpecBlock label="Theme Packages" items={["4×6 Photos","2×6 Photo Strips","Standard","Fun Filters","Augmented Reality","Licensed Content"]} />
              <SpecBlock label="Remote Monitoring" items={["Proactive maintenance alerts","Unit management via Back Office portal"]} />
              <SpecBlock label="Social Sharing" items={["Email","Facebook","X (Twitter)","Instagram","TikTok","Via OOBE platform"]} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl py-4">
        <div className="border-t border-border/50" />
      </div>

      {/* ── BOOTH 2: Full-Size Photoma Booth ── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:order-1"
            >
              <div>
                <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">Model 02</span>
                <h2 className="font-serif text-4xl font-bold mt-1">Photoma Booth</h2>
                <p className="text-foreground/40 text-sm mt-1">Full-Size Model · Indoor &amp; Outdoor</p>
              </div>
              <p className="text-foreground/60 text-lg font-light leading-relaxed">
                The full-size Photoma Booth is a walk-in experience that makes a statement. Spacious curtained enclosure, dual displays, and a large-format print dispenser — built for high-traffic venues.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <Users className="w-5 h-5 text-primary" />, title: "Walk-In Enclosure", desc: "Curtained booth fits groups of 2–4 for a private, fun experience." },
                  { icon: <Monitor className="w-5 h-5 text-primary" />, title: "Dual Displays", desc: "Internal shooting screen plus external preview monitor for bystanders." },
                  { icon: <Zap className="w-5 h-5 text-primary" />, title: "Indoor & Outdoor", desc: "Versatile placement — works in covered outdoor venues too." },
                  { icon: <Wifi className="w-5 h-5 text-primary" />, title: "Cloud Management", desc: "Full remote monitoring of maintenance alerts and unit status." },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary/10 rounded-full shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-serif font-bold text-base">{f.title}</h4>
                      <p className="text-foreground/50 text-sm font-light mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-gold bg-black">
                <img src={boothFull} alt="The full-size Photoma Booth" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Full spec grid — Full Size */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border/50 rounded-2xl p-8"
          >
            <h3 className="font-serif text-xl font-bold mb-8">Full Specifications — Photoma Booth (Full-Size)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Length", value: "70\"" },
                { label: "Width", value: "32\"" },
                { label: "Height", value: "84\"" },
                { label: "Weight", value: "960 lbs*" },
              ].map((s, i) => (
                <div key={i} className="text-center bg-background rounded-xl p-4 border border-border/40 shadow-soft">
                  <p className="font-serif font-bold text-2xl text-primary">{s.value}</p>
                  <p className="text-xs text-foreground/40 mt-1 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-foreground/40 mb-6 -mt-4">* Includes clearance allowance</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <SpecBlock label="General Features" items={["Fully Customizable","Indoor & Outdoor Use","Touch Screen Navigation","Cashless Payments","Digital & Print Options","Multiple Languages","700 Vends Per Roll"]} />
              <SpecBlock label="Power Requirements" items={["110–240 VAC","50/60 Hz","7 AMPS","800W"]} />
              <SpecBlock label="Theme Packages" items={["4×6 Photos","2×6 Photo Strips","Standard","Fun Filters","Augmented Reality","Licensed Content"]} />
              <SpecBlock label="Remote Monitoring" items={["Proactive maintenance alerts","Unit management via Back Office portal"]} />
              <SpecBlock label="Social Sharing" items={["Email","Facebook","X (Twitter)","Instagram","TikTok","Via OOBE platform"]} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Host One?</h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto mb-8 font-light">
            Not sure which booth fits your space? Tell us about your venue and we'll recommend the right model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partner">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif px-8 py-6 shadow-gold">
                Get a Booth Now!
              </Button>
            </Link>
            <Link href="/rentals">
              <Button size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 font-serif px-8 py-6">
                Rent for an Event
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
