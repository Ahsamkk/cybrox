import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: ""
  });

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "", service: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between max-w-full">
          <div className="text-xl md:text-2xl">
            <Link to="/">
              <img src="Main-Logo.png" alt="Logo" className="w-20 h-20" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="/" className="hover:text-primary transition-colors text-sm lg:text-base">Home</a>
            <a href="#services" className="hover:text-primary transition-colors text-sm lg:text-base">Services</a>
            <a href="#about" className="hover:text-primary transition-colors text-sm lg:text-base">About</a>
            <Link to="/contact">
              <a href="/contact" className="hover:text-primary transition-colors text-sm lg:text-base">Contact</a>
            </Link>
          </div>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-sm md:text-base px-3 md:px-4 py-2">
                Get Started
              </Button>
            </Link>
          </div>
      </nav>

      {/* Contact Form Section */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 w-full opacity-0" ref={addToRefs}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Send us a Message</h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card className="p-8 sm:p-12 bg-card/30 border-border">
            <CardContent className="p-0">
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-background/50 border-border focus:border-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-background/50 border-border focus:border-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-background/50 border-border focus:border-primary"
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                          <SelectTrigger className="bg-background/50 border-border focus:border-primary">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="logo-design">Cyber Security Services</SelectItem>
                            <SelectItem value="app-development">App Development</SelectItem>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="graphic-design">Graphic Design</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-background/50 border-border focus:border-primary min-h-[120px]"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-lg py-6 group"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-2">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4"><img src="Main-Logo.png" alt="" className="w-20 h-20" /></div>
                <p className="text-muted-foreground max-w-md mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Transforming ideas into digital reality through innovative design and development solutions that drive growth.
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                <a
                    href="https://www.instagram.com/cybrox_s"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25-.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"/>
                    </svg></span>
                    </div>
                </a>

                {/* <a
                    href="https://www.twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold">t</span>
                    </div>
                </a> */}

                <a
                    href="https://www.linkedin.com/company/cybrox-solution/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold">in</span>
                    </div>
                </a>
                </div>
            </div>
            <div>
                <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Services</h4>
                <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Cyber Security Services</li>
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">App Development</li>
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Web Development</li> 
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Graphic Design</li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Contact</h4>
                <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base break-all">Info@cybrox.com</li>
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">03278423909</li>
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Suit # 102, Noor Trade Center, 13 A Gulshan-e-Iqbal, Karachi, 75330</li>
                {/* <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Get Support</li> */}
                </ul>
            </div>
            </div>
            <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm sm:text-base text-center md:text-left">
                © 2025 Cybrox. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-muted-foreground">
                <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Cookie Policy</span>
            </div>
            </div>
        </div>
    </footer>
    </div>
  );
}
