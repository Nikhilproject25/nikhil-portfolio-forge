
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Code, Download } from 'lucide-react';

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
    icon: Code,
    color: 'bg-gray-900 hover:bg-gray-800'
  },
  {
    title: 'Resume',
    description: 'Download my complete resume and portfolio',
    url: '/lovable-uploads/9692eb79-8dc1-4541-8dfe-dca47d7f65fb.png',
    icon: Download,
    color: 'bg-orange-600 hover:bg-orange-700',
    isDownload: true
  }
];

export const Links = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Connect With Me
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link, index) => {
            const IconComponent = link.icon;
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
                    className={`w-full text-white ${link.color} transition-colors duration-200`}
                    asChild={!link.isDownload}
                  >
                    {link.isDownload ? (
                      <a 
                        href={link.url} 
                        download="Nikhil_Kumar_Resume.png"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full text-white"
                      >
                        Download {link.title}
                      </a>
                    ) : (
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        Visit {link.title}
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
