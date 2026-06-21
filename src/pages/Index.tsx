import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Padam Bahadur Subedi",
    jobTitle: "GIS Expert & Geomatics Engineer",
    description:
      "Graduate Geomatics Engineer with proficiency in ArcGIS and Google Earth Engine, passionate about building innovative geospatial solutions.",
    url: "https://padamportfolio.lovable.app/",
    sameAs: ["https://www.linkedin.com/in/naman-subedi-a042a5231"],
    knowsAbout: [
      "GIS",
      "Remote Sensing",
      "Land Use Planning",
      "Spatial Analysis",
      "ArcGIS",
      "Google Earth Engine",
      "QGIS",
      "Cartography",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Institute of Engineering, Tribhuvan University",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nepal",
    },
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
