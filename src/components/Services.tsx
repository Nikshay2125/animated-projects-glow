
import { useState, useEffect } from 'react';
import { Code, Layers, Globe, Server, MessageSquare, Braces } from 'lucide-react';
import Container from './ui/Container';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "p-6 rounded-xl glass-card opacity-0 animate-fade-in",
        isHovered && "shadow-lg"
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "w-14 h-14 flex items-center justify-center rounded-lg mb-5 bg-secondary/60 text-primary",
          isHovered && "bg-primary text-white"
        )}
      >
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('services');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      description: "Modern, responsive UIs built with React, focusing on performance and seamless user experiences."
    },
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js, Express, and various databases tailored to your needs."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "API Integration",
      description: "Seamless integration with third-party services, including WhatsApp, payment gateways, and more."
    },
    {
      icon: <Globe size={24} />,
      title: "Full-Stack Solutions",
      description: "End-to-end application development with optimized performance, security, and scalability."
    },
    {
      icon: <Layers size={24} />,
      title: "UI/UX Design",
      description: "Intuitive, user-centered designs that enhance engagement and conversion rates."
    },
    {
      icon: <Braces size={24} />,
      title: "Custom Solutions",
      description: "Tailored development solutions that address your unique business challenges and goals."
    }
  ];

  return (
    <section id="services" className="relative bg-secondary/40 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 w-60 h-60 rounded-full border border-primary/10 opacity-20" />
        <div className="absolute -left-40 bottom-10 w-80 h-80 rounded-full border border-primary/10 opacity-20" />
      </div>
      
      <Container>
        <div 
          className={cn(
            "max-w-3xl mx-auto text-center mb-12 md:mb-16 opacity-0 translate-y-10 transition-all duration-700",
            isVisible && "opacity-100 translate-y-0"
          )}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm mb-4">
            <p className="text-sm font-medium text-primary">What We Offer</p>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We provide comprehensive development services to transform your ideas into
            polished, high-performing digital products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={300 + index * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
