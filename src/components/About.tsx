
export const About = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-xl leading-relaxed mb-6">
            I'm a passionate Full Stack Developer with a strong focus on backend engineering, 
            bringing over 5+ years of professional experience in building scalable, high-performance 
            applications that solve real-world business challenges.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            My expertise lies in creating robust backend systems using <strong>Java</strong> and 
            <strong> Spring Boot</strong>, designing and implementing <strong>RESTful APIs</strong>, 
            and architecting databases with <strong>PostgreSQL</strong>. I have extensive experience 
            with cloud platforms including <strong>AWS</strong> and <strong>GCP</strong>, utilizing 
            services like Lambda, EC2, S3, and BigQuery to build scalable solutions.
          </p>
          
          <p className="text-lg leading-relaxed mb-8">
            I believe in clean architecture, maintainable code, and continuous learning. 
            My approach to development focuses on understanding business requirements deeply 
            and translating them into efficient, scalable technical solutions. Whether it's 
            optimizing database queries, implementing microservices, or setting up CI/CD pipelines, 
            I'm committed to delivering excellence in every project.
          </p>
          
          <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
            <p className="text-lg font-medium text-gray-800 italic">
              "I solve real-world business problems through scalable backend systems 
              and real-time cloud integration."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
