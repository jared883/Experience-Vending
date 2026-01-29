import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Camera, Sparkles, Clock, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import boothInAction from "../assets/images/booth-in-action.png";
import photoStripHome from "../assets/images/photo-strip-home.jpg";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Using Unsplash image for elegant party/event atmosphere */}
          {/* Photo by photos by lanty on Unsplash */}
          <img 
            src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=2788&auto=format&fit=crop" 
            alt="Elegant event background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <span className="text-primary-foreground/90 tracking-[0.3em] text-sm md:text-base uppercase font-medium">
              Timeless Memories · Vintage Charm
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Capture the <span className="text-primary italic">Magic</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the Photoma Mini. An upscale, vintage-inspired photo booth experience designed for weddings, galas, and luxury events.
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8 py-6 rounded-full transition-transform hover:-translate-y-1">
                  Book Your Event
                </Button>
              </Link>
              <Link href="/packages">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white font-serif text-lg px-8 py-6 rounded-full backdrop-blur-sm">
                  View Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / About Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <img 
                  src={boothInAction}
                  alt="Guests enjoying the Photoma Mini photo booth" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white p-4 rounded-lg shadow-xl hidden md:block rotate-3">
                <img 
                  src={photoStripHome}
                  alt="Photo booth strips" 
                  className="w-full h-full object-cover rounded border border-border"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionHeader 
                title="More Than Just Photos" 
                subtitle="The Experience" 
                align="left"
                className="mb-6"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-light">
                In an era of digital fleeting moments, we bring back the tangible magic of photography. Our Photoma Mini booth combines mid-century modern aesthetics with cutting-edge technology.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light">
                Beautifully crafted from oak and brass, it doesn't just take photos—it adds to your decor. Perfect for those who appreciate the finer details.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <div className="p-3 bg-primary/10 w-fit rounded-full text-primary">
                    <Camera size={24} />
                  </div>
                  <h4 className="font-serif font-bold text-lg">DSLR Quality</h4>
                  <p className="text-sm text-muted-foreground">Professional lighting and optics for studio-grade portraits.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="p-3 bg-primary/10 w-fit rounded-full text-primary">
                    <Sparkles size={24} />
                  </div>
                  <h4 className="font-serif font-bold text-lg">Instant Sharing</h4>
                  <p className="text-sm text-muted-foreground">Text, email, or print your memories instantly.</p>
                </div>
              </div>

              <Link href="/experience" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all group">
                Discover the Experience <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader title="Why Choose Us" subtitle="Excellence in Every Detail" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Reliable Service",
                desc: "We arrive early for setup and ensure everything runs smoothly so you can focus on your guests."
              },
              {
                icon: <Camera className="w-8 h-8 text-primary" />,
                title: "Premium Prints",
                desc: "Laboratory-quality dye-sublimation prints that last a lifetime, customized with your event branding."
              },
              {
                icon: <Music className="w-8 h-8 text-primary" />,
                title: "Aesthetic Design",
                desc: "Our booth is designed to complement luxury venues, not clutter them. A true conversation piece."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background p-8 rounded-xl shadow-soft border border-border/50 hover:border-primary/30 transition-colors text-center"
              >
                <div className="mx-auto w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Section */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Ready to Elevate Your Event?</h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto mb-10 font-light">
            Dates fill up quickly. Secure your reservation today and let us handle the entertainment.
          </p>
          <Link href="/book">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-10 py-8 rounded-full shadow-lg hover:shadow-primary/20 transition-all">
              Check Availability
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
