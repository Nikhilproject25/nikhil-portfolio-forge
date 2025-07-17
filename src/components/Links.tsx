
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Download, Code2 } from 'lucide-react';

const links = [
  {
    title: 'GitHub',
    description: 'Check out my code repositories and contributions',
    url: 'https://github.com/Nikhilproject25',
    icon: Github,
    color: 'bg-gray-900 hover:bg-gray-800'
  },
  {
    title: 'LinkedIn',
    description: 'Connect with me professionally',
    url: 'https://www.linkedin.com/in/nikhil-k-bb6304228/',
    icon: Linkedin,
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    title: 'LeetCode',
    description: 'Check out my problem-solving skills and algorithmic thinking',
    url: 'https://leetcode.com/u/nU9UHSuW4E/',
    icon: Code2,
    color: 'border-gray-300 text-gray-700 hover:bg-gray-50'
  }
];

export const Links = () => {
  const handleResumeDownload = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/lovable-uploads/cac8a9dc-69bb-447c-8c40-9c1e4d3128ba.png';
    link.download = 'Nikhil_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Connect With Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            const isOutline = link.title === 'LeetCode';
            return (
              <Card 
                key={link.title}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gray-100">
                    <IconComponent className="w-8 h-8 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {link.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{link.description}</p>
                  <Button 
                    className={`w-full transition-colors duration-200 ${
                      isOutline 
                        ? `border ${link.color} border-gray-300 bg-transparent` 
                        : `text-white ${link.color}`
                    }`}
                    variant={isOutline ? "outline" : "default"}
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      Visit {link.title}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Resume Download Button */}
        <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-8 text-center text-white animate-fade-in mb-8">
          <h3 className="text-2xl font-bold mb-4">📄 Download My Resume</h3>
          <p className="text-lg mb-6">
            Get a detailed overview of my experience and qualifications
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-orange-600 hover:bg-gray-100"
            onClick={handleResumeDownload}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};
