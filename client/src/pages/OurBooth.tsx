import { motion } from "framer-motion";
import { Link } from "wouter";
import { Camera, Smartphone, Printer, Palette, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import boothMini from "@assets/Lockwood_Booth_1777999897959.png";
import boothFull from "@assets/Full_Size_Photoma_Booth_1778000466152.png";
import strip1 from "@assets/Lockwood_Strip_1_1777999912743.png";
import strip2 from "@assets/Lockwood_Strip_2_1777999920690.png";

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
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              We offer two professional photo booth models — each fully managed by our team, designed for permanent venue placement, and built to delight guests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booth 1: Photoma Mini */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img
                  src={boothMini}
                  alt="The Photoma Mini photo booth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:flex gap-3">
                <div className="w-24 bg-white p-2 rounded-lg shadow-xl -rotate-3">
                  <img src={strip1} alt="Photo strip sample" className="w-full h-full object-cover rounded" />
                </div>
                <div className="w-24 bg-white p-2 rounded-lg shadow-xl rotate-2 mt-4">
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
                <p className="text-muted-foreground text-sm mt-1">by Apple Industries</p>
              </div>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                A self-contained, vintage-inspired photo booth with a compact footprint — ideal for restaurants, bars, retail spaces, and boutique venues. Bold presence without taking over the room.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <Camera className="w-5 h-5 text-primary" />, title: "DSLR Quality", desc: "Professional-grade camera with studio ring lighting." },
                  { icon: <Printer className="w-5 h-5 text-primary" />, title: "Instant Prints", desc: "2\"×6\" strips or 4\"×6\" prints — dye-sublimation quality." },
                  { icon: <Smartphone className="w-5 h-5 text-primary" />, title: "Digital Sharing", desc: "Text or email photos instantly. No app needed." },
                  { icon: <Palette className="w-5 h-5 text-primary" />, title: "Custom Branding", desc: "Branded overlays designed to match your venue." },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary/10 rounded-full shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-serif font-bold text-base">{f.title}</h4>
                      <p className="text-muted-foreground text-sm font-light mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini Specs */}
              <div className="pt-2 border-t border-border/50">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">Dimensions</p>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "Height", value: "72\"" },
                    { label: "Width", value: "26\"" },
                    { label: "Depth", value: "34\"" },
                    { label: "Weight", value: "~300 lbs" },
                  ].map((s, i) => (
                    <div key={i} className="text-center bg-muted/40 rounded-lg p-3 border border-border/40">
                      <p className="font-serif font-bold text-lg text-foreground">{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3 text-sm text-muted-foreground font-light">
                  <span>⚡ Standard 110V outlet</span>
                  <span>📶 WiFi · cloud-connected</span>
                  <span>🔒 Fully insured</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="border-t border-border/50" />
      </div>

      {/* Booth 2: Full Size Photoma */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text first on desktop for variety */}
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
                <p className="text-muted-foreground text-sm mt-1">Full-Size Model</p>
              </div>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                The full-size Photoma Booth is a walk-in experience that makes a statement. With a spacious interior, curtained enclosure, and large external display, it's built for high-traffic venues and premium events.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <Users className="w-5 h-5 text-primary" />, title: "Walk-In Booth", desc: "Curtained enclosure fits groups of 2–4 for a private, fun experience." },
                  { icon: <Printer className="w-5 h-5 text-primary" />, title: "Instant Prints", desc: "Same dye-sublimation quality with large external print dispenser." },
                  { icon: <Smartphone className="w-5 h-5 text-primary" />, title: "Social Sharing", desc: "Share directly to Instagram, Facebook, Snapchat, and TikTok." },
                  { icon: <Zap className="w-5 h-5 text-primary" />, title: "High Capacity", desc: "Designed for high-traffic venues — handles a busy crowd with ease." },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-2.5 bg-primary/10 rounded-full shrink-0">{f.icon}</div>
                    <div>
                      <h4 className="font-serif font-bold text-base">{f.title}</h4>
                      <p className="text-muted-foreground text-sm font-light mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Full Size Specs */}
              <div className="pt-2 border-t border-border/50">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">Dimensions</p>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "Height", value: "84\"" },
                    { label: "Width", value: "55\"" },
                    { label: "Depth", value: "48\"" },
                    { label: "Weight", value: "~500 lbs" },
                  ].map((s, i) => (
                    <div key={i} className="text-center bg-muted/40 rounded-lg p-3 border border-border/40">
                      <p className="font-serif font-bold text-lg text-foreground">{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3 text-sm text-muted-foreground font-light">
                  <span>⚡ Standard 110V outlet</span>
                  <span>📶 WiFi · cloud-connected</span>
                  <span>🔒 Fully insured</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img
                  src={boothFull}
                  alt="The full-size Photoma Booth"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Host One?</h2>
          <p className="text-background/60 text-lg max-w-xl mx-auto mb-8 font-light">
            Not sure which booth fits your space? Tell us about your venue and we'll recommend the right model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partner">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif px-8 py-6">
                Get a Booth Now!
              </Button>
            </Link>
            <Link href="/rentals">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-serif px-8 py-6">
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
