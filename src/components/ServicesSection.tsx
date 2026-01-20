import { Map, Satellite, FileSearch, Layers, Globe, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Map,
    title: "GIS Consulting",
    description: "Expert guidance on implementing GIS solutions for urban planning, infrastructure development, and resource management.",
    color: "primary",
  },
  {
    icon: Satellite,
    title: "Remote Sensing Analysis",
    description: "Satellite imagery processing and analysis for land cover classification, change detection, and environmental monitoring.",
    color: "secondary",
  },
  {
    icon: Layers,
    title: "Land Use Planning",
    description: "Comprehensive spatial analysis for sustainable land use planning, zoning, and development strategies.",
    color: "accent",
  },
  {
    icon: Globe,
    title: "Mapping Services",
    description: "Custom thematic maps, topographic surveys, and cartographic products for various applications.",
    color: "primary",
  },
  {
    icon: FileSearch,
    title: "Spatial Data Analysis",
    description: "Advanced geostatistical analysis, spatial modeling, and data visualization for informed decision-making.",
    color: "secondary",
  },
  {
    icon: BarChart3,
    title: "Hazard Assessment",
    description: "Natural hazard susceptibility mapping including landslide, flood, and earthquake risk assessment.",
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    icon: "text-primary",
    hover: "hover:border-primary/50",
  },
  secondary: {
    bg: "bg-secondary/10",
    icon: "text-secondary",
    hover: "hover:border-secondary/50",
  },
  accent: {
    bg: "bg-accent/10",
    icon: "text-accent",
    hover: "hover:border-accent/50",
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Services</p>
          <h2 className="section-title mb-6">
            Expertise Services!
            <br />
            <span className="text-primary">Let's Check It Out</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Providing comprehensive geospatial solutions from satellite data analysis 
            to strategic land use planning for sustainable development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className={`bg-card rounded-2xl p-6 shadow-lg border border-border ${colors.hover} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
              >
                <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={colors.icon} size={32} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
