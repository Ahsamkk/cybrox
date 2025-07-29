import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Palette, Zap, Users, Star, Play, CheckCircle, Globe, Rocket, Eye, Monitor, Database, Shield } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Index() {
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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-full">
          <div className="text-xl md:text-2xl font-bold text-primary">CYBROX</div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#home" className="hover:text-primary transition-colors text-sm lg:text-base">Home</a>
            <a href="#services" className="hover:text-primary transition-colors text-sm lg:text-base">Services</a>
            <a href="#about" className="hover:text-primary transition-colors text-sm lg:text-base">About</a>
            <a href="#contact" className="hover:text-primary transition-colors text-sm lg:text-base">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-sm md:text-base px-3 md:px-4 py-2">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden w-full pt-20 sm:pt-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/28428588/pexels-photo-28428588.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-background/85"></div>
        </div>
        
        {/* Enhanced Animated Elements */}
        <div className="absolute inset-0 z-10">
          {/* Moving Dark Red Dots */}
          <div className="absolute top-1/4 left-20 w-2 h-2 bg-red-800 rounded-full animate-move-up-down"></div>
          <div className="absolute bottom-1/3 left-24 w-2 h-2 bg-red-800 rounded-full animate-move-up-down-delayed"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-red-800 rounded-full animate-move-up-down-reverse"></div>
          <div className="absolute bottom-1/4 right-24 w-2 h-2 bg-red-800 rounded-full animate-move-up-down-fast"></div>

          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-8 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="border-r border-b border-primary/20 animate-grid-fade"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-20 container mx-auto text-center max-w-full w-full">
          <div className="animate-fade-in-up px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary text-xs sm:text-sm font-medium">Digital Agency</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block text-foreground">Crafting Digital</span>
              <span className="block bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              We transform your ideas into powerful digital solutions. From web development to stunning graphics,
              we bring your vision to life with cutting-edge technology and creative design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 group w-full sm:w-auto">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground group w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
                { number: "24/7", label: "Support" },
                { number: "1+", label: "Years Experience" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-card/50 opacity-0 w-full"
        ref={addToRefs}
      >
        <div className="container mx-auto max-w-full">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-primary text-xs sm:text-sm font-medium">Our Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Services We Provide</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Comprehensive digital solutions designed to elevate your brand and accelerate your growth in the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies and best practices",
                features: ["React & Next.js", "Full-Stack Solutions", "E-commerce Platforms", "SEO Optimized"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Smartphone,
                title: "App Development", 
                description: "Native and cross-platform mobile applications for iOS and Android platforms",
                features: ["React Native", "Flutter Development", "Native iOS/Android", "Progressive Web Apps"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Palette,
                title: "Logo Design",
                description: "Memorable brand identities that capture your company's essence and values",
                features: ["Brand Strategy", "Logo Concepts", "Brand Guidelines", "Logo Variations"],
                color: "from-purple-500 to-violet-500"
              },
              {
                icon: Eye,
                title: "Graphic Design",
                description: "Visual content that communicates your message and engages your target audience",
                features: ["Marketing Materials", "UI/UX Design", "Print Design", "Digital Assets"],
                color: "from-orange-500 to-red-500"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 bg-background border-border relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-8 relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Why Choose CYBROX</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We Deliver Digital Excellence
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our team combines technical expertise with creative vision to deliver solutions that not only meet your requirements but exceed your expectations.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Rocket,
                    title: "Fast Delivery",
                    description: "Quick turnaround times without compromising on quality"
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Skilled professionals with years of industry experience"
                  },
                  {
                    icon: Globe,
                    title: "Global Reach",
                    description: "Serving clients worldwide with 24/7 support"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Visual Section */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-red-500/20 rounded-3xl p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 gap-2 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="border border-primary/30 rounded animate-pulse"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Tech Icons Floating */}
                  <div className="absolute top-8 left-8 p-3 bg-primary/10 rounded-lg animate-float-slow">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute top-8 right-8 p-3 bg-primary/10 rounded-lg animate-float-reverse">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-8 left-8 p-3 bg-primary/10 rounded-lg animate-float-fast">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute bottom-8 right-8 p-3 bg-primary/10 rounded-lg animate-float-slow">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Central Content */}
                  <div className="text-center z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto animate-pulse">
                      <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Ready to Launch?</h3>
                    <p className="text-muted-foreground">Let's build something amazing together</p>
                  </div>
                  
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                    <path
                      d="M 50 50 Q 100 80 150 50"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="text-primary/20 animate-pulse"
                    />
                    <path
                      d="M 50 150 Q 100 120 150 150"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      className="text-primary/20 animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-red-500/10 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto text-center max-w-full">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
              Let's collaborate to bring your vision to life with innovative design and development solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 group w-full sm:w-auto">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-card/30 opacity-0 w-full" ref={addToRefs}>
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">CYBROX</div>
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
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Web Development</li>
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">App Development</li>
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Logo Design</li>
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Graphic Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Contact</h4>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base break-all">Info@cybrox.com</li>
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">03278423909</li>
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Schedule a Meeting</li>
                <li className="hover:text-primary cursor-pointer transition-colors text-sm sm:text-base">Get Support</li>
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
