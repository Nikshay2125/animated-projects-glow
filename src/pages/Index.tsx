
import { useEffect } from 'react';
import { useSmoothScroll } from '@/lib/animations';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Apply smooth scrolling
  useSmoothScroll();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
