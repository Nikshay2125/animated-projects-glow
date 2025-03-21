
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Container from './ui/Container';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop',
    bio: 'Tech enthusiast with 10+ years of industry experience.'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop',
    bio: 'UI/UX specialist creating beautiful and intuitive designs.'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Senior Developer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop',
    bio: 'Coding wizard with expertise in React, Node.js, and cloud architecture.'
  }
];

const TeamMember = ({ member, index }: { member: typeof teamMembers[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card rounded-xl overflow-hidden card-hover"
    >
      <div className="h-60 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
        <p className="text-muted-foreground mb-4">{member.bio}</p>
        <Link to={`/team/${member.id}`} className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-600 transition-colors">
          View Profile <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const Teams = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="team" className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-100 opacity-20 blur-3xl -z-10"></div>
      
      <Container className="py-8 md:py-10">
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
              <Users size={16} className="text-primary" />
              <p className="text-sm font-medium text-primary">Our Team</p>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our talented team of professionals is dedicated to bringing your vision to life
              through innovative solutions and exceptional service.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              to="/team" 
              className="inline-flex items-center px-6 py-3 rounded-md button-gradient text-white font-medium shadow-md hover:shadow-lg transition-all gap-2"
            >
              View All Team Members
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Teams;
