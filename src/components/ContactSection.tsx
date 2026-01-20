import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Contact</p>
          <h2 className="section-title mb-6">
            Let's Work
            <span className="text-primary"> Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how geospatial solutions can help achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-6">
              Get In Touch
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you need GIS consulting, mapping services, or spatial analysis 
              for your project, I'm here to help transform your data into actionable insights.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:namanchhetri91@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail className="text-accent group-hover:text-accent-foreground transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">namanchhetri91@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/naman-subedi-a042a5231"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Linkedin className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground">Connect with me</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="font-display font-bold text-xl text-foreground mb-6">
              Send a Message
            </h3>
            
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project Inquiry"
                  className="bg-muted border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-muted border-border focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full accent-gradient border-0 text-accent-foreground font-semibold py-6 hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
