
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Chat Base System',
    description: 'Secure real-time chat system with user auth and multi-user rooms',
    fullDescription: 'A comprehensive real-time chat application featuring secure user authentication, multi-user chat rooms, message persistence, and WebSocket-based real-time communication. Built with enterprise-grade security and scalability in mind.',
    techStack: ['Java', 'Spring Boot', 'WebSocket', 'PostgreSQL', 'JWT', 'React'],
    githubUrl: 'https://github.com/Nikhilproject25',
    demoUrl: '#'
  },
  {
    id: 2,
    title: 'E-Commerce Backend',
    description: 'Modular REST APIs for shopping cart, product catalog, and order processing',
    fullDescription: 'A complete e-commerce backend solution with microservices architecture, featuring product management, shopping cart functionality, order processing, payment integration, and comprehensive admin dashboard APIs.',
    techStack: ['Spring Boot', 'JWT', 'PostgreSQL', 'React', 'Docker', 'AWS'],
    githubUrl: 'https://github.com/Nikhilproject25',
    demoUrl: '#'
  },
  {
    id: 3,
    title: 'Real-time Data Pipeline',
    description: 'Kafka and Spark-based streaming pipeline for ingesting and transforming logs',
    fullDescription: 'A high-throughput data processing pipeline that ingests, transforms, and analyzes streaming data in real-time. Features automated data quality checks, monitoring, and integration with cloud data warehouses.',
    techStack: ['Kafka', 'Spark', 'GCP BigQuery', 'Docker', 'Python', 'Java'],
    githubUrl: 'https://github.com/Nikhilproject25',
    demoUrl: '#'
  },
  {
    id: 4,
    title: 'Cloud Deployment Automation',
    description: 'Docker + Kubernetes microservices with CI/CD (GitHub Actions + Jenkins)',
    fullDescription: 'An automated deployment system that manages containerized microservices across Kubernetes clusters with comprehensive CI/CD pipelines, monitoring, logging, and automated rollback capabilities.',
    techStack: ['Java', 'Docker', 'Kubernetes', 'AWS EC2', 'Jenkins', 'GitHub Actions'],
    githubUrl: 'https://github.com/Nikhilproject25',
    demoUrl: '#'
  }
];

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-8">Featured Projects</h2>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={project.id}
            className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader 
              className="cursor-pointer"
              onClick={() => toggleProject(project.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold text-white hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 mt-2">
                    {project.description}
                  </CardDescription>
                </div>
                {expandedProject === project.id ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </CardHeader>
            
            {expandedProject === project.id && (
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <p className="text-gray-300">{project.fullDescription}</p>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-600/20 text-blue-300 hover:bg-blue-600/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
