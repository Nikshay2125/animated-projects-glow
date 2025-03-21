
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import Container from '@/components/ui/Container';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

// Mock project data - same as in ProjectGrid
const projectsData = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment processing, inventory management, and analytics dashboard.",
    detailedDescription: "We built a complete e-commerce solution with a React frontend and Node.js backend. The platform includes customer accounts, product catalog, shopping cart, checkout with Stripe integration, order management, and an admin dashboard with inventory management and sales analytics.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070&auto=format&fit=crop",
    featuredImage: "https://images.unsplash.com/photo-1662729718975-3e33e491b9a9?q=80&w=2070&auto=format&fit=crop",
    client: "RetailTech Inc.",
    completionDate: "March 2023",
    tags: ["React", "Node.js", "MongoDB", "Stripe API"],
    liveUrl: "https://example.com/project1"
  },
  {
    id: "project-2",
    title: "Healthcare Portal",
    description: "Secure patient portal with appointment scheduling, medical records, and doctor-patient communication.",
    detailedDescription: "This healthcare platform connects patients with doctors through a secure portal. Patients can schedule appointments, access medical records, and communicate with healthcare providers. The system includes video consultations, prescription management, and secure messaging.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    client: "MediCare Solutions",
    completionDate: "August 2023",
    tags: ["React", "Express", "PostgreSQL", "WebRTC"],
    liveUrl: "https://example.com/project2"
  },
  {
    id: "project-3",
    title: "Financial Dashboard",
    description: "Interactive financial analytics dashboard with real-time data visualization and reporting tools.",
    detailedDescription: "We developed a comprehensive financial analytics platform for investment professionals. The dashboard features real-time data visualization, custom reports, portfolio analysis tools, and market trend predictions using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    client: "FinVest Partners",
    completionDate: "November 2023",
    tags: ["React", "D3.js", "Firebase", "REST API"],
    liveUrl: "https://example.com/project3"
  },
  {
    id: "project-4",
    title: "Social Media App",
    description: "Mobile-first social platform with rich media sharing, real-time chat, and content discovery features.",
    detailedDescription: "This social media application enables users to connect, share content, and communicate in real-time. Features include user profiles, image/video sharing, live chat with Socket.io, content discovery algorithms, and responsive design for optimal mobile experience.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop",
    featuredImage: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2074&auto=format&fit=crop",
    client: "SocialConnect",
    completionDate: "January 2024",
    tags: ["React Native", "GraphQL", "AWS", "Socket.io"],
    liveUrl: "https://example.com/project4"
  },
  {
    id: "project-5",
    title: "Property Management System",
    description: "End-to-end solution for property managers with tenant portals, maintenance requests, and financial tracking.",
    detailedDescription: "Our property management system streamlines operations for real estate companies. It includes tenant and landlord portals, automated rent collection, maintenance request tracking, property inspection tools, and financial reporting with tax preparation features.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    featuredImage: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop",
    client: "PropTech Management",
    completionDate: "October 2023",
    tags: ["React", "Node.js", "MySQL", "Twilio API"],
    liveUrl: "https://example.com/project5"
  },
  {
    id: "project-6",
    title: "Learning Management System",
    description: "Interactive education platform with course creation tools, student tracking, and assessment features.",
    detailedDescription: "We created a comprehensive learning management system for educational institutions. Features include course creation and management, student enrollment and progress tracking, interactive assessments, video lectures, discussion forums, and certificate generation.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    featuredImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop",
    client: "EduTech Institute",
    completionDate: "July 2023",
    tags: ["React", "Python", "Django", "WebSockets"],
    liveUrl: "https://example.com/project6"
  }
];

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  useEffect(() => {
    // In a real app, you would fetch project data from an API
    // For this demo, we'll use our mock data
    setIsLoading(true);
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === id);
      setProject(foundProject || null);
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="px-4 py-2 rounded-md button-gradient text-white font-medium">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero section */}
        <section className="relative bg-secondary/40 py-16 md:py-24">
          <Container>
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
            
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm mb-4">
                <p className="text-sm font-medium text-primary">Case Study</p>
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-primary" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span>{project.completionDate}</span>
                </div>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink size={18} />
                  <span>View Live</span>
                </a>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <div key={tag} className="px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm flex items-center gap-1">
                    <Tag size={14} />
                    <span className="text-sm font-medium">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
        
        {/* Featured image */}
        <section className="py-8">
          <Container className="py-0">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <div 
                className={cn(
                  "w-full aspect-video bg-secondary/50 transition-opacity duration-500",
                  isImageLoaded ? "opacity-0" : "opacity-100"
                )}
              />
              <img 
                src={project.featuredImage || project.image} 
                alt={project.title}
                className={cn(
                  "w-full aspect-video object-cover transition-opacity duration-500 absolute inset-0",
                  isImageLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
          </Container>
        </section>
        
        {/* Project details */}
        <section className="py-8 md:py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6">{project.detailedDescription}</p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">The Challenge</h3>
                  <p className="mb-6">
                    Our client needed a scalable, user-friendly solution that could handle complex requirements while maintaining excellent performance and security. The system needed to integrate with multiple third-party services and provide a seamless experience across all devices.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Our Approach</h3>
                  <p className="mb-6">
                    We began with a comprehensive discovery phase to understand the client's needs and end-user expectations. Our team then developed a detailed technical architecture and design system to ensure consistency throughout the application. Development followed an agile methodology with frequent client feedback.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">The Result</h3>
                  <p>
                    The final product exceeded the client's expectations, with intuitive user interfaces, robust functionality, and excellent performance metrics. The system has helped streamline operations and improve user satisfaction, resulting in measurable business improvements for our client.
                  </p>
                </div>
              </div>
              
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="glass-card rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-6">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Timeline</p>
                      <p className="font-medium">{project.completionDate}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Technologies</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag: string) => (
                          <span key={tag} className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="w-full py-2 rounded-md button-gradient text-white font-medium flex items-center justify-center gap-2"
                      >
                        View Live Project
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ProjectPage;
