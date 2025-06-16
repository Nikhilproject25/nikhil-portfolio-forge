
import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Links } from '@/components/Links';
import { Contact } from '@/components/Contact';
import { ScheduleMeeting } from '@/components/ScheduleMeeting';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'links', 'contact'];
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
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <section id="hero">
        <Hero onNavigate={scrollToSection} />
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <About />
      </section>

      <section id="skills" className="py-20">
        <Skills />
      </section>

      <section id="projects" className="py-20 bg-gray-50">
        <Projects />
      </section>

      <section id="links" className="py-20">
        <Links />
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <Contact />
      </section>

      <ScheduleMeeting />
    </div>
  );
};

export default Index;
