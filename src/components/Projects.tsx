
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    shortDescription: 'Full-stack e-commerce platform with Spring Boot and React',
    fullDescription: 'A comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with scalable architecture and modern design patterns.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'AWS'],
    role: 'Full Stack Developer',
    githubUrl: 'https://github.com/Nikhilproject25',
    demoUrl: '#'
  },
  {
    id: 2,
    title: 'Real-Time Analytics Dashboard',
    shortDescription: 'Data processing and visualization platform',
    fullDescription: 'A real-time analytics dashboard that processes large datasets using PySpark and provides interactive visualizations. Implements microservices architecture with containerized deployment.',
    techStack: ['Java', 'PySpark', 'BigQuery', 'Docker', 'GCP'],
    role: 'Backend Engineer',
    githubUrl: 'https://github.com/Nikhilproject25',
    demoUrl: '#'
  },
  {
    id: 3,
    title: 'Microservices API Gateway',
    shortDescription: 'Scalable API gateway with service mesh architecture',
    fullDescription: 'A robust API gateway solution that handles authentication, rate limiting, load balancing, and service discovery. Deployed on Kubernetes with comprehensive monitoring and logging.',
    techStack: ['Java', 'Spring Cloud', 'Kubernetes', 'Docker', 'AWS'],
    role: 'Backend Architect',
    githubUrl: 'https://github.com/Nikhilproject25',
    demoUrl: '#'
  },
  {
    id: 4,
    title: 'Cloud-Native Task Manager',
    shortDescription: 'Serverless task management application',
    fullDescription: 'A cloud-native task management system built with serverless architecture using AWS Lambda. Features real-time updates, automated workflows, and integrations with popular productivity tools.',
    techStack: ['Java', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'CloudFormation'],
    role: 'Cloud Developer',
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
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader onClick={() => toggleProject(project.id)}>
                <CardTitle className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.shortDescription}
                </CardDescription>
              </CardHeader>
              
              {expandedProject === project.id && (
                <CardContent className="animate-accordion-down">
                  <div className="space-y-4">
                    <p className="text-gray-700">{project.fullDescription}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">
                        <strong>Role:</strong> {project.role}
                      </p>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
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
    </div>
  );
};
