import { motion } from "framer-motion";
import { Link } from "wouter";
import { Camera, Smartphone, Printer, Palette, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import boothInAction from "../assets/images/booth-in-action.png";
import photoStripHome from "../assets/images/photo-strip-home.jpg";

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
              The Photoma Mini is a vintage-inspired, DSLR-powered photo booth crafted from oak and brass. It's designed to blend into upscale environments — and make guests stop in their tracks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main visual */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={boothInAction}
                  alt="The Photoma Mini photo booth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white p-4 rounded-lg shadow-xl hidden md:block rotate-3">
                <img
                  src={photoStripHome}
                  alt="Photo booth prints"
                  className="w-full h-full object-cover rounded border border-border"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="font-serif text-3xl font-bold">Beautifully Built. Technically Brilliant.</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Handcrafted with a mid-century modern aesthetic, the Photoma Mini features professional DSLR optics, studio lighting, and an intuitive touchscreen. It's as much a piece of furniture as it is a photo studio.
              </p>

              <div className="grid grid-cols-1 gap-5">
                {[
                  { icon: <Camera className="w-5 h-5 text-primary" />, title: "DSLR Quality", desc: "Professional-grade camera with studio lighting for flawless portraits every time." },
                  { icon: <Printer className="w-5 h-5 text-primary" />, title: "Instant Prints", desc: "Dye-sublimation prints in seconds. Fully customizable with venue or event branding." },
                  { icon: <Smartphone className="w-5 h-5 text-primary" />, title: "Digital Sharing", desc: "Guests can text or email their photos instantly — no app download required." },
                  { icon: <Palette className="w-5 h-5 text-primary" />, title: "Custom Templates", desc: "Branded photo strips and overlays designed to match your venue's aesthetic." },
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
