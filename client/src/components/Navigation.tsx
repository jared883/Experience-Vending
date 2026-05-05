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
    <header className="fixed top-0 w-full z-50 bg-background/96 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <img
            src={logo}
            alt="Experience Vending Logo"
            className="w-10 h-10 rounded-full object-cover ring-1 ring-primary/25 group-hover:ring-primary/50 transition-all duration-500"
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[1.15rem] font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors duration-400">
              Experience Vending
            </span>
            <span className="text-[0.55rem] tracking-[0.28em] text-primary/55 uppercase mt-0.5 font-light">
              Luxury Photo Booths
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.8rem] tracking-[0.1em] uppercase font-light transition-all duration-300 relative py-1",
                location === link.href
                  ? "text-primary"
                  : "text-foreground/55 hover:text-foreground/90"
              )}
            >
              {link.label}
              {location === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 w-full h-px bg-primary/60"
                />
              )}
            </Link>
          ))}

          <Link href="/partner">
            <button className="relative text-[0.75rem] tracking-[0.18em] uppercase font-light px-6 py-2.5 text-primary border border-primary/35 hover:border-primary/70 hover:bg-primary/5 transition-all duration-400 rounded-none">
              Get a Booth
            </button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground/70"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border/40 overflow-hidden"
          >
            <nav className="flex flex-col p-8 space-y-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm tracking-[0.12em] uppercase font-light",
                    location === link.href ? "text-primary" : "text-foreground/60"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/partner" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="mt-4 w-full text-sm tracking-[0.15em] uppercase font-light py-3 text-primary border border-primary/35">
                  Get a Booth
                </button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
