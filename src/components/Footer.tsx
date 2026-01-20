import { Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hero-section py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg font-display">P</span>
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                Padam Subedi
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="mailto:namanchhetri91@gmail.com"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
            >
              <Mail size={18} className="text-primary-foreground group-hover:text-accent-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/naman-subedi-a042a5231"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
            >
              <Linkedin size={18} className="text-primary-foreground group-hover:text-accent-foreground" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm flex items-center justify-center gap-2">
            <MapPin size={14} />
            GIS Expert & Geomatics Consultant from Nepal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
