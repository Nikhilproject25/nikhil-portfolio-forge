
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronRight, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'State Street',
    position: 'Software Engineer',
    period: 'Feb 2024 – Present',
    location: 'Boston, MA',
    achievements: [
      'Built Spring Boot microservices for financial data processing',
      'Automated AWS deployment pipelines using Lambda, S3, and EC2',
      'Developed ReactJS frontend with PostgreSQL integration',
      'Implemented CI/CD with Jenkins and GitHub Actions',
      'Integrated JWT authentication with Active Directory'
    ],
    technologies: ['Spring Boot', 'AWS', 'ReactJS', 'PostgreSQL', 'Jenkins', 'JWT']
  },
  {
    id: 2,
    company: 'BNY Mellon',
    position: 'Software Engineer',
    period: 'Jan 2023 – Jan 2024',
    location: 'New York, NY',
    achievements: [
      'Designed Kafka-based data pipelines with Spark ETL processing',
      'Deployed scalable solutions on Google Cloud Platform',
      'Optimized MongoDB and Cosmos DB performance',
      'Implemented OAuth2 security with Spring Security',
      'Applied SOLID principles and Test-Driven Development practices'
    ],
    technologies: ['Kafka', 'Spark', 'GCP', 'MongoDB', 'Cosmos DB', 'OAuth2', 'TDD']
  },
  {
    id: 3,
    company: 'Mergen IT',
    position: 'Software Engineer',
    period: 'Jan 2019 – Aug 2021',
    location: 'Remote',
    achievements: [
      'Developed Kafka-based microservices architecture',
      'Implemented lazy loading and Webpack optimization',
      'Managed SQL databases with Docker containerization',
      'Deployed applications on OpenShift Kubernetes',
      'Achieved 90% test coverage using JUnit and Mockito'
    ],
    technologies: ['Kafka', 'Microservices', 'Docker', 'Kubernetes', 'JUnit', 'Mockito']
  }
];

export const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const toggleExperience = (experienceId: number) => {
    setExpandedExperience(expandedExperience === experienceId ? null : experienceId);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-8">Professional Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <Card 
            key={experience.id}
            className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader 
              className="cursor-pointer"
              onClick={() => toggleExperience(experience.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {experience.position}
                  </CardTitle>
                  <div className="flex items-center space-x-4 mt-2">
                    <h3 className="text-lg text-blue-400 font-medium">{experience.company}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{experience.location}</p>
                </div>
                {expandedExperience === experience.id ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </CardHeader>
            
            {expandedExperience === experience.id && (
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-green-600/20 text-green-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
