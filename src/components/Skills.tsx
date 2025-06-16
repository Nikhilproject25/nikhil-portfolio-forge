
const skillCategories = [
  {
    title: 'Backend Development',
    skills: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices']
  },
  {
    title: 'Databases',
    skills: ['SQL', 'PostgreSQL', 'BigQuery', 'Database Design']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (Lambda, EC2, S3)', 'GCP', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'PySpark', 'Maven', 'Jenkins', 'Linux']
  }
];

export const Skills = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-primary hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
