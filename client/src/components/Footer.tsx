import { Link } from "wouter";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@assets/Website_Logo_1778001912952.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 text-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Experience Vending" className="w-10 h-10 rounded-full ring-1 ring-primary/30" />
              <h3 className="font-serif text-xl font-bold text-primary">Experience Vending LLC</h3>
            </div>
            <p className="text-foreground/60 font-light leading-relaxed max-w-xs">
              Elevating venues with luxury photo booth experiences. Fully managed. Professionally serviced. Unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary/90">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">Home</Link>
              <Link href="/our-booth" className="text-foreground/60 hover:text-primary transition-colors">Our Booths</Link>
              <Link href="/partner" className="text-foreground/60 hover:text-primary transition-colors">Partner With Us</Link>
              <Link href="/rentals" className="text-foreground/60 hover:text-primary transition-colors">Event Rentals</Link>
              <Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary/90">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-foreground/60">
                <Mail className="w-4 h-4 text-primary mt-1" />
                <div className="flex flex-col">
                  <a href="mailto:jared@experiencevending.com" className="hover:text-primary transition-colors">jared@experiencevending.com</a>
                  <a href="mailto:kylee@experiencevending.com" className="hover:text-primary transition-colors">kylee@experiencevending.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-foreground/60">
                <Phone className="w-4 h-4 text-primary mt-1" />
                <div className="flex flex-col">
                  <a href="tel:+19403277045" className="hover:text-primary transition-colors">(940) 327-7045</a>
                  <a href="tel:+18178970460" className="hover:text-primary transition-colors">(817) 897-0460</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-foreground/60">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Dallas-Fort Worth, Texas</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 rounded-full bg-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-foreground/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/30 font-light">
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
