
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  index: number;
}

const ProjectCard = ({ id, title, description, image, tags, liveUrl, index }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Simulate image loading
    const imageLoader = new Image();
    imageLoader.src = image;
    imageLoader.onload = () => {
      setTimeout(() => setIsLoaded(true), index * 100);
    };
  }, [image, index]);

  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden glass-card card-hover opacity-0 transition-all duration-500",
        isLoaded ? "opacity-100 translate-y-0" : "translate-y-10"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-60 overflow-hidden">
        <div 
          className={cn(
            "image-blur-wrapper w-full h-full transition-transform duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
        >
          <img 
            src={image} 
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-all duration-500 image-blur",
              isLoaded && "loaded"
            )}
          />
        </div>
        
        <div className={cn(
          "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100"
        )}>
          <div className="flex gap-4">
            <Link
              to={`/project/${id}`}
              className="p-3 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Code size={20} />
            </Link>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex gap-2 flex-wrap mb-3">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-full bg-secondary text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <Link 
          to={`/project/${id}`}
          className="flex items-center gap-1 text-primary font-medium hover:underline"
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

// Add missing import
import { ArrowRight } from 'lucide-react';

export default ProjectCard;
