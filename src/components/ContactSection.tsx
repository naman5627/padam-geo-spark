import { useState } from "react";
import { Mail, Linkedin, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_yavtk8z";
const EMAILJS_TEMPLATE_ID = "template_q8ck9ei";
const EMAILJS_PUBLIC_KEY = "CfpYCeJdlQB9XHHkt";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Contact Form Submission",
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-muted border-border focus:border-primary"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-muted border-border focus:border-primary"
                    disabled={isSubmitting}
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
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-muted border-border focus:border-primary"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-muted border-border focus:border-primary resize-none"
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full accent-gradient border-0 text-accent-foreground font-semibold py-6 hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
