
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                I'm always interested in discussing new opportunities, 
                collaborating on exciting projects, or just having a 
                conversation about technology and development.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-semibold">📧</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a 
                    href="mailto:nikhilpersonall2299@gmail.com"
                    className="text-primary hover:underline"
                  >
                    nikhilpersonall2299@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-semibold">📱</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a 
                    href="tel:+14793438811"
                    className="text-primary hover:underline"
                  >
                    +1 (479) 343-8811
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-semibold">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">United States</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
