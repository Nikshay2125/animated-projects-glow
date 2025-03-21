
import { useEffect, useState } from 'react';

// Hook to animate an element when it enters viewport
export const useInView = (threshold = 0.1) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    observer.observe(ref);
    
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, threshold]);
  
  return [setRef, isVisible] as const;
};

// Hook for parallax effect
export const useParallax = () => {
  const [elements, setElements] = useState<{
    ref: HTMLElement;
    speed: number;
  }[]>([]);
  
  const registerElement = (ref: HTMLElement, speed: number) => {
    setElements(prev => [...prev, { ref, speed }]);
  };
  
  useEffect(() => {
    if (elements.length === 0) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      elements.forEach(({ ref, speed }) => {
        const yPos = -(scrollY * speed);
        ref.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elements]);
  
  return registerElement;
};

// Hook for smooth scrolling
export const useSmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              top: element.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
};
