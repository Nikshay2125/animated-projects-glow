
import { useEffect, useRef } from 'react';
import { useSmoothScroll } from '@/lib/animations';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import Services from '@/components/Services';
import Teams from '@/components/Teams';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Apply smooth scrolling
  useSmoothScroll();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Preload critical images for smooth transitions
  useEffect(() => {
    const criticalImages = [
      "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Preload cursor animation effect */}
      <div className="cursor-glow fixed w-56 h-56 rounded-full bg-primary/5 blur-3xl pointer-events-none transition-all duration-300 -z-10 hidden md:block"></div>
      
      {/* Page content */}
      <Navbar />
      <main className="space-y-8 md:space-y-12">
        <Hero />
        <ProjectGrid />
        <Services />
        <Teams />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

// Add cursor effect
if (typeof document !== 'undefined') {
  document.addEventListener('mousemove', (e) => {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow) {
      const x = e.clientX - 100;
      const y = e.clientY - 100;
      (cursorGlow as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
    }
  });
}

export default Index;
