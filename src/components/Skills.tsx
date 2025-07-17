
const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    title: 'Frameworks',
    skills: ['Spring Boot', 'Hibernate', 'Node.js', 'React.js', 'Angular']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'CosmosDB']
  },
  {
    title: 'DevOps & Infrastructure',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'GitHub Actions']
  },
  {
    title: 'Cloud Platforms',
    skills: ['AWS (Lambda, EC2, S3)', 'GCP (App Engine, Cloud Functions)', 'Azure']
  },
  {
    title: 'Other Technologies',
    skills: ['Kafka', 'Spark', 'Flyway', 'JUnit', 'Mockito', 'TDD', 'Agile', 'CI/CD']
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
              {category.skills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-blue-600/20 text-blue-300 px-3 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-blue-600/30 transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
