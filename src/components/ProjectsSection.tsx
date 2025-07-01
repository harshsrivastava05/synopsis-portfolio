
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'Maskwa',
      title: 'Maskwa',
      description: 'Maskwa streamlines traditional land verification using real-time mapping, document authentication, and official approvals to ensure secure, legitimate development.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'healthai-analytics',
      title: 'HealthAI Analytics',
      description: 'AI-powered medical analytics and diagnostic assistant that leverages machine learning for predictive healthcare insights and treatment recommendations.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      techStack: ['Python', 'TensorFlow', 'Flask', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'patient-portal',
      title: 'Patient Portal',
      description: 'Comprehensive patient engagement platform that empowers patients with secure access to their medical records and healthcare services.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop',
      techStack: ['Vue.js', 'Express', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'medical-iot-dashboard',
      title: 'Medical IoT Dashboard',
      description: 'Advanced IoT device monitoring system for healthcare facilities with real-time data visualization and automated alert systems.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop',
      techStack: ['React', 'D3.js', 'Socket.io', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'telemedicine-app',
      title: 'Telemedicine App',
      description: 'Virtual healthcare consultation platform enabling secure video consultations and remote patient monitoring services.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop',
      techStack: ['React Native', 'WebRTC', 'Firebase', 'GraphQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 'clinical-research-platform',
      title: 'Clinical Research Platform',
      description: 'Comprehensive clinical trial and research management system for streamlined research processes and regulatory compliance.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop',
      techStack: ['Angular', 'Spring Boot', 'MySQL', 'Kubernetes'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our innovative medical technology solutions that are transforming healthcare delivery and patient outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle live demo click
                    }}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span className="text-sm">Live Demo</span>
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle github click
                    }}
                    className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
                  >
                    <Github size={16} className="mr-1" />
                    <span className="text-sm">Code</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;