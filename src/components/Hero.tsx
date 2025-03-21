
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orb1Ref.current && orb2Ref.current) {
        const x = e.clientX;
        const y = e.clientY;
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Calculate percentage moved
        const moveX = (x / windowWidth) - 0.5;
        const moveY = (y / windowHeight) - 0.5;
        
        // Apply movement to orbs at different rates for parallax effect
        orb1Ref.current.style.transform = `translate(${moveX * 40}px, ${moveY * 40}px)`;
        orb2Ref.current.style.transform = `translate(${moveX * -60}px, ${moveY * -60}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background orbs */}
      <div 
        ref={orb1Ref}
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl opacity-70"
      />
      <div 
        ref={orb2Ref}
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-indigo-200/30 blur-3xl opacity-70"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <p className="text-sm font-medium text-primary">
              Crafting Digital Experiences
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <span className="block mb-2">We Build</span>
            <span className="text-gradient">Exceptional Digital Products</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            End-to-end solutions with full backend and frontend development,
            delivering seamless user experiences powered by cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <a
              href="#projects"
              className="px-6 py-3 rounded-md button-gradient text-white font-medium shadow-md flex items-center justify-center gap-2 group"
            >
              View Our Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-secondary text-primary font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Scroll Down</p>
        <div className="w-5 h-9 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-1.5 bg-muted-foreground rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
