
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">About Me</h2>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="prose prose-lg text-gray-300 leading-relaxed">
            <p className="text-lg lg:text-xl mb-6">
              Experienced full stack engineer with 5+ years delivering enterprise-grade, scalable backend systems 
              and cloud-native solutions across financial services and technology sectors. Expert in architecting 
              robust microservices using Java, Spring Boot, REST APIs, AWS, Docker, and distributed data pipelines 
              that handle millions of transactions daily.
            </p>
            
            <p className="text-base lg:text-lg mb-6">
              I specialize in transforming complex business requirements into clean, maintainable code architectures. 
              My approach combines traditional software engineering excellence with cutting-edge AI tools—leveraging 
              GitHub Copilot daily for code optimization, architecture reviews, and rapid prototyping.
              This AI-enhanced workflow allows me to deliver solutions 40% faster while maintaining enterprise-level 
              quality standards.
            </p>
            
            <div className="bg-blue-600/10 border border-blue-600/20 rounded-lg p-4 lg:p-6 mt-8">
              <p className="text-base lg:text-lg font-medium text-blue-400 italic">
                "I solve real-world business problems through scalable backend systems, 
                real-time cloud integration, and AI-enhanced development practices that 
                accelerate innovation while maintaining enterprise reliability."
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 order-1 lg:order-2">
          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
            <img 
              src="/lovable-uploads/701c4f21-f9f2-4793-830e-4aa9ab43485e.png" 
              alt="Nikhil Kumar" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
              <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 flex-shrink-0" />
              <a href="mailto:nikhilpersonall2299@gmail.com" className="hover:text-blue-400 transition-colors break-all">
                nikhilpersonall2299@gmail.com
              </a>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
              <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 flex-shrink-0" />
              <a href="tel:+14793438881" className="hover:text-blue-400 transition-colors">
                +1 (479) 343-8881
              </a>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
              <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 flex-shrink-0" />
              <span>United States</span>
            </div>
            
            <div className="pt-4 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://github.com/Nikhilproject25" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors text-sm lg:text-base"
                >
                  <Github className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/nikhil-k-bb6304228/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors text-sm lg:text-base"
                >
                  <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
              
              <div className="mt-3">
                <a 
                  href="https://leetcode.com/u/nU9UHSuW4E/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-600 text-white px-3 lg:px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm lg:text-base w-full sm:w-auto text-center"
                >
                  LeetCode Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
