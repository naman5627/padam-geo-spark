import { ExternalLink, MapPin, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectImage from "@/assets/project-landslide-map.jpg";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="section-title mb-6">
            Featured
            <span className="text-primary"> Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing research work and practical applications in geospatial analysis.
          </p>
        </div>

        {/* Featured Project Card */}
        <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-border max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={projectImage}
                alt="Landslide Susceptibility Map"
                className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent lg:hidden" />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                Research Project
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={18} className="text-accent" />
                <span className="text-muted-foreground text-sm">
                  Butwal-Tansen Section, Siddhartha Highway
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">
                Landslide Susceptibility Mapping
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Comprehensive analysis using advanced machine learning models to map landslide 
                susceptibility zones along a critical highway section. The study employs Frequency 
                Ratio, Logistic Regression, and Random Forest algorithms for accurate risk assessment.
              </p>

              {/* Methods Used */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <BarChart size={18} className="text-primary" />
                  Methods & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Frequency Ratio",
                    "Logistic Regression",
                    "Random Forest",
                    "ArcGIS Pro",
                    "Python",
                    "Remote Sensing",
                  ].map((method, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-foreground"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-3 bg-muted rounded-xl">
                  <p className="text-2xl font-bold text-primary">3</p>
                  <p className="text-xs text-muted-foreground">ML Models</p>
                </div>
                <div className="text-center p-3 bg-muted rounded-xl">
                  <p className="text-2xl font-bold text-secondary">5</p>
                  <p className="text-xs text-muted-foreground">Risk Zones</p>
                </div>
                <div className="text-center p-3 bg-muted rounded-xl">
                  <p className="text-2xl font-bold text-accent">92%</p>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                </div>
              </div>

              <Button className="w-full accent-gradient border-0 text-accent-foreground font-semibold py-6 hover:opacity-90 transition-opacity">
                View Full Case Study
                <ExternalLink className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Coming Soon Note */}
        <p className="text-center text-muted-foreground mt-8">
          More projects coming soon...
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
