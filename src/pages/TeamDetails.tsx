
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Linkedin, Twitter, Github } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

// Expanded team data with more details
const teamData = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop',
    bio: 'Alex is an industry veteran with more than a decade of experience in software development and business leadership. As our founder and CEO, he drives the vision and strategy of Nikshay, ensuring we deliver cutting-edge solutions that meet our clients\' needs.',
    skills: ['Strategic Planning', 'Product Management', 'Business Development', 'Team Leadership'],
    projects: ['Enterprise CRM System', 'Healthcare Analytics Platform', 'Fintech App Ecosystem'],
    education: 'MBA in Technology Management, Stanford University',
    email: 'alex@nikshay.com',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop',
    bio: 'Sarah brings creativity and user-centered thinking to every project. With a background in psychology and design, she creates beautiful, intuitive interfaces that drive engagement and delight users while meeting business objectives.',
    skills: ['UI/UX Design', 'User Research', 'Design Systems', 'Brand Identity', 'Prototyping'],
    projects: ['E-commerce Redesign', 'Mobile Banking App', 'SaaS Dashboard'],
    education: 'BFA in Interactive Design, Rhode Island School of Design',
    email: 'sarah@nikshay.com',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Senior Developer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop',
    bio: 'Michael is our technical backbone, with deep expertise in full-stack development. He architects scalable solutions and mentors our development team to ensure code quality and performance across all projects.',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'DevOps', 'System Architecture'],
    projects: ['Real-time Analytics Dashboard', 'AI-powered Recommendation Engine', 'Scalable Microservices Platform'],
    education: 'MS in Computer Science, MIT',
    email: 'michael@nikshay.com',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

const TeamDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />
      
      <div className="absolute top-0 -right-96 w-[500px] h-[500px] rounded-full bg-blue-100 opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -left-96 w-[600px] h-[600px] rounded-full bg-purple-100 opacity-20 blur-3xl -z-10"></div>
      
      <main className="pt-24 md:pt-32 pb-16">
        <Container>
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-primary hover:text-blue-600 transition-colors mb-6">
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Talented Team</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Meet the innovative minds behind Nikshay's success. Our diverse team combines technical expertise, 
                creative talent, and industry experience to deliver exceptional digital solutions.
              </p>
            </motion.div>
          </div>
          
          <div className="space-y-24">
            {teamData.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                id={`member-${member.id}`}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                  </span>
                  <h2 className="text-3xl font-bold mb-4">{member.name}</h2>
                  <p className="text-muted-foreground mb-6">{member.bio}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Skills & Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Key Projects</h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {member.projects.map(project => (
                        <li key={project}>{project}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground">{member.education}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                    <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md button-gradient text-white font-medium">
                      <Mail size={18} />
                      Contact
                    </a>
                    <div className="flex items-center gap-3">
                      <a href={member.social.linkedin} className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.social.twitter} className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href={member.social.github} className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-xl transform rotate-6 blur-sm"></div>
                    <div className="glass-card rounded-xl overflow-hidden relative z-10">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-[500px] object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-blue-500 animate-pulse-ring"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-4 border-dashed border-secondary animate-spin-slow-reverse"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamDetails;
