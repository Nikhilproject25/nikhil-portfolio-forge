
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin } from 'lucide-react';

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
  }
];

export const Links = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Connect With Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
        
        {/* LeetCode Special Highlight */}
        <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-8 text-center text-white animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">🏆 LeetCode Profile</h3>
          <p className="text-lg mb-6">
            Check out my problem-solving skills and algorithmic thinking
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-orange-600 hover:bg-gray-100"
            asChild
          >
            <a href="https://leetcode.com/u/nU9UHSuW4E/" target="_blank" rel="noopener noreferrer">
              View LeetCode Profile
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
