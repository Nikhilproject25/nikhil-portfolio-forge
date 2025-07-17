import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-blue-500">
          <img 
            src="/lovable-uploads/701c4f21-f9f2-4793-830e-4aa9ab43485e.png" 
            alt="Nikhil Kumar - Full Stack Developer"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Nikhil Kumar</h1>
        <p className="text-xl text-blue-400 mb-2">Full Stack Developer & Backend Engineer</p>
        <p className="text-gray-300 whitespace-nowrap">nikhilpersonal279@gmail.com</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
          <p className="text-gray-300 leading-relaxed">
            Experienced in full lifecycle software development, from analysis to implementation 
            and testing. Strong proficiency in designing and developing object-oriented and web-based 
            enterprise applications. Deep understanding of JAVA/J2EE technologies. Successfully 
            delivered high-quality solutions for diverse industries. Experience in software 
            development, system design, and project management.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Core Competencies</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Full Stack Development (Java, Spring Boot, React)</li>
            <li>• Cloud Technologies (AWS, GCP, Azure)</li>
            <li>• Database Design & Optimization</li>
            <li>• Microservices Architecture</li>
            <li>• DevOps & CI/CD Implementation</li>
            <li>• API Development & Integration</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
        <p className="text-lg mb-6">
          Let's discuss how I can contribute to your next project
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:nikhilpersonal279@gmail.com"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Get In Touch
          </a>
          <a 
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2g2UbVl_WK9r5JlBqO9GpFKVQC2YpXOHSO2WM6zfE7WLnK7_QHvR6XwSLpOTsJhMcqEGqI"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Schedule Meeting
          </a>
        </div>
      </div>
    </div>
  );
};
