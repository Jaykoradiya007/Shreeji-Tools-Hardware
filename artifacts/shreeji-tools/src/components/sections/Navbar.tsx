import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Products", href: "#products", id: "products" },
  { name: "Brands", href: "#brands", id: "brands" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 w-full z-40 transition-all duration-300 bg-background/95 backdrop-blur-md border-b",
        isScrolled ? "shadow-md border-border/50 py-3" : "border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center text-white transform group-hover:-rotate-12 transition-transform duration-300">
            <i className="fa-solid fa-screwdriver-wrench text-xl"></i>
          </div>
          <span className="font-display font-semibold text-lg sm:text-2xl tracking-tight text-foreground">
            SHREEJI <span className="text-primary hidden sm:inline">TOOLS & HARDWARE</span>
            <span className="text-primary sm:hidden">TOOLS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wider transition-colors relative group",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 bg-foreground text-background text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-primary transition-colors"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-foreground focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={cn("fa-solid transition-all", mobileMenuOpen ? "fa-xmark" : "fa-bars")}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-display font-semibold transition-colors border-b border-border/50 pb-2",
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
