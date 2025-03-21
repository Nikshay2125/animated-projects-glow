
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Container from './ui/Container';
import { cn } from '@/lib/utils';

// Updated project data with only 3 projects and more impressive visuals
const projectsData = [
  {
    id: "project-1",
    title: "E-Commerce Revolution",
    description: "A next-generation e-commerce platform with immersive product visualization, AI-powered recommendations, and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe API"],
    liveUrl: "https://example.com/project1"
  },
  {
    id: "project-2",
    title: "Healthcare Portal 2.0",
    description: "Transforming healthcare delivery with secure telemedicine, real-time health monitoring, and AI-assisted diagnostics in a patient-centric interface.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Express", "PostgreSQL", "WebRTC"],
    liveUrl: "https://example.com/project2"
  },
  {
    id: "project-3",
    title: "Financial Intelligence Dashboard",
    description: "Revolutionizing financial insights with interactive data visualization, predictive analytics, and personalized investment recommendations in real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "D3.js", "Firebase", "REST API"],
    liveUrl: "https://example.com/project3"
  }
];

const ProjectItem = ({ project, index }) => {
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInView(true);
          }, index * 200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
    
    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={projectRef}
      className={cn(
        "relative overflow-hidden rounded-xl mb-32 shadow-xl transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        isHovered ? "shadow-2xl scale-[1.02]" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl z-0"></div>
      <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl z-0"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Image Section - Alternating layout based on index */}
        <div className={cn(
          "relative overflow-hidden min-h-[300px] lg:min-h-full",
          index % 2 === 0 ? "lg:order-1" : "lg:order-2"
        )}>
          <div 
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-transform duration-700",
              isHovered ? "scale-110" : "scale-100"
            )}
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          <div className={cn(
            "absolute inset-0 bg-gradient-to-r",
            index % 2 === 0 
              ? "from-background/90 to-transparent lg:from-background to-transparent" 
              : "from-transparent to-background/90 lg:from-transparent lg:to-background"
          )}></div>
          
          {/* Interactive floating elements */}
          <div className={cn(
            "absolute bottom-5 right-5 flex gap-3 opacity-0 transition-opacity duration-300",
            isHovered && "opacity-100"
          )}>
            <Link
              to={`/project/${project.id}`}
              className="p-3 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-colors shadow-lg"
            >
              <ArrowRight size={20} />
            </Link>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-colors shadow-lg"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        
        {/* Content Section */}
        <div className={cn(
          "relative z-10 p-8 md:p-12 flex flex-col justify-center",
          index % 2 === 0 ? "lg:order-2" : "lg:order-1",
          "bg-white"
        )}>
          <div className={cn(
            "transition-all duration-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">{project.title}</h3>
            
            <p className="text-muted-foreground mb-8">{project.description}</p>
            
            <Link 
              to={`/project/${project.id}`}
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
            >
              Explore Project
              <ArrowRight 
                size={18} 
                className="transition-transform group-hover:translate-x-1" 
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectGrid = () => {
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

  return (
    <section id="projects" ref={sectionRef} className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>
      
      <Container>
        <div 
          className={cn(
            "max-w-3xl mx-auto text-center mb-20 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="relative inline-block mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm">
              <p className="text-sm font-medium text-primary">Our Showcase</p>
            </span>
            {/* Decorative elements */}
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary/50 animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-blue-500/50 animate-ping" style={{animationDelay: "0.5s"}}></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Innovation Through <span className="text-gradient">Digital Excellence</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Transforming visions into exceptional digital experiences with cutting-edge technology and design.
          </p>
        </div>
        
        <div className="space-y-12 md:space-y-32">
          {projectsData.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectGrid;
