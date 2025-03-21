
import { useState, useEffect, useRef } from 'react';
import { Code, Layers, Globe, Server, MessageSquare, Braces } from 'lucide-react';
import Container from './ui/Container';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInView(true);
          }, index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "p-8 rounded-xl glass-card transition-all duration-700 relative overflow-hidden",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16",
        isHovered && "shadow-lg shadow-primary/5 scale-[1.03]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative gradient backgrounds */}
      <div 
        className={cn(
          "absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-blue-500/10 blur-2xl transition-opacity duration-700",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      ></div>
      
      <div className="relative z-10">
        <div 
          className={cn(
            "w-16 h-16 flex items-center justify-center rounded-xl mb-6 transition-all duration-500",
            isHovered 
              ? "bg-gradient-to-br from-primary to-blue-500 text-white"
              : "bg-secondary/60 text-primary"
          )}
        >
          {icon}
        </div>
        
        <h3 className={cn(
          "text-xl md:text-2xl font-bold mb-4 transition-colors duration-500",
          isHovered && "text-gradient"
        )}>
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {/* Animated border */}
        <div className={cn(
          "absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-blue-500 transition-all duration-700",
          isHovered ? "w-full" : "w-0"
        )}></div>
      </div>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code size={24} />,
      title: "Frontend Mastery",
      description: "Breathtaking user interfaces built with React and modern frameworks, delivering exceptional user experiences with fluid animations and responsive design."
    },
    {
      icon: <Server size={24} />,
      title: "Backend Excellence",
      description: "Powerful, scalable server-side solutions using Node.js, Express, and cloud technologies, engineered for performance, security, and seamless integration."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "API Integration",
      description: "Seamless integration with third-party services including WhatsApp Business API, payment gateways, social media platforms, and custom enterprise solutions."
    },
    {
      icon: <Globe size={24} />,
      title: "Full-Stack Solutions",
      description: "Comprehensive end-to-end application development with optimized architecture, best practices implementation, and future-proof technologies."
    },
    {
      icon: <Layers size={24} />,
      title: "UI/UX Innovation",
      description: "Human-centered design that transforms user journeys into intuitive, engaging experiences that boost conversion rates and customer satisfaction."
    },
    {
      icon: <Braces size={24} />,
      title: "Custom Development",
      description: "Bespoke solutions tailored to your unique business requirements, from concept to deployment, with ongoing support and maintenance."
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Dynamic background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/40 to-white -z-10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 top-40 w-80 h-80 rounded-full border border-primary/10 opacity-20 animate-spin-slow"></div>
        <div className="absolute -left-60 bottom-20 w-[500px] h-[500px] rounded-full border border-primary/10 opacity-20 animate-spin-slow-reverse"></div>
        <div className="absolute left-1/4 top-1/4 w-4 h-4 rounded-full bg-primary/20 animate-ping"></div>
        <div className="absolute right-1/3 bottom-1/3 w-3 h-3 rounded-full bg-blue-500/20 animate-ping" style={{animationDelay: "1s"}}></div>
      </div>
      
      <Container>
        <div 
          className={cn(
            "max-w-3xl mx-auto text-center mb-20 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="inline-block relative">
            <span className="inline-block px-4 py-1 rounded-full bg-white/60 backdrop-blur-sm mb-4 shadow-sm">
              <p className="text-sm font-medium text-primary">Premium Services</p>
            </span>
            {/* Decorative dots */}
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-ping"></span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transforming Ideas Into <span className="text-gradient">Digital Reality</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver comprehensive development services to transform your vision into
            polished, high-performing digital products that captivate users and drive business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
