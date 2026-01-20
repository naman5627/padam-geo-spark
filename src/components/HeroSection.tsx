import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/padam-profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen hero-section overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/20 blur-3xl floating-shape" />
        <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl floating-shape-delayed" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-secondary/15 blur-2xl floating-shape" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="text-primary-foreground animate-slide-up">
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={18} className="text-accent" />
              <span className="text-primary-foreground/80 text-sm">Nepal</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hello, I'm
              <br />
              <span className="text-accent">Padam Bahadur</span>
              <br />
              Subedi
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-4 font-medium">
              GIS Expert & Geomatics Consultant
            </p>
            
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg leading-relaxed">
              Graduate Geomatics Engineer with proficiency in ArcGIS and Google Earth Engine, 
              passionate about building innovative geospatial solutions for local governments and organizations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="accent-gradient border-0 text-accent-foreground font-semibold px-8 py-6 text-lg hover:opacity-90 transition-all glow-accent"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-8 py-6 text-lg"
              >
                View Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">6+</p>
                <p className="text-primary-foreground/60 text-sm">Local Govts</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-primary-foreground/60 text-sm">Maps Created</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">2025</p>
                <p className="text-primary-foreground/60 text-sm">B.E. Graduate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-up-delayed flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Shapes */}
              <div className="absolute -top-8 -right-8 w-80 h-80 md:w-96 md:h-96 rounded-full bg-accent/30 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-64 h-64 rounded-full bg-primary/40" />
              
              {/* Profile Image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/50 shadow-2xl glow-primary">
                <img 
                  src={profilePhoto} 
                  alt="Padam Bahadur Subedi" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -right-4 top-1/2 bg-card rounded-xl shadow-xl p-4 animate-fade-in">
                <p className="text-2xl font-bold text-foreground">Fresh</p>
                <p className="text-muted-foreground text-sm">Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
