
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Container from './ui/Container';
import { cn } from '@/lib/utils';

// Mock project data - this would come from your API in a real app
const projectsData = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment processing, inventory management, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe API"],
    liveUrl: "https://example.com/project1"
  },
  {
    id: "project-2",
    title: "Healthcare Portal",
    description: "Secure patient portal with appointment scheduling, medical records, and doctor-patient communication.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Express", "PostgreSQL", "WebRTC"],
    liveUrl: "https://example.com/project2"
  },
  {
    id: "project-3",
    title: "Financial Dashboard",
    description: "Interactive financial analytics dashboard with real-time data visualization and reporting tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "D3.js", "Firebase", "REST API"],
    liveUrl: "https://example.com/project3"
  },
  {
    id: "project-4",
    title: "Social Media App",
    description: "Mobile-first social platform with rich media sharing, real-time chat, and content discovery features.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop",
    tags: ["React Native", "GraphQL", "AWS", "Socket.io"],
    liveUrl: "https://example.com/project4"
  },
  {
    id: "project-5",
    title: "Property Management System",
    description: "End-to-end solution for property managers with tenant portals, maintenance requests, and financial tracking.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    tags: ["React", "Node.js", "MySQL", "Twilio API"],
    liveUrl: "https://example.com/project5"
  },
  {
    id: "project-6",
    title: "Learning Management System",
    description: "Interactive education platform with course creation tools, student tracking, and assessment features.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    tags: ["React", "Python", "Django", "WebSockets"],
    liveUrl: "https://example.com/project6"
  }
];

const ProjectGrid = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(projectsData);
  const [isVisible, setIsVisible] = useState(false);

  // Extract all unique tags
  const allTags = Array.from(new Set(
    projectsData.flatMap(project => project.tags)
  ));
  
  useEffect(() => {
    const filteredProjects = selectedTag 
      ? projectsData.filter(project => project.tags.includes(selectedTag))
      : projectsData;
      
    setVisibleProjects(filteredProjects);
  }, [selectedTag]);
  
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
    
    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative bg-white py-16 md:py-24">
      <Container>
        <div className={cn(
          "max-w-3xl mx-auto text-center mb-12 md:mb-16 opacity-0 translate-y-10 transition-all duration-700",
          isVisible && "opacity-100 translate-y-0"
        )}>
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
            <p className="text-sm font-medium text-primary">Our Work</p>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Showcasing Our <span className="text-gradient">Latest Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We craft digital experiences that engage users and drive business growth.
            Explore our featured projects to see our capabilities in action.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <button
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                selectedTag === null 
                  ? "bg-primary text-white" 
                  : "bg-secondary text-primary hover:bg-secondary/80"
              )}
              onClick={() => setSelectedTag(null)}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  selectedTag === tag 
                    ? "bg-primary text-white" 
                    : "bg-secondary text-primary hover:bg-secondary/80"
                )}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              {...project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectGrid;
