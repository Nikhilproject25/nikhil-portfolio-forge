
import { 
  Coffee, Database, Cloud, Code, Globe, Cpu, 
  Settings, GitBranch, Package, TestTube, 
  Server, Container, Wrench, Play, Shield
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: Coffee },
      { name: 'Python', icon: Code },
      { name: 'JavaScript', icon: Globe },
      { name: 'TypeScript', icon: Globe },
      { name: 'SQL', icon: Database }
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Spring Boot', icon: Coffee },
      { name: 'Hibernate', icon: Database },
      { name: 'Node.js', icon: Server },
      { name: 'React.js', icon: Globe },
      { name: 'Angular', icon: Globe }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'CosmosDB', icon: Database }
    ]
  },
  {
    title: 'DevOps & Infrastructure',
    skills: [
      { name: 'Docker', icon: Container },
      { name: 'Kubernetes', icon: Container },
      { name: 'Jenkins', icon: Settings },
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub Actions', icon: Play }
    ]
  },
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS (Lambda, EC2, S3)', icon: Cloud },
      { name: 'GCP (App Engine, Cloud Functions)', icon: Cloud },
      { name: 'Azure', icon: Cloud }
    ]
  },
  {
    title: 'Other Technologies',
    skills: [
      { name: 'Kafka', icon: Server },
      { name: 'Spark', icon: Cpu },
      { name: 'Flyway', icon: Database },
      { name: 'JUnit', icon: TestTube },
      { name: 'Mockito', icon: TestTube },
      { name: 'TDD', icon: Shield },
      { name: 'Agile', icon: Settings },
      { name: 'CI/CD', icon: Play }
    ]
  }
];

export const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title}
            className="bg-gray-800 rounded-lg p-4 md:p-6 hover:bg-gray-750 transition-colors duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill) => {
                const IconComponent = typeof skill === 'string' ? Code : skill.icon;
                const skillName = typeof skill === 'string' ? skill : skill.name;
                return (
                  <div 
                    key={skillName}
                    className="bg-blue-600/20 text-blue-300 px-3 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600/30 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{skillName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
