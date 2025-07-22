
import { Mail, Phone, MapPin, Github, Linkedin, Download, Code } from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">About Me</h2>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content - Full width on mobile, 2/3 on desktop */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="prose prose-lg text-gray-300 leading-relaxed space-y-6">
            <p className="text-base md:text-lg lg:text-xl">
              Experienced full stack engineer with 5+ years delivering enterprise-grade, scalable backend systems 
              and cloud-native solutions across financial services and technology sectors. Expert in architecting 
              robust microservices using Java, Spring Boot, REST APIs, AWS, Docker, and distributed data pipelines 
              that handle millions of transactions daily.
            </p>
            
            <p className="text-sm md:text-base lg:text-lg">
              On a daily basis, I leverage cutting-edge AI tools including <strong>ChatGPT</strong>, <strong>Claude</strong>, 
              <strong>GitHub Copilot</strong>, and <strong>Gemini</strong> to accelerate development workflows, optimize code architecture, 
              and solve complex technical challenges. This AI-enhanced approach enables me to deliver solutions 
              <strong> 40% faster</strong> while maintaining enterprise-level quality and security standards.
            </p>
            
            <p className="text-sm md:text-base lg:text-lg">
              I specialize in transforming complex business requirements into clean, maintainable code architectures. 
              My expertise spans from real-time data processing systems to interactive web applications, 
              always focusing on scalability, performance, and user experience. Whether debugging production issues 
              at airports or implementing multi-agent AI workflows, I bring both technical depth and practical 
              problem-solving skills to every project.
            </p>
            
            <div className="bg-blue-600/10 border border-blue-600/20 rounded-lg p-4 lg:p-6 mt-8">
              <p className="text-sm md:text-base lg:text-lg font-medium text-blue-400 italic">
                "I solve real-world business problems through scalable backend systems, 
                real-time cloud integration, and AI-enhanced development practices that 
                accelerate innovation while maintaining enterprise reliability."
              </p>
            </div>
          </div>
        </div>
        
        {/* Profile card - Stacked on mobile, sidebar on desktop */}
        <div className="bg-gray-800 rounded-lg p-4 md:p-6 order-1 lg:order-2">
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
            <img 
              src="/lovable-uploads/701c4f21-f9f2-4793-830e-4aa9ab43485e.png" 
              alt="Nikhil Kumar" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center space-x-3 text-gray-300 text-sm md:text-base">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
              <a href="mailto:nikhilpersonall2299@gmail.com" className="hover:text-blue-400 transition-colors break-all">
                nikhilpersonall2299@gmail.com
              </a>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-300 text-sm md:text-base">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
              <a href="tel:+14793438881" className="hover:text-blue-400 transition-colors">
                +1 (479) 343-8881
              </a>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-300 text-sm md:text-base">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
              <span>United States</span>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://github.com/Nikhilproject25" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/nikhil-k-bb6304228/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="https://leetcode.com/u/nU9UHSuW4E/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                >
                  <Code className="w-4 h-4 md:w-5 md:h-5" />
                  <span>LeetCode</span>
                </a>
              </div>
              
              <div className="mt-3">
                <a 
                  href="/lovable-uploads/9692eb79-8dc1-4541-8dfe-dca47d7f65fb.png" 
                  download="Nikhil_Kumar_Resume.png"
                  className="inline-flex items-center justify-center space-x-2 bg-green-600 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm md:text-base w-full"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
