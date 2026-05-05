import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@assets/Website_Logo_1778001912952.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/our-booth", label: "Our Booths" },
    { href: "/partner", label: "Partner With Us" },
    { href: "/rentals", label: "Rentals" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Experience Vending Logo"
            className="w-11 h-11 rounded-full object-cover ring-1 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              Experience Vending
            </span>
            <span className="text-[0.6rem] tracking-[0.22em] text-primary/70 uppercase">
              Luxury Photo Booths
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-all hover:text-primary relative py-1",
                location === link.href ? "text-primary font-semibold" : "text-foreground/70"
              )}
            >
              {link.label}
              {location === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
          <Link href="/partner">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif tracking-wide px-6">
              Get a Booth Now!
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border/50 overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-serif font-medium",
                    location === link.href ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/partner" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-4 bg-primary text-primary-foreground font-serif">
                  Get a Booth Now!
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
