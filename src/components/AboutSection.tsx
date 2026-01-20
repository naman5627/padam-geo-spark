import { GraduationCap, Briefcase, Award, MapPinned } from "lucide-react";

const AboutSection = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "GIS Expert & Consultant",
      subtitle: "Local Government Projects",
      description: "Contributed to six local governments through spatial data collection, analysis, and GIS-based thematic map creation.",
    },
    {
      icon: MapPinned,
      title: "Periodic Development Plan",
      subtitle: "Gaumukhi Rural Municipality",
      description: "Led consulting work for comprehensive development planning using geospatial analysis and mapping techniques.",
    },
  ];

  const skills = [
    "ArcGIS Pro",
    "Google Earth Engine",
    "QGIS",
    "Remote Sensing",
    "Land Use Planning",
    "Spatial Analysis",
    "Python for GIS",
    "Cartography",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">About Me</p>
          <h2 className="section-title">
            Designing Solutions, Not
            <br />
            <span className="text-primary">Just Visuals</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Education & Experience */}
          <div>
            {/* Education Card */}
            <div className="bg-card rounded-2xl p-6 shadow-lg mb-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-secondary" size={28} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    B.E. in Geomatics Engineering
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Institute of Engineering, Tribhuvan University
                  </p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Class of 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Experience Cards */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <exp.icon className="text-accent" size={28} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium text-sm mb-2">
                        {exp.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Skills & Stats */}
          <div>
            {/* Intro Text */}
            <div className="mb-8">
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Technical Expertise
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                As a Geomatics Engineer, I specialize in transforming complex spatial data 
                into actionable insights. My expertise spans from satellite imagery analysis 
                to comprehensive land use planning for sustainable development.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-foreground font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Achievement Card */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Award className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg">Project Highlight</h4>
                  <p className="text-primary-foreground/80 text-sm">Research Achievement</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">
                Completed comprehensive landslide susceptibility mapping using advanced 
                machine learning models including Frequency Ratio, Logistic Regression, 
                and Random Forest for highway safety assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
