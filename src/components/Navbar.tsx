import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg font-display">P</span>
            </div>
            <span className={`font-display font-bold text-xl ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              Padam
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-primary-foreground/90"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="accent-gradient border-0 text-accent-foreground font-semibold px-6 hover:opacity-90 transition-opacity">
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card rounded-lg shadow-lg mt-2 p-4 animate-scale-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4 accent-gradient border-0 text-accent-foreground font-semibold">
              Download CV
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
