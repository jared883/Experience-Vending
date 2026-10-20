import { Link } from "wouter";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@assets/ev-logo-booth-mark-nav.png";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 text-foreground">
      {/* Top ornament strip */}
      <div className="flex items-center gap-4 px-8 pt-8 max-w-6xl mx-auto">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border/60" />
        <span className="text-primary/30 text-[9px]">◆</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border/60" />
      </div>

      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Experience Vending" className="h-14 w-auto opacity-95" />
              <div>
                <p className="font-serif text-base font-semibold text-foreground/90 tracking-wide">Experience Vending LLC</p>
                <p className="text-[0.55rem] tracking-[0.3em] text-primary/80 uppercase mt-1">Luxury Photo Booths</p>
              </div>
            </div>
            <p className="text-foreground/65 font-light leading-relaxed text-sm max-w-xs tracking-wide">
              Elevating venues with luxury photo booth experiences. Fully managed. Professionally serviced. Unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-[0.65rem] tracking-[0.3em] text-primary uppercase">Navigation</h4>
            <nav className="flex flex-col space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/#locations", label: "Booth Locations" },
                { href: "/our-booth", label: "Our Booths" },
                { href: "/partner", label: "Partner With Us" },
                { href: "/rentals", label: "Event Rentals" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                l.href.includes("#") ? (
                  <a key={l.href} href={l.href} className="text-foreground/65 hover:text-primary transition-colors duration-300 text-sm font-light tracking-wide">
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.href} href={l.href} className="text-foreground/65 hover:text-primary transition-colors duration-300 text-sm font-light tracking-wide">
                    {l.label}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-[0.65rem] tracking-[0.3em] text-primary uppercase">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-foreground/65">
                <Mail className="w-3.5 h-3.5 text-primary/50 mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:jared@experiencevending.com" className="hover:text-primary transition-colors text-sm font-light">jared@experiencevending.com</a>
                  <a href="mailto:kylee@experiencevending.com" className="hover:text-primary transition-colors text-sm font-light">kylee@experiencevending.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3 text-foreground/65">
                <Phone className="w-3.5 h-3.5 text-primary/50 mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+19403277045" className="hover:text-primary transition-colors text-sm font-light">(940) 327-7045</a>
                  <a href="tel:+18178970460" className="hover:text-primary transition-colors text-sm font-light">(817) 897-0460</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-foreground/65">
                <MapPin className="w-3.5 h-3.5 text-primary/50 shrink-0" />
                <span className="text-sm font-light">Dallas-Fort Worth, Texas</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 border border-border/50 text-foreground/75 hover:border-primary/50 hover:text-primary transition-all duration-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-border/50 text-foreground/75 hover:border-primary/50 hover:text-primary transition-all duration-400">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30 py-6 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[0.65rem] text-foreground/70 font-light tracking-widest uppercase">
          <span>© {new Date().getFullYear()} Experience Vending LLC</span>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
