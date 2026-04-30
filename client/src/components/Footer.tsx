import { Link } from "wouter";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-primary">Experience Vending LLC</h3>
            <p className="text-background/80 font-light leading-relaxed max-w-xs">
              Elevating events with vintage-inspired photo booth experiences. Creating timeless memories with a touch of elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary/90">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-background/70 hover:text-primary transition-colors">Home</Link>
              <Link href="/our-booth" className="text-background/70 hover:text-primary transition-colors">Our Booth</Link>
              <Link href="/partner" className="text-background/70 hover:text-primary transition-colors">Partner With Us</Link>
              <Link href="/rentals" className="text-background/70 hover:text-primary transition-colors">Event Rentals</Link>
              <Link href="/contact" className="text-background/70 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary/90">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-background/70">
                <Mail className="w-4 h-4 text-primary mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:jared@experiencevending.com" className="hover:text-primary transition-colors">jared@experiencevending.com</a>
                  <a href="mailto:kylee@experiencevending.com" className="hover:text-primary transition-colors">kylee@experiencevending.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-background/70">
                <Phone className="w-4 h-4 text-primary mt-1" />
                <div className="flex flex-col">
                  <a href="tel:+19403277045" className="hover:text-primary transition-colors">(940) 327-7045</a>
                  <a href="tel:+18178970460" className="hover:text-primary transition-colors">(817) 897-0460</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Dallas-Fort Worth, Texas</span>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-primary hover:text-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/40 font-light">
          <span>© {new Date().getFullYear()} Experience Vending LLC. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
