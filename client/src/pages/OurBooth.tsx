import { motion } from "framer-motion";
import { Link } from "wouter";
import { Camera, Smartphone, Printer, Palette, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import boothPhoto from "@assets/Lockwood_Booth_1777999897959.png";
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
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">The Photoma Mini</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mt-3 mb-6">
              Not Your Average <span className="text-primary italic">Photo Booth</span>
            </h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              The Photoma Mini by Apple Industries is a self-contained, professional photo booth designed for permanent venue placement. Bold presence, compact footprint, zero hassle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Visual + Features */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

            {/* Photos */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img
                  src={boothPhoto}
                  alt="The Photoma Mini photo booth"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Photo strips accent */}
              <div className="absolute -bottom-6 -right-6 hidden md:flex gap-3">
                <div className="w-24 bg-white p-2 rounded-lg shadow-xl -rotate-3">
                  <img
                    src={strip1}
                    alt="Photo strip sample"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="w-24 bg-white p-2 rounded-lg shadow-xl rotate-2 mt-4">
                  <img
                    src={strip2}
                    alt="Photo strip sample"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="font-serif text-3xl font-bold">Beautifully Built. Technically Brilliant.</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                A professional DSLR camera, ring-light studio lighting, and an intuitive touchscreen in one sleek cabinet. It enhances your space as much as it entertains your guests.
              </p>

              <div className="grid grid-cols-1 gap-5">
                {[
                  { icon: <Camera className="w-5 h-5 text-primary" />, title: "DSLR Quality", desc: "Professional-grade camera with studio ring lighting for flawless portraits every time." },
                  { icon: <Printer className="w-5 h-5 text-primary" />, title: "Instant Prints", desc: "Dye-sublimation prints in seconds — 2\"×6\" strips or 4\"×6\" prints, fully customizable." },
                  { icon: <Smartphone className="w-5 h-5 text-primary" />, title: "Digital Sharing", desc: "Guests can text or email their photos instantly. No app download required." },
                  { icon: <Palette className="w-5 h-5 text-primary" />, title: "Custom Branding", desc: "Branded photo strips and overlays designed to match your venue's aesthetic." },
                  { icon: <Zap className="w-5 h-5 text-primary" />, title: "Always Online", desc: "Cloud-connected for remote monitoring and instant tech support." },
                  { icon: <Shield className="w-5 h-5 text-primary" />, title: "Fully Insured", desc: "Comprehensive coverage on all equipment. Zero liability for your venue." },
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Size Specs */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">Dimensions & Specs</span>
            <h2 className="font-serif text-4xl font-bold mt-2 text-white">Compact Enough for Any Venue</h2>
            <p className="text-background/60 mt-4 font-light max-w-xl mx-auto">
              The Photoma Mini is designed to fit comfortably in lobbies, dining areas, event spaces, and retail floors without disrupting your layout.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { label: "Height", value: "72\"", sub: "6 ft tall" },
              { label: "Width", value: "26\"", sub: "just over 2 ft" },
              { label: "Depth", value: "34\"", sub: "front to back" },
              { label: "Weight", value: "~300 lbs", sub: "installed unit" },
            ].map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-white/10 rounded-xl p-6 text-center bg-white/5"
              >
                <p className="text-primary font-serif text-4xl font-bold">{spec.value}</p>
                <p className="text-white font-semibold mt-1">{spec.label}</p>
                <p className="text-background/50 text-xs mt-1">{spec.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Power", value: "Standard 110V outlet — no special wiring needed" },
              { label: "Print Sizes", value: "2\"×6\" photo strips · 4\"×6\" standard prints" },
              { label: "Connectivity", value: "WiFi · cloud-connected for remote management" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-white/10 rounded-xl p-5 bg-white/5"
              >
                <p className="text-primary text-xs uppercase tracking-widest font-medium mb-2">{item.label}</p>
                <p className="text-white/80 font-light">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Host One?</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 font-light">
            Apply to become a venue partner and we'll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partner">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif px-8 py-6">
                Get a Booth Now!
              </Button>
            </Link>
            <Link href="/rentals">
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 font-serif px-8 py-6">
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
