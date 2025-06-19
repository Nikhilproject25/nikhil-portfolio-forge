
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
      'Designed and implemented RESTful APIs using Spring Boot for seamless front-end/back-end integration',
      'Used JWT for secure authentication and authorization, ensuring robust data protection',
      'Led the adoption of JUnit and Mockito, achieving 90% unit test coverage',
      'Implemented S3 event notifications to trigger Lambda functions for real-time file processing',
      'Designed and optimized PostgreSQL relational database schemas, improving query performance and data integrity',
      'Extracted and processed data from XML, CSV, and other file formats for analytics and reporting',
      'Deployed and managed Java applications on AWS EC2',
      'Established LDAP connections for secure and seamless user access management',
      'Integrated Flyway with PostgreSQL Server to manage schema changes across databases',
      'Utilized OpenSearch to monitor application logs',
      'Implemented authentication and authorization using Spring Security',
      'Used React to display dynamic data retrieved from PostgreSQL via backend APIs, ensuring real-time updates',
      'Designed and implemented dynamic email templates and notification systems',
      'Collaborated with the UI team to design and develop interactive dashboards using ReactJS',
      'Developed and optimized complex SQL scripts for data retrieval, transformation, and reporting',
      'Integrated React applications with JWT for secure access and session management with Spring Security',
      'Set up and maintained CI/CD pipelines using Jenkins and GitHub Actions for Java applications',
      'Integrated Flyway with Spring Boot applications to synchronize database migrations',
      'Implemented cron jobs for scheduled data extraction and transformation',
      'Documented technical workflows, APIs, and ETL processes for knowledge sharing'
    ],
    technologies: ['Spring Boot', 'AWS', 'ReactJS', 'PostgreSQL', 'Jenkins', 'JWT', 'GIT', 'Flyway', 'Maven', 'Agile', 'Junit', 'REST API']
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
      'Applied SOLID principles and Test-Driven Development practices',
      'Integrated with Docker and Kubernetes',
      'Experience of using Git/Bitbucket, Maven, related tools',
      'Designed and implemented RESTful APIs to support backend operations, ensuring scalability and maintainability',
      'Strong experience and knowledge of real-time data analytics using Spark Streaming and Kafka',
      'Expertise in Core Java concepts like Collections, Exception Handling, Multi-Threading, and Java I/O',
      'Collaborated with business stakeholders to gather requirements and provide end-to-end solutions using Agile best practices'
    ],
    technologies: ['Spring Boot', 'Junit', 'Kafka', 'Spark', 'GCP', 'MongoDB', 'Cosmos DB', 'OAuth2', 'TDD', 'Docker', 'Kubernetes']
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
      'Achieved 90% test coverage using JUnit and Mockito',
      'Created batch processing jobs using Spring Batch to handle large-scale data processing efficiently',
      'Performed data validation using SQL scripts to ensure data accuracy and integrity during ETL workflows',
      'Implemented authentication and authorization using Spring Security, ensuring secure user access',
      'Hands-on experience with real-time messaging and streaming technologies such as Kafka to handle high-throughput data pipelines',
      'Developed interactive user interfaces using JavaScript and React.js'
    ],
    technologies: ['Kafka', 'Microservices', 'Docker', 'Kubernetes', 'JUnit', 'Mockito', 'Maven', 'React.js']
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
