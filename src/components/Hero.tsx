
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const handleDownloadResume = () => {
    // Placeholder for resume download
    console.log('Resume download requested');
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ2g2UbVl_WK9r5JlBqO9GpFKVQC2YpXOHSO2WM6zfE7WLnK7_QHvR6XwSLpOTsJhMcqEGqI', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-primary">Nikhil Kumar</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8">
              Full Stack Developer | Backend Engineer | 5+ Years Experience
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl">
              I solve real-world business problems through scalable backend systems 
              and real-time cloud integration. Passionate about clean architecture 
              and delivering robust solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => onNavigate('projects')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleDownloadResume}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleScheduleMeeting}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
              >
                Schedule a Meeting
              </Button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/lovable-uploads/701c4f21-f9f2-4793-830e-4aa9ab43485e.png" 
                  alt="Nikhil Kumar - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => onNavigate('about')}
          className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </div>
  );
};
