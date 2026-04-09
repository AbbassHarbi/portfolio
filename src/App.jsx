import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { portfolioData } from './data/data.js';
import { validateSchema } from './data/schema.js';
import { useRoleStrategy } from './hooks/useRoleStrategy.js';

// Section imports
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { SOCMethodology } from './components/sections/SOCMethodology';
import { Contact } from './components/sections/Contact';

import './index.css';

function App() {
  const { sectionOrder } = useRoleStrategy('engineer'); // Defaults to engineer layout

  useEffect(() => {
    // 1. Data Schema Verification
    validateSchema(portfolioData);

    // 2. Intersection Observer for Scroll Animations
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: observer.unobserve(entry.target); // Unobserve if only animate once
        }
      });
    };
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // 3. Handle hash deep linking on mount
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    return () => observer.disconnect();
  }, []);

  // Content Strategy mapping
  const renderSection = (id) => {
    switch(id) {
      case 'hero': return <Hero key="hero" data={portfolioData.hero} />;
      case 'about': return <About key="about" data={portfolioData.about} />;
      case 'skills': return <Skills key="skills" data={portfolioData.skills} />;
      case 'projects': return <Projects key="projects" data={portfolioData.projects} id="projects" title="Featured Projects" />;
      case 'labs': return <Projects key="labs" data={portfolioData.labs} id="labs" title="Labs & Writeups" />;
      case 'experience': return <Experience key="experience" data={portfolioData.experience} />;
      case 'certifications': return <Certifications key="certifications" data={portfolioData.certifications} />;
      case 'soc_methodology': return <SOCMethodology key="soc_methodology" data={portfolioData.soc_methodology} />;
      case 'contact': return <Contact key="contact" data={portfolioData.contact} />;
      default: return null;
    }
  };

  return (
    <HelmetProvider>
      <div className="portfolio-app">
        <Helmet>
          <html lang="en" />
          <title>{portfolioData.hero?.name || "Portfolio"} | {portfolioData.hero?.title || "Security Professional"}</title>
          <meta name="description" content={portfolioData.hero?.short_description} />
          <meta property="og:title" content={`${portfolioData.hero?.name} | ${portfolioData.hero?.title}`} />
          <meta property="og:description" content={portfolioData.hero?.short_description} />
          <meta property="og:type" content="website" />
        </Helmet>

        <Navbar data={portfolioData} />

        <main>


          {sectionOrder.map(renderSection)}
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
