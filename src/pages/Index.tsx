
import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { AITools } from '@/components/AITools';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'ai-tools', 'projects', 'experience', 'education', 'contact'];
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
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex">
      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main className="flex-1 ml-64 overflow-y-auto">
        <section id="about" className="min-h-screen p-8">
          <About />
        </section>

        <section id="skills" className="min-h-screen p-8 bg-gray-800/50">
          <Skills />
        </section>

        <section id="ai-tools" className="min-h-screen p-8">
          <AITools />
        </section>

        <section id="projects" className="min-h-screen p-8 bg-gray-800/50">
          <Projects />
        </section>

        <section id="experience" className="min-h-screen p-8">
          <Experience />
        </section>

        <section id="education" className="min-h-screen p-8 bg-gray-800/50">
          <Education />
        </section>

        <section id="contact" className="min-h-screen p-8">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
