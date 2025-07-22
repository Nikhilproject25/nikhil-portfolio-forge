
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { AITools } from '@/components/AITools';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Links } from '@/components/Links';
import { Contact } from '@/components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'ai-tools', 'experience', 'projects', 'education', 'links', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-gray-800 text-white p-2 rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Always visible on desktop, sliding on mobile */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64
        transform lg:transform-none transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      </div>
      
      {/* Main Content - Always offset by sidebar width on desktop */}
      <main className="flex-1 lg:ml-0 overflow-y-auto">
        <section id="about" className="min-h-screen p-4 md:p-6 lg:p-8 pt-16 lg:pt-8">
          <About />
        </section>

        <section id="skills" className="min-h-screen p-4 md:p-6 lg:p-8 bg-gray-800/50">
          <Skills />
        </section>

        <section id="ai-tools" className="min-h-screen p-4 md:p-6 lg:p-8">
          <AITools />
        </section>

        <section id="experience" className="min-h-screen p-4 md:p-6 lg:p-8 bg-gray-800/50">
          <Experience />
        </section>

        <section id="projects" className="min-h-screen p-4 md:p-6 lg:p-8">
          <Projects />
        </section>

        <section id="education" className="min-h-screen p-4 md:p-6 lg:p-8 bg-gray-800/50">
          <Education />
        </section>

        <section id="links" className="min-h-screen p-4 md:p-6 lg:p-8">
          <Links />
        </section>

        <section id="contact" className="min-h-screen p-4 md:p-6 lg:p-8 bg-gray-800/50">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
